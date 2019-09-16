
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

       
    // Adds actions
    ui.actions.addAction('resize', function()
    {
        console.log("loaded...");
        var cells = graph.getModel().cells;
        console.log(cells);
        console.log(cells.length);

        Object.keys(cells).forEach(function(key) {

            console.log(key, cells[key]);
          
        });

        // for (var i = 0; i < cells.length; i++)
        // {
        //     console.log(cells[i]);
        // }

    }, null, null, 'Alt+Shift+X - v0.6');

    
}); // end of loadplugin
