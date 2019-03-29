---
secondsection: system
section: System Management
title: Naming Conventions
sort_info: 800
---

For the process of system modelling we find it very useful to stick to some naming conventions. 
These conventions facilitate a sharing of common functionalities and help to avoid nameclashes. 
They also allow a quick interpretation of what type of object the developer is dealing with and where is originates from. 
By providing a consistent mapping between file structure and class/task name naming it will make the code readable for users and make it easy (short enough) for lazy developers.
Note, however, that the naming schema is not enforce, but needs to actively applied by model developers.

The following naming conventions should be followed when working with Syskit: 

Component level: Orogen (RTT) / ROS Tasks
------------------------------------------

 * OroGen::ObjectDetection::Task
   * OroGen::ObjectDetection::Deployments::Test
 * ROS::ObjectDetection::Task
   * ROS::ObjectDetection::Launchers::Test

 
Supervision level
------------------------------------------------
In order to disambiguate between compositions, services, etc. the following convention should
be kept:

 * NameOfBundle::Compositions::ObjectDetection
 * NameOfBundle::Services::ObjectDetection
 * NameOfBundle::Devices::ObjectDetection
 * NameOfBundle::Profiles::ObjectDetection
 * NameOfBundle::Actions::ObjectDetection
 * NameOfBundle::Tasks::ObjectDetection


File system level
----------------------------------------

The following folder structure below the models folder is recommended:

 * models/orogen/
 * models/ros/
 * models/compositions/
 * models/services/
 * models/actions/
 * models/profiles/
 * models/devices/

Using 'rock-bundle-create' will adhere the given naming conventions.


Reuse and specialization
--------------------------

In order to deal with specializations that are needed for individual robots the following schema is applied:
 * put all generic definitions / functionality into one of the top folders
 * add a robot specific subfolder and create a subfolder equalling the robot topfolder's name
 * create a corresponding loading file in the robot folder

For example for a robot called 'artemis' that means:
 * models/profiles/manipulation.rb
 * models/profiles/manipulation/dual_arm.rb
 * models/profiles/artemis/manipulation.rb
 * models/profiles/artemis/manipulation/dual_arm.rb

The schema allows to maintain the custom ruby behaviour, i.e. the file 
'profiles/manipulation.rb' and 'profiles/artemis/manipulation.rb' loads the subfolders contents.

~~~
require 'profiles/manipulation'
require 'profiles/artemis/manipulation/dual_arm'

module Artemis
    module Profiles
        profiles 'Manipulation' do
        end
    end
end
~~~

When using the functionality, e.g. in an action interface 'models/actions/artemis/manipulation.rb'

~~~
require 'profiles/artemis/manipulation'
require 'actions/manipulation'

module Artemis
    module Actions
        class Manipulation < Roby::Actions::Interface
            use_profile Artemis::Profiles::Manipulation

            ...
        end
    end
end
~~~
 


