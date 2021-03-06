---
section: Advanced
title: Deployments
sort_info: 100
---

Conceptually, the execution of Orocos tasks is split into two parts. First, the
task encapsulates the so-called "computation" part of the component. It is
declared and developed, but _how_ it should be executed is left out. Second, it
is __deployed__: The task is associated with a _trigger mechanism_ that defines
when the task's computation should be executed.

Until now, you have used deployments implicitly as, for each task, oroGen
defines a default deployment for convenience reasons. The default deployment
execution schema is given in the task description by statements like
[periodic(1.0)](../tutorials/110_basics_create_component.html) or
[port_driven](../tutorials/130_basics_connect_components.html).
Furthermore, the default deployments add a logging component by default and each
task is run as a separate process.

In order to allow a more flexible definition of the execution schema and putting multiple
tasks into one process, explicit deployments can also be specified. They
override the default deployment of the task. For further information, also have a look at the
[documentation page](../orogen/deployment.html).

Deployments are specified in an orogen project, the same way as tasks are.
Even though it is possible to define deployments in the same orogen file as the
tasks, that is not recommended. Best practice is to create a separate oroGen
project for all your deployments, in order to keep an overview of how all the
tasks on your system are defined.

Defining deployments
--------------------

Let's get back to the [initial messenger example](../tutorials/110_basics_create_component.html).
The periodicity was set to 1.0 seconds for the default deployment. Let's assume
now that the task should be executed at a higher rate. Create a new oroGen
project (for instance in tutorials/orogen):

~~~ text
rock-create-orogen messenger_deployments
~~~

When asked for dependencies, give the message producer and consumer task projects, e.g.:

~~~ text
tutorials/orogen/message_producer, tutorials/orogen/message_consumer
~~~

In the file *messenger_deployments.orogen* delete the content and add the following:

~~~ ruby
name "messenger_deployments"

using_task_library "message_producer"

deployment "faster_message_producer" do 
    task("producer","message_producer::Task").periodic(0.1)
end
~~~

Finalize the package creation with (in the same directory than the oroGen file)

~~~
rock-create-orogen
~~~

And, finally, the usual

~~~ text
amake
~~~

Usage in Ruby scripts
---------------------
The defined deployments are used in Ruby scripts by replacing the model_name =>
task_name syntax with the deployment name. Moreover, the `Orocos.name_service.get` stanzas
must use the task names declared in the specific deployments (first argument to
the "task" statement, as e.g. producer above). Using the explicit deployment above
for the [messenger example
script](../tutorials/130_basics_connect_components.html), while keeping the default
deployment for the consumer would be done with:

~~~ ruby
require 'orocos'
require 'readline'

include Orocos
Orocos.initialize

Orocos.run 'faster_message_producer',
    'messages::Consumer' => 'consumer' do  
  
  # When using explicit deployments, the name that should be used in
  # Orocos.name_service.get must be the same name than given as first argument of the
  # "task" statement in the deployment definition
  producer = Orocos.name_service.get 'producer'
  consumer = Orocos.name_service.get 'consumer'
  
  # Never assume that a component supports being reconnected
  # at runtime, it might not be the case
  #
  # If you have the choice, connect before the component is
  # even configured
  producer.messages.connect_to consumer.messages
  
  producer.configure
  producer.start
  
  consumer.configure
  consumer.start
  
  Readline::readline("Press ENTER to exit\n")
 
end
~~~

