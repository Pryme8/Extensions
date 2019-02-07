[{"Owner":"UP_AND_ATOM","Date":"2015-05-22T03:19:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m a JS developer using Babylon.js for the first time_co_ and right now I_t_m just trying develop an understanding of what is happening under the hood. I_t_ve been programming forever_co_ but have limited 3D experience_co_ so Babylon.js looks like a perfect learning opportunity._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I put together a simple program that takes a mesh_co_ finds the screen coordinates of each of its vertices_co_ and overlays triangles on a canvas on top of Babylon.js_t_s renderCanvas. I_t_m getting some strange results_co_ though. Most of the vertices are right where they should be_co_ but others are completely wrong. When I do this with a cube_co_ all the verticies look right_co_ but if I open up the vertices array_co_ what I_t_m seeing on-screen doesn_t_t match the data. Screenshot_dd_ _lt_a href_eq__qt_http_dd_//i.imgur.com/POtcnBr.png_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//i.imgur.com/POtcnBr.png_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It_t_s a bit simpler with a plane. All four vertices make a square using only X and Y_co_ which is exactly what I would expect. For some reason when I run my program_co_ the scene coordinates for vertices 0 and 1 end up floating in space_co_ while 2 and 3 are right where they should be. Screenshot_dd_ _lt_a href_eq__qt_http_dd_//i.imgur.com/s4e0HlH.png_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//i.imgur.com/s4e0HlH.png_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Not sure if it helps_co_ but it gets even weirder with a sphere. Screenshot_dd_ _lt_a href_eq__qt_http_dd_//i.imgur.com/pQU9yXg.png_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//i.imgur.com/pQU9yXg.png_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I guarantee I_t_m just missing something simple_co_ probably in the getScreenCoords function_co_ but so far I haven_t_t had any luck. Am I just misusing the indices array? It seems that each number in the indices array corresponds to a specific vertex. I have a feeling that_t_s what is failing_co_ but so far I haven_t_t been able to nail it down._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here_t_s the function that does the work_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_  engine.beginFrame _eq_ function() {    box.rotation.y +_eq_ 0.005_sm_    box.rotation.x +_eq_ 0.003_sm_    ctx.clearRect(0_co_ 0_co_ drawCanvas.width_co_ drawCanvas.height)_sm_    ctx.fillStyle _eq_ _t_rgba(255_co_ 43_co_ 0_co_ 0.25)_t__sm_    ctx.strokeStyle _eq_ _t_black_t__sm_        var vertexCoords _eq_ []_sm_        var vertices _eq_ box.getVerticesData(BABYLON.VertexBuffer.PositionKind)_sm_    var indices _eq_ box.getIndices()_sm_    for (var i_eq_0_co_ len_eq_indices.length_sm_ i&lt_sm_len_sm_ i+_eq_3) {      for (var v_eq_0_sm_ v&lt_sm_3_sm_ v++) {        var index _eq_ indices[i+v]_sm_        if(!vertexCoords[index]) {          vertexCoords[index] _eq_ getScreenCoords(BABYLON.Vector3.FromArray(vertices_co_ index)_co_ box)_sm_          ctx.fillRect(vertexCoords[index].x-4_co_ vertexCoords[index].y-4_co_ 8_co_ 8)_sm_        }      }      ctx.beginPath()_sm_      ctx.moveTo(vertexCoords[indices[i+2]].x_co_ vertexCoords[indices[i+2]].y)_sm_      ctx.lineTo(vertexCoords[indices[i+0]].x_co_ vertexCoords[indices[i+0]].y)_sm_      ctx.lineTo(vertexCoords[indices[i+1]].x_co_ vertexCoords[indices[i+1]].y)_sm_      ctx.lineTo(vertexCoords[indices[i+2]].x_co_ vertexCoords[indices[i+2]].y)_sm_      ctx.stroke()_sm_      ctx.fill()_sm_      ctx.closePath()_sm_    }  }_sm_      var getScreenCoords _eq_ function(vertex_co_ mesh) {    var coords _eq_ BABYLON.Vector3.Project(      BABYLON.Vector3.TransformCoordinates(vertex_co_ mesh.getWorldMatrix())_co_      BABYLON.Matrix.Identity()_co_       scene.getTransformMatrix()_co_       camera.viewport.toGlobal(engine)    )_sm_    return coords_sm_  }_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-05-22T05:27:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Just a guess but it doesn_t_t look like the camera_t_s transform is getting used. I_t_d have thought you might need the camera_t_s view matrix (or projection matrix?) multiplied onto the transform you pass to Project. Does rotating the camera affect the outlines?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_By the way_co_ check out the BJS _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/_qt_ rel_eq__qt_external nofollow_qt__gt_playground_lt_/a_gt_. If you code up your example in there_co_ you can easily share us a link that we can play with_co_ fork and send you updates_co_ etc. It_t_s honestly one of the greatest things about BJS._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-05-22T06:02:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_strike_gt_You are using indices correctly_co_ as far as I see. Try with this function_dd__lt_/strike_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var getScreenCoords _eq_ function(vertex_co_ mesh) {\t  var transformationMatrix _eq_ camera.getViewMatrix().multiply(camera.getProjectionMatrix())_sm_    var coords _eq_ BABYLON.Vector3.Project(vertex_co_      mesh.getWorldMatrix()_co_       transformationMatrix_co_       camera.viewport.toGlobal(engine)    )_sm_    return coords_sm_  }_sm__lt_/pre_gt__lt_p_gt__lt_strike_gt_It is using the camera_t_s view and projection matrix to get the correct transformation matrix_co_ and is not first transforming the vertex using the transformation matrix_co_ but using it in the project function. Easier to debug_co_ if you use the playground - _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#S7Z2Z_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#S7Z2Z_lt_/a_gt_ _co_ as fenomas said _dd_-)_lt_/strike_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_EDIT_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Found your mistake in the calculation. Your getScreenCoords function is fine... You are missing one little thing_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_vertexCoords[index] _eq_ getScreenCoords(BABYLON.Vector3.FromArray(vertices_co_ index *3 )_co_ box)_sm__lt_/pre_gt__lt_p_gt_index * 3 is the correct position. That was the problem _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ here - _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#S7Z2Z%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#S7Z2Z#1_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2015-05-22T10_dd_39_dd_56Z_t_ title_eq__t_05/22/2015 10_dd_39  AM_t_ data-short_eq__t_3 yr_t__gt_May 22_co_ 2015_lt_/time_gt_ by RaananW_lt_/strong_gt_\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"UP_AND_ATOM","Date":"2015-05-22T10:49:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That_t_s it exactly. Thanks so much _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"UP_AND_ATOM","Date":"2015-05-22T12:50:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Just out of curiosity_co_ is there a recommended way to check if a given vertex is visible to the camera? I_t_ve tried using scene.pick(x_co_ y).distance and comparing the actual distance between the camera and vertex_co_ but that seems a little hacky and probably won_t_t scale too well for larger meshes._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-05-22T12:57:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_do you mean - if it is in the camera_t_s frustum? or is it behind a different polygon?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"UP_AND_ATOM","Date":"2015-05-22T13:08:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m trying to find if it_t_s being blocked by anything - other meshes or parts of the same mesh._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"UP_AND_ATOM","Date":"2015-05-22T14:03:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think the way to go is checking the mesh_t_s normals and seeing if they_t_re facing the camera. I_t_m working on that now._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-05-22T14:55:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_If it_t_s a convex mesh and you just want to know which vertices are hidden by that mesh itself_co_ then basically that_t_s backface culling. In general I think you_t_d need to check normals per face though_co_ not per vertex._lt_/p_gt__lt_p_gt_If you want to find whether vertices are hidden by anything_co_ including other meshes_co_ AFAIK you_t_d need to analytically check the vertex against each poly that could obscure it_co_ or else use something like a depth buffer (so_co_ basically render the scene)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-05-22T15:00:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The only way I can think of is raytracing (technically_co_ what scene.pick is doing). maybe with fast check (meaning - if the first mesh that was hit by the ray is not his mesh_co_ then it should stop searching for further meshes). But_co_ as You said_co_ would probably not scale the best._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]