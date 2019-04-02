---
section: Contributing
title: Sending Your Changes
---

Abstract
--------
This page covers how to send modifications to code and documentation to the Rock
developers, assuming that you did not get a direct commit access to the
packages you modify.

The Rock repositories have been moved from gitorious to github - they can now be
found here: <https://github.com/rock-core>. 

The other pages in this Contributing section cover the other aspects: how the
documentation is done, how to create new packages, ...

The main part of this page will deal with how to use github to submit changes
to the Rock codebase and documentation.

This tutorial will teach you how to:

 * Create your own working copy of a Rock repository,
 * configure your Rock installation accordingly and
 * create pull requests.

Create your own working copy
----------------------------
To create your own working copy of one of the Rock repositories, fork the 
_rock-core_ repository - this is done as follows:

Go to the _rock-core_ repository on github - for example 
<https://github.com/rock-core/gui-vizkit3d>. Click "fork" to create your own
working copy of the repository - the corresponding URL will be
_https://github.com/your_name/gui-vizkit3d_.

Configure your Rock installation
--------------------------------
As you are now working on your own forked version of the _rock-core_ repository,
you need to configure your Rock installation accordingly.

First "cd" into your repository and add a new remote:

~~~ text
git remote add your_name https://github.com/your_name/your_repository.git
~~~

Then, "cd" into your _dev/autoproj/_ folder and update the file _overrides.yml_
as follows:

~~~ yml
  - your_repository:
    branch: master
    url: git@github.com:your_name/your_repository.git
    push_to: git@github.com:your_name/your_repository.git
~~~

From now on, changes you make to your repository are pushed to the respective 
branch of your forked repository.

Create pull requests
--------------------
Once you have changed some of the code, tested the result and want to commit
your changes to the corresponding _rock-core_ repository, you need to create
a pull request. The standard procedure is as follows:


 * Go to your forked repository on github.
 * Click _Pull Requests_.
 * Click _New pull request_.
 * You will now see see the changes you committed to your forked repository and 
   which are not yet in the corresponding _rock-core_ repository.
 * Click _Create pull request_.
 * You should give your pull request a meaningful name and enter a comment,
   so that the people checking your pull request easily understand what changes
   you made.
 * Click _Create pull request_. A mail will be sent out to notify the
   core developers. Any comments on the request will alert you back via e-mail 
   as well.