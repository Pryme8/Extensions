[{"Owner":"babbleon","Date":"2018-05-30T13:10:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s the Playground _t_Drag &amp_sm_ Drop_t__dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#17EGSU%2310_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#17EGSU#10_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you drag_co_ say_co_ the green cube backwards to the edge of the ground... then try and click and drag to get it back_co_ you have to click on the part of the cube above where the extents of the ground is.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow do we get around this_co_ so that regardless of the point above the ground and so long as you_t_re clicking on one of the meshes_co_ it drags correctly?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-05-30T13:39:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe ground is needed as a reference point for the move. See line 91 in the PG which calls the function_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ getGroundPosition_lt_/span_gt_ lines 71 to 80. You can always make the ground larger and invisible\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#17EGSU%2311_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#17EGSU#11_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2018-05-30T13:40:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIn my project I created fake ground. When your clicked on mesh (get Y position off clicked point)_co_ move fake ground to position (Y). Pick point read from fake ground.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNot best work around_co_ but works for me. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babbleon","Date":"2018-05-30T13:43:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_ - the ground is always going to have a horizon though. Where in Bucks are you? I spent my student years in Wycombe_co_ what little I can remember of it!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t&amp_sm_ thank you _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/27658-arte/?do_eq_hovercard_qt_ data-mentionid_eq__qt_27658_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/27658-arte/_qt_ rel_eq__qt__qt__gt_@Arte_lt_/a_gt_ too - I will have a go with your suggestion._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]