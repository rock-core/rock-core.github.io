---
section: Build System
title: Bootstrapping
sort_info: 25
---

Bootstrapping
-------------
"Bootstrapping" means getting, building and installing autoproj before it can be used.
The canonical way is the following:

 * install Ruby by yourself. On Debian or Ubuntu, this is done with
   done with
```bash
      sudo apt-get install wget ruby
```

 * then, [download this script](../../autoproj_bootstrap) *in the directory where
   you want to create an autoproj installation*, and run it. This can be done with

```bash
      wget http://rock-robotics.org/autoproj_bootstrap
```

There are several options how to go on:

* `ruby autoproj_bootstrap`
* `ruby autoproj_bootstrap VCSTYPE URL`


After this: follow the instructions printed by the script

In the second example reference to a source code repository is given, in which
an autoproj configuration is stored (i.e. a directory in which a manifest is
present), you can bootstrap this configuration directly:

For instance, to build all packages made available by the Rock project,
do
  
```bash
      ruby autoproj_bootstrap git https://github.com/rock-core/buildconf-all.git
```


Additional options can be given for the version control system. For instance,

```bash   
      ruby autoproj_bootstrap git https://github.com/rock-core/buildconf.git branch=test
```

