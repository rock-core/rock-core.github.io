---
section: ROS/Rock bridge
title: Installation
sort_info: 50
---

All the code needed to bridge ROS and Rock is included in a separate package
set. To enable it, you will need to:

 - have a working ROS installation. The only supported distributions are
   groovy and later. Unfortunately, the catkin build system changed too much
   between fuerte and groovy to allow us to support fuerte.
 - be in an autoproj-based Rock installation

In your autoproj manifest (autoproj/manifest) the package_sets section should
contain (at least) the following: 

~~~
 - github: rock-core/package_set
 - gitorious: rock-ros/package_set
~~~

Back in the autoproj manifest (autoproj/manifest) add the following to the 
layout section: 

~~~
 - rock.ros
~~~

Now, update and build. This is going to rebuild the oroGen packages as needed

~~~
aup --all
amake --all
~~~


