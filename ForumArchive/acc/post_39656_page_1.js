[{"Owner":"olsibob","Date":"2018-08-27T10:01:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m able to pick sprites with Scene.pickSprite_co_ but is there a way to pick them with scene.pickWithRay? PickWithRay only seems to return meshes (I_t_ve set isPickable to true on the sprites and confirmed that they_t_re pickable with Scene.pickSprite).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe use-case is_co_ I_t_m trying to pick sprites with a 3DoF VR Controller_co_ so I don_t_t have a 2d pointerX and pointerY to work with_co_ only the controller_t_s forward ray.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m thinking that my options are_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ta. Use Vector3.Project to try to unproject the pickedPoint of pickWithRay (I_t_m using a skybox_co_ so the ray will always hit something)_co_ then put that point into Scene.pickSprite. I tried this quickly_co_ but I think the unprojected point might be off\n_lt_/p_gt_\n\n_lt_p_gt_\n\tb. replace the sprites with billboarded mesh instances that can directly be hit with pickWithRay. I suspect this might be the easiest option?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr is there some easier way to pick a sprite with a ray?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-27T16:13:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is a missing API for sure! I_t_ll add it for next commit _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ (By the way _co_ option B is totally fine as well)_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-27T16:21:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/commit/685b8f0f4babca6fa1fef13f24991f5cafa107d8_qt_ ipsnoembed_eq__qt_false_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/commit/685b8f0f4babca6fa1fef13f24991f5cafa107d8_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"olsibob","Date":"2018-08-27T18:37:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWow that was fast! Do you know if it_t_s possible to try this out using npm? I thought I_t_d be able to do repo#commit_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt_dependencies_qt__dd_ {\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt_babylonjs_qt__dd_ _qt_git+https_dd_//github.com/BabylonJS/Babylon.js.git#685b8f0f4babca6fa1fef13f24991f5cafa107d8_qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut the new method doesn_t_t seem to be included\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-27T22:19:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI will update the npm this Friday (I cannot update it every time else I will consume all NPM bandwidth _sm_))\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"olsibob","Date":"2018-08-27T23:00:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAwesome_co_ thanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-08-28T04:13:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you are really keen_co_ you can build it yourself from source to get latest.  Just clone or download_co_ run npm install_co_ and a gulp task_lt_br /_gt_\n\t_lt_span_gt__lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/how_to_start#gulp_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/how_to_start#gulp_lt_/a_gt__lt_br /_gt_\n\tYou can use npm link or copy to your node_modules once built.  Only if you can_t_t wait till Friday!  I would imagine it_t_s in the playground already_co_ though...  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]