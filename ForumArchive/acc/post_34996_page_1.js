[{"Owner":"edzis","Date":"2018-01-10T15:39:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am using Blender exporter to `.babylon` file format but lately am noticing more mentions of `.gltf` (and `.glb`) besides your support for others.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat is your recommendation for my use case explained below or more generic rule of thumb on when to to use which format?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_My context_dd__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\tWe make scenes in Blender with more than 100 smaller pieces with textures and expose those with BJS.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tWe allow users to change textures and materials.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tWe allow users to move objects.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tWe do do not have any animations.\n\t_lt_/li_gt_\n_lt_/ul_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-10T17:00:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello and welcome\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn your case both formats will work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t.Babylon file can contain almost everything you see in a scene but it is a babylon only format\n_lt_/p_gt_\n\n_lt_p_gt_\n\t.glTF on the other hand is an open standard format supported by the Khronos Group. It contains less features but in your case it will be perfectly fine\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"edzis","Date":"2018-01-10T22:34:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks! Will give it a go in hopes for the binary format to reduce transport and decoding time - my `.babylon` currently weight 13 MB.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-10T23:00:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tyou can turn on gzip on your webserver_dd_ this will reduce the size drastically\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-01-11T16:32:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWould be interested in the results.  While a strict 4 bytes for a float might be good_co_ I wonder about how the methods of building indexes between the 2 affect the results.  FYI_co_ look at the .log file for number of vertices exported for a .babylon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis number of vertices has a big impact_co_ because it affects the # of positions_co_ normals_co_ UVs_co_ vertex colors_co_ matrix weights_co_ matrix indexes_co_ &amp_sm_ shape keys (morph targets in BJS terminology).  I thought .glTF was supposed to be non-lossy.  _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_ does .glTF even index?  The .babylon exporter rounds to 4 decimals prior to testing for equality_co_ making it a lossy process.  If .glTF is strict_co_ very very small differences in values will cause it to export more vertices.  This affects more than just the file size_co_ it will also impact runtime performance.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMany meshes are created with way more vertices than really required for a game.  An example is the teeth mesh from MakeHuman.  Unless you are doing a dentist scene ( _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ maybe)_co_ you do not need all that detail.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFYI_co_ Blender has a _t_Limited dissolve_t_ operator which can do a really good job of reducing with minimal impact.    It takes a maximum angle_co_ default 5%_co_ to limit what it keeps.  I have been doing it outside of the exporter_co_ but then I really need to keep multiple versions of the .blend.  Blender also has un-do capability inside of a script.  I will be adding a custom property of _t_dissolveAngle_t_ for meshes.  If not 0_co_ it will_dd_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\tset an undo restore point\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tdo a limited dissolve of the mesh\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\texport the mesh\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tperform an undo\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\tNow no more multiple versions of the .blend_co_ and no more writing down the value you used.  You can experiment with the value to use_co_ undoing as you change.  Once you have a good value_co_ pop it in the field &amp_sm_ save the .blend.  This will increase export time_co_ but I got it much faster than before anyway.  5 extra seconds is nothing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t.glTF_co_ unity_co_ 3dsMax_co_ &amp_sm_ Maya exporters will not even get close in either vertex nor file size terms_co_ once this is inplace (first quarter).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-01-11T21:00:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAlso_co_ I forgot since binary files cannot be zipped_co_ for file size comparisons multiply the size of the .babylon file by 0.25 when comparing to .glTF\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"edzis","Date":"2018-01-13T21:08:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_ Thanks for the detailed insights. I will pass to my colleagues who are creating the models.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]