[{"Owner":"agmcleod","Date":"2017-11-16T02:56:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt seems to be okay in 3.1.0_co_ but that_t_s been giving me other problems_co_ so im wondering if i can find a fix in 3.0.7.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/indexstable#TZUQWM%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/indexstable#TZUQWM#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there some other way I need to set the rotation? If it renders correctly_co_ it looks like_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_15693_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/5a0cfe3667bce_Screenshot-2017-11-16BabylonjsPlayground.png.80d1ab5b3433a8e9f3ef1f7de932d688.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_5a0cfe3823b2c_Screenshot-2017-11-16BabylonjsPlayground.thumb.png.686ee0a116c3a631fa74f6648e0a96ae.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15693_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/5a0cfe3823b2c_Screenshot-2017-11-16BabylonjsPlayground.thumb.png.686ee0a116c3a631fa74f6648e0a96ae.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the playground in FF 37/dev edition on windows I_t_m seeing_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_15694_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/5a0cfe5e8d7ac_Screenshot-2017-11-16BabylonjsPlayground.png.84c79a0077f52648009c070bd3cabae0.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_5a0cfe6014c83_Screenshot-2017-11-16BabylonjsPlayground.thumb.png.bafa8a9ad5027feebdfc530cf0a52b79.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15694_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/5a0cfe6014c83_Screenshot-2017-11-16BabylonjsPlayground.thumb.png.bafa8a9ad5027feebdfc530cf0a52b79.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-11-16T12:33:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat_t_s interesting _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIt seems to me like a failed calculation of the view matrix that happens_co_ for some reason_co_ in firefox. It was fixed in 3.1_co_ but I can_t_t find the actually lines that were added / changed to cause this. If anyone else knows_co_ you might be able to get it fixed with 3.0.7_co_ but I would simply recommend using 3.1.0-beta _co_ as it is stable enough and will soon be released.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"agmcleod","Date":"2017-11-16T13:55:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo I tried setting the rotationQuaternion directly_co_ and that seems to do it_dd_ _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/indexstable#TZUQWM%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/indexstable#TZUQWM#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI did try using the beta_co_ but you might also see my thread where I_t_m not seeing shadows in any browser_co_ and particle effects not rendering over the shadow only material in Safari &amp_sm_ Chrome.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-11-16T14:05:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHow did we get to browser incompatibility using a single canvas element beats me _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tQuaternion is always your friend_co_ I am happy it is resolved this way.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"agmcleod","Date":"2017-11-16T14:07:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHow did we get to browser incompatibility using a single canvas element beats me\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tGraphics are hard! When I first saw this_co_ I suspected some rogue transform rotate3d was on the loose or something. Just didn_t_t suspect the rotation code would be off. I would think it would be the same across browsers... Matrix math isn_t_t controversial.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]