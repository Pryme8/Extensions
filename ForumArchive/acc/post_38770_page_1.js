[{"Owner":"Bladetrick","Date":"2018-07-10T14:34:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have this mesh loaded up.  When I point the camera at it_co_ this is what it looks like from under.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_19109_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_07/image.png.ce0288f195dcc647d909674bf7599c14.png_qt_ alt_eq__qt_image.png.ce0288f195dcc647d909674bf7599c14.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ when I rotate the camera around it_co_ the mesh appears to become transparent.  I don_t_t see the outside. Just a view to the inside.  Here_t_s the view from above and turned a bit.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_19110_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_07/image.png.8be5a86eae7c813d2a629855d71088c8.png_qt_ alt_eq__qt_image.png.8be5a86eae7c813d2a629855d71088c8.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI feel like I missed something easy somewhere.  Anyone have any thoughts?  Is this the way it was exported from the modeler or is there something I need to set in Babylon to see the outside.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-07-10T14:45:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\teach face has a normal._lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/resources/normals_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/resources/normals_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbackface culling_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/babylon101/materials#back-face-culling_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/babylon101/materials#back-face-culling_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tLooks like your normals may be backwards or shared.  If you want them visible from both sides you need to disable backFaceCulling.  If you share your model then likely we can figure it out.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bladetrick","Date":"2018-07-10T15:01:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey thanks_co_ Brian.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAttached is my .obj\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll read the links you sent.   Appreciate the help.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_19120_qt__gt_Cockpit.obj_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bladetrick","Date":"2018-07-10T15:43:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti set my mesh_t_s backFaceCulling _eq_ false and that took care of it.  Thanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]