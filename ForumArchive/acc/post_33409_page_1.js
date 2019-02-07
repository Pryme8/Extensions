[{"Owner":"TomaszFurca","Date":"2017-10-13T07:31:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ yesterday i was start develop gui tooltips. Tooltips are show using events onPointerEnterObservable and onPointerOutObservable. Now I try to set container above base control (for example button).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCreating tooltips as parent of button I can_t_t make my tooltip bigger than parent -&gt_sm_ _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#0HT3SZ%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#0HT3SZ#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think good way is creating tooltips as parent of main stack panel_co_ but i have problem with absolute position of tooltip. It is shown below button_co_ I can create tooltip before button and then it show above button_co_ but then position of button has been changed. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#0HT3SZ%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#0HT3SZ#4_lt_/a_gt__lt_br /_gt__lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#0HT3SZ%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#0HT3SZ#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTom\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-10-13T15:25:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#0HT3SZ%236_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#0HT3SZ#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHi again TF!  I_t_ve been goofing-around.  I kept the button (and its buttonStack)... completely separate from label1/2 and their tooltipStack.  That way I get more control over placement of tooltipStack.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI put some _qt_position work_qt_ into a scene.executeWhenReady() code-block - lines 52-64.  To get a useful _lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_buttonStack._measureForChildren.left/top... I had to wait-for _qt_when ready_qt_ or else those values were 0 and 0.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  And _measureForChildren is not necessarly a good thing to use_co_ or useful.  It_t_s just something I discovered when using my in-browser object inspector... and it had some delicious-looking numbers to play-with.  heh_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_Inside a scene.executeWhenReady()... I now have good values for the buttonStack._measureForChildren values... showing 606 and 402 at the console.  _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_But_co_ I am still thinking about HOW to use those numbers... to give you full control of tooltip placement IN-RELATION-TO the button which uses/has that tooltipStack.  In other words_co_ I would like the tooltipStack to be positioned RELATIVE to the buttonStack_co_ and easily_co_ and micro-adjustable.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_Sometimes things are in pixels_co_ sometimes in percentages_co_ so I_t_m still testing/experimenting.  Currently_co_ the tooltip popup is hard-set at 50px/50px in lines 59-60.  But above that line... you can see where Wingnut was experimenting.  I use my browser built-in object inspector to look at the properties on stackpanels and buttons... and use lots of console.log(whatever) to see what values are available_co_ and when._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_But_co_ generally speaking_co_ I would NOT make tooltipStack be a child of buttonStack.  Let them BOTH be children of AdvancedDynamicTexture_co_ and use special positioning code (like I am attempting) to keep tooltipStack _qt_loosely attached-to_qt_ buttonStack.  It_t_s SORT OF like parenting tooltipStack to buttonStack_co_ but YOU keep control over relative positioning._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_Still thinking.  Help from everyone... welcome.  thx._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_Notice I _qt_collapse_qt_ the width of tooltipStack... to make it disappear  (line 95).  This might not be the best way to make a GUI container appear/disappear... but it works.  Better suggestions welcome_co_ of course._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"lihis","Date":"2017-10-13T17:53:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI know nothing about stack panels and even less about _best_ way to make tooltips_co_ but i would maybe go about it something like this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#6GWUV3_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#6GWUV3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s not auto-sizing though and maybe it sucks in some other ways as well but yeah. _lt_img alt_eq__qt__dd_huh_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_huh.png_qt_ title_eq__qt__dd_huh_dd__qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]