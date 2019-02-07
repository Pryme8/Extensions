[{"Owner":"satguru","Date":"2018-01-19T02:55:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe matrix decompose returns wrong scale value when scale is negative\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsee\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#ZXZI83_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#ZXZI83_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere scling.z is being set to -2_co_ decompose returns +2\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think the bug got introduced by this change\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/commit/8d1b546a20b3398556f0fe98f6d57329bce92687#diff-ccd6f7b0cc7c001d6fdf41cff591c6a6_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/commit/8d1b546a20b3398556f0fe98f6d57329bce92687#diff-ccd6f7b0cc7c001d6fdf41cff591c6a6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#eaf5ff_sm_color_dd_#05264c_sm_font-size_dd_18px_sm__qt__gt_Fixed matrix decomposition with negative scaling_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-19T23:19:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can also notice that scale.y _eq__eq__eq_ -1.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo you have an idea to fix it?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"satguru","Date":"2018-01-20T15:34:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am not sure how to fix it._lt_br /_gt_\n\tDon_t_t think the previous solution would have worked either._lt_br /_gt_\n\tThat relied on the signs of each co-ordinates of the unit vectors._lt_br /_gt_\n\tI think that would only be reliable if the rotation was zero._lt_br /_gt_\n\t_lt_br /_gt_\n\tWe might also have a similar issue with _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#24292e_sm_font-size_dd_12px_sm__qt__gt_getRotationMatrixToRef(). _lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/0d75ccca5ce75ae46b19adf3aab5078706c5a07a/src/Math/babylon.math.ts#L3444_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/0d75ccca5ce75ae46b19adf3aab5078706c5a07a/src/Math/babylon.math.ts#L3444_lt_/a_gt__lt_/span_gt__lt_br /_gt_\n\t Won_t_t m[3]_co_m[7]_co_m[11] always be zero?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway It is an interesting problem and I will keep looking into it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-22T15:33:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for your help!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-01-22T22:28:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI don_t_t think decompose is wrong. Once a scale is composed into a matrix_co_ the information on which component is negative is lost as there are multiple ways to represent the same transformation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you change your playground to output all the values_co_ you_t_ll notice the y component of the scale is negative and note that rotation is not identity.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#ZXZI83%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#ZXZI83#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"satguru","Date":"2018-01-23T01:25:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26831_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/_qt_ rel_eq__qt__qt__gt_@bghgary_lt_/a_gt_ _lt_br /_gt_\n\tThe more I think about it the more I believe you are right about _qt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_Once a scale is composed into a matrix_co_ the information on which component is negative is lost_lt_span_gt_ _qt_._lt_br /_gt_\n\tIt seems you can find that one of the component is negative but not which one_lt_/span_gt__lt_/span_gt__lt_br /_gt_\n\tand maybe just knowing that one of the component is negative is good enough to figure out the correct rotation._lt_br /_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#24292e_sm_font-size_dd_12px_sm__qt__gt_what about getRotationMatrixToRef()? needs to be corrected?_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"satguru","Date":"2018-01-24T01:23:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26831_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/_qt_ rel_eq__qt__qt__gt_@bghgary_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheck this playground example wherein I am  printing out the rotationQuaternion using different methods\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#ZXZI83%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#ZXZI83#3_lt_/a_gt_\n_lt_/div_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t \n_lt_/div_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\tI get different results\n_lt_/div_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t \n_lt_/div_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\tIf i comment out line 12 (thus removing the negative scaling)_co_ I get correct results.\n_lt_/div_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-24T16:54:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe math are correct but having a negative scale is something we cannot detect as the extracted scale is always positive (we consider it as a vector length)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can easily fix the computation with _dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#ZXZI83#4_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#ZXZI83#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut it is a trick as I switch scale.z because I know that initial scling was negative on z\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI see no solution to this problem\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"satguru","Date":"2018-01-25T16:30:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_202457_qt_ data-ipsquote-contentid_eq__qt_35169_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1516812842_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t23 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI see no solution to this problem\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t Me too _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tit seems that based on just the matrix the only conclusion one can  definitely arrive at is_lt_br /_gt_\n\ti) one scale is -negative  or all scales are negative  or_lt_br /_gt_\n\tii) one scale is positive  or all scales are positive_lt_br /_gt_\n\tbut not which scale exactly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis would be based on taking cross product of two vectors and  then dot product with the third vector_lt_br /_gt_\n\t So_lt_br /_gt_\n\tif (Vector3.Cross(ux_co_uy).Dot(uz))&lt_sm_0  then one scale is negative   or all scales are negative   _lt_br /_gt_\n\telse  one  scale is positive or all scales are positive\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe mathematically impossible to determine the sign of the original  scale?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf that is the  case then should  the user provide the information ? as optional params?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMatrix.Decompose(scale_co_rotation_co_translation_co_signX?_co_signY?_co_signZ?)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhere signX_co_signY_co_signZ would be 1 or -1 \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-25T22:28:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat_t_s a good option !\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"satguru","Date":"2018-01-26T01:28:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI will work on a pr \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]