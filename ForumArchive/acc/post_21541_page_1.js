[{"Owner":"OMAR","Date":"2016-03-29T06:02:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan I lock the FPS of my Babylon.js app so it has 30 FPS instead of 60?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t-Thanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-03-29T11:40:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBJS relies on the call to _lt_em_gt_RequestAnimationFrame()_lt_/em_gt_ -RAF- in tis render loop to clean and then to redraw the canvas.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYour browser tries to call RAF at the best rate it can_co_ so 60 times per second if possible.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI guess that if you want to set your own frequency_co_ you could use _lt_em_gt_setInterval()_lt_/em_gt_ instead\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]