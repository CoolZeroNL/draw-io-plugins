
Draw.loadPlugin(function(ui)
{
    var graph = ui.editor.graph;
    var model = graph.getModel();

    if (ui.editor.isChromelessView())
    {
        return;
    }

    // Adds resource for action
    mxResources.parse('resize=Resize');

    
    // Adds menu
    ui.menubar.addMenu('Harwig Tools', function(menu, parent)
    {		
        ui.menus.addMenuItems(menu, ['-', 'resize']);
    });

    
}); // end of loadplugin
