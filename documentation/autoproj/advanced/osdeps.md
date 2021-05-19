---
section: Build System
subsection: Advanced Usage
title: osdeps - Operating System Dependencies
sort_info: 300
---

Autoproj offers the possibility to use OS-packaged software instead of building
it, to leverage the underlying platform's software. This page details how it's
done.

Defining dependencies between source packages and OS packages
-------------------------------------------------------------

If a source package depends on an OS package, this dependency should be declared
in the same way than between  source packages:

 * either by adding the <depend package="os_dep_name" /> tag in the
   manifest.xml, or
 * by calling #depends_on("os_dep_name") in the autobuild file.

The os_dep_name above being the name of the package as declared in the OS
dependencies files defined below.

During the build, autoproj looks first for OS dependencies. If no dependency is
available for that particular platform, it will then look for a source package
definition and build it. If none of the two exists, an error is returned.

OS packages
-----------

The general format of the an OS package definition:

~~~~~~~~~~~~~~~~~~
name:
    distribution1,distribution2:
        version1,version2: [package_name1, package_name2]
~~~~~~~~~~~~~~~~~~

Where 'name' is the name used to declare the dependency (see above), `distribution`
the name of the distribution and <tt>version</tt> the
distribution's version, and <tt>package_name</tt> the name of the package in
the underlying OS.

Since the osdeps file is a YAML file, it could also be written

~~~~~~~~~~~~~~~~~~
name:
    distribution1,distribution2:
        version1,version2:
            - package_name1
            - package_name2
~~~~~~~~~~~~~~~~~~

If only one package needs to be installed, one can use the shortcut

~~~~~~~~~~~~~~~~~~
name:
    distribution1,distribution2:
        version1,version2: package_name
~~~~~~~~~~~~~~~~~~

Finally, if the package name is version-independent, the version can be omitted:


~~~~~~~~~~~~~~~~~~
name:
    distribution1,distribution2: package_name
~~~~~~~~~~~~~~~~~~

Examples:

~~~~~~~~~~~~~~~~~~
ruby:
    debian,ubuntu:
        9.04,10.04,sid: libruby-dev
boost:
    debian:
        - libboost1.38-dev
        - libboost-program1.38-dev
    ubuntu:
        9.04,10.04: libboost-dev
~~~~~~~~~~~~~~~~~~

At the time of this writing, autoproj is able to install packages on
Ubuntu/Debian and Gentoo. Support for other operating systems can be easily
added, so [contact me](http://github.com/doudou) if you want to do so.

RubyGems packages
-----------------

RubyGems packages are OS-independent. In the osdeps files, they can be referred
to by replacing the OS distribution name by 'gem'.

Example:

~~~~~~~~~~~~~~~~~~
hoe:
    gem:
        hoe
~~~~~~~~~~~~~~~~~~

If the OS dep name and the RubyGems name are the same, one can use the shortcut

~~~~~~~~~~~~~~~~~~
hoe: gem
~~~~~~~~~~~~~~~~~~

Note that it is possible to use a mixture of RubyGems and OS packages. For
instance, the following snippet will both install the gnuplot package and the
gnuplot RubyGems whenever an osdep on 'gnuplot' is declared.

~~~~~~~~~~~~~~~~~~
gnuplot:
    gem: gnuplot
    debian: gnuplot
~~~~~~~~~~~~~~~~~~

In addition to that, RubyGems can be pinned/restricted to certain versions.
For example, the following snippet would pin 'hoe' to versions below 2.x

~~~~~~~~~~~~~~~~~~
hoe:
    gem:
        hoe<2.0.0
~~~~~~~~~~~~~~~~~~

Ignoring some dependencies
--------------------------
It is possible that, on some operating systems, a given package should simply be
ignored. To do so, simply use the 'ignore' keyword. Example:

~~~~~~~~~~~~~~~~~~
gnuplot:
    gem: gnuplot
    debian: ignore
    ubuntu: gnuplot
~~~~~~~~~~~~~~~~~~


Relationship between source packages and osdeps packages
--------------------------------------------------------

In autoproj, osdeps and source ("normal") packages are seen the same way.

However, since installing the OS package is less work (and much faster) than
building it ourselves, the following prioritization exists:

 * if both a normal autoproj package and an osdeps package exist, the osdeps
   package takes precedence.
 * on OSes where no osdeps package exist, the autoproj package will be built
   instead

This default scheme requires the source package and the osdeps package to have
the same name. Moreover, one might want on some occasions to build the source
package (for instance because it is slightly more up-to-date).

This source package / osdeps package relationship can be fine tuned using
Autoproj.add_osdeps_overrides. This is usually done either locally in
autoproj/overrides.rb, or on a package set basis in the package set's
overrides.rb.

A different name can be given for the source package that can replace the
osdeps. For instance, the following code snippet, when added to overrides.rb,
will cause autoproj to look for external/opencv instead of opencv if the opencv
osdeps is not available on the current machine.

~~~ ruby
Autoproj.add_osdeps_overrides 'opencv', :package => 'external/opencv'
~~~

One can force the usage of the source package for the local installation
(completely ignoring the osdeps package)

~~~ ruby
Autoproj.add_osdeps_overrides 'opencv', :package => 'external/opencv', :force => true
~~~

