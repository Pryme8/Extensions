[{"Owner":"BMWPilote","Date":"2018-09-11T09:52:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI need to freeze my materials for my static scene. However I am not sure when to freeze them safely? I tried to call freezeMateiral right after assigning the textures. But the result was that the textures could never been displayed. I tried to free them using BABYLON.Texture.WhenAllReady callback. But it did not worker either. I needed to add a large timeout to make sure that all the materials were ready. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo my question is whether we have a way by which we can 100% be sure that the material is really ready (including opengl texture) so that I can call freeze safely?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-09-11T17:27:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCould you create a _lt_a href_eq__qt_http_dd_//playground.babylonjs.com_qt_ rel_eq__qt_external nofollow_qt__gt_playground_lt_/a_gt_ reproducing what you are describing?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-11T18:10:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t(you can also try to use the material.onCompiled callback)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]