[{"Owner":"The Snow Irbix","Date":"2015-07-09T20:09:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello everybody !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have a little probleme about cloud procedural texture_co__lt_/p_gt__lt_p_gt_I wanna some transparency on my cloud._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The doc say _dd__lt_/p_gt__lt_ul_gt__lt_li_gt__lt_strong_gt_CloudProceduralTexture_lt_/strong_gt__lt_ul_gt__lt_li_gt__lt_strong_gt_skyColor_lt_/strong_gt_ is the color for the sky (_lt_em_gt__lt_strong_gt_BABYLON.Color3/4_lt_/strong_gt__lt_/em_gt_)_lt_/li_gt__lt_li_gt__lt_strong_gt_cloudColor_lt_/strong_gt_ is the color for the cloud (_lt_em_gt__lt_strong_gt_BABYLON.Color3/4_lt_/strong_gt__lt_/em_gt_)_lt_/li_gt__lt_/ul_gt__lt_/li_gt__lt_/ul_gt__lt_p_gt_But BABYLON.Color4 seems to not be support..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_A demonstration _dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#24C4KC_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#24C4KC_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-07-09T23:13:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#24C4KC%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#24C4KC#9_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I see the patio_co_ through the sphere_t_s alpha_co_ now.  I assigned the texture as an opacityTexture in line 155... seems to work.  I also adjusted the texture level_co_ reduced the sphere size_co_ and changed the camera position_co_ for testing purposes._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Panning the camera up/down shows a strange jaggy line passing across the cloud sphere (FF 39).  I_t_m not sure what is causing that.  Be well._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_Update_dd__lt_/strong_gt_ It was the directionalLight that was causing the horizontal jaggy line.  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#24C4KC%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#24C4KC#10_lt_/a_gt__lt_/p_gt__lt_p_gt_(I turned-off the directional and turned-on a no-ground-color hemisphericLight - aimed at the sky... cuz that_t_s how they work best.)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Just in case it is important_co_  DirectionalLights have no .groundColor... that_t_s for hemisphericLights only.  But that might have been a mistake that was already in the demo... before you started.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_A nice groundColor setting for a hemi light... is our pre-made Gray() color._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#24C4KC%2312_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#24C4KC#12_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(line 106).  It lights the bottom of mesh real nicely.  Notice that the line doesn_t_t require _t_new_t_.  We know all this already_co_ don_t_t we?  Good ol_t_ Wingnut_co_ yappin_t_ away.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-07-10T07:58:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You could have your sky sphere built with side orientation set to _lt_em_gt_BABYLON.Mesh.BACKSIDE_co_ _lt_/em_gt_keep _lt_em_gt_backFaceCulling_lt_/em_gt_ on its material and have specular on the sphere also._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"The Snow Irbix","Date":"2015-07-10T10:14:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you very much Wingnut ! It_t_s very nice ! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_And I don_t_t find how does the BABYLON.Mesh.BACKSIDE work_co_ have you a documentation about it ? a link ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-07-10T10:30:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can use it when creating the mesh_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var boxCloud _eq_ BABYLON.Mesh.CreateSphere(_qt_boxCloud_qt__co_ 100_co_ 500_co_ scene_co_ true_co_ BABYLON.Mesh.BACKSIDE)_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-07-10T10:57:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Cool_co_ you guys.  Hey Irbix... are you planning having 2 cloud spheres... one for high clouds_co_ one for low (a little sphere inside a bigger one)?  Do you want to see the high clouds through the gaps in the low clouds?  That would be interesting.  Rotate them at slightly different speeds?  Yum... maybe.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-07-10T10:58:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It_t_s true there seems to be a problem though_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#24C4KC%2313_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#24C4KC#13_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In this example the red part of the sky should be slightly transparent_co_ since I passed a color with alpha value  &lt_sm_ 1. But this value does not seem to be taken into account in the procedural texture generation!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-07-10T11:14:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#24C4KC%2314_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#24C4KC#14_lt_/a_gt_  Weird.  The only shape that can be seen through jahow_t_s transparent clouds... is the fire-textured sphere (fontainSculptur2 - line 41 - I made it bigger)_co_ and the angle of viewing it_co_ matters (I sped-up that camera pan).  It sometimes disappears.  *scratch scratch*  I_t_m scared.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ alt_eq__qt__dd_o_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  I have a _t_frontside_t_ on line 149._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Using the _lt_u_gt_fire_lt_/u_gt_ proc texture on the cloud sphere... things act better._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#24C4KC%2315_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#24C4KC#15_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If I remember right_co_ there is a thread nearby that talked about Fire_t_s alpha_co_ and I think Dad72 and Meulta had some cool discussions_co_ which led to some tweaks.  Maybe the same tweaks need to happen to our cloud proc.  *shrug*_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-07-10T11:18:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Don_t_t worry Wingy_co_ it_t_s perfectly normal. Both spheres (cloud and fire) are _lt_em_gt_alpha-blended_lt_/em_gt__co_ which means they_t_re drawn on top of the rest_co_ and the closest to the camera is drawn first. Thus_co_ depending on the camera position_co_ the draw order is sometimes reversed _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ more here_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/page.php?p_eq_25100_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/page.php?p_eq_25100_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-07-10T11:46:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Quick fix so that the procedural texture handles alpha_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#24C4KC%2316_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#24C4KC#16_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I made a PR with the fix_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/598_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/598_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-07-10T12:06:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Damn_co_ Jahow just wedges a shader store right onboard and hacks the hell out of it.  Too cool!  You_t_re hot hot hot_co_ Jahow.  I_t_m glad you_t_re hanging around with us!  Took ya what?  17 seconds?  phew!   Excellent!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And thanks for the mini-tut on alpha blending!  I hear of these things_co_ but its excellent when you Gods point them out_co_ in day-to-day issues.  Thanks!!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Did you see the PG errors?  I can_t_t get it to display_co_ now... PG error reports are intermittent in my browser.... but it said for lines 157_co_ 158_co_ 160_co_ 161... cannot assign color4 to color3... no .toColor4() found on Color3._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That will probably correct itself after the AR.  (accepted request?) _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Typescript is typecasting upon us_co_ me thinks.  Intellisenselessness.   Smart editors... pft.  Sometimes they get a little head-strong and think they know more than we do.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-07-10T12:11:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yep_co_ Typescript is playing against us here. But the wonderful thing about JS and TS is that_co_ although you_t_re warned that there is an inconsistency_co_ you can just ignore it and keep hacking stuff all day._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also I became proficient in PG hacks because_lt_span style_eq__qt_font-size_dd_12px_sm__qt__gt_ I_t_m just too lazy to reproduce the issue on my computer_co_ fix it_co_ check that everything works and then commit the fix._lt_/span_gt_  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ph34r.png_qt_ alt_eq__qt__dd_ph34r_dd__qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ph34r@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"The Snow Irbix","Date":"2015-07-10T12:36:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes wingnut_co_ i want to have two or more spheres_co_ with clouds rotating and the skydome behind _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-07-10T17:00:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_PR validated. Nightly build in progress_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]