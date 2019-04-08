---
title: Installation
sort_info: 50
---

This page explains how to install Rock and where to look for more
information (tutorials, ...).

Level of support
----------------
This section lists the operating systems where Rock is _well tested_, is _untested_ and where the status is _unknown_.
For _well tested_ operating systems, our build server makes sure that Rock builds
fine, and it is known to be actively used. _Untested_ operating systems have
had users (so, it did work at some point), but it is unknown whether it is
still being actively used. Finally, _unknown status_ operating systems are OS's where
Rock should work, but we have had no known report of its success or failure.

### Well tested OS's

| ![Ubuntu](install/ubuntu.png) | Latest LTS and Latest non-LTS. We let 6 months after a LTS release before deprecating the previous LTS. |
| ![Debian](install/debian.png) | testing or unstable |

### Experimental OS's

| ![Gentoo](install/gentoo.gif) | Last known working version end of 2011 |
| ![Arch](install/arch.png) | Last known working version end of 2013 |
| ![OpenSuse](install/opensuse.png) | Beta state, started 2014 |
| ![Fedora](install/fedora.png) | Last known working version 2012 |

Feel free to ask on the mailing list to ask for support for porting to another System.
Please let us know any experience if you are using one of the above listed OS's.

#### Legal Comments
This site is not affiliated with or endorsed by the Fedora Project.
The Gentoo logo is a trademark of Gentoo Foundation Inc. and the rock-robotic framework is not part
of the Gentoo project, and is not and is not directed or managed by Gentoo Foundation, Inc. 
Similar statements are true for all listed logos and systems. The Robot
Construction Kit itself is independent from the operation systems and maintained on its own.

### Status for other 

| Other Linux distributions | Should work fine. No osdeps. |
| MacOS X &copy; | Known to have problems. No osdeps. |

Installation: the easy way
--------------------------

 1. Make sure that the Ruby interpreter is installed on your machine. Rock
    requires ruby 2.3 or higher, which is provided on Debian and Ubuntu by
    the ruby2.3 package.

    ~~~
    ruby --version
    ~~~

 2. Create and "cd" into the directory in which you want to install the toolchain.
 3. To build the core system of the latest release, use this
    [bootstrap.sh](https://raw.githubusercontent.com/rock-core/buildconf/master/bootstrap.sh)
    script. Save it in the folder you just created. For other options, see
    below.

    **There is an important note for long-term Orocos users.** See the red box
    below.

 4. In a console, run
    
    ~~~
    sh bootstrap.sh
    ~~~

    If the command fails (1) report the problem / error to
    [the rock-users mailing
    list](http://www.dfki.de/mailman/cgi-bin/listinfo/rock-users),
    (2) whatever you try to fix it, restart the bootstrapping by doing.

    ~~~
    rm -rf autoproj
    sh bootstrap.sh
    ~~~

 5. Important: as the build tool tells you, you **must** load the generated env.sh script at the end of the build !!!
    * source it in your current console

      . ./env.sh
      {: .commandline}

    * but also add it to your .bashrc: append the following line at the end of
      $HOME/.bashrc
    
      . /path/to/the/directory/env.sh
      {: .commandline}

 6. Read the [autoproj guide for basic usage](autoproj/basic_usage.html) to know the
    basic operations of the build system. More bootstrapping documentation is
    also available [at the same place](autoproj/bootstrap.html)

Other bootstrapping options
---------------------------
 * **Build the master (development) version of rock**
   Use [this bootstrap.sh](https://raw.githubusercontent.com/rock-core/buildconf/master/bootstrap.sh) instead of the one listed above.
 * **Build all of rock**: Call 
  
   ~~~
   autoproj update --all-known-packages
   autoproj build --all-known-packages
   ~~~

   after your basic installation is finished. '''This is really meant for continuous integration servers''', it does not guarantee 
   a consistent installation if you forget to add '''--all-known-packages''' to any autoproj call.
   If you need a persistent complete installation of rock you must add all metapackages to your layout section.
 * **Create a custom version**
   Use one of the previous bootstrap scripts to install the base system and then
   cherry-pick the packages you want. Have a look at available packages, or
   search with 
   ~~~
   autoproj show xsens
   ~~~
   Add the names of the required packages to the
   layout section in autoproj/manifest. For instance,  if you want to
   get the [Xsens IMU component](https://github.com/rock-drivers/drivers-xsens_imu)
   the layout section should look like:

       layout:
          - rock.core
          - drivers/orogen/xsens_imu

<div class="warning" markdown="1">
**Important for existing Orocos users** The development workflow in Rock
currently disables the Orocos deployer and the RTT scripting language by
default, as they are quite expensive on the build times. Select "yes" at the
"compatibility with OCL" question during the build to reenable this.
</div>

Maintaining a Rock installation
----------------------------------

Once Rock is installed, you can update your installation by going to the root of the
installation folder and do

autoproj update <br/>
autoproj build
{: .commandline}

You might have to reload the env.sh script after that as well, to export updated environment variables into your current shell. Simply opening a new console will do the trick (given you have added sourcing env.sh to your .bashrc).

