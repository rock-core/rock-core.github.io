---
section: Setting up a New Project
title: Configuration files for tasks
sort_info: 400
---

_rock-browse_ or _rock-inspect_ can help you to find existing tasks you might want to include
in your bundle. For example, try _rock_inspect -t camera_ to get a list of
all available tasks associated with "camera".

The tasks you include into your bundle are configured using a YAML file.
To create a new configuration file, do:

~~~
oroconf extract taskname::Task
~~~

The new template file is generated in the _config/orogen_ subfolder of the bundle,
with a file name that matches the oroGen model name (here,
_config/orogen/taskname::Task.yml_)
