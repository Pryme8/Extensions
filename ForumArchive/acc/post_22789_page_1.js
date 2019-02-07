[{"Owner":"JBlack_UTD","Date":"2016-05-25T15:55:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI don_t_t see a way to export a terrain material from Unity. Is there a method I could use to export an array of textures_co_ and then create the terrain material later in babylonJS with those textures?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2016-05-25T16:52:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21762-jblack_utd/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21762_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21762-jblack_utd/_qt_ rel_eq__qt__qt__gt_@JBlack_UTD_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tplease see_dd_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDocs_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/extensions/Terrain_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/extensions/Terrain_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPG_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#E6OZX%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#E6OZX#7_lt_/a_gt_ (same link can be found in the docs)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tfor terrain material_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tplease note that it_t_s an extension and therefore must be included seperately from the main babylon.js in your project _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can make a simple 2d image in any image editor_co_ aproximately same size as your plane/ground and then apply different colors where you want them_co_ which then turns into different textures on your scene _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Edit_dd__lt_/strong_gt_ with same _qt_size_qt_ i ofc mean dimensions/shape.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tTips_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen working with the terrain material and pre-made 3d scene files_co_ It_t_s always a good idea to design your level first in 2d_co_ e.g. choose where you want your roads_co_ grass_co_ etc to be.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can then import that image as a texture for your plane/ground in your 3d editor to use as a template to follow and apply any height changes you wish to have_co_ place 3d objects_co_ etc_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tbefore you then export to .babylon and then finally apply the texture(_t_s) via the terrain material extension _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JBlack_UTD","Date":"2016-05-25T17:12:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tRIght_co_ sorry - I wasn_t_t specific enough.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve emulated the terrain material shader in Unity using shaderforge_co_ and would ideally like to export that straight into BabylonJS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve also manually created a terrain material in BabylonJS to understand how it works (via the extension).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe disconnect is that the Unity exporter (via SceneBuilder.Material.cs) has  _lt_span style_eq__qt_color_dd_rgb(121_co_93_co_163)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_16.8px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_DumpStandardMaterial_lt_/span_gt_ and even  _lt_span style_eq__qt_color_dd_rgb(121_co_93_co_163)_sm_font-family_dd_Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_16.8px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_DumpPBRMaterial_lt_/span_gt_ _co_ but not a DumpTerrainMaterial function. I_t_d be happy to make one_co_ but the problem then becomes that the BabylonExport.Entities.dll doesn_t_t seem to contain a definition for the terrain material (which is reasonable because it_t_s an extension!).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tShould I be trying to add a custom definition akin to the entities_co_ or should I be exporting data (such as paths) to BabylonJS so it can use the extension locally? And this goes for any custom shader/material that I might want to export from Unity to BabylonJS. I_t_m pretty far down the rabbit hole so I might as well...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2016-05-25T17:44:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh_co_ i don_t_t suppose you can somehow export it as a normal material?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsorry_co_ i don_t_t really know unity_co_ so that_t_s all i got _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-25T18:13:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey..you can edit and update the entities here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/Exporters/3ds%20Max/BabylonExport.Entities_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/Exporters/3ds%20Max/BabylonExport.Entities_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JBlack_UTD","Date":"2016-05-25T21:06:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCool!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve made my terrain material entity_co_ a DumpTerrainMaterial function in SceneBuilder.Materials.cs_co_ and then I check to see if the shader matches my emulated one in SceneBuilder.Meshes.cs_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_...else if (renderer.sharedMaterial.shader.name.Equals(_qt_BabylonJS/Terrain_qt_))\n{\n     babylonMesh.materialId _eq_ DumpTerrainMaterial(renderer.sharedMaterial_co_ renderer).id_sm_\n}\nelse\n{\n     babylonMesh.materialId _eq_ DumpMaterial(renderer.sharedMaterial_co_ renderer).id_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\twhich produces... another standard material.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhich is more than I had before! Before the above code wouldn_t_t even give me that much.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_The material in BabylonJS shows up as an unlit white solid color_co_ which tells me it_t_s not getting texture/shader data. _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo be honest I don_t_t know how any of the materials are getting shader data since I_t_m doing all this through a gulp server_co_ and I don_t_t see any .fx or .ts files anywhere.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSomewhere along the way_co_ I_t_m not telling BabylonJS enough to create a terrain material. Unless I_t_m mistaken_co_ it_t_s falling back to creating a standard material_co_ and then it fails to load a texture because I_t_m trying to assign _qt_diffuseTexture1_qt_ instead of just _qt_diffuseTexture_qt_.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-25T23:05:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tDid you mentioned that you are exporting a TerrainMaterial like this_dd__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/materialsLibrary/materials/terrain/babylon.terrainMaterial.ts#L385_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/materialsLibrary/materials/terrain/babylon.terrainMaterial.ts#L385_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JBlack_UTD","Date":"2016-05-31T22:20:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI feel like I am still missing a vital piece of information... this other question is along the same train of thought_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/22847-unity3d-to-babylon-exporter-and-skyboxcubemaps/?do_eq_embed_qt__gt__lt_/iframe_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would love to be able to get Unity to export certain properties. Among the various things_co_ such as name_co_ id_co_ and other properties that get serialized and sent to BabylonJS and parsed by the .max.js file_co_ however_co_ I don_t_t see how the BabylonJS engine is getting type information.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s say I wanted to use a shader I made for unity to work in BabylonJS. I have a .shader which is assigned to a .material that has a few various .png images that determine color information. All of those are types of assets that can be packaged (copied)_co_ parsed_co_ and then re-created in BabylonJS. Where the disconnect is happening is if I want that custom shader to look the same.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can_t_t come in and define my own material type - I have to conform to ones already available.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt__lt_em_gt__lt_strong_gt_How could I get BabylonJS to look at external files for material data?_lt_/strong_gt__lt_/em_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-01T21:35:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDid you check what I did here_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Exporters/Unity%205/Unity3D2Babylon/SceneBuilder.Materials.cs#L186_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Exporters/Unity%205/Unity3D2Babylon/SceneBuilder.Materials.cs#L186_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBasically I try to find equivalent between unity material and stdMaterial (which is pretty flexible)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr here for PBR_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Exporters/Unity%205/Unity3D2Babylon/SceneBuilder.Materials.cs#L290_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Exporters/Unity%205/Unity3D2Babylon/SceneBuilder.Materials.cs#L290_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JBlack_UTD","Date":"2016-06-01T21:57:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes I did!\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_private BabylonTerrainMaterial DumpTerrainMaterial(Material material_co_ Renderer renderer)\n{\n   ///construct the material data\n   ...\n   if (material.HasProperty(_qt__SplatMap_qt_))\n   {\n      ...\n      //copy material data and texture\n   ...\n   terrainMaterialsDictionary.Add(bMat.name_co_ bMat)_sm_\n\n   return bMat_sm_\n}\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tSo I_t_ve emulated the functionality and it imports into Babylon with the mix_co_ diffuse_co_ and bump textures_co_ except for instead of creating a terrain material_co_ it creates a standard material. I_t_ve stepped through the code and it_t_s even calling the functions inside babylon.terrainMaterial.js!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ although it isn_t_t returning anything...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-02T00:10:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tok but did you check this? I mean adding the customType property?\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_129948_qt_ data-ipsquote-contentid_eq__qt_22789_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1464217504_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 5/25/2016 at 4_dd_05 PM_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tDid you mentioned that you are exporting a TerrainMaterial like this_dd__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/materialsLibrary/materials/terrain/babylon.terrainMaterial.ts#L385_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/materialsLibrary/materials/terrain/babylon.terrainMaterial.ts#L385_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JBlack_UTD","Date":"2016-06-02T14:23:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCool! So i added a customType string to the BabylonTerrainMaterial.cs file and it gave me this.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_babylon.max.js_dd_4413 Uncaught TypeError_dd_ Cannot read property _t_BabylonTerrainMaterial_t_ of undefined_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI also tried passing just _t_TerrainMaterial_t_ and it gives the previously observed error.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ Because the customType has to be _qt_BABYLON.TerrainMaterial_qt_ !!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo it now imports into BabylonJS as a terrain material - exciting. Now I have to make it not black.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ which is apparently caused by alpha being 0. Set it to 1 and I can now see it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-02T22:15:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYEAH!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JBlack_UTD","Date":"2016-06-03T14:51:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYay! So I_t_m getting all the expected data from the textures and materials.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve left the BabylonJS terrain _lt_em_gt_shaders_lt_/em_gt_ alone_co_ and I_t_m wondering if it_t_s causing the terrainMaterials to not get light from point lights. There_t_s a screenshot attached showing the unity scene and then the BabylonJS with a bright point light and a small spot light. The exporter is tweaked a bit to mess with exponents and intensity_co_ but everything should be conducive to emulate the lighting conditions from Unity to BabylonJS!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/TerrainLighting1.png.8c49175402e76189339d17b3d0357d5b.png_qt_ data-fileid_eq__qt_7958_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img alt_eq__qt_TerrainLighting1.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_7958_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_06/TerrainLighting1.thumb.png.7e227eb7ed385652d2e20f42bccaf6fe.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso the standard material that gets imported loses its diffuse color_co_ but I think that_t_s a different problem that I_t_ve inadvertently caused elsewhere.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2016-06-04T20:27:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey JBlack_UTD_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is awesome to have unity exporting these materials !! I_t_ll check if I did a mistake when computing lights. Coming back soon _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2016-06-21T06:50:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m back _dd_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo fix it quickly_co_ can you give me the configuration of your scene please ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- plane_t_s position_co_ scale_co_ width_co_ height\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- light position\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- light type\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthanks ! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t(or the .babylon scene directly)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]