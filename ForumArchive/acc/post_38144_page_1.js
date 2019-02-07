[{"Owner":"alexoy","Date":"2018-06-10T12:47:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tProbably there is a bug in occlusion queries - _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#QDAZ80%2315_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#QDAZ80#15_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere a label is a thing that appears/disappears depending on the visibility of a sphere. I_t_ve noticed Occlusion Query takes into account only meshes that were created before it was enabled. If I add a box later - BJS doesn_t_t understand that a sphere is behind the new box and my label stays visible.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn my demo - in the beginning the label is not visible because the sphere is not visible_co_ it_t_s good. However_co_ if you go to the right behind the box - label will always be visible.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs it normal and can be configured somehow or it_t_s a bug?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-11T17:05:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello I_t_m glad to say that this is not a bug _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_By default opaque objects are rendered in creation order but you need them to be rendered front to back if you want to leverage occlusion_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#QDAZ80#16_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#QDAZ80#16_lt_/a_gt_ (see line#53)_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"alexoy","Date":"2018-06-11T19:33:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_ thanks_co_ it helped _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ and 2 new questions.._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_1. Of course about performance differences - will there be? Static list of meshes vs dynamic. Will it be reordered on every frame? (noticeable with a big enough list?)_sm__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_2. For modelling I use Blender. When I set a texture on a mesh - there is a texture_t_s setting whether to use _qt_Alpha_qt_ or not. If I set _qt_Use_qt__co_ even if my image is not transparent at all - occlusion queries say the label is still visible. If I uncheck _qt_Use_qt_ - everything is fine and the label becomes invisible when behind this mesh. Is this an expected behavior?_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-11T20:15:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t1. It will on every frame but sort are pretty fast now on browsers\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. Yes as you are no more creating an opaque mesh but a transparent one which will not be processed by occlusion queries\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]