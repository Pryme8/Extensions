[{"Owner":"Dad72","Date":"2015-02-28T19:59:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Since the last update 2.1 I have this error (see image)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The error comes from this function (line 11)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_DirectionalLight.prototype.setShadowProjectionMatrix _eq_ function (matrix_co_ viewMatrix_co_ renderList_co_ useVSM) {            var orthoLeft _eq_ Number.MAX_VALUE_sm_            var orthoRight _eq_ Number.MIN_VALUE_sm_            var orthoTop _eq_ Number.MIN_VALUE_sm_            var orthoBottom _eq_ Number.MAX_VALUE_sm_            var orthoNear _eq_ Number.MAX_VALUE_sm_            var orthoFar _eq_ Number.MIN_VALUE_sm_            var tempVector3 _eq_ BABYLON.Vector3.Zero()_sm_            var activeCamera _eq_ this.getScene().activeCamera_sm_            for (var meshIndex _eq_ 0_sm_ meshIndex &lt_sm_ renderList.length_sm_ meshIndex++) {                var boundingBox _eq_ renderList[meshIndex].getBoundingInfo().boundingBox_sm_                for (var index _eq_ 0_sm_ index &lt_sm_ boundingBox.vectorsWorld.length_sm_ index++) {                    BABYLON.Vector3.TransformCoordinatesToRef(boundingBox.vectorsWorld[index]_co_ viewMatrix_co_ tempVector3)_sm_                    if (tempVector3.x &lt_sm_ orthoLeft)                        orthoLeft _eq_ tempVector3.x_sm_                    if (tempVector3.y &lt_sm_ orthoBottom)                        orthoBottom _eq_ tempVector3.y_sm_                    if (tempVector3.x &gt_sm_ orthoRight)                        orthoRight _eq_ tempVector3.x_sm_                    if (tempVector3.y &gt_sm_ orthoTop)                        orthoTop _eq_ tempVector3.y_sm_                    if (tempVector3.z &lt_sm_ orthoNear)                        orthoNear _eq_ tempVector3.z_sm_                    if (tempVector3.z &gt_sm_ orthoFar)                        orthoFar _eq_ tempVector3.z_sm_                }            }            var orthoWidth _eq_ Math.max(Math.abs(orthoRight)_co_ Math.abs(orthoLeft)) * this.shadowOrthoScale_sm_            var orthoHeight _eq_ Math.max(Math.abs(orthoTop)_co_ Math.abs(orthoBottom)) * this.shadowOrthoScale_sm_            var orthoDepth _eq_ Math.max(Math.abs(orthoNear)_co_ Math.abs(orthoFar)) * this.shadowOrthoDepthScale_sm_            BABYLON.Matrix.OrthoOffCenterLHToRef(-orthoWidth_co_ orthoWidth_co_ -orthoHeight_co_ orthoHeight_co_ useVSM ? -orthoDepth _dd_ activeCamera.minZ_co_ orthoDepth_co_ matrix)_sm_        }_sm__lt_/pre_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2015-02-28T20:33:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi!_lt_/p_gt__lt_p_gt_deltakosh is currently completely refactoring our shadows engine for better visual quality and performance. He hasn_t_t finished it yet._lt_/p_gt__lt_p_gt_In the meantime please stick to 2.0._lt_/p_gt__lt_p_gt_Bye_co__lt_/p_gt__lt_p_gt_David _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-02-28T21:38:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_I point to help. Is not that what we_t_re supposed to do to help. or should we just test the stable version and never report bugs?_lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Beta and Alpha  version  are made to be tested_co_ right?_lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_I_t_m not complaining Davrous_co_ I point to help. I am aware that 2.1 is not complete._lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2015-03-01T09:51:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Of course_co_ you can test. We need tests!_lt_/p_gt__lt_p_gt_I_t_m just saying that for your product_co_ if you want it to work in the meantime_co_ use 2.0._lt_/p_gt__lt_p_gt_You don_t_t have to be that nervous _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-03-01T11:09:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes_co_ yes_co_ of course. but I am developing locally_co_ so I have no problem. I agree that the use of a final product_co_ I must use stable versions._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-02T03:27:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey Dad!!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_thanks for your help..could you let me know more precisely where do you get this error?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-02T04:51:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hum I think I found the issue _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you for your report_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]