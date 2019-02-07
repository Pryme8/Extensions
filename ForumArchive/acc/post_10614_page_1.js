[{"Owner":"JCPalmer","Date":"2014-11-21T22:13:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_When a scene is a part of a page with a form_co_ e.g. Voice-Sync Developer_co_ messages to editable text fields to move cursor with arrow left or right are being stolen by BabylonJS.  The mesh moves.  Is there a way to stop this from happening?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Meulta","Date":"2014-11-22T12:01:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You can maybe detach camera when focus is done on the text field and attach it again to the scene when the focus is lost from text field ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-11-22T17:45:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_you can attachControl(canvas_co_ _lt_u_gt__lt_strong_gt_false_lt_/strong_gt__lt_/u_gt_) this should work_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-11-25T15:02:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sorry for the delayed feedback_co_ but setting this to true or false did not do anything to stop this. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Looked at FreeCamera.ts_co_ and this has something to do with preventDefault.  I have been getting a Firefox message for all any scene I load that says_dd__lt_/p_gt__lt_p_gt_  _qt__lt_strong_gt_Use of getPreventDefault() is deprecated.  Use defaultPrevented instead_lt_/strong_gt_._qt_. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Never knew what it was._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-11-26T23:40:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_we do not use _lt_strong_gt_getPreventDefault _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/strong_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_With false_co_ the preventDefault is not called thus allowing focus to move outside bjs_lt_/strong_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-12-08T17:54:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well_co_ there is no law that you have to attach the scene to a camera_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_scene.activeCamera.attachControl(canvas_co_ false | true)_sm__lt_/pre_gt__lt_p_gt_Adding a true second argument means that both the cursor moves in the text field _lt_strong_gt_AND_lt_/strong_gt_ the mesh moves.  I want the mesh to stay where it is.  Answer is not to attach in the first place.  Thought I would point this out_co_ as people might think you _lt_strong_gt_have_lt_/strong_gt_ to do this_co_ but it is just optional._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]