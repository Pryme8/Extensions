[{"Owner":"Ingo Chou","Date":"2016-01-01T10:15:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_How to remove animation created by BABYLON.Scene.beginAnimation(target_co_ from_co_ to_co_ true) ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_BABYLON.Animatable object returned by  BABYLON.Scene.beginAnimation()  can only stop at a_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_key frame._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_        if (bAnim) {                var anim _eq_ new BABYLON.Animation(_qt_myAnimation_qt__co_ _qt_scaling.x_qt__co_ 30_co_                 BABYLON.Animation.ANIMATIONTYPE_FLOAT_co_ BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE)_sm_                var keys _eq_ []_sm_                keys.push({ frame_dd_ 0_co_ value_dd_ 1 })_sm_                keys.push({ frame_dd_ 20_co_ value_dd_ 0.2 })_sm_                keys.push({ frame_dd_ 60_co_ value_dd_ 1 })_sm_                anim.setKeys(keys)_sm_                mymesh.animations.push(anim)_sm_                scene.beginAnimation(mymesh_co_ 0_co_ 60_co_ true)_sm_        }        else {               scene.stopAnimation(mymesh)_sm_               mymesh.animations _eq_ new Array()_sm_        }_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ingo Chou","Date":"2016-01-01T10:18:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks for your reply and help._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ingo Chou","Date":"2016-01-03T03:23:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Can anyone help me?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-01-04T16:37:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_beginAnimation returns an Animatable which has a stop() function _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ingo Chou","Date":"2016-01-06T12:51:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Hello_co__lt_/p_gt__lt_br_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ _lt_/p_gt__lt_br_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Thanks for your reply._lt_/p_gt__lt_br_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ _lt_/p_gt__lt_br_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt__lt_span_gt_Animatable.stop() _lt_/span_gt_can only stop the animation at a certain _lt_span_gt_key frame._lt_/span_gt__lt_/p_gt__lt_br_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ _lt_/p_gt__lt_br_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt__lt_span_gt_However_co_ I want to delete_co_ completely destroy/remove the animations of the mesh._lt_/span_gt__lt_/p_gt__lt_br_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ _lt_/p_gt__lt_br_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt__lt_span_gt_Sometimes I need to re-create a new animation for it._lt_/span_gt__lt_/p_gt__lt_br_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ _lt_/p_gt__lt_br_gt__lt_p style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Thanks._lt_/p_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-01-06T16:08:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I am getting into AnimationRange instances for skeletons coming from external sources_co_ .babylon file.  Was planning on adding a modest # of methods for AnimationRange management today (hopefully)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_At Animation Class_dd__lt_/p_gt__lt_ol_gt__lt_li_gt_getHighestFrame() _dd_ number_co_ for adding more animation ranges along with the frames themselves without frame # collision_lt_/li_gt_\t_lt_li_gt__lt_strike_gt_removeAnimationRange(rangeName_dd_ string) _dd_ boolean_lt_/strike_gt__lt_/li_gt__lt_/ol_gt__lt_p_gt_At Bone Class_dd__lt_/p_gt__lt_ol_gt__lt_li_gt_copyAnimationRange(donor _dd_ Bone_co_ rescaleAsRequired _eq_ false) _dd_ boolean // rescaleAsRequired not implemented first PR_lt_/li_gt__lt_/ol_gt__lt_p_gt_At Skeleton Class_dd__lt_/p_gt__lt_ol_gt__lt_li_gt_copyAnimationRange(donor _dd_ Skeleton_co_ rescaleAsRequired _eq_ false) _dd_ boolean // rescaleAsRequired not implemented first PR_lt_/li_gt_\t_lt_li_gt_removeAnimationRange(rangeName _dd_ string)_dd_ boolean_lt_/li_gt__lt_/ol_gt__lt_p_gt_This is in addition to methods to load ranges.  These will not be coming out of the Blender exporter yet_co_ but tested by hand modifying a .babylon.  If you start assigning ranges to stuff as you add it_co_ then you should be able to rely on these to clean up._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-01-06T16:33:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Update_dd_  There is already a _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Animations/babylon.animation.ts#L119_qt_ rel_eq__qt_external nofollow_qt__gt_deleteRange_lt_/a_gt_ method in Animation_co_ so cross off one for me._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-01-06T17:11:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Update # 2_dd_  deleteRange() only removes the range from the _ranges property.  Am going to add a removeFrames? _dd_ boolean arg._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-01-06T17:18:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_sounds good!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]