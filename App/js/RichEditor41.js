xui.Class('App.RichEditor41', 'xui.Module',{
    Instance:{
        iniComponents:function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.RichEditor")
                .setHost(host,"richeditor1")
                .setDirtyMark(false)
                .setLeft("3.8095238095238093em")
                .setTop("1.5238095238095237em")
                .setWidth("25.142857142857142em")
                .setHeight("16.761904761904763em")
                .setValue("&nbsp;&nbsp;<font style=\"background-color: rgb(0, 255, 0);\" size=\"4\">A</font> <font size=\"4\" face=\"Arial Black\">RichEditor </font><b><font color=\"#9400d3\">powered by</font></b> <font face=\"Comic Sans MS\">xui.</font><img src=\"{/}App/js/App.RichEditor41/img/App.RichEditor41/accept.png\">")
            );
            
            append(
                xui.create("xui.UI.RichEditor")
                .setHost(host,"richeditor2")
                .setDirtyMark(false)
                .setLeft("29.714285714285715em")
                .setTop("2.2857142857142856em")
                .setWidth("25.142857142857142em")
                .setHeight("16.761904761904763em")
                .setCmdList("font1;font2;font3;font4")
                .setValue("Customized command button group.")
            );
            
            append(
                xui.create("xui.UI.RichEditor")
                .setHost(host,"richeditor3")
                .setDirtyMark(false)
                .setDisabled(true)
                .setLeft("3.8095238095238093em")
                .setTop("19.80952380952381em")
                .setWidth("51.04761904761905em")
                .setHeight("10.666666666666666em")
                .setValue("Disabled")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});