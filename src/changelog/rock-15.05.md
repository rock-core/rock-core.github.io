---
section: Changelog
title: "Release Notes for rock-15.05"
sort_info: 15.05
---

<script type="text/javascript">
$(document).ready(function () {
    $("tr.from_commits").hide()
    $("tr.to_commits").hide()
    $("a.commit_event_toggler").click(function (event) {
            var eventId = $(this).attr("id");

            $("#commits_" + eventId).toggle();
            event.preventDefault();
            });
});
</script>

New stuff
---------

Obsoleted package and functionality
-----------------------------------


129 new packages
-------------------------------------

    * base/admin_scripts

    * base/doc

    * bundles/rock_auv

    * control/hysteresis_model

    * control/orogen/cart_ctrl_wdls

    * control/orogen/torque_estimator

    * control/orogen/trajectory_generation

    * drivers/act_schilling

    * drivers/alt_imagenex

    * drivers/camera_aravis

    * drivers/camera_ids

    * drivers/ctd_seabird

    * drivers/dps_desertstar_ssp1

    * drivers/imu_imar

    * drivers/imu_stim300

    * drivers/mbeam_imagenex

    * drivers/orogen/act_schilling

    * drivers/orogen/alt_imagenex

    * drivers/orogen/camera_aravis

    * drivers/orogen/camera_ids

    * drivers/orogen/ctd_seabird

    * drivers/orogen/dps_desertstar_ssp1

    * drivers/orogen/imu_imar

    * drivers/orogen/imu_stim300

    * drivers/orogen/kinect

    * drivers/orogen/mbeam_imagenex

    * drivers/orogen/phidgets

    * drivers/orogen/phins_ixsea

    * drivers/orogen/pressure_paroscientific

    * drivers/orogen/tofcamera_mesasr

    * drivers/orogen/ucm_schilling

    * drivers/orogen/velodyne_lidar

    * drivers/phins_ixsea

    * drivers/pressure_paroscientific

    * drivers/tofcamera_mesasr

    * drivers/ucm_schilling

    * external/box2d

    * external/kdtree

    * external/minizip

    * external/opencv

    * external/tinyxml

    * gui/map2d

    * gui/point_cloud

    * gui/pose3d_editor

    * gui/qcam_calib

    * gui/rock_webapp

    * gui/vizkit_3d_plugins

    * image_processing/orogen/projection

    * image_processing/orogen/video_streamer

    * image_processing/orogen/virtual_view

    * image_processing/orogen/viso2

    * image_processing/projection

    * image_processing/viso2

    * log4cpp

    * multiagent/fipa_acl

    * multiagent/fipa_services

    * multiagent/orogen/fipa_services

    * ocl

    * planning/arvand_herd

    * planning/bfsf

    * planning/fast_downward

    * planning/fd_cedalion

    * planning/fd_uniform

    * planning/lama

    * planning/motion_planning_libraries

    * planning/orogen/heading_calculator

    * planning/orogen/motion_planning_libraries

    * planning/orogen/pddl_planner

    * planning/orogen/simple_path_planner

    * planning/orogen/traversability

    * planning/pddl_planner

    * planning/randward

    * planning/simple_path_planner

    * simulation/configmaps

    * simulation/lib_manager

    * simulation/mars/app

    * simulation/mars/common/cfg_manager

    * simulation/mars/common/data_broker

    * simulation/mars/common/graphics/osg_lines

    * simulation/mars/common/graphics/osg_text

    * simulation/mars/common/graphics/osg_text_factory

    * simulation/mars/common/gui/cfg_manager_gui

    * simulation/mars/common/gui/data_broker_gui

    * simulation/mars/common/gui/data_broker_plotter

    * simulation/mars/common/gui/lib_manager_gui

    * simulation/mars/common/gui/log_console

    * simulation/mars/common/gui/main_gui

    * simulation/mars/common/utils

    * simulation/mars/doc

    * simulation/mars/entity_generation/entity_factory

    * simulation/mars/entity_generation/smurf

    * simulation/mars/graphics

    * simulation/mars/gui

    * simulation/mars/interfaces

    * simulation/mars/plugins/Text3D

    * simulation/mars/plugins/connexion_plugin

    * simulation/mars/plugins/constraint_plugin

    * simulation/mars/scene_loader

    * simulation/mars/scripts/cmake

    * simulation/mars/sim

    * simulation/mars/smurf_loader

    * simulation/mars/viz

    * simulation/ode

    * simulation/orogen/mars

    * simulation/orogen/mars_addons

    * simulation/smurf_parser

    * slam/ceres_solver

    * slam/eslam

    * slam/gmapping

    * slam/orogen/eslam

    * slam/orogen/gmapping

    * slam/orogen/local_mapper

    * slam/orogen/localization

    * slam/orogen/north_seeker

    * slam/orogen/pose_estimation

    * slam/orogen/terrain_estimator

    * slam/polygonnet

    * slam/pose_estimation

    * slam/terrain_estimator

    * tools/autobuild

    * tools/autoproj

    * tools/class_loader

    * tools/orogen_metadata

    * tools/orogen_ros

    * tools/oropy_bridge

    * tools/port_proxy

    * tools/rbind

    * tools/rest_api

    * tools/telemetry





Could not generate a changelog for 11 packages as their
version control does not support it: 
    [drivers/aria](#drivers/aria)

    [drivers/phidgets](#drivers/phidgets)

    [external/aruco](#external/aruco)

    [external/cminpack](#external/cminpack)

    [external/gexf](#external/gexf)

    [external/lemon](#external/lemon)

    [external/ompl](#external/ompl)

    [external/sisl](#external/sisl)

    [external/yaml-cpp](#external/yaml-cpp)

    [slam/flann](#slam/flann)

    [slam/pcl](#slam/pcl)


<table class="package_status">



       <tr class="name" id="0">
         <th>tools/rtt</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="1"> 82 commits</a> in ["1632f05 vor 8 Wochen Sylvain Joyeux Merge remote-tracking branch 'autobuild/rock1408'", "41d943d vor 3 Monaten Johannes Meyer Revert \"rtt: Use virtual destructor for OperationCaller\"", "abb8ece vor 3 Monaten Johannes Meyer rtt: Add virtual destructor to OperationCallerBaseInvoker", "ca7e510 vor 3 Monaten Johannes Meyer rtt: Use virtual destructor for OperationCaller", "c810beb vor 3 Monaten Johannes Meyer timer: make internal struct RTT::os::Timer::TimerInfo CopyConstructible and Assignable", "7021075 vor 3 Monaten Johannes Meyer cmake: suppress cmake policy CMP0042 warning in CMake >= 3.0.2", "1277069 vor 3 Monaten Johannes Meyer useorocos: fixed INSTALL_NAME_DIR and MAXOSX_RPATH target properties for Mac OS", "a480b03 vor 4 Monaten Johannes Meyer globals: added ORO_WAIT_ABS and ORO_WAIT_REL to the GlobalsRepository", "cd42a68 vor 4 Monaten Johannes Meyer package.xml: unified maintainer name in package.xml across orocos-toolchain packages", "0839426 vor 4 Monaten Johannes Meyer Merge remote-tracking branch 'origin/fix-corba-read-old-data'", "9348ca8 vor 4 Monaten Johannes Meyer corba: fixed reading from remote channels with old data and copy_old_data flag set to false (fix #83)", "8cc95bc vor 4 Monaten Peter Soetens types: fixup BoolTypeInfo, cleanup PrimitiveTypeInfo", "a4659bb vor 4 Monaten Peter Soetens types: only add a streamFactory if use_ostream is true", "ce86e85 vor 4 Monaten Ruben Smits os/thread: fix error log to printout the correct timeout", "79e27b5 vor 4 Monaten Peter Soetens Merge pull request #80 from jmachowinski/master", "a0cae66 vor 4 Monaten Peter Soetens Merge pull request #76 from meyerj/timer-waitfor", "60804c1 vor 4 Monaten Peter Soetens Merge pull request #78 from meyerj/fix-fda-blocking-trigger", "099844a vor 4 Monaten Peter Soetens Merge pull request #79 from meyerj/destdir-support-same-workspace", "eb9952e vor 5 Monaten Sylvain Joyeux re-add return statement removed during refactoring in 0e1ead2db346", "d602953 vor 5 Monaten Janosch Machowinski Allow the construction of an uninitialized TaskContextProxy", "b5dbad1 vor 5 Monaten Johannes Meyer useorocos: do not add devel/lib/pkg-config to the PKG_CONFIG_PATH anymore", "e8205f6 vor 5 Monaten Johannes Meyer useorocos: extended DESTDIR support for the case where multiple packages are built in the same cmake workspace", "2cb095d vor 6 Monaten Johannes Meyer tests: added test for waiting on timers", "71dcf82 vor 6 Monaten Johannes Meyer timers: waitFor(id) and waitForUntil(id) return true if the timer was killed or the activity was stopped", "b3417aa vor 6 Monaten Johannes Meyer extras: fixed blocking trigger() calls on FileDescriptorActivities if the step() function takes too long", "0e1ead2 vor 6 Monaten Ruben Smits corba: Make RemoteChannelElement re-entrant", "85c6d86 vor 6 Monaten Johannes Meyer timers: added os::Timer::waitFor(...) and os::Timer::waitForUntil(...) member functions", "b0057c7 vor 6 Monaten Johannes Meyer Merge remote-tracking branch 'origin/toolchain-2.8'", "b6f6681 vor 6 Monaten Johannes Meyer timers: fixed index checks in os::Timer", "cd905c7 vor 6 Monaten Johannes Meyer scripting: disable events in StateMachine::deactivate() and add mutex protection to StateMachine::activate()", "d8a1e9b vor 6 Monaten Johannes Meyer scripting: first check if we are still loaded before we try to remove ourselves", "549fb5d vor 6 Monaten Johannes Meyer Merge pull request #75 from meyerj/carray-assignment-operators", "762e8b6 vor 6 Monaten Johannes Meyer Merge pull request #74 from meyerj/new-activity-constructor", "5386a6b vor 6 Monaten Johannes Meyer Merge pull request #73 from meyerj/taskcontext-clear-service-requester", "f4818ea vor 6 Monaten Johannes Meyer Merge remote-tracking branch 'origin/fix-61'", "2e9c752 vor 6 Monaten Johannes Meyer Merge remote-tracking branch 'origin/self-deactivating-fsm'", "c950f74 vor 6 Monaten Johannes Meyer types: added assignment operators to RTT::types::carray to assign from boost::serialization::array and boost::array", "9e1a481 vor 6 Monaten Ruben Smits Merge pull request #71 from meyerj/slave-activity-fixes", "201d075 vor 7 Monaten Johannes Meyer Added an Activity(int scheduler, int priority, ...) constructor", "a967e11 vor 7 Monaten Johannes Meyer taskcontext: also clear service requester in TaskContext::clear()", "5b7c3e1 vor 7 Monaten Johannes Meyer Removed CHANGELOG.rst as it is not maintained anyway", "1e048b7 vor 7 Monaten Johannes Meyer bumped version to 2.8.0", "6b31420 vor 7 Monaten Johannes Meyer Merge branch 'slave-activity-fixes' of https://github.com/meyerj/rtt into toolchain-2.8", "2ab3e72 vor 7 Monaten Johannes Meyer ExecutionEngine: moved message forwarding to master to the top of ExecutionEngine::process()", "e6a3173 vor 7 Monaten Johannes Meyer ExecutionEngine: do not forward waitForMessagesInternal() and waitAndProcessMessages() calls to master engine", "bef7421 vor 7 Monaten Johannes Meyer rtt: moved isRunning() check from TaskContext::dataOnPort() to default TaskContext::dataOnPortHook()", "0d694e7 vor 7 Monaten Johannes Meyer tests: added slave_test to test operation calls between components running in a SlaveActivity", "d3744a0 vor 7 Monaten Johannes Meyer Fixed setting of the master engine when assigning a SlaveActivity to an ExecutionEngine", "4a847c3 vor 7 Monaten Ruben Smits Merge pull request #51 from orocos-toolchain/destdir-support", "85fc9d3 vor 7 Monaten Johannes Meyer cmake/useorocos: added DESTDIR support for staged installs", "d03c66b vor 7 Monaten Johannes Meyer rtt: do not invoke user callbacks or trigger the component if the component is not running", "05ba033 vor 7 Monaten Johannes Meyer tests: fixed \"will be initialized after\" compiler warning in state_test", "d5bf2ae vor 7 Monaten Peter Soetens corba: update to new SendStatus enum which contains CollectFailure", "8fac4b1 vor 7 Monaten Johannes Meyer Merge pull request #65 from orocos-toolchain/provide_engine_in_corba_operation_calls", "c2571c7 vor 7 Monaten Johannes Meyer Merge pull request #62 from meyerj/global-service-named-plugin", "9445321 vor 7 Monaten Peter Soetens Merge pull request #60 from orocos-toolchain/fix-59", "a05ecf2 vor 7 Monaten Peter Soetens Merge pull request #55 from snrkiwi/support-orocos-application-tests", "5f1b6a3 vor 7 Monaten Peter Soetens Merge pull request #68 from psoetens/master", "b3376aa vor 8 Monaten Sylvain Joyeux corba: explicitly provide GlobalEngine::Instance when calling operations", "45d832d vor 8 Monaten Ruben Smits scripting: protect FSM execution and tracing against self-deactivation", "07a4609 vor 8 Monaten Peter Soetens scripting: allow parsing of keywords at the end of a parse string.", "dc81be1 vor 8 Monaten Peter Soetens operations: force user to set the caller when collecting is done.", "69c2a8d vor 9 Monaten Johannes Meyer tests: extended plugins_test to include global service plugins", "92665f1 vor 9 Monaten Johannes Meyer plugin: added ORO_GLOBAL_SERVICE_NAMED_PLUGIN for service plugins that want to install a global service", "2a012d6 vor 9 Monaten Johannes Meyer ExecutionEngine: forward incoming messages to a master ExecutionEngine if set", "12bbd59 vor 9 Monaten Johannes Meyer Revert \"SlaveActivity\"", "702e416 vor 9 Monaten Johannes Meyer Revert \"extras/slaveactivity: fix potential segfault if no master activity is set\"", "52359a0 vor 9 Monaten Johannes Meyer Merge remote-tracking branch 'origin/rpath-mess'", "765dcc2 vor 9 Monaten Johannes Meyer Merge remote-tracking branch 'meyerj/fix-timers'", "611cb63 vor 9 Monaten Johannes Meyer Merge remote-tracking branch 'origin/toolchain-2.7' into HEAD", "7710627 vor 9 Monaten Johannes Meyer Merge remote-tracking branch 'origin/slave_activity_fix' into HEAD", "a67f142 vor 9 Monaten Johannes Meyer Merge remote-tracking branch 'meyerj/operationcaller-assignment-fix' into HEAD", "dafaeab vor 9 Monaten Ruben Smits cmake: add all standard rpaths for all kind of targets to all kind of targes", "4a38023 vor 9 Monaten Stephen Roderick cmake: Support configuring executables for Orocos", "e1559a6 vor 9 Monaten Ruben Smits extras/slaveactivity: fix potential segfault if no master activity is set", "da1d206 vor 10 Monaten Peter Soetens ports: add clear() to inputport operation object.", "1f3f0a1 vor 10 Monaten Peter Soetens scripting: correctly implement asynchronous events in eventTransition", "9e20c1a vor 10 Monaten Peter Soetens scripting: more robust state change scheduling in order to avoid races", "cf9955b vor 10 Monaten Peter Soetens docs: fix bug in documenting port reads + add section on level events with ports.", "8c1988a vor 10 Monaten Johannes Meyer timers: use rtos_get_time_ns() directly bypassing the TimeService", "8128106 vor 10 Monaten Johannes Meyer Do not reset the caller engine in OperationCaller assignment", "546bc38 vor 11 Monaten Johannes Meyer useorocos: fixed recursive orocos_find_package() for rosbuild packages"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_1"><td>
         
           1632f05 vor 8 Wochen Sylvain Joyeux Merge remote-tracking branch 'autobuild/rock1408'<br/>
         
           41d943d vor 3 Monaten Johannes Meyer Revert "rtt: Use virtual destructor for OperationCaller"<br/>
         
           abb8ece vor 3 Monaten Johannes Meyer rtt: Add virtual destructor to OperationCallerBaseInvoker<br/>
         
           ca7e510 vor 3 Monaten Johannes Meyer rtt: Use virtual destructor for OperationCaller<br/>
         
           c810beb vor 3 Monaten Johannes Meyer timer: make internal struct RTT::os::Timer::TimerInfo CopyConstructible and Assignable<br/>
         
           7021075 vor 3 Monaten Johannes Meyer cmake: suppress cmake policy CMP0042 warning in CMake &gt;= 3.0.2<br/>
         
           1277069 vor 3 Monaten Johannes Meyer useorocos: fixed INSTALL_NAME_DIR and MAXOSX_RPATH target properties for Mac OS<br/>
         
           a480b03 vor 4 Monaten Johannes Meyer globals: added ORO_WAIT_ABS and ORO_WAIT_REL to the GlobalsRepository<br/>
         
           cd42a68 vor 4 Monaten Johannes Meyer package.xml: unified maintainer name in package.xml across orocos-toolchain packages<br/>
         
           0839426 vor 4 Monaten Johannes Meyer Merge remote-tracking branch 'origin/fix-corba-read-old-data'<br/>
         
           9348ca8 vor 4 Monaten Johannes Meyer corba: fixed reading from remote channels with old data and copy_old_data flag set to false (fix #83)<br/>
         
           8cc95bc vor 4 Monaten Peter Soetens types: fixup BoolTypeInfo, cleanup PrimitiveTypeInfo<br/>
         
           a4659bb vor 4 Monaten Peter Soetens types: only add a streamFactory if use_ostream is true<br/>
         
           ce86e85 vor 4 Monaten Ruben Smits os/thread: fix error log to printout the correct timeout<br/>
         
           79e27b5 vor 4 Monaten Peter Soetens Merge pull request #80 from jmachowinski/master<br/>
         
           a0cae66 vor 4 Monaten Peter Soetens Merge pull request #76 from meyerj/timer-waitfor<br/>
         
           60804c1 vor 4 Monaten Peter Soetens Merge pull request #78 from meyerj/fix-fda-blocking-trigger<br/>
         
           099844a vor 4 Monaten Peter Soetens Merge pull request #79 from meyerj/destdir-support-same-workspace<br/>
         
           eb9952e vor 5 Monaten Sylvain Joyeux re-add return statement removed during refactoring in 0e1ead2db346<br/>
         
           d602953 vor 5 Monaten Janosch Machowinski Allow the construction of an uninitialized TaskContextProxy<br/>
         
           b5dbad1 vor 5 Monaten Johannes Meyer useorocos: do not add devel/lib/pkg-config to the PKG_CONFIG_PATH anymore<br/>
         
           e8205f6 vor 5 Monaten Johannes Meyer useorocos: extended DESTDIR support for the case where multiple packages are built in the same cmake workspace<br/>
         
           2cb095d vor 6 Monaten Johannes Meyer tests: added test for waiting on timers<br/>
         
           71dcf82 vor 6 Monaten Johannes Meyer timers: waitFor(id) and waitForUntil(id) return true if the timer was killed or the activity was stopped<br/>
         
           b3417aa vor 6 Monaten Johannes Meyer extras: fixed blocking trigger() calls on FileDescriptorActivities if the step() function takes too long<br/>
         
           0e1ead2 vor 6 Monaten Ruben Smits corba: Make RemoteChannelElement re-entrant<br/>
         
           85c6d86 vor 6 Monaten Johannes Meyer timers: added os::Timer::waitFor(...) and os::Timer::waitForUntil(...) member functions<br/>
         
           b0057c7 vor 6 Monaten Johannes Meyer Merge remote-tracking branch 'origin/toolchain-2.8'<br/>
         
           b6f6681 vor 6 Monaten Johannes Meyer timers: fixed index checks in os::Timer<br/>
         
           cd905c7 vor 6 Monaten Johannes Meyer scripting: disable events in StateMachine::deactivate() and add mutex protection to StateMachine::activate()<br/>
         
           d8a1e9b vor 6 Monaten Johannes Meyer scripting: first check if we are still loaded before we try to remove ourselves<br/>
         
           549fb5d vor 6 Monaten Johannes Meyer Merge pull request #75 from meyerj/carray-assignment-operators<br/>
         
           762e8b6 vor 6 Monaten Johannes Meyer Merge pull request #74 from meyerj/new-activity-constructor<br/>
         
           5386a6b vor 6 Monaten Johannes Meyer Merge pull request #73 from meyerj/taskcontext-clear-service-requester<br/>
         
           f4818ea vor 6 Monaten Johannes Meyer Merge remote-tracking branch 'origin/fix-61'<br/>
         
           2e9c752 vor 6 Monaten Johannes Meyer Merge remote-tracking branch 'origin/self-deactivating-fsm'<br/>
         
           c950f74 vor 6 Monaten Johannes Meyer types: added assignment operators to RTT::types::carray to assign from boost::serialization::array and boost::array<br/>
         
           9e1a481 vor 6 Monaten Ruben Smits Merge pull request #71 from meyerj/slave-activity-fixes<br/>
         
           201d075 vor 7 Monaten Johannes Meyer Added an Activity(int scheduler, int priority, ...) constructor<br/>
         
           a967e11 vor 7 Monaten Johannes Meyer taskcontext: also clear service requester in TaskContext::clear()<br/>
         
           5b7c3e1 vor 7 Monaten Johannes Meyer Removed CHANGELOG.rst as it is not maintained anyway<br/>
         
           1e048b7 vor 7 Monaten Johannes Meyer bumped version to 2.8.0<br/>
         
           6b31420 vor 7 Monaten Johannes Meyer Merge branch 'slave-activity-fixes' of https://github.com/meyerj/rtt into toolchain-2.8<br/>
         
           2ab3e72 vor 7 Monaten Johannes Meyer ExecutionEngine: moved message forwarding to master to the top of ExecutionEngine::process()<br/>
         
           e6a3173 vor 7 Monaten Johannes Meyer ExecutionEngine: do not forward waitForMessagesInternal() and waitAndProcessMessages() calls to master engine<br/>
         
           bef7421 vor 7 Monaten Johannes Meyer rtt: moved isRunning() check from TaskContext::dataOnPort() to default TaskContext::dataOnPortHook()<br/>
         
           0d694e7 vor 7 Monaten Johannes Meyer tests: added slave_test to test operation calls between components running in a SlaveActivity<br/>
         
           d3744a0 vor 7 Monaten Johannes Meyer Fixed setting of the master engine when assigning a SlaveActivity to an ExecutionEngine<br/>
         
           4a847c3 vor 7 Monaten Ruben Smits Merge pull request #51 from orocos-toolchain/destdir-support<br/>
         
           85fc9d3 vor 7 Monaten Johannes Meyer cmake/useorocos: added DESTDIR support for staged installs<br/>
         
           d03c66b vor 7 Monaten Johannes Meyer rtt: do not invoke user callbacks or trigger the component if the component is not running<br/>
         
           05ba033 vor 7 Monaten Johannes Meyer tests: fixed "will be initialized after" compiler warning in state_test<br/>
         
           d5bf2ae vor 7 Monaten Peter Soetens corba: update to new SendStatus enum which contains CollectFailure<br/>
         
           8fac4b1 vor 7 Monaten Johannes Meyer Merge pull request #65 from orocos-toolchain/provide_engine_in_corba_operation_calls<br/>
         
           c2571c7 vor 7 Monaten Johannes Meyer Merge pull request #62 from meyerj/global-service-named-plugin<br/>
         
           9445321 vor 7 Monaten Peter Soetens Merge pull request #60 from orocos-toolchain/fix-59<br/>
         
           a05ecf2 vor 7 Monaten Peter Soetens Merge pull request #55 from snrkiwi/support-orocos-application-tests<br/>
         
           5f1b6a3 vor 7 Monaten Peter Soetens Merge pull request #68 from psoetens/master<br/>
         
           b3376aa vor 8 Monaten Sylvain Joyeux corba: explicitly provide GlobalEngine::Instance when calling operations<br/>
         
           45d832d vor 8 Monaten Ruben Smits scripting: protect FSM execution and tracing against self-deactivation<br/>
         
           07a4609 vor 8 Monaten Peter Soetens scripting: allow parsing of keywords at the end of a parse string.<br/>
         
           dc81be1 vor 8 Monaten Peter Soetens operations: force user to set the caller when collecting is done.<br/>
         
           69c2a8d vor 9 Monaten Johannes Meyer tests: extended plugins_test to include global service plugins<br/>
         
           92665f1 vor 9 Monaten Johannes Meyer plugin: added ORO_GLOBAL_SERVICE_NAMED_PLUGIN for service plugins that want to install a global service<br/>
         
           2a012d6 vor 9 Monaten Johannes Meyer ExecutionEngine: forward incoming messages to a master ExecutionEngine if set<br/>
         
           12bbd59 vor 9 Monaten Johannes Meyer Revert "SlaveActivity"<br/>
         
           702e416 vor 9 Monaten Johannes Meyer Revert "extras/slaveactivity: fix potential segfault if no master activity is set"<br/>
         
           52359a0 vor 9 Monaten Johannes Meyer Merge remote-tracking branch 'origin/rpath-mess'<br/>
         
           765dcc2 vor 9 Monaten Johannes Meyer Merge remote-tracking branch 'meyerj/fix-timers'<br/>
         
           611cb63 vor 9 Monaten Johannes Meyer Merge remote-tracking branch 'origin/toolchain-2.7' into HEAD<br/>
         
           7710627 vor 9 Monaten Johannes Meyer Merge remote-tracking branch 'origin/slave_activity_fix' into HEAD<br/>
         
           a67f142 vor 9 Monaten Johannes Meyer Merge remote-tracking branch 'meyerj/operationcaller-assignment-fix' into HEAD<br/>
         
           dafaeab vor 9 Monaten Ruben Smits cmake: add all standard rpaths for all kind of targets to all kind of targes<br/>
         
           4a38023 vor 9 Monaten Stephen Roderick cmake: Support configuring executables for Orocos<br/>
         
           e1559a6 vor 9 Monaten Ruben Smits extras/slaveactivity: fix potential segfault if no master activity is set<br/>
         
           da1d206 vor 10 Monaten Peter Soetens ports: add clear() to inputport operation object.<br/>
         
           1f3f0a1 vor 10 Monaten Peter Soetens scripting: correctly implement asynchronous events in eventTransition<br/>
         
           9e20c1a vor 10 Monaten Peter Soetens scripting: more robust state change scheduling in order to avoid races<br/>
         
           cf9955b vor 10 Monaten Peter Soetens docs: fix bug in documenting port reads + add section on level events with ports.<br/>
         
           8c1988a vor 10 Monaten Johannes Meyer timers: use rtos_get_time_ns() directly bypassing the TimeService<br/>
         
           8128106 vor 10 Monaten Johannes Meyer Do not reset the caller engine in OperationCaller assignment<br/>
         
           546bc38 vor 11 Monaten Johannes Meyer useorocos: fixed recursive orocos_find_package() for rosbuild packages<br/>
         
         </td></tr>
       
       



       <tr class="name" id="1">
         <th>tools/metaruby</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="2"> 7 commits</a> in ["3bd5d40 vor 8 Wochen Sylvain Joyeux be friendly to autoloaded modules", "d9e4450 vor 8 Wochen Sylvain Joyeux set myself as maintainer", "41880d3 vor 4 Monaten Sylvain Joyeux Merge pull request #5 from rock-core/minor_fixes", "3ad3b3f vor 4 Monaten Sylvain Joyeux html: accept #uri_for to return a URI without a leading slash", "f9de46a vor 4 Monaten Sylvain Joyeux html: refactor pageLinkClicked to be stricter w.r.t. the URIs interpretation", "8f53d58 vor 4 Monaten Sylvain Joyeux html: fix CSS definition for 'code' for rendering in qtwebkit", "ea0973f vor 4 Monaten Sylvain Joyeux html: use relative font sizes"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_2"><td>
         
           3bd5d40 vor 8 Wochen Sylvain Joyeux be friendly to autoloaded modules<br/>
         
           d9e4450 vor 8 Wochen Sylvain Joyeux set myself as maintainer<br/>
         
           41880d3 vor 4 Monaten Sylvain Joyeux Merge pull request #5 from rock-core/minor_fixes<br/>
         
           3ad3b3f vor 4 Monaten Sylvain Joyeux html: accept #uri_for to return a URI without a leading slash<br/>
         
           f9de46a vor 4 Monaten Sylvain Joyeux html: refactor pageLinkClicked to be stricter w.r.t. the URIs interpretation<br/>
         
           8f53d58 vor 4 Monaten Sylvain Joyeux html: fix CSS definition for 'code' for rendering in qtwebkit<br/>
         
           ea0973f vor 4 Monaten Sylvain Joyeux html: use relative font sizes<br/>
         
         </td></tr>
       
       



       <tr class="name" id="2">
         <th>tools/utilrb</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="3"> 75 commits</a> in ["ed4fae4 vor 8 Wochen Sylvain Joyeux Update manifest.xml", "50e620a vor 8 Wochen Sylvain Joyeux set myself as maintainer", "e3fb064 vor 3 Monaten alcantara09 Remove unintended merge of the event_loop/thread_pool cleanup", "d5e74b1 vor 3 Monaten alcantara09 fix handling of 'false' default values in Kernel.filter_options", "320ac9a vor 3 Monaten alcantara09 Merge pull request #12 from orocos-toolchain/fix_pkgconfig_error_message_on_version_constraint", "a1528d6 vor 4 Monaten Sylvain Joyeux fix handling of 'false' default values in Kernel.filter_options", "23280d7 vor 4 Monaten Sylvain Joyeux Merge pull request #12 from orocos-toolchain/fix_pkgconfig_error_message_on_version_constraint", "ca4db4f vor 4 Monaten Sylvain Joyeux add test-dependency on flexmock", "cae7c57 vor 4 Monaten Sylvain Joyeux event_loop: do not resolve the accessor right away if called for delayed work", "aafea95 vor 4 Monaten Sylvain Joyeux event_loop: provide the timer's finalize blocks with result and error", "964c50a vor 4 Monaten Sylvain Joyeux thread_pool: make #sync_task execute the task once after an already running one", "1572098 vor 4 Monaten Sylvain Joyeux event_loop: allow periodic_loop callers separate timeouts from break", "7acf19e vor 4 Monaten Sylvain Joyeux event_loop: make wait_for raise Timeout::Error if the timeout is reached", "3cf1567 vor 4 Monaten Sylvain Joyeux thread_pool: test for finished? early in Task#wait", "2c10bdd vor 4 Monaten Sylvain Joyeux thread_pool: fix interaction of sync_task and already queued tasks", "cf88579 vor 4 Monaten Sylvain Joyeux event_loop: fix AsyncTimer#start for a never-started timer", "b023d51 vor 4 Monaten Sylvain Joyeux thread_pool: create wait_for", "70cf6b0 vor 4 Monaten Sylvain Joyeux event_loop: add some more tracing", "d6a71ad vor 4 Monaten Sylvain Joyeux event_loop: allow to register callbacks on timers that will be executed once the timer finishes its execution", "25024b0 vor 4 Monaten Sylvain Joyeux event_loop: fix thread-safety of process_events(false)", "415c167 vor 4 Monaten Sylvain Joyeux event_loop: fix interaction of zero-period timers and process_all_pending_work", "df3ac92 vor 4 Monaten Sylvain Joyeux event_loop: refactor step into smaller processing methods", "0421363 vor 4 Monaten Sylvain Joyeux event_loop: un-hide the use of Time.now a bit more", "8552374 vor 4 Monaten Sylvain Joyeux event_loop: implement Timer#queue", "b642fc0 vor 4 Monaten Sylvain Joyeux event_loop: explicitly reset the timer in Timer#execute", "622720f vor 4 Monaten Sylvain Joyeux event_loop: simplify Timer#timeout?", "1606dc9 vor 4 Monaten Sylvain Joyeux event_loop: make wait_for use process_all_pending_work", "947a554 vor 4 Monaten Sylvain Joyeux event_loop: add some primitive tracing-to-logger facility", "af9d2d3 vor 4 Monaten Sylvain Joyeux event_loop: change style from hash to keyword arguments", "576cf8b vor 4 Monaten Sylvain Joyeux event_loop: add some synchronization API", "d45e4c6 vor 4 Monaten Sylvain Joyeux event_loop: make Forward raise right away if the accessor is not available even in the deferred case", "4f29637 vor 4 Monaten Sylvain Joyeux event_loop: accept any filter object in #on_error", "e25929c vor 4 Monaten Sylvain Joyeux event_loop: remove unneeded synchronization", "75810da vor 4 Monaten Sylvain Joyeux event_loop: add the queue option to async and periodic calls", "999405d vor 4 Monaten Sylvain Joyeux event_loop: fix delayed once blocks", "d801693 vor 4 Monaten Sylvain Joyeux event_loop: provide an API to call a timer synchronously", "a3af298 vor 4 Monaten Sylvain Joyeux event_loop: fix callback block being passed as block to deferred method", "1ca58bd vor 4 Monaten Sylvain Joyeux event_loop: major refactoring of the test suite", "971a2d4 vor 4 Monaten Sylvain Joyeux event_loop: implement EventLoop#process_all_pending_work", "5b2eb04 vor 4 Monaten Sylvain Joyeux event_loop: propagate the backtrace of the original exception when modifying it in the callback", "586f40d vor 4 Monaten Sylvain Joyeux thread_pool: fix synchronization when checking if a task is being used in #<<", "64b9c43 vor 4 Monaten Sylvain Joyeux thread_pool: warn about the caveats of Task#terminate!", "b08f1a1 vor 4 Monaten Sylvain Joyeux thread_pool: create end-of-work notification primitives", "eb0c3a1 vor 4 Monaten Sylvain Joyeux thread_pool: methods to disable/enable processing", "62caca8 vor 4 Monaten Sylvain Joyeux thread_pool: add some additional accessors", "a5c2e42 vor 4 Monaten Sylvain Joyeux thread_pool: there's really no need to test for shutdown? in #thread_main_loop", "e75c7e3 vor 4 Monaten Sylvain Joyeux thread_pool: properly synchronize access to @workers in #join", "899849b vor 4 Monaten Sylvain Joyeux thread_pool: remove unused variable", "b0e7c40 vor 4 Monaten Sylvain Joyeux thread_pool: minor documentation update", "8994a95 vor 4 Monaten Sylvain Joyeux thread_pool: we do need to synchronize on @mutex when modifying @mutex in spawned threads", "438e799 vor 4 Monaten Sylvain Joyeux thread_pool: guard #<< with Task#started? instead of Task#thread", "3c40777 vor 4 Monaten Sylvain Joyeux thread_pool: rework trimming and spawning logic", "85fbc03 vor 4 Monaten Sylvain Joyeux thread_pool: rename current_task to task in thread_execute_task", "8300372 vor 4 Monaten Sylvain Joyeux thread_pool: fix indentation", "5dbd0c8 vor 4 Monaten Sylvain Joyeux thread_pool: replace specific accounting for @spawned by @workers.size", "ce5b7a5 vor 4 Monaten Sylvain Joyeux thread_pool: refactor the main thread loop", "eced1bc vor 4 Monaten Sylvain Joyeux thread_pool: rewrite the test suite", "f14772b vor 4 Monaten Sylvain Joyeux test: add interaction fix between flexmock and minitest", "57cf7bf vor 4 Monaten Sylvain Joyeux PkgConfig#libs_only_other: include requires flags", "4820ceb vor 4 Monaten Sylvain Joyeux test: remove default library paths from cpkgconfig output when comparing", "ed93fc4 vor 4 Monaten Sylvain Joyeux test: run tests without -w", "2a9726c vor 4 Monaten Sylvain Joyeux set the git diff filter to ruby for *.rb", "31f6910 vor 4 Monaten Sylvain Joyeux Merge pull request #15 from jakobs/master", "60857e0 vor 4 Monaten Jakob Schwendner logger: change to FATAL if BASE_LOG_LEVEL is DISABLE", "17768d6 vor 4 Monaten Sylvain Joyeux Merge pull request #16 from vbargsten/master", "1e19ec6 vor 4 Monaten Vinzenz Bargsten allow */lib64/* as pkg config directory", "4c7d572 vor 4 Monaten Jakob Schwendner fixed logger to allow passing of BASE_LOG_LEVEL=DISABLE", "86eb03c vor 5 Monaten Sylvain Joyeux pkgconfig: fix error when no match is found for a version constraint", "28419de vor 6 Monaten Sylvain Joyeux Merge pull request #11 from meyerj/manifest-cleanup", "67aa525 vor 6 Monaten Johannes Meyer Added missing os dependency facets and added run_depend hoe to package.xml", "d2e6837 vor 6 Monaten Johannes Meyer Updated manifest.xml and package.xml for autoproj/rosdep compatibility", "4d8183a vor 7 Monaten Sylvain Joyeux fix loading utilrb/module/is_singleton separately on ruby 1.9 and 2.0 (fixes #7)", "8dfc145 vor 7 Monaten Sylvain Joyeux Merge pull request #9 from orocos-toolchain/optimize_validate_options", "5bf202c vor 8 Monaten Sylvain Joyeux remove test that is meant to be in TC_Module", "c7979e1 vor 8 Monaten Sylvain Joyeux optimize Kernel.validate_options for the common \"no error\" case"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_3"><td>
         
           ed4fae4 vor 8 Wochen Sylvain Joyeux Update manifest.xml<br/>
         
           50e620a vor 8 Wochen Sylvain Joyeux set myself as maintainer<br/>
         
           e3fb064 vor 3 Monaten alcantara09 Remove unintended merge of the event_loop/thread_pool cleanup<br/>
         
           d5e74b1 vor 3 Monaten alcantara09 fix handling of 'false' default values in Kernel.filter_options<br/>
         
           320ac9a vor 3 Monaten alcantara09 Merge pull request #12 from orocos-toolchain/fix_pkgconfig_error_message_on_version_constraint<br/>
         
           a1528d6 vor 4 Monaten Sylvain Joyeux fix handling of 'false' default values in Kernel.filter_options<br/>
         
           23280d7 vor 4 Monaten Sylvain Joyeux Merge pull request #12 from orocos-toolchain/fix_pkgconfig_error_message_on_version_constraint<br/>
         
           ca4db4f vor 4 Monaten Sylvain Joyeux add test-dependency on flexmock<br/>
         
           cae7c57 vor 4 Monaten Sylvain Joyeux event_loop: do not resolve the accessor right away if called for delayed work<br/>
         
           aafea95 vor 4 Monaten Sylvain Joyeux event_loop: provide the timer's finalize blocks with result and error<br/>
         
           964c50a vor 4 Monaten Sylvain Joyeux thread_pool: make #sync_task execute the task once after an already running one<br/>
         
           1572098 vor 4 Monaten Sylvain Joyeux event_loop: allow periodic_loop callers separate timeouts from break<br/>
         
           7acf19e vor 4 Monaten Sylvain Joyeux event_loop: make wait_for raise Timeout::Error if the timeout is reached<br/>
         
           3cf1567 vor 4 Monaten Sylvain Joyeux thread_pool: test for finished? early in Task#wait<br/>
         
           2c10bdd vor 4 Monaten Sylvain Joyeux thread_pool: fix interaction of sync_task and already queued tasks<br/>
         
           cf88579 vor 4 Monaten Sylvain Joyeux event_loop: fix AsyncTimer#start for a never-started timer<br/>
         
           b023d51 vor 4 Monaten Sylvain Joyeux thread_pool: create wait_for<br/>
         
           70cf6b0 vor 4 Monaten Sylvain Joyeux event_loop: add some more tracing<br/>
         
           d6a71ad vor 4 Monaten Sylvain Joyeux event_loop: allow to register callbacks on timers that will be executed once the timer finishes its execution<br/>
         
           25024b0 vor 4 Monaten Sylvain Joyeux event_loop: fix thread-safety of process_events(false)<br/>
         
           415c167 vor 4 Monaten Sylvain Joyeux event_loop: fix interaction of zero-period timers and process_all_pending_work<br/>
         
           df3ac92 vor 4 Monaten Sylvain Joyeux event_loop: refactor step into smaller processing methods<br/>
         
           0421363 vor 4 Monaten Sylvain Joyeux event_loop: un-hide the use of Time.now a bit more<br/>
         
           8552374 vor 4 Monaten Sylvain Joyeux event_loop: implement Timer#queue<br/>
         
           b642fc0 vor 4 Monaten Sylvain Joyeux event_loop: explicitly reset the timer in Timer#execute<br/>
         
           622720f vor 4 Monaten Sylvain Joyeux event_loop: simplify Timer#timeout?<br/>
         
           1606dc9 vor 4 Monaten Sylvain Joyeux event_loop: make wait_for use process_all_pending_work<br/>
         
           947a554 vor 4 Monaten Sylvain Joyeux event_loop: add some primitive tracing-to-logger facility<br/>
         
           af9d2d3 vor 4 Monaten Sylvain Joyeux event_loop: change style from hash to keyword arguments<br/>
         
           576cf8b vor 4 Monaten Sylvain Joyeux event_loop: add some synchronization API<br/>
         
           d45e4c6 vor 4 Monaten Sylvain Joyeux event_loop: make Forward raise right away if the accessor is not available even in the deferred case<br/>
         
           4f29637 vor 4 Monaten Sylvain Joyeux event_loop: accept any filter object in #on_error<br/>
         
           e25929c vor 4 Monaten Sylvain Joyeux event_loop: remove unneeded synchronization<br/>
         
           75810da vor 4 Monaten Sylvain Joyeux event_loop: add the queue option to async and periodic calls<br/>
         
           999405d vor 4 Monaten Sylvain Joyeux event_loop: fix delayed once blocks<br/>
         
           d801693 vor 4 Monaten Sylvain Joyeux event_loop: provide an API to call a timer synchronously<br/>
         
           a3af298 vor 4 Monaten Sylvain Joyeux event_loop: fix callback block being passed as block to deferred method<br/>
         
           1ca58bd vor 4 Monaten Sylvain Joyeux event_loop: major refactoring of the test suite<br/>
         
           971a2d4 vor 4 Monaten Sylvain Joyeux event_loop: implement EventLoop#process_all_pending_work<br/>
         
           5b2eb04 vor 4 Monaten Sylvain Joyeux event_loop: propagate the backtrace of the original exception when modifying it in the callback<br/>
         
           586f40d vor 4 Monaten Sylvain Joyeux thread_pool: fix synchronization when checking if a task is being used in #&lt;&lt;<br/>
         
           64b9c43 vor 4 Monaten Sylvain Joyeux thread_pool: warn about the caveats of Task#terminate!<br/>
         
           b08f1a1 vor 4 Monaten Sylvain Joyeux thread_pool: create end-of-work notification primitives<br/>
         
           eb0c3a1 vor 4 Monaten Sylvain Joyeux thread_pool: methods to disable/enable processing<br/>
         
           62caca8 vor 4 Monaten Sylvain Joyeux thread_pool: add some additional accessors<br/>
         
           a5c2e42 vor 4 Monaten Sylvain Joyeux thread_pool: there's really no need to test for shutdown? in #thread_main_loop<br/>
         
           e75c7e3 vor 4 Monaten Sylvain Joyeux thread_pool: properly synchronize access to @workers in #join<br/>
         
           899849b vor 4 Monaten Sylvain Joyeux thread_pool: remove unused variable<br/>
         
           b0e7c40 vor 4 Monaten Sylvain Joyeux thread_pool: minor documentation update<br/>
         
           8994a95 vor 4 Monaten Sylvain Joyeux thread_pool: we do need to synchronize on @mutex when modifying @mutex in spawned threads<br/>
         
           438e799 vor 4 Monaten Sylvain Joyeux thread_pool: guard #&lt;&lt; with Task#started? instead of Task#thread<br/>
         
           3c40777 vor 4 Monaten Sylvain Joyeux thread_pool: rework trimming and spawning logic<br/>
         
           85fbc03 vor 4 Monaten Sylvain Joyeux thread_pool: rename current_task to task in thread_execute_task<br/>
         
           8300372 vor 4 Monaten Sylvain Joyeux thread_pool: fix indentation<br/>
         
           5dbd0c8 vor 4 Monaten Sylvain Joyeux thread_pool: replace specific accounting for @spawned by @workers.size<br/>
         
           ce5b7a5 vor 4 Monaten Sylvain Joyeux thread_pool: refactor the main thread loop<br/>
         
           eced1bc vor 4 Monaten Sylvain Joyeux thread_pool: rewrite the test suite<br/>
         
           f14772b vor 4 Monaten Sylvain Joyeux test: add interaction fix between flexmock and minitest<br/>
         
           57cf7bf vor 4 Monaten Sylvain Joyeux PkgConfig#libs_only_other: include requires flags<br/>
         
           4820ceb vor 4 Monaten Sylvain Joyeux test: remove default library paths from cpkgconfig output when comparing<br/>
         
           ed93fc4 vor 4 Monaten Sylvain Joyeux test: run tests without -w<br/>
         
           2a9726c vor 4 Monaten Sylvain Joyeux set the git diff filter to ruby for *.rb<br/>
         
           31f6910 vor 4 Monaten Sylvain Joyeux Merge pull request #15 from jakobs/master<br/>
         
           60857e0 vor 4 Monaten Jakob Schwendner logger: change to FATAL if BASE_LOG_LEVEL is DISABLE<br/>
         
           17768d6 vor 4 Monaten Sylvain Joyeux Merge pull request #16 from vbargsten/master<br/>
         
           1e19ec6 vor 4 Monaten Vinzenz Bargsten allow */lib64/* as pkg config directory<br/>
         
           4c7d572 vor 4 Monaten Jakob Schwendner fixed logger to allow passing of BASE_LOG_LEVEL=DISABLE<br/>
         
           86eb03c vor 5 Monaten Sylvain Joyeux pkgconfig: fix error when no match is found for a version constraint<br/>
         
           28419de vor 6 Monaten Sylvain Joyeux Merge pull request #11 from meyerj/manifest-cleanup<br/>
         
           67aa525 vor 6 Monaten Johannes Meyer Added missing os dependency facets and added run_depend hoe to package.xml<br/>
         
           d2e6837 vor 6 Monaten Johannes Meyer Updated manifest.xml and package.xml for autoproj/rosdep compatibility<br/>
         
           4d8183a vor 7 Monaten Sylvain Joyeux fix loading utilrb/module/is_singleton separately on ruby 1.9 and 2.0 (fixes #7)<br/>
         
           8dfc145 vor 7 Monaten Sylvain Joyeux Merge pull request #9 from orocos-toolchain/optimize_validate_options<br/>
         
           5bf202c vor 8 Monaten Sylvain Joyeux remove test that is meant to be in TC_Module<br/>
         
           c7979e1 vor 8 Monaten Sylvain Joyeux optimize Kernel.validate_options for the common "no error" case<br/>
         
         </td></tr>
       
       





       <tr class="name" id="3">
         <th>tools/typelib</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="4"> 79 commits</a> in ["5ff7741 vor 8 Wochen Sylvain Joyeux Merge remote-tracking branch 'autobuild/rock1408'", "3e82635 vor 8 Wochen Sylvain Joyeux Merge pull request #49 from maltewi/fix_compilation_on_older_gcc_versions2", "5b951a9 vor 8 Wochen Malte Wirkus including header cstring is required on some systems. (see #47)", "232035c vor 8 Wochen Sylvain Joyeux Merge pull request #48 from orocos-toolchain/fix_compilation_on_older_gcc_versions", "c731db7 vor 8 Wochen Sylvain Joyeux explicitely import memcpy and memset from std (fixes #47)", "271c816 vor 8 Wochen Sylvain Joyeux Merge pull request #46 from orocos-toolchain/fix_cpp11_compiler_errors", "3d59853 vor 8 Wochen Sylvain Joyeux Update manifest.xml", "a0ded94 vor 8 Wochen Martin Zenzes rename shadowing iterator", "bef91d3 vor 8 Wochen Martin Zenzes fix returning of reference to temporary stack value", "0153171 vor 8 Wochen Martin Zenzes fix -Wunneeded-internal-declaration", "ee3bb34 vor 8 Wochen Martin Zenzes fix -Wc++11-narrowing", "6faaa8e vor 9 Wochen Martin Zenzes fix namespace-confusion between boost and std in value_ops", "0411515 vor 9 Wochen Sylvain Joyeux Merge pull request #42 from orocos-toolchain/throw_on_invalid_export_filename", "113976c vor 9 Wochen Martin Zenzes exporter: add checks on export-filename, throw if bad", "91ed41e vor 4 Monaten Sylvain Joyeux Merge pull request #38 from meyerj/typelib-fedora-fixes", "75df00a vor 4 Monaten Sylvain Joyeux Merge pull request #34 from orocos-toolchain/ruby_improve_container_performance", "d67531b vor 4 Monaten Johannes Meyer cmake: fixed installation directory for Ruby libraries if RUBY_RUBY_LIB_PATH is in /usr/share", "6865873 vor 4 Monaten Sylvain Joyeux Merge pull request #37 from orocos-toolchain/ruby_fix_crash_with_debug_on", "9eb996e vor 4 Monaten Sylvain Joyeux ruby: fix access to soon-to-be invalidated elements when logger.level == DEBUG (closes #36)", "fb9433a vor 5 Monaten Sylvain Joyeux fix constructor implementation for BadCategory", "ddce0e9 vor 5 Monaten Sylvain Joyeux Merge branch 'minor_fixes2' of https://github.com/jmachowinski/typelib", "7c83b4b vor 5 Monaten Sylvain Joyeux Merge pull request #30 from orocos-toolchain/ruby_add_metadata_pretty_print", "8813e64 vor 5 Monaten Sylvain Joyeux Merge pull request #33 from orocos-toolchain/fix_memory_leak", "6fe415b vor 5 Monaten Sylvain Joyeux ruby: test bool type to/from ruby handling", "a141776 vor 5 Monaten Sylvain Joyeux ruby: avoid creating fields / elements unnecessarily in #handle_invalidation", "15b391f vor 5 Monaten Sylvain Joyeux ruby: fix invalidation in ContainerType#erase and #delete_if", "bd66502 vor 5 Monaten Sylvain Joyeux ruby: in containers, apply to/from convertions only for types that need it", "328d40a vor 5 Monaten Sylvain Joyeux ruby: fix memory leak (closes #31)", "727a108 vor 5 Monaten Sylvain Joyeux ruby: no need to call add_allocated_memory after value_new", "6610944 vor 5 Monaten Sylvain Joyeux ruby: remove duplicate calls to apply_changes_from_converted_types", "7cb3154 vor 5 Monaten Martin Zenzes ruby: use \"RuntimeError\" instead of the undefined \"InternalError\"", "aecb0bb vor 5 Monaten Martin Zenzes remove long-unsued TODO file", "1205c8b vor 5 Monaten Martin Zenzes minor c++-language \"syntax fixes\"", "f7d2bb3 vor 5 Monaten Martin Zenzes Bugfix: -1 is also a valid integer in a typename", "bb9040b vor 5 Monaten Martin Zenzes typemodel: make second member of exception \"BadCategory\" an \"enum\" as well", "b6249ae vor 5 Monaten Martin Zenzes tlb-import: better error-message on load error", "da56f9e vor 5 Monaten Sylvain Joyeux ruby: define Metadata#pretty_print", "88051d9 vor 5 Monaten Sylvain Joyeux Merge pull request #26 from jmachowinski/minor_fixes", "d9af780 vor 5 Monaten Sylvain Joyeux Merge pull request #29 from jmachowinski/master", "40bbebb vor 5 Monaten Janosch Machowinski bugfix, clear string in load operation.", "b095560 vor 5 Monaten Martin Zenzes registry.cc: use an explicit const_cast<>()", "4891df5 vor 5 Monaten Martin Zenzes c++: try to return \"NULL\" for invalid pointers, instead of \"0\"", "1528a3a vor 5 Monaten Martin Zenzes container-factory: throw \"BadCategory\" to prevent bad-casts", "793f01d vor 5 Monaten Martin Zenzes typelib: replace non-existing type \"InternalError\" with \"RuntimeError\"", "0171a06 vor 5 Monaten Martin Zenzes database-import: print nicer error-message on failure to load", "9e99429 vor 6 Monaten Sylvain Joyeux Merge pull request #25 from orocos-toolchain/fix_segv_on_nonexistent_string_element_type", "f075cf9 vor 6 Monaten Sylvain Joyeux verify that the string element type exists", "0d84eee vor 6 Monaten Sylvain Joyeux Merge pull request #22 from orocos-toolchain/fix_to_raw_mempcy", "0e334fa vor 6 Monaten Sylvain Joyeux Merge pull request #24 from meyerj/manifest-cleanup", "62c5a55 vor 6 Monaten Johannes Meyer Removed old dependencies from package.xml", "0108335 vor 7 Monaten Sylvain Joyeux test,ruby: #raw_memcpy is part of StdVector, not ContainerType, reorganize the tests", "a279265 vor 7 Monaten Sylvain Joyeux ruby: improve error reporting of ContainerType::StdVector.raw_memcpy", "b150ca2 vor 7 Monaten Sylvain Joyeux ruby: fix documentation of ContainerType::StdVector#raw_memcpy", "c97aacf vor 7 Monaten Sylvain Joyeux ruby: validate the provided size in ContainerType::StdVector#raw_memcpy", "eff3c47 vor 7 Monaten Sylvain Joyeux ruby: fix ContainerType::StdVector#raw_memcpy", "6bf516f vor 7 Monaten Sylvain Joyeux ruby: fix chaining calls to ContainerType#<<", "c06d267 vor 7 Monaten Sylvain Joyeux Merge pull request #19 from orocos-toolchain/minor_changes", "3437f15 vor 7 Monaten Sylvain Joyeux add the size to the packed arrays returned by ArrayType#to_simple_value", "187f02e vor 7 Monaten Sylvain Joyeux ruby: base64-encode the packed arrays returned by to_simple_value", "87c793e vor 7 Monaten Sylvain Joyeux ruby: fix documentation", "913a7bd vor 7 Monaten Sylvain Joyeux metadata: allow empty value sets", "546aa38 vor 7 Monaten Sylvain Joyeux ruby: allow setting or adding multiple metadata values in one call", "aac6818 vor 7 Monaten Sylvain Joyeux ruby: make ConversionToMismatchedType#pretty_print report the field offsets", "a17dfdc vor 7 Monaten Sylvain Joyeux ruby: fix the most obvious warnings reported while running the tests", "75b22b6 vor 9 Monaten Sylvain Joyeux Merge pull request #16 from jmachowinski/fix-typemodel-enums", "703dbd9 vor 9 Monaten Martin Zenzes typemodel: return a const-ref instead of a copy", "4ac8dca vor 9 Monaten Martin Zenzes typelib/exporter: remove deprecated function", "78ccff8 vor 9 Monaten Martin Zenzes typelib: fix -Wswitch warnings by throwing in \"default\" case", "06a9089 vor 9 Monaten Martin Zenzes typemodel: make \"Type::ValidCategories\" be a proper enum-value", "0f31362 vor 9 Monaten Sylvain Joyeux Merge pull request #4 from orocos-toolchain/to_simple_value", "7127612 vor 9 Monaten Sylvain Joyeux ruby: make the special handling of NaN and Infinity an option of #to_simple_value", "b147d7e vor 9 Monaten Sylvain Joyeux ruby: use symbols instead of strings for keys in #to_simple_value and #to_h", "d69eb59 vor 9 Monaten Sylvain Joyeux ruby: create #to_json_value to handle JSON idiosyncracies", "b6791eb vor 9 Monaten Sylvain Joyeux test: fix spurious infinite recursions when running all the tests together", "74276be vor 9 Monaten Sylvain Joyeux Merge pull request #14 from jmachowinski/fix-after-remove-dyncall", "48ed1d3 vor 9 Monaten Martin Zenzes test/ruby: remove not-needed-anymore requieres", "d68ea3c vor 9 Monaten Sylvain Joyeux ruby: fix definition of #to_simple_value on /std/string", "c1061e6 vor 9 Monaten Sylvain Joyeux ruby: define #to_simple_value on Type instances", "31b84f7 vor 9 Monaten Sylvain Joyeux ruby: implement a method to convert a type model into a simple ruby value"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_4"><td>
         
           5ff7741 vor 8 Wochen Sylvain Joyeux Merge remote-tracking branch 'autobuild/rock1408'<br/>
         
           3e82635 vor 8 Wochen Sylvain Joyeux Merge pull request #49 from maltewi/fix_compilation_on_older_gcc_versions2<br/>
         
           5b951a9 vor 8 Wochen Malte Wirkus including header cstring is required on some systems. (see #47)<br/>
         
           232035c vor 8 Wochen Sylvain Joyeux Merge pull request #48 from orocos-toolchain/fix_compilation_on_older_gcc_versions<br/>
         
           c731db7 vor 8 Wochen Sylvain Joyeux explicitely import memcpy and memset from std (fixes #47)<br/>
         
           271c816 vor 8 Wochen Sylvain Joyeux Merge pull request #46 from orocos-toolchain/fix_cpp11_compiler_errors<br/>
         
           3d59853 vor 8 Wochen Sylvain Joyeux Update manifest.xml<br/>
         
           a0ded94 vor 8 Wochen Martin Zenzes rename shadowing iterator<br/>
         
           bef91d3 vor 8 Wochen Martin Zenzes fix returning of reference to temporary stack value<br/>
         
           0153171 vor 8 Wochen Martin Zenzes fix -Wunneeded-internal-declaration<br/>
         
           ee3bb34 vor 8 Wochen Martin Zenzes fix -Wc++11-narrowing<br/>
         
           6faaa8e vor 9 Wochen Martin Zenzes fix namespace-confusion between boost and std in value_ops<br/>
         
           0411515 vor 9 Wochen Sylvain Joyeux Merge pull request #42 from orocos-toolchain/throw_on_invalid_export_filename<br/>
         
           113976c vor 9 Wochen Martin Zenzes exporter: add checks on export-filename, throw if bad<br/>
         
           91ed41e vor 4 Monaten Sylvain Joyeux Merge pull request #38 from meyerj/typelib-fedora-fixes<br/>
         
           75df00a vor 4 Monaten Sylvain Joyeux Merge pull request #34 from orocos-toolchain/ruby_improve_container_performance<br/>
         
           d67531b vor 4 Monaten Johannes Meyer cmake: fixed installation directory for Ruby libraries if RUBY_RUBY_LIB_PATH is in /usr/share<br/>
         
           6865873 vor 4 Monaten Sylvain Joyeux Merge pull request #37 from orocos-toolchain/ruby_fix_crash_with_debug_on<br/>
         
           9eb996e vor 4 Monaten Sylvain Joyeux ruby: fix access to soon-to-be invalidated elements when logger.level == DEBUG (closes #36)<br/>
         
           fb9433a vor 5 Monaten Sylvain Joyeux fix constructor implementation for BadCategory<br/>
         
           ddce0e9 vor 5 Monaten Sylvain Joyeux Merge branch 'minor_fixes2' of https://github.com/jmachowinski/typelib<br/>
         
           7c83b4b vor 5 Monaten Sylvain Joyeux Merge pull request #30 from orocos-toolchain/ruby_add_metadata_pretty_print<br/>
         
           8813e64 vor 5 Monaten Sylvain Joyeux Merge pull request #33 from orocos-toolchain/fix_memory_leak<br/>
         
           6fe415b vor 5 Monaten Sylvain Joyeux ruby: test bool type to/from ruby handling<br/>
         
           a141776 vor 5 Monaten Sylvain Joyeux ruby: avoid creating fields / elements unnecessarily in #handle_invalidation<br/>
         
           15b391f vor 5 Monaten Sylvain Joyeux ruby: fix invalidation in ContainerType#erase and #delete_if<br/>
         
           bd66502 vor 5 Monaten Sylvain Joyeux ruby: in containers, apply to/from convertions only for types that need it<br/>
         
           328d40a vor 5 Monaten Sylvain Joyeux ruby: fix memory leak (closes #31)<br/>
         
           727a108 vor 5 Monaten Sylvain Joyeux ruby: no need to call add_allocated_memory after value_new<br/>
         
           6610944 vor 5 Monaten Sylvain Joyeux ruby: remove duplicate calls to apply_changes_from_converted_types<br/>
         
           7cb3154 vor 5 Monaten Martin Zenzes ruby: use "RuntimeError" instead of the undefined "InternalError"<br/>
         
           aecb0bb vor 5 Monaten Martin Zenzes remove long-unsued TODO file<br/>
         
           1205c8b vor 5 Monaten Martin Zenzes minor c++-language "syntax fixes"<br/>
         
           f7d2bb3 vor 5 Monaten Martin Zenzes Bugfix: -1 is also a valid integer in a typename<br/>
         
           bb9040b vor 5 Monaten Martin Zenzes typemodel: make second member of exception "BadCategory" an "enum" as well<br/>
         
           b6249ae vor 5 Monaten Martin Zenzes tlb-import: better error-message on load error<br/>
         
           da56f9e vor 5 Monaten Sylvain Joyeux ruby: define Metadata#pretty_print<br/>
         
           88051d9 vor 5 Monaten Sylvain Joyeux Merge pull request #26 from jmachowinski/minor_fixes<br/>
         
           d9af780 vor 5 Monaten Sylvain Joyeux Merge pull request #29 from jmachowinski/master<br/>
         
           40bbebb vor 5 Monaten Janosch Machowinski bugfix, clear string in load operation.<br/>
         
           b095560 vor 5 Monaten Martin Zenzes registry.cc: use an explicit const_cast&lt;&gt;()<br/>
         
           4891df5 vor 5 Monaten Martin Zenzes c++: try to return "NULL" for invalid pointers, instead of "0"<br/>
         
           1528a3a vor 5 Monaten Martin Zenzes container-factory: throw "BadCategory" to prevent bad-casts<br/>
         
           793f01d vor 5 Monaten Martin Zenzes typelib: replace non-existing type "InternalError" with "RuntimeError"<br/>
         
           0171a06 vor 5 Monaten Martin Zenzes database-import: print nicer error-message on failure to load<br/>
         
           9e99429 vor 6 Monaten Sylvain Joyeux Merge pull request #25 from orocos-toolchain/fix_segv_on_nonexistent_string_element_type<br/>
         
           f075cf9 vor 6 Monaten Sylvain Joyeux verify that the string element type exists<br/>
         
           0d84eee vor 6 Monaten Sylvain Joyeux Merge pull request #22 from orocos-toolchain/fix_to_raw_mempcy<br/>
         
           0e334fa vor 6 Monaten Sylvain Joyeux Merge pull request #24 from meyerj/manifest-cleanup<br/>
         
           62c5a55 vor 6 Monaten Johannes Meyer Removed old dependencies from package.xml<br/>
         
           0108335 vor 7 Monaten Sylvain Joyeux test,ruby: #raw_memcpy is part of StdVector, not ContainerType, reorganize the tests<br/>
         
           a279265 vor 7 Monaten Sylvain Joyeux ruby: improve error reporting of ContainerType::StdVector.raw_memcpy<br/>
         
           b150ca2 vor 7 Monaten Sylvain Joyeux ruby: fix documentation of ContainerType::StdVector#raw_memcpy<br/>
         
           c97aacf vor 7 Monaten Sylvain Joyeux ruby: validate the provided size in ContainerType::StdVector#raw_memcpy<br/>
         
           eff3c47 vor 7 Monaten Sylvain Joyeux ruby: fix ContainerType::StdVector#raw_memcpy<br/>
         
           6bf516f vor 7 Monaten Sylvain Joyeux ruby: fix chaining calls to ContainerType#&lt;&lt;<br/>
         
           c06d267 vor 7 Monaten Sylvain Joyeux Merge pull request #19 from orocos-toolchain/minor_changes<br/>
         
           3437f15 vor 7 Monaten Sylvain Joyeux add the size to the packed arrays returned by ArrayType#to_simple_value<br/>
         
           187f02e vor 7 Monaten Sylvain Joyeux ruby: base64-encode the packed arrays returned by to_simple_value<br/>
         
           87c793e vor 7 Monaten Sylvain Joyeux ruby: fix documentation<br/>
         
           913a7bd vor 7 Monaten Sylvain Joyeux metadata: allow empty value sets<br/>
         
           546aa38 vor 7 Monaten Sylvain Joyeux ruby: allow setting or adding multiple metadata values in one call<br/>
         
           aac6818 vor 7 Monaten Sylvain Joyeux ruby: make ConversionToMismatchedType#pretty_print report the field offsets<br/>
         
           a17dfdc vor 7 Monaten Sylvain Joyeux ruby: fix the most obvious warnings reported while running the tests<br/>
         
           75b22b6 vor 9 Monaten Sylvain Joyeux Merge pull request #16 from jmachowinski/fix-typemodel-enums<br/>
         
           703dbd9 vor 9 Monaten Martin Zenzes typemodel: return a const-ref instead of a copy<br/>
         
           4ac8dca vor 9 Monaten Martin Zenzes typelib/exporter: remove deprecated function<br/>
         
           78ccff8 vor 9 Monaten Martin Zenzes typelib: fix -Wswitch warnings by throwing in "default" case<br/>
         
           06a9089 vor 9 Monaten Martin Zenzes typemodel: make "Type::ValidCategories" be a proper enum-value<br/>
         
           0f31362 vor 9 Monaten Sylvain Joyeux Merge pull request #4 from orocos-toolchain/to_simple_value<br/>
         
           7127612 vor 9 Monaten Sylvain Joyeux ruby: make the special handling of NaN and Infinity an option of #to_simple_value<br/>
         
           b147d7e vor 9 Monaten Sylvain Joyeux ruby: use symbols instead of strings for keys in #to_simple_value and #to_h<br/>
         
           d69eb59 vor 9 Monaten Sylvain Joyeux ruby: create #to_json_value to handle JSON idiosyncracies<br/>
         
           b6791eb vor 9 Monaten Sylvain Joyeux test: fix spurious infinite recursions when running all the tests together<br/>
         
           74276be vor 9 Monaten Sylvain Joyeux Merge pull request #14 from jmachowinski/fix-after-remove-dyncall<br/>
         
           48ed1d3 vor 9 Monaten Martin Zenzes test/ruby: remove not-needed-anymore requieres<br/>
         
           d68ea3c vor 9 Monaten Sylvain Joyeux ruby: fix definition of #to_simple_value on /std/string<br/>
         
           c1061e6 vor 9 Monaten Sylvain Joyeux ruby: define #to_simple_value on Type instances<br/>
         
           31b84f7 vor 9 Monaten Sylvain Joyeux ruby: implement a method to convert a type model into a simple ruby value<br/>
         
         </td></tr>
       
       





       <tr class="name" id="4">
         <th>tools/orogen</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="5"> 260 commits</a> in ["b80c6e3 vor 24 Stunden Matthias Goldhoorn Revert \"Workaround for issue #50\"", "99c370c vor 24 Stunden Matthias Goldhoorn Workaround for issue #50 https://github.com/orocos-toolchain/orogen/issues/50", "199a497 vor 2 Tagen Matthias Goldhoorn make all exceptions raised by the loaders specific", "4c17ca9 vor 8 Wochen Sylvain Joyeux Update manifest.xml", "41e8bd2 vor 9 Wochen Sylvain Joyeux Merge pull request #36 from orocos-toolchain/fix_loading_on_arm", "ba98c4b vor 9 Wochen Sylvain Joyeux fix loading the RTT typekit definition on platforms that have unsigned char (ARM)", "9bb6ed8 vor 10 Wochen Sylvain Joyeux Merge pull request #34 from jmachowinski/master", "557d64b vor 2 Monaten Janosch Machowinski Renamed reported typekit names from \"/orogen/<foo>\" to \"<foo>\".", "f67a709 vor 4 Monaten Sylvain Joyeux html: fix links to enums", "39bf76f vor 4 Monaten Sylvain Joyeux Merge pull request #30 from orocos-toolchain/minor_html_rendering_fixes", "d0b4351 vor 4 Monaten Sylvain Joyeux Merge pull request #29 from orocos-toolchain/no_nokogiri", "b4b973f vor 4 Monaten Sylvain Joyeux html: quote the < > marks when linking to containers", "36fa9a1 vor 4 Monaten Sylvain Joyeux html: do forward the push options to page.push in Type#render", "c969868 vor 4 Monaten Sylvain Joyeux html: fix rendering a simple type after a type that has conversions", "2b2973d vor 4 Monaten Sylvain Joyeux html: don't link to vectors and arrays, only to their elements", "8e25922 vor 4 Monaten Sylvain Joyeux remove dependency on nokogiri", "7b682f4 vor 5 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into orogen_loaders", "7fcdf26 vor 5 Monaten Sylvain Joyeux templates: fix cmake warnings about LINK_INTERFACE_LIBRARIES/INTERFACE_LINK_LIBRARIES", "68377af vor 5 Monaten Sylvain Joyeux remove all deprecated names", "db59efd vor 5 Monaten Sylvain Joyeux test: remove specific inclusion of the SelfTest modules", "1aac01d vor 5 Monaten Sylvain Joyeux test: remove double-inclusion of the SelfTest modules", "8fb4b8d vor 5 Monaten Sylvain Joyeux test: rename all X_dir helper methods to path_to_X", "d1170d0 vor 5 Monaten Sylvain Joyeux test: fix creation of Project in tests", "4173bf2 vor 5 Monaten Sylvain Joyeux loaders: fix loading of documentation", "5bf16e1 vor 5 Monaten Sylvain Joyeux rake: only run the entry point test/suite.rb in tests", "9fb7e19 vor 5 Monaten Sylvain Joyeux rake: don't run tests with -w", "7ff2606 vor 5 Monaten Sylvain Joyeux Merge pull request #27 from marvin2k/minor_fixes", "868636c vor 5 Monaten Martin Zenzes templates/Convertions.hpp: remove unused variable in ruby-part", "bd8a869 vor 5 Monaten Martin Zenzes typekit.rb: add some comments, reformat raised string", "4c6294b vor 5 Monaten Martin Zenzes corba/Convertions: add default-case for EnumType-conversion functions...", "f0415ce vor 5 Monaten Sylvain Joyeux Merge branch 'master' into orogen_loaders", "b0c55a1 vor 6 Monaten Sylvain Joyeux Merge pull request #21 from orocos-toolchain/fix_using_ro_ptr_for_operation_arguments", "fc6c049 vor 6 Monaten Sylvain Joyeux Merge pull request #17 from orocos-toolchain/fix_opaquefwd_generation", "ec36df6 vor 6 Monaten Sylvain Joyeux Merge pull request #22 from orocos-toolchain/add_missing_includes", "b31f9fc vor 6 Monaten Sylvain Joyeux Merge pull request #24 from meyerj/manifest-cleanup", "6bf57fe vor 6 Monaten Johannes Meyer package.xml: added <url> tag pointing to http://rock-robotics.org/documentation/orogen", "8cb82a5 vor 7 Monaten Johannes Meyer manifest.xml: make metaruby a package dependency instead of a rosdep (system) dependency", "9af785e vor 7 Monaten Johannes Meyer Updated manifest.xml and package.xml for autoproj/rosdep compatibility", "abef4ff vor 7 Monaten Sylvain Joyeux template/typekit: fix cmake warning", "19c347f vor 7 Monaten Sylvain Joyeux Merge pull request #16 from orocos-toolchain/remove_inclusion_of_Types_hpp_in_corba_transport", "59abce4 vor 7 Monaten Sylvain Joyeux corba: fix handling of conversion methods for array elements", "8840142 vor 7 Monaten Sylvain Joyeux add some missing includes in templates", "0b950ef vor 7 Monaten Sylvain Joyeux spec: allow passing Typelib type objects to define operations (closes #13)", "7e35bf1 vor 7 Monaten Sylvain Joyeux remove the inclusion of Types.hpp in the CORBA transport", "05584ea vor 7 Monaten Sylvain Joyeux fix handling of containers in resolve_registry_includes (fixes #12)", "f21d408 vor 7 Monaten Peter Soetens typekit: fix include of typekit/BoostSerialization", "1a6caed vor 7 Monaten Sylvain Joyeux Merge pull request #11 from marvin2k/various_minor_typelib_fixes", "80ca68e vor 8 Monaten Sylvain Joyeux fix generation of OpaqueFwd in presence of user-written opaque convertion functions", "30ce2a8 vor 8 Monaten Martin Zenzes typekit.rb: fix missing typekit-name in \"orogen_include\"", "b8362bf vor 8 Monaten Martin Zenzes Revert \"always add the system directories to the list of include dirs\"", "75af13e vor 8 Monaten Martin Zenzes templates: remove various unconditional includes of headers", "d041f84 vor 8 Monaten Martin Zenzes typekit.rb: include_for_type: add special handling for '/std/string' and '/string'", "50e31e9 vor 8 Monaten Martin Zenzes typekit.rb: add warning for non-existing line in \"source_file_line\"", "c39d475 vor 8 Monaten Martin Zenzes typekit.rb: more explicit syntax", "0a4ac74 vor 8 Monaten Martin Zenzes typekit.rb: fix comments", "0d9a3f0 vor 8 Monaten Martin Zenzes typekit.rb: minor fix for regex", "298c9dc vor 8 Monaten Sylvain Joyeux Merge pull request #10 from orocos-toolchain/fix_mtype_generation_for_types_with_same_basename", "56a759c vor 9 Monaten Sylvain Joyeux fix m-type generation for m-types that have the same basename", "c29ccb8 vor 9 Monaten Sylvain Joyeux Merge pull request #5 from orocos-toolchain/models_to_h", "b6b8722 vor 9 Monaten Sylvain Joyeux spec: fix superclass in Spec::TaskContext#to_h", "310682d vor 10 Monaten Sylvain Joyeux loaders: define 'array' in the RTT typekit", "7683e59 vor 10 Monaten Sylvain Joyeux spec: define #to_h to marshal the models in a form that can be fed to YAML, JSON and friends", "4a5fac6 vor 10 Monaten Sylvain Joyeux Revert \"loaders: register loaded models on self even if self is not root\"", "17db50a vor 10 Monaten Sylvain Joyeux loaders: be broader in the set of exceptions we catch in Files#each_project", "be01c90 vor 10 Monaten Sylvain Joyeux loaders: auto-register children on Aggregate", "c65c606 vor 10 Monaten Sylvain Joyeux loaders: add sanity checks", "549094a vor 10 Monaten Sylvain Joyeux loaders: calling #to_s on a loader is potentially expensive, log it using a block", "772d30b vor 10 Monaten Sylvain Joyeux spec: define Project#each_deployment", "a67b24f vor 10 Monaten Sylvain Joyeux loaders: implement discovery methods for Files and PkgConfig", "623d912 vor 10 Monaten Sylvain Joyeux loaders: allow initializing a loader with a nil root loader", "99fc8c5 vor 10 Monaten Sylvain Joyeux loaders: extend the API to allow for manual registration of deployment and task models", "b16d8bf vor 11 Monaten Sylvain Joyeux Merge pull request #4 from orocos-toolchain/loaders_fix_hierarchical_registration", "53de341 vor 11 Monaten Sylvain Joyeux loaders: register loaded models on self even if self is not root", "7ea2b63 vor 11 Monaten Sylvain Joyeux loaders: fix Files#deployment_model_from_name to raise when the deployment is not found", "26016da vor 11 Monaten Sylvain Joyeux loaders: define Files#deployment_model_from_name", "0e118d0 vor 11 Monaten Sylvain Joyeux loaders: fix some #clear methods", "b7efa2b vor 11 Monaten Sylvain Joyeux test,gen: redirect the output of all external commands to a logfile", "a57d2ce vor 11 Monaten Sylvain Joyeux test: cleanup the test suite", "8feeea6 vor 11 Monaten Sylvain Joyeux test: do not load orogen/gen/test in orogen/test", "319683e vor 11 Monaten Sylvain Joyeux move the check for stray dots in the codegen part", "41f2442 vor 11 Monaten Sylvain Joyeux spec: make the maximum number of arguments in an operation a constant", "c4f8ec9 vor 11 Monaten Sylvain Joyeux test: define #data_dir and #wc_dir in all tests, not only the gen tests", "9bef381 vor 11 Monaten Sylvain Joyeux move the definition of Property#cxx_default_value into the gen parts", "732734a vor 11 Monaten Sylvain Joyeux spec: change the default value of Operation#doc from '' to nil", "bd8a8a5 vor 11 Monaten Sylvain Joyeux loaders: fix warning format from the pkg-config loader", "6c5db31 vor 11 Monaten Sylvain Joyeux typegen: need to require orogen/gen now", "a7ee25c vor 11 Monaten Sylvain Joyeux gen,test: remove obsolete test", "4d80518 vor 11 Monaten Sylvain Joyeux test: minor fixes", "e5f507d vor 11 Monaten Sylvain Joyeux spec: the exception raised by Typelib.from_ruby changed, update", "4da4362 vor 11 Monaten Sylvain Joyeux test: minor fixes", "43eb9f0 vor 11 Monaten Sylvain Joyeux move check_for_stray_dots in a generic place", "03373dc vor 11 Monaten Sylvain Joyeux gen,test: remove fragile assertions that don't have their place there", "dff6488 vor 11 Monaten Sylvain Joyeux gen,test: use Process.spawn instead of handmade fork/exec", "806fd65 vor 11 Monaten Sylvain Joyeux gen,test: export int32_t explicitly in typekit_opaque", "0c4fbc4 vor 11 Monaten Sylvain Joyeux gen,test: update typekit_opaque's user-visible opaque handling files", "1d3f8d9 vor 11 Monaten Sylvain Joyeux gen,test: remove explicit includes for 'vector' in typekit_opaque", "fedac1e vor 11 Monaten Sylvain Joyeux gen: OpaqueFwd need to declare all opaque types", "f4b8104 vor 11 Monaten Sylvain Joyeux gen: include stdexcept in OpaqueConvertions.hpp", "f4f64fb vor 11 Monaten Sylvain Joyeux gen: when resolving the typekit dependencies, generate a fatal error if one cannot be found", "cb49ad1 vor 11 Monaten Sylvain Joyeux spec: make the master/slave activity more consistent to the rest of the oroGen API", "c519007 vor 11 Monaten Sylvain Joyeux spec: fix ordering activities by dependencies when the deployment has no tasks", "ae5b7a8 vor 11 Monaten Sylvain Joyeux test: make the fd_triggered::Task test component more robust", "7f95571 vor 11 Monaten Sylvain Joyeux gen,test: update C/C++ headers", "341c481 vor 11 Monaten Sylvain Joyeux gen: fix backward compatibility after the change of namespace", "98bb93f vor 11 Monaten Sylvain Joyeux gen: allow calling #task_context without a block", "43265e4 vor 11 Monaten Sylvain Joyeux gen,test: interpret the TEST_DONT_CLEAN and TEST_KEEP_WC envvars as 'true' only if they are '1'", "764c4b5 vor 11 Monaten Sylvain Joyeux gen,test: make sure we can set the -j option to make", "d8951cb vor 11 Monaten Sylvain Joyeux gen: explicitly include <rtt/TaskContext.hpp> in main.cpp", "7227066 vor 11 Monaten Sylvain Joyeux gen: do not auto-export numeric types", "aaeb932 vor 11 Monaten Sylvain Joyeux gen: set the headers for standard int types to boost/stdint.hpp in normalize_registry", "616321e vor 11 Monaten Sylvain Joyeux gen: remove the generate_transports_for_base_type hack", "664dd36 vor 11 Monaten Sylvain Joyeux gen,test: add guards to test headers", "1f37611 vor 11 Monaten Sylvain Joyeux gen,test: refactor the generation-related tests", "bdbc8a6 vor 11 Monaten Sylvain Joyeux gen: fix path to the BoostSerialization header", "5626226 vor 11 Monaten Sylvain Joyeux gen: fix wrongly placed begin/rescue block", "46a9882 vor 11 Monaten Sylvain Joyeux ros: fix the default superclass in ROS::Spec::Package", "578463d vor 11 Monaten Sylvain Joyeux ros: make #import_types_from stricter than the one in Project", "265e09e vor 11 Monaten Sylvain Joyeux ros,test: update ROS tests", "a9b095e vor 11 Monaten Sylvain Joyeux loaders: RTT defines type handling for 'void', declare it", "6c7554b vor 11 Monaten Sylvain Joyeux test: move loading of flexmock and minitest/spec before coverage", "e668cca vor 11 Monaten Sylvain Joyeux test: require minitest/autorun in orogen/test", "e89776a vor 11 Monaten Sylvain Joyeux test: migrate tests to minitest", "0604176 vor 11 Monaten Sylvain Joyeux avoid redefinition of OroGen::TypekitMarshallers", "b599a5d vor 11 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into orogen_loaders", "9abde7e vor 1 Jahr, und 5 Monaten Sylvain Joyeux spec: in Typekit, forward the create_ calls to the underlying registry", "944c46f vor 1 Jahr, und 5 Monaten Sylvain Joyeux the RTT default typekit defines /bool and /double", "1fac913 vor 1 Jahr, und 5 Monaten Sylvain Joyeux allow to remove project load callbacks", "ef594e4 vor 1 Jahr, und 5 Monaten Sylvain Joyeux remove Loaders::Base#default_typekits, it is unused", "78f4a82 vor 1 Jahr, und 5 Monaten Sylvain Joyeux loaders: in #resolve_type, append the name of the loader to the error message", "12a690b vor 1 Jahr, und 5 Monaten Sylvain Joyeux loaders: define #clear", "abddce9 vor 1 Jahr, und 5 Monaten Sylvain Joyeux html: implement operation display", "475133d vor 1 Jahr, und 5 Monaten Sylvain Joyeux add missing 'double' type to orocos.typelist", "f9e3c5c vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: fix #typekit_for resolution from cached typekits when exported is true", "3457a5b vor 1 Jahr, und 6 Monaten Sylvain Joyeux improve error message", "e5fd8d2 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: add #each_available_project_name to the API", "817578d vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: define #find_task_context and #has_typekit on Loaders::Project", "45fb5b9 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: in RTT.setup_loaders, register the types in Typekit#typelist into typekits_by_type_name as well", "6eab3fb vor 1 Jahr, und 6 Monaten Sylvain Joyeux ros: fix launcher resolution in Loader", "94e06d9 vor 1 Jahr, und 6 Monaten Sylvain Joyeux ros: cleanup namespaces to match the structure on the RTT side", "d4084d9 vor 1 Jahr, und 6 Monaten Sylvain Joyeux Merge branch 'master' of ../orogen_ros into orogen_loaders", "9b94d20 vor 1 Jahr, und 6 Monaten Sylvain Joyeux prepare for integration in oroGen proper", "6738562 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: do not raise NotImplementedError in the Base#find_* methods", "8c14b23 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: define Base#intermediate_type?", "56849ba vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: any typekit that know a given type can be used to resolve opaques and intermediates", "617594d vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: define #has_project? and #has_typekit? in Files", "dbbbfdb vor 1 Jahr, und 6 Monaten Sylvain Joyeux spec: cache the default superclass in Project", "26f6577 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: cache the set of known deployments", "056f6ac vor 1 Jahr, und 6 Monaten Sylvain Joyeux fix usage of load_rosmap_by_package_name without the codegen part around", "d40efa1 vor 1 Jahr, und 6 Monaten Sylvain Joyeux move marshaller registration to orogen/gen", "771c821 vor 1 Jahr, und 6 Monaten Sylvain Joyeux define TypelibMarshallers and its logger in orogen.rb", "6153e69 vor 1 Jahr, und 6 Monaten Sylvain Joyeux test: modify the load_all script to use the aggregate loader", "c82d20f vor 1 Jahr, und 6 Monaten Sylvain Joyeux remove stub method that is actually overloaded later in the file", "aa9a10b vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: create the aggregate loader", "5e26fb2 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: make the raised NotFound errors more specific", "5feb28e vor 1 Jahr, und 6 Monaten Sylvain Joyeux move to the new OroGen loader API", "f8efe85 vor 1 Jahr, und 6 Monaten Sylvain Joyeux fix access to the plugin-loading method on OroGen", "e611a04 vor 1 Jahr, und 6 Monaten Sylvain Joyeux fix definition and usage of OROGEN_LIB_DIR", "513e879 vor 1 Jahr, und 6 Monaten Sylvain Joyeux extract the template code out of gen/base.rb in gen/templates.rb", "7d9d257 vor 1 Jahr, und 6 Monaten Sylvain Joyeux move some methods to the extension module where they actually belong", "92821c1 vor 1 Jahr, und 6 Monaten Sylvain Joyeux reviewed and cleaned logger access", "aa3cc0e vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: declare the bool type from the RTT typekit", "b474cae vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: define m_type?", "184a41c vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: allow to manually register a type on a loader", "ae3d367 vor 1 Jahr, und 6 Monaten Sylvain Joyeux fix TaskContext#implements?", "67e20cb vor 1 Jahr, und 6 Monaten Sylvain Joyeux rationalize some exception definitions", "1b9c642 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: fix deployment_model_from_name", "c6cff1c vor 1 Jahr, und 6 Monaten Sylvain Joyeux spec: resolve_type only has one argument now, fix", "41bea2a vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: define opaque_type_for", "8b2c9af vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: declare void, nil, string and friends in the orocos typekit", "7a3c56c vor 1 Jahr, und 6 Monaten Sylvain Joyeux spec: Spec::TaskContext really needs a project, force giving a first argument", "be7100f vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: set the RTT typekit as virtual", "f108f4e vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: fix PkgConfig.typekit_for", "5143e48 vor 1 Jahr, und 6 Monaten Sylvain Joyeux TEMP: callbacks", "a5f5101 vor 1 Jahr, und 6 Monaten Sylvain Joyeux define OROGEN_LIB_DIR, needed by the codegen part", "5436236 vor 1 Jahr, und 6 Monaten Sylvain Joyeux move some code that orocos.rb needs out of Gen into OroGen proper", "ac4bf4c vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: use normal typekit/project registration methods in RTT.setup_loaders", "54bf9c8 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: imported_typekits_for is supposed to raise when the type is not imported, do so", "64d8c9b vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: allow to register callbacks when new projects/typekits get loaded", "1be6298 vor 1 Jahr, und 6 Monaten Sylvain Joyeux don't alias the whole of OroGen to Orocos", "77947b9 vor 1 Jahr, und 6 Monaten Sylvain Joyeux move aggregation of type/typekit information to the loader class", "00cd3bb vor 1 Jahr, und 6 Monaten Sylvain Joyeux remove reference to Orocos::Generation from Spec", "64f3b1f vor 1 Jahr, und 6 Monaten Sylvain Joyeux fix infinite recursion in TaskContext#max_sizes", "a4b5629 vor 1 Jahr, und 6 Monaten Sylvain Joyeux do not install pkg-config files of deployments that are marked as do_not_install", "9c8673c vor 1 Jahr, und 6 Monaten Sylvain Joyeux test: add the load_all script, which attempts to load all installed oroGen projects", "a244cd9 vor 1 Jahr, und 6 Monaten Sylvain Joyeux test: add tests for Loaders::Base", "e9f4a3d vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: make it load even more of the Rock orogen projects", "6dd752c vor 1 Jahr, und 6 Monaten Sylvain Joyeux shuffle code between the Spec and Gen parts", "11fea93 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: in pkg-config, workaround bug in oroGen in which it was installing the pkg-config file for non-installable deployments", "acdea4d vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: make the set of default typekits an attribute on Loaders::Base", "c91a51b vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: get to load the models for RTT/OCL and a test project", "1d8105e vor 1 Jahr, und 6 Monaten Sylvain Joyeux use Project#default_task_superclass to initialize superclass on new task contexts", "007b837 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: move documentation for common methods from PkgConfig to Base", "a59084d vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: fix Project", "7a9fba2 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: fix call to __eval__", "17961ce vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: allow to specify which loader should be used to resolve dependencies", "0ab7f36 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: register the set of task models loaded so far", "c5c0971 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: cache the set of already loaded projects/typekits in Loaders::Base", "fab7139 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: separate the loading of textual model representation from the creation of model objects", "8082e02 vor 1 Jahr, und 6 Monaten Sylvain Joyeux test: create a clean OroGen::SelfTest module", "5f540fc vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: documentation", "c627007 vor 1 Jahr, und 6 Monaten Sylvain Joyeux implement recursive loading of dependencies", "c3ee72b vor 1 Jahr, und 6 Monaten Sylvain Joyeux introduction of a separate loading infrastructure, as well as Spec::Typekit and Spec::Project", "d6ca386 vor 1 Jahr, und 6 Monaten Sylvain Joyeux doc fix", "dcc2ebe vor 1 Jahr, und 6 Monaten Sylvain Joyeux start replacing the Orocos namespace by OroGen", "ece7937 vor 1 Jahr, und 6 Monaten Sylvain Joyeux rework model loading a little", "1f8093e vor 1 Jahr, und 7 Monaten Thomas Roehr Change to info message when ROS is not adding to Orocos.master_project", "32fd6bd vor 1 Jahr, und 7 Monaten Thomas Roehr Handle waiting for roscore to be available", "b616cf1 vor 1 Jahr, und 7 Monaten Thomas Roehr Update specs and tests", "00fbf3d vor 1 Jahr, und 7 Monaten Thomas Roehr Allow direct retrieval of node specification", "a12f2a4 vor 1 Jahr, und 7 Monaten Thomas Roehr Add tests", "4b0c1db vor 1 Jahr, und 7 Monaten Thomas Roehr Add launcher documentation", "226a81c vor 1 Jahr, und 7 Monaten Thomas Roehr Rename launch.rb to launcher.rb", "9ed3034 vor 1 Jahr, und 7 Monaten Thomas Roehr Add normalization of topic name", "ecce399 vor 1 Jahr, und 7 Monaten Thomas Roehr Alias ros_name for output and input topic with :topic_name", "b6f9481 vor 1 Jahr, und 7 Monaten Thomas Roehr Make ROS::Node a root_model, i.e. mark as having no superclass", "e5845a7 vor 1 Jahr, und 7 Monaten Thomas Roehr Add default task context for ROS Nodes", "901c9b7 vor 1 Jahr, und 7 Monaten Thomas Roehr Fix handling of roscore start and shutdown", "9bd5f18 vor 1 Jahr, und 7 Monaten Thomas Roehr Add Orocos::ROS#load_ros_project", "838c7e4 vor 1 Jahr, und 7 Monaten Thomas Roehr Add reloading of projects", "efc07f7 vor 1 Jahr, und 7 Monaten Thomas Roehr Rename tools.rb to base.rb", "e501e59 vor 1 Jahr, und 7 Monaten Thomas Roehr Restrict project specifications to refer to known ROS packages.", "61f6d47 vor 1 Jahr, und 7 Monaten Thomas Roehr Add documentation", "64c763b vor 1 Jahr, und 7 Monaten Thomas Roehr Allow to query whether the node specification is available", "0046b3c vor 1 Jahr, und 7 Monaten Thomas Roehr Raise if someone tries to create a simple deployment for a ROS project", "6d7b91d vor 1 Jahr, und 7 Monaten Thomas Roehr Add Project#using_ros_package as equivalent to using_task_library", "38d8c9d vor 1 Jahr, und 7 Monaten Thomas Roehr Add stub for Project#typekit", "d3dfc3a vor 1 Jahr, und 7 Monaten Thomas Roehr Use call to external_task_context instead of task_context to create a node", "8e925c7 vor 1 Jahr, und 7 Monaten Thomas Roehr Rename reuse_existing to load_lauch_file", "31841a6 vor 1 Jahr, und 7 Monaten Thomas Roehr use Logger::Hierarchy instead of creating a new Root logger", "fd07a48 vor 1 Jahr, und 7 Monaten Thomas Roehr Normalize name", "895faa2 vor 1 Jahr, und 7 Monaten Thomas Roehr Add test for rosnode_findpackage", "3f42a7f vor 1 Jahr, und 7 Monaten Thomas Roehr Add Orocos::ROS.rosnode_findpackage and Orocos::ROS.available_nodes", "6cbb9f9 vor 1 Jahr, und 7 Monaten Thomas Roehr Add equality check for ros nodes -- limited to name and package comparison", "0b21a33 vor 1 Jahr, und 7 Monaten Thomas Roehr Add roscore_pid, roscore_start, roscore_shutdown", "9577622 vor 1 Jahr, und 7 Monaten Thomas Roehr Fix loading of packages", "c52b75b vor 1 Jahr, und 7 Monaten Thomas Roehr Add documentation", "fb16ae0 vor 1 Jahr, und 7 Monaten Thomas Roehr Add root logger to Orocos::ROS module", "e2a5b65 vor 1 Jahr, und 7 Monaten Thomas Roehr Fix tests", "4814bc7 vor 1 Jahr, und 7 Monaten Thomas Roehr Update core ROS tools", "019f81e vor 1 Jahr, und 7 Monaten Thomas Roehr Fix orogen_project_description", "70bc2f3 vor 1 Jahr, und 7 Monaten Thomas Roehr Launch update error layout", "78c3664 vor 1 Jahr, und 7 Monaten Thomas Roehr Add eval block to launcher", "73931ad vor 1 Jahr, und 7 Monaten Thomas Roehr ros_node: reorder node into array insertion for clarity", "9a771e6 vor 1 Jahr, und 7 Monaten Thomas Roehr Adapt project to change of option name", "fef5a8b vor 1 Jahr, und 7 Monaten Thomas Roehr Cleanup Node", "f6beb2b vor 1 Jahr, und 7 Monaten Thomas Roehr Fix loading and cleanup Launch", "93f72b5 vor 1 Jahr, und 7 Monaten Thomas Roehr Fix Launch::to_s", "9459fcc vor 1 Jahr, und 7 Monaten Thomas Roehr Remove process control and move to orocos.rb", "d9d1e19 vor 1 Jahr, und 7 Monaten Thomas Roehr alias task_activities with nodes", "0cad2fa vor 1 Jahr, und 7 Monaten Thomas Roehr Fix retrieving attribute content", "0416c2c vor 1 Jahr, und 7 Monaten Thomas Roehr Add tests and current state", "e5d06d8 vor 1 Jahr, und 7 Monaten Thomas Roehr Add functionality to handle orogen based spec files to describe ros nodes and launch files", "6b18473 vor 1 Jahr, und 7 Monaten Thomas Roehr Add launch.rb", "f0eb1d3 vor 1 Jahr, und 7 Monaten Thomas Roehr Add ros_package to node", "34b8038 vor 2 Jahren Sylvain Joyeux fix #ros_node in Package and extend ImportedProject by Package when enabling the plugin", "152b174 vor 2 Jahren Sylvain Joyeux require orogen", "65187b8 vor 2 Jahren Sylvain Joyeux add dependency on orogen, and create an orogen plugin file", "54e83cb vor 2 Jahren Sylvain Joyeux fix namespaces", "ca2a6c1 vor 2 Jahren Sylvain Joyeux initial fully untested version of the plugin", "43f9532 vor 2 Jahren, und 1 Monat Sylvain Joyeux Initial commit"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_5"><td>
         
           b80c6e3 vor 24 Stunden Matthias Goldhoorn Revert "Workaround for issue #50"<br/>
         
           99c370c vor 24 Stunden Matthias Goldhoorn Workaround for issue #50 https://github.com/orocos-toolchain/orogen/issues/50<br/>
         
           199a497 vor 2 Tagen Matthias Goldhoorn make all exceptions raised by the loaders specific<br/>
         
           4c17ca9 vor 8 Wochen Sylvain Joyeux Update manifest.xml<br/>
         
           41e8bd2 vor 9 Wochen Sylvain Joyeux Merge pull request #36 from orocos-toolchain/fix_loading_on_arm<br/>
         
           ba98c4b vor 9 Wochen Sylvain Joyeux fix loading the RTT typekit definition on platforms that have unsigned char (ARM)<br/>
         
           9bb6ed8 vor 10 Wochen Sylvain Joyeux Merge pull request #34 from jmachowinski/master<br/>
         
           557d64b vor 2 Monaten Janosch Machowinski Renamed reported typekit names from "/orogen/&lt;foo&gt;" to "&lt;foo&gt;".<br/>
         
           f67a709 vor 4 Monaten Sylvain Joyeux html: fix links to enums<br/>
         
           39bf76f vor 4 Monaten Sylvain Joyeux Merge pull request #30 from orocos-toolchain/minor_html_rendering_fixes<br/>
         
           d0b4351 vor 4 Monaten Sylvain Joyeux Merge pull request #29 from orocos-toolchain/no_nokogiri<br/>
         
           b4b973f vor 4 Monaten Sylvain Joyeux html: quote the &lt; &gt; marks when linking to containers<br/>
         
           36fa9a1 vor 4 Monaten Sylvain Joyeux html: do forward the push options to page.push in Type#render<br/>
         
           c969868 vor 4 Monaten Sylvain Joyeux html: fix rendering a simple type after a type that has conversions<br/>
         
           2b2973d vor 4 Monaten Sylvain Joyeux html: don't link to vectors and arrays, only to their elements<br/>
         
           8e25922 vor 4 Monaten Sylvain Joyeux remove dependency on nokogiri<br/>
         
           7b682f4 vor 5 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into orogen_loaders<br/>
         
           7fcdf26 vor 5 Monaten Sylvain Joyeux templates: fix cmake warnings about LINK_INTERFACE_LIBRARIES/INTERFACE_LINK_LIBRARIES<br/>
         
           68377af vor 5 Monaten Sylvain Joyeux remove all deprecated names<br/>
         
           db59efd vor 5 Monaten Sylvain Joyeux test: remove specific inclusion of the SelfTest modules<br/>
         
           1aac01d vor 5 Monaten Sylvain Joyeux test: remove double-inclusion of the SelfTest modules<br/>
         
           8fb4b8d vor 5 Monaten Sylvain Joyeux test: rename all X_dir helper methods to path_to_X<br/>
         
           d1170d0 vor 5 Monaten Sylvain Joyeux test: fix creation of Project in tests<br/>
         
           4173bf2 vor 5 Monaten Sylvain Joyeux loaders: fix loading of documentation<br/>
         
           5bf16e1 vor 5 Monaten Sylvain Joyeux rake: only run the entry point test/suite.rb in tests<br/>
         
           9fb7e19 vor 5 Monaten Sylvain Joyeux rake: don't run tests with -w<br/>
         
           7ff2606 vor 5 Monaten Sylvain Joyeux Merge pull request #27 from marvin2k/minor_fixes<br/>
         
           868636c vor 5 Monaten Martin Zenzes templates/Convertions.hpp: remove unused variable in ruby-part<br/>
         
           bd8a869 vor 5 Monaten Martin Zenzes typekit.rb: add some comments, reformat raised string<br/>
         
           4c6294b vor 5 Monaten Martin Zenzes corba/Convertions: add default-case for EnumType-conversion functions...<br/>
         
           f0415ce vor 5 Monaten Sylvain Joyeux Merge branch 'master' into orogen_loaders<br/>
         
           b0c55a1 vor 6 Monaten Sylvain Joyeux Merge pull request #21 from orocos-toolchain/fix_using_ro_ptr_for_operation_arguments<br/>
         
           fc6c049 vor 6 Monaten Sylvain Joyeux Merge pull request #17 from orocos-toolchain/fix_opaquefwd_generation<br/>
         
           ec36df6 vor 6 Monaten Sylvain Joyeux Merge pull request #22 from orocos-toolchain/add_missing_includes<br/>
         
           b31f9fc vor 6 Monaten Sylvain Joyeux Merge pull request #24 from meyerj/manifest-cleanup<br/>
         
           6bf57fe vor 6 Monaten Johannes Meyer package.xml: added &lt;url&gt; tag pointing to http://rock-robotics.org/documentation/orogen<br/>
         
           8cb82a5 vor 7 Monaten Johannes Meyer manifest.xml: make metaruby a package dependency instead of a rosdep (system) dependency<br/>
         
           9af785e vor 7 Monaten Johannes Meyer Updated manifest.xml and package.xml for autoproj/rosdep compatibility<br/>
         
           abef4ff vor 7 Monaten Sylvain Joyeux template/typekit: fix cmake warning<br/>
         
           19c347f vor 7 Monaten Sylvain Joyeux Merge pull request #16 from orocos-toolchain/remove_inclusion_of_Types_hpp_in_corba_transport<br/>
         
           59abce4 vor 7 Monaten Sylvain Joyeux corba: fix handling of conversion methods for array elements<br/>
         
           8840142 vor 7 Monaten Sylvain Joyeux add some missing includes in templates<br/>
         
           0b950ef vor 7 Monaten Sylvain Joyeux spec: allow passing Typelib type objects to define operations (closes #13)<br/>
         
           7e35bf1 vor 7 Monaten Sylvain Joyeux remove the inclusion of Types.hpp in the CORBA transport<br/>
         
           05584ea vor 7 Monaten Sylvain Joyeux fix handling of containers in resolve_registry_includes (fixes #12)<br/>
         
           f21d408 vor 7 Monaten Peter Soetens typekit: fix include of typekit/BoostSerialization<br/>
         
           1a6caed vor 7 Monaten Sylvain Joyeux Merge pull request #11 from marvin2k/various_minor_typelib_fixes<br/>
         
           80ca68e vor 8 Monaten Sylvain Joyeux fix generation of OpaqueFwd in presence of user-written opaque convertion functions<br/>
         
           30ce2a8 vor 8 Monaten Martin Zenzes typekit.rb: fix missing typekit-name in "orogen_include"<br/>
         
           b8362bf vor 8 Monaten Martin Zenzes Revert "always add the system directories to the list of include dirs"<br/>
         
           75af13e vor 8 Monaten Martin Zenzes templates: remove various unconditional includes of headers<br/>
         
           d041f84 vor 8 Monaten Martin Zenzes typekit.rb: include_for_type: add special handling for '/std/string' and '/string'<br/>
         
           50e31e9 vor 8 Monaten Martin Zenzes typekit.rb: add warning for non-existing line in "source_file_line"<br/>
         
           c39d475 vor 8 Monaten Martin Zenzes typekit.rb: more explicit syntax<br/>
         
           0a4ac74 vor 8 Monaten Martin Zenzes typekit.rb: fix comments<br/>
         
           0d9a3f0 vor 8 Monaten Martin Zenzes typekit.rb: minor fix for regex<br/>
         
           298c9dc vor 8 Monaten Sylvain Joyeux Merge pull request #10 from orocos-toolchain/fix_mtype_generation_for_types_with_same_basename<br/>
         
           56a759c vor 9 Monaten Sylvain Joyeux fix m-type generation for m-types that have the same basename<br/>
         
           c29ccb8 vor 9 Monaten Sylvain Joyeux Merge pull request #5 from orocos-toolchain/models_to_h<br/>
         
           b6b8722 vor 9 Monaten Sylvain Joyeux spec: fix superclass in Spec::TaskContext#to_h<br/>
         
           310682d vor 10 Monaten Sylvain Joyeux loaders: define 'array' in the RTT typekit<br/>
         
           7683e59 vor 10 Monaten Sylvain Joyeux spec: define #to_h to marshal the models in a form that can be fed to YAML, JSON and friends<br/>
         
           4a5fac6 vor 10 Monaten Sylvain Joyeux Revert "loaders: register loaded models on self even if self is not root"<br/>
         
           17db50a vor 10 Monaten Sylvain Joyeux loaders: be broader in the set of exceptions we catch in Files#each_project<br/>
         
           be01c90 vor 10 Monaten Sylvain Joyeux loaders: auto-register children on Aggregate<br/>
         
           c65c606 vor 10 Monaten Sylvain Joyeux loaders: add sanity checks<br/>
         
           549094a vor 10 Monaten Sylvain Joyeux loaders: calling #to_s on a loader is potentially expensive, log it using a block<br/>
         
           772d30b vor 10 Monaten Sylvain Joyeux spec: define Project#each_deployment<br/>
         
           a67b24f vor 10 Monaten Sylvain Joyeux loaders: implement discovery methods for Files and PkgConfig<br/>
         
           623d912 vor 10 Monaten Sylvain Joyeux loaders: allow initializing a loader with a nil root loader<br/>
         
           99fc8c5 vor 10 Monaten Sylvain Joyeux loaders: extend the API to allow for manual registration of deployment and task models<br/>
         
           b16d8bf vor 11 Monaten Sylvain Joyeux Merge pull request #4 from orocos-toolchain/loaders_fix_hierarchical_registration<br/>
         
           53de341 vor 11 Monaten Sylvain Joyeux loaders: register loaded models on self even if self is not root<br/>
         
           7ea2b63 vor 11 Monaten Sylvain Joyeux loaders: fix Files#deployment_model_from_name to raise when the deployment is not found<br/>
         
           26016da vor 11 Monaten Sylvain Joyeux loaders: define Files#deployment_model_from_name<br/>
         
           0e118d0 vor 11 Monaten Sylvain Joyeux loaders: fix some #clear methods<br/>
         
           b7efa2b vor 11 Monaten Sylvain Joyeux test,gen: redirect the output of all external commands to a logfile<br/>
         
           a57d2ce vor 11 Monaten Sylvain Joyeux test: cleanup the test suite<br/>
         
           8feeea6 vor 11 Monaten Sylvain Joyeux test: do not load orogen/gen/test in orogen/test<br/>
         
           319683e vor 11 Monaten Sylvain Joyeux move the check for stray dots in the codegen part<br/>
         
           41f2442 vor 11 Monaten Sylvain Joyeux spec: make the maximum number of arguments in an operation a constant<br/>
         
           c4f8ec9 vor 11 Monaten Sylvain Joyeux test: define #data_dir and #wc_dir in all tests, not only the gen tests<br/>
         
           9bef381 vor 11 Monaten Sylvain Joyeux move the definition of Property#cxx_default_value into the gen parts<br/>
         
           732734a vor 11 Monaten Sylvain Joyeux spec: change the default value of Operation#doc from '' to nil<br/>
         
           bd8a8a5 vor 11 Monaten Sylvain Joyeux loaders: fix warning format from the pkg-config loader<br/>
         
           6c5db31 vor 11 Monaten Sylvain Joyeux typegen: need to require orogen/gen now<br/>
         
           a7ee25c vor 11 Monaten Sylvain Joyeux gen,test: remove obsolete test<br/>
         
           4d80518 vor 11 Monaten Sylvain Joyeux test: minor fixes<br/>
         
           e5f507d vor 11 Monaten Sylvain Joyeux spec: the exception raised by Typelib.from_ruby changed, update<br/>
         
           4da4362 vor 11 Monaten Sylvain Joyeux test: minor fixes<br/>
         
           43eb9f0 vor 11 Monaten Sylvain Joyeux move check_for_stray_dots in a generic place<br/>
         
           03373dc vor 11 Monaten Sylvain Joyeux gen,test: remove fragile assertions that don't have their place there<br/>
         
           dff6488 vor 11 Monaten Sylvain Joyeux gen,test: use Process.spawn instead of handmade fork/exec<br/>
         
           806fd65 vor 11 Monaten Sylvain Joyeux gen,test: export int32_t explicitly in typekit_opaque<br/>
         
           0c4fbc4 vor 11 Monaten Sylvain Joyeux gen,test: update typekit_opaque's user-visible opaque handling files<br/>
         
           1d3f8d9 vor 11 Monaten Sylvain Joyeux gen,test: remove explicit includes for 'vector' in typekit_opaque<br/>
         
           fedac1e vor 11 Monaten Sylvain Joyeux gen: OpaqueFwd need to declare all opaque types<br/>
         
           f4b8104 vor 11 Monaten Sylvain Joyeux gen: include stdexcept in OpaqueConvertions.hpp<br/>
         
           f4f64fb vor 11 Monaten Sylvain Joyeux gen: when resolving the typekit dependencies, generate a fatal error if one cannot be found<br/>
         
           cb49ad1 vor 11 Monaten Sylvain Joyeux spec: make the master/slave activity more consistent to the rest of the oroGen API<br/>
         
           c519007 vor 11 Monaten Sylvain Joyeux spec: fix ordering activities by dependencies when the deployment has no tasks<br/>
         
           ae5b7a8 vor 11 Monaten Sylvain Joyeux test: make the fd_triggered::Task test component more robust<br/>
         
           7f95571 vor 11 Monaten Sylvain Joyeux gen,test: update C/C++ headers<br/>
         
           341c481 vor 11 Monaten Sylvain Joyeux gen: fix backward compatibility after the change of namespace<br/>
         
           98bb93f vor 11 Monaten Sylvain Joyeux gen: allow calling #task_context without a block<br/>
         
           43265e4 vor 11 Monaten Sylvain Joyeux gen,test: interpret the TEST_DONT_CLEAN and TEST_KEEP_WC envvars as 'true' only if they are '1'<br/>
         
           764c4b5 vor 11 Monaten Sylvain Joyeux gen,test: make sure we can set the -j option to make<br/>
         
           d8951cb vor 11 Monaten Sylvain Joyeux gen: explicitly include &lt;rtt/TaskContext.hpp&gt; in main.cpp<br/>
         
           7227066 vor 11 Monaten Sylvain Joyeux gen: do not auto-export numeric types<br/>
         
           aaeb932 vor 11 Monaten Sylvain Joyeux gen: set the headers for standard int types to boost/stdint.hpp in normalize_registry<br/>
         
           616321e vor 11 Monaten Sylvain Joyeux gen: remove the generate_transports_for_base_type hack<br/>
         
           664dd36 vor 11 Monaten Sylvain Joyeux gen,test: add guards to test headers<br/>
         
           1f37611 vor 11 Monaten Sylvain Joyeux gen,test: refactor the generation-related tests<br/>
         
           bdbc8a6 vor 11 Monaten Sylvain Joyeux gen: fix path to the BoostSerialization header<br/>
         
           5626226 vor 11 Monaten Sylvain Joyeux gen: fix wrongly placed begin/rescue block<br/>
         
           46a9882 vor 11 Monaten Sylvain Joyeux ros: fix the default superclass in ROS::Spec::Package<br/>
         
           578463d vor 11 Monaten Sylvain Joyeux ros: make #import_types_from stricter than the one in Project<br/>
         
           265e09e vor 11 Monaten Sylvain Joyeux ros,test: update ROS tests<br/>
         
           a9b095e vor 11 Monaten Sylvain Joyeux loaders: RTT defines type handling for 'void', declare it<br/>
         
           6c7554b vor 11 Monaten Sylvain Joyeux test: move loading of flexmock and minitest/spec before coverage<br/>
         
           e668cca vor 11 Monaten Sylvain Joyeux test: require minitest/autorun in orogen/test<br/>
         
           e89776a vor 11 Monaten Sylvain Joyeux test: migrate tests to minitest<br/>
         
           0604176 vor 11 Monaten Sylvain Joyeux avoid redefinition of OroGen::TypekitMarshallers<br/>
         
           b599a5d vor 11 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into orogen_loaders<br/>
         
           9abde7e vor 1 Jahr, und 5 Monaten Sylvain Joyeux spec: in Typekit, forward the create_ calls to the underlying registry<br/>
         
           944c46f vor 1 Jahr, und 5 Monaten Sylvain Joyeux the RTT default typekit defines /bool and /double<br/>
         
           1fac913 vor 1 Jahr, und 5 Monaten Sylvain Joyeux allow to remove project load callbacks<br/>
         
           ef594e4 vor 1 Jahr, und 5 Monaten Sylvain Joyeux remove Loaders::Base#default_typekits, it is unused<br/>
         
           78f4a82 vor 1 Jahr, und 5 Monaten Sylvain Joyeux loaders: in #resolve_type, append the name of the loader to the error message<br/>
         
           12a690b vor 1 Jahr, und 5 Monaten Sylvain Joyeux loaders: define #clear<br/>
         
           abddce9 vor 1 Jahr, und 5 Monaten Sylvain Joyeux html: implement operation display<br/>
         
           475133d vor 1 Jahr, und 5 Monaten Sylvain Joyeux add missing 'double' type to orocos.typelist<br/>
         
           f9e3c5c vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: fix #typekit_for resolution from cached typekits when exported is true<br/>
         
           3457a5b vor 1 Jahr, und 6 Monaten Sylvain Joyeux improve error message<br/>
         
           e5fd8d2 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: add #each_available_project_name to the API<br/>
         
           817578d vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: define #find_task_context and #has_typekit on Loaders::Project<br/>
         
           45fb5b9 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: in RTT.setup_loaders, register the types in Typekit#typelist into typekits_by_type_name as well<br/>
         
           6eab3fb vor 1 Jahr, und 6 Monaten Sylvain Joyeux ros: fix launcher resolution in Loader<br/>
         
           94e06d9 vor 1 Jahr, und 6 Monaten Sylvain Joyeux ros: cleanup namespaces to match the structure on the RTT side<br/>
         
           d4084d9 vor 1 Jahr, und 6 Monaten Sylvain Joyeux Merge branch 'master' of ../orogen_ros into orogen_loaders<br/>
         
           9b94d20 vor 1 Jahr, und 6 Monaten Sylvain Joyeux prepare for integration in oroGen proper<br/>
         
           6738562 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: do not raise NotImplementedError in the Base#find_* methods<br/>
         
           8c14b23 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: define Base#intermediate_type?<br/>
         
           56849ba vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: any typekit that know a given type can be used to resolve opaques and intermediates<br/>
         
           617594d vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: define #has_project? and #has_typekit? in Files<br/>
         
           dbbbfdb vor 1 Jahr, und 6 Monaten Sylvain Joyeux spec: cache the default superclass in Project<br/>
         
           26f6577 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: cache the set of known deployments<br/>
         
           056f6ac vor 1 Jahr, und 6 Monaten Sylvain Joyeux fix usage of load_rosmap_by_package_name without the codegen part around<br/>
         
           d40efa1 vor 1 Jahr, und 6 Monaten Sylvain Joyeux move marshaller registration to orogen/gen<br/>
         
           771c821 vor 1 Jahr, und 6 Monaten Sylvain Joyeux define TypelibMarshallers and its logger in orogen.rb<br/>
         
           6153e69 vor 1 Jahr, und 6 Monaten Sylvain Joyeux test: modify the load_all script to use the aggregate loader<br/>
         
           c82d20f vor 1 Jahr, und 6 Monaten Sylvain Joyeux remove stub method that is actually overloaded later in the file<br/>
         
           aa9a10b vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: create the aggregate loader<br/>
         
           5e26fb2 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: make the raised NotFound errors more specific<br/>
         
           5feb28e vor 1 Jahr, und 6 Monaten Sylvain Joyeux move to the new OroGen loader API<br/>
         
           f8efe85 vor 1 Jahr, und 6 Monaten Sylvain Joyeux fix access to the plugin-loading method on OroGen<br/>
         
           e611a04 vor 1 Jahr, und 6 Monaten Sylvain Joyeux fix definition and usage of OROGEN_LIB_DIR<br/>
         
           513e879 vor 1 Jahr, und 6 Monaten Sylvain Joyeux extract the template code out of gen/base.rb in gen/templates.rb<br/>
         
           7d9d257 vor 1 Jahr, und 6 Monaten Sylvain Joyeux move some methods to the extension module where they actually belong<br/>
         
           92821c1 vor 1 Jahr, und 6 Monaten Sylvain Joyeux reviewed and cleaned logger access<br/>
         
           aa3cc0e vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: declare the bool type from the RTT typekit<br/>
         
           b474cae vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: define m_type?<br/>
         
           184a41c vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: allow to manually register a type on a loader<br/>
         
           ae3d367 vor 1 Jahr, und 6 Monaten Sylvain Joyeux fix TaskContext#implements?<br/>
         
           67e20cb vor 1 Jahr, und 6 Monaten Sylvain Joyeux rationalize some exception definitions<br/>
         
           1b9c642 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: fix deployment_model_from_name<br/>
         
           c6cff1c vor 1 Jahr, und 6 Monaten Sylvain Joyeux spec: resolve_type only has one argument now, fix<br/>
         
           41bea2a vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: define opaque_type_for<br/>
         
           8b2c9af vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: declare void, nil, string and friends in the orocos typekit<br/>
         
           7a3c56c vor 1 Jahr, und 6 Monaten Sylvain Joyeux spec: Spec::TaskContext really needs a project, force giving a first argument<br/>
         
           be7100f vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: set the RTT typekit as virtual<br/>
         
           f108f4e vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: fix PkgConfig.typekit_for<br/>
         
           5143e48 vor 1 Jahr, und 6 Monaten Sylvain Joyeux TEMP: callbacks<br/>
         
           a5f5101 vor 1 Jahr, und 6 Monaten Sylvain Joyeux define OROGEN_LIB_DIR, needed by the codegen part<br/>
         
           5436236 vor 1 Jahr, und 6 Monaten Sylvain Joyeux move some code that orocos.rb needs out of Gen into OroGen proper<br/>
         
           ac4bf4c vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: use normal typekit/project registration methods in RTT.setup_loaders<br/>
         
           54bf9c8 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: imported_typekits_for is supposed to raise when the type is not imported, do so<br/>
         
           64d8c9b vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: allow to register callbacks when new projects/typekits get loaded<br/>
         
           1be6298 vor 1 Jahr, und 6 Monaten Sylvain Joyeux don't alias the whole of OroGen to Orocos<br/>
         
           77947b9 vor 1 Jahr, und 6 Monaten Sylvain Joyeux move aggregation of type/typekit information to the loader class<br/>
         
           00cd3bb vor 1 Jahr, und 6 Monaten Sylvain Joyeux remove reference to Orocos::Generation from Spec<br/>
         
           64f3b1f vor 1 Jahr, und 6 Monaten Sylvain Joyeux fix infinite recursion in TaskContext#max_sizes<br/>
         
           a4b5629 vor 1 Jahr, und 6 Monaten Sylvain Joyeux do not install pkg-config files of deployments that are marked as do_not_install<br/>
         
           9c8673c vor 1 Jahr, und 6 Monaten Sylvain Joyeux test: add the load_all script, which attempts to load all installed oroGen projects<br/>
         
           a244cd9 vor 1 Jahr, und 6 Monaten Sylvain Joyeux test: add tests for Loaders::Base<br/>
         
           e9f4a3d vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: make it load even more of the Rock orogen projects<br/>
         
           6dd752c vor 1 Jahr, und 6 Monaten Sylvain Joyeux shuffle code between the Spec and Gen parts<br/>
         
           11fea93 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: in pkg-config, workaround bug in oroGen in which it was installing the pkg-config file for non-installable deployments<br/>
         
           acdea4d vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: make the set of default typekits an attribute on Loaders::Base<br/>
         
           c91a51b vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: get to load the models for RTT/OCL and a test project<br/>
         
           1d8105e vor 1 Jahr, und 6 Monaten Sylvain Joyeux use Project#default_task_superclass to initialize superclass on new task contexts<br/>
         
           007b837 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: move documentation for common methods from PkgConfig to Base<br/>
         
           a59084d vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: fix Project<br/>
         
           7a9fba2 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: fix call to __eval__<br/>
         
           17961ce vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: allow to specify which loader should be used to resolve dependencies<br/>
         
           0ab7f36 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: register the set of task models loaded so far<br/>
         
           c5c0971 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: cache the set of already loaded projects/typekits in Loaders::Base<br/>
         
           fab7139 vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: separate the loading of textual model representation from the creation of model objects<br/>
         
           8082e02 vor 1 Jahr, und 6 Monaten Sylvain Joyeux test: create a clean OroGen::SelfTest module<br/>
         
           5f540fc vor 1 Jahr, und 6 Monaten Sylvain Joyeux loaders: documentation<br/>
         
           c627007 vor 1 Jahr, und 6 Monaten Sylvain Joyeux implement recursive loading of dependencies<br/>
         
           c3ee72b vor 1 Jahr, und 6 Monaten Sylvain Joyeux introduction of a separate loading infrastructure, as well as Spec::Typekit and Spec::Project<br/>
         
           d6ca386 vor 1 Jahr, und 6 Monaten Sylvain Joyeux doc fix<br/>
         
           dcc2ebe vor 1 Jahr, und 6 Monaten Sylvain Joyeux start replacing the Orocos namespace by OroGen<br/>
         
           ece7937 vor 1 Jahr, und 6 Monaten Sylvain Joyeux rework model loading a little<br/>
         
           1f8093e vor 1 Jahr, und 7 Monaten Thomas Roehr Change to info message when ROS is not adding to Orocos.master_project<br/>
         
           32fd6bd vor 1 Jahr, und 7 Monaten Thomas Roehr Handle waiting for roscore to be available<br/>
         
           b616cf1 vor 1 Jahr, und 7 Monaten Thomas Roehr Update specs and tests<br/>
         
           00fbf3d vor 1 Jahr, und 7 Monaten Thomas Roehr Allow direct retrieval of node specification<br/>
         
           a12f2a4 vor 1 Jahr, und 7 Monaten Thomas Roehr Add tests<br/>
         
           4b0c1db vor 1 Jahr, und 7 Monaten Thomas Roehr Add launcher documentation<br/>
         
           226a81c vor 1 Jahr, und 7 Monaten Thomas Roehr Rename launch.rb to launcher.rb<br/>
         
           9ed3034 vor 1 Jahr, und 7 Monaten Thomas Roehr Add normalization of topic name<br/>
         
           ecce399 vor 1 Jahr, und 7 Monaten Thomas Roehr Alias ros_name for output and input topic with :topic_name<br/>
         
           b6f9481 vor 1 Jahr, und 7 Monaten Thomas Roehr Make ROS::Node a root_model, i.e. mark as having no superclass<br/>
         
           e5845a7 vor 1 Jahr, und 7 Monaten Thomas Roehr Add default task context for ROS Nodes<br/>
         
           901c9b7 vor 1 Jahr, und 7 Monaten Thomas Roehr Fix handling of roscore start and shutdown<br/>
         
           9bd5f18 vor 1 Jahr, und 7 Monaten Thomas Roehr Add Orocos::ROS#load_ros_project<br/>
         
           838c7e4 vor 1 Jahr, und 7 Monaten Thomas Roehr Add reloading of projects<br/>
         
           efc07f7 vor 1 Jahr, und 7 Monaten Thomas Roehr Rename tools.rb to base.rb<br/>
         
           e501e59 vor 1 Jahr, und 7 Monaten Thomas Roehr Restrict project specifications to refer to known ROS packages.<br/>
         
           61f6d47 vor 1 Jahr, und 7 Monaten Thomas Roehr Add documentation<br/>
         
           64c763b vor 1 Jahr, und 7 Monaten Thomas Roehr Allow to query whether the node specification is available<br/>
         
           0046b3c vor 1 Jahr, und 7 Monaten Thomas Roehr Raise if someone tries to create a simple deployment for a ROS project<br/>
         
           6d7b91d vor 1 Jahr, und 7 Monaten Thomas Roehr Add Project#using_ros_package as equivalent to using_task_library<br/>
         
           38d8c9d vor 1 Jahr, und 7 Monaten Thomas Roehr Add stub for Project#typekit<br/>
         
           d3dfc3a vor 1 Jahr, und 7 Monaten Thomas Roehr Use call to external_task_context instead of task_context to create a node<br/>
         
           8e925c7 vor 1 Jahr, und 7 Monaten Thomas Roehr Rename reuse_existing to load_lauch_file<br/>
         
           31841a6 vor 1 Jahr, und 7 Monaten Thomas Roehr use Logger::Hierarchy instead of creating a new Root logger<br/>
         
           fd07a48 vor 1 Jahr, und 7 Monaten Thomas Roehr Normalize name<br/>
         
           895faa2 vor 1 Jahr, und 7 Monaten Thomas Roehr Add test for rosnode_findpackage<br/>
         
           3f42a7f vor 1 Jahr, und 7 Monaten Thomas Roehr Add Orocos::ROS.rosnode_findpackage and Orocos::ROS.available_nodes<br/>
         
           6cbb9f9 vor 1 Jahr, und 7 Monaten Thomas Roehr Add equality check for ros nodes -- limited to name and package comparison<br/>
         
           0b21a33 vor 1 Jahr, und 7 Monaten Thomas Roehr Add roscore_pid, roscore_start, roscore_shutdown<br/>
         
           9577622 vor 1 Jahr, und 7 Monaten Thomas Roehr Fix loading of packages<br/>
         
           c52b75b vor 1 Jahr, und 7 Monaten Thomas Roehr Add documentation<br/>
         
           fb16ae0 vor 1 Jahr, und 7 Monaten Thomas Roehr Add root logger to Orocos::ROS module<br/>
         
           e2a5b65 vor 1 Jahr, und 7 Monaten Thomas Roehr Fix tests<br/>
         
           4814bc7 vor 1 Jahr, und 7 Monaten Thomas Roehr Update core ROS tools<br/>
         
           019f81e vor 1 Jahr, und 7 Monaten Thomas Roehr Fix orogen_project_description<br/>
         
           70bc2f3 vor 1 Jahr, und 7 Monaten Thomas Roehr Launch update error layout<br/>
         
           78c3664 vor 1 Jahr, und 7 Monaten Thomas Roehr Add eval block to launcher<br/>
         
           73931ad vor 1 Jahr, und 7 Monaten Thomas Roehr ros_node: reorder node into array insertion for clarity<br/>
         
           9a771e6 vor 1 Jahr, und 7 Monaten Thomas Roehr Adapt project to change of option name<br/>
         
           fef5a8b vor 1 Jahr, und 7 Monaten Thomas Roehr Cleanup Node<br/>
         
           f6beb2b vor 1 Jahr, und 7 Monaten Thomas Roehr Fix loading and cleanup Launch<br/>
         
           93f72b5 vor 1 Jahr, und 7 Monaten Thomas Roehr Fix Launch::to_s<br/>
         
           9459fcc vor 1 Jahr, und 7 Monaten Thomas Roehr Remove process control and move to orocos.rb<br/>
         
           d9d1e19 vor 1 Jahr, und 7 Monaten Thomas Roehr alias task_activities with nodes<br/>
         
           0cad2fa vor 1 Jahr, und 7 Monaten Thomas Roehr Fix retrieving attribute content<br/>
         
           0416c2c vor 1 Jahr, und 7 Monaten Thomas Roehr Add tests and current state<br/>
         
           e5d06d8 vor 1 Jahr, und 7 Monaten Thomas Roehr Add functionality to handle orogen based spec files to describe ros nodes and launch files<br/>
         
           6b18473 vor 1 Jahr, und 7 Monaten Thomas Roehr Add launch.rb<br/>
         
           f0eb1d3 vor 1 Jahr, und 7 Monaten Thomas Roehr Add ros_package to node<br/>
         
           34b8038 vor 2 Jahren Sylvain Joyeux fix #ros_node in Package and extend ImportedProject by Package when enabling the plugin<br/>
         
           152b174 vor 2 Jahren Sylvain Joyeux require orogen<br/>
         
           65187b8 vor 2 Jahren Sylvain Joyeux add dependency on orogen, and create an orogen plugin file<br/>
         
           54e83cb vor 2 Jahren Sylvain Joyeux fix namespaces<br/>
         
           ca2a6c1 vor 2 Jahren Sylvain Joyeux initial fully untested version of the plugin<br/>
         
           43f9532 vor 2 Jahren, und 1 Monat Sylvain Joyeux Initial commit<br/>
         
         </td></tr>
       
       



       <tr class="name" id="5">
         <th>gui/vizkit</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="6"> 60 commits</a> in ["03445b5 vor 23 Stunden Matthias Goldhoorn Fixed visualization of Floating values", "df9edd9 vor 11 Tagen Alexander Duda Fix: Vizkit is no longer displaying any transformations", "efe054f vor 2 Wochen Matthias Goldhoorn vizkit_item: fix uneeded conversion of datatypes to ruby", "3a4c8a8 vor 3 Wochen Alexander Duda added missing dep to base/scripts (for rock-display)", "9e131f1 vor 3 Wochen Alexander Duda OrientationView: remove duplicate callback", "0d0b12d vor 3 Wochen Alexander Duda Merge branch 'master' into rock-rc", "7b713ef vor 4 Wochen Alexander Duda Merge pull request #28 from rock-core/small_improvements", "c4f30a3 vor 4 Wochen Sylvain Joyeux fix type name", "502df2f vor 4 Wochen Sylvain Joyeux in transformer integration, make explicit how the producer name got split between task and port name", "741a3c7 vor 6 Wochen Sylvain Joyeux vizkit3d: factor out code to setup listening to a dynamic transform", "4895c27 vor 6 Wochen Sylvain Joyeux fix calls to raise (without Kernel.) on pure forwarders", "53cf004 vor 6 Wochen Sylvain Joyeux rock-transformer: integrate the transformer's example transformations", "20a1222 vor 8 Wochen Sylvain Joyeux Merge pull request #26 from rock-core/transformer", "3267d7d vor 8 Wochen Alexander rock_transformer: raise if no config file is given", "70ebc97 vor 8 Wochen Alexander rock_transformer: improve help and add option for creating config", "50c88aa vor 8 Wochen Alexander rock_transformer: explicitly load transformer.rb", "a3fae0c vor 9 Wochen Sylvain Joyeux Merge pull request #24 from rock-core/task_inspector", "345d708 vor 9 Wochen Alexander VirtualJoystick: fix connection to InputPorts", "da48171 vor 9 Wochen Alexander TaskInspector: fix context menu for InputPorts", "37d1aa6 vor 9 Wochen Sylvain Joyeux Merge pull request #23 from rock-core/fix_blockadapter_bind", "473c9f7 vor 9 Wochen Sylvain Joyeux fix BlockAdapter#bind", "63ad84f vor 9 Wochen Sylvain Joyeux Merge remote-tracking branch 'rock.core/improve_rock_transformer_usability'", "ee06a0e vor 2 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/stable' into rock1408", "e6128eb vor 3 Monaten Alexander Duda Merge pull request #20 from rock-core/minor_replay_improvements", "b0e50d4 vor 3 Monaten Sylvain Joyeux Merge pull request #22 from gustavoneves12/fix_setgrid", "02ecf49 vor 3 Monaten Gustavo Neves fix setGrid error", "0234e7d vor 3 Monaten Sylvain Joyeux vizkit3d_widget: add the API necessary to manually load transformer config files in the vizkit3d widget", "218ba12 vor 3 Monaten Sylvain Joyeux rock-transformer: do not access the transformer broadcaster in rock-transformer", "bf26f3a vor 3 Monaten Sylvain Joyeux rock-transformer: replace RigidBodyStateEditor by a custom made widget", "37bc174 vor 3 Monaten Sylvain Joyeux rock-transformer: warn about bad frames using a QMessageBox", "6d4a989 vor 3 Monaten Sylvain Joyeux rock-transformer: gracefully handle errors in the transformer file", "842dc3d vor 3 Monaten Sylvain Joyeux log_control: display full backtraces using the debug logger when replaying", "4ff6100 vor 3 Monaten Sylvain Joyeux replay: add a command-line flag to export all tasks", "4688087 vor 3 Monaten Alexander Duda Merge pull request #18 from rock-core/rock_transformer", "179f987 vor 3 Monaten Alexander Duda Merge pull request #17 from rock-core/plot2d_second_y_axis", "286ced7 vor 3 Monaten Alexander Duda Merge pull request #15 from rock-core/replay_layout", "4bc8392 vor 4 Monaten Sylvain Joyeux plot2d: refactor #graph2", "6538291 vor 4 Monaten Sylvain Joyeux plot2d: make the 2nd axis visible as soon as we enable it", "ad90175 vor 4 Monaten Sylvain Joyeux plot2d: make the zoom act on the current Y axis", "7aa1dbb vor 4 Monaten Alexander Duda Merge pull request #16 from rock-core/no_gc", "68492bb vor 4 Monaten Sylvain Joyeux rock-transformer: show the editor widgets even in live mode", "167bdbe vor 4 Monaten Sylvain Joyeux rock-transformer: add support to replay data", "ef0b851 vor 4 Monaten Sylvain Joyeux rock-transformer: remember the user-set values across reloads", "3a2aa25 vor 4 Monaten Sylvain Joyeux create the rock-transformer tool", "10f91cc vor 4 Monaten Sylvain Joyeux no need to run the GC manually anymore", "15af84e vor 4 Monaten Sylvain Joyeux replay: create a proper widget layout", "dfab6eb vor 5 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into orogen_loaders", "69cf708 vor 6 Monaten Alexander Duda Merge pull request #13 from rock-core/improved_state_viewer", "607a360 vor 6 Monaten Sylvain Joyeux improve StateViewer from inside and outside", "6e81380 vor 7 Monaten Alexander Duda Merge pull request #12 from maltewi/master", "84a0e05 vor 7 Monaten Alexander Duda Merge pull request #11 from saarnold/master", "11c6a07 vor 8 Monaten Malte Wirkus Bugfix: Local variable used before it was initialized", "5e61fbc vor 8 Monaten Alexander Duda connct_to_task: fix passing SIGNAL return values to getter method", "cc92166 vor 9 Monaten Alexander Duda Merge pull request #10 from rock-core/workaround_qtbindings_issue69", "17c9e3a vor 9 Monaten Sascha Arnold fixed 2d plotting of quaternions", "c2818ce vor 9 Monaten Sylvain Joyeux convert to the orogen loader API", "11dbae0 vor 9 Monaten Sylvain Joyeux workaround https://github.com/ryanmelt/qtbindings/issues/69", "5a05b34 vor 9 Monaten Alexander Duda Merge pull request #8 from annaborn/master", "b218e3a vor 9 Monaten Anna Born add missing dependency to drivers/orogen/transformer", "6595d83 vor 11 Monaten Matthias Goldhoorn Changed include order of header, for xenomai systems."] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_6"><td>
         
           03445b5 vor 23 Stunden Matthias Goldhoorn Fixed visualization of Floating values<br/>
         
           df9edd9 vor 11 Tagen Alexander Duda Fix: Vizkit is no longer displaying any transformations<br/>
         
           efe054f vor 2 Wochen Matthias Goldhoorn vizkit_item: fix uneeded conversion of datatypes to ruby<br/>
         
           3a4c8a8 vor 3 Wochen Alexander Duda added missing dep to base/scripts (for rock-display)<br/>
         
           9e131f1 vor 3 Wochen Alexander Duda OrientationView: remove duplicate callback<br/>
         
           0d0b12d vor 3 Wochen Alexander Duda Merge branch 'master' into rock-rc<br/>
         
           7b713ef vor 4 Wochen Alexander Duda Merge pull request #28 from rock-core/small_improvements<br/>
         
           c4f30a3 vor 4 Wochen Sylvain Joyeux fix type name<br/>
         
           502df2f vor 4 Wochen Sylvain Joyeux in transformer integration, make explicit how the producer name got split between task and port name<br/>
         
           741a3c7 vor 6 Wochen Sylvain Joyeux vizkit3d: factor out code to setup listening to a dynamic transform<br/>
         
           4895c27 vor 6 Wochen Sylvain Joyeux fix calls to raise (without Kernel.) on pure forwarders<br/>
         
           53cf004 vor 6 Wochen Sylvain Joyeux rock-transformer: integrate the transformer's example transformations<br/>
         
           20a1222 vor 8 Wochen Sylvain Joyeux Merge pull request #26 from rock-core/transformer<br/>
         
           3267d7d vor 8 Wochen Alexander rock_transformer: raise if no config file is given<br/>
         
           70ebc97 vor 8 Wochen Alexander rock_transformer: improve help and add option for creating config<br/>
         
           50c88aa vor 8 Wochen Alexander rock_transformer: explicitly load transformer.rb<br/>
         
           a3fae0c vor 9 Wochen Sylvain Joyeux Merge pull request #24 from rock-core/task_inspector<br/>
         
           345d708 vor 9 Wochen Alexander VirtualJoystick: fix connection to InputPorts<br/>
         
           da48171 vor 9 Wochen Alexander TaskInspector: fix context menu for InputPorts<br/>
         
           37d1aa6 vor 9 Wochen Sylvain Joyeux Merge pull request #23 from rock-core/fix_blockadapter_bind<br/>
         
           473c9f7 vor 9 Wochen Sylvain Joyeux fix BlockAdapter#bind<br/>
         
           63ad84f vor 9 Wochen Sylvain Joyeux Merge remote-tracking branch 'rock.core/improve_rock_transformer_usability'<br/>
         
           ee06a0e vor 2 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/stable' into rock1408<br/>
         
           e6128eb vor 3 Monaten Alexander Duda Merge pull request #20 from rock-core/minor_replay_improvements<br/>
         
           b0e50d4 vor 3 Monaten Sylvain Joyeux Merge pull request #22 from gustavoneves12/fix_setgrid<br/>
         
           02ecf49 vor 3 Monaten Gustavo Neves fix setGrid error<br/>
         
           0234e7d vor 3 Monaten Sylvain Joyeux vizkit3d_widget: add the API necessary to manually load transformer config files in the vizkit3d widget<br/>
         
           218ba12 vor 3 Monaten Sylvain Joyeux rock-transformer: do not access the transformer broadcaster in rock-transformer<br/>
         
           bf26f3a vor 3 Monaten Sylvain Joyeux rock-transformer: replace RigidBodyStateEditor by a custom made widget<br/>
         
           37bc174 vor 3 Monaten Sylvain Joyeux rock-transformer: warn about bad frames using a QMessageBox<br/>
         
           6d4a989 vor 3 Monaten Sylvain Joyeux rock-transformer: gracefully handle errors in the transformer file<br/>
         
           842dc3d vor 3 Monaten Sylvain Joyeux log_control: display full backtraces using the debug logger when replaying<br/>
         
           4ff6100 vor 3 Monaten Sylvain Joyeux replay: add a command-line flag to export all tasks<br/>
         
           4688087 vor 3 Monaten Alexander Duda Merge pull request #18 from rock-core/rock_transformer<br/>
         
           179f987 vor 3 Monaten Alexander Duda Merge pull request #17 from rock-core/plot2d_second_y_axis<br/>
         
           286ced7 vor 3 Monaten Alexander Duda Merge pull request #15 from rock-core/replay_layout<br/>
         
           4bc8392 vor 4 Monaten Sylvain Joyeux plot2d: refactor #graph2<br/>
         
           6538291 vor 4 Monaten Sylvain Joyeux plot2d: make the 2nd axis visible as soon as we enable it<br/>
         
           ad90175 vor 4 Monaten Sylvain Joyeux plot2d: make the zoom act on the current Y axis<br/>
         
           7aa1dbb vor 4 Monaten Alexander Duda Merge pull request #16 from rock-core/no_gc<br/>
         
           68492bb vor 4 Monaten Sylvain Joyeux rock-transformer: show the editor widgets even in live mode<br/>
         
           167bdbe vor 4 Monaten Sylvain Joyeux rock-transformer: add support to replay data<br/>
         
           ef0b851 vor 4 Monaten Sylvain Joyeux rock-transformer: remember the user-set values across reloads<br/>
         
           3a2aa25 vor 4 Monaten Sylvain Joyeux create the rock-transformer tool<br/>
         
           10f91cc vor 4 Monaten Sylvain Joyeux no need to run the GC manually anymore<br/>
         
           15af84e vor 4 Monaten Sylvain Joyeux replay: create a proper widget layout<br/>
         
           dfab6eb vor 5 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into orogen_loaders<br/>
         
           69cf708 vor 6 Monaten Alexander Duda Merge pull request #13 from rock-core/improved_state_viewer<br/>
         
           607a360 vor 6 Monaten Sylvain Joyeux improve StateViewer from inside and outside<br/>
         
           6e81380 vor 7 Monaten Alexander Duda Merge pull request #12 from maltewi/master<br/>
         
           84a0e05 vor 7 Monaten Alexander Duda Merge pull request #11 from saarnold/master<br/>
         
           11c6a07 vor 8 Monaten Malte Wirkus Bugfix: Local variable used before it was initialized<br/>
         
           5e61fbc vor 8 Monaten Alexander Duda connct_to_task: fix passing SIGNAL return values to getter method<br/>
         
           cc92166 vor 9 Monaten Alexander Duda Merge pull request #10 from rock-core/workaround_qtbindings_issue69<br/>
         
           17c9e3a vor 9 Monaten Sascha Arnold fixed 2d plotting of quaternions<br/>
         
           c2818ce vor 9 Monaten Sylvain Joyeux convert to the orogen loader API<br/>
         
           11dbae0 vor 9 Monaten Sylvain Joyeux workaround https://github.com/ryanmelt/qtbindings/issues/69<br/>
         
           5a05b34 vor 9 Monaten Alexander Duda Merge pull request #8 from annaborn/master<br/>
         
           b218e3a vor 9 Monaten Anna Born add missing dependency to drivers/orogen/transformer<br/>
         
           6595d83 vor 11 Monaten Matthias Goldhoorn Changed include order of header, for xenomai systems.<br/>
         
         </td></tr>
       
       



       <tr class="name" id="6">
         <th>gui/vizkit3d</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="7"> 47 commits</a> in ["f3c467f vor 4 Wochen Alexander Duda Merge pull request #18 from rock-core/configurable_frame_text_size", "1c743cf vor 4 Wochen Sylvain Joyeux make the frame text size configurable", "ba10c76 vor 7 Wochen Sylvain Joyeux Merge pull request #17 from rock-core/macos", "6de6c00 vor 7 Wochen Alexander Duda fix: add boost to INCLUDE_DIRECTORIES for all targets", "70a85c4 vor 7 Wochen Alexander Duda Merge pull request #15 from rock-core/env_plugins", "76d0199 vor 7 Wochen Sylvain Joyeux expose enable/disableEnvironmentPlugin methods as properties", "5126043 vor 10 Wochen Sylvain Joyeux clear the current environment plugin before setting a new one up", "bbdfb67 vor 2 Monaten Sylvain Joyeux disable the environment plugin first in clearEnvironmentPlugin", "73c72ab vor 2 Monaten Sylvain Joyeux fix environment plugin handling in setPluginDataFrameIntern", "8efe66b vor 2 Monaten Sylvain Joyeux add the concept of an environment plugin", "485a405 vor 3 Monaten Alexander fix linking against opengl - case sensitivity", "44d462b vor 3 Monaten Alexander Duda Merge pull request #16 from rock-core/final_transformer_fix", "2d527af vor 3 Monaten Alexander Duda Merge pull request #10 from rock-core/ruby_manipulator_access", "d9657fb vor 3 Monaten Alexander Duda fix linking against opengl", "2d2e50c vor 3 Monaten Sylvain Joyeux fix transform graph incremental update when both nodes in a new link have parents", "e52a733 vor 3 Monaten Sylvain Joyeux fix getVisualizationFrames when the list of frames is empty", "cfa4076 vor 3 Monaten Sylvain Joyeux fix interaction between the selection of camera manipulators and visualization frames", "e1eb5dd vor 3 Monaten Sylvain Joyeux fix wrong manipulator set in ORBIT_MANIPULATOR", "54c6930 vor 3 Monaten Sylvain Joyeux fix handling of StringList properties", "fde7161 vor 3 Monaten Sylvain Joyeux raise if the given manipulator is not an expected enum value in setCameraManipulator", "db2a170 vor 3 Monaten Sylvain Joyeux fix changing the manipulator from the property browser", "9b33fbf vor 3 Monaten Sylvain Joyeux emit propertyChanged in setCameraManipulator", "9070d8c vor 3 Monaten Sylvain Joyeux add accessors for the camera manipulators that can be called from ruby", "473683f vor 3 Monaten Sylvain Joyeux add missing case for ORBIT_MANIPULATOR in setCameraManipulator", "7e5c8f9 vor 3 Monaten Sylvain Joyeux document the OSG manipulators", "e0617da vor 3 Monaten Sylvain Joyeux make getVisualizationFrames properly return a QStringList instance", "c3a5381 vor 3 Monaten Sylvain Joyeux give access to the camera manipulators", "341766e vor 3 Monaten Sylvain Joyeux assume that Vizkit3DConfig always has a widget as parent", "49fd114 vor 3 Monaten Alexander Duda Merge pull request #8 from rock-core/opengl_debugging", "b20087c vor 3 Monaten Alexander Duda Merge pull request #5 from rock-core/fix_transformer_graph_handling", "e42d25c vor 3 Monaten Sylvain Joyeux clarify license for the GLDebugOperation code", "9b27939 vor 3 Monaten Sylvain Joyeux Merge pull request #13 from goldhoorn/isnan_fix", "b8744a4 vor 3 Monaten Matthias Goldhoorn abigious isnan fix with cx11 features", "018d97f vor 4 Monaten Sylvain Joyeux add GL debugging capabilities", "4217be6 vor 4 Monaten Sylvain Joyeux add tests for the transformer graph", "6fd22ea vor 4 Monaten Alexander Duda Merge pull request #6 from rock-core/replace_assert_by_exception", "43c477d vor 4 Monaten Sylvain Joyeux throw on invalid arguments, don't assert", "4de2b76 vor 4 Monaten Sylvain Joyeux fix wrong transformer graph generated in some configurations", "0f26f89 vor 6 Monaten Alexander Duda Vizkit3DWidget: add support for setting feature culling size", "6a0bc0f vor 6 Monaten Matthias Goldhoorn Merge pull request #2 from planthaber/includes", "a12a42a vor 6 Monaten Steffen Planthaber added missing include for std::runtime error", "68feccb vor 6 Monaten Alexander Duda Merge pull request #1 from rock-core/label", "5318d7e vor 6 Monaten Alexander Duda AxesNode: configurable axes labels", "45433a5 vor 6 Monaten Alexander Duda Vizkit3DPlugin: add property overall scale", "f3f5dd2 vor 7 Monaten Sylvain Joyeux update the readme", "ed764cc vor 7 Monaten Alexander Duda Viewer: add property for background color", "75a59c4 vor 7 Monaten Alexander Duda Add labels for axes (X;Y;Z)"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_7"><td>
         
           f3c467f vor 4 Wochen Alexander Duda Merge pull request #18 from rock-core/configurable_frame_text_size<br/>
         
           1c743cf vor 4 Wochen Sylvain Joyeux make the frame text size configurable<br/>
         
           ba10c76 vor 7 Wochen Sylvain Joyeux Merge pull request #17 from rock-core/macos<br/>
         
           6de6c00 vor 7 Wochen Alexander Duda fix: add boost to INCLUDE_DIRECTORIES for all targets<br/>
         
           70a85c4 vor 7 Wochen Alexander Duda Merge pull request #15 from rock-core/env_plugins<br/>
         
           76d0199 vor 7 Wochen Sylvain Joyeux expose enable/disableEnvironmentPlugin methods as properties<br/>
         
           5126043 vor 10 Wochen Sylvain Joyeux clear the current environment plugin before setting a new one up<br/>
         
           bbdfb67 vor 2 Monaten Sylvain Joyeux disable the environment plugin first in clearEnvironmentPlugin<br/>
         
           73c72ab vor 2 Monaten Sylvain Joyeux fix environment plugin handling in setPluginDataFrameIntern<br/>
         
           8efe66b vor 2 Monaten Sylvain Joyeux add the concept of an environment plugin<br/>
         
           485a405 vor 3 Monaten Alexander fix linking against opengl - case sensitivity<br/>
         
           44d462b vor 3 Monaten Alexander Duda Merge pull request #16 from rock-core/final_transformer_fix<br/>
         
           2d527af vor 3 Monaten Alexander Duda Merge pull request #10 from rock-core/ruby_manipulator_access<br/>
         
           d9657fb vor 3 Monaten Alexander Duda fix linking against opengl<br/>
         
           2d2e50c vor 3 Monaten Sylvain Joyeux fix transform graph incremental update when both nodes in a new link have parents<br/>
         
           e52a733 vor 3 Monaten Sylvain Joyeux fix getVisualizationFrames when the list of frames is empty<br/>
         
           cfa4076 vor 3 Monaten Sylvain Joyeux fix interaction between the selection of camera manipulators and visualization frames<br/>
         
           e1eb5dd vor 3 Monaten Sylvain Joyeux fix wrong manipulator set in ORBIT_MANIPULATOR<br/>
         
           54c6930 vor 3 Monaten Sylvain Joyeux fix handling of StringList properties<br/>
         
           fde7161 vor 3 Monaten Sylvain Joyeux raise if the given manipulator is not an expected enum value in setCameraManipulator<br/>
         
           db2a170 vor 3 Monaten Sylvain Joyeux fix changing the manipulator from the property browser<br/>
         
           9b33fbf vor 3 Monaten Sylvain Joyeux emit propertyChanged in setCameraManipulator<br/>
         
           9070d8c vor 3 Monaten Sylvain Joyeux add accessors for the camera manipulators that can be called from ruby<br/>
         
           473683f vor 3 Monaten Sylvain Joyeux add missing case for ORBIT_MANIPULATOR in setCameraManipulator<br/>
         
           7e5c8f9 vor 3 Monaten Sylvain Joyeux document the OSG manipulators<br/>
         
           e0617da vor 3 Monaten Sylvain Joyeux make getVisualizationFrames properly return a QStringList instance<br/>
         
           c3a5381 vor 3 Monaten Sylvain Joyeux give access to the camera manipulators<br/>
         
           341766e vor 3 Monaten Sylvain Joyeux assume that Vizkit3DConfig always has a widget as parent<br/>
         
           49fd114 vor 3 Monaten Alexander Duda Merge pull request #8 from rock-core/opengl_debugging<br/>
         
           b20087c vor 3 Monaten Alexander Duda Merge pull request #5 from rock-core/fix_transformer_graph_handling<br/>
         
           e42d25c vor 3 Monaten Sylvain Joyeux clarify license for the GLDebugOperation code<br/>
         
           9b27939 vor 3 Monaten Sylvain Joyeux Merge pull request #13 from goldhoorn/isnan_fix<br/>
         
           b8744a4 vor 3 Monaten Matthias Goldhoorn abigious isnan fix with cx11 features<br/>
         
           018d97f vor 4 Monaten Sylvain Joyeux add GL debugging capabilities<br/>
         
           4217be6 vor 4 Monaten Sylvain Joyeux add tests for the transformer graph<br/>
         
           6fd22ea vor 4 Monaten Alexander Duda Merge pull request #6 from rock-core/replace_assert_by_exception<br/>
         
           43c477d vor 4 Monaten Sylvain Joyeux throw on invalid arguments, don't assert<br/>
         
           4de2b76 vor 4 Monaten Sylvain Joyeux fix wrong transformer graph generated in some configurations<br/>
         
           0f26f89 vor 6 Monaten Alexander Duda Vizkit3DWidget: add support for setting feature culling size<br/>
         
           6a0bc0f vor 6 Monaten Matthias Goldhoorn Merge pull request #2 from planthaber/includes<br/>
         
           a12a42a vor 6 Monaten Steffen Planthaber added missing include for std::runtime error<br/>
         
           68feccb vor 6 Monaten Alexander Duda Merge pull request #1 from rock-core/label<br/>
         
           5318d7e vor 6 Monaten Alexander Duda AxesNode: configurable axes labels<br/>
         
           45433a5 vor 6 Monaten Alexander Duda Vizkit3DPlugin: add property overall scale<br/>
         
           f3f5dd2 vor 7 Monaten Sylvain Joyeux update the readme<br/>
         
           ed764cc vor 7 Monaten Alexander Duda Viewer: add property for background color<br/>
         
           75a59c4 vor 7 Monaten Alexander Duda Add labels for axes (X;Y;Z)<br/>
         
         </td></tr>
       
       









       <tr class="name" id="7">
         <th>tools/pocolog_cpp</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="8"> 16 commits</a> in ["e451693 vor 3 Monaten Sylvain Joyeux Merge pull request #5 from rock-core/fix_compilation_on_cxx11_and_clang", "14246c4 vor 3 Monaten Sylvain Joyeux fix compilation on C++11 and clang", "bd50929 vor 3 Monaten Sylvain Joyeux Merge pull request #3 from marvin2k/fix_compiler_warnings", "9b5d694 vor 5 Monaten Martin Zenzes [src/Write.hpp] remove unused variable", "80be450 vor 5 Monaten Martin Zenzes [src/Write] make \"stream indices\" of same type as in \"struct BlockHeader\"", "2e4f1f1 vor 5 Monaten Martin Zenzes [src/Format.hpp] use \"base/Time.hpp\" instead of backward-style \"base/time.h\"", "304f69c vor 5 Monaten Martin Zenzes [src/speedTest.cpp] fix -Wsign-compare", "200d8c6 vor 5 Monaten Martin Zenzes [src/Write] use correct types for filling the \"BlockHeader\"", "8323294 vor 5 Monaten Martin Zenzes [src/CMakeLists] remove uncommented line", "1200002 vor 5 Monaten Martin Zenzes [src/Indexer.cpp] fix -Wsign-compare", "e714881 vor 5 Monaten Martin Zenzes [src/MultiFileIndex.cpp] fix shadowing problem", "e13ee97 vor 5 Monaten Martin Zenzes [src/StreamDescription] uncomment unused variable", "8685b05 vor 5 Monaten Martin Zenzes [src/StreamDescription] fix \"-Wsign-compare\"", "5b77d19 vor 5 Monaten Matthias Goldhoorn Merge pull request #1 from marvin2k/fix_usage_of_assert", "0643904 vor 5 Monaten Martin Zenzes [src/IndexFile.cpp] fix \"-Wsign-compare\"", "9e49b5a vor 5 Monaten Martin Zenzes [src/IndexFile.cpp] fix usage of \"assert\""] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_8"><td>
         
           e451693 vor 3 Monaten Sylvain Joyeux Merge pull request #5 from rock-core/fix_compilation_on_cxx11_and_clang<br/>
         
           14246c4 vor 3 Monaten Sylvain Joyeux fix compilation on C++11 and clang<br/>
         
           bd50929 vor 3 Monaten Sylvain Joyeux Merge pull request #3 from marvin2k/fix_compiler_warnings<br/>
         
           9b5d694 vor 5 Monaten Martin Zenzes [src/Write.hpp] remove unused variable<br/>
         
           80be450 vor 5 Monaten Martin Zenzes [src/Write] make "stream indices" of same type as in "struct BlockHeader"<br/>
         
           2e4f1f1 vor 5 Monaten Martin Zenzes [src/Format.hpp] use "base/Time.hpp" instead of backward-style "base/time.h"<br/>
         
           304f69c vor 5 Monaten Martin Zenzes [src/speedTest.cpp] fix -Wsign-compare<br/>
         
           200d8c6 vor 5 Monaten Martin Zenzes [src/Write] use correct types for filling the "BlockHeader"<br/>
         
           8323294 vor 5 Monaten Martin Zenzes [src/CMakeLists] remove uncommented line<br/>
         
           1200002 vor 5 Monaten Martin Zenzes [src/Indexer.cpp] fix -Wsign-compare<br/>
         
           e714881 vor 5 Monaten Martin Zenzes [src/MultiFileIndex.cpp] fix shadowing problem<br/>
         
           e13ee97 vor 5 Monaten Martin Zenzes [src/StreamDescription] uncomment unused variable<br/>
         
           8685b05 vor 5 Monaten Martin Zenzes [src/StreamDescription] fix "-Wsign-compare"<br/>
         
           5b77d19 vor 5 Monaten Matthias Goldhoorn Merge pull request #1 from marvin2k/fix_usage_of_assert<br/>
         
           0643904 vor 5 Monaten Martin Zenzes [src/IndexFile.cpp] fix "-Wsign-compare"<br/>
         
           9e49b5a vor 5 Monaten Martin Zenzes [src/IndexFile.cpp] fix usage of "assert"<br/>
         
         </td></tr>
       
       





       <tr class="name" id="8">
         <th>base/types</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="9"> 78 commits</a> in ["ef5242e vor 8 Wochen Sylvain Joyeux Merge remote-tracking branch 'autobuild/stable'", "1100746 vor 9 Wochen Jakob Schwendner Merge pull request #38 from rock-core/viz_add_texturing_support_to_RBS_visualization", "2b5cce7 vor 9 Wochen Sylvain Joyeux Merge pull request #43 from saarnold/emit_property_changes", "77b3f85 vor 9 Wochen Sascha Arnold viz: added missing emit of property changed signals in all vizkit plugins", "3523bd5 vor 3 Monaten Sylvain Joyeux Merge pull request #23 from marvin2k/minor_fixes", "7f182f4 vor 3 Monaten Martin Zenzes don't use \"assert\"", "48e12b9 vor 3 Monaten jmachowinski Merge pull request #40 from jakobs/spline_fixes", "5f593f2 vor 3 Monaten Jakob Schwendner spline: added default argument to curve_length rice binding", "3c25208 vor 3 Monaten Jakob Schwendner fixed typos", "8e790d5 vor 3 Monaten Jakob Schwendner Merge pull request #28 from jmachowinski/master", "94a250b vor 3 Monaten Sylvain Joyeux add support to move a loaded model w.r.t the reference RBS", "ebdd656 vor 3 Monaten Sylvain Joyeux add support for texturing loaded models", "03ed628 vor 3 Monaten Thomas Roehr Removed interpretation of external flags from stream based logging", "b275bd0 vor 3 Monaten Thomas Roehr Updated documentation for logging", "8e3bb82 vor 3 Monaten Jakob Schwendner Merge pull request #31 from rock-core/viz_rbs_minor_fixes", "b83e20e vor 3 Monaten Jakob Schwendner Merge pull request #37 from MalgosiaG/master", "8b7be76 vor 3 Monaten Malgorzata Goldhoorn Changed wrong command", "b1c7e9c vor 3 Monaten Sylvain Joyeux Merge pull request #34 from malter/master", "208ff34 vor 3 Monaten Sylvain Joyeux Merge pull request #36 from goldhoorn/master", "7630842 vor 3 Monaten Matthias Goldhoorn isnan fixes for compilers with cxx11 support", "fd27d67 vor 3 Monaten Malte Langosz changed if-else branching", "151bd59 vor 3 Monaten Malte Langosz Merge branch 'master' of https://github.com/rock-core/base-types", "f6b25aa vor 3 Monaten Malte Langosz made sisl optional also for the ruby binding", "d0fa9cd vor 3 Monaten Sylvain Joyeux update the property browser when loadModel is called programatically", "2e727cd vor 3 Monaten Sylvain Joyeux remove unncessary prefixing by osg::", "0f6bf72 vor 3 Monaten Jakob Schwendner Merge pull request #30 from goldhoorn/master", "a93de6f vor 3 Monaten Matthias Goldhoorn Code cleanup within PointCloudVisualization", "52e4dad vor 3 Monaten Jakob Schwendner Merge pull request #29 from goldhoorn/master", "8002c79 vor 3 Monaten Janosch Machowinski fixed isApprox (again)", "3a4a3e6 vor 4 Monaten Matthias Goldhoorn Fixed color ordering of pointcloudes", "402b3a1 vor 4 Monaten Janosch Machowinski restore old behaviour of SplineBase::getCurvatureMax()", "94effdc vor 4 Monaten Janosch Machowinski typedef spline 2 for orogen", "bacd905 vor 4 Monaten Janosch Machowinski Use Angle::isApprox in Pose2D::IsApprox", "124c38f vor 4 Monaten Janosch Machowinski Added ability to interpolate Splines with similar parameters to another spline", "d036fb6 vor 4 Monaten Janosch Machowinski Added getCurveLength methods for subparts of the spline", "634abd2 vor 4 Monaten Janosch Machowinski Added method to create a subSpline", "1abd071 vor 4 Monaten Janosch Machowinski Made dichotomic_search work with all types, not only base::Vector3d", "30dfa08 vor 4 Monaten Janosch Machowinski Spline: Removed getUnitParameter", "97d1181 vor 4 Monaten Janosch Machowinski Added isApprox and std::cout stream operator for Pose2D", "3cf8b0f vor 4 Monaten Janosch Machowinski Bugfix: Fix isApprox in base::Angle", "a8999e2 vor 4 Monaten Sylvain Joyeux Merge pull request #25 from rock-core/fix_fragile_constant_resolution_in_Spline", "7929d80 vor 4 Monaten Sylvain Joyeux ruby: define the Spline bindings outside Types (closes #24)", "cc85dc1 vor 5 Monaten Sylvain Joyeux Merge pull request #20 from saarnold/new_depth_map_type", "f2f6e6a vor 5 Monaten Sascha Arnold Viz: added vizkit plugin for depth map base type", "2b16a69 vor 5 Monaten Sascha Arnold DepthMap: added unit tests for planar projection", "1b729d5 vor 5 Monaten Sascha Arnold DepthMap: refactored the computation of the local transformations and added a LUT for single unit axis rotations", "1114d1a vor 5 Monaten Sascha Arnold DepthMap: improved some namings", "fa1704c vor 6 Monaten Sylvain Joyeux Merge pull request #21 from goldhoorn/time_fix", "facdc60 vor 6 Monaten Matthias Goldhoorn Corrected casted types", "6be8e06 vor 7 Monaten Sylvain Joyeux Merge pull request #4 from rock-core/bugfix_ruby_use_minitest", "72c951e vor 7 Monaten Sylvain Joyeux Merge pull request #19 from dmronga/master", "859d31d vor 7 Monaten dmronga Adapt ruby bindings to changes in base/JointState.", "59966f3 vor 7 Monaten dmronga Merge branch 'master' of git://github.com/rock-core/base-types", "aec51fb vor 7 Monaten Sascha Arnold DepthMap: remove vertical and horizontal rotation speeds and min and max distances", "283aed5 vor 7 Monaten Sascha Arnold added first version of the new DepthMap base type", "1967750 vor 7 Monaten Sylvain Joyeux Merge pull request #15 from rock-core/add_default_constructor_to_base_samples_pressure", "a48b413 vor 7 Monaten dmronga Updated base/JointLimitRange and base/samples/Joints to comply with changes made in base/JointState", "96877b9 vor 7 Monaten dmronga Fixed the mess from previous commit. Updated test case.", "43b2303 vor 7 Monaten dmronga Added acceleration member to base/JointState. Added unit tests.", "61c16e3 vor 8 Monaten Sylvain Joyeux add default constructor to base::samples::Pressure", "b16fc0a vor 8 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/rock1408'", "111b3ec vor 8 Monaten Sylvain Joyeux Merge pull request #10 from rock-core/pressure", "16e7d40 vor 8 Monaten Sylvain Joyeux define a pressure data structure", "f39a616 vor 8 Monaten Sylvain Joyeux Merge pull request #12 from marvin2k/fix_base_temperature", "3cf4ff3 vor 8 Monaten Martin Zenzes base/Temperature: \"std:abs\" instead of fabs", "4d8d217 vor 8 Monaten Martin Zenzes base/Temperature: no superfluous includes", "e340115 vor 8 Monaten Sylvain Joyeux Re-apply pull request #6 from ajishbabu/master", "f3eed89 vor 8 Monaten Sylvain Joyeux Merge pull request #9 from planthaber/revert_wrench", "264c593 vor 8 Monaten Steffen Planthaber Revert \"Merge pull request #6 from ajishbabu/master\"", "e2d6583 vor 9 Monaten Sylvain Joyeux Merge pull request #6 from ajishbabu/master", "f5270ad vor 9 Monaten Sylvain Joyeux Merge pull request #7 from malter/fixed_boost_download", "84de42a vor 9 Monaten Malte Langosz changed NO_BOOST_DEPENDENCY to INSTALL_BOOST_IF_REQUIRED", "6bc22a6 vor 9 Monaten babu-dfki renamed WrenchState to Wrench", "7bec335 vor 9 Monaten Malte Langosz download boost only if not already installed", "26d4bd3 vor 10 Monaten babu-dfki Merge branch 'master' of github.com:ajishbabu/base-types", "c885dc8 vor 10 Monaten babu-dfki named vector of wrench to be used for mars simulation and SherpaTT motion controller", "a1daeb6 vor 10 Monaten babu-dfki named vector of wrench to be used for mars simulation and sherpa_tt motion controller", "698a78f vor 11 Monaten Sylvain Joyeux test: depend on minitest only"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_9"><td>
         
           ef5242e vor 8 Wochen Sylvain Joyeux Merge remote-tracking branch 'autobuild/stable'<br/>
         
           1100746 vor 9 Wochen Jakob Schwendner Merge pull request #38 from rock-core/viz_add_texturing_support_to_RBS_visualization<br/>
         
           2b5cce7 vor 9 Wochen Sylvain Joyeux Merge pull request #43 from saarnold/emit_property_changes<br/>
         
           77b3f85 vor 9 Wochen Sascha Arnold viz: added missing emit of property changed signals in all vizkit plugins<br/>
         
           3523bd5 vor 3 Monaten Sylvain Joyeux Merge pull request #23 from marvin2k/minor_fixes<br/>
         
           7f182f4 vor 3 Monaten Martin Zenzes don't use "assert"<br/>
         
           48e12b9 vor 3 Monaten jmachowinski Merge pull request #40 from jakobs/spline_fixes<br/>
         
           5f593f2 vor 3 Monaten Jakob Schwendner spline: added default argument to curve_length rice binding<br/>
         
           3c25208 vor 3 Monaten Jakob Schwendner fixed typos<br/>
         
           8e790d5 vor 3 Monaten Jakob Schwendner Merge pull request #28 from jmachowinski/master<br/>
         
           94a250b vor 3 Monaten Sylvain Joyeux add support to move a loaded model w.r.t the reference RBS<br/>
         
           ebdd656 vor 3 Monaten Sylvain Joyeux add support for texturing loaded models<br/>
         
           03ed628 vor 3 Monaten Thomas Roehr Removed interpretation of external flags from stream based logging<br/>
         
           b275bd0 vor 3 Monaten Thomas Roehr Updated documentation for logging<br/>
         
           8e3bb82 vor 3 Monaten Jakob Schwendner Merge pull request #31 from rock-core/viz_rbs_minor_fixes<br/>
         
           b83e20e vor 3 Monaten Jakob Schwendner Merge pull request #37 from MalgosiaG/master<br/>
         
           8b7be76 vor 3 Monaten Malgorzata Goldhoorn Changed wrong command<br/>
         
           b1c7e9c vor 3 Monaten Sylvain Joyeux Merge pull request #34 from malter/master<br/>
         
           208ff34 vor 3 Monaten Sylvain Joyeux Merge pull request #36 from goldhoorn/master<br/>
         
           7630842 vor 3 Monaten Matthias Goldhoorn isnan fixes for compilers with cxx11 support<br/>
         
           fd27d67 vor 3 Monaten Malte Langosz changed if-else branching<br/>
         
           151bd59 vor 3 Monaten Malte Langosz Merge branch 'master' of https://github.com/rock-core/base-types<br/>
         
           f6b25aa vor 3 Monaten Malte Langosz made sisl optional also for the ruby binding<br/>
         
           d0fa9cd vor 3 Monaten Sylvain Joyeux update the property browser when loadModel is called programatically<br/>
         
           2e727cd vor 3 Monaten Sylvain Joyeux remove unncessary prefixing by osg::<br/>
         
           0f6bf72 vor 3 Monaten Jakob Schwendner Merge pull request #30 from goldhoorn/master<br/>
         
           a93de6f vor 3 Monaten Matthias Goldhoorn Code cleanup within PointCloudVisualization<br/>
         
           52e4dad vor 3 Monaten Jakob Schwendner Merge pull request #29 from goldhoorn/master<br/>
         
           8002c79 vor 3 Monaten Janosch Machowinski fixed isApprox (again)<br/>
         
           3a4a3e6 vor 4 Monaten Matthias Goldhoorn Fixed color ordering of pointcloudes<br/>
         
           402b3a1 vor 4 Monaten Janosch Machowinski restore old behaviour of SplineBase::getCurvatureMax()<br/>
         
           94effdc vor 4 Monaten Janosch Machowinski typedef spline 2 for orogen<br/>
         
           bacd905 vor 4 Monaten Janosch Machowinski Use Angle::isApprox in Pose2D::IsApprox<br/>
         
           124c38f vor 4 Monaten Janosch Machowinski Added ability to interpolate Splines with similar parameters to another spline<br/>
         
           d036fb6 vor 4 Monaten Janosch Machowinski Added getCurveLength methods for subparts of the spline<br/>
         
           634abd2 vor 4 Monaten Janosch Machowinski Added method to create a subSpline<br/>
         
           1abd071 vor 4 Monaten Janosch Machowinski Made dichotomic_search work with all types, not only base::Vector3d<br/>
         
           30dfa08 vor 4 Monaten Janosch Machowinski Spline: Removed getUnitParameter<br/>
         
           97d1181 vor 4 Monaten Janosch Machowinski Added isApprox and std::cout stream operator for Pose2D<br/>
         
           3cf8b0f vor 4 Monaten Janosch Machowinski Bugfix: Fix isApprox in base::Angle<br/>
         
           a8999e2 vor 4 Monaten Sylvain Joyeux Merge pull request #25 from rock-core/fix_fragile_constant_resolution_in_Spline<br/>
         
           7929d80 vor 4 Monaten Sylvain Joyeux ruby: define the Spline bindings outside Types (closes #24)<br/>
         
           cc85dc1 vor 5 Monaten Sylvain Joyeux Merge pull request #20 from saarnold/new_depth_map_type<br/>
         
           f2f6e6a vor 5 Monaten Sascha Arnold Viz: added vizkit plugin for depth map base type<br/>
         
           2b16a69 vor 5 Monaten Sascha Arnold DepthMap: added unit tests for planar projection<br/>
         
           1b729d5 vor 5 Monaten Sascha Arnold DepthMap: refactored the computation of the local transformations and added a LUT for single unit axis rotations<br/>
         
           1114d1a vor 5 Monaten Sascha Arnold DepthMap: improved some namings<br/>
         
           fa1704c vor 6 Monaten Sylvain Joyeux Merge pull request #21 from goldhoorn/time_fix<br/>
         
           facdc60 vor 6 Monaten Matthias Goldhoorn Corrected casted types<br/>
         
           6be8e06 vor 7 Monaten Sylvain Joyeux Merge pull request #4 from rock-core/bugfix_ruby_use_minitest<br/>
         
           72c951e vor 7 Monaten Sylvain Joyeux Merge pull request #19 from dmronga/master<br/>
         
           859d31d vor 7 Monaten dmronga Adapt ruby bindings to changes in base/JointState.<br/>
         
           59966f3 vor 7 Monaten dmronga Merge branch 'master' of git://github.com/rock-core/base-types<br/>
         
           aec51fb vor 7 Monaten Sascha Arnold DepthMap: remove vertical and horizontal rotation speeds and min and max distances<br/>
         
           283aed5 vor 7 Monaten Sascha Arnold added first version of the new DepthMap base type<br/>
         
           1967750 vor 7 Monaten Sylvain Joyeux Merge pull request #15 from rock-core/add_default_constructor_to_base_samples_pressure<br/>
         
           a48b413 vor 7 Monaten dmronga Updated base/JointLimitRange and base/samples/Joints to comply with changes made in base/JointState<br/>
         
           96877b9 vor 7 Monaten dmronga Fixed the mess from previous commit. Updated test case.<br/>
         
           43b2303 vor 7 Monaten dmronga Added acceleration member to base/JointState. Added unit tests.<br/>
         
           61c16e3 vor 8 Monaten Sylvain Joyeux add default constructor to base::samples::Pressure<br/>
         
           b16fc0a vor 8 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/rock1408'<br/>
         
           111b3ec vor 8 Monaten Sylvain Joyeux Merge pull request #10 from rock-core/pressure<br/>
         
           16e7d40 vor 8 Monaten Sylvain Joyeux define a pressure data structure<br/>
         
           f39a616 vor 8 Monaten Sylvain Joyeux Merge pull request #12 from marvin2k/fix_base_temperature<br/>
         
           3cf4ff3 vor 8 Monaten Martin Zenzes base/Temperature: "std:abs" instead of fabs<br/>
         
           4d8d217 vor 8 Monaten Martin Zenzes base/Temperature: no superfluous includes<br/>
         
           e340115 vor 8 Monaten Sylvain Joyeux Re-apply pull request #6 from ajishbabu/master<br/>
         
           f3eed89 vor 8 Monaten Sylvain Joyeux Merge pull request #9 from planthaber/revert_wrench<br/>
         
           264c593 vor 8 Monaten Steffen Planthaber Revert "Merge pull request #6 from ajishbabu/master"<br/>
         
           e2d6583 vor 9 Monaten Sylvain Joyeux Merge pull request #6 from ajishbabu/master<br/>
         
           f5270ad vor 9 Monaten Sylvain Joyeux Merge pull request #7 from malter/fixed_boost_download<br/>
         
           84de42a vor 9 Monaten Malte Langosz changed NO_BOOST_DEPENDENCY to INSTALL_BOOST_IF_REQUIRED<br/>
         
           6bc22a6 vor 9 Monaten babu-dfki renamed WrenchState to Wrench<br/>
         
           7bec335 vor 9 Monaten Malte Langosz download boost only if not already installed<br/>
         
           26d4bd3 vor 10 Monaten babu-dfki Merge branch 'master' of github.com:ajishbabu/base-types<br/>
         
           c885dc8 vor 10 Monaten babu-dfki named vector of wrench to be used for mars simulation and SherpaTT motion controller<br/>
         
           a1daeb6 vor 10 Monaten babu-dfki named vector of wrench to be used for mars simulation and sherpa_tt motion controller<br/>
         
           698a78f vor 11 Monaten Sylvain Joyeux test: depend on minitest only<br/>
         
         </td></tr>
       
       



       <tr class="name" id="9">
         <th>base/cmake</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="10"> 14 commits</a> in ["e9d0f65 vor 9 Wochen Jakob Schwendner Merge pull request #8 from rock-core/add_file_mode_to_rock_ruby_test", "8076c76 vor 9 Wochen Sylvain Joyeux Merge pull request #9 from malter/master", "20d4eb1 vor 9 Wochen Matthias Goldhoorn Merge pull request #11 from goldhoorn/cxx11", "0e3d964 vor 10 Wochen Sylvain Joyeux update documentation of rock_ruby_test", "94dd9ef vor 3 Monaten Matthias Goldhoorn Make enabling of cxx11 possible via cmake define", "a31ed75 vor 3 Monaten Matthias Goldhoorn Added macro for CXX11 activation (not enabled by default (so far))", "80f6abb vor 3 Monaten Matthias Goldhoorn Merge pull request #10 from joto/patch-1", "5e3301d vor 3 Monaten Jochen Topf Quote variable to avoid error when it is empty.", "9dbc2db vor 3 Monaten Malte Langosz \"-z noexecstack\" is not a known option in the default os_x linker", "a2b9300 vor 5 Monaten Sylvain Joyeux add the 'FILES' mode in rock_ruby_test for consistency reasons", "39aca3b vor 7 Monaten Sylvain Joyeux Merge pull request #4 from rock-core/rock_library_for_header_only_libraries", "d908404 vor 8 Monaten Sylvain Joyeux Merge pull request #6 from marvin2k/reword_comments", "dd75867 vor 8 Monaten Martin Zenzes Rock.cmake: fix some comments", "47d0662 vor 9 Monaten Sylvain Joyeux fix rock_library with only headers"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_10"><td>
         
           e9d0f65 vor 9 Wochen Jakob Schwendner Merge pull request #8 from rock-core/add_file_mode_to_rock_ruby_test<br/>
         
           8076c76 vor 9 Wochen Sylvain Joyeux Merge pull request #9 from malter/master<br/>
         
           20d4eb1 vor 9 Wochen Matthias Goldhoorn Merge pull request #11 from goldhoorn/cxx11<br/>
         
           0e3d964 vor 10 Wochen Sylvain Joyeux update documentation of rock_ruby_test<br/>
         
           94dd9ef vor 3 Monaten Matthias Goldhoorn Make enabling of cxx11 possible via cmake define<br/>
         
           a31ed75 vor 3 Monaten Matthias Goldhoorn Added macro for CXX11 activation (not enabled by default (so far))<br/>
         
           80f6abb vor 3 Monaten Matthias Goldhoorn Merge pull request #10 from joto/patch-1<br/>
         
           5e3301d vor 3 Monaten Jochen Topf Quote variable to avoid error when it is empty.<br/>
         
           9dbc2db vor 3 Monaten Malte Langosz "-z noexecstack" is not a known option in the default os_x linker<br/>
         
           a2b9300 vor 5 Monaten Sylvain Joyeux add the 'FILES' mode in rock_ruby_test for consistency reasons<br/>
         
           39aca3b vor 7 Monaten Sylvain Joyeux Merge pull request #4 from rock-core/rock_library_for_header_only_libraries<br/>
         
           d908404 vor 8 Monaten Sylvain Joyeux Merge pull request #6 from marvin2k/reword_comments<br/>
         
           dd75867 vor 8 Monaten Martin Zenzes Rock.cmake: fix some comments<br/>
         
           47d0662 vor 9 Monaten Sylvain Joyeux fix rock_library with only headers<br/>
         
         </td></tr>
       
       







       <tr class="name" id="10">
         <th>base/scripts</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="11"> 44 commits</a> in ["2a35b9e vor 3 Tagen Matthias Goldhoorn avoid rendering top level items", "0a15279 vor 9 Wochen Sylvain Joyeux release: mention the involved packages in announce-rc", "ce8c639 vor 9 Wochen Sylvain Joyeux release: send the emails as plaintext", "796a62e vor 9 Wochen Sylvain Joyeux release: add debug options to announce-rc", "4658b51 vor 9 Wochen Sylvain Joyeux release: make ReleaseAdmin use its own logger", "33b9e85 vor 9 Wochen Sylvain Joyeux release: superseded validate_maintainers by maintainer_info and announce-rc", "19032fc vor 9 Wochen Sylvain Joyeux release: improve maintainer and author management", "a0ea18a vor 9 Wochen Sylvain Joyeux release: setup sendgrid to send the emails out", "ff7d24c vor 9 Wochen Sylvain Joyeux release: fine-tune announce-rc email generation", "6989722 vor 9 Wochen Sylvain Joyeux release: in 'checkout', allow to update existing packages", "85bc3e9 vor 9 Wochen Sylvain Joyeux release: fix encoding issues", "e55f6cc vor 9 Wochen Sylvain Joyeux release: show the exception class in error message", "c70f7fe vor 9 Wochen Sylvain Joyeux release: implement sending a RC email to all the package maintainers", "1dfdc0d vor 9 Wochen Sylvain Joyeux release: don't load autoproj with 'silent' if in verbose mode", "6fd49f0 vor 9 Wochen Sylvain Joyeux release: better handling of switch master|stable", "8de42cd vor 9 Wochen Sylvain Joyeux release: fix constant name after having moved Release::Admin to ReleaseAdmin", "edb1e96 vor 9 Wochen Sylvain Joyeux release: add the versions subcommand", "f957424 vor 10 Wochen Sylvain Joyeux release: create ${config_dir}/overrides.d before switching", "566e978 vor 10 Wochen Sylvain Joyeux release: fix how the admin subcommand shows up", "644250d vor 10 Wochen Sylvain Joyeux release: some subprojects have minus in their names (rock-image-processing)", "96bd12b vor 10 Wochen Sylvain Joyeux release: tune the release notes template", "dd65790 vor 10 Wochen Sylvain Joyeux release: implement the create-rc admin command", "82756c6 vor 10 Wochen Sylvain Joyeux release: move the release notes to RELEASE_NOTES.md at toplevel", "4891601 vor 10 Wochen Sylvain Joyeux release: add orocos-toolchain as a location for Rock packages", "553dd23 vor 10 Wochen Sylvain Joyeux release: define --verbose for rock-release admin", "76851e4 vor 2 Monaten Sylvain Joyeux create the rock-release tool", "ec71b8b vor 4 Monaten Sylvain Joyeux Merge pull request #7 from rock-core/fix_log_handling_in_rockrun", "da6d725 vor 4 Monaten Sylvain Joyeux Merge pull request #8 from rock-core/update_rock_browse", "4c6b12a vor 4 Monaten Sylvain Joyeux Merge pull request #10 from 2maz/rock-log-level", "f5b47df vor 4 Monaten Thomas Roehr Add rock-log-level to allow setting of ORO_LOGLEVEL and BASE_LOG_LEVEL in one go", "90ede85 vor 4 Monaten Matthias Goldhoorn Merge pull request #9 from 2maz/update-template-refs", "21d871e vor 4 Monaten Thomas Roehr Update template urls to github repositories", "3b154f3 vor 4 Monaten Sylvain Joyeux browse: allow selecting an item from the command line", "04cdd06 vor 4 Monaten Sylvain Joyeux fix formatting of osdeps", "0bd78f1 vor 4 Monaten Sylvain Joyeux implement hyperlinking for rock-browse", "8076213 vor 4 Monaten Sylvain Joyeux cleanup rock-browse", "75935a2 vor 5 Monaten Sylvain Joyeux convert rock-browse to the loader API", "4257a85 vor 5 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into orogen_loaders", "a59a2e3 vor 6 Monaten Sylvain Joyeux Merge pull request #4 from rock-core/make_shell_helpers_bourne_compatible", "749c4d2 vor 6 Monaten Matthias Goldhoorn replaced deprecated AUTOPROJ_PROJECT_BASE with AUTOPROJ_CURRENT_ROOT", "4c9098d vor 7 Monaten Sylvain Joyeux create a shell helper file that is bourne-compatible", "573c6f9 vor 8 Monaten Sylvain Joyeux add the --log option to rock-run", "8b92077 vor 11 Monaten Sylvain Joyeux do not register oroGen files from models/orogen", "e94eb82 vor 11 Monaten Sylvain Joyeux convert rock-inspect to oroGen's loader API"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_11"><td>
         
           2a35b9e vor 3 Tagen Matthias Goldhoorn avoid rendering top level items<br/>
         
           0a15279 vor 9 Wochen Sylvain Joyeux release: mention the involved packages in announce-rc<br/>
         
           ce8c639 vor 9 Wochen Sylvain Joyeux release: send the emails as plaintext<br/>
         
           796a62e vor 9 Wochen Sylvain Joyeux release: add debug options to announce-rc<br/>
         
           4658b51 vor 9 Wochen Sylvain Joyeux release: make ReleaseAdmin use its own logger<br/>
         
           33b9e85 vor 9 Wochen Sylvain Joyeux release: superseded validate_maintainers by maintainer_info and announce-rc<br/>
         
           19032fc vor 9 Wochen Sylvain Joyeux release: improve maintainer and author management<br/>
         
           a0ea18a vor 9 Wochen Sylvain Joyeux release: setup sendgrid to send the emails out<br/>
         
           ff7d24c vor 9 Wochen Sylvain Joyeux release: fine-tune announce-rc email generation<br/>
         
           6989722 vor 9 Wochen Sylvain Joyeux release: in 'checkout', allow to update existing packages<br/>
         
           85bc3e9 vor 9 Wochen Sylvain Joyeux release: fix encoding issues<br/>
         
           e55f6cc vor 9 Wochen Sylvain Joyeux release: show the exception class in error message<br/>
         
           c70f7fe vor 9 Wochen Sylvain Joyeux release: implement sending a RC email to all the package maintainers<br/>
         
           1dfdc0d vor 9 Wochen Sylvain Joyeux release: don't load autoproj with 'silent' if in verbose mode<br/>
         
           6fd49f0 vor 9 Wochen Sylvain Joyeux release: better handling of switch master|stable<br/>
         
           8de42cd vor 9 Wochen Sylvain Joyeux release: fix constant name after having moved Release::Admin to ReleaseAdmin<br/>
         
           edb1e96 vor 9 Wochen Sylvain Joyeux release: add the versions subcommand<br/>
         
           f957424 vor 10 Wochen Sylvain Joyeux release: create ${config_dir}/overrides.d before switching<br/>
         
           566e978 vor 10 Wochen Sylvain Joyeux release: fix how the admin subcommand shows up<br/>
         
           644250d vor 10 Wochen Sylvain Joyeux release: some subprojects have minus in their names (rock-image-processing)<br/>
         
           96bd12b vor 10 Wochen Sylvain Joyeux release: tune the release notes template<br/>
         
           dd65790 vor 10 Wochen Sylvain Joyeux release: implement the create-rc admin command<br/>
         
           82756c6 vor 10 Wochen Sylvain Joyeux release: move the release notes to RELEASE_NOTES.md at toplevel<br/>
         
           4891601 vor 10 Wochen Sylvain Joyeux release: add orocos-toolchain as a location for Rock packages<br/>
         
           553dd23 vor 10 Wochen Sylvain Joyeux release: define --verbose for rock-release admin<br/>
         
           76851e4 vor 2 Monaten Sylvain Joyeux create the rock-release tool<br/>
         
           ec71b8b vor 4 Monaten Sylvain Joyeux Merge pull request #7 from rock-core/fix_log_handling_in_rockrun<br/>
         
           da6d725 vor 4 Monaten Sylvain Joyeux Merge pull request #8 from rock-core/update_rock_browse<br/>
         
           4c6b12a vor 4 Monaten Sylvain Joyeux Merge pull request #10 from 2maz/rock-log-level<br/>
         
           f5b47df vor 4 Monaten Thomas Roehr Add rock-log-level to allow setting of ORO_LOGLEVEL and BASE_LOG_LEVEL in one go<br/>
         
           90ede85 vor 4 Monaten Matthias Goldhoorn Merge pull request #9 from 2maz/update-template-refs<br/>
         
           21d871e vor 4 Monaten Thomas Roehr Update template urls to github repositories<br/>
         
           3b154f3 vor 4 Monaten Sylvain Joyeux browse: allow selecting an item from the command line<br/>
         
           04cdd06 vor 4 Monaten Sylvain Joyeux fix formatting of osdeps<br/>
         
           0bd78f1 vor 4 Monaten Sylvain Joyeux implement hyperlinking for rock-browse<br/>
         
           8076213 vor 4 Monaten Sylvain Joyeux cleanup rock-browse<br/>
         
           75935a2 vor 5 Monaten Sylvain Joyeux convert rock-browse to the loader API<br/>
         
           4257a85 vor 5 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into orogen_loaders<br/>
         
           a59a2e3 vor 6 Monaten Sylvain Joyeux Merge pull request #4 from rock-core/make_shell_helpers_bourne_compatible<br/>
         
           749c4d2 vor 6 Monaten Matthias Goldhoorn replaced deprecated AUTOPROJ_PROJECT_BASE with AUTOPROJ_CURRENT_ROOT<br/>
         
           4c9098d vor 7 Monaten Sylvain Joyeux create a shell helper file that is bourne-compatible<br/>
         
           573c6f9 vor 8 Monaten Sylvain Joyeux add the --log option to rock-run<br/>
         
           8b92077 vor 11 Monaten Sylvain Joyeux do not register oroGen files from models/orogen<br/>
         
           e94eb82 vor 11 Monaten Sylvain Joyeux convert rock-inspect to oroGen's loader API<br/>
         
         </td></tr>
       
       



       <tr class="name" id="11">
         <th>base/templates/cmake_lib</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="12"> 6 commits</a> in ["1784022 vor 2 Monaten Sylvain Joyeux Merge pull request #1 from rock-core/updates", "2c31ac5 vor 3 Monaten Sylvain Joyeux move README to README.md, and add more information to it", "c988825 vor 3 Monaten Sylvain Joyeux fix indentation style in Main.cpp", "219baf1 vor 3 Monaten Sylvain Joyeux move iostream include from hpp to cpp", "efc5c00 vor 3 Monaten Sylvain Joyeux add 'using namespace std' in implementation file", "277d5ce vor 3 Monaten Sylvain Joyeux fix style"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_12"><td>
         
           1784022 vor 2 Monaten Sylvain Joyeux Merge pull request #1 from rock-core/updates<br/>
         
           2c31ac5 vor 3 Monaten Sylvain Joyeux move README to README.md, and add more information to it<br/>
         
           c988825 vor 3 Monaten Sylvain Joyeux fix indentation style in Main.cpp<br/>
         
           219baf1 vor 3 Monaten Sylvain Joyeux move iostream include from hpp to cpp<br/>
         
           efc5c00 vor 3 Monaten Sylvain Joyeux add 'using namespace std' in implementation file<br/>
         
           277d5ce vor 3 Monaten Sylvain Joyeux fix style<br/>
         
         </td></tr>
       
       











       <tr class="name" id="12">
         <th>base/orogen/std</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="13"> 1 commits</a> in ["cd3ec86 vor 7 Wochen Sylvain Joyeux register include metadata for standard C++ types as well"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_13"><td>
         
           cd3ec86 vor 7 Wochen Sylvain Joyeux register include metadata for standard C++ types as well<br/>
         
         </td></tr>
       
       



       <tr class="name" id="13">
         <th>tools/syskit</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="14"> 246 commits</a> in ["eb57476 vor 8 Wochen Sylvain Joyeux Merge pull request #44 from maltewi/remote_processes_bugfix", "717817e vor 8 Wochen dmronga added missing require statement to include Orocos::RemoteProcesses::Client", "f083df2 vor 10 Wochen Sylvain Joyeux Merge pull request #42 from maltewi/orogen_compatibility", "1f5d44b vor 10 Wochen Malte Wirkus Orocos::HTML is now names OroGen::HTML (cf. tools/orogen)", "74d9b9b vor 5 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into orogen_loaders", "b403efb vor 8 Monaten Sylvain Joyeux Merge pull request #31 from rock-core/fix_instance_requirement_display", "5e285e6 vor 8 Monaten Sylvain Joyeux gui: fix display of instance requirements", "8486f23 vor 8 Monaten Sylvain Joyeux Merge pull request #28 from goldhoorn/fix_shell", "3b91dda vor 9 Monaten Your Name shell: fixed wrong namespace for Robot debug output", "509146c vor 9 Monaten Sylvain Joyeux Merge pull request #24 from goldhoorn/fix_priniting_of_device_instances", "c153b6e vor 9 Monaten auv fixed typo in printing of master_device_instance", "5c0a204 vor 9 Monaten Sylvain Joyeux Merge pull request #20 from goldhoorn/pp_master_device", "1529b9f vor 9 Monaten Matthias Goldhoorn Provide pretty_print for MasterDeiceInstance", "e97ab7d vor 10 Monaten Matthias Goldhoorn Merge pull request #17 from goldhoorn/process_manager", "f68a74e vor 10 Monaten Matthias Goldhoorn Added missing includes for ProcessServers", "7b7e9ba vor 10 Monaten Sylvain Joyeux implement a way to deploy a subclass RubyTaskContext", "a3c9fe5 vor 10 Monaten Sylvain Joyeux models: get rid of Port#actual_name", "5cba046 vor 10 Monaten Sylvain Joyeux app: fix type export initialization", "69e5ef6 vor 10 Monaten Sylvain Joyeux app: fix mixup in the loaders", "57fb968 vor 10 Monaten Sylvain Joyeux app: fix nonsensical return value for #use_deployment", "58eec76 vor 11 Monaten Sylvain Joyeux test: generalize the availability of _def and _dev shortcuts in profile tests", "7425517 vor 11 Monaten Sylvain Joyeux fix invalidation of cached dependency injection in Profile and RobotDefinition (closes #7)", "317288c vor 11 Monaten Sylvain Joyeux test: make sure we can generate network SVGs if the test name contains '/'", "59e0b90 vor 11 Monaten Sylvain Joyeux make Syskit.proxy_task_model_for ignore redundant services (closes #8)", "3e6c82e vor 11 Monaten Sylvain Joyeux test: no need to call Minitest.autorun explicitely anymore", "7bbdd3e vor 11 Monaten Sylvain Joyeux net_gen: fix network deployment after 89c4198f9eec", "9388616 vor 11 Monaten Sylvain Joyeux in Deployment, feed the deployment model directly to process server's #start", "2817186 vor 11 Monaten Sylvain Joyeux resolve Deployment#process_server_config greedily", "91e02d9 vor 11 Monaten Sylvain Joyeux test,net_gen: need to start the deployment before calling Logger#configure", "49fd3b6 vor 11 Monaten Sylvain Joyeux fix DependencyInjection#resolve_recursive_selection_mapping", "93ae6a6 vor 11 Monaten Sylvain Joyeux net_gen: fix test for ready-to-merge tasks in #process_possible_cycles", "31e622f vor 11 Monaten Sylvain Joyeux app: process servers need to be available when use_deployment gets called", "8c9be9b vor 11 Monaten Sylvain Joyeux test,net_gen: update tests after the changes to the merge solver", "026613f vor 11 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into orogen_loaders", "95ea9d1 vor 11 Monaten Sylvain Joyeux app: we need to connect to the local process server earlier", "152ec75 vor 11 Monaten Sylvain Joyeux net_gen: sort the merge candidates by their number of inbound connections", "247a103 vor 11 Monaten Sylvain Joyeux improve performance of resolve_selection_recursively", "66d7da0 vor 11 Monaten Sylvain Joyeux add a fast path to add a mask to a DI / DIContext object", "ec37344 vor 11 Monaten Sylvain Joyeux use the new Roby Plan#add* fastpath variants", "89c4198 vor 11 Monaten Sylvain Joyeux net_gen: seed the algorithms with pure tasks", "14a664f vor 11 Monaten Sylvain Joyeux net_gen: remove the merge graph completely", "b5d888f vor 11 Monaten Sylvain Joyeux net_gen: remove the removal of cycles in the merge graph", "1f9233f vor 11 Monaten Sylvain Joyeux net_gen: more informative message in case of multiple outputs connected to a non-multiplex input", "960f8b4 vor 11 Monaten Sylvain Joyeux fix Component#connect_to", "d1e10f5 vor 11 Monaten Sylvain Joyeux runtime: fix critical failure in connection management update in some bad interaction with stopped deployments (closes #2)", "dbdea76 vor 11 Monaten Sylvain Joyeux better error message in InvalidSelection", "84a1a3b vor 11 Monaten Sylvain Joyeux test: minor additions", "9380e5d vor 11 Monaten Sylvain Joyeux test: in it_should_be_self_contained, use definitions returned by #resolved_definition", "7dd6d79 vor 11 Monaten Sylvain Joyeux test: fix path to Roby::Test::Assertion", "46314b9 vor 11 Monaten Sylvain Joyeux test: fix multiple inclusion of modules", "68fc466 vor 11 Monaten Sylvain Joyeux test: add a 'count' option to try_instanciate to benchmark the merge algorithm", "0452307 vor 11 Monaten Sylvain Joyeux app: fix the fake localhost client being registered in all cases", "15cef9a vor 11 Monaten Sylvain Joyeux app: improve error message", "6b145f3 vor 11 Monaten Sylvain Joyeux app: fix path to DEFAULT_PORT in connect_to_orocos_process_server", "479b857 vor 11 Monaten Sylvain Joyeux app: fix test for single? in #connect_to_orocos_process_server", "4af5f7a vor 11 Monaten Sylvain Joyeux app: do not actually connect to the local process server in simulation AND single mode", "d4a83c3 vor 11 Monaten Sylvain Joyeux app: explicitly specify the loader when calling Process.parse_run_options", "8a1e287 vor 11 Monaten Sylvain Joyeux app: cleanup logic in Configuration#use_deployment", "f58e5a9 vor 11 Monaten Sylvain Joyeux app: fix return value of Configuration#sim_process_server", "6cf5765 vor 11 Monaten Sylvain Joyeux app: define #loader on ProcessServerConfig for clarity", "e15ac3f vor 11 Monaten Sylvain Joyeux actions: set the name of the return value in Profile#resolved_definition", "3c4c8e9 vor 11 Monaten Sylvain Joyeux app: style fix", "58b752a vor 11 Monaten Sylvain Joyeux app: move the loader setup into a separate method", "73bfcd6 vor 11 Monaten Sylvain Joyeux app: do not accept registering a process server with the same name twice", "3f44ffe vor 11 Monaten Sylvain Joyeux graphviz: workaround dot crashing for empty graphs", "c3d94a3 vor 11 Monaten Sylvain Joyeux graphviz: fix hard-to-follow logic", "53a509e vor 11 Monaten Sylvain Joyeux test: migrate to pure minitest", "f0cf29f vor 11 Monaten Sylvain Joyeux test: integrate stackprof for profiling (ruby 2.1 and later only)", "c390748 vor 1 Jahr, und 4 Monaten Sylvain Joyeux test: fix test w.r.t. non-determinism of plan queries", "ef97241 vor 1 Jahr, und 4 Monaten Sylvain Joyeux normalize the selected default objects in DI#add", "c70804a vor 1 Jahr, und 4 Monaten Sylvain Joyeux make all InstanceRequirements selections frozen instead of unique in DI", "667b6ca vor 1 Jahr, und 4 Monaten Sylvain Joyeux actions: remove dumb implementation of Profile::Definition#initialize_copy", "ac38e50 vor 1 Jahr, und 4 Monaten Sylvain Joyeux do not re-resolve service-to-component selections", "70ce88f vor 1 Jahr, und 4 Monaten Sylvain Joyeux do not invalidate the resolved DI object in InstanceRequirements on #dup", "4a3a380 vor 1 Jahr, und 4 Monaten Sylvain Joyeux avoid unnecessary copies in DependencyInjectionContext#push", "ff17eb8 vor 1 Jahr, und 4 Monaten Sylvain Joyeux in DependencyInjection, normalize the select in #add instead of #add_explicit", "006fc2e vor 1 Jahr, und 4 Monaten Sylvain Joyeux avoid one dup in InstanceSelection#initialize", "6f358b3 vor 1 Jahr, und 4 Monaten Sylvain Joyeux netgen: merge timepoints from the merge solver in engine instead of redefining format_timepoints", "fcb8f44 vor 1 Jahr, und 4 Monaten Sylvain Joyeux doc fix", "386acff vor 1 Jahr, und 4 Monaten Sylvain Joyeux netgen: add some timepoints", "af74f41 vor 1 Jahr, und 4 Monaten Sylvain Joyeux test: update the merge solver timepoints name to make them compatible with aggregation", "de91e97 vor 1 Jahr, und 4 Monaten Sylvain Joyeux test: when timings are required, merge the syskit engine's timings", "ac80899 vor 1 Jahr, und 4 Monaten Sylvain Joyeux test: move the really generic parts to Roby::Test", "11d30af vor 1 Jahr, und 4 Monaten Sylvain Joyeux app: fix mixup in reload_models", "aa4cafe vor 1 Jahr, und 4 Monaten Sylvain Joyeux gui: fix instanciate not showing loading errors on reload", "0ebb4ab vor 1 Jahr, und 4 Monaten Sylvain Joyeux actions: move the code that promotes a requirement from a profile to another into a separate method", "9e180b0 vor 1 Jahr, und 4 Monaten Sylvain Joyeux test: fix name generation for dataflow/hierarchy graphs files", "c1484d4 vor 1 Jahr, und 4 Monaten Sylvain Joyeux test: replace the usage of testing_keep_logs flag by public_logs", "59d496a vor 1 Jahr, und 4 Monaten Sylvain Joyeux actions: store the tags argument passed to #use_profile in the used_profiles array", "e6dfedb vor 1 Jahr, und 5 Monaten Sylvain Joyeux actions: make Profile droby-marshallable", "b689fa2 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: test Syskit::Actions::Profile", "a4d5622 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: make sure that nil is properly handled by Models.is_model?", "7c7b768 vor 1 Jahr, und 5 Monaten Sylvain Joyeux in InstanceRequirement#instanciate, properly handle nil selections", "ec7218e vor 1 Jahr, und 5 Monaten Sylvain Joyeux actions: allow extending #use_profile through modules", "b05cb67 vor 1 Jahr, und 5 Monaten Sylvain Joyeux actions: in #use_profile, use #define to import the definitions from the used profile", "4614c0d vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: make syskit instanciate behave like browse w.r.t. loading all models", "5168aeb vor 1 Jahr, und 5 Monaten Sylvain Joyeux gui: accept to instanciate full path to a definition and/or action", "8d10bcd vor 1 Jahr, und 5 Monaten Sylvain Joyeux gui: fix default setup of the dataflow network in instanciation view", "220bc95 vor 1 Jahr, und 5 Monaten Sylvain Joyeux make profile definitions look more like actions", "8ff5944 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: better error reporting", "1a7f7e3 vor 1 Jahr, und 5 Monaten Sylvain Joyeux fix behaviour of InstanceSelection#port_mappings for colliding but identical mappings", "718d15a vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: do not unconditionally convert exceptions into Assertion", "a8336e6 vor 1 Jahr, und 5 Monaten Sylvain Joyeux fix Component#specialize to make sure that task.model.concrete_model is task.class", "2092343 vor 1 Jahr, und 5 Monaten Sylvain Joyeux models: replace direct test for private_specialization? by calls to #concrete_model", "6ae30a7 vor 1 Jahr, und 5 Monaten Sylvain Joyeux gui: fix bad initial state for the ComponentNetworkView", "68f94ba vor 1 Jahr, und 5 Monaten Sylvain Joyeux gui: fix display of instance requirements", "d5b4e55 vor 1 Jahr, und 5 Monaten Sylvain Joyeux models: remove description of a now non-existent option", "6e4d2ac vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: fix stop_process_servers", "f5c9cbc vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: fix error message in assert_is_self_contained", "4e164f3 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: generate SVGs from the current plan state for all failed tests", "873f5fc vor 1 Jahr, und 5 Monaten Sylvain Joyeux fix naming of placeholder tasks and profile tag tasks", "be362eb vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: fix definition of state events in the block given to #new_submodel", "a318041 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: add some new tests", "2a1604c vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: fix handling of process servers in the tests for Syskit::Deployment", "a3b9b0e vor 1 Jahr, und 5 Monaten Sylvain Joyeux truly accept deployment models by object (instead of by name) in #use_deployment", "736a970 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: fix test for InstanceSelection and explicitly selected task instances", "d2547fd vor 1 Jahr, und 5 Monaten Sylvain Joyeux fix deduction of service mappings based on selected and required objects in InstanceSelection", "aba7dff vor 1 Jahr, und 5 Monaten Sylvain Joyeux documentation fix", "7a46f70 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: clear the deployed tasks in clear_models", "baca6ab vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: no need to remove the process server in stop_local_process_server", "34b2890 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: registered deployment models are cleared in clear_models, not cleanup", "510182d vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: trivial fixes", "482ec1b vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: fix the tests for NetworkGeneration::Engine", "fd8784f vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: call Orocos.initialize in Test::Self", "7c3d6c9 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: convert some tests to the new loader API", "958fa18 vor 1 Jahr, und 5 Monaten Sylvain Joyeux fix callbacks being registered multiple times on Orocos.loader", "f49796d vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: explicitly call Orocos.clear in Plugin.clear_model", "39c6dc3 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test Models::BoundDataService#attach", "76f3bd6 vor 1 Jahr, und 5 Monaten Sylvain Joyeux explain one bit of strange code", "c3e5296 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: properly split the selftest stuff from the user-oriented one", "1eb3ff0 vor 1 Jahr, und 5 Monaten Sylvain Joyeux when resolving DI recursively, resolve services using selections for their component models", "8c490e2 vor 1 Jahr, und 5 Monaten Sylvain Joyeux actions: make #use_profile inject values for tags", "e70c144 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: don't generate the networks if testing_keep_logs is false", "930adb1 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: don't puts in tests", "268492f vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: in tests for self-contained profiles, check that we don't refer to tags from other profiles", "a85aa87 vor 1 Jahr, und 5 Monaten Sylvain Joyeux documentation", "157a45d vor 1 Jahr, und 5 Monaten Sylvain Joyeux fix missing invalidation of the cached resolved DI object in InstanceRequirements", "fdbcf1a vor 1 Jahr, und 5 Monaten Sylvain Joyeux actions: define Profile#each_action", "e6e5d7d vor 1 Jahr, und 5 Monaten Sylvain Joyeux actions: overload ActionModel#instanciate to make it independent of having an action interface", "7cee746 vor 1 Jahr, und 5 Monaten Sylvain Joyeux gen: update test template for profiles", "88842ea vor 1 Jahr, und 5 Monaten Sylvain Joyeux gen: add a generator for profiles", "88626f2 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: implement our own Assertion class for better error formatting", "09ed836 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: implement/refactor profile testing", "81c7468 vor 1 Jahr, und 5 Monaten Sylvain Joyeux gui: save the page state at the end of list rendering in Profile", "b350a3c vor 1 Jahr, und 5 Monaten Sylvain Joyeux gui: fix rendering of instance requirement objects for proxied data services", "61fefe5 vor 1 Jahr, und 5 Monaten Sylvain Joyeux gui: fix exceptions in the profile viewer not being cleared", "61d32b0 vor 1 Jahr, und 5 Monaten Sylvain Joyeux netgen: refactor network validation", "ebd57ed vor 1 Jahr, und 5 Monaten Sylvain Joyeux in Profile#resolved_definition, don't dup the return value of definition()", "efb346c vor 1 Jahr, und 5 Monaten Sylvain Joyeux netgen: split the Engine's #validate_network option into one option per validation stage", "0eb6153 vor 1 Jahr, und 5 Monaten Sylvain Joyeux document InstanceRequirements#as_plan", "233975a vor 1 Jahr, und 5 Monaten Sylvain Joyeux allow naming InstanceRequirements objects", "9e0b1ed vor 1 Jahr, und 5 Monaten Sylvain Joyeux actions: make Profile#to_s simply return the profile name", "e8b9c33 vor 1 Jahr, und 5 Monaten Sylvain Joyeux gui: do not show the definition's requirements in profile view", "334e213 vor 1 Jahr, und 5 Monaten Sylvain Joyeux improve error messages in method_missing", "e30adcf vor 1 Jahr, und 5 Monaten Sylvain Joyeux actions: implement basic tag functionality in profiles", "1b8a310 vor 1 Jahr, und 5 Monaten Sylvain Joyeux gui: fix Syskit::Component being showed in the placeholder tasks name in dot output", "24e954e vor 1 Jahr, und 5 Monaten Sylvain Joyeux workaround https://bugs.ruby-lang.org/issues/9244", "69ba6e9 vor 1 Jahr, und 5 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into orogen_loaders", "c34b580 vor 1 Jahr, und 5 Monaten Sylvain Joyeux gui: define an updated() signal on ModelViews::Type", "000251f vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: make assert_has_one_new_sample accept a Syskit::OutputPort as argument", "6b6f0e4 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: fix having a describe block with a string within a subclass of TaskContextTest", "eb6a932 vor 1 Jahr, und 5 Monaten Sylvain Joyeux implement ruby task contexts", "51ae57a vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: restrict the model packs to the first one found if auto_load_all is not set", "c581d05 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: fix stubbing compositions", "5ccbbcf vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: split test helpers into a ComponentTest class and a TaskContextTest class", "beb0edb vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: fix usage message of syskit browse", "fcf5ef2 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: clear all process server's loaders in clear_models", "1d7a47b vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: fix the load all logic using Roby's new integration of these aspects", "11c19b9 vor 1 Jahr, und 5 Monaten Sylvain Joyeux net_gen: in logger support, bypass completely if no ports have to be logged", "b4ce877 vor 1 Jahr, und 5 Monaten Sylvain Joyeux fix Engine#resolve when :compute_policies is false", "f3ccb1a vor 1 Jahr, und 5 Monaten Sylvain Joyeux InstanceSelection#instanciate must return a task from within the specified plan", "ff30529 vor 1 Jahr, und 5 Monaten Sylvain Joyeux gen: add composition generator", "76e2ab0 vor 1 Jahr, und 5 Monaten Sylvain Joyeux gen: make the orogen generator handle robot names properly in suite_* generation", "d0f9597 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: update the usage message for the orogen generator", "d741fa9 vor 1 Jahr, und 5 Monaten Sylvain Joyeux gen: add a data service generator", "807a9f8 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: the resolved dependency injection is now cached, use #use() instead of pushing to #dependency_injection_context directly", "604dfe5 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: add a should_receive_operation mock call for Syskit::TaskContext instances", "661909f vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: disable logging in tests", "008a8da vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: in it_should_be_configurable, add a stub deployment for the required model", "a3e4d9e vor 1 Jahr, und 5 Monaten Sylvain Joyeux fix all instances of OroGen::Spec::TaskContext.new without project argument", "025b28d vor 1 Jahr, und 5 Monaten Sylvain Joyeux fix Deployment#log_dir", "9ba84ab vor 1 Jahr, und 5 Monaten Sylvain Joyeux gen: add it_should_be_configurable to the tests generated for task contexts", "f7913b9 vor 1 Jahr, und 5 Monaten Sylvain Joyeux in RobotDefinition#device, properly validate that the given driver model actually is a driver for the device", "441c09a vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: create a helper to stub a task context that is a driver model", "cf65e1c vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: in it_should_be_configurable, stub a device if the component model is a driver", "6aeba5e vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: add helper to configure task contexts", "d687a40 vor 1 Jahr, und 5 Monaten Sylvain Joyeux gen: in the orogen generator, generate/update a suite_orogen file for the tests", "1d362c1 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: add wait_termination on ModelOnlyServer", "cde5c54 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: fix teardown when flexmock assertion fails", "f0eb188 vor 1 Jahr, und 5 Monaten Sylvain Joyeux properly setup logging in LoggerConfigurationSupport", "3c54d00 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: skip tests that don't have the proper typekit/task library installed", "2aef190 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: create the stub_syskit_attached_device helper", "aee16c0 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: fix stub_syskit_deployment_model", "45eee98 vor 1 Jahr, und 5 Monaten Sylvain Joyeux documentation", "31b4470 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: call #to_component in stub_syskit_deployment_model", "144c3a4 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: honor the --single and --simulation modes", "86528be vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: require syskit/test in testing mode", "f846eb9 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: in #remove_process_server, deregister the deployed tasks as well", "b8da11c vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: fix creation of \"simulation\" process servers", "d6c50ac vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: register Spec as the spec class for data services", "d0047fa vor 1 Jahr, und 5 Monaten Sylvain Joyeux fix Models::TaskContext#setup_submodel", "f69780e vor 1 Jahr, und 5 Monaten Sylvain Joyeux create a Roby generator to create files in models/orogen", "30338bf vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: use the new #each_available_project_name in Application#syskit_load_all", "5e95988 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: HACK - make roby test --coverage load all task context models", "5d35288 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: fix process server stuff w.r.t. changes in orocos.rb", "ba83145 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: replace checks on testing? by auto_load_models?", "27c3249 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: fix delayed startup of the process server", "8738b9c vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: the ROS deployment loading methods now simply need to call the base ones with a ROS process server", "aef7975 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: fix use_deployments_from", "537e9af vor 1 Jahr, und 5 Monaten Sylvain Joyeux fix default value creation for Models::TaskContext#orogen_model", "76c4231 vor 1 Jahr, und 5 Monaten Sylvain Joyeux small doc update", "7f8e838 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: add a mode in which we disable the pkgconfig loader", "b9a05ae vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: rename use_roslauncher for consistency reasons", "40055d2 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: fix deployment model loading", "9ec76f1 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: trivial fixes for app setup", "4667710 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: clean process server management", "81e8eac vor 1 Jahr, und 5 Monaten Sylvain Joyeux fix loading of the ROS parts", "4904764 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: cleanup using oroGen's new loader API", "377d03f vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: move the process server management to Configuration", "a285331 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: make the Roby application a parameter of the Configuration object", "d948984 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: implement a method that, given a composition model, produces a started network suitable for testing", "2e9930c vor 1 Jahr, und 5 Monaten Sylvain Joyeux the orogen-to-syskit base models mumbo-jumbo is not needed anymore", "b5f582c vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: fix some loading corner-cases", "e8add42 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: fix ROS loading w.r.t. changes in orogen_ros", "5338f4c vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: integrate ROS loading", "2a00026 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: remove unused variable", "6206203 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: load_dir loads all task contexts, load lazily each config file instead", "d2d2077 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: directly feed Orocos::Spec objects instead of names to orocos.rb", "bf30310 vor 1 Jahr, und 5 Monaten Sylvain Joyeux don't load blueprints and profiles in testing mode", "38cd848 vor 1 Jahr, und 5 Monaten Sylvain Joyeux implement marshalling of typelib values through the droby marshalling mechanisms", "a69ccc5 vor 1 Jahr, und 5 Monaten Sylvain Joyeux Reduce calls to super in new_submodel", "724a99a vor 1 Jahr, und 5 Monaten Sylvain Joyeux ros: don't check all, but only available ros project in use_roslaunchers_from", "0346d88 vor 1 Jahr, und 5 Monaten Sylvain Joyeux ros: adapt to fixed method names of ROS process_manager", "bba06c1 vor 1 Jahr, und 5 Monaten Sylvain Joyeux ros: require :on option when loading ros launchers", "ac97ac5 vor 1 Jahr, und 5 Monaten Sylvain Joyeux ros: load dependencies for existing ros projects", "c5adf67 vor 1 Jahr, und 5 Monaten Sylvain Joyeux ros: add extension loading to ros projects", "7541293 vor 1 Jahr, und 5 Monaten Sylvain Joyeux ros: add include of BGL::Vertex for Orocos::ROS::Node to support RelationSpace", "2b14d65 vor 1 Jahr, und 5 Monaten Sylvain Joyeux ros: cleanup Syskit::ROS::Node", "76ee5f4 vor 1 Jahr, und 5 Monaten Sylvain Joyeux ros: require :on option with use_roslauncher", "9bf408d vor 1 Jahr, und 5 Monaten Sylvain Joyeux ros: require ros roby_app/plugin", "e7a852c vor 1 Jahr, und 5 Monaten Sylvain Joyeux ros: raise if project shall be loaded that does not contain any launchers", "b2ab2d7 vor 1 Jahr, und 5 Monaten Sylvain Joyeux ros: cleanup Syskit::ROS::Node", "66b2797 vor 1 Jahr, und 5 Monaten Sylvain Joyeux ros: inject ROS specific part into Syskit::RobyApp::Configuration configuration", "98a3e78 vor 1 Jahr, und 5 Monaten Sylvain Joyeux Update TaskContext to handle alternative TaskContext types, e.g. such as Syskit::ROS::Node", "24c156d vor 1 Jahr, und 5 Monaten Sylvain Joyeux Add ros support", "b14e60c vor 1 Jahr, und 5 Monaten Sylvain Joyeux Activate ROS Support"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_14"><td>
         
           eb57476 vor 8 Wochen Sylvain Joyeux Merge pull request #44 from maltewi/remote_processes_bugfix<br/>
         
           717817e vor 8 Wochen dmronga added missing require statement to include Orocos::RemoteProcesses::Client<br/>
         
           f083df2 vor 10 Wochen Sylvain Joyeux Merge pull request #42 from maltewi/orogen_compatibility<br/>
         
           1f5d44b vor 10 Wochen Malte Wirkus Orocos::HTML is now names OroGen::HTML (cf. tools/orogen)<br/>
         
           74d9b9b vor 5 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into orogen_loaders<br/>
         
           b403efb vor 8 Monaten Sylvain Joyeux Merge pull request #31 from rock-core/fix_instance_requirement_display<br/>
         
           5e285e6 vor 8 Monaten Sylvain Joyeux gui: fix display of instance requirements<br/>
         
           8486f23 vor 8 Monaten Sylvain Joyeux Merge pull request #28 from goldhoorn/fix_shell<br/>
         
           3b91dda vor 9 Monaten Your Name shell: fixed wrong namespace for Robot debug output<br/>
         
           509146c vor 9 Monaten Sylvain Joyeux Merge pull request #24 from goldhoorn/fix_priniting_of_device_instances<br/>
         
           c153b6e vor 9 Monaten auv fixed typo in printing of master_device_instance<br/>
         
           5c0a204 vor 9 Monaten Sylvain Joyeux Merge pull request #20 from goldhoorn/pp_master_device<br/>
         
           1529b9f vor 9 Monaten Matthias Goldhoorn Provide pretty_print for MasterDeiceInstance<br/>
         
           e97ab7d vor 10 Monaten Matthias Goldhoorn Merge pull request #17 from goldhoorn/process_manager<br/>
         
           f68a74e vor 10 Monaten Matthias Goldhoorn Added missing includes for ProcessServers<br/>
         
           7b7e9ba vor 10 Monaten Sylvain Joyeux implement a way to deploy a subclass RubyTaskContext<br/>
         
           a3c9fe5 vor 10 Monaten Sylvain Joyeux models: get rid of Port#actual_name<br/>
         
           5cba046 vor 10 Monaten Sylvain Joyeux app: fix type export initialization<br/>
         
           69e5ef6 vor 10 Monaten Sylvain Joyeux app: fix mixup in the loaders<br/>
         
           57fb968 vor 10 Monaten Sylvain Joyeux app: fix nonsensical return value for #use_deployment<br/>
         
           58eec76 vor 11 Monaten Sylvain Joyeux test: generalize the availability of _def and _dev shortcuts in profile tests<br/>
         
           7425517 vor 11 Monaten Sylvain Joyeux fix invalidation of cached dependency injection in Profile and RobotDefinition (closes #7)<br/>
         
           317288c vor 11 Monaten Sylvain Joyeux test: make sure we can generate network SVGs if the test name contains '/'<br/>
         
           59e0b90 vor 11 Monaten Sylvain Joyeux make Syskit.proxy_task_model_for ignore redundant services (closes #8)<br/>
         
           3e6c82e vor 11 Monaten Sylvain Joyeux test: no need to call Minitest.autorun explicitely anymore<br/>
         
           7bbdd3e vor 11 Monaten Sylvain Joyeux net_gen: fix network deployment after 89c4198f9eec<br/>
         
           9388616 vor 11 Monaten Sylvain Joyeux in Deployment, feed the deployment model directly to process server's #start<br/>
         
           2817186 vor 11 Monaten Sylvain Joyeux resolve Deployment#process_server_config greedily<br/>
         
           91e02d9 vor 11 Monaten Sylvain Joyeux test,net_gen: need to start the deployment before calling Logger#configure<br/>
         
           49fd3b6 vor 11 Monaten Sylvain Joyeux fix DependencyInjection#resolve_recursive_selection_mapping<br/>
         
           93ae6a6 vor 11 Monaten Sylvain Joyeux net_gen: fix test for ready-to-merge tasks in #process_possible_cycles<br/>
         
           31e622f vor 11 Monaten Sylvain Joyeux app: process servers need to be available when use_deployment gets called<br/>
         
           8c9be9b vor 11 Monaten Sylvain Joyeux test,net_gen: update tests after the changes to the merge solver<br/>
         
           026613f vor 11 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into orogen_loaders<br/>
         
           95ea9d1 vor 11 Monaten Sylvain Joyeux app: we need to connect to the local process server earlier<br/>
         
           152ec75 vor 11 Monaten Sylvain Joyeux net_gen: sort the merge candidates by their number of inbound connections<br/>
         
           247a103 vor 11 Monaten Sylvain Joyeux improve performance of resolve_selection_recursively<br/>
         
           66d7da0 vor 11 Monaten Sylvain Joyeux add a fast path to add a mask to a DI / DIContext object<br/>
         
           ec37344 vor 11 Monaten Sylvain Joyeux use the new Roby Plan#add* fastpath variants<br/>
         
           89c4198 vor 11 Monaten Sylvain Joyeux net_gen: seed the algorithms with pure tasks<br/>
         
           14a664f vor 11 Monaten Sylvain Joyeux net_gen: remove the merge graph completely<br/>
         
           b5d888f vor 11 Monaten Sylvain Joyeux net_gen: remove the removal of cycles in the merge graph<br/>
         
           1f9233f vor 11 Monaten Sylvain Joyeux net_gen: more informative message in case of multiple outputs connected to a non-multiplex input<br/>
         
           960f8b4 vor 11 Monaten Sylvain Joyeux fix Component#connect_to<br/>
         
           d1e10f5 vor 11 Monaten Sylvain Joyeux runtime: fix critical failure in connection management update in some bad interaction with stopped deployments (closes #2)<br/>
         
           dbdea76 vor 11 Monaten Sylvain Joyeux better error message in InvalidSelection<br/>
         
           84a1a3b vor 11 Monaten Sylvain Joyeux test: minor additions<br/>
         
           9380e5d vor 11 Monaten Sylvain Joyeux test: in it_should_be_self_contained, use definitions returned by #resolved_definition<br/>
         
           7dd6d79 vor 11 Monaten Sylvain Joyeux test: fix path to Roby::Test::Assertion<br/>
         
           46314b9 vor 11 Monaten Sylvain Joyeux test: fix multiple inclusion of modules<br/>
         
           68fc466 vor 11 Monaten Sylvain Joyeux test: add a 'count' option to try_instanciate to benchmark the merge algorithm<br/>
         
           0452307 vor 11 Monaten Sylvain Joyeux app: fix the fake localhost client being registered in all cases<br/>
         
           15cef9a vor 11 Monaten Sylvain Joyeux app: improve error message<br/>
         
           6b145f3 vor 11 Monaten Sylvain Joyeux app: fix path to DEFAULT_PORT in connect_to_orocos_process_server<br/>
         
           479b857 vor 11 Monaten Sylvain Joyeux app: fix test for single? in #connect_to_orocos_process_server<br/>
         
           4af5f7a vor 11 Monaten Sylvain Joyeux app: do not actually connect to the local process server in simulation AND single mode<br/>
         
           d4a83c3 vor 11 Monaten Sylvain Joyeux app: explicitly specify the loader when calling Process.parse_run_options<br/>
         
           8a1e287 vor 11 Monaten Sylvain Joyeux app: cleanup logic in Configuration#use_deployment<br/>
         
           f58e5a9 vor 11 Monaten Sylvain Joyeux app: fix return value of Configuration#sim_process_server<br/>
         
           6cf5765 vor 11 Monaten Sylvain Joyeux app: define #loader on ProcessServerConfig for clarity<br/>
         
           e15ac3f vor 11 Monaten Sylvain Joyeux actions: set the name of the return value in Profile#resolved_definition<br/>
         
           3c4c8e9 vor 11 Monaten Sylvain Joyeux app: style fix<br/>
         
           58b752a vor 11 Monaten Sylvain Joyeux app: move the loader setup into a separate method<br/>
         
           73bfcd6 vor 11 Monaten Sylvain Joyeux app: do not accept registering a process server with the same name twice<br/>
         
           3f44ffe vor 11 Monaten Sylvain Joyeux graphviz: workaround dot crashing for empty graphs<br/>
         
           c3d94a3 vor 11 Monaten Sylvain Joyeux graphviz: fix hard-to-follow logic<br/>
         
           53a509e vor 11 Monaten Sylvain Joyeux test: migrate to pure minitest<br/>
         
           f0cf29f vor 11 Monaten Sylvain Joyeux test: integrate stackprof for profiling (ruby 2.1 and later only)<br/>
         
           c390748 vor 1 Jahr, und 4 Monaten Sylvain Joyeux test: fix test w.r.t. non-determinism of plan queries<br/>
         
           ef97241 vor 1 Jahr, und 4 Monaten Sylvain Joyeux normalize the selected default objects in DI#add<br/>
         
           c70804a vor 1 Jahr, und 4 Monaten Sylvain Joyeux make all InstanceRequirements selections frozen instead of unique in DI<br/>
         
           667b6ca vor 1 Jahr, und 4 Monaten Sylvain Joyeux actions: remove dumb implementation of Profile::Definition#initialize_copy<br/>
         
           ac38e50 vor 1 Jahr, und 4 Monaten Sylvain Joyeux do not re-resolve service-to-component selections<br/>
         
           70ce88f vor 1 Jahr, und 4 Monaten Sylvain Joyeux do not invalidate the resolved DI object in InstanceRequirements on #dup<br/>
         
           4a3a380 vor 1 Jahr, und 4 Monaten Sylvain Joyeux avoid unnecessary copies in DependencyInjectionContext#push<br/>
         
           ff17eb8 vor 1 Jahr, und 4 Monaten Sylvain Joyeux in DependencyInjection, normalize the select in #add instead of #add_explicit<br/>
         
           006fc2e vor 1 Jahr, und 4 Monaten Sylvain Joyeux avoid one dup in InstanceSelection#initialize<br/>
         
           6f358b3 vor 1 Jahr, und 4 Monaten Sylvain Joyeux netgen: merge timepoints from the merge solver in engine instead of redefining format_timepoints<br/>
         
           fcb8f44 vor 1 Jahr, und 4 Monaten Sylvain Joyeux doc fix<br/>
         
           386acff vor 1 Jahr, und 4 Monaten Sylvain Joyeux netgen: add some timepoints<br/>
         
           af74f41 vor 1 Jahr, und 4 Monaten Sylvain Joyeux test: update the merge solver timepoints name to make them compatible with aggregation<br/>
         
           de91e97 vor 1 Jahr, und 4 Monaten Sylvain Joyeux test: when timings are required, merge the syskit engine's timings<br/>
         
           ac80899 vor 1 Jahr, und 4 Monaten Sylvain Joyeux test: move the really generic parts to Roby::Test<br/>
         
           11d30af vor 1 Jahr, und 4 Monaten Sylvain Joyeux app: fix mixup in reload_models<br/>
         
           aa4cafe vor 1 Jahr, und 4 Monaten Sylvain Joyeux gui: fix instanciate not showing loading errors on reload<br/>
         
           0ebb4ab vor 1 Jahr, und 4 Monaten Sylvain Joyeux actions: move the code that promotes a requirement from a profile to another into a separate method<br/>
         
           9e180b0 vor 1 Jahr, und 4 Monaten Sylvain Joyeux test: fix name generation for dataflow/hierarchy graphs files<br/>
         
           c1484d4 vor 1 Jahr, und 4 Monaten Sylvain Joyeux test: replace the usage of testing_keep_logs flag by public_logs<br/>
         
           59d496a vor 1 Jahr, und 4 Monaten Sylvain Joyeux actions: store the tags argument passed to #use_profile in the used_profiles array<br/>
         
           e6dfedb vor 1 Jahr, und 5 Monaten Sylvain Joyeux actions: make Profile droby-marshallable<br/>
         
           b689fa2 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: test Syskit::Actions::Profile<br/>
         
           a4d5622 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: make sure that nil is properly handled by Models.is_model?<br/>
         
           7c7b768 vor 1 Jahr, und 5 Monaten Sylvain Joyeux in InstanceRequirement#instanciate, properly handle nil selections<br/>
         
           ec7218e vor 1 Jahr, und 5 Monaten Sylvain Joyeux actions: allow extending #use_profile through modules<br/>
         
           b05cb67 vor 1 Jahr, und 5 Monaten Sylvain Joyeux actions: in #use_profile, use #define to import the definitions from the used profile<br/>
         
           4614c0d vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: make syskit instanciate behave like browse w.r.t. loading all models<br/>
         
           5168aeb vor 1 Jahr, und 5 Monaten Sylvain Joyeux gui: accept to instanciate full path to a definition and/or action<br/>
         
           8d10bcd vor 1 Jahr, und 5 Monaten Sylvain Joyeux gui: fix default setup of the dataflow network in instanciation view<br/>
         
           220bc95 vor 1 Jahr, und 5 Monaten Sylvain Joyeux make profile definitions look more like actions<br/>
         
           8ff5944 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: better error reporting<br/>
         
           1a7f7e3 vor 1 Jahr, und 5 Monaten Sylvain Joyeux fix behaviour of InstanceSelection#port_mappings for colliding but identical mappings<br/>
         
           718d15a vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: do not unconditionally convert exceptions into Assertion<br/>
         
           a8336e6 vor 1 Jahr, und 5 Monaten Sylvain Joyeux fix Component#specialize to make sure that task.model.concrete_model is task.class<br/>
         
           2092343 vor 1 Jahr, und 5 Monaten Sylvain Joyeux models: replace direct test for private_specialization? by calls to #concrete_model<br/>
         
           6ae30a7 vor 1 Jahr, und 5 Monaten Sylvain Joyeux gui: fix bad initial state for the ComponentNetworkView<br/>
         
           68f94ba vor 1 Jahr, und 5 Monaten Sylvain Joyeux gui: fix display of instance requirements<br/>
         
           d5b4e55 vor 1 Jahr, und 5 Monaten Sylvain Joyeux models: remove description of a now non-existent option<br/>
         
           6e4d2ac vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: fix stop_process_servers<br/>
         
           f5c9cbc vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: fix error message in assert_is_self_contained<br/>
         
           4e164f3 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: generate SVGs from the current plan state for all failed tests<br/>
         
           873f5fc vor 1 Jahr, und 5 Monaten Sylvain Joyeux fix naming of placeholder tasks and profile tag tasks<br/>
         
           be362eb vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: fix definition of state events in the block given to #new_submodel<br/>
         
           a318041 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: add some new tests<br/>
         
           2a1604c vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: fix handling of process servers in the tests for Syskit::Deployment<br/>
         
           a3b9b0e vor 1 Jahr, und 5 Monaten Sylvain Joyeux truly accept deployment models by object (instead of by name) in #use_deployment<br/>
         
           736a970 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: fix test for InstanceSelection and explicitly selected task instances<br/>
         
           d2547fd vor 1 Jahr, und 5 Monaten Sylvain Joyeux fix deduction of service mappings based on selected and required objects in InstanceSelection<br/>
         
           aba7dff vor 1 Jahr, und 5 Monaten Sylvain Joyeux documentation fix<br/>
         
           7a46f70 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: clear the deployed tasks in clear_models<br/>
         
           baca6ab vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: no need to remove the process server in stop_local_process_server<br/>
         
           34b2890 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: registered deployment models are cleared in clear_models, not cleanup<br/>
         
           510182d vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: trivial fixes<br/>
         
           482ec1b vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: fix the tests for NetworkGeneration::Engine<br/>
         
           fd8784f vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: call Orocos.initialize in Test::Self<br/>
         
           7c3d6c9 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: convert some tests to the new loader API<br/>
         
           958fa18 vor 1 Jahr, und 5 Monaten Sylvain Joyeux fix callbacks being registered multiple times on Orocos.loader<br/>
         
           f49796d vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: explicitly call Orocos.clear in Plugin.clear_model<br/>
         
           39c6dc3 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test Models::BoundDataService#attach<br/>
         
           76f3bd6 vor 1 Jahr, und 5 Monaten Sylvain Joyeux explain one bit of strange code<br/>
         
           c3e5296 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: properly split the selftest stuff from the user-oriented one<br/>
         
           1eb3ff0 vor 1 Jahr, und 5 Monaten Sylvain Joyeux when resolving DI recursively, resolve services using selections for their component models<br/>
         
           8c490e2 vor 1 Jahr, und 5 Monaten Sylvain Joyeux actions: make #use_profile inject values for tags<br/>
         
           e70c144 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: don't generate the networks if testing_keep_logs is false<br/>
         
           930adb1 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: don't puts in tests<br/>
         
           268492f vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: in tests for self-contained profiles, check that we don't refer to tags from other profiles<br/>
         
           a85aa87 vor 1 Jahr, und 5 Monaten Sylvain Joyeux documentation<br/>
         
           157a45d vor 1 Jahr, und 5 Monaten Sylvain Joyeux fix missing invalidation of the cached resolved DI object in InstanceRequirements<br/>
         
           fdbcf1a vor 1 Jahr, und 5 Monaten Sylvain Joyeux actions: define Profile#each_action<br/>
         
           e6e5d7d vor 1 Jahr, und 5 Monaten Sylvain Joyeux actions: overload ActionModel#instanciate to make it independent of having an action interface<br/>
         
           7cee746 vor 1 Jahr, und 5 Monaten Sylvain Joyeux gen: update test template for profiles<br/>
         
           88842ea vor 1 Jahr, und 5 Monaten Sylvain Joyeux gen: add a generator for profiles<br/>
         
           88626f2 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: implement our own Assertion class for better error formatting<br/>
         
           09ed836 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: implement/refactor profile testing<br/>
         
           81c7468 vor 1 Jahr, und 5 Monaten Sylvain Joyeux gui: save the page state at the end of list rendering in Profile<br/>
         
           b350a3c vor 1 Jahr, und 5 Monaten Sylvain Joyeux gui: fix rendering of instance requirement objects for proxied data services<br/>
         
           61fefe5 vor 1 Jahr, und 5 Monaten Sylvain Joyeux gui: fix exceptions in the profile viewer not being cleared<br/>
         
           61d32b0 vor 1 Jahr, und 5 Monaten Sylvain Joyeux netgen: refactor network validation<br/>
         
           ebd57ed vor 1 Jahr, und 5 Monaten Sylvain Joyeux in Profile#resolved_definition, don't dup the return value of definition()<br/>
         
           efb346c vor 1 Jahr, und 5 Monaten Sylvain Joyeux netgen: split the Engine's #validate_network option into one option per validation stage<br/>
         
           0eb6153 vor 1 Jahr, und 5 Monaten Sylvain Joyeux document InstanceRequirements#as_plan<br/>
         
           233975a vor 1 Jahr, und 5 Monaten Sylvain Joyeux allow naming InstanceRequirements objects<br/>
         
           9e0b1ed vor 1 Jahr, und 5 Monaten Sylvain Joyeux actions: make Profile#to_s simply return the profile name<br/>
         
           e8b9c33 vor 1 Jahr, und 5 Monaten Sylvain Joyeux gui: do not show the definition's requirements in profile view<br/>
         
           334e213 vor 1 Jahr, und 5 Monaten Sylvain Joyeux improve error messages in method_missing<br/>
         
           e30adcf vor 1 Jahr, und 5 Monaten Sylvain Joyeux actions: implement basic tag functionality in profiles<br/>
         
           1b8a310 vor 1 Jahr, und 5 Monaten Sylvain Joyeux gui: fix Syskit::Component being showed in the placeholder tasks name in dot output<br/>
         
           24e954e vor 1 Jahr, und 5 Monaten Sylvain Joyeux workaround https://bugs.ruby-lang.org/issues/9244<br/>
         
           69ba6e9 vor 1 Jahr, und 5 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into orogen_loaders<br/>
         
           c34b580 vor 1 Jahr, und 5 Monaten Sylvain Joyeux gui: define an updated() signal on ModelViews::Type<br/>
         
           000251f vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: make assert_has_one_new_sample accept a Syskit::OutputPort as argument<br/>
         
           6b6f0e4 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: fix having a describe block with a string within a subclass of TaskContextTest<br/>
         
           eb6a932 vor 1 Jahr, und 5 Monaten Sylvain Joyeux implement ruby task contexts<br/>
         
           51ae57a vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: restrict the model packs to the first one found if auto_load_all is not set<br/>
         
           c581d05 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: fix stubbing compositions<br/>
         
           5ccbbcf vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: split test helpers into a ComponentTest class and a TaskContextTest class<br/>
         
           beb0edb vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: fix usage message of syskit browse<br/>
         
           fcf5ef2 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: clear all process server's loaders in clear_models<br/>
         
           1d7a47b vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: fix the load all logic using Roby's new integration of these aspects<br/>
         
           11c19b9 vor 1 Jahr, und 5 Monaten Sylvain Joyeux net_gen: in logger support, bypass completely if no ports have to be logged<br/>
         
           b4ce877 vor 1 Jahr, und 5 Monaten Sylvain Joyeux fix Engine#resolve when :compute_policies is false<br/>
         
           f3ccb1a vor 1 Jahr, und 5 Monaten Sylvain Joyeux InstanceSelection#instanciate must return a task from within the specified plan<br/>
         
           ff30529 vor 1 Jahr, und 5 Monaten Sylvain Joyeux gen: add composition generator<br/>
         
           76e2ab0 vor 1 Jahr, und 5 Monaten Sylvain Joyeux gen: make the orogen generator handle robot names properly in suite_* generation<br/>
         
           d0f9597 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: update the usage message for the orogen generator<br/>
         
           d741fa9 vor 1 Jahr, und 5 Monaten Sylvain Joyeux gen: add a data service generator<br/>
         
           807a9f8 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: the resolved dependency injection is now cached, use #use() instead of pushing to #dependency_injection_context directly<br/>
         
           604dfe5 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: add a should_receive_operation mock call for Syskit::TaskContext instances<br/>
         
           661909f vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: disable logging in tests<br/>
         
           008a8da vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: in it_should_be_configurable, add a stub deployment for the required model<br/>
         
           a3e4d9e vor 1 Jahr, und 5 Monaten Sylvain Joyeux fix all instances of OroGen::Spec::TaskContext.new without project argument<br/>
         
           025b28d vor 1 Jahr, und 5 Monaten Sylvain Joyeux fix Deployment#log_dir<br/>
         
           9ba84ab vor 1 Jahr, und 5 Monaten Sylvain Joyeux gen: add it_should_be_configurable to the tests generated for task contexts<br/>
         
           f7913b9 vor 1 Jahr, und 5 Monaten Sylvain Joyeux in RobotDefinition#device, properly validate that the given driver model actually is a driver for the device<br/>
         
           441c09a vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: create a helper to stub a task context that is a driver model<br/>
         
           cf65e1c vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: in it_should_be_configurable, stub a device if the component model is a driver<br/>
         
           6aeba5e vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: add helper to configure task contexts<br/>
         
           d687a40 vor 1 Jahr, und 5 Monaten Sylvain Joyeux gen: in the orogen generator, generate/update a suite_orogen file for the tests<br/>
         
           1d362c1 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: add wait_termination on ModelOnlyServer<br/>
         
           cde5c54 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: fix teardown when flexmock assertion fails<br/>
         
           f0eb188 vor 1 Jahr, und 5 Monaten Sylvain Joyeux properly setup logging in LoggerConfigurationSupport<br/>
         
           3c54d00 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: skip tests that don't have the proper typekit/task library installed<br/>
         
           2aef190 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: create the stub_syskit_attached_device helper<br/>
         
           aee16c0 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: fix stub_syskit_deployment_model<br/>
         
           45eee98 vor 1 Jahr, und 5 Monaten Sylvain Joyeux documentation<br/>
         
           31b4470 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: call #to_component in stub_syskit_deployment_model<br/>
         
           144c3a4 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: honor the --single and --simulation modes<br/>
         
           86528be vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: require syskit/test in testing mode<br/>
         
           f846eb9 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: in #remove_process_server, deregister the deployed tasks as well<br/>
         
           b8da11c vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: fix creation of "simulation" process servers<br/>
         
           d6c50ac vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: register Spec as the spec class for data services<br/>
         
           d0047fa vor 1 Jahr, und 5 Monaten Sylvain Joyeux fix Models::TaskContext#setup_submodel<br/>
         
           f69780e vor 1 Jahr, und 5 Monaten Sylvain Joyeux create a Roby generator to create files in models/orogen<br/>
         
           30338bf vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: use the new #each_available_project_name in Application#syskit_load_all<br/>
         
           5e95988 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: HACK - make roby test --coverage load all task context models<br/>
         
           5d35288 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: fix process server stuff w.r.t. changes in orocos.rb<br/>
         
           ba83145 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: replace checks on testing? by auto_load_models?<br/>
         
           27c3249 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: fix delayed startup of the process server<br/>
         
           8738b9c vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: the ROS deployment loading methods now simply need to call the base ones with a ROS process server<br/>
         
           aef7975 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: fix use_deployments_from<br/>
         
           537e9af vor 1 Jahr, und 5 Monaten Sylvain Joyeux fix default value creation for Models::TaskContext#orogen_model<br/>
         
           76c4231 vor 1 Jahr, und 5 Monaten Sylvain Joyeux small doc update<br/>
         
           7f8e838 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: add a mode in which we disable the pkgconfig loader<br/>
         
           b9a05ae vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: rename use_roslauncher for consistency reasons<br/>
         
           40055d2 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: fix deployment model loading<br/>
         
           9ec76f1 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: trivial fixes for app setup<br/>
         
           4667710 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: clean process server management<br/>
         
           81e8eac vor 1 Jahr, und 5 Monaten Sylvain Joyeux fix loading of the ROS parts<br/>
         
           4904764 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: cleanup using oroGen's new loader API<br/>
         
           377d03f vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: move the process server management to Configuration<br/>
         
           a285331 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: make the Roby application a parameter of the Configuration object<br/>
         
           d948984 vor 1 Jahr, und 5 Monaten Sylvain Joyeux test: implement a method that, given a composition model, produces a started network suitable for testing<br/>
         
           2e9930c vor 1 Jahr, und 5 Monaten Sylvain Joyeux the orogen-to-syskit base models mumbo-jumbo is not needed anymore<br/>
         
           b5f582c vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: fix some loading corner-cases<br/>
         
           e8add42 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: fix ROS loading w.r.t. changes in orogen_ros<br/>
         
           5338f4c vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: integrate ROS loading<br/>
         
           2a00026 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: remove unused variable<br/>
         
           6206203 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: load_dir loads all task contexts, load lazily each config file instead<br/>
         
           d2d2077 vor 1 Jahr, und 5 Monaten Sylvain Joyeux app: directly feed Orocos::Spec objects instead of names to orocos.rb<br/>
         
           bf30310 vor 1 Jahr, und 5 Monaten Sylvain Joyeux don't load blueprints and profiles in testing mode<br/>
         
           38cd848 vor 1 Jahr, und 5 Monaten Sylvain Joyeux implement marshalling of typelib values through the droby marshalling mechanisms<br/>
         
           a69ccc5 vor 1 Jahr, und 5 Monaten Sylvain Joyeux Reduce calls to super in new_submodel<br/>
         
           724a99a vor 1 Jahr, und 5 Monaten Sylvain Joyeux ros: don't check all, but only available ros project in use_roslaunchers_from<br/>
         
           0346d88 vor 1 Jahr, und 5 Monaten Sylvain Joyeux ros: adapt to fixed method names of ROS process_manager<br/>
         
           bba06c1 vor 1 Jahr, und 5 Monaten Sylvain Joyeux ros: require :on option when loading ros launchers<br/>
         
           ac97ac5 vor 1 Jahr, und 5 Monaten Sylvain Joyeux ros: load dependencies for existing ros projects<br/>
         
           c5adf67 vor 1 Jahr, und 5 Monaten Sylvain Joyeux ros: add extension loading to ros projects<br/>
         
           7541293 vor 1 Jahr, und 5 Monaten Sylvain Joyeux ros: add include of BGL::Vertex for Orocos::ROS::Node to support RelationSpace<br/>
         
           2b14d65 vor 1 Jahr, und 5 Monaten Sylvain Joyeux ros: cleanup Syskit::ROS::Node<br/>
         
           76ee5f4 vor 1 Jahr, und 5 Monaten Sylvain Joyeux ros: require :on option with use_roslauncher<br/>
         
           9bf408d vor 1 Jahr, und 5 Monaten Sylvain Joyeux ros: require ros roby_app/plugin<br/>
         
           e7a852c vor 1 Jahr, und 5 Monaten Sylvain Joyeux ros: raise if project shall be loaded that does not contain any launchers<br/>
         
           b2ab2d7 vor 1 Jahr, und 5 Monaten Sylvain Joyeux ros: cleanup Syskit::ROS::Node<br/>
         
           66b2797 vor 1 Jahr, und 5 Monaten Sylvain Joyeux ros: inject ROS specific part into Syskit::RobyApp::Configuration configuration<br/>
         
           98a3e78 vor 1 Jahr, und 5 Monaten Sylvain Joyeux Update TaskContext to handle alternative TaskContext types, e.g. such as Syskit::ROS::Node<br/>
         
           24c156d vor 1 Jahr, und 5 Monaten Sylvain Joyeux Add ros support<br/>
         
           b14e60c vor 1 Jahr, und 5 Monaten Sylvain Joyeux Activate ROS Support<br/>
         
         </td></tr>
       
       



       <tr class="name" id="14">
         <th>tools/orocos.rb</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="15"> 239 commits</a> in ["38aff8b vor 2 Tagen Matthias Goldhoorn async: Add OroGen::DefinitionTypekitNotFound as known error", "47c75d9 vor 8 Wochen Sylvain Joyeux Merge pull request #47 from maltewi/remote_processes_bugfix", "219c03a vor 8 Wochen dmronga Loader.new could not be found. Added   require 'orocos/remote_processes/loader' to make it av available.", "e66d284 vor 8 Wochen Sylvain Joyeux set myself as maintainer", "75dad0f vor 9 Wochen Sylvain Joyeux Merge pull request #46 from rock-core/use_disconnect_all_in_output_reader_disconnect", "fc7ea29 vor 9 Wochen Sylvain Joyeux fixed version of \"use disconnect_all in OutputReader#disconnect\"", "cd0bea7 vor 9 Wochen Sylvain Joyeux Merge pull request #45 from saarnold/master", "5a73627 vor 9 Wochen Sascha Arnold Revert \"use disconnect_all to disconnect readers\"", "8beb3b3 vor 2 Monaten Sylvain Joyeux Merge pull request #44 from rock-core/bugfixes", "84393be vor 3 Monaten Sylvain Joyeux log: accept all key types when parsing log markers", "ce9a45e vor 3 Monaten Sylvain Joyeux log: fix log annotation loading after we changed to lazy-loading", "7ca73c6 vor 3 Monaten Sylvain Joyeux ruby task contexts start at PRE_OPERATIONAL, fix Async::TaskContextBase#to_ruby", "beed491 vor 3 Monaten Sylvain Joyeux use disconnect_all to disconnect readers", "b8f87a1 vor 3 Monaten Sylvain Joyeux Merge pull request #30 from rock-core/script_conf_default", "97a0f70 vor 3 Monaten Sylvain Joyeux Merge pull request #40 from rock-core/expose_nameservice_bind", "40d7624 vor 3 Monaten Sylvain Joyeux Merge pull request #41 from goldhoorn/master", "0deb1c6 vor 3 Monaten Matthias Goldhoorn log/replay: Fixed typo in current_sample_data", "baf505f vor 3 Monaten Sylvain Joyeux expose CORBA::NameService#bind", "5209167 vor 4 Monaten Sylvain Joyeux Merge pull request #39 from rock-core/fix_loader_thread_safety", "62f81ed vor 4 Monaten Sylvain Joyeux Merge pull request #37 from jakobs/master", "41eefea vor 4 Monaten Jakob Schwendner log_level: improve error message", "ae25d1d vor 4 Monaten Sylvain Joyeux access to task_model_from_name needs to be synchronized when done from within orocos.rb", "c5c2e2f vor 4 Monaten Jakob Schwendner raise for invalid log_level argument instead of warning", "a417fbb vor 4 Monaten Sylvain Joyeux fix model creation for Log::TaskContext to the orogen loaders", "08ffa3d vor 4 Monaten Jakob Schwendner Add ability to change log level per deployment", "6716109 vor 4 Monaten Jakob Schwendner updated some comments", "49df5dd vor 4 Monaten Sylvain Joyeux log: create an empty model for log tasks", "6c5e044 vor 4 Monaten Sylvain Joyeux log: only decode data for streams that are listening to it", "368e70f vor 5 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/allow_parallel_build_of_test_components' into orogen_loaders", "31a863a vor 5 Monaten Sylvain Joyeux doc: document Orocos::Scripts", "2116bab vor 5 Monaten Sylvain Joyeux rake: update the working directory from the test orogen components even with keep_wc set to true", "cf71b2e vor 5 Monaten Sylvain Joyeux rake: enable the MQ transport by default", "9eb2dbb vor 5 Monaten Sylvain Joyeux rake: allow passing make options to setup:orogen_all", "9eff17d vor 5 Monaten Sylvain Joyeux rake: fix option handling in setup:orogen*", "7133bf9 vor 5 Monaten Sylvain Joyeux remove usage of Dir.chdir", "feb11b9 vor 5 Monaten Sylvain Joyeux Merge pull request #31 from planthaber/each_task", "202d3de vor 5 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into orogen_loaders", "821b9c7 vor 6 Monaten Steffen Planthaber return enum, if no block given for each_task", "0b44c74 vor 6 Monaten Sylvain Joyeux Merge pull request #32 from rock-core/alex", "e1375a5 vor 6 Monaten Alexander Duda Async.proxy: add support for any object responding to name", "21d1295 vor 6 Monaten Sylvain Joyeux scripts: allow setting a default configuration with --conf", "845ace3 vor 7 Monaten Sylvain Joyeux Merge pull request #26 from goldhoorn/fix_config_handling_master", "8744110 vor 7 Monaten Alexander Duda Merge pull request #27 from leifole/master", "5eb5d78 vor 7 Monaten Leif Christensen Fix to SubPortProxy#on_data to prevent crashing due to raw_data call on ruby types as suggested by doudou on the rock-dev mailing list.", "a5277b7 vor 7 Monaten Matthias Goldhoorn TaskConfiguration: do not save metadata inside of config-hashes", "95189cf vor 8 Monaten Sylvain Joyeux fix --conf when the FILE argument is omitted", "fda193f vor 9 Monaten Sylvain Joyeux Merge pull request #22 from rock-core/revert-18-minor_updates", "206690c vor 9 Monaten Sylvain Joyeux Revert \"Minor updates\"", "3e408cc vor 9 Monaten Sylvain Joyeux Merge pull request #18 from rock-core/minor_updates", "6a41299 vor 9 Monaten Sylvain Joyeux mention in manifest.xml which gems are needed for the test suite", "b03da43 vor 9 Monaten Sylvain Joyeux fix type used to create port models in #port", "7bf3f03 vor 9 Monaten Sylvain Joyeux ruby_tasks: set a model for created permanent ports", "ba65aa5 vor 9 Monaten Sylvain Joyeux make NameService#each_task return an enum if no block is given", "f5b2e3a vor 9 Monaten Sylvain Joyeux initialize Port#model with an empty model if none is available", "f7b6862 vor 9 Monaten Sylvain Joyeux Merge pull request #17 from planthaber/taskcontext_to_h", "83ba5f2 vor 9 Monaten Steffen Planthaber added to_h function to task context", "0fbe6c7 vor 9 Monaten Sylvain Joyeux Merge pull request #2 from rock-core/remove_roby_leftovers", "6df896b vor 9 Monaten Sylvain Joyeux Merge pull request #13 from annaborn/master", "63dc8c9 vor 9 Monaten Anna Born add missing dependency to base/orogen/std", "f4a84f0 vor 10 Monaten Matthias Goldhoorn Merge pull request #8 from goldhoorn/fix_process_naming", "c719403 vor 10 Monaten Matthias Goldhoorn Fixed manifest, lib/orocos/ruby_tasks/deployment was renamed to process.", "62c071b vor 10 Monaten Sylvain Joyeux Merge pull request #7 from goldhoorn/fix_oroconf", "003967d vor 10 Monaten Matthias Goldhoorn adapted oroconf and configuration to orogen_loaders", "8bab1dc vor 10 Monaten Sylvain Joyeux test,async: minor fixes", "363850c vor 10 Monaten Sylvain Joyeux properly deprecate the old process server / ruby tasks class names", "92aa831 vor 10 Monaten Sylvain Joyeux ruby_tasks: rename badly named file deployment.rb to process.rb", "d3d1930 vor 10 Monaten Sylvain Joyeux documentation", "6e9aee3 vor 10 Monaten Sylvain Joyeux ruby_tasks: make the ruby_process_server argument optional in Process", "6d67910 vor 10 Monaten Sylvain Joyeux ruby_tasks: do not load the ruby process manager with ruby_tasks", "3f66d42 vor 10 Monaten Sylvain Joyeux ruby_tasks: fix exception handling in TaskContext.new if the exception is thrown before local_task gets created", "a7323bc vor 10 Monaten Sylvain Joyeux async: split long filter_options line for readability", "5a32eba vor 10 Monaten Sylvain Joyeux Merge pull request #4 from goldhoorn/process_server_depricated", "2e7ffbe vor 10 Monaten Matthias Goldhoorn process_server: get rid of dericated format of remote nameserver", "7384947 vor 10 Monaten Sylvain Joyeux remote_processes: fix duplicate registration of Client#loader on the root loader", "9e4c969 vor 10 Monaten Sylvain Joyeux fix initialization of default loaders", "85879a6 vor 10 Monaten Sylvain Joyeux remote_processes: implement a command to quit the server remotely", "8ab7fd5 vor 10 Monaten Sylvain Joyeux remote_processes: implement joining a remote process", "237bcf6 vor 10 Monaten Sylvain Joyeux remote_processes: refactor the Server code", "ae538ab vor 10 Monaten Sylvain Joyeux remote_processes: fix loader handling in Client", "2778cd4 vor 10 Monaten Sylvain Joyeux remote_processes: initialize Process with the deployment model, not its name", "c4e5ad2 vor 10 Monaten Sylvain Joyeux remote_processes: remove hardcoded access to the default pkgconfig loader", "3d000dc vor 10 Monaten Sylvain Joyeux remote_processes: rename Server#options to Server#default_start_options", "12147d5 vor 10 Monaten Sylvain Joyeux remote_processes: support given a port of 0 to Server#initialize", "84e1b81 vor 10 Monaten Sylvain Joyeux remote_processes: use constants instead of harcoded control codes", "c45f0eb vor 10 Monaten Sylvain Joyeux remote_processes: do not explicitly call exit() when the server quits", "78a84e5 vor 10 Monaten Sylvain Joyeux remote_processes: write a test suite", "dc5150c vor 10 Monaten Sylvain Joyeux test: fix simplecov integration", "d6160d0 vor 10 Monaten Sylvain Joyeux improve suggestions in case a process dies", "2dcfb71 vor 10 Monaten Sylvain Joyeux remove access to the global name service object in the process spawning code paths", "d595ffd vor 10 Monaten Sylvain Joyeux fix spawning processes with the wait option set to true", "de7a260 vor 10 Monaten Sylvain Joyeux remove the creation of an aggregate loader in RubyTasks::ProcessManager", "56f6ef7 vor 10 Monaten Sylvain Joyeux document the root_loader option of RemoteProcesses::Client#initialize", "f22604a vor 10 Monaten Sylvain Joyeux make DefaultLoader.export_types = false un-export already exported types", "81ce54f vor 11 Monaten Sylvain Joyeux remove the Orocos::RobyPlugin test suite", "083b775 vor 11 Monaten Sylvain Joyeux make the process manager's #start method accept a deployment model directly", "225a95e vor 11 Monaten Sylvain Joyeux allow specifying the loader that should be used in Orocos::Process.parse_run_options", "a8bcc31 vor 11 Monaten Sylvain Joyeux allow passing the deployment model to Deployment#initialize by object instead of by name", "cde093f vor 11 Monaten Sylvain Joyeux remove usage of Orocos.run to cleanup test output", "4a9064c vor 11 Monaten Sylvain Joyeux dist: avoid rebuilding all orogen components each time 'rake test' is called", "2e93e82 vor 11 Monaten Sylvain Joyeux remove unused variable", "6538e30 vor 11 Monaten Sylvain Joyeux ruby_tasks: fix memory leak", "fe964d4 vor 11 Monaten Sylvain Joyeux ruby_tasks: set the interface of a removed port to 0 explicitly", "ad5df5f vor 11 Monaten Sylvain Joyeux test: disable the 'missing default logger' warning during tests", "33a557b vor 11 Monaten Sylvain Joyeux remove usage of ObjectSpace in process handling", "da24a8c vor 11 Monaten Sylvain Joyeux test: exception raised when model-loading changed. Update the test.", "3c4180d vor 11 Monaten Sylvain Joyeux fix dynamic property tests", "15e95ed vor 11 Monaten Sylvain Joyeux test: define #get", "3833e24 vor 11 Monaten Sylvain Joyeux base: load_typekit must use the pkgconfig loader directly", "5ad57ed vor 11 Monaten Sylvain Joyeux ros: allow to specify which loader to use in ROS::ProcessManager", "4405b52 vor 11 Monaten Sylvain Joyeux test: cleanup common test setup and migrate to minitest", "63dd93c vor 11 Monaten Sylvain Joyeux fix exception raised by ConfigurationManager.load_file if the model is not found", "68bc6ef vor 11 Monaten Sylvain Joyeux fix #load_file to properly raise ArgumentError", "0e416fb vor 11 Monaten Sylvain Joyeux remove unneeded Orocos. prefix", "10f4619 vor 11 Monaten Sylvain Joyeux remove the orocos logfile in Orocos.clear if we aren't supposed to keep it", "76739b4 vor 11 Monaten Sylvain Joyeux update Manifest.txt", "a5f1f21 vor 11 Monaten Sylvain Joyeux rename nonsensical files to their proper names", "a2b9495 vor 11 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into orogen_loaders", "3ac69e0 vor 11 Monaten Sylvain Joyeux fix Orocos.initialized? not being reset after calling Orocos.clear", "424d036 vor 11 Monaten Sylvain Joyeux fix DefaultLoader#export_types? to be writable", "e1d689a vor 11 Monaten Sylvain Joyeux make Orocos.clear only reset the loaders instead of creating new ones", "97b6022 vor 11 Monaten Sylvain Joyeux define RubyTasks::Process#pid for compatibility with Process", "cde4aec vor 11 Monaten Sylvain Joyeux fix setup_default_logger w.r.t. the process name in the remote case", "fd97670 vor 11 Monaten Sylvain Joyeux bin: convert oroinspect to the loaders API", "9539d63 vor 11 Monaten Sylvain Joyeux remove the dead code for configuration mode in oroinspect", "99989ec vor 11 Monaten Sylvain Joyeux ruby_tasks: mock the operations as methods on the task object", "a3959d2 vor 11 Monaten Sylvain Joyeux ruby_tasks: fix type resolution in create_property", "07910d9 vor 11 Monaten Sylvain Joyeux ruby_tasks: pass project to the created Spec::TaskContext", "ce74b0e vor 11 Monaten Sylvain Joyeux ruby_tasks: in .new, dispose of the created local task context on exception", "54c8404 vor 11 Monaten Sylvain Joyeux fix RubyTasks::Process", "284177f vor 11 Monaten Sylvain Joyeux modify the local task context to integrate state exports", "371d289 vor 11 Monaten Sylvain Joyeux ruby_tasks: fix ProcessManager", "c3a757c vor 11 Monaten Sylvain Joyeux better error message", "bce0587 vor 11 Monaten Sylvain Joyeux define missing available_ accessors on RemoteProcesses::Loader", "44ad492 vor 11 Monaten Sylvain Joyeux remote: implement #each_available_project_name on Loader", "be7241d vor 11 Monaten Sylvain Joyeux fix RemoteProcesses::Server to use the loader API", "915a624 vor 11 Monaten Sylvain Joyeux make RemoteProcesses::Server have its own logger", "d2a87ee vor 11 Monaten Sylvain Joyeux fix RemoteProcesses::Client#pid to properly return an integer", "0967a49 vor 11 Monaten Sylvain Joyeux fix loader initialization in RemoteProcesses::Client", "2e30656 vor 11 Monaten Sylvain Joyeux bin: add missing require to orocos_process_server", "54966a7 vor 11 Monaten Sylvain Joyeux rename Orocos to OroGen when it makes sense", "a724056 vor 11 Monaten Sylvain Joyeux remove code pointing to Orocos::Generation", "c533e6b vor 11 Monaten Sylvain Joyeux ros: cleanup namespaces", "41722c2 vor 11 Monaten Sylvain Joyeux test: define attributes early in #setup to avoid exceptions in teardown if the complex part of the setup fails", "0bc16b7 vor 11 Monaten Sylvain Joyeux integrate suite_async in suite.rb", "3a8a4f9 vor 11 Monaten Sylvain Joyeux tiny change in exception definition / usage", "4419098 vor 11 Monaten Sylvain Joyeux small fixes related to the loaders API", "32fbc41 vor 11 Monaten Sylvain Joyeux ros: update ProcessManager for the loaders API", "25b7b09 vor 11 Monaten Sylvain Joyeux moved the orogen_ros code into orogen proper, no need for funky autodetect logic", "763de8b vor 11 Monaten Sylvain Joyeux fix loading of the refactored process server", "8e9cc00 vor 11 Monaten Sylvain Joyeux fix Orocos.get", "3d90ab4 vor 11 Monaten Sylvain Joyeux clear Orocos::ROS in Orocos.clear if available", "7ba92d4 vor 11 Monaten Sylvain Joyeux define Orocos.default_project to make creating new interface models easier", "fb837db vor 11 Monaten Sylvain Joyeux add coverage/ to .gitignore", "11c8658 vor 11 Monaten Sylvain Joyeux make the default loader an Aggregate that contain PkgConfig and Files", "1cf76ba vor 11 Monaten Sylvain Joyeux test: add some unit tests", "cd33e5e vor 11 Monaten Sylvain Joyeux remove the deprecated nameservice API", "53d9687 vor 11 Monaten Sylvain Joyeux clear all the name services in Orocos.clear", "14c1684 vor 11 Monaten Sylvain Joyeux reset the name services in Orocos.clear", "1b9c7fa vor 11 Monaten Sylvain Joyeux test: minor fixes", "d4d9e30 vor 11 Monaten Sylvain Joyeux test: disable the \"missing default logger\" warning", "a6a7b11 vor 11 Monaten Sylvain Joyeux task contexts do not load their own typekits anymore, update test", "ab6116d vor 11 Monaten Sylvain Joyeux allow to reset the model object for a task context to nil", "031fd31 vor 11 Monaten Sylvain Joyeux add file/line to class_eval", "e369934 vor 11 Monaten Sylvain Joyeux refactor #model to not rescue exceptions we should not", "203d2ae vor 11 Monaten Sylvain Joyeux some more conversions to the new loader API", "c04326a vor 11 Monaten Sylvain Joyeux fix loading of extension files", "7193a7b vor 11 Monaten Sylvain Joyeux fix the on_project_load hook that loads the runtime extensions", "f964c27 vor 11 Monaten Sylvain Joyeux define some backward-compatibility stuff", "ac94f4c vor 11 Monaten Sylvain Joyeux fix Orocos.loaded? and interaction between load and initialize", "b365834 vor 11 Monaten Sylvain Joyeux add missing require", "7324629 vor 11 Monaten Sylvain Joyeux fix error message", "f82aa64 vor 11 Monaten Sylvain Joyeux reinstate the max_types API at the level of Orocos", "63ec485 vor 11 Monaten Sylvain Joyeux style fix", "81526bf vor 11 Monaten Sylvain Joyeux do not forcefully load project typekits anymore", "1cc74c2 vor 11 Monaten Sylvain Joyeux load the ROS/async stuff only if ROS is available", "0649003 vor 11 Monaten Sylvain Joyeux some more adaptations to the new orogen loader API", "420c6c3 vor 11 Monaten Sylvain Joyeux require orogen/gen only in generate_and_build", "2de4e83 vor 11 Monaten Sylvain Joyeux test: remove the roby suite", "fa2a7c5 vor 11 Monaten Sylvain Joyeux doc fixes", "76b5aa5 vor 11 Monaten Sylvain Joyeux small fixes related to orogen and orocos.rb not sharing the same namespace anymore", "a05c1d3 vor 11 Monaten Sylvain Joyeux make sure that orocos.rb proper does not depend on orogen_ros", "f3dac9b vor 11 Monaten Sylvain Joyeux test: remove invalid deployments in the system.orogen stub project", "41c8e09 vor 11 Monaten Sylvain Joyeux split the ruby task support into a separate namespace with clean naming", "768e927 vor 1 Jahr, und 6 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/ros_process_manager'", "0420fc0 vor 1 Jahr, und 6 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into ros_process_manager", "95f6333 vor 1 Jahr, und 6 Monaten Sylvain Joyeux need to explicitly include orogen/gen in rake.rb now", "a972719 vor 1 Jahr, und 6 Monaten Sylvain Joyeux create a loader object to access models from a remote process server", "d8d0159 vor 1 Jahr, und 6 Monaten Sylvain Joyeux split process server code in a proper namespace/file structure", "654aa7d vor 1 Jahr, und 6 Monaten Sylvain Joyeux remove dead code", "8cc3143 vor 1 Jahr, und 6 Monaten Sylvain Joyeux convert to the orogen loaders API", "64740b6 vor 1 Jahr, und 6 Monaten Sylvain Joyeux don't put messages with newlines in exceptions", "4555777 vor 1 Jahr, und 6 Monaten Sylvain Joyeux ros: take access to the ROS name service lazily", "ad8216a vor 1 Jahr, und 6 Monaten Sylvain Joyeux do not forcefully load Orocos::ROS in constructors", "bdb9775 vor 1 Jahr, und 6 Monaten Sylvain Joyeux when parsing run options, allow the caller to pass models as objects instead of only as names", "ead80e2 vor 1 Jahr, und 6 Monaten Sylvain Joyeux conf: in #load_file, allow passing an orogen model directly instead of only names", "715c1da vor 1 Jahr, und 6 Monaten Sylvain Joyeux fix RubyDeployment", "7350656 vor 1 Jahr, und 6 Monaten Sylvain Joyeux don't try to access the ROS name service at toplevel", "b071ba0 vor 1 Jahr, und 7 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into ros_process_manager", "3fff778 vor 1 Jahr, und 7 Monaten Thomas Roehr ros: use globale ROS nameservice for process_manager", "59ca6e1 vor 1 Jahr, und 7 Monaten Thomas Roehr ros: allow setting of poll period for nameservice after instanciation", "bf12675 vor 1 Jahr, und 7 Monaten Thomas Roehr ros: use default poll period of 1 second for nameservice", "af4e66a vor 1 Jahr, und 7 Monaten Thomas Roehr ros: use available task instance for querying port, thus localizing search for topic to the node", "446aa93 vor 1 Jahr, und 7 Monaten Thomas Roehr ros: reduce overhead through name service by reducing polling frequency", "dc807ca vor 1 Jahr, und 7 Monaten Thomas Roehr ros: allow setting of poll period for nameservice", "5bd2a50 vor 1 Jahr, und 7 Monaten Sylvain Joyeux use the CORBA name service by default in ProcessClient", "c5043f6 vor 1 Jahr, und 7 Monaten Sylvain Joyeux reuse ProcessBase#task from ProcessClient#task", "621c36f vor 1 Jahr, und 7 Monaten Sylvain Joyeux allow to specify which name service should be used for a given process server", "937a47b vor 1 Jahr, und 7 Monaten Sylvain Joyeux remove the definition of ProcessClient#name, it is already defined on ProcessBase", "305951a vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: allow process_server to use its own nameservice for accessing tasks", "d1f727b vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: use process_servers own instance of nameservice for querying tasks", "3d8ac15 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: don't inject ros nameservice to Orocos.name_service", "8f492e5 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: call Orocos::ROS.load with initialization", "cfcb38b vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: make sure processes and topics are available and(!) accessible for port readers and writer before announcing the process to be truely started", "70fc850 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: fix exception message", "1f58713 vor 1 Jahr, und 7 Monaten Sylvain Joyeux Use type.name instead of deprecated type_name method in ports_searchable", "4600449 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: add debug output", "eaaf8f8 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: use normalization of topic name", "6eefd36 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: let process server start nodes with ROS if transport is available", "de740b2 vor 1 Jahr, und 7 Monaten Sylvain Joyeux Add documentation", "5590082 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: fix process termination handling in process manager", "9589d3a vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: adapt process_manager loading methods to refer to ros", "bf4e7a0 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: fix logging for ProcessManager#kill", "499c080 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: simulate state changes of ros nodes", "2e1dd5e vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: update test specs to changed interfaces", "9394693 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: use rosnode_normalize_name for ros_name", "5948c47 vor 1 Jahr, und 7 Monaten Sylvain Joyeux fix: pretty print in topic", "94fc861 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: fix killing of launcher processes", "9e9952f vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: don't verify port if the spec is available", "7789656 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: add loading of Orocos::ROS", "38ddb4b vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: set name of node model", "2877cb2 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: disable log_all_configuration for ros nodes", "1d69d5b vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: fix ProcessManager and LauncherProcess", "28eaf4b vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: add parse_run_options", "2199b1d vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: rename process server to process manager", "205cede vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: add tests", "b7f7744 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: add process server implementation", "f39be18 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: move functionality of types.rb to package orogen_ros", "9fcf0e8 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: move rospack_find to orogen_ros package", "fbab229 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: require orogen_ros explicitly"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_15"><td>
         
           38aff8b vor 2 Tagen Matthias Goldhoorn async: Add OroGen::DefinitionTypekitNotFound as known error<br/>
         
           47c75d9 vor 8 Wochen Sylvain Joyeux Merge pull request #47 from maltewi/remote_processes_bugfix<br/>
         
           219c03a vor 8 Wochen dmronga Loader.new could not be found. Added   require 'orocos/remote_processes/loader' to make it av available.<br/>
         
           e66d284 vor 8 Wochen Sylvain Joyeux set myself as maintainer<br/>
         
           75dad0f vor 9 Wochen Sylvain Joyeux Merge pull request #46 from rock-core/use_disconnect_all_in_output_reader_disconnect<br/>
         
           fc7ea29 vor 9 Wochen Sylvain Joyeux fixed version of "use disconnect_all in OutputReader#disconnect"<br/>
         
           cd0bea7 vor 9 Wochen Sylvain Joyeux Merge pull request #45 from saarnold/master<br/>
         
           5a73627 vor 9 Wochen Sascha Arnold Revert "use disconnect_all to disconnect readers"<br/>
         
           8beb3b3 vor 2 Monaten Sylvain Joyeux Merge pull request #44 from rock-core/bugfixes<br/>
         
           84393be vor 3 Monaten Sylvain Joyeux log: accept all key types when parsing log markers<br/>
         
           ce9a45e vor 3 Monaten Sylvain Joyeux log: fix log annotation loading after we changed to lazy-loading<br/>
         
           7ca73c6 vor 3 Monaten Sylvain Joyeux ruby task contexts start at PRE_OPERATIONAL, fix Async::TaskContextBase#to_ruby<br/>
         
           beed491 vor 3 Monaten Sylvain Joyeux use disconnect_all to disconnect readers<br/>
         
           b8f87a1 vor 3 Monaten Sylvain Joyeux Merge pull request #30 from rock-core/script_conf_default<br/>
         
           97a0f70 vor 3 Monaten Sylvain Joyeux Merge pull request #40 from rock-core/expose_nameservice_bind<br/>
         
           40d7624 vor 3 Monaten Sylvain Joyeux Merge pull request #41 from goldhoorn/master<br/>
         
           0deb1c6 vor 3 Monaten Matthias Goldhoorn log/replay: Fixed typo in current_sample_data<br/>
         
           baf505f vor 3 Monaten Sylvain Joyeux expose CORBA::NameService#bind<br/>
         
           5209167 vor 4 Monaten Sylvain Joyeux Merge pull request #39 from rock-core/fix_loader_thread_safety<br/>
         
           62f81ed vor 4 Monaten Sylvain Joyeux Merge pull request #37 from jakobs/master<br/>
         
           41eefea vor 4 Monaten Jakob Schwendner log_level: improve error message<br/>
         
           ae25d1d vor 4 Monaten Sylvain Joyeux access to task_model_from_name needs to be synchronized when done from within orocos.rb<br/>
         
           c5c2e2f vor 4 Monaten Jakob Schwendner raise for invalid log_level argument instead of warning<br/>
         
           a417fbb vor 4 Monaten Sylvain Joyeux fix model creation for Log::TaskContext to the orogen loaders<br/>
         
           08ffa3d vor 4 Monaten Jakob Schwendner Add ability to change log level per deployment<br/>
         
           6716109 vor 4 Monaten Jakob Schwendner updated some comments<br/>
         
           49df5dd vor 4 Monaten Sylvain Joyeux log: create an empty model for log tasks<br/>
         
           6c5e044 vor 4 Monaten Sylvain Joyeux log: only decode data for streams that are listening to it<br/>
         
           368e70f vor 5 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/allow_parallel_build_of_test_components' into orogen_loaders<br/>
         
           31a863a vor 5 Monaten Sylvain Joyeux doc: document Orocos::Scripts<br/>
         
           2116bab vor 5 Monaten Sylvain Joyeux rake: update the working directory from the test orogen components even with keep_wc set to true<br/>
         
           cf71b2e vor 5 Monaten Sylvain Joyeux rake: enable the MQ transport by default<br/>
         
           9eb2dbb vor 5 Monaten Sylvain Joyeux rake: allow passing make options to setup:orogen_all<br/>
         
           9eff17d vor 5 Monaten Sylvain Joyeux rake: fix option handling in setup:orogen*<br/>
         
           7133bf9 vor 5 Monaten Sylvain Joyeux remove usage of Dir.chdir<br/>
         
           feb11b9 vor 5 Monaten Sylvain Joyeux Merge pull request #31 from planthaber/each_task<br/>
         
           202d3de vor 5 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into orogen_loaders<br/>
         
           821b9c7 vor 6 Monaten Steffen Planthaber return enum, if no block given for each_task<br/>
         
           0b44c74 vor 6 Monaten Sylvain Joyeux Merge pull request #32 from rock-core/alex<br/>
         
           e1375a5 vor 6 Monaten Alexander Duda Async.proxy: add support for any object responding to name<br/>
         
           21d1295 vor 6 Monaten Sylvain Joyeux scripts: allow setting a default configuration with --conf<br/>
         
           845ace3 vor 7 Monaten Sylvain Joyeux Merge pull request #26 from goldhoorn/fix_config_handling_master<br/>
         
           8744110 vor 7 Monaten Alexander Duda Merge pull request #27 from leifole/master<br/>
         
           5eb5d78 vor 7 Monaten Leif Christensen Fix to SubPortProxy#on_data to prevent crashing due to raw_data call on ruby types as suggested by doudou on the rock-dev mailing list.<br/>
         
           a5277b7 vor 7 Monaten Matthias Goldhoorn TaskConfiguration: do not save metadata inside of config-hashes<br/>
         
           95189cf vor 8 Monaten Sylvain Joyeux fix --conf when the FILE argument is omitted<br/>
         
           fda193f vor 9 Monaten Sylvain Joyeux Merge pull request #22 from rock-core/revert-18-minor_updates<br/>
         
           206690c vor 9 Monaten Sylvain Joyeux Revert "Minor updates"<br/>
         
           3e408cc vor 9 Monaten Sylvain Joyeux Merge pull request #18 from rock-core/minor_updates<br/>
         
           6a41299 vor 9 Monaten Sylvain Joyeux mention in manifest.xml which gems are needed for the test suite<br/>
         
           b03da43 vor 9 Monaten Sylvain Joyeux fix type used to create port models in #port<br/>
         
           7bf3f03 vor 9 Monaten Sylvain Joyeux ruby_tasks: set a model for created permanent ports<br/>
         
           ba65aa5 vor 9 Monaten Sylvain Joyeux make NameService#each_task return an enum if no block is given<br/>
         
           f5b2e3a vor 9 Monaten Sylvain Joyeux initialize Port#model with an empty model if none is available<br/>
         
           f7b6862 vor 9 Monaten Sylvain Joyeux Merge pull request #17 from planthaber/taskcontext_to_h<br/>
         
           83ba5f2 vor 9 Monaten Steffen Planthaber added to_h function to task context<br/>
         
           0fbe6c7 vor 9 Monaten Sylvain Joyeux Merge pull request #2 from rock-core/remove_roby_leftovers<br/>
         
           6df896b vor 9 Monaten Sylvain Joyeux Merge pull request #13 from annaborn/master<br/>
         
           63dc8c9 vor 9 Monaten Anna Born add missing dependency to base/orogen/std<br/>
         
           f4a84f0 vor 10 Monaten Matthias Goldhoorn Merge pull request #8 from goldhoorn/fix_process_naming<br/>
         
           c719403 vor 10 Monaten Matthias Goldhoorn Fixed manifest, lib/orocos/ruby_tasks/deployment was renamed to process.<br/>
         
           62c071b vor 10 Monaten Sylvain Joyeux Merge pull request #7 from goldhoorn/fix_oroconf<br/>
         
           003967d vor 10 Monaten Matthias Goldhoorn adapted oroconf and configuration to orogen_loaders<br/>
         
           8bab1dc vor 10 Monaten Sylvain Joyeux test,async: minor fixes<br/>
         
           363850c vor 10 Monaten Sylvain Joyeux properly deprecate the old process server / ruby tasks class names<br/>
         
           92aa831 vor 10 Monaten Sylvain Joyeux ruby_tasks: rename badly named file deployment.rb to process.rb<br/>
         
           d3d1930 vor 10 Monaten Sylvain Joyeux documentation<br/>
         
           6e9aee3 vor 10 Monaten Sylvain Joyeux ruby_tasks: make the ruby_process_server argument optional in Process<br/>
         
           6d67910 vor 10 Monaten Sylvain Joyeux ruby_tasks: do not load the ruby process manager with ruby_tasks<br/>
         
           3f66d42 vor 10 Monaten Sylvain Joyeux ruby_tasks: fix exception handling in TaskContext.new if the exception is thrown before local_task gets created<br/>
         
           a7323bc vor 10 Monaten Sylvain Joyeux async: split long filter_options line for readability<br/>
         
           5a32eba vor 10 Monaten Sylvain Joyeux Merge pull request #4 from goldhoorn/process_server_depricated<br/>
         
           2e7ffbe vor 10 Monaten Matthias Goldhoorn process_server: get rid of dericated format of remote nameserver<br/>
         
           7384947 vor 10 Monaten Sylvain Joyeux remote_processes: fix duplicate registration of Client#loader on the root loader<br/>
         
           9e4c969 vor 10 Monaten Sylvain Joyeux fix initialization of default loaders<br/>
         
           85879a6 vor 10 Monaten Sylvain Joyeux remote_processes: implement a command to quit the server remotely<br/>
         
           8ab7fd5 vor 10 Monaten Sylvain Joyeux remote_processes: implement joining a remote process<br/>
         
           237bcf6 vor 10 Monaten Sylvain Joyeux remote_processes: refactor the Server code<br/>
         
           ae538ab vor 10 Monaten Sylvain Joyeux remote_processes: fix loader handling in Client<br/>
         
           2778cd4 vor 10 Monaten Sylvain Joyeux remote_processes: initialize Process with the deployment model, not its name<br/>
         
           c4e5ad2 vor 10 Monaten Sylvain Joyeux remote_processes: remove hardcoded access to the default pkgconfig loader<br/>
         
           3d000dc vor 10 Monaten Sylvain Joyeux remote_processes: rename Server#options to Server#default_start_options<br/>
         
           12147d5 vor 10 Monaten Sylvain Joyeux remote_processes: support given a port of 0 to Server#initialize<br/>
         
           84e1b81 vor 10 Monaten Sylvain Joyeux remote_processes: use constants instead of harcoded control codes<br/>
         
           c45f0eb vor 10 Monaten Sylvain Joyeux remote_processes: do not explicitly call exit() when the server quits<br/>
         
           78a84e5 vor 10 Monaten Sylvain Joyeux remote_processes: write a test suite<br/>
         
           dc5150c vor 10 Monaten Sylvain Joyeux test: fix simplecov integration<br/>
         
           d6160d0 vor 10 Monaten Sylvain Joyeux improve suggestions in case a process dies<br/>
         
           2dcfb71 vor 10 Monaten Sylvain Joyeux remove access to the global name service object in the process spawning code paths<br/>
         
           d595ffd vor 10 Monaten Sylvain Joyeux fix spawning processes with the wait option set to true<br/>
         
           de7a260 vor 10 Monaten Sylvain Joyeux remove the creation of an aggregate loader in RubyTasks::ProcessManager<br/>
         
           56f6ef7 vor 10 Monaten Sylvain Joyeux document the root_loader option of RemoteProcesses::Client#initialize<br/>
         
           f22604a vor 10 Monaten Sylvain Joyeux make DefaultLoader.export_types = false un-export already exported types<br/>
         
           81ce54f vor 11 Monaten Sylvain Joyeux remove the Orocos::RobyPlugin test suite<br/>
         
           083b775 vor 11 Monaten Sylvain Joyeux make the process manager's #start method accept a deployment model directly<br/>
         
           225a95e vor 11 Monaten Sylvain Joyeux allow specifying the loader that should be used in Orocos::Process.parse_run_options<br/>
         
           a8bcc31 vor 11 Monaten Sylvain Joyeux allow passing the deployment model to Deployment#initialize by object instead of by name<br/>
         
           cde093f vor 11 Monaten Sylvain Joyeux remove usage of Orocos.run to cleanup test output<br/>
         
           4a9064c vor 11 Monaten Sylvain Joyeux dist: avoid rebuilding all orogen components each time 'rake test' is called<br/>
         
           2e93e82 vor 11 Monaten Sylvain Joyeux remove unused variable<br/>
         
           6538e30 vor 11 Monaten Sylvain Joyeux ruby_tasks: fix memory leak<br/>
         
           fe964d4 vor 11 Monaten Sylvain Joyeux ruby_tasks: set the interface of a removed port to 0 explicitly<br/>
         
           ad5df5f vor 11 Monaten Sylvain Joyeux test: disable the 'missing default logger' warning during tests<br/>
         
           33a557b vor 11 Monaten Sylvain Joyeux remove usage of ObjectSpace in process handling<br/>
         
           da24a8c vor 11 Monaten Sylvain Joyeux test: exception raised when model-loading changed. Update the test.<br/>
         
           3c4180d vor 11 Monaten Sylvain Joyeux fix dynamic property tests<br/>
         
           15e95ed vor 11 Monaten Sylvain Joyeux test: define #get<br/>
         
           3833e24 vor 11 Monaten Sylvain Joyeux base: load_typekit must use the pkgconfig loader directly<br/>
         
           5ad57ed vor 11 Monaten Sylvain Joyeux ros: allow to specify which loader to use in ROS::ProcessManager<br/>
         
           4405b52 vor 11 Monaten Sylvain Joyeux test: cleanup common test setup and migrate to minitest<br/>
         
           63dd93c vor 11 Monaten Sylvain Joyeux fix exception raised by ConfigurationManager.load_file if the model is not found<br/>
         
           68bc6ef vor 11 Monaten Sylvain Joyeux fix #load_file to properly raise ArgumentError<br/>
         
           0e416fb vor 11 Monaten Sylvain Joyeux remove unneeded Orocos. prefix<br/>
         
           10f4619 vor 11 Monaten Sylvain Joyeux remove the orocos logfile in Orocos.clear if we aren't supposed to keep it<br/>
         
           76739b4 vor 11 Monaten Sylvain Joyeux update Manifest.txt<br/>
         
           a5f1f21 vor 11 Monaten Sylvain Joyeux rename nonsensical files to their proper names<br/>
         
           a2b9495 vor 11 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into orogen_loaders<br/>
         
           3ac69e0 vor 11 Monaten Sylvain Joyeux fix Orocos.initialized? not being reset after calling Orocos.clear<br/>
         
           424d036 vor 11 Monaten Sylvain Joyeux fix DefaultLoader#export_types? to be writable<br/>
         
           e1d689a vor 11 Monaten Sylvain Joyeux make Orocos.clear only reset the loaders instead of creating new ones<br/>
         
           97b6022 vor 11 Monaten Sylvain Joyeux define RubyTasks::Process#pid for compatibility with Process<br/>
         
           cde4aec vor 11 Monaten Sylvain Joyeux fix setup_default_logger w.r.t. the process name in the remote case<br/>
         
           fd97670 vor 11 Monaten Sylvain Joyeux bin: convert oroinspect to the loaders API<br/>
         
           9539d63 vor 11 Monaten Sylvain Joyeux remove the dead code for configuration mode in oroinspect<br/>
         
           99989ec vor 11 Monaten Sylvain Joyeux ruby_tasks: mock the operations as methods on the task object<br/>
         
           a3959d2 vor 11 Monaten Sylvain Joyeux ruby_tasks: fix type resolution in create_property<br/>
         
           07910d9 vor 11 Monaten Sylvain Joyeux ruby_tasks: pass project to the created Spec::TaskContext<br/>
         
           ce74b0e vor 11 Monaten Sylvain Joyeux ruby_tasks: in .new, dispose of the created local task context on exception<br/>
         
           54c8404 vor 11 Monaten Sylvain Joyeux fix RubyTasks::Process<br/>
         
           284177f vor 11 Monaten Sylvain Joyeux modify the local task context to integrate state exports<br/>
         
           371d289 vor 11 Monaten Sylvain Joyeux ruby_tasks: fix ProcessManager<br/>
         
           c3a757c vor 11 Monaten Sylvain Joyeux better error message<br/>
         
           bce0587 vor 11 Monaten Sylvain Joyeux define missing available_ accessors on RemoteProcesses::Loader<br/>
         
           44ad492 vor 11 Monaten Sylvain Joyeux remote: implement #each_available_project_name on Loader<br/>
         
           be7241d vor 11 Monaten Sylvain Joyeux fix RemoteProcesses::Server to use the loader API<br/>
         
           915a624 vor 11 Monaten Sylvain Joyeux make RemoteProcesses::Server have its own logger<br/>
         
           d2a87ee vor 11 Monaten Sylvain Joyeux fix RemoteProcesses::Client#pid to properly return an integer<br/>
         
           0967a49 vor 11 Monaten Sylvain Joyeux fix loader initialization in RemoteProcesses::Client<br/>
         
           2e30656 vor 11 Monaten Sylvain Joyeux bin: add missing require to orocos_process_server<br/>
         
           54966a7 vor 11 Monaten Sylvain Joyeux rename Orocos to OroGen when it makes sense<br/>
         
           a724056 vor 11 Monaten Sylvain Joyeux remove code pointing to Orocos::Generation<br/>
         
           c533e6b vor 11 Monaten Sylvain Joyeux ros: cleanup namespaces<br/>
         
           41722c2 vor 11 Monaten Sylvain Joyeux test: define attributes early in #setup to avoid exceptions in teardown if the complex part of the setup fails<br/>
         
           0bc16b7 vor 11 Monaten Sylvain Joyeux integrate suite_async in suite.rb<br/>
         
           3a8a4f9 vor 11 Monaten Sylvain Joyeux tiny change in exception definition / usage<br/>
         
           4419098 vor 11 Monaten Sylvain Joyeux small fixes related to the loaders API<br/>
         
           32fbc41 vor 11 Monaten Sylvain Joyeux ros: update ProcessManager for the loaders API<br/>
         
           25b7b09 vor 11 Monaten Sylvain Joyeux moved the orogen_ros code into orogen proper, no need for funky autodetect logic<br/>
         
           763de8b vor 11 Monaten Sylvain Joyeux fix loading of the refactored process server<br/>
         
           8e9cc00 vor 11 Monaten Sylvain Joyeux fix Orocos.get<br/>
         
           3d90ab4 vor 11 Monaten Sylvain Joyeux clear Orocos::ROS in Orocos.clear if available<br/>
         
           7ba92d4 vor 11 Monaten Sylvain Joyeux define Orocos.default_project to make creating new interface models easier<br/>
         
           fb837db vor 11 Monaten Sylvain Joyeux add coverage/ to .gitignore<br/>
         
           11c8658 vor 11 Monaten Sylvain Joyeux make the default loader an Aggregate that contain PkgConfig and Files<br/>
         
           1cf76ba vor 11 Monaten Sylvain Joyeux test: add some unit tests<br/>
         
           cd33e5e vor 11 Monaten Sylvain Joyeux remove the deprecated nameservice API<br/>
         
           53d9687 vor 11 Monaten Sylvain Joyeux clear all the name services in Orocos.clear<br/>
         
           14c1684 vor 11 Monaten Sylvain Joyeux reset the name services in Orocos.clear<br/>
         
           1b9c7fa vor 11 Monaten Sylvain Joyeux test: minor fixes<br/>
         
           d4d9e30 vor 11 Monaten Sylvain Joyeux test: disable the "missing default logger" warning<br/>
         
           a6a7b11 vor 11 Monaten Sylvain Joyeux task contexts do not load their own typekits anymore, update test<br/>
         
           ab6116d vor 11 Monaten Sylvain Joyeux allow to reset the model object for a task context to nil<br/>
         
           031fd31 vor 11 Monaten Sylvain Joyeux add file/line to class_eval<br/>
         
           e369934 vor 11 Monaten Sylvain Joyeux refactor #model to not rescue exceptions we should not<br/>
         
           203d2ae vor 11 Monaten Sylvain Joyeux some more conversions to the new loader API<br/>
         
           c04326a vor 11 Monaten Sylvain Joyeux fix loading of extension files<br/>
         
           7193a7b vor 11 Monaten Sylvain Joyeux fix the on_project_load hook that loads the runtime extensions<br/>
         
           f964c27 vor 11 Monaten Sylvain Joyeux define some backward-compatibility stuff<br/>
         
           ac94f4c vor 11 Monaten Sylvain Joyeux fix Orocos.loaded? and interaction between load and initialize<br/>
         
           b365834 vor 11 Monaten Sylvain Joyeux add missing require<br/>
         
           7324629 vor 11 Monaten Sylvain Joyeux fix error message<br/>
         
           f82aa64 vor 11 Monaten Sylvain Joyeux reinstate the max_types API at the level of Orocos<br/>
         
           63ec485 vor 11 Monaten Sylvain Joyeux style fix<br/>
         
           81526bf vor 11 Monaten Sylvain Joyeux do not forcefully load project typekits anymore<br/>
         
           1cc74c2 vor 11 Monaten Sylvain Joyeux load the ROS/async stuff only if ROS is available<br/>
         
           0649003 vor 11 Monaten Sylvain Joyeux some more adaptations to the new orogen loader API<br/>
         
           420c6c3 vor 11 Monaten Sylvain Joyeux require orogen/gen only in generate_and_build<br/>
         
           2de4e83 vor 11 Monaten Sylvain Joyeux test: remove the roby suite<br/>
         
           fa2a7c5 vor 11 Monaten Sylvain Joyeux doc fixes<br/>
         
           76b5aa5 vor 11 Monaten Sylvain Joyeux small fixes related to orogen and orocos.rb not sharing the same namespace anymore<br/>
         
           a05c1d3 vor 11 Monaten Sylvain Joyeux make sure that orocos.rb proper does not depend on orogen_ros<br/>
         
           f3dac9b vor 11 Monaten Sylvain Joyeux test: remove invalid deployments in the system.orogen stub project<br/>
         
           41c8e09 vor 11 Monaten Sylvain Joyeux split the ruby task support into a separate namespace with clean naming<br/>
         
           768e927 vor 1 Jahr, und 6 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/ros_process_manager'<br/>
         
           0420fc0 vor 1 Jahr, und 6 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into ros_process_manager<br/>
         
           95f6333 vor 1 Jahr, und 6 Monaten Sylvain Joyeux need to explicitly include orogen/gen in rake.rb now<br/>
         
           a972719 vor 1 Jahr, und 6 Monaten Sylvain Joyeux create a loader object to access models from a remote process server<br/>
         
           d8d0159 vor 1 Jahr, und 6 Monaten Sylvain Joyeux split process server code in a proper namespace/file structure<br/>
         
           654aa7d vor 1 Jahr, und 6 Monaten Sylvain Joyeux remove dead code<br/>
         
           8cc3143 vor 1 Jahr, und 6 Monaten Sylvain Joyeux convert to the orogen loaders API<br/>
         
           64740b6 vor 1 Jahr, und 6 Monaten Sylvain Joyeux don't put messages with newlines in exceptions<br/>
         
           4555777 vor 1 Jahr, und 6 Monaten Sylvain Joyeux ros: take access to the ROS name service lazily<br/>
         
           ad8216a vor 1 Jahr, und 6 Monaten Sylvain Joyeux do not forcefully load Orocos::ROS in constructors<br/>
         
           bdb9775 vor 1 Jahr, und 6 Monaten Sylvain Joyeux when parsing run options, allow the caller to pass models as objects instead of only as names<br/>
         
           ead80e2 vor 1 Jahr, und 6 Monaten Sylvain Joyeux conf: in #load_file, allow passing an orogen model directly instead of only names<br/>
         
           715c1da vor 1 Jahr, und 6 Monaten Sylvain Joyeux fix RubyDeployment<br/>
         
           7350656 vor 1 Jahr, und 6 Monaten Sylvain Joyeux don't try to access the ROS name service at toplevel<br/>
         
           b071ba0 vor 1 Jahr, und 7 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into ros_process_manager<br/>
         
           3fff778 vor 1 Jahr, und 7 Monaten Thomas Roehr ros: use globale ROS nameservice for process_manager<br/>
         
           59ca6e1 vor 1 Jahr, und 7 Monaten Thomas Roehr ros: allow setting of poll period for nameservice after instanciation<br/>
         
           bf12675 vor 1 Jahr, und 7 Monaten Thomas Roehr ros: use default poll period of 1 second for nameservice<br/>
         
           af4e66a vor 1 Jahr, und 7 Monaten Thomas Roehr ros: use available task instance for querying port, thus localizing search for topic to the node<br/>
         
           446aa93 vor 1 Jahr, und 7 Monaten Thomas Roehr ros: reduce overhead through name service by reducing polling frequency<br/>
         
           dc807ca vor 1 Jahr, und 7 Monaten Thomas Roehr ros: allow setting of poll period for nameservice<br/>
         
           5bd2a50 vor 1 Jahr, und 7 Monaten Sylvain Joyeux use the CORBA name service by default in ProcessClient<br/>
         
           c5043f6 vor 1 Jahr, und 7 Monaten Sylvain Joyeux reuse ProcessBase#task from ProcessClient#task<br/>
         
           621c36f vor 1 Jahr, und 7 Monaten Sylvain Joyeux allow to specify which name service should be used for a given process server<br/>
         
           937a47b vor 1 Jahr, und 7 Monaten Sylvain Joyeux remove the definition of ProcessClient#name, it is already defined on ProcessBase<br/>
         
           305951a vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: allow process_server to use its own nameservice for accessing tasks<br/>
         
           d1f727b vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: use process_servers own instance of nameservice for querying tasks<br/>
         
           3d8ac15 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: don't inject ros nameservice to Orocos.name_service<br/>
         
           8f492e5 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: call Orocos::ROS.load with initialization<br/>
         
           cfcb38b vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: make sure processes and topics are available and(!) accessible for port readers and writer before announcing the process to be truely started<br/>
         
           70fc850 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: fix exception message<br/>
         
           1f58713 vor 1 Jahr, und 7 Monaten Sylvain Joyeux Use type.name instead of deprecated type_name method in ports_searchable<br/>
         
           4600449 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: add debug output<br/>
         
           eaaf8f8 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: use normalization of topic name<br/>
         
           6eefd36 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: let process server start nodes with ROS if transport is available<br/>
         
           de740b2 vor 1 Jahr, und 7 Monaten Sylvain Joyeux Add documentation<br/>
         
           5590082 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: fix process termination handling in process manager<br/>
         
           9589d3a vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: adapt process_manager loading methods to refer to ros<br/>
         
           bf4e7a0 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: fix logging for ProcessManager#kill<br/>
         
           499c080 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: simulate state changes of ros nodes<br/>
         
           2e1dd5e vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: update test specs to changed interfaces<br/>
         
           9394693 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: use rosnode_normalize_name for ros_name<br/>
         
           5948c47 vor 1 Jahr, und 7 Monaten Sylvain Joyeux fix: pretty print in topic<br/>
         
           94fc861 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: fix killing of launcher processes<br/>
         
           9e9952f vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: don't verify port if the spec is available<br/>
         
           7789656 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: add loading of Orocos::ROS<br/>
         
           38ddb4b vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: set name of node model<br/>
         
           2877cb2 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: disable log_all_configuration for ros nodes<br/>
         
           1d69d5b vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: fix ProcessManager and LauncherProcess<br/>
         
           28eaf4b vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: add parse_run_options<br/>
         
           2199b1d vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: rename process server to process manager<br/>
         
           205cede vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: add tests<br/>
         
           b7f7744 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: add process server implementation<br/>
         
           f39be18 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: move functionality of types.rb to package orogen_ros<br/>
         
           9fcf0e8 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: move rospack_find to orogen_ros package<br/>
         
           fbab229 vor 1 Jahr, und 7 Monaten Sylvain Joyeux ros: require orogen_ros explicitly<br/>
         
         </td></tr>
       
       



       <tr class="name" id="15">
         <th>tools/pocolog</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="16"> 18 commits</a> in ["e9d3835 vor 4 Monaten Sylvain Joyeux Merge pull request #2 from rock-core/optimizations", "3159799 vor 4 Monaten Sylvain Joyeux fix documentation of StreamAligner#sample_info", "4c6f896 vor 4 Monaten Sylvain Joyeux define stream_by_index", "6ac08e1 vor 5 Monaten Sylvain Joyeux aligner: provide access to the info that allows to read a sample later", "b9df256 vor 5 Monaten Sylvain Joyeux stream_aligner: avoid sorting the streams TWICE", "f3be134 vor 5 Monaten Sylvain Joyeux remove duplicate code between step and advance", "4f6ca5f vor 5 Monaten Sylvain Joyeux allow setting Logfiles#compress?", "6c374c6 vor 5 Monaten Sylvain Joyeux fix wrong local variable name", "a9c8ab8 vor 5 Monaten Sylvain Joyeux provide a fastpath to read data samples", "2246711 vor 5 Monaten Sylvain Joyeux allow reusing the same sample when reading data", "55c4a77 vor 5 Monaten Sylvain Joyeux reuse always the same buffer to read data from disk in DataStream#raw_data", "9a18449 vor 5 Monaten Sylvain Joyeux reuse always the same buffer in Logfiles#data_header", "0c06559 vor 5 Monaten Sylvain Joyeux allow to specify a buffer to fill in Logfiles#data", "9d5b42d vor 5 Monaten Sylvain Joyeux avoid a few expensive method calls in #data_header", "1708dce vor 5 Monaten Sylvain Joyeux optimize StreamIndex#marshal_* methods", "41d05e7 vor 5 Monaten Sylvain Joyeux display alignment time in output log", "0159fb9 vor 5 Monaten Sylvain Joyeux implement StreamAligner#single_raw_data", "11b839e vor 5 Monaten Sylvain Joyeux test: update test suite to run with minitest"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_16"><td>
         
           e9d3835 vor 4 Monaten Sylvain Joyeux Merge pull request #2 from rock-core/optimizations<br/>
         
           3159799 vor 4 Monaten Sylvain Joyeux fix documentation of StreamAligner#sample_info<br/>
         
           4c6f896 vor 4 Monaten Sylvain Joyeux define stream_by_index<br/>
         
           6ac08e1 vor 5 Monaten Sylvain Joyeux aligner: provide access to the info that allows to read a sample later<br/>
         
           b9df256 vor 5 Monaten Sylvain Joyeux stream_aligner: avoid sorting the streams TWICE<br/>
         
           f3be134 vor 5 Monaten Sylvain Joyeux remove duplicate code between step and advance<br/>
         
           4f6ca5f vor 5 Monaten Sylvain Joyeux allow setting Logfiles#compress?<br/>
         
           6c374c6 vor 5 Monaten Sylvain Joyeux fix wrong local variable name<br/>
         
           a9c8ab8 vor 5 Monaten Sylvain Joyeux provide a fastpath to read data samples<br/>
         
           2246711 vor 5 Monaten Sylvain Joyeux allow reusing the same sample when reading data<br/>
         
           55c4a77 vor 5 Monaten Sylvain Joyeux reuse always the same buffer to read data from disk in DataStream#raw_data<br/>
         
           9a18449 vor 5 Monaten Sylvain Joyeux reuse always the same buffer in Logfiles#data_header<br/>
         
           0c06559 vor 5 Monaten Sylvain Joyeux allow to specify a buffer to fill in Logfiles#data<br/>
         
           9d5b42d vor 5 Monaten Sylvain Joyeux avoid a few expensive method calls in #data_header<br/>
         
           1708dce vor 5 Monaten Sylvain Joyeux optimize StreamIndex#marshal_* methods<br/>
         
           41d05e7 vor 5 Monaten Sylvain Joyeux display alignment time in output log<br/>
         
           0159fb9 vor 5 Monaten Sylvain Joyeux implement StreamAligner#single_raw_data<br/>
         
           11b839e vor 5 Monaten Sylvain Joyeux test: update test suite to run with minitest<br/>
         
         </td></tr>
       
       



       <tr class="name" id="16">
         <th>tools/logger</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="17"> 4 commits</a> in ["502f3d6 vor 9 Wochen Sylvain Joyeux Merge pull request #3 from goldhoorn/master", "8a8445b vor 9 Wochen Matthias Goldhoorn Fix for clang and cxx11 compatibility.", "6e35a3c vor 7 Monaten Sylvain Joyeux Merge pull request #1 from goldhoorn/master", "010ab6f vor 7 Monaten Matthias Goldhoorn reject component start if logging file already exists"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_17"><td>
         
           502f3d6 vor 9 Wochen Sylvain Joyeux Merge pull request #3 from goldhoorn/master<br/>
         
           8a8445b vor 9 Wochen Matthias Goldhoorn Fix for clang and cxx11 compatibility.<br/>
         
           6e35a3c vor 7 Monaten Sylvain Joyeux Merge pull request #1 from goldhoorn/master<br/>
         
           010ab6f vor 7 Monaten Matthias Goldhoorn reject component start if logging file already exists<br/>
         
         </td></tr>
       
       



       <tr class="name" id="17">
         <th>base/orogen/types</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="18"> 17 commits</a> in ["253f715 vor 23 Stunden Matthias Goldhoorn Worarounded https://github.com/orocos-toolchain/orogen/issues/50", "949e572 vor 8 Wochen Sylvain Joyeux Merge remote-tracking branch 'autobuild/stable'", "06540a3 vor 2 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/stable' into rock1408", "1524c27 vor 5 Monaten Sylvain Joyeux Merge pull request #10 from saarnold/new_depth_map_type", "4f85452 vor 5 Monaten Sascha Arnold added log conversion from obsolete type MultilevelLaserScan to DepthMap", "a71aa36 vor 5 Monaten Sascha Arnold export new base type DepthMap", "f84ba77 vor 7 Monaten Sylvain Joyeux Merge pull request #9 from rock-core/add_pressure_types_to_typekit", "343f6f9 vor 8 Monaten Sylvain Joyeux add pressure types to the typekit", "61120c7 vor 8 Monaten Sylvain Joyeux Re-apply pull request #6 from ajishbabu/master", "ab39632 vor 9 Monaten Sylvain Joyeux Merge pull request #7 from rock-core/revert-6-master", "837a84b vor 9 Monaten Sylvain Joyeux Revert \"adding to typekit named vector of wrench\"", "83c16af vor 9 Monaten Sylvain Joyeux Merge pull request #6 from ajishbabu/master", "1ce43d1 vor 9 Monaten babu-dfki renamed WrenchState to Wrench", "4b98d44 vor 10 Monaten babu-dfki added WrenchState which is used by the base::samples::Wrench and base::samples::Wrenches", "dc42a7d vor 10 Monaten babu-dfki adding to typekit named vector of wrench", "83820c5 vor 10 Monaten Sylvain Joyeux Merge pull request #3 from goldhoorn/stable", "4dc6b52 vor 11 Monaten Matthias Goldhoorn test: replaced gnulinux with ${OROCOS_TARGET}"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_18"><td>
         
           253f715 vor 23 Stunden Matthias Goldhoorn Worarounded https://github.com/orocos-toolchain/orogen/issues/50<br/>
         
           949e572 vor 8 Wochen Sylvain Joyeux Merge remote-tracking branch 'autobuild/stable'<br/>
         
           06540a3 vor 2 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/stable' into rock1408<br/>
         
           1524c27 vor 5 Monaten Sylvain Joyeux Merge pull request #10 from saarnold/new_depth_map_type<br/>
         
           4f85452 vor 5 Monaten Sascha Arnold added log conversion from obsolete type MultilevelLaserScan to DepthMap<br/>
         
           a71aa36 vor 5 Monaten Sascha Arnold export new base type DepthMap<br/>
         
           f84ba77 vor 7 Monaten Sylvain Joyeux Merge pull request #9 from rock-core/add_pressure_types_to_typekit<br/>
         
           343f6f9 vor 8 Monaten Sylvain Joyeux add pressure types to the typekit<br/>
         
           61120c7 vor 8 Monaten Sylvain Joyeux Re-apply pull request #6 from ajishbabu/master<br/>
         
           ab39632 vor 9 Monaten Sylvain Joyeux Merge pull request #7 from rock-core/revert-6-master<br/>
         
           837a84b vor 9 Monaten Sylvain Joyeux Revert "adding to typekit named vector of wrench"<br/>
         
           83c16af vor 9 Monaten Sylvain Joyeux Merge pull request #6 from ajishbabu/master<br/>
         
           1ce43d1 vor 9 Monaten babu-dfki renamed WrenchState to Wrench<br/>
         
           4b98d44 vor 10 Monaten babu-dfki added WrenchState which is used by the base::samples::Wrench and base::samples::Wrenches<br/>
         
           dc42a7d vor 10 Monaten babu-dfki adding to typekit named vector of wrench<br/>
         
           83820c5 vor 10 Monaten Sylvain Joyeux Merge pull request #3 from goldhoorn/stable<br/>
         
           4dc6b52 vor 11 Monaten Matthias Goldhoorn test: replaced gnulinux with ${OROCOS_TARGET}<br/>
         
         </td></tr>
       
       





       <tr class="name" id="18">
         <th>tools/log_tools</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="19"> 5 commits</a> in ["7937022 vor 7 Wochen Alexander Duda fix: copy metadata of all converted streams", "a6f05a5 vor 3 Monaten Sylvain Joyeux Merge pull request #1 from saarnold/master", "4942b8a vor 4 Monaten Sascha Arnold The Orocos member master_project is obsolete and added additional check if the type as available in the registry", "35b6b50 vor 6 Monaten Alexander Duda fix generate file name for streams with namespaces", "e360b8b vor 8 Monaten Alexander Duda rock-export: fix doc"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_19"><td>
         
           7937022 vor 7 Wochen Alexander Duda fix: copy metadata of all converted streams<br/>
         
           a6f05a5 vor 3 Monaten Sylvain Joyeux Merge pull request #1 from saarnold/master<br/>
         
           4942b8a vor 4 Monaten Sascha Arnold The Orocos member master_project is obsolete and added additional check if the type as available in the registry<br/>
         
           35b6b50 vor 6 Monaten Alexander Duda fix generate file name for streams with namespaces<br/>
         
           e360b8b vor 8 Monaten Alexander Duda rock-export: fix doc<br/>
         
         </td></tr>
       
       





       <tr class="name" id="19">
         <th>drivers/transformer</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="20"> 20 commits</a> in ["1fea787 vor 4 Wochen Janosch Machowinski Bugfix: Do not return that transformation is available if chain is empty", "056d65f vor 4 Wochen Janosch Machowinski added method to return the registered transformations.", "ef89960 vor 4 Wochen Janosch Machowinski clear transformation status in clear method", "8e53d43 vor 4 Wochen Janosch Machowinski added missing include", "4dee1e4 vor 4 Wochen Janosch Machowinski moved TransformerStatus into the library", "fdb0bfd vor 4 Wochen Janosch Machowinski Added me as maintainer", "3d51221 vor 6 Wochen jmachowinski Merge pull request #2 from Brazilian-Institute-of-Robotics/misc_improvements", "8315540 vor 6 Wochen Sylvain Joyeux ruby: make StaticTransform#pretty_print more informative", "c17a000 vor 6 Wochen Sylvain Joyeux ruby: accept Isometry3 as a static transformation object", "59a5f59 vor 6 Wochen Sylvain Joyeux ruby: add declarations for example transformations", "768f39d vor 6 Wochen Sylvain Joyeux ruby: there's really no reason to restrict frame names", "5e8a804 vor 6 Wochen Sylvain Joyeux ruby: improve error messages", "05ebf73 vor 6 Wochen Sylvain Joyeux test: fix obviously long-unused test suite", "4c86b2d vor 7 Wochen Sylvain Joyeux add myself as author", "0a6f533 vor 3 Monaten Sylvain Joyeux Merge pull request #1 from rock-core/doc", "63317c1 vor 3 Monaten Sylvain Joyeux small documentation update", "5a7bd9c vor 5 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into orogen_loaders", "7096b28 vor 9 Monaten Janosch Machowinski syskit: fix transformer configuration inheritance across profiles", "3ed9d4e vor 9 Monaten Janosch Machowinski syskit: update w.r.t. split of validate_* flags in engine", "3ea0a60 vor 9 Monaten Janosch Machowinski syskit: better debug output"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_20"><td>
         
           1fea787 vor 4 Wochen Janosch Machowinski Bugfix: Do not return that transformation is available if chain is empty<br/>
         
           056d65f vor 4 Wochen Janosch Machowinski added method to return the registered transformations.<br/>
         
           ef89960 vor 4 Wochen Janosch Machowinski clear transformation status in clear method<br/>
         
           8e53d43 vor 4 Wochen Janosch Machowinski added missing include<br/>
         
           4dee1e4 vor 4 Wochen Janosch Machowinski moved TransformerStatus into the library<br/>
         
           fdb0bfd vor 4 Wochen Janosch Machowinski Added me as maintainer<br/>
         
           3d51221 vor 6 Wochen jmachowinski Merge pull request #2 from Brazilian-Institute-of-Robotics/misc_improvements<br/>
         
           8315540 vor 6 Wochen Sylvain Joyeux ruby: make StaticTransform#pretty_print more informative<br/>
         
           c17a000 vor 6 Wochen Sylvain Joyeux ruby: accept Isometry3 as a static transformation object<br/>
         
           59a5f59 vor 6 Wochen Sylvain Joyeux ruby: add declarations for example transformations<br/>
         
           768f39d vor 6 Wochen Sylvain Joyeux ruby: there's really no reason to restrict frame names<br/>
         
           5e8a804 vor 6 Wochen Sylvain Joyeux ruby: improve error messages<br/>
         
           05ebf73 vor 6 Wochen Sylvain Joyeux test: fix obviously long-unused test suite<br/>
         
           4c86b2d vor 7 Wochen Sylvain Joyeux add myself as author<br/>
         
           0a6f533 vor 3 Monaten Sylvain Joyeux Merge pull request #1 from rock-core/doc<br/>
         
           63317c1 vor 3 Monaten Sylvain Joyeux small documentation update<br/>
         
           5a7bd9c vor 5 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into orogen_loaders<br/>
         
           7096b28 vor 9 Monaten Janosch Machowinski syskit: fix transformer configuration inheritance across profiles<br/>
         
           3ed9d4e vor 9 Monaten Janosch Machowinski syskit: update w.r.t. split of validate_* flags in engine<br/>
         
           3ea0a60 vor 9 Monaten Janosch Machowinski syskit: better debug output<br/>
         
         </td></tr>
       
       





       <tr class="name" id="20">
         <th>drivers/orogen/transformer</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="21"> 7 commits</a> in ["f9a04bd vor 4 Wochen Janosch Machowinski replaced generated code by method call in transformer class.", "dee7e46 vor 4 Wochen Janosch Machowinski removed TransformerStatus.hpp as the class moved into the driver", "e8bfaaf vor 2 Monaten Sylvain Joyeux Merge pull request #2 from rock-core/tune_rock_runtime_setup_in_bundles", "8987571 vor 4 Monaten Sylvain Joyeux rock: when loading within bundles, still accept a direct path to a configuration file", "408c105 vor 4 Monaten Sylvain Joyeux rock: reset the configuration in .initialize", "04e6042 vor 4 Monaten Sylvain Joyeux Merge pull request #1 from rock-core/runtime_log_ports", "e59ee77 vor 5 Monaten Sylvain Joyeux runtime: add support for setting frames on log ports"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_21"><td>
         
           f9a04bd vor 4 Wochen Janosch Machowinski replaced generated code by method call in transformer class.<br/>
         
           dee7e46 vor 4 Wochen Janosch Machowinski removed TransformerStatus.hpp as the class moved into the driver<br/>
         
           e8bfaaf vor 2 Monaten Sylvain Joyeux Merge pull request #2 from rock-core/tune_rock_runtime_setup_in_bundles<br/>
         
           8987571 vor 4 Monaten Sylvain Joyeux rock: when loading within bundles, still accept a direct path to a configuration file<br/>
         
           408c105 vor 4 Monaten Sylvain Joyeux rock: reset the configuration in .initialize<br/>
         
           04e6042 vor 4 Monaten Sylvain Joyeux Merge pull request #1 from rock-core/runtime_log_ports<br/>
         
           e59ee77 vor 5 Monaten Sylvain Joyeux runtime: add support for setting frames on log ports<br/>
         
         </td></tr>
       
       





       <tr class="name" id="21">
         <th>image_processing/frame_helper</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="22"> 2 commits</a> in ["a13952c vor 2 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/stable' into rock1408", "c74fa6e vor 1 Jahr, und 8 Monaten Sylvain Joyeux fix linking to opencv on recent OpenCV versions"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_22"><td>
         
           a13952c vor 2 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/stable' into rock1408<br/>
         
           c74fa6e vor 1 Jahr, und 8 Monaten Sylvain Joyeux fix linking to opencv on recent OpenCV versions<br/>
         
         </td></tr>
       
       



       <tr class="name" id="22">
         <th>gui/rock_widget_collection</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="23"> 10 commits</a> in ["26c0b48 vor 5 Wochen Jakob Schwendner Merge pull request #5 from goldhoorn/gl_func_missing", "dab7e83 vor 5 Wochen Matthias Goldhoorn SonarViewGL: Added missing function for ZoomSetting", "67fad4b vor 9 Wochen Alexander Duda Merge pull request #4 from goldhoorn/master", "5c0b972 vor 3 Monaten Alexander Duda Merge pull request #2 from rock-core/plot2d_control_second_y_axis", "10f0d78 vor 3 Monaten Matthias Goldhoorn Fixed some c++11 faults", "11c8740 vor 4 Monaten Sylvain Joyeux plot2d: give access to zoom/range for the second Y axis as well", "1ab4967 vor 8 Monaten Sylvain Joyeux Merge pull request #1 from leifole/master", "f947b19 vor 8 Monaten Leif Christensen virtual_joystick script: explicit Float cast from maxspeed and maxrotspeed options", "773472d vor 8 Monaten Leif Christensen added maxspeed and maxrotspeed options", "569ac31 vor 8 Monaten Leif Christensen Small script to use virtual joystick plugin with option parsing."] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_23"><td>
         
           26c0b48 vor 5 Wochen Jakob Schwendner Merge pull request #5 from goldhoorn/gl_func_missing<br/>
         
           dab7e83 vor 5 Wochen Matthias Goldhoorn SonarViewGL: Added missing function for ZoomSetting<br/>
         
           67fad4b vor 9 Wochen Alexander Duda Merge pull request #4 from goldhoorn/master<br/>
         
           5c0b972 vor 3 Monaten Alexander Duda Merge pull request #2 from rock-core/plot2d_control_second_y_axis<br/>
         
           10f0d78 vor 3 Monaten Matthias Goldhoorn Fixed some c++11 faults<br/>
         
           11c8740 vor 4 Monaten Sylvain Joyeux plot2d: give access to zoom/range for the second Y axis as well<br/>
         
           1ab4967 vor 8 Monaten Sylvain Joyeux Merge pull request #1 from leifole/master<br/>
         
           f947b19 vor 8 Monaten Leif Christensen virtual_joystick script: explicit Float cast from maxspeed and maxrotspeed options<br/>
         
           773472d vor 8 Monaten Leif Christensen added maxspeed and maxrotspeed options<br/>
         
           569ac31 vor 8 Monaten Leif Christensen Small script to use virtual joystick plugin with option parsing.<br/>
         
         </td></tr>
       
       

























       <tr class="name" id="23">
         <th>gui/robot_model</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="24"> 31 commits</a> in ["e0246ef vor 4 Wochen Malte Wirkus Merge branch 'master' into rock-rc", "c56c383 vor 5 Wochen Malte Wirkus changed CMakeLists.txt according to #4 to test with build server", "465fde0 vor 6 Wochen maltewi Merge pull request #2 from shoppel/master", "fe1007c vor 6 Wochen maltewi Merge pull request #3 from shoppel/rock-rc", "25bf4bf vor 6 Wochen Stefan Haase Corrects include of QMessageBox.", "1e7fa87 vor 7 Wochen Malte Wirkus larger default joint size", "95ea289 vor 7 Wochen Malte Wirkus don't automatically display frames, when jointSize property was changed", "b74f9fe vor 7 Wochen Malte Wirkus added maintainer tag to manifest", "a9b659c vor 7 Wochen Malte Wirkus updated test program to test text display and transform calculation", "87ffbc2 vor 7 Wochen Malte Wirkus Allow to calculate and retrieve transforms between arbitrary segements.", "a6d72dc vor 8 Wochen Malte Wirkus allow to update joint state via slot", "7897bbf vor 8 Wochen Malte Wirkus typo", "40f0995 vor 8 Wochen Malte Wirkus outline text for better readability independent of background", "4c3cc09 vor 8 Wochen Malte Wirkus disable depth test for frames", "e375337 vor 8 Wochen Malte Wirkus if no frame size is given, choose default", "74e15bc vor 8 Wochen Malte Wirkus give text size in screen coordinates. Results in text being displayed always the same size (independent of camera location/zoom etc.)", "446daec vor 8 Wochen Malte Wirkus allow to enable frame display for single segments", "1643d76 vor 8 Wochen Malte Wirkus allow to de-highlight segments", "5ccac83 vor 8 Wochen Malte Wirkus allow to give custom textlabels", "e5f2a92 vor 8 Wochen Malte Wirkus Bugfix: Check if there is a visual before trying to highlight it", "91886f5 vor 8 Wochen Malte Wirkus ose osg::ref_ptr instead of pointers", "dedd7ba vor 8 Wochen Malte Wirkus Added SmoothingVisitor to visuals for correct shading", "f1c6106 vor 8 Wochen Malte Wirkus don't display frames by default", "f9aadb3 vor 8 Wochen Malte Wirkus display joint frames smaller by default", "59c9987 vor 8 Wochen Malte Wirkus allow to display segment names", "75fd398 vor 8 Wochen Malte Wirkus remove obsolete headers", "b3c0c95 vor 9 Wochen Malte Wirkus allow highlighting segments via qt slot", "56c2cf6 vor 9 Wochen Malte Wirkus in pkgconfig file: this package depends on urdfdom and kdl_parser, not robot_model", "c040a04 vor 2 Monaten Malte Wirkus If visualization frame is set, set root of robot visualization to the corresponding body part", "798038f vor 2 Monaten Malte Wirkus Added simple test program", "6c058df vor 3 Monaten Malte Wirkus also display textures of visuals"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_24"><td>
         
           e0246ef vor 4 Wochen Malte Wirkus Merge branch 'master' into rock-rc<br/>
         
           c56c383 vor 5 Wochen Malte Wirkus changed CMakeLists.txt according to #4 to test with build server<br/>
         
           465fde0 vor 6 Wochen maltewi Merge pull request #2 from shoppel/master<br/>
         
           fe1007c vor 6 Wochen maltewi Merge pull request #3 from shoppel/rock-rc<br/>
         
           25bf4bf vor 6 Wochen Stefan Haase Corrects include of QMessageBox.<br/>
         
           1e7fa87 vor 7 Wochen Malte Wirkus larger default joint size<br/>
         
           95ea289 vor 7 Wochen Malte Wirkus don't automatically display frames, when jointSize property was changed<br/>
         
           b74f9fe vor 7 Wochen Malte Wirkus added maintainer tag to manifest<br/>
         
           a9b659c vor 7 Wochen Malte Wirkus updated test program to test text display and transform calculation<br/>
         
           87ffbc2 vor 7 Wochen Malte Wirkus Allow to calculate and retrieve transforms between arbitrary segements.<br/>
         
           a6d72dc vor 8 Wochen Malte Wirkus allow to update joint state via slot<br/>
         
           7897bbf vor 8 Wochen Malte Wirkus typo<br/>
         
           40f0995 vor 8 Wochen Malte Wirkus outline text for better readability independent of background<br/>
         
           4c3cc09 vor 8 Wochen Malte Wirkus disable depth test for frames<br/>
         
           e375337 vor 8 Wochen Malte Wirkus if no frame size is given, choose default<br/>
         
           74e15bc vor 8 Wochen Malte Wirkus give text size in screen coordinates. Results in text being displayed always the same size (independent of camera location/zoom etc.)<br/>
         
           446daec vor 8 Wochen Malte Wirkus allow to enable frame display for single segments<br/>
         
           1643d76 vor 8 Wochen Malte Wirkus allow to de-highlight segments<br/>
         
           5ccac83 vor 8 Wochen Malte Wirkus allow to give custom textlabels<br/>
         
           e5f2a92 vor 8 Wochen Malte Wirkus Bugfix: Check if there is a visual before trying to highlight it<br/>
         
           91886f5 vor 8 Wochen Malte Wirkus ose osg::ref_ptr instead of pointers<br/>
         
           dedd7ba vor 8 Wochen Malte Wirkus Added SmoothingVisitor to visuals for correct shading<br/>
         
           f1c6106 vor 8 Wochen Malte Wirkus don't display frames by default<br/>
         
           f9aadb3 vor 8 Wochen Malte Wirkus display joint frames smaller by default<br/>
         
           59c9987 vor 8 Wochen Malte Wirkus allow to display segment names<br/>
         
           75fd398 vor 8 Wochen Malte Wirkus remove obsolete headers<br/>
         
           b3c0c95 vor 9 Wochen Malte Wirkus allow highlighting segments via qt slot<br/>
         
           56c2cf6 vor 9 Wochen Malte Wirkus in pkgconfig file: this package depends on urdfdom and kdl_parser, not robot_model<br/>
         
           c040a04 vor 2 Monaten Malte Wirkus If visualization frame is set, set root of robot visualization to the corresponding body part<br/>
         
           798038f vor 2 Monaten Malte Wirkus Added simple test program<br/>
         
           6c058df vor 3 Monaten Malte Wirkus also display textures of visuals<br/>
         
         </td></tr>
       
       



       <tr class="name" id="24">
         <th>gui/control_ui</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="25"> 18 commits</a> in ["9942cb5 vor 7 Wochen maltewi Merge pull request #3 from dmronga/removed_error_msg", "2410710 vor 7 Wochen dmronga Call on_unreachable on the ports instead of the tasks.", "5068bbe vor 7 Wochen dmronga Restored error msg and made sure that command port is reachable before sending. Like this, error msgs would not print 10 or 20 times when disconnecting the task, but at most once.", "6e71bdc vor 7 Wochen dmronga Moved state_port.on_data out of the on_reachable callback. If task gets disconnected and reconnected, the state update would be called multiple times otherwise.", "79aaf7d vor 7 Wochen dmronga Added missing disconnection from sendSignal: If task gets disconnected and reconnected again, commands would be sent multiple time otherwise.", "54c4191 vor 7 Wochen dmronga Removed spam error message", "27a9e13 vor 8 Wochen Malte Wirkus pre-initialize noise with 0", "b464ec2 vor 8 Wochen Malte Wirkus emit signal containing complete joint status", "c680059 vor 8 Wochen Malte Wirkus better resize behavior", "7775ed4 vor 8 Wochen Malte Wirkus improved layout of joint widgets. Number of columns can now be given by user.", "edd5f65 vor 8 Wochen Malte Wirkus added simple test program", "b064607 vor 9 Wochen maltewi Merge pull request #2 from rock-gui/delay_bugfix", "dec6baa vor 9 Wochen maltewi Merge pull request #1 from sempromuser/delay_bugfix", "cf912f3 vor 9 Wochen dmronga previous commit did not solve the problem. Putting a sleep before or after writing helps. Don't know what the root of the problem is, this is to be considered as a hotfix.", "b1d59fa vor 9 Wochen Malte Wirkus on some machines it comes to a large delay until values get updated if keep_sending is activated. this commit tries to deal with this prpblem by calling write with a copy of the joint data.", "3253f42 vor 2 Monaten Anna Born set max and min position range for continuous joint automaticaly", "4596b3b vor 6 Monaten dmronga Change connection behavior of GUI to Async!!!", "098c746 vor 6 Monaten dmronga Only set position, speed and effort if they are valid numbers"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_25"><td>
         
           9942cb5 vor 7 Wochen maltewi Merge pull request #3 from dmronga/removed_error_msg<br/>
         
           2410710 vor 7 Wochen dmronga Call on_unreachable on the ports instead of the tasks.<br/>
         
           5068bbe vor 7 Wochen dmronga Restored error msg and made sure that command port is reachable before sending. Like this, error msgs would not print 10 or 20 times when disconnecting the task, but at most once.<br/>
         
           6e71bdc vor 7 Wochen dmronga Moved state_port.on_data out of the on_reachable callback. If task gets disconnected and reconnected, the state update would be called multiple times otherwise.<br/>
         
           79aaf7d vor 7 Wochen dmronga Added missing disconnection from sendSignal: If task gets disconnected and reconnected again, commands would be sent multiple time otherwise.<br/>
         
           54c4191 vor 7 Wochen dmronga Removed spam error message<br/>
         
           27a9e13 vor 8 Wochen Malte Wirkus pre-initialize noise with 0<br/>
         
           b464ec2 vor 8 Wochen Malte Wirkus emit signal containing complete joint status<br/>
         
           c680059 vor 8 Wochen Malte Wirkus better resize behavior<br/>
         
           7775ed4 vor 8 Wochen Malte Wirkus improved layout of joint widgets. Number of columns can now be given by user.<br/>
         
           edd5f65 vor 8 Wochen Malte Wirkus added simple test program<br/>
         
           b064607 vor 9 Wochen maltewi Merge pull request #2 from rock-gui/delay_bugfix<br/>
         
           dec6baa vor 9 Wochen maltewi Merge pull request #1 from sempromuser/delay_bugfix<br/>
         
           cf912f3 vor 9 Wochen dmronga previous commit did not solve the problem. Putting a sleep before or after writing helps. Don't know what the root of the problem is, this is to be considered as a hotfix.<br/>
         
           b1d59fa vor 9 Wochen Malte Wirkus on some machines it comes to a large delay until values get updated if keep_sending is activated. this commit tries to deal with this prpblem by calling write with a copy of the joint data.<br/>
         
           3253f42 vor 2 Monaten Anna Born set max and min position range for continuous joint automaticaly<br/>
         
           4596b3b vor 6 Monaten dmronga Change connection behavior of GUI to Async!!!<br/>
         
           098c746 vor 6 Monaten dmronga Only set position, speed and effort if they are valid numbers<br/>
         
         </td></tr>
       
       









       <tr class="name" id="25">
         <th>data_processing/type_to_vector</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="26"> 1 commits</a> in ["3194171 vor 5 Monaten Sylvain Joyeux add missing dependency on utilmm"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_26"><td>
         
           3194171 vor 5 Monaten Sylvain Joyeux add missing dependency on utilmm<br/>
         
         </td></tr>
       
       









       <tr class="name" id="26">
         <th>drivers/actuator_dispatcher</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="27"> 1 commits</a> in ["b131739 vor 7 Wochen Matthias Goldhoorn added me as maintainer"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_27"><td>
         
           b131739 vor 7 Wochen Matthias Goldhoorn added me as maintainer<br/>
         
         </td></tr>
       
       









       <tr class="name" id="27">
         <th>control/motor_controller</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="28"> 1 commits</a> in ["6973588 vor 4 Monaten Jakob Schwendner moved RK4 integrator into namespace"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_28"><td>
         
           6973588 vor 4 Monaten Jakob Schwendner moved RK4 integrator into namespace<br/>
         
         </td></tr>
       
       



       <tr class="name" id="28">
         <th>control/trajectory_follower</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="29"> 4 commits</a> in ["3e98e6f vor 4 Monaten Jakob Schwendner updated some logging", "05b1706 vor 4 Monaten Jakob Schwendner add parameter checking", "2a1729a vor 4 Monaten Jakob Schwendner moved RK4 integrator into namespace", "44c3180 vor 4 Monaten Jakob Schwendner fixed uninitialized value warning"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_29"><td>
         
           3e98e6f vor 4 Monaten Jakob Schwendner updated some logging<br/>
         
           05b1706 vor 4 Monaten Jakob Schwendner add parameter checking<br/>
         
           2a1729a vor 4 Monaten Jakob Schwendner moved RK4 integrator into namespace<br/>
         
           44c3180 vor 4 Monaten Jakob Schwendner fixed uninitialized value warning<br/>
         
         </td></tr>
       
       





       <tr class="name" id="29">
         <th>drivers/iodrivers_base</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="30"> 11 commits</a> in ["fb524d0 vor 9 Wochen Sylvain Joyeux set myself as maintainer", "ddd4fd2 vor 8 Monaten Sylvain Joyeux Merge pull request #4 from jakobs/add_assert", "605c124 vor 8 Monaten Jakob Schwendner fixed spacing in error message", "eacc5f1 vor 8 Monaten Jakob Schwendner changed assert to exception", "0eea60e vor 9 Monaten Jakob Schwendner added assert to check that the return value from extract packet is valid", "a8e79de vor 9 Monaten Sylvain Joyeux Merge pull request #2 from rock-drivers/allow_copying_timeouts", "063e7a3 vor 9 Monaten Sylvain Joyeux Merge pull request #1 from rock-drivers/dont_throw_without_timeout", "abecca1 vor 9 Monaten Sylvain Joyeux allow copy of a Timeout object", "0a4b147 vor 1 Jahr, und 4 Monaten Martin Zenzes Driver: handle the \"timeout exception\" in the noData+noTimeout case", "8ddf353 vor 1 Jahr, und 4 Monaten Martin Zenzes Driver: add comment in readPacket(), nice texts in throws", "1a4ed50 vor 1 Jahr, und 4 Monaten Martin Zenzes Driver: whitespace and identiation fixes in readPacket()"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_30"><td>
         
           fb524d0 vor 9 Wochen Sylvain Joyeux set myself as maintainer<br/>
         
           ddd4fd2 vor 8 Monaten Sylvain Joyeux Merge pull request #4 from jakobs/add_assert<br/>
         
           605c124 vor 8 Monaten Jakob Schwendner fixed spacing in error message<br/>
         
           eacc5f1 vor 8 Monaten Jakob Schwendner changed assert to exception<br/>
         
           0eea60e vor 9 Monaten Jakob Schwendner added assert to check that the return value from extract packet is valid<br/>
         
           a8e79de vor 9 Monaten Sylvain Joyeux Merge pull request #2 from rock-drivers/allow_copying_timeouts<br/>
         
           063e7a3 vor 9 Monaten Sylvain Joyeux Merge pull request #1 from rock-drivers/dont_throw_without_timeout<br/>
         
           abecca1 vor 9 Monaten Sylvain Joyeux allow copy of a Timeout object<br/>
         
           0a4b147 vor 1 Jahr, und 4 Monaten Martin Zenzes Driver: handle the "timeout exception" in the noData+noTimeout case<br/>
         
           8ddf353 vor 1 Jahr, und 4 Monaten Martin Zenzes Driver: add comment in readPacket(), nice texts in throws<br/>
         
           1a4ed50 vor 1 Jahr, und 4 Monaten Martin Zenzes Driver: whitespace and identiation fixes in readPacket()<br/>
         
         </td></tr>
       
       



       <tr class="name" id="30">
         <th>drivers/velodyne_lidar</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="31"> 7 commits</a> in ["e688024 vor 4 Wochen Sascha Arnold Merge pull request #3 from saarnold/master", "56b0cde vor 5 Wochen Sascha Arnold added myself as maintainer", "972269e vor 5 Monaten Sascha Arnold fixed wrong color binding, accidentally changed by a previous commit", "df231a1 vor 7 Monaten Stefan Haase Replaces old with new base headers.", "2002bb3 vor 8 Monaten Steffen Planthaber added mission include for osg versions", "bfaffef vor 8 Monaten Steffen Planthaber fixed build on 12.04", "3ef41b0 vor 8 Monaten Sascha Arnold viz: fixed coloring bug triggerd by changes to the osg api"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_31"><td>
         
           e688024 vor 4 Wochen Sascha Arnold Merge pull request #3 from saarnold/master<br/>
         
           56b0cde vor 5 Wochen Sascha Arnold added myself as maintainer<br/>
         
           972269e vor 5 Monaten Sascha Arnold fixed wrong color binding, accidentally changed by a previous commit<br/>
         
           df231a1 vor 7 Monaten Stefan Haase Replaces old with new base headers.<br/>
         
           2002bb3 vor 8 Monaten Steffen Planthaber added mission include for osg versions<br/>
         
           bfaffef vor 8 Monaten Steffen Planthaber fixed build on 12.04<br/>
         
           3ef41b0 vor 8 Monaten Sascha Arnold viz: fixed coloring bug triggerd by changes to the osg api<br/>
         
         </td></tr>
       
       









       <tr class="name" id="31">
         <th>drivers/hokuyo</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="32"> 2 commits</a> in ["896c1d9 vor 6 Wochen Leif Christensen Merge pull request #1 from shoppel/rock-rc", "9e8b4b8 vor 6 Wochen Stefan Haase Adds the maintainer tag."] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_32"><td>
         
           896c1d9 vor 6 Wochen Leif Christensen Merge pull request #1 from shoppel/rock-rc<br/>
         
           9e8b4b8 vor 6 Wochen Stefan Haase Adds the maintainer tag.<br/>
         
         </td></tr>
       
       











       <tr class="name" id="32">
         <th>drivers/camera_interface</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="33"> 3 commits</a> in ["178a58c vor 2 Wochen Matthias Goldhoorn CV seems cause problem, fixed build that opencv does not get linked correctly", "c7ecf8f vor 3 Monaten Leif Christensen added GainModeToAutoOnce", "5bb9298 vor 6 Monaten Matthias Goldhoorn Make the BightnessIndicator work on const Mat's"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_33"><td>
         
           178a58c vor 2 Wochen Matthias Goldhoorn CV seems cause problem, fixed build that opencv does not get linked correctly<br/>
         
           c7ecf8f vor 3 Monaten Leif Christensen added GainModeToAutoOnce<br/>
         
           5bb9298 vor 6 Monaten Matthias Goldhoorn Make the BightnessIndicator work on const Mat's<br/>
         
         </td></tr>
       
       





       <tr class="name" id="33">
         <th>drivers/camera_usb</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="34"> 9 commits</a> in ["ad23fa9 vor 11 Tagen Matthias Goldhoorn Removed external C namespace, causes build-fauliure on 1504", "9849684 vor 2 Wochen Matthias Goldhoorn Fixed test during linking, opencv was missing for tests", "1a6189a vor 5 Wochen Stefan Haase Allows direct request of JPEGs now (instead of encoding raw images), corrects size calculation of UYVY (in Frame.hpp bytes/pixel for UYVY is set to 1, but should be 2?), using depth 16 as a trade-off.", "e37d33a vor 5 Wochen Stefan Haase Rearrange and corrects unit tests, changes createDefaultPipeline() method!", "7f16187 vor 5 Wochen Stefan Haase Merge branch 'rock-rc' of git://github.com/rock-drivers/drivers-camera_usb", "3c624af vor 6 Wochen Leif Christensen Merge pull request #2 from shoppel/rock-rc", "fabbf9e vor 6 Wochen Stefan Haase Adds the maintainer tag.", "1174435 vor 9 Wochen Thomas Roehr Use gstreamer's default encoder 'jpegenc' when JPEG format is requested.", "718246f vor 7 Monaten sbot Changes done in Noordwijk Mars Rover Test Drive, required?"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_34"><td>
         
           ad23fa9 vor 11 Tagen Matthias Goldhoorn Removed external C namespace, causes build-fauliure on 1504<br/>
         
           9849684 vor 2 Wochen Matthias Goldhoorn Fixed test during linking, opencv was missing for tests<br/>
         
           1a6189a vor 5 Wochen Stefan Haase Allows direct request of JPEGs now (instead of encoding raw images), corrects size calculation of UYVY (in Frame.hpp bytes/pixel for UYVY is set to 1, but should be 2?), using depth 16 as a trade-off.<br/>
         
           e37d33a vor 5 Wochen Stefan Haase Rearrange and corrects unit tests, changes createDefaultPipeline() method!<br/>
         
           7f16187 vor 5 Wochen Stefan Haase Merge branch 'rock-rc' of git://github.com/rock-drivers/drivers-camera_usb<br/>
         
           3c624af vor 6 Wochen Leif Christensen Merge pull request #2 from shoppel/rock-rc<br/>
         
           fabbf9e vor 6 Wochen Stefan Haase Adds the maintainer tag.<br/>
         
           1174435 vor 9 Wochen Thomas Roehr Use gstreamer's default encoder 'jpegenc' when JPEG format is requested.<br/>
         
           718246f vor 7 Monaten sbot Changes done in Noordwijk Mars Rover Test Drive, required?<br/>
         
         </td></tr>
       
       







       <tr class="name" id="34">
         <th>drivers/fog_kvh</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="35"> 1 commits</a> in ["112536e vor 7 Wochen Matthias Goldhoorn added me as maintainer"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_35"><td>
         
           112536e vor 7 Wochen Matthias Goldhoorn added me as maintainer<br/>
         
         </td></tr>
       
       



       <tr class="name" id="35">
         <th>drivers/iCharger</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="36"> 1 commits</a> in ["d1e8203 vor 7 Wochen Matthias Goldhoorn added me as maintainer"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_36"><td>
         
           d1e8203 vor 7 Wochen Matthias Goldhoorn added me as maintainer<br/>
         
         </td></tr>
       
       







       <tr class="name" id="36">
         <th>drivers/sonar_tritech</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="37"> 3 commits</a> in ["eeb94ee vor 8 Monaten auv Be more verbose on errors", "781c643 vor 8 Monaten Matthias Goldhoorn Added invert for sonar", "6be67a7 vor 9 Monaten Sylvain Joyeux fix maintainer and license"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_37"><td>
         
           eeb94ee vor 8 Monaten auv Be more verbose on errors<br/>
         
           781c643 vor 8 Monaten Matthias Goldhoorn Added invert for sonar<br/>
         
           6be67a7 vor 9 Monaten Sylvain Joyeux fix maintainer and license<br/>
         
         </td></tr>
       
       





       <tr class="name" id="37">
         <th>drivers/laser_filter</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="38"> 1 commits</a> in ["58b8bdc vor 4 Wochen Janosch Machowinski Added me as maintainer"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_38"><td>
         
           58b8bdc vor 4 Wochen Janosch Machowinski Added me as maintainer<br/>
         
         </td></tr>
       
       







       <tr class="name" id="38">
         <th>planning/nav_graph_search</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="39"> 3 commits</a> in ["5d9b109 vor 2 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/stable' into rock1408", "46231df vor 1 Jahr, und 8 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into next", "d32cd2d vor 1 Jahr, und 8 Monaten Sylvain Joyeux add missing dependencies on boost::system"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_39"><td>
         
           5d9b109 vor 2 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/stable' into rock1408<br/>
         
           46231df vor 1 Jahr, und 8 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into next<br/>
         
           d32cd2d vor 1 Jahr, und 8 Monaten Sylvain Joyeux add missing dependencies on boost::system<br/>
         
         </td></tr>
       
       





       <tr class="name" id="39">
         <th>planning/vfh_star</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="40"> 2 commits</a> in ["63093e0 vor 3 Wochen Janosch Machowinski cpp11 compile fix", "f3facd2 vor 4 Wochen Janosch Machowinski Added me as maintainer"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_40"><td>
         
           63093e0 vor 3 Wochen Janosch Machowinski cpp11 compile fix<br/>
         
           f3facd2 vor 4 Wochen Janosch Machowinski Added me as maintainer<br/>
         
         </td></tr>
       
       



       <tr class="name" id="40">
         <th>planning/corridor_navigation</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="41"> 3 commits</a> in ["0a051bd vor 3 Wochen Janosch Machowinski Removed VFHFollowing", "1c5f738 vor 4 Wochen Janosch Machowinski fixed segfault in case that no obstacle marking is turned on.", "1add90a vor 4 Wochen Janosch Machowinski Added me as maintainer"] but not in ["0345f04 vor 7 Monaten Janosch Machowinski fixed segfault in case that no obstacle marking is turned on."]</td>
         </tr>
         <tr class="from_commits" id="commits_41"><td>
         
           0a051bd vor 3 Wochen Janosch Machowinski Removed VFHFollowing<br/>
         
           1c5f738 vor 4 Wochen Janosch Machowinski fixed segfault in case that no obstacle marking is turned on.<br/>
         
           1add90a vor 4 Wochen Janosch Machowinski Added me as maintainer<br/>
         
         </td></tr>
       
       
         <tr class="to_commits_header">
           <td><a class="commit_event_toggler" id="42"> 1 commits</a> in ["0345f04 vor 7 Monaten Janosch Machowinski fixed segfault in case that no obstacle marking is turned on."] but not in ["0a051bd vor 3 Wochen Janosch Machowinski Removed VFHFollowing", "1c5f738 vor 4 Wochen Janosch Machowinski fixed segfault in case that no obstacle marking is turned on.", "1add90a vor 4 Wochen Janosch Machowinski Added me as maintainer"]</td>
         </tr>
         <tr class="to_commits" id="commits_42"><td>
         
           0345f04 vor 7 Monaten Janosch Machowinski fixed segfault in case that no obstacle marking is turned on.<br/>
         </td></tr>
       





       <tr class="name" id="42">
         <th>slam/envire</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="43"> 11 commits</a> in ["cecabcb vor 3 Monaten Janosch Machowinski TraversabilityGrid: fixed wrong parameter check", "1afe014 vor 3 Monaten Sascha Arnold Merge branch 'merge-requests/6'", "b18235c vor 4 Monaten Janosch Machowinski TraversabilityGrid: Added a bit of documentation", "916014c vor 4 Monaten Janosch Machowinski TraversabilityGrid : added a set of helper functions", "3dd9b8a vor 4 Monaten Sebastian Hellmann added MLStoPointcloud operator and unit tests", "77cb343 vor 6 Monaten Anna Born remove hard dependency on vizkit3d", "5d0dea4 vor 8 Monaten Janosch Machowinski Bugfix: MLSGrid::merge() Fixed inverted Z transformation", "15922ea vor 8 Monaten Janosch Machowinski Bugfix: Use z component in MLSGrid::merge", "5eb2181 vor 8 Monaten Janosch Machowinski fixed compile warning", "1b03e50 vor 8 Monaten Janosch Machowinski make MLSGrid->merge work if second map is not indexed", "c25c7e6 vor 9 Monaten Stefan Haase Fixes an error in TraversabilityClass and the driveablilty of unknown areas is set to the mean value of the overall driveability now (instead of 1.0)."] but not in ["7e52269 vor 8 Monaten sbot Bugfix: MLSGrid::merge() Fixed inverted Z transformation", "b3b9956 vor 8 Monaten sbot Bugfix: Use z component in MLSGrid::merge", "29b3576 vor 8 Monaten Janosch Machowinski fixed compile warning", "e953560 vor 8 Monaten Janosch Machowinski make MLSGrid->merge work if second map is not indexed"]</td>
         </tr>
         <tr class="from_commits" id="commits_43"><td>
         
           cecabcb vor 3 Monaten Janosch Machowinski TraversabilityGrid: fixed wrong parameter check<br/>
         
           1afe014 vor 3 Monaten Sascha Arnold Merge branch 'merge-requests/6'<br/>
         
           b18235c vor 4 Monaten Janosch Machowinski TraversabilityGrid: Added a bit of documentation<br/>
         
           916014c vor 4 Monaten Janosch Machowinski TraversabilityGrid : added a set of helper functions<br/>
         
           3dd9b8a vor 4 Monaten Sebastian Hellmann added MLStoPointcloud operator and unit tests<br/>
         
           77cb343 vor 6 Monaten Anna Born remove hard dependency on vizkit3d<br/>
         
           5d0dea4 vor 8 Monaten Janosch Machowinski Bugfix: MLSGrid::merge() Fixed inverted Z transformation<br/>
         
           15922ea vor 8 Monaten Janosch Machowinski Bugfix: Use z component in MLSGrid::merge<br/>
         
           5eb2181 vor 8 Monaten Janosch Machowinski fixed compile warning<br/>
         
           1b03e50 vor 8 Monaten Janosch Machowinski make MLSGrid-&gt;merge work if second map is not indexed<br/>
         
           c25c7e6 vor 9 Monaten Stefan Haase Fixes an error in TraversabilityClass and the driveablilty of unknown areas is set to the mean value of the overall driveability now (instead of 1.0).<br/>
         
         </td></tr>
       
       
         <tr class="to_commits_header">
           <td><a class="commit_event_toggler" id="44"> 4 commits</a> in ["7e52269 vor 8 Monaten sbot Bugfix: MLSGrid::merge() Fixed inverted Z transformation", "b3b9956 vor 8 Monaten sbot Bugfix: Use z component in MLSGrid::merge", "29b3576 vor 8 Monaten Janosch Machowinski fixed compile warning", "e953560 vor 8 Monaten Janosch Machowinski make MLSGrid->merge work if second map is not indexed"] but not in ["cecabcb vor 3 Monaten Janosch Machowinski TraversabilityGrid: fixed wrong parameter check", "1afe014 vor 3 Monaten Sascha Arnold Merge branch 'merge-requests/6'", "b18235c vor 4 Monaten Janosch Machowinski TraversabilityGrid: Added a bit of documentation", "916014c vor 4 Monaten Janosch Machowinski TraversabilityGrid : added a set of helper functions", "3dd9b8a vor 4 Monaten Sebastian Hellmann added MLStoPointcloud operator and unit tests", "77cb343 vor 6 Monaten Anna Born remove hard dependency on vizkit3d", "5d0dea4 vor 8 Monaten Janosch Machowinski Bugfix: MLSGrid::merge() Fixed inverted Z transformation", "15922ea vor 8 Monaten Janosch Machowinski Bugfix: Use z component in MLSGrid::merge", "5eb2181 vor 8 Monaten Janosch Machowinski fixed compile warning", "1b03e50 vor 8 Monaten Janosch Machowinski make MLSGrid->merge work if second map is not indexed", "c25c7e6 vor 9 Monaten Stefan Haase Fixes an error in TraversabilityClass and the driveablilty of unknown areas is set to the mean value of the overall driveability now (instead of 1.0)."]</td>
         </tr>
         <tr class="to_commits" id="commits_44"><td>
         
           7e52269 vor 8 Monaten sbot Bugfix: MLSGrid::merge() Fixed inverted Z transformation<br/>
         
           b3b9956 vor 8 Monaten sbot Bugfix: Use z component in MLSGrid::merge<br/>
         
           29b3576 vor 8 Monaten Janosch Machowinski fixed compile warning<br/>
         
           e953560 vor 8 Monaten Janosch Machowinski make MLSGrid-&gt;merge work if second map is not indexed<br/>
         </td></tr>
       













       <tr class="name" id="44">
         <th>slam/graph_slam</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="45"> 1 commits</a> in ["9a50700 vor 6 Wochen Sascha Arnold added myself as maintainer"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_45"><td>
         
           9a50700 vor 6 Wochen Sascha Arnold added myself as maintainer<br/>
         
         </td></tr>
       
       



























       <tr class="name" id="45">
         <th>drivers/orogen/aria</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="46"> 2 commits</a> in ["fa0f0b1 vor 7 Wochen Christian Rauch Take over maintainership", "b8840f3 vor 5 Monaten Sylvain Joyeux cmake: add missing dependency on the odometry library"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_46"><td>
         
           fa0f0b1 vor 7 Wochen Christian Rauch Take over maintainership<br/>
         
           b8840f3 vor 5 Monaten Sylvain Joyeux cmake: add missing dependency on the odometry library<br/>
         
         </td></tr>
       
       



       <tr class="name" id="46">
         <th>control/orogen/trajectory_follower</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="47"> 2 commits</a> in ["b7d5afa vor 4 Monaten Jakob Schwendner added some parameter checking", "1c3e9bc vor 4 Monaten Jakob Schwendner added debug information and comments"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_47"><td>
         
           b7d5afa vor 4 Monaten Jakob Schwendner added some parameter checking<br/>
         
           1c3e9bc vor 4 Monaten Jakob Schwendner added debug information and comments<br/>
         
         </td></tr>
       
       





       <tr class="name" id="47">
         <th>control/orogen/skid4_control</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="48"> 1 commits</a> in ["3755a42 vor 9 Monaten Matthias Goldhoorn Removed depricated FourWheelController"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_48"><td>
         
           3755a42 vor 9 Monaten Matthias Goldhoorn Removed depricated FourWheelController<br/>
         
         </td></tr>
       
       







       <tr class="name" id="48">
         <th>drivers/orogen/hokuyo</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="49"> 2 commits</a> in ["c5f0c0b vor 6 Wochen Leif Christensen Merge pull request #1 from shoppel/rock-rc", "6d874ea vor 6 Wochen Stefan Haase Adds the maintainer tag."] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_49"><td>
         
           c5f0c0b vor 6 Wochen Leif Christensen Merge pull request #1 from shoppel/rock-rc<br/>
         
           6d874ea vor 6 Wochen Stefan Haase Adds the maintainer tag.<br/>
         
         </td></tr>
       
       







       <tr class="name" id="49">
         <th>drivers/orogen/controldev</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="50"> 8 commits</a> in ["f7d961b vor 6 Monaten Leif Christensen change turning direction depending on forward/backward driving", "b17b1b1 vor 6 Monaten Leif Christensen some docs/coments on properties for GenericRawToMotion2D", "cff3051 vor 6 Monaten Leif Christensen Added a generic RawCommand to Motion2D task. As a sidenote: I don't like the current setup with 2dim arrays / vectors", "d63ab82 vor 9 Monaten Matthias Goldhoorn Cleanup of FourWheel command, feel free to readd is as base type if needed", "cb77704 vor 9 Monaten Matthias Goldhoorn Merge branch 'master' into cleanup", "c1abd46 vor 10 Monaten Matthias Goldhoorn Cleanup of Tasks.", "a8c72ea vor 1 Jahr, und 2 Monaten Matthias Goldhoorn Forgot to change the name for canport", "acd9c32 vor 1 Jahr, und 2 Monaten Matthias Goldhoorn Cleanup on the task, removed depricated ports from remote"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_50"><td>
         
           f7d961b vor 6 Monaten Leif Christensen change turning direction depending on forward/backward driving<br/>
         
           b17b1b1 vor 6 Monaten Leif Christensen some docs/coments on properties for GenericRawToMotion2D<br/>
         
           cff3051 vor 6 Monaten Leif Christensen Added a generic RawCommand to Motion2D task. As a sidenote: I don't like the current setup with 2dim arrays / vectors<br/>
         
           d63ab82 vor 9 Monaten Matthias Goldhoorn Cleanup of FourWheel command, feel free to readd is as base type if needed<br/>
         
           cb77704 vor 9 Monaten Matthias Goldhoorn Merge branch 'master' into cleanup<br/>
         
           c1abd46 vor 10 Monaten Matthias Goldhoorn Cleanup of Tasks.<br/>
         
           a8c72ea vor 1 Jahr, und 2 Monaten Matthias Goldhoorn Forgot to change the name for canport<br/>
         
           acd9c32 vor 1 Jahr, und 2 Monaten Matthias Goldhoorn Cleanup on the task, removed depricated ports from remote<br/>
         
         </td></tr>
       
       











       <tr class="name" id="50">
         <th>drivers/orogen/fog_kvh</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="51"> 2 commits</a> in ["729fdb1 vor 7 Wochen Matthias Goldhoorn added me as maintainer", "1c8197a vor 8 Monaten cuslam fixed testscript"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_51"><td>
         
           729fdb1 vor 7 Wochen Matthias Goldhoorn added me as maintainer<br/>
         
           1c8197a vor 8 Monaten cuslam fixed testscript<br/>
         
         </td></tr>
       
       





       <tr class="name" id="51">
         <th>drivers/orogen/camera_usb</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="52"> 5 commits</a> in ["50ccc62 vor 5 Wochen Stefan Haase Merge branch 'master' of git://github.com/rock-drivers/drivers-orogen-camera_usb into rock-rc", "f1a2d3c vor 5 Wochen Stefan Haase Fixes following error: Depending in the available image modes, the received image format could differ from the requested one (e.g. 1280x720 instead of 1280x768). In this case each output image had been scaled. In addition compressed images cannot be scaled at the moment, so this error also prevented conversions like RGB -> JPEG. This error has been solved by set camera_frame and output_frame to the real size at the end of configureCamera().", "95db555 vor 6 Wochen Leif Christensen Merge pull request #1 from shoppel/rock-rc", "fb17513 vor 6 Wochen Stefan Haase Adds the maintainer tag.", "8f7dbcb vor 6 Wochen Stefan Haase Adds maintainer tag."] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_52"><td>
         
           50ccc62 vor 5 Wochen Stefan Haase Merge branch 'master' of git://github.com/rock-drivers/drivers-orogen-camera_usb into rock-rc<br/>
         
           f1a2d3c vor 5 Wochen Stefan Haase Fixes following error: Depending in the available image modes, the received image format could differ from the requested one (e.g. 1280x720 instead of 1280x768). In this case each output image had been scaled. In addition compressed images cannot be scaled at the moment, so this error also prevented conversions like RGB -&gt; JPEG. This error has been solved by set camera_frame and output_frame to the real size at the end of configureCamera().<br/>
         
           95db555 vor 6 Wochen Leif Christensen Merge pull request #1 from shoppel/rock-rc<br/>
         
           fb17513 vor 6 Wochen Stefan Haase Adds the maintainer tag.<br/>
         
           8f7dbcb vor 6 Wochen Stefan Haase Adds maintainer tag.<br/>
         
         </td></tr>
       
       



       <tr class="name" id="52">
         <th>drivers/orogen/iodrivers_base</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="53"> 18 commits</a> in ["cdb8a75 vor 9 Wochen Sylvain Joyeux set mysefl as maintainer", "dd07585 vor 3 Monaten Sylvain Joyeux Merge pull request #7 from rock-drivers/create_proxy_task", "81f8320 vor 4 Monaten Sylvain Joyeux create the Proxy task", "a9ebeca vor 4 Monaten Sylvain Joyeux Merge pull request #6 from rock-drivers/major_bugfixes", "7ac522c vor 4 Monaten Sylvain Joyeux fix crash in exceptionHook if the driver's stopHook deleted the driver", "7378e3a vor 4 Monaten Sylvain Joyeux fix port I/O when no data is available on the port", "6fbc808 vor 4 Monaten Sylvain Joyeux fix possible crash in cleanupHook", "eff0cf9 vor 4 Monaten Sylvain Joyeux update iodrivers_base::Task to new-style documentation", "8538796 vor 5 Monaten Sylvain Joyeux fix half-baked pull request", "c25a4fa vor 5 Monaten Sylvain Joyeux Merge pull request #5 from rock-drivers/do_buffer_on_input_port_streams", "6fcc8dc vor 6 Monaten Sylvain Joyeux properly handle RawPacket samples that are bigger than the driver's internal buffer", "d8eb0e9 vor 8 Monaten Sylvain Joyeux Merge pull request #4 from rock-drivers/tune_busy_wait_loop_behaviour", "8ff76fe vor 8 Monaten Sylvain Joyeux never wait more than 10ms between two reads in the port-based com method", "015376f vor 8 Monaten Sylvain Joyeux Moved initialization code into configure hook #3", "51544e0 vor 8 Monaten Jakob Schwendner Reintroduced check to avoid open fd and raw port at the same time", "c745ed9 vor 8 Monaten Sylvain Joyeux Merge pull request #1 from rock-drivers/update_status_port_on_error", "7a1327d vor 8 Monaten Jakob Schwendner Moved initialization code into configure hook", "bbe83ac vor 9 Monaten Sylvain Joyeux update the status port on stop and exception"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_53"><td>
         
           cdb8a75 vor 9 Wochen Sylvain Joyeux set mysefl as maintainer<br/>
         
           dd07585 vor 3 Monaten Sylvain Joyeux Merge pull request #7 from rock-drivers/create_proxy_task<br/>
         
           81f8320 vor 4 Monaten Sylvain Joyeux create the Proxy task<br/>
         
           a9ebeca vor 4 Monaten Sylvain Joyeux Merge pull request #6 from rock-drivers/major_bugfixes<br/>
         
           7ac522c vor 4 Monaten Sylvain Joyeux fix crash in exceptionHook if the driver's stopHook deleted the driver<br/>
         
           7378e3a vor 4 Monaten Sylvain Joyeux fix port I/O when no data is available on the port<br/>
         
           6fbc808 vor 4 Monaten Sylvain Joyeux fix possible crash in cleanupHook<br/>
         
           eff0cf9 vor 4 Monaten Sylvain Joyeux update iodrivers_base::Task to new-style documentation<br/>
         
           8538796 vor 5 Monaten Sylvain Joyeux fix half-baked pull request<br/>
         
           c25a4fa vor 5 Monaten Sylvain Joyeux Merge pull request #5 from rock-drivers/do_buffer_on_input_port_streams<br/>
         
           6fcc8dc vor 6 Monaten Sylvain Joyeux properly handle RawPacket samples that are bigger than the driver's internal buffer<br/>
         
           d8eb0e9 vor 8 Monaten Sylvain Joyeux Merge pull request #4 from rock-drivers/tune_busy_wait_loop_behaviour<br/>
         
           8ff76fe vor 8 Monaten Sylvain Joyeux never wait more than 10ms between two reads in the port-based com method<br/>
         
           015376f vor 8 Monaten Sylvain Joyeux Moved initialization code into configure hook #3<br/>
         
           51544e0 vor 8 Monaten Jakob Schwendner Reintroduced check to avoid open fd and raw port at the same time<br/>
         
           c745ed9 vor 8 Monaten Sylvain Joyeux Merge pull request #1 from rock-drivers/update_status_port_on_error<br/>
         
           7a1327d vor 8 Monaten Jakob Schwendner Moved initialization code into configure hook<br/>
         
           bbe83ac vor 9 Monaten Sylvain Joyeux update the status port on stop and exception<br/>
         
         </td></tr>
       
       







       <tr class="name" id="53">
         <th>drivers/orogen/camera_v4l</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="54"> 2 commits</a> in ["20a0f9e vor 7 Wochen Matthias Goldhoorn added me as maintainer", "bba8280 vor 6 Monaten Rafael Saback Updating the library for the OpenCV C++ API"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_54"><td>
         
           20a0f9e vor 7 Wochen Matthias Goldhoorn added me as maintainer<br/>
         
           bba8280 vor 6 Monaten Rafael Saback Updating the library for the OpenCV C++ API<br/>
         
         </td></tr>
       
       



       <tr class="name" id="54">
         <th>drivers/orogen/sonar_tritech</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="55"> 1 commits</a> in ["0ea3884 vor 7 Monaten Your Name Retry to start the micron several times."] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_55"><td>
         
           0ea3884 vor 7 Monaten Your Name Retry to start the micron several times.<br/>
         
         </td></tr>
       
       







       <tr class="name" id="55">
         <th>drivers/orogen/laser_filter</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="56"> 1 commits</a> in ["09d1542 vor 4 Wochen Janosch Machowinski Added me as maintainer"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_56"><td>
         
           09d1542 vor 4 Wochen Janosch Machowinski Added me as maintainer<br/>
         
         </td></tr>
       
       









       <tr class="name" id="56">
         <th>slam/orogen/graph_slam</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="57"> 1 commits</a> in ["1a61007 vor 6 Wochen Sascha Arnold added myself as maintainer"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_57"><td>
         
           1a61007 vor 6 Wochen Sascha Arnold added myself as maintainer<br/>
         
         </td></tr>
       
       



       <tr class="name" id="57">
         <th>slam/orogen/odometry</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="58"> 2 commits</a> in ["c0a2cb3 vor 6 Monaten Anna Born fix: if no starting pose was set explicitly, use default init for starting pose", "0e391af vor 6 Monaten Alexander added possibility to set a starting pose"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_58"><td>
         
           c0a2cb3 vor 6 Monaten Anna Born fix: if no starting pose was set explicitly, use default init for starting pose<br/>
         
           0e391af vor 6 Monaten Alexander added possibility to set a starting pose<br/>
         
         </td></tr>
       
       









       <tr class="name" id="58">
         <th>planning/orogen/corridor_navigation</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="59"> 5 commits</a> in ["18584f5 vor 3 Wochen Janosch Machowinski Removed FollowingTask", "da417ca vor 4 Wochen Janosch Machowinski Set state to TRANSFORMATION_MISSING if a transformation is missing", "ab275dd vor 4 Wochen Janosch Machowinski Added me as maintainer", "bfff282 vor 8 Monaten sbot added option to set a tolerance on the goal position", "01f7b48 vor 8 Monaten Anna Born fix the headers"] but not in ["dc245e6 vor 7 Monaten Janosch Machowinski Set state to TRANSFORMATION_MISSING if a transformation is missing", "d65a1d9 vor 7 Monaten The Scout Rover Changes made over last week of integration at ASU"]</td>
         </tr>
         <tr class="from_commits" id="commits_59"><td>
         
           18584f5 vor 3 Wochen Janosch Machowinski Removed FollowingTask<br/>
         
           da417ca vor 4 Wochen Janosch Machowinski Set state to TRANSFORMATION_MISSING if a transformation is missing<br/>
         
           ab275dd vor 4 Wochen Janosch Machowinski Added me as maintainer<br/>
         
           bfff282 vor 8 Monaten sbot added option to set a tolerance on the goal position<br/>
         
           01f7b48 vor 8 Monaten Anna Born fix the headers<br/>
         
         </td></tr>
       
       
         <tr class="to_commits_header">
           <td><a class="commit_event_toggler" id="60"> 2 commits</a> in ["dc245e6 vor 7 Monaten Janosch Machowinski Set state to TRANSFORMATION_MISSING if a transformation is missing", "d65a1d9 vor 7 Monaten The Scout Rover Changes made over last week of integration at ASU"] but not in ["18584f5 vor 3 Wochen Janosch Machowinski Removed FollowingTask", "da417ca vor 4 Wochen Janosch Machowinski Set state to TRANSFORMATION_MISSING if a transformation is missing", "ab275dd vor 4 Wochen Janosch Machowinski Added me as maintainer", "bfff282 vor 8 Monaten sbot added option to set a tolerance on the goal position", "01f7b48 vor 8 Monaten Anna Born fix the headers"]</td>
         </tr>
         <tr class="to_commits" id="commits_60"><td>
         
           dc245e6 vor 7 Monaten Janosch Machowinski Set state to TRANSFORMATION_MISSING if a transformation is missing<br/>
         
           d65a1d9 vor 7 Monaten The Scout Rover Changes made over last week of integration at ASU<br/>
         </td></tr>
       



       <tr class="name" id="60">
         <th>planning/orogen/corridor_planner</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="61"> 4 commits</a> in ["1b04ceb vor 2 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/stable' into rock1408", "cfac805 vor 1 Jahr, und 8 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into next", "fec68e4 vor 1 Jahr, und 9 Monaten Sylvain Joyeux add missing include", "8cbff77 vor 1 Jahr, und 9 Monaten Sylvain Joyeux add missing include"] but not in []</td>
         </tr>
         <tr class="from_commits" id="commits_61"><td>
         
           1b04ceb vor 2 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/stable' into rock1408<br/>
         
           cfac805 vor 1 Jahr, und 8 Monaten Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into next<br/>
         
           fec68e4 vor 1 Jahr, und 9 Monaten Sylvain Joyeux add missing include<br/>
         
           8cbff77 vor 1 Jahr, und 9 Monaten Sylvain Joyeux add missing include<br/>
         
         </td></tr>
       
       




























</table>
