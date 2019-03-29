---
section: Basics
title: Control through a Virtual Joystick
sort_info: 520
---
Tutorial Info
-----------

This tutorial will give you some hands-on experience on:

 * How to use a graphical widget to control the rolling rock.

_TODO Rewrite the tutorial using the task inspector_

Finding the right widget
-----------

_TODO Add as soon as it is integrated into the package directory_

Integrating it
-----------
Now that we found the widget we want to use, we need to integrate it.
Again, we therefore copy the runscript from the ['Simulate a Robot' tutorial](500_simulate_a_robot.html)
to a file called _rockTutorial2.rb_ and modify it as follows. 

We start by adding Vizkit to the section with the required packages:

~~~ ruby
require 'vizkit'
~~~

The _Orocos.run_ block should be updated as follows:

~~~ruby
## load and add the 3d plugin for the rock
Orocos.run 'rock_tutorial::RockTutorialControl' => 'rock_control' do
  
  rockControl = Orocos.name_service.get 'rock_control'  
  rockControl.start

  ## Create a sample writer for a port ##
  sampleWriter = rockControl.motion_command.writer
  
  # get a sample that can be written to the port
  # If you know the sample type (here, base::MotionCommand2D),
  # an alternative syntax is
  #   sample = Types::Base::MotionCommand2D.new
  sample = sampleWriter.new_sample

  # create a widget that emulates a joystick
  joystickGui = Vizkit.default_loader.create_widget('VirtualJoystick')

  #show it
  joystickGui.show
  
  ## glue the widget to the task writer
  joystickGui.connect(SIGNAL('axisChanged(double, double)')) do |x, y|
    sample.translation = x
    sample.rotation = - y.abs() * Math::atan2(y, x.abs())
    sampleWriter.write(sample)
  end

  Vizkit.display rockControl.pose, 
  :widget => Vizkit.default_loader.RigidBodyStateVisualization

  Vizkit.exec

end
~~~

The _joystickGui_ part will open the desired widget and give us a handle to it.
Using the handle, we can register a code block in the run-loop that gets
executed whenever the widget emits a QT-Signal. Since this code needs a handle
to the _rockControl_ task, we need the the _Orocos.name_service.get_ line that
initializes _rockControl_.

Whenever the signal 'axisChanged' is emitted by the widget, the
code inside the 'do / end' is executed. One can think of it like a callback function. We use this 'callback' 
to modify a MotionCommand2D in respect to the axis values and write it to our _rockControl_ task. Thus, we
provide the 'glue'-code between the widget and the Task and also show the power of the scripting interface.

Run it
-----------
If you execute 

~~~ text
ruby rockTutorial2.rb
~~~

two windows should pop up. One with our virtual joystick, the other one should be the well known visualization of the rock. 
Clicking and dragging the joystick should also make the rock move.

