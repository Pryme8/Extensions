[{"Owner":"KevinBLT","Date":"2015-07-03T11:45:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello folks!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I wonder why the _qt_zoomOn_qt_ method overwrites the maxZ attribute in the arcrotatecamera. _lt_/p_gt__lt_p_gt_Is there anywhay to pretend it from doing that?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If I zoom on the meshes and the user zooms out afterwards_co_ the mesh will become invisible._lt_/p_gt__lt_p_gt_Therefore I always have remember the old maxZ_co_ call the function and then reasign the old maxZ again._lt_/p_gt__lt_p_gt_Any advice?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Other question_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What would be the best place for putting the _qt_using babylon_qt_ informations?_lt_/p_gt__lt_p_gt_Somewhere behind an info button?_lt_/p_gt__lt_p_gt_Or in the corner of the 3D view?_lt_/p_gt__lt_p_gt_Like a _qt_powered by BabylonJS_qt_?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I know that_t_s the one thing to do when using Apache 2.0 for anything._lt_/p_gt__lt_p_gt_Babylon is used to show 3D files or for 3D powered online configurators._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_We don_t_t want to get into any troubles about that._lt_/p_gt__lt_p_gt_Some advices are recommend._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Kevin_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-07-03T16:03:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_actually Babylon.js is published under loveware_dd_ it is a specific license specifying that you can do whatever you want with it. If you want to credit babylon.js_co_ you can do it like you want. We just want you to send us some love by telling people how happy you are to use babylon.js _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ (tweets_co_ facebooks_co_ mails_co_ advertising on TV_co_ whatever you want)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For your first question_co_ we override the max to avoid the clipping effect_co_ but I get your point and next checkin on the repo will introduce a new optional parameter to zoomOn_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_public zoomOn(meshes?_dd_ AbstractMesh[]_co_ doNotUpdateMaxZ _eq_ false)_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-03T16:26:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Loveware_co_ excellent !  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"KevinBLT","Date":"2015-07-06T11:16:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Absolutely fantastic!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Of course I will recommend Babylon everytime I can!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks!  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]