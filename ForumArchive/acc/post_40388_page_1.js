[{"Owner":"Calsa","Date":"2018-10-02T17:10:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all_co_ new to the forum but long time tinkerer of Babylon and cut my teeth on other engines going some 15 years back now.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have been playing with dynamic terrain and had a question that I did not see documentation or other posts about. Dynamic Terrain does not seem to follow the standard max draw distance set by camera.maxZ or fog (if enabled) or any other standard max draw distance / optimization method that regular meshes do_co_ at least not at large distances. MaxZ _lt_em_gt_does _lt_/em_gt_control view distance to a point_co_ but above 1000 units(ish) it seems to no longer have any effect. At large distances_co_ the terrain_t_s view distance seems to be governed by something else?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat mechanism is being used to control how much further _qt_out_qt_ a terrain in drawn?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe screens shot is of a terrain that seems to stop rendering way before the Camera.maxZ distance is hit. There are a few meshes circled that sit much further away then the edge of that terrain_co_ and they still render until maxZ but that terrain gets cut much closer to the camera.  I can move my camera toward those meshes and more terrain appears_co_ but I font seem to understand what governs the dynamic terrains maximum render distance from camera. I noticed the same issue with the flight sim that @jerome - the god of dynamic terrain knowledge - posted_co_ so its not just me. His terrain has a very hard cutoff much closer than it seems like it should. Any ideasof what that limiter / property is_co_ and how / if it can be altered?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var createTerrain _eq_ function(mapData_co_ mapSubX_co_ mapSubZ) {\n    var options _eq_ {\n        terrainSub_dd_ 400_co_  // NTS H Res Tile 400_co_ LR tile 20 \n        mapData_dd_ mapData_co_ // the generated data received\n        mapSubX_dd_ mapSubX_co_ mapSubZ_dd_ mapSubZ // the map number of points per dimension\n    }_sm_\n    terrain _eq_ new BABYLON.DynamicTerrain(_qt_terrainblock1x1_qt__co_ options_co_ scene)_sm_\n    terrain.createUVMap()_sm_ \n    terrain.mesh.material _eq_ blueGridTestMat_sm_\n}_sm_\n\n\n// NTS Todo - Stream in multi resolution tiles from DB\nvar hmURL _eq_ _qt_../assets/flightAreaMerged.png_qt__sm_  // heightmap file URL\nvar hmOptions _eq_ {\n        width_dd_ 5000_co_ height_dd_ 5000_co_          // NTS Should be about right for the test height map \n        subX_dd_ 2000_co_ subZ_dd_ 2000_co_              // HM samples\n        minHeight_dd_ -256_co_ maxHeight_dd_ 256_co_    // NTS in game _qt_altitude Range_qt_. Todo Real Life AGL Altitude Scaling to Game Unit Conversion. \n        onReady_dd_ createTerrain              // callback function declaration\n}_sm_\n\n\nvar mapData _eq_ new Float32Array(2000 * 2000 * 3)_sm_ // the array that will store the generated data\nvar mapType _eq_ BABYLON.DynamicTerrain.CreateMapFromHeightMapToRef(hmURL_co_ hmOptions_co_ mapData_co_ scene)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_20307_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_10/DTerrain.PNG.27005ca57aaddafe88b4506de1437d1a.PNG_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_DTerrain.PNG_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_20307_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_10/DTerrain.thumb.PNG.9dec8a34bf520299145b6efc318458d6.PNG_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-10-02T18:18:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/32953-calsa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_32953_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/32953-calsa/_qt_ rel_eq__qt__qt__gt_@Calsa_lt_/a_gt_ Welcome to the forum!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not sure I exactly get your question but from my experience the render distance is the min of it_t_s width/height and the cameras maxZ. Could you share a playground if possible repro_t_ing the issue?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also found some more docs here which might help\n_lt_/p_gt_\n\n_lt_ul_gt_\n\t_lt_li_gt_\n\t\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/blob/master/DynamicTerrain/documentation/dynamicTerrainDocumentation.md_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Extensions/blob/master/DynamicTerrain/documentation/dynamicTerrainDocumentation.md_lt_/a_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/blob/master/DynamicTerrain/documentation/dynamicTerrainExamples.md_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Extensions/blob/master/DynamicTerrain/documentation/dynamicTerrainExamples.md_lt_/a_gt_\n\t_lt_/li_gt_\n_lt_/ul_gt_\n\n_lt_p_gt_\n\tMaybe _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ knows more about this?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2018-10-02T19:02:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe DynamicTerrain is just a mesh sliding in the space_co_ hooked to the camera and morphing accordingly to the map data.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not sure to really get what you need_co_ but I think you would like to have something like a bigger terrain_co_ stretched far away in the distance_co_ wouldn_t_t you ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf yes_co_ you have several possibilities_co_ each being mixable with the other ones _lt_span_gt__dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_- change your map scale without changing the terrain size. The terrain will be then scaled as well. How to do this ? just multiply every x and z values in the map data array by the wanted scale factor. ex _dd_ multiplying all x and z by 2 will give a map twice bigger_co_ so a terrain twice bigger without changing its dimensions (vertex number or subdivisions). This has no impact on the perfs but may reduce the terrain smoothness_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_- create a bigger terrain _lt_span_gt__dd_ _lt_/span_gt_so more subdivisions... and more vertex to compute each update. Will decrease the perfs. _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_- use the perimetric LOD _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/blob/master/DynamicTerrain/documentation/dynamicTerrainDocumentation.md#perimetric-lod_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Extensions/blob/master/DynamicTerrain/documentation/dynamicTerrainDocumentation.md#perimetric-lod_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis feature allows you to enlarge the perimetric quads only on their width or length. In this example_co_ the 4 quads around the terrain perimeter are twice wider or/and longer than the inside ones _dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#FJNR5%23170_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#FJNR5#170_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis stretches the terrain on the distant parts from the camera only.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can set many limits from the terrain center to its edge. Each time a limit is defined_co_ the LOD increases by 1.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you want a single limit_co_ say 2 quads_co_ but to increase the LOD by more than 1_co_ then just set many times the same limit _dd_ [2_co_ 2_co_ 2]  _eq_&gt_sm_ 3 times from the 2nd quads_co_ so the perimetric LOD will increased by 1 + 1 + 1 _eq_ 3.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust make some tests if this seems still obscure to you _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis has no impact on the perfs.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2018-10-03T06:34:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf your goal is not to expand the terrain but to limit the visibility of objects that aren_t_t yet in the terrain_co_ you can either set the camera maxZ property at the wanted value (say_co_ half the real terrain size _lt_span_gt__dd_ _lt_/span_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/blob/master/DynamicTerrain/documentation/dynamicTerrainDocumentation.md#other-properties_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Extensions/blob/master/DynamicTerrain/documentation/dynamicTerrainDocumentation.md#other-properties_lt_/a_gt__lt_span_gt_  _lt_/span_gt_)_co_ you can either set your object as visible only when it_t_s inside the terrain area with the function .contains() _lt_span_gt__dd_ _lt_/span_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/blob/master/DynamicTerrain/documentation/dynamicTerrainDocumentation.md#useful-functions_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Extensions/blob/master/DynamicTerrain/documentation/dynamicTerrainDocumentation.md#useful-functions_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tobject.isVisible _eq_ terrain.contains(object.position.x_co_ object.position.z) )_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tor both ways together\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]