---
section: Changelog
title: 2014-01
sort_info: 991
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

<h1>Release Highlights</h1>
<ul>
    <li>this is the first Rock release to <b>NOT</b> support Ruby 1.8</li>
    <li>oroGen now supports inheritance</li>
    <li>new base type: base::samples::Joints and, in general, base::JointState.
        This is going to be the base for all joint-oriented control, such as
        manipulators, in Rock. It makes this stable release compatible with
        using the URDF-based tooling directly from next</li>
</ul>


<h1>New packages</h1>
<ul>
    <li>base/cmake</li>
    <li>bundles/tutorials</li>
    <li>bundles/tutorials_scripts</li>
    <li>control/orogen/auv_control</li>
    <li>control/orogen/auv_rel_pos_controller</li>
    <li>tests/orogen/iodrivers_base</li>
    <li>tests/orogen/transformer</li>
    <li>tools/pocolog_cpp</li>
</ul>

<h1>Obsoleted packages</h1>
<ul>
    <li>base/types_ruby</li>
    <li>tools/port_proxy</li>
</ul>

<h1>Package updates</h1>
<p>1105 new commits in 54 packages<br/>
  <a href="#base/doc">base/doc</a>

  <a href="#base/orogen/types">base/orogen/types</a>

  <a href="#base/templates/cmake_lib">base/templates/cmake_lib</a>

  <a href="#base/templates/ruby_lib">base/templates/ruby_lib</a>

  <a href="#base/types">base/types</a>

  <a href="#bundles/rock">bundles/rock</a>

  <a href="#bundles/rock_ugv_nav">bundles/rock_ugv_nav</a>

  <a href="#control/motor_controller">control/motor_controller</a>

  <a href="#control/orogen/kdl">control/orogen/kdl</a>

  <a href="#control/orogen/trajectory_follower">control/orogen/trajectory_follower</a>

  <a href="#control/trajectory_follower">control/trajectory_follower</a>

  <a href="#drivers/actuator_dispatcher">drivers/actuator_dispatcher</a>

  <a href="#drivers/aggregator">drivers/aggregator</a>

  <a href="#drivers/camera_interface">drivers/camera_interface</a>

  <a href="#drivers/camera_prosilica">drivers/camera_prosilica</a>

  <a href="#drivers/camera_usb">drivers/camera_usb</a>

  <a href="#drivers/dynamixel">drivers/dynamixel</a>

  <a href="#drivers/iodrivers_base">drivers/iodrivers_base</a>

  <a href="#drivers/orogen/aria">drivers/orogen/aria</a>

  <a href="#drivers/orogen/controldev">drivers/orogen/controldev</a>

  <a href="#drivers/orogen/ptu_directedperception">drivers/orogen/ptu_directedperception</a>

  <a href="#drivers/orogen/sonar_tritech">drivers/orogen/sonar_tritech</a>

  <a href="#drivers/orogen/transformer">drivers/orogen/transformer</a>

  <a href="#drivers/ptu_directedperception">drivers/ptu_directedperception</a>

  <a href="#drivers/sonar_tritech">drivers/sonar_tritech</a>

  <a href="#drivers/transformer">drivers/transformer</a>

  <a href="#gui/vizkit">gui/vizkit</a>

  <a href="#image_processing/jpeg_conversion">image_processing/jpeg_conversion</a>

  <a href="#multiagent/fipa_acl">multiagent/fipa_acl</a>

  <a href="#orogen">orogen</a>

  <a href="#planning/nav_graph_search">planning/nav_graph_search</a>

  <a href="#planning/orogen/corridor_navigation">planning/orogen/corridor_navigation</a>

  <a href="#planning/orogen/corridor_planner">planning/orogen/corridor_planner</a>

  <a href="#planning/vfh_star">planning/vfh_star</a>

  <a href="#rtt">rtt</a>

  <a href="#rtt_typelib">rtt_typelib</a>

  <a href="#slam/envire">slam/envire</a>

  <a href="#slam/graph_slam">slam/graph_slam</a>

  <a href="#slam/odometry">slam/odometry</a>

  <a href="#slam/orogen/envire">slam/orogen/envire</a>

  <a href="#slam/orogen/odometry">slam/orogen/odometry</a>

  <a href="#slam/quater_ikf">slam/quater_ikf</a>

  <a href="#tools/metaruby">tools/metaruby</a>

  <a href="#tools/orocos.rb">tools/orocos.rb</a>

  <a href="#tools/pocolog">tools/pocolog</a>

  <a href="#tools/roby">tools/roby</a>

  <a href="#tools/service_discovery">tools/service_discovery</a>

  <a href="#tools/syskit">tools/syskit</a>

  <a href="#tutorials/designer_widget_tutorial">tutorials/designer_widget_tutorial</a>

  <a href="#tutorials/message_driver">tutorials/message_driver</a>

  <a href="#tutorials/rock_tutorial">tutorials/rock_tutorial</a>

  <a href="#tutorials/vizkit3d_plugin_tutorial">tutorials/vizkit3d_plugin_tutorial</a>

  <a href="#typelib">typelib</a>

  <a href="#utilrb">utilrb</a>
</p>


<p>0 commits in 0 packages are in stable and not yet merged back to next <br/>
Affected packages: </p>


<p>14 packages failed to fetch status: 
  <a href="#drivers/aria">drivers/aria</a>

  <a href="#eigen3">eigen3</a>

  <a href="#external/cminpack">external/cminpack</a>

  <a href="#external/gdal">external/gdal</a>

  <a href="#external/opencv">external/opencv</a>

  <a href="#external/sisl">external/sisl</a>

  <a href="#external/tinyxml">external/tinyxml</a>

  <a href="#external/yaml-cpp">external/yaml-cpp</a>

  <a href="#log4cpp">log4cpp</a>

  <a href="#ocl">ocl</a>

  <a href="#slam/flann">slam/flann</a>

  <a href="#slam/g2o">slam/g2o</a>

  <a href="#slam/hogman">slam/hogman</a>

  <a href="#slam/pcl">slam/pcl</a>
</p>

