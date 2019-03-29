---
section: Setting up a New Project
title: Bundles in Rock
sort_info: 300
---

Bundles in Rock are collections of all files needed to run a particular robot
system.

In practice, bundles are Rock packages and they - most importantly - contain
the following:

 * ruby scripts (to run sets of components) - contained in the _scripts/_ folder
 * configuration files for oroGen tasks - contained in the _config/orogen/_ folder
 * log files - contained in the _logs/_ folder
 * ...

See [the wiki](http://rock.opendfki.de/wiki/WikiStart/Standards/RG7) for more
information on bundles.

Creating the bundle
-----------------

The name of the bundle will be the basename of the directory created. Bundles
cannot created anywhere, use the `acd` command to change in the root-directory
of the Rock-Installation and then enter the `bundles` directory. Creating
bundles is possible in all directories named in the environment variable
<tt>$ROCK_BUNDLE_PATH</tt>.

~~~
acd
cd bundles
rock-create-bundle my_new_bundle_name
~~~

The name of your bundle should, for logical reasons, equal the name of your
robot. Afterwards, you must tell Rock that this is the bundle you are currently
working on:

~~~
rock-bundle-default my_new_bundle_name
~~~
