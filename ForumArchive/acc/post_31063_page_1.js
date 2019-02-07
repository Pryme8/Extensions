[{"Owner":"Knight","Date":"2017-06-14T09:56:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI want to draw a texture on the line that user draws on the screen. Like a mouse trail_co_ so I follow this _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/tutorials/how_to_create_your_own_canvas2d_primitive_qt_ rel_eq__qt_external nofollow_qt__gt_tutorial_lt_/a_gt_. . The only thing that doesn_t_t answer me is sending the custom uv to the shaders. I vaguely remember that in C++_co_ I can create struct or something and the shader will know how to handle it. It seems that is not the case here. I can_t_t even figure out how does _qt_index_qt_ property in vertex shader gets there. Even so_co_ I can_t_t use the _qt_index_qt_ approach as the line won_t_t be full rectangle as in the example.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRight now_co_ I copied &amp_sm_ pasted the entire lines2d classes and try to customize to be able to draw texture on there_co_ but I don_t_t know how to send the custom uv that I_t_ve calculated to the shader. Anyone can explain that to me? Or am I looking at this a wrong way?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-14T16:59:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDo you mind sharing a PG to repro what you are doing?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps have a look to this one as well_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/gui_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/gui_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Knight","Date":"2017-06-15T06:58:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_178318_qt_ data-ipsquote-contentid_eq__qt_31063_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1497459553_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t14 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tDo you mind sharing a PG to repro what you are doing?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tPerhaps have a look to this one as well_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/overviews/gui_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/overviews/gui_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#9AHTEG_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#9AHTEG_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to draw the texture on the line at the bottom left_co_ and make it curve along with the line too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGUI is nice_co_ and I may change to it in the future_co_ but that still doesn_t_t give me what I want. And from what I see_co_ I won_t_t have access to shaders that way too\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAside from adding extra variable (_texture and _fillUV)_co_ I haven_t_t changed any process from lines2d at all\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-06-15T14:22:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again.  This is over my head_co_ but... might need to hack the Lines2D shader code... _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/tree/master/canvas2D/src/shaders_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Extensions/tree/master/canvas2D/src/shaders_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNot sure how to add texture feature to the lines2d shader.  But heck_co_ let_t_s ask _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ if he has comments.  He is a GPU GOD!  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-06-15T20:04:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_table style_eq__qt_color_dd_#24292e_sm__qt__gt__lt_tbody_gt__lt_tr_gt__lt_td style_eq__qt_color_dd_#24292e_sm__qt__gt_\n\t\t\t\tvarying vec4 vColor_sm_\n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_tr_gt__lt_td_gt_\n\t\t\t\t \n\t\t\t_lt_/td_gt_\n\t\t\t_lt_td style_eq__qt_color_dd_#24292e_sm__qt__gt_\n\t\t\t\t \n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_tr_gt__lt_td_gt_\n\t\t\t\t \n\t\t\t_lt_/td_gt_\n\t\t\t_lt_td style_eq__qt_color_dd_#24292e_sm__qt__gt_\n\t\t\t\t_lt_span style_eq__qt_color_dd_#d73a49_sm__qt__gt_void_lt_/span_gt_ _lt_span style_eq__qt_color_dd_#005cc5_sm__qt__gt_main_lt_/span_gt_(_lt_span style_eq__qt_color_dd_#d73a49_sm__qt__gt_void_lt_/span_gt_) {\n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_tr_gt__lt_td_gt_\n\t\t\t\t \n\t\t\t_lt_/td_gt_\n\t\t\t_lt_td style_eq__qt_color_dd_#24292e_sm__qt__gt_\n\t\t\t\tgl_FragColor _eq_ vColor_sm_\n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_tr_gt__lt_td_gt_\n\t\t\t\t \n\t\t\t_lt_/td_gt_\n\t\t\t_lt_td style_eq__qt_color_dd_#24292e_sm__qt__gt_\n\t\t\t\t}\n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_/tbody_gt__lt_/table_gt__lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\twith this? i think that need have some customizable function for access to control shader after that i can help\n_lt_/p_gt_\n\n_lt_table style_eq__qt_color_dd_#24292e_sm__qt__gt__lt_tbody_gt__lt_tr_gt__lt_td style_eq__qt_color_dd_#24292e_sm__qt__gt_\n\t\t\t\t_lt_p_gt_\n\t\t\t\t\tvarying vec4 vColor_sm_\n\t\t\t\t_lt_/p_gt_\n\n\t\t\t\t_lt_p_gt_\n\t\t\t\t\tuniform sampler2D txt1_sm_\n\t\t\t\t_lt_/p_gt_\n\n\t\t\t\t_lt_p_gt_\n\t\t\t\t\tuniform vec2 screen_sm_\n\t\t\t\t_lt_/p_gt_\n\n\t\t\t\t_lt_p_gt_\n\t\t\t\t\t \n\t\t\t\t_lt_/p_gt_\n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_tr_gt__lt_td_gt_\n\t\t\t\t \n\t\t\t_lt_/td_gt_\n\t\t\t_lt_td style_eq__qt_color_dd_#24292e_sm__qt__gt_\n\t\t\t\t \n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_tr_gt__lt_td_gt_\n\t\t\t\t \n\t\t\t_lt_/td_gt_\n\t\t\t_lt_td style_eq__qt_color_dd_#24292e_sm__qt__gt_\n\t\t\t\t_lt_p_gt_\n\t\t\t\t\t_lt_span style_eq__qt_color_dd_#d73a49_sm__qt__gt_void_lt_/span_gt_ _lt_span style_eq__qt_color_dd_#005cc5_sm__qt__gt_main_lt_/span_gt_(_lt_span style_eq__qt_color_dd_#d73a49_sm__qt__gt_void_lt_/span_gt_) {\n\t\t\t\t_lt_/p_gt_\n\n\t\t\t\t_lt_p_gt_\n\t\t\t\t\tvec3 txt _eq_ texture2D(txt1_co_ vec2(gl_FragCoord.x/screen.x _co_gl_FragCoord.y / screen.y ).rgb_sm_ \n\t\t\t\t_lt_/p_gt_\n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_tr_gt__lt_td_gt_\n\t\t\t\t \n\t\t\t_lt_/td_gt_\n\t\t\t_lt_td style_eq__qt_color_dd_#24292e_sm__qt__gt_\n\t\t\t\tgl_FragColor _eq_ vColor*0.5 +0.5 * vec4(txt_co_1.)_sm_\n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_tr_gt__lt_td_gt_\n\t\t\t\t \n\t\t\t_lt_/td_gt_\n\t\t\t_lt_td style_eq__qt_color_dd_#24292e_sm__qt__gt_\n\t\t\t\t}\n\t\t\t_lt_/td_gt_\n\t\t_lt_/tr_gt__lt_/tbody_gt__lt_/table_gt__lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Knight","Date":"2017-06-16T04:07:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_178486_qt_ data-ipsquote-contentid_eq__qt_31063_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1497557071_qt_ data-ipsquote-userid_eq__qt_13038_qt_ data-ipsquote-username_eq__qt_NasimiAsl_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t8 hours ago_co_ NasimiAsl said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_table style_eq__qt_color_dd_#24292e_sm__qt__gt__lt_tbody_gt__lt_tr_gt__lt_td style_eq__qt_color_dd_#24292e_sm__qt__gt_\n\t\t\t\t\t\tvarying vec4 vColor_sm_\n\t\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_/tr_gt__lt_tr_gt__lt_td_gt_\n\t\t\t\t\t\t \n\t\t\t\t\t_lt_/td_gt_\n\t\t\t\t\t_lt_td style_eq__qt_color_dd_#24292e_sm__qt__gt_\n\t\t\t\t\t\t \n\t\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_/tr_gt__lt_tr_gt__lt_td_gt_\n\t\t\t\t\t\t \n\t\t\t\t\t_lt_/td_gt_\n\t\t\t\t\t_lt_td style_eq__qt_color_dd_#24292e_sm__qt__gt_\n\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#d73a49_sm__qt__gt_void_lt_/span_gt_ _lt_span style_eq__qt_color_dd_#005cc5_sm__qt__gt_main_lt_/span_gt_(_lt_span style_eq__qt_color_dd_#d73a49_sm__qt__gt_void_lt_/span_gt_) {\n\t\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_/tr_gt__lt_tr_gt__lt_td_gt_\n\t\t\t\t\t\t \n\t\t\t\t\t_lt_/td_gt_\n\t\t\t\t\t_lt_td style_eq__qt_color_dd_#24292e_sm__qt__gt_\n\t\t\t\t\t\tgl_FragColor _eq_ vColor_sm_\n\t\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_/tr_gt__lt_tr_gt__lt_td_gt_\n\t\t\t\t\t\t \n\t\t\t\t\t_lt_/td_gt_\n\t\t\t\t\t_lt_td style_eq__qt_color_dd_#24292e_sm__qt__gt_\n\t\t\t\t\t\t}\n\t\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_/tr_gt__lt_/tbody_gt__lt_/table_gt__lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\twith this? i think that need have some customizable function for access to control shader after that i can help\n\t\t_lt_/p_gt_\n\n\t\t_lt_table style_eq__qt_color_dd_#24292e_sm__qt__gt__lt_tbody_gt__lt_tr_gt__lt_td style_eq__qt_color_dd_#24292e_sm__qt__gt_\n\t\t\t\t\t\t_lt_p_gt_\n\t\t\t\t\t\t\tvarying vec4 vColor_sm_\n\t\t\t\t\t\t_lt_/p_gt_\n\n\t\t\t\t\t\t_lt_p_gt_\n\t\t\t\t\t\t\tuniform sampler2D txt1_sm_\n\t\t\t\t\t\t_lt_/p_gt_\n\n\t\t\t\t\t\t_lt_p_gt_\n\t\t\t\t\t\t\tuniform vec2 screen_sm_\n\t\t\t\t\t\t_lt_/p_gt_\n\n\t\t\t\t\t\t_lt_p_gt_\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t_lt_/p_gt_\n\t\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_/tr_gt__lt_tr_gt__lt_td_gt_\n\t\t\t\t\t\t \n\t\t\t\t\t_lt_/td_gt_\n\t\t\t\t\t_lt_td style_eq__qt_color_dd_#24292e_sm__qt__gt_\n\t\t\t\t\t\t \n\t\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_/tr_gt__lt_tr_gt__lt_td_gt_\n\t\t\t\t\t\t \n\t\t\t\t\t_lt_/td_gt_\n\t\t\t\t\t_lt_td style_eq__qt_color_dd_#24292e_sm__qt__gt_\n\t\t\t\t\t\t_lt_p_gt_\n\t\t\t\t\t\t\t_lt_span style_eq__qt_color_dd_#d73a49_sm__qt__gt_void_lt_/span_gt_ _lt_span style_eq__qt_color_dd_#005cc5_sm__qt__gt_main_lt_/span_gt_(_lt_span style_eq__qt_color_dd_#d73a49_sm__qt__gt_void_lt_/span_gt_) {\n\t\t\t\t\t\t_lt_/p_gt_\n\n\t\t\t\t\t\t_lt_p_gt_\n\t\t\t\t\t\t\tvec3 txt _eq_ texture2D(txt1_co_ vec2(gl_FragCoord.x/screen.x _co_gl_FragCoord.y / screen.y ).rgb_sm_ \n\t\t\t\t\t\t_lt_/p_gt_\n\t\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_/tr_gt__lt_tr_gt__lt_td_gt_\n\t\t\t\t\t\t \n\t\t\t\t\t_lt_/td_gt_\n\t\t\t\t\t_lt_td style_eq__qt_color_dd_#24292e_sm__qt__gt_\n\t\t\t\t\t\tgl_FragColor _eq_ vColor*0.5 +0.5 * vec4(txt_co_1.)_sm_\n\t\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_/tr_gt__lt_tr_gt__lt_td_gt_\n\t\t\t\t\t\t \n\t\t\t\t\t_lt_/td_gt_\n\t\t\t\t\t_lt_td style_eq__qt_color_dd_#24292e_sm__qt__gt_\n\t\t\t\t\t\t}\n\t\t\t\t\t_lt_/td_gt_\n\t\t\t\t_lt_/tr_gt__lt_/tbody_gt__lt_/table_gt__lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI have not gone to fragment shader part yet_co_ because I am now figuring out how to sent the uv to the vertex shader. In the PG_co_ I use the lines2d shaders because I don_t_t know how to upload my slightly edited version of it and use in PG.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]