<table class="package_status">




       <tr class="name" id="base/doc">
         <th>base/doc</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="1"> 4 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_1"><td>
         
           c3d8b9a 5 days ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/stable' into next<br/>
         
           8ad903b 9 weeks ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/stable' into next<br/>
         
           a1849b8 3 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/stable' into next<br/>
         
           ec126b3 4 months ago Thomas Roehr installation: fix link to bootstrap.sh<br/>
         
         </td></tr>
       
       







       <tr class="name" id="base/orogen/types">
         <th>base/orogen/types</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="2"> 6 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_2"><td>
         
           3054e6c 5 months ago Sylvain Joyeux base/types_ruby does not exist anymore, got merged into base/types<br/>
         
           d28f210 5 months ago Thomas Roehr Add ROS mappings for joint state and pose<br/>
         
           1e1dc10 5 months ago Thomas Roehr Reuse existing define OROCOS_TARGET instead of relying on environment setting<br/>
         
           470c32c 6 months ago Sylvain Joyeux import the new JointLimits type<br/>
         
           513f0fc 8 months ago Sylvain Joyeux integrate the new joints types<br/>
         
           024f4dc 8 months ago Sylvain Joyeux migrate to the (finally !) updated header naming scheme in base/types<br/>
         
         </td></tr>
       
       







       <tr class="name" id="base/templates/cmake_lib">
         <th>base/templates/cmake_lib</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="3"> 5 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_3"><td>
         
           164c76b 10 days ago Sylvain Joyeux tests cannot be called 'test'<br/>
         
           b59c26a 5 months ago Thomas Roehr Add base/cmake as default dependency to manifest.xml s<br/>
         
           7b46b73 5 months ago Sylvain Joyeux since we link to the boost shared library, we don't have to use the 'included' method<br/>
         
           7f76d83 6 months ago Javier Hidalgo Carrio use the PKGCONFIG macros massaged by the Rock macros<br/>
         
           f473204 7 months ago Jakob Schwendner fixed typo<br/>
         
         </td></tr>
       
       







       <tr class="name" id="base/templates/ruby_lib">
         <th>base/templates/ruby_lib</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="4"> 7 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_4"><td>
         
           bbe3264 7 months ago Thomas Roehr Fix default setup for extension generation<br/>
         
           5b7165e 7 months ago Thomas Roehr Revert base Rakefile changes<br/>
         
           9d921cf 7 months ago Thomas Roehr Rely on defaults for Rakefile<br/>
         
           50f96f2 7 months ago Thomas Roehr Make extension generation optional<br/>
         
           ee36266 7 months ago Thomas Roehr Add default files for extension<br/>
         
           b5cbdf3 7 months ago Thomas Roehr Use default naming for extension libraries<br/>
         
           345e5e8 7 months ago Thomas Roehr Support yard documentation and c-extension in ruby-template<br/>
         
         </td></tr>
       
       





       <tr class="name" id="base/types">
         <th>base/types</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="5"> 178 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_5"><td>
         
           d41fcd0 24 minutes ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/stable' into next<br/>
         
           8c5d30b 3 months ago Sylvain Joyeux define the COORDINATE_TYPE enum in the Geometry namespace<br/>
         
           9ae6e55 4 months ago Sylvain Joyeux Merge commit '38762263e0be0dc3845e370533d6e4ac60183e2f' into next<br/>
         
           f3b48df 5 months ago Sylvain Joyeux fix getCurveLength<br/>
         
           3876226 5 months ago Sylvain Joyeux fix getCurveLength<br/>
         
           6e9bf65 5 months ago Stefan Haase Merge branch 'master' of git://gitorious.org/rock-base/types<br/>
         
           2a5ad55 5 months ago Stefan Haase Fixes a wrong assertion (dimension has not been regarded).<br/>
         
           e182f6c 5 months ago Sylvain Joyeux moved odometry leftover code to slam/odometry, where it belongs<br/>
         
           dd6f32c 5 months ago Sylvain Joyeux add missing header<br/>
         
           b25c01a 5 months ago Sylvain Joyeux fix the double/float mixup in JointState and samples/Joints<br/>
         
           e2a630d 5 months ago Jakob Schwendner compile fix for 1f2f1de38429646c0b1bfee92713bce9b5a2d8e4<br/>
         
           1f2f1de 5 months ago Jakob Schwendner fixed error in PoseUpdateThreshold<br/>
         
           f185fb2 5 months ago Sylvain Joyeux make the rice dependency optional<br/>
         
           db72c33 5 months ago Thomas Roehr Add rice dependency for ruby-bindings<br/>
         
           bef3cb5 6 months ago Thomas Roehr Move CMake find scripts and macros to its own package: base/cmake<br/>
         
           46ef029 6 months ago Thomas Roehr ruby: install typelib plugin<br/>
         
           20a8d03 6 months ago Thomas Roehr Add bindings test target: test_bindings_ruby<br/>
         
           93808b8 6 months ago Thomas Roehr Update ruby bindings<br/>
         
           6280951 6 months ago Thomas Roehr Merge branch 'master' of /opt/workspace/rock/base/types_ruby<br/>
         
           d0406ec 6 months ago Thomas Roehr Merge types_ruby as subdirectory<br/>
         
           f035904 6 months ago Thomas Roehr Adapt to standard ruby layout<br/>
         
           e1051b7 6 months ago Leif Christensen added some helper functions for base/samples/Joints<br/>
         
           3e1d5c2 6 months ago Leif Christensen changed all JointState members to double, fixed static Joints methods<br/>
         
           f3cf34b 6 months ago Javier Hidalgo Carrio cmake: fix generation of pkg-config file<br/>
         
           ff9491d 6 months ago Javier Hidalgo Carrio cmake: fix handling of public dependencies<br/>
         
           9ffe569 6 months ago Stefan Haase Revert "Normalizes the point in getScenePoint()."<br/>
         
           4c3258f 6 months ago Stefan Haase Normalizes the point in getScenePoint().<br/>
         
           c7aed01 6 months ago Sylvain Joyeux add empty() to NamedVector<br/>
         
           f30f148 6 months ago Sylvain Joyeux HANDLE_COMPONENTS is not avaiable on the cmake version shipped with 12.04<br/>
         
           b83e424 6 months ago Sylvain Joyeux add helper functions to create Joints sets<br/>
         
           74f9a4c 6 months ago Sylvain Joyeux make JointLimits::validate() handle both the named and unnamed cases<br/>
         
           03ab952 6 months ago Sylvain Joyeux add missing header in JointLimits<br/>
         
           fd02a8d 6 months ago Sylvain Joyeux provide JointLimitRange::isValid to check limits without throwing<br/>
         
           7222347 6 months ago Sylvain Joyeux add the new joint limit headers to test.cpp to catch compilation errors<br/>
         
           986bea2 6 months ago Sylvain Joyeux JointState does not have a velocity field, but a speed field<br/>
         
           dfdef06 6 months ago Sylvain Joyeux assert() is a macro, don't use it as a method name<br/>
         
           2634dc4 6 months ago Sylvain Joyeux fix wrong number of arguments in errorString<br/>
         
           541febc 6 months ago Sylvain Joyeux fix missing return value<br/>
         
           3d04545 6 months ago Sylvain Joyeux fix wrong header included in JointLimits<br/>
         
           017865c 6 months ago Sylvain Joyeux add helper static methods to JointLimitRange to ease creation of single-dimension ranges<br/>
         
           b89452a 6 months ago Jakob Schwendner added JointLimits type<br/>
         
           fa7299d 6 months ago Sylvain Joyeux improve error handling in FindGem<br/>
         
           b1cd4d4 6 months ago Sylvain Joyeux update to the new NamedVector&lt;T&gt; base class for base::samples::Joints<br/>
         
           4f4d9ed 6 months ago Sylvain Joyeux define the hasNames() predicate on NamedVector<br/>
         
           46de8cc 6 months ago Sylvain Joyeux cmake: add -Wno-unused-local-typedefs by default if supported<br/>
         
           9c7f1d8 6 months ago Sylvain Joyeux cmake: auto-add bindings/ruby in rock_standard_layout<br/>
         
           62329a0 6 months ago Sylvain Joyeux FindGem: do detect gems as soon as they are installed<br/>
         
           d5e3f8c 6 months ago Sylvain Joyeux typelib: define base::samples::Joints.from_position<br/>
         
           74f4c88 6 months ago Sylvain Joyeux define RigidBodyState.from_pose<br/>
         
           943e596 6 months ago Sylvain Joyeux eigen: define Quaternion::norm and Quaternion::matrix<br/>
         
           d1c19a6 6 months ago Sylvain Joyeux eigen: define Quaternion.from_matrix<br/>
         
           d8dd0e2 6 months ago Sylvain Joyeux eigen: properly define copy constructors for all types<br/>
         
           7193e43 6 months ago Jakob Schwendner moved most of base/samples/Joints into new NamedVector base class<br/>
         
           2c0f44a 6 months ago Jakob Schwendner added clear method to joints<br/>
         
           966797c 6 months ago Jakob Schwendner fixed typo in comment<br/>
         
           11a1104 6 months ago Jakob Schwendner samples/Joints cleanup<br/>
         
           d091e98 6 months ago Sylvain Joyeux typelib: default initialization should now be done in #initialize (as expected)<br/>
         
           5bc7f39 7 months ago Javier Hidalgo Carrio this-&gt;frame_mode can be directly changed without any impact in the pixel_size Therefore a method setFrameMode is now create as setDataDepth<br/>
         
           78735f0 7 months ago Javier Hidalgo Carrio Merge remote-tracking branch 'autobuild/next'<br/>
         
           1225490 7 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/master'<br/>
         
           e089f42 7 months ago Alexander Duda FindGem: fix test if variable exists<br/>
         
           8678d91 7 months ago Alexander Duda FindGem.cmake: fix accessing empty list<br/>
         
           b076d8d 7 months ago Thomas Roehr Update search strategy of FindGem.<br/>
         
           71cdbdf 7 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into joint_state<br/>
         
           4bed01b 7 months ago Sylvain Joyeux use double instead of float for the position field<br/>
         
           9a70b80 7 months ago Sylvain Joyeux update documentation of RigidBodyState<br/>
         
           f66a81d 7 months ago Javier Hidalgo Carrio SonarScan: remove convertToCvMat - use FrameHelper for the conversion<br/>
         
           be7ef30 7 months ago Sylvain Joyeux remove completely the concept of having enums to give indexes for joints<br/>
         
           d1bacf0 8 months ago Sylvain Joyeux define mapNameToIndex on base::samples::Joints<br/>
         
           902ec17 8 months ago Malte Wirkus names vector is now resized as well whenn resize is called on Joints.hpp<br/>
         
           4f43b39 8 months ago Sylvain Joyeux add missing header<br/>
         
           832ae0b 8 months ago Sylvain Joyeux add typelib plugin support for JointState<br/>
         
           7dfdfb6 8 months ago Sylvain Joyeux split typelib_plugin.rb on a per-type basis<br/>
         
           b8ac715 8 months ago Sylvain Joyeux samples/Joints: add size() and resize(int) methods<br/>
         
           20ce4c6 8 months ago Sylvain Joyeux JointState: give indexed accessors to the fields<br/>
         
           b931778 8 months ago Sylvain Joyeux JointState: fix wrong isTorque name to isEffort<br/>
         
           7a23a0c 8 months ago Sylvain Joyeux add missing backward-compatibility header for Singleton.hpp<br/>
         
           7b4ad52 8 months ago Sylvain Joyeux fix backward compatibility header for the spline class<br/>
         
           49b07b9 8 months ago Sylvain Joyeux add the necessary typedefs for the command types to keep backward compatibility<br/>
         
           895c0ab 8 months ago Sylvain Joyeux fix include flag for the backward-compatibility headers<br/>
         
           d195f91 8 months ago Sylvain Joyeux the pointcloud type has a lowercase C (in cloud), update filenames<br/>
         
           2d921a3 8 months ago Sylvain Joyeux base-lib required base-types, update pkg-config file<br/>
         
           17ec9a5 8 months ago Sylvain Joyeux move the backward-compatibility headers in base/backward/base<br/>
         
           d3aceb0 8 months ago Sylvain Joyeux fix backward compatibility for the circular buffer header<br/>
         
           d1d1ad1 8 months ago Sylvain Joyeux JointState: clarify the position ranges for angular joints<br/>
         
           2200a1f 8 months ago Sylvain Joyeux add the new JointState and Joints types for command and status of joints<br/>
         
           9494a5c 8 months ago Sylvain Joyeux make all headers follow the Rock naming guidelines, and keep backward compatibility headers<br/>
         
           719d323 8 months ago Sylvain Joyeux move base/time.h to base/Time.hpp and add a backward-compatibility header<br/>
         
           ef4e617 10 months ago SeekurJr fix SplineBase#interpolate when no point types are given<br/>
         
           b3993b3 11 months ago Thomas Roehr Fix reading with row_major for MatrixX<br/>
         
           44b4b07 1 year ago Thomas Roehr Remove sisl.h include, since its not needed<br/>
         
           739cb9e 1 year, 1 month ago Jakob Schwendner added ability to parametrize the shape of the spline curve<br/>
         
           27347d7 1 year, 2 months ago Matthias Goldhoorn Reactivatd new version of sisl<br/>
         
           73de9fb 1 year, 2 months ago Sylvain Joyeux Revert "adaptation new new SISL"<br/>
         
           5fe4011 1 year, 2 months ago Sylvain Joyeux add required dependency on external/sisl<br/>
         
           38d36d8 1 year, 2 months ago Matthias Goldhoorn adaptation new new SISL<br/>
         
           9de8254 1 year, 2 months ago Matthias Goldhoorn Revert "adaptation new new SISL"<br/>
         
           dac5308 1 year, 2 months ago Matthias Goldhoorn Revert "Added additional workaround wor pkg_path for building this package for RTEMS"<br/>
         
           340d9c8 1 year, 2 months ago Matthias Goldhoorn Merge gitorious.org:/rock-base/types_ruby<br/>
         
           ba7d769 1 year, 2 months ago Matthias Goldhoorn Added additional workaround wor pkg_path for building this package for RTEMS<br/>
         
           bf6daba 1 year, 2 months ago Matthias Goldhoorn adaptation new new SISL<br/>
         
           8217100 1 year, 2 months ago Jakob Schwendner extended eigen ruby bindings with Isometry transform class<br/>
         
           5f782b7 1 year, 2 months ago Felix Rehrmann adapted VectorX converters to the VectorXd struct in orogen/types<br/>
         
           26ebcbc 1 year, 3 months ago Felix Rehrmann ruby types Eigen::MatrixX, Eigen::VectorX<br/>
         
           a4dfc82 1 year, 5 months ago Janosch Machowinski Spline: Bugfix for get on empty spline.<br/>
         
           29183a6 1 year, 5 months ago Janosch Machowinski Spline: Added pretty print for splines<br/>
         
           694fbcb 1 year, 5 months ago Janosch Machowinski Spline: Complefix for new const version of getCurveLength<br/>
         
           46c5bf4 1 year, 8 months ago Janosch Machowinski bugfix, normalize angle<br/>
         
           08bd404 1 year, 9 months ago Janosch Machowinski fix declaration of append in rice<br/>
         
           cd23aac 1 year, 9 months ago iMoby fix rice extension w.r.t. overloading of SplineBase::append<br/>
         
           517d1a8 2 years ago Sylvain Joyeux define RigidBodyState.invalid<br/>
         
           3e28c87 2 years, 3 months ago Sylvain Joyeux Merge branch 'stable' of git://gitorious.org/rock-base/types_ruby<br/>
         
           80bd481 2 years, 3 months ago Sylvain Joyeux rake: make the dependency on rdoc optional<br/>
         
           eca7d63 2 years, 3 months ago Janosch Machowinski added operator / for Vector3 by double<br/>
         
           4a3963e 2 years, 4 months ago auv eigen: added pitch and roll getter functions (until now only yaw was availible)<br/>
         
           2774c7d 2 years, 5 months ago Alexander Duda use not-aligned version of Eigen types<br/>
         
           1adf588 2 years, 5 months ago Sylvain Joyeux add missing include<br/>
         
           6dc96cd 2 years, 5 months ago Sylvain Joyeux eigen: document Quaternion#inverse<br/>
         
           111d7c7 2 years, 5 months ago Sylvain Joyeux implement Marshal support for Spline<br/>
         
           b768e82 2 years, 5 months ago Sylvain Joyeux fix typo in the deprecated Unit method<br/>
         
           f1eb087 2 years, 5 months ago Sylvain Joyeux Makefiles generated by extconf.rb are so-so as detecting dependency changes, clean before building<br/>
         
           56d8ad7 2 years, 6 months ago Sylvain Joyeux add support for infinity and nan from RG3<br/>
         
           d6a1594 2 years, 6 months ago Sylvain Joyeux add Vector3.signed_angle_to<br/>
         
           d6bd533 2 years, 6 months ago Jakob Schwendner eigen: deprecated Quaternion.Unit and added Quaternion.Identity<br/>
         
           f5267ae 2 years, 6 months ago Jakob Schwendner added generation from axis angle to quaternion<br/>
         
           3e2373a 2 years, 6 months ago Jakob Schwendner update to eigen3<br/>
         
           85116df 2 years, 7 months ago Sylvain Joyeux fix handling of rounding errors in Spline#sample<br/>
         
           8a78558 2 years, 7 months ago Sylvain Joyeux spline: define .singleton and #singleton as helpers to define singleton curves<br/>
         
           8215b40 2 years, 7 months ago Sylvain Joyeux spline: define #find_one_closest_point and #distance_to<br/>
         
           e53a87d 2 years, 8 months ago Sylvain Joyeux fix Vector3#==<br/>
         
           eab02e2 2 years, 9 months ago Sylvain Joyeux expose ::split from SplineBase<br/>
         
           938a8f9 2 years, 9 months ago Sylvain Joyeux fix Spline3#dup<br/>
         
           c4ba7f1 2 years, 9 months ago Sylvain Joyeux fix wrong array access in the spline's rice extension<br/>
         
           6ec6401 2 years, 9 months ago Sylvain Joyeux spline: implement a dichotomic search method in the ruby interface<br/>
         
           bc2c345 2 years, 9 months ago Sylvain Joyeux spline: export findClosestPoints on Spline3<br/>
         
           99d6cfd 2 years, 9 months ago Sylvain Joyeux wrap Spline&lt;&gt;::length for Spline3<br/>
         
           178ebd3 2 years, 9 months ago Sylvain Joyeux in Spline, type.field_name must be changed to type['field_name']<br/>
         
           f9cca6a 2 years, 10 months ago Sylvain Joyeux define Quaternion#==<br/>
         
           5b81ac0 2 years, 10 months ago Sylvain Joyeux make Vector3#== accept types that are not Eigen::Vector3 (returns false)<br/>
         
           0b12f42 2 years, 10 months ago Sylvain Joyeux add complete documentation<br/>
         
           e981d39 2 years, 10 months ago Jakob Schwendner readded accidently removed test<br/>
         
           00344e5 2 years, 10 months ago Jakob Schwendner added inverse to quaternion<br/>
         
           1274aa8 2 years, 11 months ago Sylvain Joyeux define #to_s for Eigen::Vector3 and Eigen::Quaternion<br/>
         
           c5ba9a8 2 years, 11 months ago Sylvain Joyeux make Eigen::Quaternion and Eigen::Vector3 dump'able<br/>
         
           ea92eef 2 years, 11 months ago Sylvain Joyeux eigen: define Quaternion#yaw and Quaternion.from_yaw<br/>
         
           e101f74 2 years, 11 months ago Sylvain Joyeux eigen: define Vector3#angle_to(v)<br/>
         
           7d1dd62 2 years, 11 months ago Sylvain Joyeux eigen: define Vector3.Unit(X|Y|Z)<br/>
         
           2c03380 2 years, 11 months ago Sylvain Joyeux expose new with_tangents parameters for Spline::join<br/>
         
           63a0cbc 2 years, 11 months ago Sylvain Joyeux eigen: expose normalization API for Vector3<br/>
         
           69d310c 2 years, 11 months ago Sylvain Joyeux implement equality operator for Eigen::Vector3<br/>
         
           289f081 2 years, 11 months ago Sylvain Joyeux don't require the user to specify the dimension when he creates a Spline3<br/>
         
           3fb2f49 2 years, 11 months ago Sylvain Joyeux implement #cross and #dot for Vector3<br/>
         
           8488279 3 years ago Sylvain Joyeux add Vector3#[] and Vector3#[]= operators<br/>
         
           b099746 3 years ago Sylvain Joyeux provide default arguments for Eigen::Vector3.new<br/>
         
           5680d98 3 years ago Sylvain Joyeux the 'tolerance' argument of SplineBase::join is a double, so static cast the default value<br/>
         
           67a010f 3 years ago Sylvain Joyeux modify Spline#get to be able to return the tangent as well<br/>
         
           e95a917 3 years ago Sylvain Joyeux define Quaternion.Unit<br/>
         
           4a9e49d 3 years ago Sylvain Joyeux spline: add Spline3 for 3D splines, which returns Eigen::Vector3d<br/>
         
           edb44e9 3 years ago Sylvain Joyeux fix convertions to Eigen types<br/>
         
           dbadfb0 3 years ago Sylvain Joyeux rename BaseTypes to Types::Base and use target specification in convert_to_ruby<br/>
         
           d6c4681 3 years, 1 month ago Sylvain Joyeux update description<br/>
         
           a7ce90f 3 years, 1 month ago Sylvain Joyeux use the new :if selectors to select between "old" base/Time and "new" base/Time<br/>
         
           445be38 3 years, 1 month ago Sylvain Joyeux add the missing Spline.cpp file<br/>
         
           0f1f68d 3 years, 1 month ago Sylvain Joyeux copy the convertion scripts from base/orogen/types<br/>
         
           e731f36 3 years, 1 month ago Sylvain Joyeux update gitignore<br/>
         
           75ff6b5 3 years, 1 month ago Sylvain Joyeux kind-a test joining curves and singletons<br/>
         
           6b11ff7 3 years, 1 month ago Sylvain Joyeux define the Spline#sample convenience method<br/>
         
           4c7cd2d 3 years, 1 month ago Sylvain Joyeux depend on base/types<br/>
         
           f1effa8 3 years, 1 month ago Sylvain Joyeux don't use Base as a module as it clashes with QtRuby's dynamic constant resolution<br/>
         
           cf56645 3 years, 1 month ago Sylvain Joyeux convert the reigen package into a ruby bindings package for base/types<br/>
         
           c9017e6 3 years, 2 months ago Sylvain Joyeux add a documentation generation target<br/>
         
           eefd4ae 3 years, 3 months ago Sylvain Joyeux it seems that rice + 1.9.2 does not like Eigen alignment constraints. Fix this.<br/>
         
           2eb7850 3 years, 3 months ago Sylvain Joyeux dist: add a clean task<br/>
         
           47b1bd4 3 years, 5 months ago Christopher Gaudig changed the mkmf-rice workaround to accept any rice version &gt;= 1.3.2 (?)<br/>
         
           1b07f2b 3 years, 6 months ago Sylvain Joyeux fix author field<br/>
         
           2269632 3 years, 7 months ago Sauce10 assume eigen headers are in /usr/include/eigen2 if no pkg-config file is present<br/>
         
           8b69e6f 3 years, 7 months ago Sylvain Joyeux add missing extension files<br/>
         
           9170687 3 years, 7 months ago Sylvain Joyeux basic wrapper around eigen geometry module<br/>
         
         </td></tr>
       
       



       <tr class="name" id="bundles/rock">
         <th>bundles/rock</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="6"> 6 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_6"><td>
         
           1451be7 6 weeks ago Jens Renken Fixed initialization of canbus<br/>
         
           50634b8 8 weeks ago SeekurJr The corridor navigation task no longer has a odometry samples port. It uses the transformer for the pose.<br/>
         
           5dec0cc 8 weeks ago SeekurJr Corrections on how the heading is written in the ServoingTask<br/>
         
           0d197a7 8 weeks ago Christian Rauch add missing require<br/>
         
           fe2bd61 10 weeks ago SeekurJr fix handling of the trajectory argument in TrajectoryFollower::Task<br/>
         
           d5a3d24 3 months ago Raul Dominguez dynamixel::Task has two RBS ports, need a way to select which one we want to feed to the transformer<br/>
         
         </td></tr>
       
       



       <tr class="name" id="bundles/rock_ugv_nav">
         <th>bundles/rock_ugv_nav</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="7"> 2 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_7"><td>
         
           5cde9c9 8 weeks ago Raul Dominguez The odometry is no longer given through a port to the corridor servoing but through the transformer. The specific port to which connect the scan samples is given now.<br/>
         
           7957f2d 9 weeks ago SeekurJr Missing parameter for event handler<br/>
         
         </td></tr>
       
       





       <tr class="name" id="control/motor_controller">
         <th>control/motor_controller</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="8"> 4 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_8"><td>
         
           706d3f0 6 months ago Matthias Goldhoorn Adaptations to new joint interface<br/>
         
           62b5f3a 8 months ago Sylvain Joyeux refactor the IRSpeedFromPositionFilter into a class that works on single joints, and a class that uses the single filters to update samples::Joints<br/>
         
           d126564 8 months ago Sylvain Joyeux allow to pre-size the status in the IRSpeedFromPositionFilter<br/>
         
           ba37b20 8 months ago Sylvain Joyeux add a generic filter that allows to compute speed from positions in base::JointState<br/>
         
         </td></tr>
       
       



       <tr class="name" id="control/orogen/kdl">
         <th>control/orogen/kdl</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="9"> 1 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_9"><td>
         
           b56bdcd 3 months ago Sylvain Joyeux add some import_types_from / include that are going to be required by the new oroGen code<br/>
         
         </td></tr>
       
       





       <tr class="name" id="control/orogen/trajectory_follower">
         <th>control/orogen/trajectory_follower</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="10"> 3 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_10"><td>
         
           5e170f6 3 months ago Stefan Haase Adds properties to set the point turn borders and the maximal rotation velocity for the no-orientation controler.<br/>
         
           ff57563 4 months ago Stefan Haase Just adds some debug output.<br/>
         
           0d5b4ed 4 months ago Stefan Haase Just formatting and another debug message.<br/>
         
         </td></tr>
       
       





       <tr class="name" id="control/trajectory_follower">
         <th>control/trajectory_follower</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="11"> 3 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_11"><td>
         
           5f61314 3 months ago Janosch Machowinski compile fix for last commit<br/>
         
           cb78dfb 3 months ago Janosch Machowinski Fix for driving 'beside' the trajectory<br/>
         
           40ec15c 3 months ago Stefan Haase Adds the possibility to set the point turn borders and the maximal rotation velocity for the no-orientation controler.<br/>
         
         </td></tr>
       
       





       <tr class="name" id="drivers/actuator_dispatcher">
         <th>drivers/actuator_dispatcher</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="12"> 1 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_12"><td>
         
           d1555f4 5 months ago Sylvain Joyeux use rock_standard_layout()<br/>
         
         </td></tr>
       
       



       <tr class="name" id="drivers/aggregator">
         <th>drivers/aggregator</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="13"> 1 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_13"><td>
         
           99e61b6 4 months ago Jakob Schwendner fixed implicit stream activation behaviour<br/>
         
         </td></tr>
       
       









       <tr class="name" id="drivers/camera_interface">
         <th>drivers/camera_interface</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="14"> 1 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_14"><td>
         
           d68313f 8 months ago Thomas Roehr Improve getCamInfo to convert ip, subnet and gateway in human readable form.<br/>
         
         </td></tr>
       
       



       <tr class="name" id="drivers/camera_prosilica">
         <th>drivers/camera_prosilica</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="15"> 8 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_15"><td>
         
           20136b2 23 minutes ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/stable' into next<br/>
         
           abec84c 7 days ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into next<br/>
         
           404e06c 12 days ago Sylvain Joyeux do not link against librt when it does not make sense<br/>
         
           fb319b4 12 days ago Sylvain Joyeux fix linking to librt with recent binutils<br/>
         
           8a96e77 12 days ago Sylvain Joyeux use only portable cmake-based tools to download and unpack the prosilica SDK<br/>
         
           580d29d 13 days ago Sylvain Joyeux make the test for existence of the prosilica API stricter<br/>
         
           b4504ef 13 days ago Sylvain Joyeux make the test for existence of the prosilica API stricter<br/>
         
           991c0d7 7 months ago Thomas Roehr Add wget dependency to manifest -- display warning if wget is not installed<br/>
         
         </td></tr>
       
       



       <tr class="name" id="drivers/camera_usb">
         <th>drivers/camera_usb</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="16"> 5 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_16"><td>
         
           df44ae1 9 months ago Sylvain Joyeux workaround for some webcams reporting attributes as writable, but refusing to write to them<br/>
         
           ac46f65 9 months ago Sylvain Joyeux make the output format truly configurable<br/>
         
           3e504a2 9 months ago Sylvain Joyeux use slightly less pointers, more std::vector<br/>
         
           bac76d0 9 months ago Sylvain Joyeux fix isAttribAvailable in case some attributes are read only<br/>
         
           1b8099f 9 months ago Sylvain Joyeux additional debug output<br/>
         
         </td></tr>
       
       









       <tr class="name" id="drivers/dynamixel">
         <th>drivers/dynamixel</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="17"> 1 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_17"><td>
         
           28e7c7f 4 months ago sbot Fix log message<br/>
         
         </td></tr>
       
       









       <tr class="name" id="drivers/iodrivers_base">
         <th>drivers/iodrivers_base</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="18"> 2 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_18"><td>
         
           cb94892 5 months ago Sylvain Joyeux Merge branch 'next'<br/>
         
           a8b82f4 6 months ago Jakob Schwendner added ability to set custom baud rate for linux systems<br/>
         
         </td></tr>
       
       











       <tr class="name" id="drivers/orogen/aria">
         <th>drivers/orogen/aria</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="19"> 14 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_19"><td>
         
           ea1bb03 9 weeks ago Sylvain Joyeux Merge branch 'master' into next<br/>
         
           c88fb45 9 weeks ago SeekurJr make the source and target frames for the robot_pose pose configurable<br/>
         
           05c1044 3 months ago Leif Christensen added baudrate property to aria orogen module<br/>
         
           57c94e2 3 months ago Christian Rauch Revert changes introduced by faulty merge.<br/>
         
           fc22eb2 3 months ago Steffen Planthaber Merge branch 'master' of git://gitorious.org/rock-drivers/orogen-aria<br/>
         
           6ee688c 3 months ago Steffen Planthaber adding return port for a timestamped commands::Motion2D<br/>
         
           721e17b 3 months ago Steffen Planthaber new port: command_time (time when the command was sent to the aria lib, including the command (Motion2D))<br/>
         
           8436c69 3 months ago SeekurJr Provide the ability to timeout after a given period of seconds.<br/>
         
           706a69f 3 months ago SeekurJr Additional port to provide the timestamped motion command that was send to the robot.<br/>
         
           1c43ef9 3 months ago SeekurJr Typo in comment corrected.<br/>
         
           ae43aef 3 months ago SeekurJr Removal of the 'aa' ports because they provide redundant functionality.<br/>
         
           a197fde 3 months ago Christian Rauch Documentation for ports and properties added and types updated.<br/>
         
           6b7692a 5 months ago Sylvain Joyeux convert to new-style find_package(Rock)<br/>
         
           bcaa931 6 months ago SeekurJr Stop the robot and stay, if there is no new data.<br/>
         
         </td></tr>
       
       

















       <tr class="name" id="drivers/orogen/controldev">
         <th>drivers/orogen/controldev</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="20"> 2 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_20"><td>
         
           973ea17 6 months ago Matthias Goldhoorn Don't do memset on strcuures which containing strings<br/>
         
           09acebe 6 months ago Matthias Goldhoorn Fixed bug in cleanup<br/>
         
         </td></tr>
       
       





















       <tr class="name" id="drivers/orogen/ptu_directedperception">
         <th>drivers/orogen/ptu_directedperception</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="21"> 1 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_21"><td>
         
           74d7679 7 months ago Felix Rehrmann to work with iodriver_base's timeouts<br/>
         
         </td></tr>
       
       





       <tr class="name" id="drivers/orogen/sonar_tritech">
         <th>drivers/orogen/sonar_tritech</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="22"> 2 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_22"><td>
         
           e7564bd 5 months ago Matthias Goldhoorn Reintegrated echosounder implementation, fixed dynamic-property bug<br/>
         
           d0e5d18 6 months ago Matthias Goldhoorn Tritech sonars are now dynamic configureable<br/>
         
         </td></tr>
       
       





       <tr class="name" id="drivers/orogen/transformer">
         <th>drivers/orogen/transformer</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="23"> 4 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_23"><td>
         
           b4cab6b 4 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into next<br/>
         
           8875b3b 5 months ago Sylvain Joyeux add missing header<br/>
         
           a0b2bba 6 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/next'<br/>
         
           5b6fe23 6 months ago Jakob Schwendner changed loop for writing of transformer status from while to do..while<br/>
         
         </td></tr>
       
       











       <tr class="name" id="drivers/ptu_directedperception">
         <th>drivers/ptu_directedperception</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="24"> 2 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_24"><td>
         
           9c8369b 5 months ago Sylvain Joyeux convert to new-style find_package(Rock)<br/>
         
           b6faece 7 months ago SeekurJr use iodrivers_base timeout<br/>
         
         </td></tr>
       
       





       <tr class="name" id="drivers/sonar_tritech">
         <th>drivers/sonar_tritech</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="25"> 1 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_25"><td>
         
           9f4dd09 7 months ago Matthias Goldhoorn Added timestamp estimator to the profiling head driver<br/>
         
         </td></tr>
       
       



       <tr class="name" id="drivers/transformer">
         <th>drivers/transformer</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="26"> 21 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_26"><td>
         
           445f3b8 12 days ago Raul Dominguez syskit: fallback to the full task if the selected data service has no transformation output port<br/>
         
           2721a2a 8 weeks ago Sylvain Joyeux syskit: fix behaviour when a placeholder task ends up being a transform producer<br/>
         
           59610d9 3 months ago sbot bugfix: allow multiple callbacks on transformation elements<br/>
         
           503aade 3 months ago sbot syskit: allow to selectively disable the startup of the transformer broadcaster<br/>
         
           4116883 4 months ago Sylvain Joyeux syskit: define find_*_port for Syskit::Component<br/>
         
           2cbfd61 4 months ago Sylvain Joyeux ruby: use proper exception type when the max seeek depth is reached<br/>
         
           d261df9 4 months ago Sylvain Joyeux ruby: fix corner-case where a transformation is not found<br/>
         
           a6297cb 5 months ago Thomas Roehr ruby: change Transformer::load_configuration to call Transformer::load<br/>
         
           f66b0a8 5 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/next'<br/>
         
           edcb0b4 5 months ago Sylvain Joyeux add missing headers<br/>
         
           6e37a76 6 months ago Sylvain Joyeux syskit: register the transforms annotations as a task annotation<br/>
         
           cdd7d75 6 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/next'<br/>
         
           1cb13fd 6 months ago Sylvain Joyeux ignore ruby code coverage folder in git<br/>
         
           f5227a2 6 months ago Sylvain Joyeux syskit: fix wrong device selection merging when one frame is not selected<br/>
         
           96d325b 6 months ago Sylvain Joyeux import the syskit-related test suite from tests/orogen/transformer<br/>
         
           2535b0a 6 months ago Sylvain Joyeux syskit: implement a generic related_ports computation in InvalidFrameSelection<br/>
         
           eee34f0 6 months ago Sylvain Joyeux syskit: do a post-instanciation validation of the selected frames<br/>
         
           5f76e38 6 months ago Sylvain Joyeux syskit: extend the syskit-level API to access transformer information<br/>
         
           05e94c6 6 months ago Sylvain Joyeux Merge branch 'next'<br/>
         
           387020c 6 months ago Sylvain Joyeux syskit: detect producers that need themselves<br/>
         
           2852d72 6 months ago Sylvain Joyeux syskit: there is no need to force the scheduling of transformation producers and users<br/>
         
         </td></tr>
       
       

























       <tr class="name" id="gui/vizkit">
         <th>gui/vizkit</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="27"> 24 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_27"><td>
         
           85e0dbc 3 months ago Raul Dominguez ruby: fix typo in name of Exception class<br/>
         
           4df128e 4 months ago Alexander Duda fix export to yaml (async api)<br/>
         
           a016ef8 4 months ago Alexander Duda Merge branch 'master' into next<br/>
         
           72b605e 5 months ago Allan E. Conquest SyskitActionItem: Do not save action state locally but always query the action for its state<br/>
         
           1c1e5f0 5 months ago Sylvain Joyeux vizkit3d: define Vizkit3DWidget::getCameraView<br/>
         
           c0884af 6 months ago aduda LogControl: improve log marker support<br/>
         
           35a9080 6 months ago Alexander Duda vizkit: add support for displaying log markers<br/>
         
           d2995b6 6 months ago Alexander Duda ContextMenu: rename task_state to task<br/>
         
           b6c61fc 6 months ago Alexander Duda vizkit: add support for searching for widgets controlling Tasks<br/>
         
           323f189 6 months ago Alexander Duda LogControl widget: remove deprecation<br/>
         
           12f08ef 6 months ago Sylvain Joyeux vizkit3d: properly handle plugins that get deleted externally<br/>
         
           dd6374a 6 months ago Allan E. Conquest SyskitActionItem: Different colors depending on action state; name generation based on actions, further development<br/>
         
           a69038d 6 months ago Allan E. Conquest UILoader: Sanity check: Only QWidget allowed as parent<br/>
         
           63ae2ce 6 months ago Sylvain Joyeux viz: make the size properties of the RBS visualizer proper Qt properties<br/>
         
           3766629 6 months ago Sylvain Joyeux viz: make the RBS visualizer accept to be initialized as a child of another plugin<br/>
         
           397e2db 6 months ago Sylvain Joyeux vizkit3d: improve support for hierarchical plugins<br/>
         
           b23a6a6 6 months ago Sylvain Joyeux vizkit3d: make isPluginEnabled and setPluginEnabled slots<br/>
         
           83fb348 6 months ago Sylvain Joyeux vizkit3d: allow to collapse the property browser in Vizkit3DWidget<br/>
         
           19cfadf 6 months ago Sylvain Joyeux ruby,vizkit3d: make createPlugin's default argument truly optional<br/>
         
           561488c 7 months ago Allan E. Conquest SyskitActionItem: Changes due to changes in action model (dummy). Some first cleanup.<br/>
         
           87cda66 7 months ago Allan E. Conquest ContextMenu: Provide advanced context menu. The user basically submits a preexisting menu and a position.<br/>
         
           5755faa 7 months ago Allan E. Conquest fix typo in method call<br/>
         
           d23f02e 7 months ago Allan E. Conquest VizkitItems: SyskitActionItem: Add different context menu items for running actions<br/>
         
           2eb141b 7 months ago Christian Rauch Plot2d: Plot Eigen::VectorXd with one plot per element.<br/>
         
         </td></tr>
       
       





       <tr class="name" id="image_processing/jpeg_conversion">
         <th>image_processing/jpeg_conversion</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="28"> 1 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_28"><td>
         
           fbcd07f 6 months ago Sylvain Joyeux bindings/ruby is now automatically added by rock_standard_layout<br/>
         
         </td></tr>
       
       













       <tr class="name" id="multiagent/fipa_acl">
         <th>multiagent/fipa_acl</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="29"> 7 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_29"><td>
         
           b8c839d 6 months ago Thomas Roehr Fix definition<br/>
         
           ab52c0c 6 months ago Thomas Roehr Fix tinyxml include<br/>
         
           b15bffe 11 months ago Thomas Roehr Remove unused variables<br/>
         
           3b711fb 11 months ago Thomas Roehr By default use compiler option -g0 to reduce memory requirements<br/>
         
           35fe6f3 11 months ago Thomas Roehr Remove grammar include from testparser<br/>
         
           7726e9b 11 months ago Thomas Roehr Change signature of MessagePrinter::print<br/>
         
           8be15d2 11 months ago Thomas Roehr Add toString function to ACLMessage<br/>
         
         </td></tr>
       
       





       <tr class="name" id="orogen">
         <th>orogen</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="30"> 36 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_30"><td>
         
           4d36d28 6 weeks ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/stable' into next<br/>
         
           bd62994 9 weeks ago Sylvain Joyeux Disambiguate orogen generated ros package name from 'native' ros generated packages<br/>
         
           a9dfd80 3 months ago Sylvain Joyeux generate an error if one tries to deploy an abstract task<br/>
         
           35f27dc 4 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into next<br/>
         
           7ca43d0 5 months ago Ruben Smits adding minimum required cmake version<br/>
         
           c7e39f3 5 months ago Sylvain Joyeux remove the last references to Rock::Doc<br/>
         
           dc9b4d0 5 months ago Sylvain Joyeux gui: accept generating type pages for base types<br/>
         
           1edb2d7 5 months ago Sylvain Joyeux html: only optionally display the task's main documentation at the top of the generated page<br/>
         
           1b87e9f 6 months ago Sylvain Joyeux html: properly filter out the standard metaruby :external_objects option before calling #push<br/>
         
           bcb6ed3 6 months ago Sylvain Joyeux load kramdown in lib/orogen/html.rb, and add it as an optional dependency in the manifest<br/>
         
           bc6c806 6 months ago Sylvain Joyeux fix broken return value in ERB template object creation<br/>
         
           d135192 6 months ago Sylvain Joyeux html: do allow rendering the model for RTT::TaskContext, which has no superclass<br/>
         
           aed16eb 6 months ago Sylvain Joyeux metaruby-based HTML page rendering now requires render() to have an option argument<br/>
         
           7f85400 6 months ago Sylvain Joyeux do not override the documentation set with .doc by the one extracted through comments<br/>
         
           f42b7ca 6 months ago Sylvain Joyeux properly set the ERB file names for proper debugging<br/>
         
           b6e37e3 6 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/next'<br/>
         
           a6146e4 6 months ago Sylvain Joyeux fix URL in manifest<br/>
         
           de84843 6 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/master'<br/>
         
           b56a1e7 6 months ago Sylvain Joyeux templates: set -Wno-unused-local-typedefs when the compiler supports it<br/>
         
           2fe52ff 6 months ago Thomas Roehr Merge branch 'next'<br/>
         
           6e8046a 7 months ago Matthias Goldhoorn Fix generation intermediate_cxxname_for for multiple template class-names<br/>
         
           60bdfd8 7 months ago Sylvain Joyeux Merge remote-tracking branch 'orocos/master'<br/>
         
           bdaa352 7 months ago Sylvain Joyeux fix generation of properties with multi-line documentation<br/>
         
           2f13153 7 months ago Sylvain Joyeux typekit: fix calls to define_container<br/>
         
           5fde923 7 months ago Sylvain Joyeux html: better rendering for documentation<br/>
         
           214c49f 7 months ago Sylvain Joyeux extract documentation from comments in the oroGen file<br/>
         
           9487f43 8 months ago Sylvain Joyeux Merge remote-tracking branch 'orocos/master'<br/>
         
           f01e969 8 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/master'<br/>
         
           3605937 8 months ago Ruben Smits templates: add correct rpath settings for OSX<br/>
         
           e1fb372 8 months ago Sylvain Joyeux templates: dont' use relative paths in public headers<br/>
         
           3f47ef0 8 months ago Ruben Smits add package.xml template to support catkin builds<br/>
         
           a2b6bb5 8 months ago Sylvain Joyeux Merge remote-tracking branch 'orocos/master'<br/>
         
           41be84e 8 months ago Ruben Smits catkin: add CMakeLists.txt to install parts in the right directory and add package.xml to make it buildable with catkin<br/>
         
           9e58d08 9 months ago Peter Soetens typegen: don't overwrite the OROCOS_TARGET if already set.<br/>
         
           647bf7e 9 months ago Peter Soetens typekit: correct the internal include path to Types.hpp<br/>
         
           e29156c 12 months ago Peter Soetens typekit: tweak cmake directives<br/>
         
         </td></tr>
       
       







       <tr class="name" id="planning/nav_graph_search">
         <th>planning/nav_graph_search</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="31"> 10 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_31"><td>
         
           46231df 4 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into next<br/>
         
           bcd8d52 5 months ago Stefan Haase Merge branch 'master' of git://gitorious.org/rock-planning/nav_graph_search<br/>
         
           db53402 5 months ago Stefan Haase Fixes lots of error regarding the partial trav map update. Goal positions must not be placed on obstacles anymore. run() supports error details now. Still an issue: The internal dstar lite map cells (0,0) and (1,1) can not be updated(!?).<br/>
         
           0607ba9 5 months ago Sylvain Joyeux add missing dependencies on boost::system<br/>
         
           1223df7 5 months ago Stefan Haase The merging of new trav maps within dstar lite has been tested and error have been fixed.<br/>
         
           a4ebe21 5 months ago Stefan Haase Adds an environment to store the traversability map.<br/>
         
           727f709 6 months ago Stefan Haase Adds statistics.<br/>
         
           6eb2960 6 months ago Stefan Haase Cleanup of the dstar-lite code.<br/>
         
           89f3acf 7 months ago Stefan Haase Adds a function to request the cost values within the dstar lite map.<br/>
         
           22f4b8d 7 months ago Stefan Haase Further revision of the code, adds lot of documentation, corrects some errors.<br/>
         
         </td></tr>
       
       



       <tr class="name" id="planning/orogen/corridor_navigation">
         <th>planning/orogen/corridor_navigation</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="32"> 19 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_32"><td>
         
           55a88cf 4 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into next<br/>
         
           93644c8 5 months ago Sylvain Joyeux add missing include<br/>
         
           5310ee0 7 months ago SeekurJr Commented out checkout for the ptu min and max (it gives problems for fixed tilt sensors)<br/>
         
           5ac890a 8 months ago Raul Dominguez Mean, mean + K*std or median can be selected as method for computing the height of each entry height.<br/>
         
           67913b9 9 months ago Raul Dominguez Changes for enabling the configuration of the Grid's Entries Window size<br/>
         
           e027be1 9 months ago SeekurJr add laser scans only if the robot's place is marked<br/>
         
           6411a35 9 months ago SeekurJr made the configurable front shadow area work<br/>
         
           663d28a 9 months ago SeekurJr check when the tilt range is finally found<br/>
         
           20c5a50 9 months ago SeekurJr fixed bodyCenter2Odo going identity<br/>
         
           65c5f3a 9 months ago Felix Rehrmann made region in front of the robot the laser sanner cannot scan configurable<br/>
         
           d3c3fa8 10 months ago Janosch Machowinski TestTask:: give search_horizon sane default value<br/>
         
           9e04dfb 10 months ago Janosch Machowinski Fixed opaque conversation for vfh_star::Tree<br/>
         
           6ed2439 10 months ago Sylvain Joyeux make the X-forward vs. Y-forward conventions configurable<br/>
         
           50b9053 10 months ago Sylvain Joyeux transform the output trajectory to match the X forward convention<br/>
         
           73c40c2 10 months ago Sylvain Joyeux properly set the map's Z position when converting to X forward<br/>
         
           c9bdfae 10 months ago Sylvain Joyeux make the height to ground configurable<br/>
         
           c4005da 10 months ago Sylvain Joyeux adapt the map-generation part of the component to the X forward convention<br/>
         
           4a1f4af 10 months ago SeekurJr added transformation in case x forward is needed<br/>
         
           c8fdbe0 10 months ago SeekurJr use the RTT logger instead of cout/cerr<br/>
         
         </td></tr>
       
       



       <tr class="name" id="planning/orogen/corridor_planner">
         <th>planning/orogen/corridor_planner</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="33"> 9 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_33"><td>
         
           cfac805 4 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into next<br/>
         
           6bde6bb 5 months ago Stefan Haase If the received environment contains only one MLS map it will be used now regardless of the ID.<br/>
         
           d91ccb5 5 months ago Stefan Haase Adds nearly the same debug messages which have been added by 2maz.<br/>
         
           3cb0385 5 months ago Thomas Roehr Add debug messages<br/>
         
           23f17ae 5 months ago Thomas Roehr Add limiting of extents<br/>
         
           3e9243a 5 months ago Sylvain Joyeux add missing include<br/>
         
           351dc96 5 months ago Stefan Haase List all received MLS maps.<br/>
         
           1cdc36d 5 months ago Stefan Haase Adds some debug output and changes the path for envire serialization.<br/>
         
           3532370 5 months ago Sylvain Joyeux add missing include<br/>
         
         </td></tr>
       
       



       <tr class="name" id="planning/vfh_star">
         <th>planning/vfh_star</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="34"> 40 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_34"><td>
         
           4838afe 5 months ago Sylvain Joyeux add missing header<br/>
         
           b14d16b 5 months ago Sylvain Joyeux add logfile that contains a single vfh_star::Tree sample<br/>
         
           6ad768e 5 months ago Sylvain Joyeux viz: BIND_PER_PRIMITIVE is no more in OSG, replace by BIND_PER_VERTEX<br/>
         
           49625e5 5 months ago Sylvain Joyeux viz: remove deprecated usage of VizPlugin<br/>
         
           284a57e 7 months ago SeekurJr Some changes to avoid a falling into a bug that produces the task's fail.<br/>
         
           bfccec1 8 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/master'<br/>
         
           d215b87 8 months ago Raul Dominguez Now the mean, mean + K*std or median can be used for computing the height of each entry of the grid. The different options can be selected though the configuration file. By default the mean is computed, as in previous versions was done.<br/>
         
           060a981 9 months ago Raul Dominguez The visualization of the VFH tree now fits axis convetion of the VirGo project<br/>
         
           141cc40 9 months ago Raul Dominguez I've commented out the code where the median is computed as now the mean + k*stdev is used for setting the elevation gird height<br/>
         
           aa39719 9 months ago user Now in ElevationGrid the mean and the variance are used to determine the height.<br/>
         
           d0c0559 9 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/master'<br/>
         
           03cc95e 9 months ago Raul Dominguez Changes for enabling the configuration of the Grid's Entries Window size<br/>
         
           3e89737 9 months ago Raul Dominguez Now it uses the median instead of the mean to set each grid entry median attribute (the mean is also computed and kept as attribute but is not used)<br/>
         
           072c331 10 months ago Felix Rehrmann do proper guards for TraversabilityGrid.h<br/>
         
           b6903f2 10 months ago Janosch Machowinski TreeSearch: Removed annoying debug<br/>
         
           d1b4bea 10 months ago Janosch Machowinski more initialization in TreeNode::clear()<br/>
         
           7b1749a 10 months ago Janosch Machowinski fixed NNLookup<br/>
         
           e534e4b 10 months ago Janosch Machowinski VFHTreeVisualization: Repaired the max_nodes feature<br/>
         
           6a766c9 10 months ago Janosch Machowinski added method to clear TreeNode<br/>
         
           30700fa 10 months ago Janosch Machowinski Ported VFHTreeVis to new QT base interface<br/>
         
           02a1c2f 10 months ago Janosch Machowinski implemented reuse of Treenodes<br/>
         
           200603c 10 months ago Janosch Machowinski fixed NNLookup extendGlobalGrid operation<br/>
         
           25867a0 10 months ago Janosch Machowinski Tree: Fixed copy operator in case that tree is empty<br/>
         
           023a467 10 months ago Janosch Machowinski TreeSearch: moved automatic parameter calculation into TreeSearchConf<br/>
         
           c264044 10 months ago Janosch Machowinski TreeSearch: made createNode public<br/>
         
           a7c080e 10 months ago Janosch Machowinski Fixed uninitialized member in NNLookupBox<br/>
         
           661e245 10 months ago Janosch Machowinski Fixed memory leaks with new nnLookup implementation<br/>
         
           dfa5801 10 months ago Janosch Machowinski make the parameter that defines the distance between the body frame and the ground configurable<br/>
         
           a5e3461 10 months ago Janosch Machowinski use std::vector instead of arrays in GridDump<br/>
         
           97a84bc 10 months ago Sylvain Joyeux update default TreeSearch configuration from asguard's values<br/>
         
           a272a27 10 months ago Sylvain Joyeux make the parameter that defines the distance between the body frame and the ground configurable<br/>
         
           415ba77 10 months ago Sylvain Joyeux use std::vector instead of arrays in GridDump<br/>
         
           b19d7f7 10 months ago Janosch Machowinski Integrated new lookup mechanism and fixed discarding of bad subtrees<br/>
         
           bee801c 10 months ago Janosch Machowinski Added Hierarchical lookup and automatic growing to NearestNeighbour lookup<br/>
         
           7803c1c 10 months ago Janosch Machowinski Treesearch: Minor bugfix, initialize first node with correct cost.<br/>
         
           4577ffe 10 months ago Janosch Machowinski Added replacement for kdtree nearest neighbour lookup.<br/>
         
           f7e4994 10 months ago Janosch Machowinski TreeNode: Added child tracking<br/>
         
           e666224 10 months ago Janosch Machowinski TreeNode: Compute Yaw on initialization and save it<br/>
         
           e80e65d 10 months ago Janosch Machowinski TreeSearch: Bugfix in direction sampling<br/>
         
           3efbe70 11 months ago Felix Rehrmann to build viz running ubuntu 12.10<br/>
         
         </td></tr>
       
       



       <tr class="name" id="rtt">
         <th>rtt</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="35"> 68 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_35"><td>
         
           df5c8b1 4 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into next<br/>
         
           4359266 4 months ago Ruben Smits macosx: fix clashing Posix features defines<br/>
         
           12273bc 4 months ago Ruben Smits cmake: fix APPLE LINKFLAGS wrt rpath settings<br/>
         
           c652ede 6 months ago Sylvain Joyeux Merge remote-tracking branch 'orocos/master'<br/>
         
           6addf25 6 months ago Peter Soetens Default to dry setup for Groovy and wet for Hydro or later. Set NO_ROS_BUILD to force wet/catkin.<br/>
         
           e50a07a 7 months ago Sylvain Joyeux Merge remote-tracking branch 'orocos/master'<br/>
         
           544e1d5 7 months ago Javier Hidalgo Carrio extras: fix ROPtr::reset(ptr) when 'ptr' is the actual pointer that 'this' already manages<br/>
         
           a5483ac 7 months ago Peter Soetens useorocos: generate typekits in the project source dir<br/>
         
           126b676 8 months ago Sylvain Joyeux Merge remote-tracking branch 'orocos/master'<br/>
         
           71a33ea 8 months ago Ruben Smits cmake: UseOrocos macros should use the correct way of rpath setting on OSX<br/>
         
           f2628af 8 months ago Ruben Smits Also append target suffix for macosx to not confuse the OCL utility scripts<br/>
         
           7b43276 8 months ago Ruben Smits cmake: add system library to user libs<br/>
         
           14243c4 8 months ago Ruben Smits tests: remove duplicate BOOST_TEST_MAIN macro<br/>
         
           c11d6a2 9 months ago Ruben Smits tests: do not mix included and linked usage of boost unit test framework<br/>
         
           c80f385 9 months ago Ruben Smits os: we should use the Instance API of the StartStopManager instead of keeping a local reference, partially fixes bug # 834: Unit tests fail on macosx<br/>
         
           ef4543b 9 months ago Ruben Smits macosx: fix building with boost &gt; 1.50 and Snow Leopard<br/>
         
           0ba760e 9 months ago Ruben Smits Fix building with boost 1.53: this header has been deprecated since boost 1.53<br/>
         
           49cb7bd 9 months ago Ruben Smits cleanup CMakeLists from ROS polution<br/>
         
           08eaaf2 9 months ago Ruben Smits catkin: provide catkin compatible package.xml file<br/>
         
           2ca4237 9 months ago Ruben Smits cmake: make import file optional<br/>
         
           4dc9977 9 months ago Ruben Smits cmake: ditch ros specific stuff<br/>
         
           7f33e9e 9 months ago Peter Soetens plugin: updated API docs.<br/>
         
           ef5da05 9 months ago Peter Soetens os: make void specialisation of rt allocators public<br/>
         
           5a10c0a 9 months ago Peter Soetens deployment: ComponentLoader::import only interprets a package name as filename if it is an loadable library<br/>
         
           d52207a 9 months ago Peter Soetens cmake: don't force install path in cmake code.<br/>
         
           9d03f06 10 months ago Peter Soetens cmake: the n-th fixup of the make eclipse-project target for ROS<br/>
         
           2bd0394 11 months ago Peter Soetens useorocos: fix eclipse generator detection.<br/>
         
           28b91ba 11 months ago Peter Soetens useorocos: don't eagerly assume catkin-style builds on fuerte<br/>
         
           ef6d749 11 months ago Peter Soetens scripting: fix crash in quantal and possibly all other OS'es.<br/>
         
           6c9c9c5 12 months ago Peter Soetens useorocos: cleanup/sanitize generation of typekits<br/>
         
           d497319 12 months ago Peter Soetens cmake: fix finding ros on Groovy<br/>
         
           7d725b9 12 months ago Peter Soetens deployment: fix error reporting when importing packages<br/>
         
           e6bce4b 12 months ago Peter Soetens cmake: define USE_OROCOS_RTT flag to indicate that UseOrocos-RTT conventions are in use.<br/>
         
           648112d 12 months ago Peter Soetens types: fixup missing includes and forward decls.<br/>
         
           3ebd017 12 months ago Peter Soetens useorocos: improve non-rosbuild configurations<br/>
         
           e861491 12 months ago Peter Soetens doc: update drawing about deployment.<br/>
         
           eca4504 12 months ago Peter Soetens cmake: update docs on orocos_typegen_headers<br/>
         
           d99f6d2 1 year ago Peter Soetens cmake: More pkg-config fixing of namespec parsing.<br/>
         
           4006d9a 1 year ago Peter Soetens cmake: fixup pkgconfig search logic for -lnamespec case<br/>
         
           7de5c4e 1 year, 1 month ago Peter Soetens win32: fix typekit plugin test by setting suffix correctly.<br/>
         
           b122ce8 1 year, 1 month ago Peter Soetens base: fix missing include file.<br/>
         
           059588a 1 year, 1 month ago Peter Soetens win32: fixup last missing API decorations.<br/>
         
           5b2fa69 1 year, 1 month ago Peter Soetens win32: fixup missing RTT_API statements.<br/>
         
           db5e672 1 year, 1 month ago Peter Soetens types: fix namespace typos.<br/>
         
           2602853 1 year, 1 month ago Peter Soetens cmake: also check for absolute paths coming from .pc file libs.<br/>
         
           ccbaa7c 1 year, 1 month ago Peter Soetens cmake: fix bug #1012: CMake issues with newer Xenomai custom installs.<br/>
         
           2c830bf 1 year, 1 month ago Peter Soetens Revert "Add propagateNeedsSignal function."<br/>
         
           ad9e066 1 year, 1 month ago Peter Soetens doc: add caveat about deployer renaming<br/>
         
           c512431 1 year, 1 month ago Peter Soetens Add propagateNeedsSignal function.<br/>
         
           8486fe6 1 year, 1 month ago Peter Soetens fix for bug #979: added missing public keyword.<br/>
         
           55a94d0 1 year, 1 month ago Peter Soetens scripting: fix bug reported on ML of hanging script operations.<br/>
         
           cf0014e 1 year, 2 months ago Peter Soetens doc: more release note updates.<br/>
         
           8c41119 1 year, 2 months ago Peter Soetens doc: release notes and API doc updates.<br/>
         
           b7ecb1c 1 year, 2 months ago Peter Soetens operations: support collecting arguments up to 6<br/>
         
           8590ad6 1 year, 2 months ago Peter Soetens corba: document TaskContextFactory.<br/>
         
           433ed5f 1 year, 2 months ago Peter Soetens debian: add ComponentLoader.hpp to install file.<br/>
         
           04a1564 1 year, 2 months ago Peter Soetens debian: package version 2.6.0-0<br/>
         
           5b8d8dd 1 year, 2 months ago Peter Soetens deployment: fixup default component path for ROS debian packages<br/>
         
           2e1784e 1 year, 2 months ago Peter Soetens Fixup previous patch.<br/>
         
           85643b9 1 year, 2 months ago Peter Soetens operations: reorganize code such that local operation objects are lighter code-size<br/>
         
           0ab6990 1 year, 2 months ago Peter Soetens operations: reorganize code such that local operation objects are lighter code-size<br/>
         
           eb6c491 1 year, 2 months ago Peter Soetens internal: code cleanup and re-ordering in BindStorage<br/>
         
           160defc 1 year, 2 months ago Peter Soetens cmake: if IS_ROS_PACKAGE and generating for CDT, force the output paths<br/>
         
           f6dd835 1 year, 2 months ago Peter Soetens doc: initial 2.6 release notes<br/>
         
           dfb6fab 1 year, 2 months ago Peter Soetens scripting: fixed ValueParser for PropertyBag properties that are owned by services<br/>
         
           97649cc 1 year, 2 months ago Peter Soetens ports: no longer cache the InputPortSource<br/>
         
           f0038e7 1 year, 2 months ago Peter Soetens ports: provide InputPort::getDataSample()<br/>
         
           531e5f3 1 year, 2 months ago Peter Soetens internal: make InputPortSource assignable<br/>
         
         </td></tr>
       
       



       <tr class="name" id="rtt_typelib">
         <th>rtt_typelib</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="36"> 4 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_36"><td>
         
           a4ec963 8 months ago Sylvain Joyeux Merge remote-tracking branch 'orocos/master'<br/>
         
           5895635 8 months ago Ruben Smits cmake: add NO_ROS_PACKAGE statement since UseOrocos.cmake gets confused in a plain cmake catkin build<br/>
         
           328add1 9 months ago Ruben Smits catkin: provide catkin compatible package.xml file<br/>
         
           3f45c9a 10 months ago Peter Soetens cmake: remove ROS specific build instructions and educate the user.<br/>
         
         </td></tr>
       
       



       <tr class="name" id="slam/envire">
         <th>slam/envire</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="37"> 4 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_37"><td>
         
           f3cb5ca 4 months ago Sylvain Joyeux addDataHandler is private API, use addPlugin<br/>
         
           0ffb55c 4 months ago Sylvain Joyeux Fix adding icp directory<br/>
         
           e3a713e 5 months ago Sylvain Joyeux fixed cell extends initalization<br/>
         
           50e4050 5 months ago Sylvain Joyeux viz: remove unnecessary call to setNormalIndices/getVertexIndices<br/>
         
         </td></tr>
       
       







       <tr class="name" id="slam/graph_slam">
         <th>slam/graph_slam</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="38"> 1 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_38"><td>
         
           90ff5d7 9 months ago Jakob Schwendner const_iterator was removed from mls<br/>
         
         </td></tr>
       
       





       <tr class="name" id="slam/odometry">
         <th>slam/odometry</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="39"> 13 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_39"><td>
         
           88ba52f 5 months ago Sylvain Joyeux base/odometry.h is deprecated, use headers from the odometry package directly<br/>
         
           8f38ce0 5 months ago Sylvain Joyeux moved code that was still left in base/types<br/>
         
           dff0fae 5 months ago Javier Hidalgo Carrio MotionModel: - Uncertainty Covariance matrix of the calculated quantities is added at  the navSolver method (nav. kinematics) - Improved some comments of the class<br/>
         
           57a2ad2 5 months ago Javier Hidalgo Carrio KinematicModel, improved documentation<br/>
         
           c509136 6 months ago Javier Hidalgo Carrio typo weight in comment<br/>
         
           3044b84 6 months ago Javier Hidalgo Carrio MotionModel is complete with the documentation (types corrected) LeastSquareError is now the cov error of the estimated quantities from the MotionModel. The weight matrix is only going to be the weight of each robot tree (still to come...)<br/>
         
           9908617 6 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/next'<br/>
         
           14f3f21 6 months ago Jakob Schwendner added optional dependency on gui/vizkit<br/>
         
           7a53dc5 6 months ago Javier Hidalgo Carrio Documented KinematicModel and MotionModel classes.<br/>
         
           070a844 6 months ago Javier Hidalgo Carrio getKinematics and getPointsInContact method to the MotionModel solver class<br/>
         
           4eb3a89 7 months ago Javier Hidalgo Removed unused classes<br/>
         
           d6769ec 7 months ago Javier Hidalgo Included 6DoF MotionModel based on Least-Squares solver<br/>
         
           5930735 8 months ago Jakob Schwendner removed unused member<br/>
         
         </td></tr>
       
       



       <tr class="name" id="slam/orogen/envire">
         <th>slam/orogen/envire</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="40"> 2 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_40"><td>
         
           3c9b372 5 months ago Sylvain Joyeux Revert "Add additional emitter for ports without using RTT::extras::ReadOnlyPointer"<br/>
         
           41917fe 9 months ago Thomas Roehr Add additional emitter for ports without using RTT::extras::ReadOnlyPointer<br/>
         
         </td></tr>
       
       





       <tr class="name" id="slam/orogen/odometry">
         <th>slam/orogen/odometry</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="41"> 3 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_41"><td>
         
           d2d66e0 5 months ago Sylvain Joyeux fix usage of base::odometry, the library does not include base/Odometry.hpp anymore<br/>
         
           b3c583d 8 months ago Jakob Schwendner updated orogen to use the transform_priority feature<br/>
         
           b91d903 11 months ago SeekurJr fixed odometry state validation check inside body2imu_enu callback<br/>
         
         </td></tr>
       
       











       <tr class="name" id="slam/quater_ikf">
         <th>slam/quater_ikf</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="42"> 1 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_42"><td>
         
           9652170 5 months ago Sylvain Joyeux remove crappy harmful horrible broken backward compatibility stuff<br/>
         
         </td></tr>
       
       









       <tr class="name" id="tools/metaruby">
         <th>tools/metaruby</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="43"> 40 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_43"><td>
         
           74d3423 4 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into next<br/>
         
           54de0e7 5 months ago Sylvain Joyeux gui: make load_template accept multiple arguments that get joined with File.join<br/>
         
           d531943 5 months ago Sylvain Joyeux html: do not unnecessarily add spaces in front of fragments when generating the page<br/>
         
           7c1ed16 5 months ago Sylvain Joyeux gui: allow passing default arguments to #render when registering rendering objects in Collection and RenderingManager<br/>
         
           94db7d1 5 months ago Sylvain Joyeux Revert "remove unneeded overloading of #clear_model in ModelAsModule"<br/>
         
           54bdb4c 5 months ago Sylvain Joyeux remove unneeded overloading of #clear_model in ModelAsModule<br/>
         
           69557b2 5 months ago Sylvain Joyeux fix #clear_model not deregistering the model from the constant hierarchy<br/>
         
           b644382 5 months ago Sylvain Joyeux don't call #deregister_submodels when there are no models to deregister<br/>
         
           0ae72de 5 months ago Sylvain Joyeux make permanent_model? false by default if the definition context (e.g. namespace) is non-permanent<br/>
         
           a7d008d 5 months ago Sylvain Joyeux gui: load kramdown, this is fully part of the HTML/GUI stuff<br/>
         
           ff1bdc8 5 months ago Sylvain Joyeux add dependency on kramdown for the HTML generation stuff<br/>
         
           4beea09 5 months ago Sylvain Joyeux gui: fix list rendering<br/>
         
           743a635 5 months ago Sylvain Joyeux doc<br/>
         
           3ce6f59 5 months ago Sylvain Joyeux fix some issues with parse_documentation_block<br/>
         
           4a02865 5 months ago Sylvain Joyeux gui: create generic model-level documentation API<br/>
         
           17bdb77 5 months ago Sylvain Joyeux test: make sure we call #flexmock_teardown on teardown<br/>
         
           c751a66 5 months ago Sylvain Joyeux ModelAsClass#setup_submodel was called twice when in #new_submodel<br/>
         
           94fed36 6 months ago Sylvain Joyeux define LIB_DIR to filter metaruby code out in Roby<br/>
         
           636ab66 6 months ago Sylvain Joyeux support passing options to #setup_submodel<br/>
         
           c5fe101 6 months ago Sylvain Joyeux gui: implement generic hyperlink and forward/backward browsing in ModelBrowser<br/>
         
           78def04 6 months ago Sylvain Joyeux gui: remove the ability for Page#initialize to get a WebView<br/>
         
           69e0b7b 6 months ago Sylvain Joyeux gui: create a Collection base class for rendering collection of other models<br/>
         
           119c17c 6 months ago Sylvain Joyeux gui: refactor the model browser code into a rendering manager and the GUI part<br/>
         
           152f106 6 months ago Sylvain Joyeux gui: account for libraries that have autoloaded modules and fail to load them<br/>
         
           7baaf7c 6 months ago Sylvain Joyeux gui: make the ressource directory configurable<br/>
         
           cc47f8c 6 months ago Sylvain Joyeux html: many improvements to the Page class<br/>
         
           d88d484 6 months ago Sylvain Joyeux gui: pass rendering options to the render object in to_html and to_html_body<br/>
         
           35174ea 6 months ago Sylvain Joyeux gui: easier way to create HTML buttons that are not toggle buttons<br/>
         
           6a4d3ae 6 months ago Thomas Roehr Require test/unit<br/>
         
           5b6aa23 6 months ago Thomas Roehr Adapt for gem packaging<br/>
         
           6aba808 6 months ago Thomas Roehr Adapt markdown<br/>
         
           6b8816a 6 months ago Sylvain Joyeux gui: allow creating only the HTML body instead of the whole HTML page<br/>
         
           fce58d8 7 months ago Sylvain Joyeux fix registration tests<br/>
         
           98b65d2 7 months ago Sylvain Joyeux add DSLs.find_through_method_missing<br/>
         
           be248a9 7 months ago Sylvain Joyeux remove confusing and now-irrelevant comment<br/>
         
           5f8995d 7 months ago Sylvain Joyeux html: add style for documentation on top of the documented item<br/>
         
           688516d 7 months ago Sylvain Joyeux html: fix style for render_item(text)<br/>
         
           03791ae 7 months ago Sylvain Joyeux html: define Page.to_html<br/>
         
           513a689 7 months ago Sylvain Joyeux make GUI::HTML::Page usable without a Qt display context<br/>
         
           34c5028 7 months ago Sylvain Joyeux add the DSLs module, which contains generically useful tools for embedded DSLs<br/>
         
         </td></tr>
       
       



       <tr class="name" id="tools/orocos.rb">
         <th>tools/orocos.rb</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="44"> 42 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_44"><td>
         
           55ca955 23 minutes ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/stable' into next<br/>
         
           d64fb5c 8 weeks ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/stable' into next<br/>
         
           7918c67 9 weeks ago Sylvain Joyeux fix crash in hash-to-policy conversion when the symbol given as :type is invalid (closes #229)<br/>
         
           d37f779 3 months ago Javier Hidalgo Carrio fix loading of runtime files from oroGen extensions<br/>
         
           c8dc3ef 4 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into next<br/>
         
           19fedb9 5 months ago Sylvain Joyeux add the --gdbserver, --valgrind and --help options to Scripts.common_optparse_setup<br/>
         
           54a3a2a 5 months ago Sylvain Joyeux document options in Orocos::Scripts.common_optparse_setup<br/>
         
           e4a0972 5 months ago Sylvain Joyeux make #each_task without a block return an enumerator<br/>
         
           9792585 5 months ago Sylvain Joyeux define PortBase#to_s<br/>
         
           131320b 5 months ago Sylvain Joyeux better error message in PortBase#connect_to<br/>
         
           391b742 5 months ago Matthias Goldhoorn find_port: only find ports where the name match if no RegExp is given<br/>
         
           7b58dad 5 months ago Thomas Roehr Fix ros topic disconnect_from<br/>
         
           d3383bb 5 months ago Sylvain Joyeux define Orocos.orocos_type_for<br/>
         
           a333f8b 5 months ago Sylvain Joyeux fix method name<br/>
         
           322c23b 5 months ago Sylvain Joyeux fix documentation<br/>
         
           c5c22f2 5 months ago Sylvain Joyeux fix #model on RubyTaskContext<br/>
         
           7a09507 6 months ago Sylvain Joyeux fix typelib_from_yaml_array<br/>
         
           b2ae498 6 months ago Sylvain Joyeux clarify documentation for find_typekit_plugin_paths<br/>
         
           44077a8 6 months ago Sylvain Joyeux conf: allow explicitly providing the model names<br/>
         
           af00797 6 months ago aduda Replay: add support for generating log markers based on custom rules<br/>
         
           9f79451 6 months ago aduda Revert "temp commit"<br/>
         
           fb17f8a 6 months ago aduda Revert "Replay: add support for generating log markers based on custom rules"<br/>
         
           58bb7c7 6 months ago aduda Replay: add support for generating log markers based on custom rules<br/>
         
           c0d9b4a 6 months ago Alexander Duda temp commit<br/>
         
           160d480 6 months ago Matthias Goldhoorn Extended error message for invalid configuration settings<br/>
         
           13fcff5 6 months ago Matthias Goldhoorn Added missing PropertyChangeRejected class<br/>
         
           2090488 6 months ago Sylvain Joyeux fix usage of Orocos.name_service.get<br/>
         
           2980103 6 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/next'<br/>
         
           16f55c4 6 months ago Alexander Duda TaskContext: fix typo<br/>
         
           4b761a5 6 months ago Alexander Duda TaskContextProxy: add method_missing and respond_to_missing<br/>
         
           d3b15af 6 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/next'<br/>
         
           a37f02a 6 months ago Sylvain Joyeux fix model= for task context that are not associated to a project<br/>
         
           6aae717 6 months ago Sylvain Joyeux refactor TaskConfiguration to have the typelib-from-yaml code be independent<br/>
         
           a26633e 6 months ago Sylvain Joyeux bin: use the recommended way to set the CORBA NS ip in orops<br/>
         
           667462c 7 months ago Sylvain Joyeux define RemoteProcess#task<br/>
         
           db52557 7 months ago Sylvain Joyeux define RubyProcess#task<br/>
         
           f342e0f 7 months ago Sylvain Joyeux make sure we don't start the same task twice in RubyProcess#start<br/>
         
           03565c3 7 months ago Sylvain Joyeux use Orocos.name_service.get instead of TaskContext.get<br/>
         
           42938b8 7 months ago Sylvain Joyeux fix error message in RubyProcessServer#load_orogen_deployment<br/>
         
           aad9bc1 7 months ago Sylvain Joyeux fix TaskContextBase#initialize when a model is explicitely given<br/>
         
           5e264de 7 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/next'<br/>
         
           cedda5f 7 months ago Matthias Goldhoorn Extended error output in case of an crashing component<br/>
         
         </td></tr>
       
       



       <tr class="name" id="tools/pocolog">
         <th>tools/pocolog</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="45"> 1 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_45"><td>
         
           7edc0b2 5 months ago Sylvain Joyeux accept both start and end samples in --extract --streams STREAM:start:end<br/>
         
         </td></tr>
       
       



       <tr class="name" id="tools/roby">
         <th>tools/roby</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="46"> 167 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_46"><td>
         
           1a05441 4 weeks ago Sylvain Joyeux app: better error message formatting in add-robot when the current directory is not a Roby app<br/>
         
           89e1bcb 4 weeks ago Sylvain Joyeux app: suggest that one has to run roby init to make a folder a roby app (closes #401)<br/>
         
           a9abcf4 8 weeks ago Sylvain Joyeux core: accept any enumerable as model list in #depends_on<br/>
         
           93223a4 3 months ago Sylvain Joyeux coord: fix availability of transition! within the poll blocks<br/>
         
           df3c6d7 4 months ago Sylvain Joyeux core: do not attempt to remove a non-existing edge<br/>
         
           0dbac66 4 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into next<br/>
         
           5c2879e 5 months ago Sylvain Joyeux core: fix usage of the NoSuchChild exception in #child_from_role<br/>
         
           ea6ce1e 5 months ago Sylvain Joyeux core: better error reporting when #child_from_role is called with an unknown child<br/>
         
           cbd5429 5 months ago Sylvain Joyeux app: factor out the code that handles the ignore_all_load_errors? flag<br/>
         
           83b536e 5 months ago Sylvain Joyeux actions: allow action methods to return objects that respond to #as_plan<br/>
         
           29d6fc7 5 months ago Sylvain Joyeux define TaskArguments#assigned_arguments<br/>
         
           fbebea5 5 months ago Sylvain Joyeux document TaskArguments<br/>
         
           5d8402e 5 months ago Sylvain Joyeux call reload_actions and reload_models in Roby.execute<br/>
         
           0ccd434 5 months ago Sylvain Joyeux shell: mark reload_planners as deprecated<br/>
         
           8ce92ff 5 months ago Sylvain Joyeux shell: add reload_actions to the help message<br/>
         
           5fe5e80 5 months ago Sylvain Joyeux shell: define reload_models on the shell interface<br/>
         
           7c894d6 5 months ago Sylvain Joyeux app: in #clear_models, constant deregistration is taken care by metaruby's Registration#clear_model now<br/>
         
           91164dd 5 months ago Sylvain Joyeux fix Actions::Models::Interface being referred to instead of Actions::Interface<br/>
         
           1096a97 5 months ago Thomas Roehr implement reload_actions on the shell interface<br/>
         
           4145c95 5 months ago Sylvain Joyeux coord: fix corner-case behaviour of action state machines if the root task finishes before the child tasks<br/>
         
           e1bff8f 5 months ago Sylvain Joyeux log: define #name on DRobyModel<br/>
         
           8c577e5 5 months ago Sylvain Joyeux log task argument update events<br/>
         
           e4b79d1 5 months ago Sylvain Joyeux bin: show the decode subcommand of roby-log in the help message<br/>
         
           882b482 5 months ago Sylvain Joyeux core: make TaskArguments#each_assigned_argument return an enumerator if called without a block<br/>
         
           c792ffd 5 months ago Sylvain Joyeux test: add some missing tests<br/>
         
           70e2b4a 5 months ago Sylvain Joyeux use #each_assigned_argument (formerly #each_static) instead of accessing TaskArguments#values directly<br/>
         
           c21ed1f 5 months ago Sylvain Joyeux test: create a separate test case for TaskArguments<br/>
         
           a84d38c 5 months ago Sylvain Joyeux test,core: fix behaviour of Task#has_argument? in presence of delayed arguments<br/>
         
           773b078 5 months ago Sylvain Joyeux actions: make #use_library capable of importing actions from another action interface<br/>
         
           8e0b953 5 months ago Sylvain Joyeux remove the in-tree plugins<br/>
         
           0981526 5 months ago Sylvain Joyeux remove plugin doc generation for now<br/>
         
           4c966f1 5 months ago Sylvain Joyeux fix loads of issues with documentation<br/>
         
           e08acab 5 months ago Sylvain Joyeux gui: display the task model documentation on top of the Task model view<br/>
         
           f23af09 5 months ago Sylvain Joyeux shut up some of the -w warnings<br/>
         
           95aead1 5 months ago Sylvain Joyeux dist: convert to using rake-compiler<br/>
         
           fd4a394 5 months ago Sylvain Joyeux sched: better status messages for the temporal scheduler<br/>
         
           156c4e8 6 months ago Sylvain Joyeux test: trivial fix<br/>
         
           d1c0042 6 months ago Sylvain Joyeux coord: emit the success event on the fault response task at the end of a successful handler<br/>
         
           9aa29e5 6 months ago Sylvain Joyeux coord: implement the try_again final action in fault response handlers<br/>
         
           5e9d41f 6 months ago Sylvain Joyeux coord: add way to hook into the removal of fault response tables<br/>
         
           86b5335 6 months ago Sylvain Joyeux coord: allow for addition of fault response tables through transactions<br/>
         
           85f49dc 6 months ago Sylvain Joyeux core: split Transaction#commit_transaction into two methods to allow for extensions<br/>
         
           92509b7 6 months ago Sylvain Joyeux doco<br/>
         
           93697b4 6 months ago Sylvain Joyeux actions: fix how fault response tables get attached to plan<br/>
         
           dc72b03 6 months ago Sylvain Joyeux core: add API to remove triggers from plans<br/>
         
           763435a 6 months ago Sylvain Joyeux doco<br/>
         
           91e2313 6 months ago Sylvain Joyeux core: improve pretty-printing of error constraint explanations<br/>
         
           138c90a 6 months ago Sylvain Joyeux core: in garbage_collect, collect tasks that have finished and/or no parents<br/>
         
           f59c6d0 6 months ago Sylvain Joyeux coord: fix behaviour of action scripts' wait instruction w.r.t. replacement<br/>
         
           cae5497 6 months ago Sylvain Joyeux test: make assert_raises check the content of SynchronousEventProcessingMultipleErrors<br/>
         
           f93ea29 6 months ago Sylvain Joyeux core: major improvement in debug output while propagating exceptions<br/>
         
           d515c62 6 months ago Sylvain Joyeux core: implement on_replace semantic for if_unreachable<br/>
         
           ec89283 6 months ago Sylvain Joyeux core: make sure that the queries are marshallable<br/>
         
           e84a847 6 months ago Sylvain Joyeux core: define #concrete_model as a parallel to Syskit<br/>
         
           b32a257 6 months ago Sylvain Joyeux core: rework the exception handling code<br/>
         
           eb4f5ed 6 months ago Sylvain Joyeux core: do not modify the plan in Plan#locally_useful_tasks<br/>
         
           a3d164a 6 months ago Sylvain Joyeux test: call flexmock_teardown as early as possible<br/>
         
           937f44d 6 months ago Sylvain Joyeux test: in #assert_raises, pretty-print the exceptions to make sure they can be pretty-printed<br/>
         
           b849656 6 months ago Sylvain Joyeux doc: fix warnings reported by yard<br/>
         
           db7ca74 6 months ago Sylvain Joyeux coord: fix attaching fault handlers to tasks in #activate<br/>
         
           c2ea7d1 6 months ago Sylvain Joyeux core: allow creating task service matchers with TaskService.match<br/>
         
           875c40e 6 months ago Sylvain Joyeux coord: allow to associate fault response tables to the lifetime of a coordination model<br/>
         
           67bcf5f 6 months ago Sylvain Joyeux coord: validate arguments in Task#use_fault_response_table<br/>
         
           f80765b 6 months ago Sylvain Joyeux coord: get the argument handling code out of Models::Base so that we can reuse it in FaultResponseTable<br/>
         
           e455925 6 months ago Sylvain Joyeux coord: allow associating a fault response table to the lifetime of a task<br/>
         
           9a6543b 6 months ago Sylvain Joyeux coord: fix passing the table arguments to the fault handlers<br/>
         
           6ad99d3 6 months ago Sylvain Joyeux core: call new triggers on the tasks that are already in the plan<br/>
         
           fa912d7 6 months ago Sylvain Joyeux coord: support a more DSL-like API to set the coordination model root<br/>
         
           1db711f 6 months ago Sylvain Joyeux coord: support default argument values in coordination models<br/>
         
           49d8142 6 months ago Sylvain Joyeux coord: rework the usage of #new_submodel in coordination models to match metaruby guidelines<br/>
         
           50b2d95 6 months ago Sylvain Joyeux coord: fix test for dead instruction emission, calling stop! now cancels all scripts<br/>
         
           fd8c88b 6 months ago Sylvain Joyeux app: mark utilrb and metaruby as part of the framework code for backtrace filtering<br/>
         
           0f641eb 6 months ago Sylvain Joyeux coord: give a way to perform some additional setup on instanciated tasks<br/>
         
           809b767 6 months ago Sylvain Joyeux coord: fix error message<br/>
         
           8c815e0 6 months ago Sylvain Joyeux coord: allow for coordination objects to share the model-to-instance mappings<br/>
         
           91aec2e 6 months ago Sylvain Joyeux coord: define Task.to_coordination_task to get a properly types TaskFromAsPlan object<br/>
         
           94bec84 6 months ago Sylvain Joyeux coord: properly handle replacement in coordination objects<br/>
         
           fabe6f0 6 months ago Sylvain Joyeux doc: specify the return type of #describe<br/>
         
           86c3c20 6 months ago Sylvain Joyeux actions: fix tests, empty state machines are not allowed anymore<br/>
         
           cc6b9f7 6 months ago Sylvain Joyeux actions: implement default value and argument validation for actions<br/>
         
           141b93c 6 months ago Sylvain Joyeux coord: deregister the poll block when a PollUntil script instruction gets cancelled<br/>
         
           2371dc3 6 months ago Sylvain Joyeux coord: test that we can transition using events from task-level dependencies<br/>
         
           f15c054 6 months ago Sylvain Joyeux coord: validate state machines in #parse<br/>
         
           9c0f143 6 months ago Sylvain Joyeux core: ensure that a task's unreachability handlers are called after all the event handlers<br/>
         
           723c433 6 months ago Sylvain Joyeux coord: document task script API<br/>
         
           4252aab 6 months ago Sylvain Joyeux coord: evaluate script poll blocks in the context of the root task<br/>
         
           da276f8 6 months ago Sylvain Joyeux core: in #clear, make sure we don't finalize running tasks<br/>
         
           49fc002 6 months ago Sylvain Joyeux core: overloading #new_submodel does not play well with model reloading. Overload #setup_submodel instead<br/>
         
           4c16fb4 6 months ago Sylvain Joyeux gui: in ActionInterface, create links to the returned types<br/>
         
           d0a1c1f 6 months ago Sylvain Joyeux gui: create a model view for action interfaces<br/>
         
           7bc7d4c 6 months ago Sylvain Joyeux documentation fixes<br/>
         
           deb5656 6 months ago Sylvain Joyeux Fix TaskWithDependencies#depends_on<br/>
         
           4118cb8 6 months ago Sylvain Joyeux gui: honor the standard :external_objects option from MetaRuby<br/>
         
           71a9636 6 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/next'<br/>
         
           d034c34 6 months ago Sylvain Joyeux actions: fix action-level creation of action script and state machine<br/>
         
           7b2c8ec 7 months ago Sylvain Joyeux coordination: remove debug output<br/>
         
           6877bb8 7 months ago Sylvain Joyeux core: define plan triggers<br/>
         
           57203de 7 months ago Sylvain Joyeux core: fix error messages<br/>
         
           167efcb 7 months ago Sylvain Joyeux core: define #merge_info for ErrorHandling. Convert to new-style relations.<br/>
         
           3369148 7 months ago Sylvain Joyeux core: document InstanceHandler (and, in particular, the :on_replace option)<br/>
         
           b7f6f18 7 months ago Sylvain Joyeux core: validate that the 'forced' GC tasks are actually part of our plan<br/>
         
           9ac6467 7 months ago Sylvain Joyeux coordination: in scripts, disable all instructions when the supporting task is finished<br/>
         
           dbd1441 7 months ago Sylvain Joyeux coordination: always declare fault response tasks as error handling tasks<br/>
         
           40db7f2 7 months ago Sylvain Joyeux coordination: in FaultHandler#activate, handle the case where we match something but have no response location<br/>
         
           24f782d 7 months ago Sylvain Joyeux coordination: in Models::Base#new_submodel, make sure that #root and #arguments are properly set when we evaluate the block<br/>
         
           4a13c51 7 months ago Sylvain Joyeux actions: in Interface#initialize, delegate the attachment to the given plan to a separate method<br/>
         
           2ecbff9 7 months ago Sylvain Joyeux core: fix the update of #task_events in the new Plan#add code<br/>
         
           bf1ef4f 7 months ago Sylvain Joyeux core: create graph-modification hooks on Plan<br/>
         
           d88e8e0 7 months ago Sylvain Joyeux core: properly handle exceptions thrown in #add_task_set and #add_event_set<br/>
         
           d2aa504 7 months ago Sylvain Joyeux reduce some pathological performance problems when adding objects to big plans<br/>
         
           6f7fe71 7 months ago Sylvain Joyeux test: be more informative when we fail to cleanup the plan<br/>
         
           b4c7a8b 7 months ago Sylvain Joyeux better error message when trying to call start on a failed_to_start task<br/>
         
           834619a 7 months ago Sylvain Joyeux improve #to_s for arguments from object<br/>
         
           47bcb8d 7 months ago Sylvain Joyeux coordination: remove the action_interface_model from #instanciate on coordination tasks<br/>
         
           826655f 7 months ago Sylvain Joyeux core: call exceptions in ExecutionEngine#add_error when outside propagation contexts<br/>
         
           4aa435e 7 months ago Sylvain Joyeux core: make sure that Plan#add_error and ExecutionEngine#add_error are strictly equivalent<br/>
         
           3e9e2e0 7 months ago Sylvain Joyeux Merge ../../../syskit/tools/roby<br/>
         
           e466418 7 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/next'<br/>
         
           35e4d08 7 months ago Sylvain Joyeux coordination: make Roby::Task.script return the script object<br/>
         
           946af06 7 months ago Sylvain Joyeux core: ignore calls to EventGenerator#unreachable! on generators that are already unreachable<br/>
         
           26f587e 7 months ago Sylvain Joyeux coordination: the child model resolved from the model task must take precedence w.r.t. the instance child<br/>
         
           ccca4bb 7 months ago Sylvain Joyeux test: minor updates<br/>
         
           4feecde 7 months ago Sylvain Joyeux coordination: fix some #to_s<br/>
         
           66df996 7 months ago Sylvain Joyeux coordination: must start the fault response task in #activate<br/>
         
           d02b40d 7 months ago Sylvain Joyeux coordination: fix handling of fault response tables in Plan<br/>
         
           01073e5 7 months ago Sylvain Joyeux queries: fix behaviour of LocalizedErrorMatcher#with_origin w.r.t. event match generalization<br/>
         
           2286b6f 7 months ago Sylvain Joyeux coordination: make sure the handling of event and children is consistent<br/>
         
           d5a125c 7 months ago Sylvain Joyeux move all the coordination models into their own namespace<br/>
         
           38b2646 7 months ago Sylvain Joyeux coordination: implement timeouts in scripts<br/>
         
           5540c64 7 months ago Sylvain Joyeux test: make #process_events set cycle_start<br/>
         
           d0e71c1 7 months ago Sylvain Joyeux core: implement ExecutionEngine#delayed<br/>
         
           35d4698 7 months ago Sylvain Joyeux reimplement task scripts using the execution context<br/>
         
           115381b 7 months ago Sylvain Joyeux fix the roby add-robot command<br/>
         
           30a7740 7 months ago Sylvain Joyeux core,test: fix error_handling_relation test<br/>
         
           3749917 7 months ago Sylvain Joyeux core: filter in one pass<br/>
         
           8d61c02 7 months ago Sylvain Joyeux actions: fix Actions::Task#to_s when action_interface is not yet set<br/>
         
           5707b09 7 months ago Sylvain Joyeux integrate fault response tables<br/>
         
           ef05399 7 months ago Sylvain Joyeux doc: move the action coordination models into their own page<br/>
         
           78f3442 7 months ago Sylvain Joyeux core: in EventGenerator#call_handlers, pass LocalizedError unchanged<br/>
         
           bee1a8c 7 months ago Sylvain Joyeux actions: create action-scripts<br/>
         
           3ac3b08 7 months ago Sylvain Joyeux core: define some #to_s for the elements in ActionCoordination/ExecutionContext<br/>
         
           c3d712f 7 months ago Sylvain Joyeux actions: move removal of the current action-task into ActionCoordination<br/>
         
           e75a857 7 months ago Sylvain Joyeux actions: fix default dependency options in ActionCoordination<br/>
         
           ee7d4ef 7 months ago Sylvain Joyeux core: fix adding new event handlers from within a handler<br/>
         
           a8d90e0 7 months ago Sylvain Joyeux core: make sure #unreachable! behaves like #emit and #call when called outside of a propagation context<br/>
         
           7f31c19 7 months ago Sylvain Joyeux actions: move all the common action coordination code to a new ActionCoordination class<br/>
         
           b14900b 7 months ago Sylvain Joyeux move the metamodels of Roby::Actions into Roby::Actions::Models<br/>
         
           bc52a18 7 months ago Sylvain Joyeux test: fix obsolete / missing test files in suite_core and suite_state<br/>
         
           502b0d6 7 months ago Sylvain Joyeux core: use the new exception matchers to specify exception handlers<br/>
         
           c56f2c7 7 months ago Sylvain Joyeux exceptions: use execution exception matchers to define exception handlers<br/>
         
           ae572b3 7 months ago Sylvain Joyeux queries: add matcher for execution exceptions<br/>
         
           eaee9a4 7 months ago Sylvain Joyeux queries: fix predicate method generation<br/>
         
           33b2226 7 months ago Sylvain Joyeux test: add some suites that were missing in suite_core<br/>
         
           726dd8e 7 months ago Sylvain Joyeux define .match and .to_execution_exception_matcher as the standard methods to get a model matcher and/or the corresponding EE matcher<br/>
         
           9670cf4 7 months ago Sylvain Joyeux queries: add missing tests in suite_queries.rb<br/>
         
           4290e76 7 months ago Sylvain Joyeux queries: create a matcher for LocalizedError and its subclasses<br/>
         
           6b58fa0 8 months ago Sylvain Joyeux queries: declare #match and #generalized_match on Models::TaskEvent to create task event generator matchers<br/>
         
           a9ba5ee 8 months ago Sylvain Joyeux test: in test/common, load pry first<br/>
         
           608b311 8 months ago Sylvain Joyeux queries: implement event generalization match in task event generator matchers<br/>
         
           e628463 8 months ago Sylvain Joyeux queries: in Query, test for plan predicates first<br/>
         
           ce1542b 8 months ago Sylvain Joyeux queries: move predicate match support to MatcherBase<br/>
         
           e4949dc 8 months ago Sylvain Joyeux queries: remove EventMatcher, it is unimplemented and not needed right now<br/>
         
           1c2e6f9 8 months ago Sylvain Joyeux queries: implement task event generator matchers<br/>
         
           4e2e9c6 8 months ago Sylvain Joyeux test: generic check of droby-marshalling for an object<br/>
         
           725e423 8 months ago Sylvain Joyeux integrate simplecov and make pry loading configurable<br/>
         
           67430cd 8 months ago Sylvain Joyeux move some DRoby-marshalling code to their respective classes<br/>
         
           e181c38 8 months ago Sylvain Joyeux refactor the query support<br/>
         
         </td></tr>
       
       



       <tr class="name" id="tools/service_discovery">
         <th>tools/service_discovery</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="47"> 5 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_47"><td>
         
           313d874 7 months ago Jakob Schwendner re-added build fix for 13.04<br/>
         
           bd33d22 7 months ago Thomas Roehr Fix pkgconfig file generation<br/>
         
           bb0a76c 7 months ago Thomas Roehr Fix boost regex linking<br/>
         
           0e58963 7 months ago Thomas Roehr Use rock_add_source_dir<br/>
         
           fb5247c 7 months ago Thomas Roehr Update to rock layout and perform some cleanup<br/>
         
         </td></tr>
       
       



       <tr class="name" id="tools/syskit">
         <th>tools/syskit</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="48"> 218 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_48"><td>
         
           2d45bdf 6 weeks ago Jens Renken define Component.prefer_deployed_tasks<br/>
         
           a8cdd14 6 weeks ago Jens Renken devices: define prefer_deployed_tasks to replace use_deployments<br/>
         
           28a4f3a 6 weeks ago Jens Renken net_gen: fix logger handling with specialized models<br/>
         
           04bcbcd 10 weeks ago Steffen Planthaber fix properly passing spawn_options to the deployments<br/>
         
           af7372f 4 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/next'<br/>
         
           a7bf35f 4 months ago Sylvain Joyeux resolve composition children on task instances from the model in which the child is defined<br/>
         
           c280b1c 4 months ago Sylvain Joyeux actions: define #to_instance_requirements on action models<br/>
         
           dd4992d 4 months ago Sylvain Joyeux models: fix passing the _child accessors to #overload in specialization context<br/>
         
           67a810d 4 months ago Sylvain Joyeux improve error messages<br/>
         
           10893b5 4 months ago Sylvain Joyeux update README<br/>
         
           8fffc5b 5 months ago Sylvain Joyeux test: trivial fix<br/>
         
           d9964e5 5 months ago Sylvain Joyeux fix selection validation in InstanceRequirements#use for objects that are not models<br/>
         
           d580dca 5 months ago Sylvain Joyeux gui: fix show/hide loggers<br/>
         
           f95c432 5 months ago Sylvain Joyeux gui: fix excluded_models handling in dot generation<br/>
         
           a5a01ce 5 months ago Sylvain Joyeux gui: implement a retry scheme for graphviz generation<br/>
         
           77a7642 5 months ago Sylvain Joyeux gui: accept actions that generate syskit plan-patterns in syskit instanciate<br/>
         
           177523f 5 months ago Sylvain Joyeux improve error reporting in InstanceRequirements#use when a non-existent child name is listed<br/>
         
           97db573 5 months ago Sylvain Joyeux app: isolate errors when loading oroGen configuration files<br/>
         
           6aaea81 5 months ago Sylvain Joyeux scripts: ignore load errors in syskit instanciate<br/>
         
           e6bdbde 5 months ago Sylvain Joyeux gui: display the error message in place of the SVG when dot fails or crashes<br/>
         
           2950e85 5 months ago Sylvain Joyeux validate compatibility of port types in Models::Port#connect_to<br/>
         
           d764b8a 5 months ago Sylvain Joyeux in InputWriter#write, validate the given samples if the writer is not yet accessible<br/>
         
           fa359ac 5 months ago Sylvain Joyeux style fix<br/>
         
           961208f 5 months ago Sylvain Joyeux raise if port mappings are given that are not name-to-name mappings<br/>
         
           9ccced3 5 months ago Sylvain Joyeux do not automatically map multiple ports from a given service to the same port on the component<br/>
         
           3c75ce3 5 months ago Sylvain Joyeux do not store selected instances in Task#requirements<br/>
         
           5f21ff9 5 months ago Sylvain Joyeux do not list unset arguments in the requirements returned by Component#to_instance_requirements<br/>
         
           9a6425a 5 months ago Sylvain Joyeux fix Composition#find_required_composition_child when the child is defined in the composition and not present in the plan<br/>
         
           51ea319 5 months ago Sylvain Joyeux use #fullfills? instead of #&lt;= in DependencyInjection#merge<br/>
         
           887ffbb 5 months ago Sylvain Joyeux do not store instances in Composition#child_selection when use() refers to a composition child<br/>
         
           f3047fc 5 months ago Sylvain Joyeux test: fix w.r.t. change in ConfiguredDeployment#initialize<br/>
         
           2843318 5 months ago Sylvain Joyeux models: Models::BoundDataService are also proper component models, update Models.is_model?<br/>
         
           39da3fa 5 months ago Sylvain Joyeux test: the ability to auto-create device models in #driver_for has been removed, fix tests<br/>
         
           6384a2a 5 months ago Sylvain Joyeux app: detect duplicate and conflicting deployments<br/>
         
           e8f8185 5 months ago Sylvain Joyeux doc<br/>
         
           2823260 5 months ago Sylvain Joyeux gui: do show optional children when displaying compositions<br/>
         
           e91c187 5 months ago Sylvain Joyeux action: fix argument passing in Actions::Models::Action#plan_pattern<br/>
         
           2bd33ba 5 months ago Sylvain Joyeux netgen: fix computation of deployed models<br/>
         
           a39294d 5 months ago Sylvain Joyeux raise specific exception for invalid selections in InstanceRequirements#use<br/>
         
           70348a0 5 months ago Sylvain Joyeux remove duplicate call to #find_child<br/>
         
           1e9873e 5 months ago Sylvain Joyeux scripts: make syskit doc behave as browse w.r.t. loading all models<br/>
         
           8b235d4 5 months ago Sylvain Joyeux gui: display properly formatted InstanceRequirements objects<br/>
         
           0290afa 5 months ago Sylvain Joyeux app: make sure that the Ruby process' orocos logfile gets into the log dir<br/>
         
           1815621 5 months ago Sylvain Joyeux define #add_optional<br/>
         
           8a65395 5 months ago Sylvain Joyeux documentation<br/>
         
           acececd 5 months ago Sylvain Joyeux gui: show unset task arguments as well<br/>
         
           92772b7 5 months ago Sylvain Joyeux gui: fix formatting of multi-line task annotations<br/>
         
           6c606b4 5 months ago Sylvain Joyeux fix has_dynamic_*_port when the port type is an opaque<br/>
         
           5b4ecda 5 months ago Sylvain Joyeux make 'arguments' in the created action methods optional if the requirements have no required arguments<br/>
         
           627f2d3 5 months ago Sylvain Joyeux do not consider arguments from root models (TaskContext,Composition) as arguments for the actions<br/>
         
           f882b98 5 months ago Sylvain Joyeux gui: fix the rendering method for profile definitions<br/>
         
           164d3c2 5 months ago Sylvain Joyeux make syskit browse load only the relevant files by default<br/>
         
           07a1480 5 months ago Sylvain Joyeux remove the ability to call driver_for with a string<br/>
         
           119e3c0 5 months ago Sylvain Joyeux set the root data service models as permanent models explicitly<br/>
         
           8e5f32e 5 months ago Thomas Roehr gui: convert curly braces to brackets to allow proper display of Hash arguments<br/>
         
           ed9f67d 5 months ago Sylvain Joyeux add missing require<br/>
         
           1d2d9c9 5 months ago Sylvain Joyeux gui: don't show proxy tasks as producers/consumers of types<br/>
         
           2af5d60 5 months ago Sylvain Joyeux gui: fix profile display<br/>
         
           6151861 5 months ago Sylvain Joyeux test: fix test w.r.t. the introduction of specialization hints<br/>
         
           a7ca689 5 months ago Sylvain Joyeux freeze delayed arguments at the end of the component network generation<br/>
         
           1f2387d 5 months ago Sylvain Joyeux define #argument to declare new task arguments in a dynamic service block<br/>
         
           979e19e 5 months ago Sylvain Joyeux in Component#merge, instanciate new dynamic services using #require_dynamic_service<br/>
         
           79fbfd1 5 months ago Thomas Roehr Fix exception context<br/>
         
           933752c 5 months ago Sylvain Joyeux DI#selection_for: test for the validation of the selected task instances<br/>
         
           b2cd4d3 5 months ago Sylvain Joyeux use the more precise #required_composition_child_from_role in Composition#to_instance_requirements<br/>
         
           1f3a575 5 months ago Sylvain Joyeux abstract placeholders are proper component models, not "hidden" specializations<br/>
         
           dd62e5b 5 months ago Sylvain Joyeux fix #dataflow_change_handler when the child providing the exported port is already disconnected / removed<br/>
         
           28d5105 5 months ago Sylvain Joyeux remove dead code<br/>
         
           bd6a425 5 months ago Sylvain Joyeux fix specialization disambiguation<br/>
         
           e16ce5c 5 months ago Sylvain Joyeux gui: fix profile visualization<br/>
         
           62fe25c 5 months ago Matthias Goldhoorn test: add test for #overload<br/>
         
           ae75d72 5 months ago Matthias Goldhoorn don't cache the created specialization in SpecializationManager#instanciate<br/>
         
           1ab8aca 5 months ago Matthias Goldhoorn InstanceRequirements#composition_model? should use #base_model instead of #model<br/>
         
           905524c 5 months ago Matthias Goldhoorn gui: we still need to handle broken dot output<br/>
         
           c92e247 5 months ago Matthias Goldhoorn gui: do show component networks in instanciate even if there are errors<br/>
         
           1bccf7e 5 months ago Sylvain Joyeux scripts: fix syskit doc w.r.t. the changes in metaruby html generation<br/>
         
           c9fbffb 5 months ago Sylvain Joyeux gui: improve handling of compositions in the list of component that provide a service<br/>
         
           00edb74 5 months ago Sylvain Joyeux add the list of component that provide a service in the service model view<br/>
         
           0338745 5 months ago Sylvain Joyeux fix unnecessarily creating new specialized composition model for simple specializations<br/>
         
           c345613 5 months ago Sylvain Joyeux gui: don't create new specialized composition models when creating the specialization graph<br/>
         
           48644d3 5 months ago Sylvain Joyeux app: remove robot-definition code from Configuration<br/>
         
           65fe027 5 months ago Sylvain Joyeux remove robot-related code from Engine<br/>
         
           5e83b27 5 months ago Sylvain Joyeux gui: display main model documentation<br/>
         
           0ef1565 5 months ago Sylvain Joyeux in Component.as, raise if no service is found with the requested model<br/>
         
           5aceece 5 months ago Sylvain Joyeux remove unused code<br/>
         
           6b8110d 5 months ago Sylvain Joyeux fix Composition#specialize so that it can be used to both specialize the model and add composition specializations<br/>
         
           22a4e57 5 months ago Sylvain Joyeux fix some issues with specialization disambiguation<br/>
         
           219161d 5 months ago Sylvain Joyeux doc<br/>
         
           2466f8c 5 months ago Sylvain Joyeux in the DI class, use explicit service selections as a way to disambiguate the mappings<br/>
         
           f4947ad 5 months ago Sylvain Joyeux rename InstanceRequirements#use_deployments to #prefer_deployed_tasks<br/>
         
           ba8816c 5 months ago Sylvain Joyeux test: set 'process_name' on stubbed deployments<br/>
         
           ded6aea 5 months ago Sylvain Joyeux netgen: add a test suite for the logger configuration support<br/>
         
           4b1fa4b 5 months ago Sylvain Joyeux use selected services as a way to filter out ambiguous specialization selections<br/>
         
           094d144 5 months ago Sylvain Joyeux doc: fix documentation block formatting<br/>
         
           0117fe7 5 months ago Sylvain Joyeux in InstanceRequirements#use, fix validation of provided explicit child selections<br/>
         
           a4e4851 5 months ago Sylvain Joyeux fix relationship between composition subclassing and specialization<br/>
         
           6042cfe 5 months ago Sylvain Joyeux test: run the connection manager during tests<br/>
         
           5fe54a4 5 months ago Sylvain Joyeux test: verify that com busses are started and connected before the devices are started<br/>
         
           ebe6acf 6 months ago Sylvain Joyeux fix #deployment_hints for tasks that are not device drivers<br/>
         
           91605a4 6 months ago Sylvain Joyeux fix InstanceRequirements#fullfilled_model when the IR represent a bound data service<br/>
         
           4a9630a 6 months ago Sylvain Joyeux add #fullfilled_model on Models::BoundDataService<br/>
         
           0a7a06b 6 months ago Sylvain Joyeux fix applying configuration on specialized tasks<br/>
         
           5c43a5e 6 months ago Sylvain Joyeux fix InstanceRequirements#as_plan when the requirements point to a service<br/>
         
           f37b67f 6 months ago Sylvain Joyeux inherit deployment hints from the attached devices<br/>
         
           d2bbd65 6 months ago Sylvain Joyeux test: trivial fix<br/>
         
           e878fca 6 months ago Sylvain Joyeux doco<br/>
         
           5dd79a1 6 months ago Sylvain Joyeux coord: FaultResponseTable#attach_to is now a hook method, fix super call<br/>
         
           da4037a 6 months ago Sylvain Joyeux coord: apply new data monitoring tables added to transactions<br/>
         
           7846c47 6 months ago Sylvain Joyeux coord: improve lifetime management for data monitoring tables<br/>
         
           3758b11 6 months ago Sylvain Joyeux coord: allow giving fixed arguments to data monitoring tables used in fault response tables<br/>
         
           c2e665a 6 months ago Sylvain Joyeux netgen: fix inconsistent calls to createLoggingPort<br/>
         
           6355155 6 months ago Sylvain Joyeux fix deployment of components that have been specialized with Component#specialize<br/>
         
           f7fe15f 6 months ago Sylvain Joyeux app: fix log group handling<br/>
         
           0c3a837 6 months ago Sylvain Joyeux Component.find_all_data_services_from_type must return services of the required type, fix in case of submodels<br/>
         
           d9ac83e 6 months ago Sylvain Joyeux test: convert the tests for Component.find_all_data_services_from_type to rspec<br/>
         
           414bb0f 6 months ago Sylvain Joyeux implement #resolve and #try_resolve on Model&lt;DataService&gt;<br/>
         
           e78ed6a 6 months ago Sylvain Joyeux test: fault response / data monitoring tables now require two cycles to get attached<br/>
         
           cd51772 6 months ago Sylvain Joyeux coord: support passing arguments from the fault response tables to the data monitoring tables it uses<br/>
         
           cf9eced 6 months ago Sylvain Joyeux coord: adapt to the fixed usage of new_submodel in Roby proper<br/>
         
           d3ae0b0 6 months ago Sylvain Joyeux gui: fix exceptions raised by push_plan not showing up in the exception view<br/>
         
           884d655 6 months ago Sylvain Joyeux gui: workaround dot generating svgs with invalid characters in them<br/>
         
           277879d 6 months ago Matthias Goldhoorn Fix in error message for InvalidCompositionChildPort<br/>
         
           5ac9935 6 months ago Matthias Goldhoorn Fixed disabling of loggers<br/>
         
           c4dbe58 6 months ago Sylvain Joyeux in #resolve_deployment_ambiguity, do not call Component#deployment_hints repeatedly<br/>
         
           fb55a43 6 months ago Sylvain Joyeux improve debugging output in deployment resolution<br/>
         
           b9b3b12 6 months ago Sylvain Joyeux actions: make Actions and Models::Actions accept all the InstanceRequirements API<br/>
         
           785e710 6 months ago Sylvain Joyeux coord: wait for the root task to be started before we bind the data readers<br/>
         
           591befb 6 months ago Sylvain Joyeux coord: allow to forward arguments from a coordination context to an embedded data monitor<br/>
         
           c224ffa 6 months ago Sylvain Joyeux coord: pass arguments from the monitoring table to the monitors, and allow them to store state<br/>
         
           671122c 6 months ago Sylvain Joyeux coord: allow usage of data monitoring tables in other coordination models<br/>
         
           80b0627 6 months ago Sylvain Joyeux coord: make the data monitoring tables behave properly on replace<br/>
         
           7f39ce2 6 months ago Sylvain Joyeux test: rename #deploy in the better syskit_run_deployer<br/>
         
           693bf84 6 months ago Sylvain Joyeux document usage of the data monitoring tables<br/>
         
           ec75a79 6 months ago Sylvain Joyeux fix syskit instanciate<br/>
         
           2027dbb 6 months ago Sylvain Joyeux test for task scripts at model level<br/>
         
           3f061e3 6 months ago Sylvain Joyeux test: cleanup naming and API for the stub API on Syskit::Test<br/>
         
           4e062ce 6 months ago Sylvain Joyeux Composition#find_required_composition_child_from_role must return a service that is faceted to the requirement<br/>
         
           721ba10 6 months ago Sylvain Joyeux fix service selection in DependencyInjection when adding by-name selection<br/>
         
           233f070 6 months ago Sylvain Joyeux fix AmbiguousSpecialization#pretty_print<br/>
         
           6879234 6 months ago Sylvain Joyeux reset #message_type in ComBus.clear_model<br/>
         
           0ec5d75 6 months ago Sylvain Joyeux overloading #new_submodel does not play well with model reloading. Overload #setup_submodel instead<br/>
         
           d4ce3c0 6 months ago Sylvain Joyeux clear #dynamic_services in Component.clear_model<br/>
         
           e3d7d44 6 months ago Sylvain Joyeux do not call #clear_model in DataServiceModel#initialize<br/>
         
           73b429f 6 months ago Sylvain Joyeux app: clear the proxy_task_models caches in #clear_models<br/>
         
           ca77d17 6 months ago Sylvain Joyeux fix model registration for Device and ComBus<br/>
         
           e452a47 6 months ago Sylvain Joyeux gui: add Roby model viewer for Roby::Task<br/>
         
           ddad5e9 6 months ago Sylvain Joyeux gui: fix Page handling<br/>
         
           e609139 6 months ago Sylvain Joyeux fix port reader/writer support in model-level task scripts<br/>
         
           0adc696 6 months ago Sylvain Joyeux remove comment that is not relevant anymore<br/>
         
           573976a 6 months ago Sylvain Joyeux gui: integrate Roby's model view for Actions::Interface in browse<br/>
         
           e6732b7 6 months ago Sylvain Joyeux in DependencyInjection, allow objects that respond to #to_instance_requirements as default values<br/>
         
           4c32dea 6 months ago Sylvain Joyeux gui: use the new MetaRuby::GUI::HTML::Collection class to handle Profile<br/>
         
           27a1fd1 6 months ago Sylvain Joyeux gui: better default behaviour for ComponentNetworView#render<br/>
         
           01a1370 6 months ago Matthias Goldhoorn fix application of specialization in wrong contexts<br/>
         
           9f10609 6 months ago Matthias Goldhoorn define a proper #to_s for FacetedAccess<br/>
         
           c9b89bf 6 months ago Sylvain Joyeux tests: add some more tests for child overloading<br/>
         
           49c6035 6 months ago Sylvain Joyeux tests: raise NotImplementedError for tests that are known to fail<br/>
         
           875c2e4 6 months ago Sylvain Joyeux fix initial implementation of the contextualization of specialization evaluation<br/>
         
           0f7223c 6 months ago Sylvain Joyeux remove dead code<br/>
         
           9b0b609 6 months ago Sylvain Joyeux refactor service handling in InstanceRequirements<br/>
         
           82d259a 6 months ago Sylvain Joyeux verify that the attached-to model in Models::BoundDataService#attach is actually compatible with the original one<br/>
         
           a12609d 6 months ago Sylvain Joyeux properly type children when in a specialization block<br/>
         
           88bed60 6 months ago Sylvain Joyeux html: fix wrong close tag for the 'require' line<br/>
         
           f0ecac0 6 months ago Sylvain Joyeux gui: properly forward the :external_objects option to the sub-renderer in task context view<br/>
         
           1a2ffc0 6 months ago Sylvain Joyeux bin: finish "syskit doc"<br/>
         
           4acec0d 6 months ago Sylvain Joyeux gui: fix hyperlinks to provided services without port mappings<br/>
         
           f810400 6 months ago Sylvain Joyeux gui: fix availability of the 'method' option for ComponentNetworkView#render<br/>
         
           fad7a1f 6 months ago Sylvain Joyeux gui: add hyperlinks from provided services to the service model<br/>
         
           c7efa25 6 months ago Sylvain Joyeux gui: fix missing priority value for the available views in ModelBrowser<br/>
         
           c2be09c 6 months ago Sylvain Joyeux gui: add buttons that make sense to the interface displays as well (task context, data services, hierarchy)<br/>
         
           707ef91 6 months ago Sylvain Joyeux starting point for a 'syskit doc' command<br/>
         
           59373bd 6 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/next'<br/>
         
           1b2ed10 6 months ago Sylvain Joyeux testing for port models is a lot less expensive than testing whether an orocos task is running<br/>
         
           10b9302 6 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/next'<br/>
         
           e1ad12f 6 months ago Sylvain Joyeux test: add some missing 'include SelfTest'<br/>
         
           e1c7fbb 6 months ago Sylvain Joyeux fix definition of specific services based on instance requirements<br/>
         
           3bf44be 6 months ago Sylvain Joyeux improve dynamic data service API<br/>
         
           cf4071a 6 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/next'<br/>
         
           1794e5f 6 months ago Felix Rehrmann fixed typo: assumed that sort is the method meant<br/>
         
           43a8acc 6 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/next'<br/>
         
           510ce29 6 months ago Thomas Roehr Support --help argument<br/>
         
           cc193f0 6 months ago Felix Rehrmann gui: added save svg button for plan's dataflow and hierarchy<br/>
         
           08d3bec 6 months ago Matthias Goldhoorn Revert "Engine: Let the engine find deployed tasks that are ancestors of"<br/>
         
           fffbcf6 7 months ago Matthias Goldhoorn Engine: Let the engine find deployed tasks that are ancestors of the requested one<br/>
         
           20b1a25 7 months ago Sylvain Joyeux coordination: do not emit trigger events if the event is not executable anymore<br/>
         
           467d69e 7 months ago Sylvain Joyeux coordination: bind all the data monitoring pieces together<br/>
         
           009b426 7 months ago Sylvain Joyeux coordination: call DataMonitoringPoll#poll from Task#poll<br/>
         
           48ddf05 7 months ago Sylvain Joyeux validate that the data streams given to #monitor look like valid streams<br/>
         
           f7f98fa 7 months ago Sylvain Joyeux validate that data monitors are well-defined as early as possible<br/>
         
           ebb92a0 7 months ago Sylvain Joyeux start using MetaRuby::DSLs.find_through_method_missing<br/>
         
           79a65ed 7 months ago Sylvain Joyeux test: rename stub_roby_deployment_model to the better stub_syskit_deployment_model<br/>
         
           4fdf123 7 months ago Sylvain Joyeux test: fix #stub_roby_deployment_model<br/>
         
           1da0ce4 7 months ago Sylvain Joyeux test: fix the syskit_start_component helper to handle the corner-cases<br/>
         
           e1a09ad 7 months ago Sylvain Joyeux test ComBus#each_attached_device<br/>
         
           1bb42bb 7 months ago Sylvain Joyeux test: fix Deployment tests, the process mocks must now respond to #task<br/>
         
           01410c3 7 months ago Sylvain Joyeux fix inverted logic in Component#specialized_model?<br/>
         
           07b3d3d 7 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/master'<br/>
         
           4ce1971 7 months ago Sylvain Joyeux test: fix #stub_syskit_deployment<br/>
         
           9b89033 7 months ago Sylvain Joyeux allow data monitoring tables to use arbitrary networks as data sources<br/>
         
           1eeca1b 7 months ago Sylvain Joyeux make InstanceRequirements valid objects as coordination tasks<br/>
         
           c1aa81e 7 months ago Sylvain Joyeux test: improve the stub mess in common test support code<br/>
         
           386a8e9 7 months ago Sylvain Joyeux process_name must be non-nil in Syskit::Deployment for everything to function properly<br/>
         
           0206d45 7 months ago Sylvain Joyeux test handling of RubyProcessServer/RubyTaskContext in Syskit::Deployment<br/>
         
           951711c 7 months ago Sylvain Joyeux forbid some ports to be forwarded to orogen_model from Port#method_missing<br/>
         
           95fbcd0 7 months ago Sylvain Joyeux test: new misc tests<br/>
         
           61af0c5 7 months ago Sylvain Joyeux make the behaviour of Models::DataService#provides consistent when both services have the same port<br/>
         
           127cbc8 7 months ago Sylvain Joyeux change the data monitoring tables so that they can emit, raise or both<br/>
         
           fa5e2b5 7 months ago Sylvain Joyeux test: do start simplecov when needed<br/>
         
           a089eaa 7 months ago Sylvain Joyeux test: add missing suite_coordination.rb<br/>
         
           66470ed 7 months ago Sylvain Joyeux test: make sure that #orocos_task is the local RubyTaskContext when created with #stub_deployed_task<br/>
         
           9a8dbd0 7 months ago Sylvain Joyeux implement the data monitoring tables<br/>
         
           ad8b085 7 months ago Sylvain Joyeux hook into Roby's new TaskScript implementation<br/>
         
           6fa2392 7 months ago Sylvain Joyeux better #to_s method for CompositionChild<br/>
         
           c41d2b8 7 months ago Sylvain Joyeux use #try_resolve to implement CompositionChild#resolve<br/>
         
           f94ec8f 7 months ago Sylvain Joyeux use Composition#child_selection instead of #requirements in CompositionChild#try_resolve<br/>
         
           fbc637e 7 months ago Sylvain Joyeux deployment: reuse the orocos_task object from an executed task if it has one<br/>
         
           287c70f 7 months ago Sylvain Joyeux update for the changes in namespace structure in Roby::Actions<br/>
         
           425e4a6 7 months ago Sylvain Joyeux InstanceSelection: fix application of service selection in #instanciate when a component object is explicitly given<br/>
         
         </td></tr>
       
       



       <tr class="name" id="tutorials/designer_widget_tutorial">
         <th>tutorials/designer_widget_tutorial</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="49"> 3 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_49"><td>
         
           4382308 5 months ago Thomas Roehr add qt4-opengl dependency<br/>
         
           7aa6514 5 months ago Sylvain Joyeux convert to new-style find_package(Rock)<br/>
         
           0c7f71a 7 months ago Thomas Roehr Add qt dependencies<br/>
         
         </td></tr>
       
       



       <tr class="name" id="tutorials/message_driver">
         <th>tutorials/message_driver</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="50"> 1 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_50"><td>
         
           7500a50 5 months ago Sylvain Joyeux convert to new-style find_package(Rock)<br/>
         
         </td></tr>
       
       

















       <tr class="name" id="tutorials/rock_tutorial">
         <th>tutorials/rock_tutorial</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="51"> 1 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_51"><td>
         
           f36d502 5 months ago Sylvain Joyeux convert to new-style find_package(Rock)<br/>
         
         </td></tr>
       
       



       <tr class="name" id="tutorials/vizkit3d_plugin_tutorial">
         <th>tutorials/vizkit3d_plugin_tutorial</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="52"> 1 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_52"><td>
         
           93e7cd7 5 months ago Sylvain Joyeux convert to new-style find_package(Rock)<br/>
         
         </td></tr>
       
       



       <tr class="name" id="typelib">
         <th>typelib</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="53"> 78 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_53"><td>
         
           37bea6d 27 minutes ago Sylvain Joyeux ruby: fix source code line for struct/class/enum<br/>
         
           1910e5a 27 minutes ago Sylvain Joyeux ruby: do not override custom convertions to/from Hash and Array by the default ones<br/>
         
           7b377d1 27 minutes ago Sylvain Joyeux ruby: make from_ruby call apply_changes_from_converted_types on the returned value<br/>
         
           4a12b19 27 minutes ago Sylvain Joyeux ruby: fix access to nil @exported_templates in #find_exported_templates<br/>
         
           96a1782 5 days ago Sylvain Joyeux ruby: pretty-print /std/string as a string<br/>
         
           4c3ecdc 7 days ago Sylvain Joyeux fix memory leak in ValueOps::load<br/>
         
           8d1f5e2 3 months ago Sylvain Joyeux call #apply_changes_from_converted_types before calculating the byte array (closes #349)<br/>
         
           a1df479 4 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into next<br/>
         
           9a0bacd 4 months ago Ruben Smits Merge branch 'master' of https://gitorious.org/orocos-toolchain/typelib<br/>
         
           cd6900e 4 months ago Ruben Smits cmake: add support for x86_64 OSX systems<br/>
         
           14b260f 4 months ago Sylvain Joyeux ruby: fix gccxml parsing bug when std::vector was used as a template argument<br/>
         
           6d5b090 5 months ago Sylvain Joyeux better error reporting in Typelib.from_ruby<br/>
         
           c6faba7 5 months ago Sylvain Joyeux ruby: fix detection of virtual methods in gccxml parser<br/>
         
           487829a 5 months ago Sylvain Joyeux fix some compilation warnings<br/>
         
           b068c10 5 months ago Sylvain Joyeux ruby: in gccxml, mark opaques that are actually typedefs with the opaque_is_typedef metadata value<br/>
         
           d64281d 5 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/master'<br/>
         
           e0033a0 5 months ago Sylvain Joyeux ruby: fix type export in the context of subclassing<br/>
         
           850d769 5 months ago Benjamin Girault quickfix for exported types<br/>
         
           0069614 5 months ago Benjamin Girault fixed issue for pretty_printing of enums<br/>
         
           e8a6491 5 months ago Sylvain Joyeux define Type#split_typename<br/>
         
           ec7ad46 5 months ago Sylvain Joyeux ruby: fix documentation of the C++ part of the bindings<br/>
         
           1b526f6 5 months ago Sylvain Joyeux ruby: fix gccxml's opaque resolution when the declared opaque type is not present in the loaded files<br/>
         
           e9968be 5 months ago Sylvain Joyeux ruby: fix type resolution in one nested-type use case (closes #321)<br/>
         
           5800765 5 months ago Sylvain Joyeux ruby: only parse the relevant parts of the gccxml output<br/>
         
           16d98dd 5 months ago Sylvain Joyeux ruby: properly set source file/line on opaques<br/>
         
           6879990 5 months ago Sylvain Joyeux tlb: fix reloading container metadata<br/>
         
           76d3666 5 months ago Sylvain Joyeux ruby: remove the unnecessary convertion registry-xml-registry in gccxml processing<br/>
         
           882056d 6 months ago Sylvain Joyeux ruby,gccxml: fix importing empty classes that have non-empty base classes<br/>
         
           56a1b4b 6 months ago Sylvain Joyeux ruby: do register the memory zone in Type.from_address<br/>
         
           5276735 6 months ago Sylvain Joyeux ruby: refactor the value initialization to allow for redefining #initialize in subtypes<br/>
         
           2d1266e 6 months ago Sylvain Joyeux ruby,test: add missing c++ import test file<br/>
         
           e26d920 6 months ago Sylvain Joyeux ruby: re-add support for pointer types for completeness sake<br/>
         
           9d263c2 6 months ago Sylvain Joyeux ruby,test: define_container is low-level, test create_container isntead<br/>
         
           96cd76d 6 months ago Sylvain Joyeux ruby: fix BaseClassType == BaseTypeClass<br/>
         
           8d2f036 6 months ago Sylvain Joyeux make build() accept an optional size argument<br/>
         
           44e3bd1 6 months ago Sylvain Joyeux ruby,gccxml: properly handle existing documentation blocks that have no contents<br/>
         
           62838c1 7 months ago Sylvain Joyeux dist: the gccxml loader does not use nokogiri anymore<br/>
         
           25331eb 7 months ago Sylvain Joyeux Merge branch 'master' of git://gitorious.org/orocos-toolchain/rock-typelib<br/>
         
           85bf03b 7 months ago Sylvain Joyeux Merge remote-tracking branch 'orocos/master'<br/>
         
           ec47d53 7 months ago Sylvain Joyeux ruby: replace the nokogiri-based gccxml parsing by a self-made method<br/>
         
           a7561be 7 months ago Sylvain Joyeux fix isValidTypename for templates followed by a comma<br/>
         
           12923d5 7 months ago Sylvain Joyeux test: memcmp returns a negative value, not necessarily -1, in case the compared memory differ<br/>
         
           4682d5d 7 months ago Sylvain Joyeux ruby: 1.8 compatibility fix<br/>
         
           96fecb3 7 months ago Alexander Duda fix compile error on ruby1.9 due to missing version.h included by metadata.cc<br/>
         
           26af465 7 months ago Sylvain Joyeux fix compilation on gcc 4.8<br/>
         
           05957ae 7 months ago Sylvain Joyeux ruby: fix compilation on ruby 1.8<br/>
         
           79bc542 7 months ago Sylvain Joyeux ruby: the gccxml resolution code does not need a reference to the XML document, remove it as argument<br/>
         
           a10edee 7 months ago Sylvain Joyeux ruby: fix gccxml import when a compound has ignored base classes<br/>
         
           b5e3f9f 7 months ago Sylvain Joyeux gccxml: add support for non-virtual, public inheritance<br/>
         
           7602327 7 months ago Sylvain Joyeux ruby: fix definition of attributes on CompoundType itself<br/>
         
           700cd23 7 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/master'<br/>
         
           4804e97 7 months ago Sylvain Joyeux ruby: display documentation in type pretty-printing<br/>
         
           feae458 7 months ago Sylvain Joyeux keep metadata across the minimal() and merge() registry operations<br/>
         
           5988075 7 months ago Sylvain Joyeux ruby: parse documentation blocks and assign them to the 'doc' metadata<br/>
         
           085e433 7 months ago Sylvain Joyeux ruby: fix setting source files, and set them for compound fields as well<br/>
         
           7f64b20 7 months ago Sylvain Joyeux ruby: use the type creation API in the gccxml parser<br/>
         
           a28f8f3 7 months ago Sylvain Joyeux ruby: metadata support<br/>
         
           9b8f7c5 7 months ago Sylvain Joyeux ruby: allow to specifically set the size of the types in Registry#create_*<br/>
         
           0a1f694 7 months ago Sylvain Joyeux ruby: shut some warning up<br/>
         
           af9678d 7 months ago Sylvain Joyeux tlb: use the proper libxml functions to iterate over elements<br/>
         
           40daf4d 7 months ago Sylvain Joyeux tlb: reload metadata<br/>
         
           63ef4fa 7 months ago Sylvain Joyeux tlb: make the generated metadata values CDATA blocks<br/>
         
           5410e47 7 months ago Sylvain Joyeux tlb: fix argument order in xml parsing exceptions<br/>
         
           e041b7b 7 months ago Sylvain Joyeux return the newly created field in addField<br/>
         
           0aacfce 8 months ago Sylvain Joyeux tlb: metadata import/export<br/>
         
           ba7e62f 8 months ago Sylvain Joyeux fix copy operations for types<br/>
         
           b2546c0 8 months ago Sylvain Joyeux use metadata to store the type's source IDs<br/>
         
           bda638c 8 months ago Sylvain Joyeux fix C++11-related warning<br/>
         
           2985159 8 months ago Sylvain Joyeux implement metadata support<br/>
         
           9023ada 8 months ago Sylvain Joyeux make the destructor of TypeDefinitionPlugin virtual<br/>
         
           40c159e 8 months ago Sylvain Joyeux Merge remote-tracking branch 'orocos/master'<br/>
         
           272225d 8 months ago Ruben Smits make typelib work on Mac OSX system<br/>
         
           102aeef 9 months ago Ruben Smits Make it compile on osx<br/>
         
           d3d947e 9 months ago Ruben Smits fix lib extension for macosx<br/>
         
           4bde377 11 months ago Ruben Smits catkin: provide catkin compatible package.xml file<br/>
         
           50f01c1 12 months ago Peter Soetens Merge remote-tracking branch 'rock/master' into toolchain-2.6<br/>
         
           fc86baf 12 months ago Peter Soetens Merge remote-tracking branch 'rock/stable' into toolchain-2.6<br/>
         
           b60abb6 1 year, 1 month ago Peter Soetens dyncall: forcibly compile with gcc<br/>
         
         </td></tr>
       
       





       <tr class="name" id="utilrb">
         <th>utilrb</th>
       </tr>
       
         <tr class="from_commits_header">
           <td><a class="commit_event_toggler" id="54"> 21 commits</a> </td>
         </tr>
         <tr class="from_commits" id="commits_54"><td>
         
           f7e2c4e 4 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/master' into next<br/>
         
           89d1dad 5 months ago Sylvain Joyeux be compatible with the current doc target scheme<br/>
         
           93215b2 5 months ago Sylvain Joyeux doc: backward-compatible fix for doc generation w.r.t. changes in Rake<br/>
         
           bebf041 5 months ago Ruben Smits adding minimum cmake version<br/>
         
           7453e49 5 months ago Thomas Roehr dsl: use BasicObject as the basis for the evaluation context in eval_dsl_content<br/>
         
           d6f5c0a 5 months ago Sylvain Joyeux fix Logger::Hierarchy for classes that have a name that cannot be resolved to a constant<br/>
         
           d03d42b 6 months ago Sylvain Joyeux define LIB_DIR to allow filtering utilrb out in Roby<br/>
         
           2246405 6 months ago Sylvain Joyeux remove 1.8-specific code<br/>
         
           55b6048 6 months ago Sylvain Joyeux logger: trigger resetting the children's default logger in Forward#logger=<br/>
         
           6aa5670 7 months ago Sylvain Joyeux Merge remote-tracking branch 'autobuild/master'<br/>
         
           d27b67c 8 months ago Sylvain Joyeux Merge remote-tracking branch 'orocos/master'<br/>
         
           a24bd15 8 months ago Ruben Smits catkin: add CMakeLists.txt that installs utilrb and add package.xml to make it buildable with catkin<br/>
         
           9b258b0 8 months ago Ruben Smits remove the use of hosted gems<br/>
         
           b36b102 8 months ago Ruben Smits add ruby extension extension lookup to also support OSX<br/>
         
           7ab322f 1 year, 2 months ago Sylvain Joyeux Merge remote-tracking branch 'origin/toolchain-2.5'<br/>
         
           5f31d2d 1 year, 2 months ago Sylvain Joyeux utilrb/rake/doc requires utilrb/kernel/options, so add lib/ to the LOAD_PATH<br/>
         
           7d5343f 1 year, 2 months ago Sylvain Joyeux remove support for the deprecated rake/rdoctask as it is now an error on Rake &gt;= 10<br/>
         
           c38a197 1 year, 2 months ago Sylvain Joyeux doc: add clubber and rebuild task<br/>
         
           4097d32 1 year, 2 months ago Sylvain Joyeux fix compatibility with g++ 4.7, in which the -module option disappeared<br/>
         
           03c5f47 1 year, 2 months ago Ruben Smits adapt makefile and manifest to use apt-based installs of the needed gems<br/>
         
           388a535 1 year, 4 months ago Ruben Smits add missing rake and lixslt dep<br/>
         
         </td></tr>
       
       


</table>
