[{"Owner":"Noyogi","Date":"2016-09-21T20:42:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#FXYUA%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#FXYUA#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere are 9 skyboxes\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLooking for_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen camera is in skybox_co_ skybox-skybox4 and skybox 9 are active_co_ skybox5-8 are not\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen camera is in or enters skybox2_co_ skybox is disabled or total alpha or false and skybox5 becomes live where skybox used to be\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"webGLmmk","Date":"2016-09-22T01:37:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_144965_qt_ data-ipsquote-contentid_eq__qt_25347_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1474490574_qt_ data-ipsquote-userid_eq__qt_23619_qt_ data-ipsquote-username_eq__qt_Noyogi_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 hours ago_co_ Noyogi said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#FXYUA%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#FXYUA#0_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThere are 9 skyboxes\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tLooking for_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tWhen camera is in skybox_co_ skybox-skybox4 and skybox 9 are active_co_ skybox5-8 are not\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tWhen camera is in or enters skybox2_co_ skybox is disabled or total alpha or false and skybox5 becomes live where skybox used to be\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tOK. I_t_m not sure what you_t_re objective for the scene is_co_ but as far as SEEING all of the skyboxes_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#FXYUA%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#FXYUA#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI adjusted the x positions so they would all line up 1-9. I think you just had some on top of each other in their position. (also adjusted the camera position so you can see them while you_t_re figuring it out...\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\tskybox.position.x _eq_ -80_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI fixed all the names to properly number them _qt_skybox3_co_ skybox4_co_ skybox5_co__qt_ etc. In your copying and pasting_co_ you had some repeating names.  That way you can see them when you click the button that says _qt_debug_qt_ layer.  (for some reason i had to click the button twice for the menus to show.). Once you do that_co_ check _qt_clickable labels_qt__co_ and _qt_meshes tree_qt__co_ and you can see all of them labelled side by side.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_    var skybox2 _eq_ BABYLON.Mesh.CreateBox(_qt_skyBox2_qt__co_ 20_co_ scene)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tNot really seeing anything else interactive here_co_ so I_qt_m hoping that helps...however you_t_re going to move them around_co_ you can use the labels in the debug layer to see where they are...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-09-22T07:57:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey_co_ me too.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#FXYUA%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#FXYUA#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSlightly different_co_ s1-s4 on the bottom_co_ s5-s8 on the top... 9 hanging out on the end.  I didn_t_t repair any names... but I fleshed s1-s4 with different skybox gfx.  I wanted to make sure Noyogi had maximum load-time for his $$$.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tLast time anyone had this many skyboxes setEnabled(true) in a single scene_co_ we later learned they had escaped from a mental institution.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tNot much cordiality either... no hello_co_ no pleases_co_ no thank you_t_s_co_ just ... _qt_this is what I want_qt_.  hmm. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI suspect that we might have to toilet paper his house... come Halloween night.  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tDid ya notice the 50% transparencies_co_ _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/16201-webglmmk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_16201_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/16201-webglmmk/_qt_ rel_eq__qt__qt__gt_@webGLmmk_lt_/a_gt_?  Might indicate that he wants two skyboxes at each _lt_em_gt_location_co_ _lt_/em_gt_and if so_co_ he would want s1-s4 located identical to s5-s8.  It will be interesting to see if he is going to _qt_nav_qt_ the camera/player from one skybox to another_co_ as if they were rooms.  I wonder if he_t_ll use intersectsMesh() and add a property to camera called ._lt_em_gt_withinWhichSkybox.  _lt_/em_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_I think he added s9 at the last minute_co_ just to confuse us all.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ I have the folks from the mental institution standing-by with straight-jackets_co_ just in case we need them.  heh\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Noyogi","Date":"2016-09-22T13:00:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/16201-webglmmk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_16201_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/16201-webglmmk/_qt_ rel_eq__qt__qt__gt_@webGLmmk_lt_/a_gt_ thank you for your time and effort\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ right you are_co_ no hello_co_ no please_co_ however rewarding a person with free toilet paper is hardly any kind of punishment_co_ here at the ward toilet paper is a square a day privalege\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou have an eloquent way of answering a question_co_ thank you\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand s9 should have been s5 with no alternate_co_ cause there_t_s only one way to perceive s5\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]