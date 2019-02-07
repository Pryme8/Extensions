[{"Owner":"jerome","Date":"2016-10-18T13:49:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\there_t_s a PG example _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#10RCC9_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#10RCC9_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s no physics engine here_co_ just a simple implementation of bouncing against a sphere _dd_ resultVelocity _eq_ -incomingVelocity + 2 * dot(normal_co_ incomingVelocity) * normal\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs you can see_co_ 200 solid particles (boxes) are emitted from some kind of fountain with an initial velocity and fall down to the ground because of the gravity. A slowly moving sphere waves in the air and the particles bounce against its surface. When they hit the sphere_co_ they change slightly their color and are applied some energy loss.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis PG runs also at 60 fps in Chrome here with 5000 boxes ! _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#10RCC9%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#10RCC9#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-10-18T15:30:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere is SPS working with OIMO (unplugged)_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t200 boxes_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#12SEYV%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#12SEYV#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t600 boxes_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#12SEYV%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#12SEYV#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1200 boxes_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#12SEYV%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#12SEYV#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1200 spheres (Captain Kangaroo test)_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#12SEYV%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#12SEYV#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1000 spheres and faster gravity_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#12SEYV%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#12SEYV#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#12SEYV%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#12SEYV#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#12SEYV%238_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#12SEYV#8_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-10-18T15:51:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t(Wingy wears-out a mouse from so much bookmarking)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tYou guys are pretty close to basic fluid-dynamics_co_ as is Raanan_t_s cloth demo.  hmm.  Jerome_co_ yours is not doing particle-to-particle collision_co_ right?  Particle-to-particle collision (p2pc) would take lots more computing horsepower_co_ I would suspect.  And then... into a tube they go.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Hydraulics Sim version 1.0!  Yeah!  _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tNice demos_co_ you guys.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-10-18T15:51:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOimojs is better than my implementation because it checks also collisions between particles (what I don_t_t do_co_ I just check against the sphere) and needs less user code_co_ but the framerate is also a bit lower then. ([EDIT] oimo hardly works here with 5000 boxes)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tReally nice demo @adam _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__co_ just what _lt_span_gt_@_lt_/span_gt_dbawel was asking for in the first post_co_ I suppose\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-10-18T16:31:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI can_t_t stop playing _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#10RCC9%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#10RCC9#2_lt_/a_gt_  (tetrahedrons)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#10RCC9%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#10RCC9#3_lt_/a_gt_ (stuffhedrons)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#10RCC9%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#10RCC9#4_lt_/a_gt_ (triangles)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tetc_co_ etc\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-18T17:45:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWe should create a feature scene for bjs homepage!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-10-18T18:43:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\toeuf corse !\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-10-18T18:46:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tand this works with the billboard mode _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#10RCC9%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#10RCC9#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t[EDIT] So you can play with legacy-like particles (sps billboard) AND particle intersections now _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#10RCC9%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#10RCC9#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#10RCC9%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#10RCC9#7_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-10-18T21:04:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ -\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOutstanding! I wish I had this a week ago_co_ as I_t_m too far into the projet to switch now. And it appears that _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4289_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4289-adam/_qt_ rel_eq__qt__qt__gt_@adam_lt_/a_gt_ may have fixed the bug in Oimo (still testing)_co_ so the future is looking bright.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for all of your hard work_co_ and we_t_ll all be watching to see what you do next._lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-18T22:26:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tFuture is always bright with such a community\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-10-19T09:39:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ would this one be enough for a feature demo (_qt_solid particle intersections_qt_) in the BJS site _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#PBVEM_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#PBVEM    _lt_/a_gt_?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1200 coloured boxes_co_ tetrahedrons and polyhedrons bouncing against a flying sphere. Runs at 60 fps in my Chrome\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-10-19T14:49:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan_t_t stop playing ... _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ told about some fluid dynamics_co_ so I just tried some naive settings from the existing playground\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1QWKFV%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1QWKFV#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twell_co_ there_t_s 10K plane billboarded particles here_co_ so for me ... chrome and a decent computer to keep 60 fps\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-19T17:55:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI take this one_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#PBVEM_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#PBVEM_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis is perfect!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-10-19T17:56:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-10-20T12:36:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ unless you prefer this more polished version with no alpha but shadows instead (will work fine as soon as the PR fix is merged) _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2BXZC_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2BXZC_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1500 solid particles_co_ global bbox (for shadows) computed in the same loop than the particle computations_co_ so extra-fast\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t[EDIT] ooops_co_ didn_t_t notice the first version was already on-line in the BJS site\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-10-20T14:03:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere is a PG that uses instances instead of SPS_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#12SEYV%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#12SEYV#9_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s probably already been determined_co_ but if you need your particles to collide with each other_co_ you might as well go with instances because the bottleneck is going to be the physics engine.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-10-20T15:50:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tthat_t_s right _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-10-24T09:46:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_ul_gt__lt_li_gt_\n\t\tnew SPS optimization feature _dd_ _lt_code_gt_boundingSphereOnly_lt_/code_gt_ (default _eq_ false)_lt_br /_gt_\n\t\tIf the SPS is created for computing particle intersections_co_ we can now limit this computation to the particle bounding spheres only_co_ what can usually be enough for tiny animated objects.\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_pre_gt_\n_lt_code_gt_var sps _eq_ new BABYLON.SolidParticleSystem(_qt_sps_qt__co_ scene_co_ {particleIntersection_dd_ true_co_ boundingSphereOnly_dd_ true})_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis increases noticeably the perfs with big numbers of managed particles_co_ as a BoundingBox requires 8 extra iterations per particle (each box vertex).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t[EDIT] In order to give you an idea about the gain_co_ this former pseudo-fluid-dynamics PG_co_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1QWKFV%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1QWKFV#1_lt_/a_gt_ _co_ (beware before clicking_co_ this is CPU intensive and can freeze FF) that was running at 60 fps in my Chrome with 10K particles_co_ can now run at 60 fps with 25K_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1QWKFV%231_qt_ rel_eq__qt_external nofollow_qt__gt_ _lt_/a_gt_particles checking their intersection on their bounding spheres only.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-10-25T14:36:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPending PR of a new feature related to intersection (fast bounding sphere intersection improved for spherical(-like) particles) _dd_\n_lt_/p_gt_\n\n_lt_div_gt_\n\t_lt_div_gt_\n\t\t_lt_pre_gt_\n_lt_span_gt_var_lt_/span_gt_ sps _lt_span_gt__eq__lt_/span_gt_ _lt_span_gt_new_lt_/span_gt_ _lt_span_gt_BABYLON.SolidParticleSystem_lt_/span_gt_(_lt_span_gt__lt_span_gt__qt__lt_/span_gt_sps_lt_span_gt__qt__lt_/span_gt__lt_/span_gt__co_ scene_co_ {particleIntersection_lt_span_gt__dd__lt_/span_gt_ _lt_span_gt_true_lt_/span_gt__co_ boundingSphereOnly_lt_span_gt__dd__lt_/span_gt_ _lt_span_gt_true_lt_/span_gt__co_ bSphereRadiusFactor _lt_span_gt__dd__lt_/span_gt_ _lt_span_gt_1.0_lt_/span_gt_ _lt_span_gt_/_lt_/span_gt_ _lt_span_gt_Math_lt_/span_gt_._lt_span_gt_sqrt_lt_/span_gt_(_lt_span_gt_3.0_lt_/span_gt_)}_sm__lt_/pre_gt_\n\t_lt_/div_gt_\n\n\t_lt_p_gt_\n\t\tThe new paramater _lt_code_gt_bSphereRadiusFactor_lt_/code_gt_ allows to modify the bounding sphere radius _dd_ the bounding sphere radius is multiplied by this parameter.\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\tExample _dd_ with the factor 1 / SQRT(3)_co_ a spherical particle will exactly match its bounding sphere._lt_br /_gt_\n\t\tAs sometimes tiny animated objects (solid particles) can be approximated by little spheres_co_ this is really useful to set their bounding spheres close to their own shape and then just use the fast bounding sphere intersection only.\n\t_lt_/p_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-25T16:21:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tvalidated and merged\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPG updated\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-10-25T17:05:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tdemo PG tomorrow (probably)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-10-26T09:05:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is a set of PG examples to understand the differences between the intersection computation modes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs you may know_co_ mesh or solid particle intersections are computed according to their bounding boxes and bounding spheres. In short_co_ a mesh is inside its bounding box_co_ and its bounding box is inside its bounding sphere_co_ so the sphere is bigger than the box_co_ what is bigger than the mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe intersection rules are those _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1 - if two bounding spheres don_t_t intersect_co_ then the related meshes don_t_t intersect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2 - Else_co_ if both related bounding boxes don_t_t intersect_co_ then the meshes still don_t_t intersect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3 - Else_co_ the meshes intersect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSolid particle intersections work the same way when you enable them in your SPS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe default mode is then to compute each particle bounding box and check (AABB) intersections between them_co_ whatever the shape of the embedded particle.\n_lt_/p_gt_\n\n_lt_p_gt_\n\texample 1 _dd_ default mode with a sphere_co_ AABB bounding boxes intersections _eq_&gt_sm_  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#29F0EG_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#29F0EG_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tContrary to what you can imagine_co_ this is the most accurate mode to compute the intersections with the SPS. Here_co_ you can notice (in purpose)_co_ that the blue particles intersect somewhat cuboid around the red sphere. I chose a sphere intentionally to make it very visible_co_ but you probably wouldn_t_t have noticed this with real solid particles (these are planar and billboarded) and another kind of shape than a sphere. This mode is also the most CPU intensive.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf we don_t_t mind about accuracy but need more performances_co_ we can force the intersection computations on the bounding spheres only and no longer on the bounding boxes _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\texample 2 _dd_ boundingSphereOnly _eq_ true  _eq_&gt_sm_  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#29F0EG%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#29F0EG#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow the blue particles intersect something spherical around the red sphere. This is its bounding sphere... farther from it_co_ because_co_ remember_co_ the red sphere (mesh) is inside its bounding box_co_ what is inside its bounding sphere.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe would like to tweak this bounding sphere_co_ to make it closer to its embedded mesh since we don_t_t care about the bounding boxes. We can then moderate its radius by some factor. For instance_co_ the bounding sphere_co_ around a sphere with a radius R_co_ has a radius of R * SQRT(3)   I let you discover the maths behind by your own _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_. So if we multiply the current bounding sphere radius by 1 / SQRT(3)_co_ the bounding sphere will have the same radius than its embedded sphere (mesh).\n_lt_/p_gt_\n\n_lt_p_gt_\n\texample 3 _dd_ bSphereRadiusFactor _eq_ 1 / SQRT(3) _eq_&gt_sm_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#29F0EG%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#29F0EG#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe bounding sphere now exactly matches the red sphere and the blue particles intersect right its surface.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe can also play with this factor to produce the inverted result with higher factor values. Here_t_s a small red ball protected from the water drops by an invisible force around it _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#29F0EG%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#29F0EG#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHave fun _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]