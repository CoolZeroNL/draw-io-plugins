Draw.loadPlugin(function(ui) {

    var graph = ui.editor.graph;
    var model = graph.getModel();

    if (ui.editor.isChromelessView()) {
        return;
    }

    // Adds resource for action
    mxResources.parse('resize=Resize');

    // Adds menu
    ui.menubar.addMenu('Tool Resize', function(menu, parent) {
        ui.menus.addMenuItems(menu, ['-', 'resize']);
    });

    // Adds actions
    ui.actions.addAction('resize', function() {

        var defaultheight = 0;
        var defaultwidth = 0;

        if (graph.isEnabled() && graph.getSelectionCount() == 1) {
            var selectedcell = graph.getSelectionCell();
            var defaultstyle = selectedcell.style;

            var geoselectedcell = graph.getCellGeometry(selectedcell);
            var defaultwidth = geoselectedcell.width;
            var defaultheight = geoselectedcell.height;
            var cells = graph.getModel().cells;

            Object.keys(cells).forEach(function(key) {

                var cellstyle = cells[key].style;
                var geocurrentcell = graph.getCellGeometry(cells[key]);

                if (typeof defaultstyle == "string" && typeof cellstyle == "string" && defaultstyle === cellstyle) {

                    graph.getModel().beginUpdate();
                    geocurrentcell.height = defaultheight;
                    geocurrentcell.width = defaultwidth;
                    model.setGeometry(cells[key], geocurrentcell);

                    graph.getModel().endUpdate();
                    graph.refresh(); // update the graph
                }

            });
        }

    }, null, null, 'v1.0');

}); // end of loadplugin