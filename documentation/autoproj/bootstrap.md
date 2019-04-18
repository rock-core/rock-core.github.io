---
section: Build System
title: Bootstrapping
sort_info: 25
---

### Bootstrapping Autoproj


"Bootstrapping" means getting, building and installing autoproj before it can be used.
The canonical way is the following:

0. Install Ruby by yourself. On Debian or Ubuntu, this is done with done with

        sudo apt-get install wget ruby

0. [Download this script](../../autoproj_bootstrap) *in the directory where you want to create an autoproj installation*. This can be done with

        http://rock-robotics.org/autoproj_bootstrap
    
    After this, the help function is availabe:

        ruby autoproj_bootstrap --help

**There two options how to go on:**

0. Install autoproj only: 

        ruby autoproj_bootstrap

0. Install with an existing configuration from a Version Control System:

        ruby autoproj_bootstrap VCSTYPE URL

      Where VCSTYPE is one of:
      **git,git-lfs,svn,cvs,hg,darcs,archive (tar, tgz, etc.)**.

**When Running this: follow the instructions printed by the script**

### Examples:

In the second example above, a reference to a source code repository is given, in which an autoproj configuration is stored (i.e. a directory in which a manifest is present), you can bootstrap this configuration directly:

For instance, to build all packages made available by the Rock project, do
  
```
ruby autoproj_bootstrap git https://github.com/rock-core/buildconf-all.git
```


Additional options can be given for the version control system. For instance,

```bash
ruby autoproj_bootstrap git https://github.com/rock-core/buildconf.git branch=test
```

