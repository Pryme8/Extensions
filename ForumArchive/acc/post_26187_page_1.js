[{"Owner":"AB95","Date":"2016-11-03T06:24:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everybody_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am very new to both Blender and Babylon. Basically I am trying to load a scene exported from Blender and create a skybox afterward_co_ the scene is nothing more than a default blender scene(the one consists of a box_co_ camera and light_co_ I load this scene just to make sure I hadn_t_t added or modified anything in the scene that may leads to other issues once I export the scene into babylon file). I try to create a skybox after loading the scene_co_ using code below_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar canvas_sm__lt_br /_gt_\n\tvar engine_sm__lt_br /_gt_\n\tvar scene_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfunction initScene() {_lt_br /_gt_\n\t  canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm__lt_br /_gt_\n\t  engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm__lt_br /_gt_\n\t  scene _eq_ new BABYLON.Scene(engine)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBABYLON.SceneLoader.Load(_qt_babylon/_qt__co__qt_testScene.babylon_qt__co_engine_co_function(newScene){\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    newScene.executeWhenReady(function(){_lt_br /_gt_\n\t      newScene.activeCamera.attachControl(canvas_co_false)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t      var ground _eq_ BABYLON.Mesh.CreateGround(_qt_ground_qt__co_ 10_co_ 10_co_ 2_co_ newScene)_sm__lt_br /_gt_\n\t      var skybox _eq_ BABYLON.Mesh.CreateBox(_qt_skyBox_qt__co_1000.0_co_newScene)_sm__lt_br /_gt_\n\t      var skyboxMaterial _eq_ new BABYLON.StandardMaterial(_qt_skyBox_qt__co_newScene)_sm__lt_br /_gt_\n\t      skyboxMaterial.backFaceCulling _eq_ false_sm__lt_br /_gt_\n\t      skybox.infiniteDistance _eq_ true_sm__lt_br /_gt_\n\t      skyboxMaterial.reflectionTexture _eq_ new BABYLON.CubeTexture(_qt_images/skybox/cloudSkyBox/DaySkybox_qt__co_ newScene)_sm__lt_br /_gt_\n\t      skyboxMaterial.reflectionTexture.coordinatesMode _eq_ BABYLON.Texture.SKYBOX_MODE_sm__lt_br /_gt_\n\t      skyboxMaterial.diffuseColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm__lt_br /_gt_\n\t      skyboxMaterial.specularColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm__lt_br /_gt_\n\t      skyboxMaterial.disableLighting _eq_ true_sm__lt_br /_gt_\n\t      skybox.material _eq_ skyboxMaterial_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t      engine.runRenderLoop(function(){_lt_br /_gt_\n\t        newScene.render()_sm__lt_br /_gt_\n\t      })_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t  })_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t}_co_function(progress){})_sm__lt_br /_gt_\n\t}\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfunction initBB(){_lt_br /_gt_\n\t  if (BABYLON.Engine.isSupported()){_lt_br /_gt_\n\t    initScene()_sm__lt_br /_gt_\n\t  }else{_lt_br /_gt_\n\t    console.log(_qt_not support BB_qt_)_sm__lt_br /_gt_\n\t  }_lt_br /_gt_\n\t}\n_lt_/p_gt_\n\n_lt_p_gt_\n\tdocument.addEventListener(_qt_DOMContentLoaded_qt__co_initBB_co_false)_sm__lt_br /_gt_\n\tdocument.addEventListener(_qt_resize_qt__co_function(){_lt_br /_gt_\n\t  engine.resize()_sm__lt_br /_gt_\n\t})_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq__eq_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe blender scene _qt_newScene_qt_ is loaded(I can see the box_co_ a directional light of the blender default scene_co_ I can use the free camera preset in blender scene)_co_ the ground mesh added into the newScene can be seen as well_co_ but the skybox is not shown!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is no error message shown on the browser console_co_ I had tried to google for similar problem but couldn_t_t find the solution... I am not sure if I set up the blender scene wrongly before I export or there is other factor that cause this issue. Any help would be greatly appreciated!\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_10116_qt__gt_TestProject.zip_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AB95","Date":"2016-11-03T08:35:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAfter some trial and error_co_ I figured it out.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI did not set the renderingGroupId of each of the meshes in scene properly_co_ after setting them properly_co_ I am able to see all of my meshes(including skybox).\n_lt_/p_gt_\n\n_lt_p_gt_\n\talso_co_ I did not set up my free camera in blender properly which its clipping value is set too high. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFeel good to figure out the problem!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Théo Sabattié","Date":"2016-11-03T12:51:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_t_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tested your code_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYour have to reduce the size of the skybox_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var skybox _eq_ BABYLON.Mesh.CreateBox(_qt_skyBox_qt__co_ 1000.0_co_ newScene)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tto\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var skybox _eq_ BABYLON.Mesh.CreateBox(_qt_skyBox_qt__co_ 50.0_co_ newScene)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tand that work. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"AB95","Date":"2016-11-03T15:58:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYeah I set the skybox way too big compare with the camera maxZ setting_co_ I figure out the problem of the skybox after I tweak around the renderingGroupId of the skybox as well as remaining meshes in the scene_co_ thank you for helping me test my code _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]