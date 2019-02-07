[{"Owner":"V!nc3r","Date":"2016-07-20T13:15:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve noticed the SdtMaterial property _lt_em_gt_useEmissiveAsIllumination_lt_/em_gt_. I don_t_t get why emissive is not... illumination ^^ Is emissive an _lt_em_gt_add _lt_/em_gt_color_co_ and illumination a _lt_em_gt_multiply _lt_/em_gt_for example ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-07-20T13:38:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya V!  _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Materials/babylon.pbrMaterial.js#L255_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Materials/babylon.pbrMaterial.js#L255_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA little note there... \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIn this mode_co_ the emissive information will always be added to the lighting once.  A light_co_ for instance_co_ can be thought-of as emissive.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tJust passing-along what I found.  Probably not very helpful_co_ but maybe.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2016-07-20T13:40:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe naming is a bit confusing I agree.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn emissive standard mode_co_ emissive is added to diffuse before being multiplied by ambient (occlusion texture).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn EmissiveAsIllumination_co_ the emissive is added without being impacted by ambient.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2016-07-20T13:43:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOké_co_ that_t_s clear_co_ thanks for explanations ! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-07-20T14:16:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_!  Good question_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20526_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/_qt_ rel_eq__qt__qt__gt_@V!nc3r_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSebavan (or anyone else_co_ too)... can you please modify this scene and show us how it looks?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1PWPDF_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1PWPDF_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStandard lights are low intensity. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve got scene.ambientColor happening in line 4 (green)_co_ sphere and box ambientColor set in lines 14 and 20 (dark gray).  It is my understanding that ambientColor needs to be set on scene and on materials... before ambient goes active.  This is the reason line 26 sets an ambientColor on all the other mesh materials (causing them to have an end-result color of green).  Only the box and sphere have red emissiveColors set.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe spheremat has UEAI set true_co_ boxmat sets it false. (lines 17 and 23).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know if I should be using diffuseColor_co_ but I set box and sphere material.diffuseColor to a low-level gray.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t see a difference between sphere end-result color_co_ and box end-result color.  Would someone like to help?  Thanks! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis feature/property was added as part of the PBR project_co_ yes?  Perhaps that is where we would best see its usage/affect.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2016-07-20T14:42:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ AmbientColor and AmbientTexture are fully different in BJS _dd_-)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAmbient color is alwasy added to the result color at the end of the shader.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAmbient Texture is your Ambient _lt_strong_gt_Occlusion _lt_/strong_gt_texture usually used to bake in occlusion which is expensive to do in Real Time.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyour scene does not use AmbientTexture but AmbientColor only_co_ so the result is identic. You would notice a difference by using an occlusion texture_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1PWPDF%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1PWPDF#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs you can see the box goes brown (red is occluded by AO) and not the sphere.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-07-20T14:54:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAh_co_ thanks!  Well done.  Thanks for the info/knowledge_co_ too.  SSAO (screen space ambient occlusion) being the _qt_expensive to do in Real Time_qt_ thing_co_ I suspect.  Our _qt_Advanced Textures_qt_ tutorial COULD get so so so much larger. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_ heck_co_ just teaching the _lt_a href_eq__qt_https_dd_//en.wikipedia.org/wiki/Ambient_occlusion_qt_ rel_eq__qt_external nofollow_qt__gt_terminology_lt_/a_gt_ alone... takes up SO much tutorial space... that a central tutorial is impractical.  Yet_co_ folks are curious_co_ (like this thread) and it would be nice to find ways to ease users into these excellent advanced topics.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2016-07-22T07:23:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI use AmbientTexture channel not only for AO textures_co_ but usually for lightmaps (which include lights + AO data).\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]