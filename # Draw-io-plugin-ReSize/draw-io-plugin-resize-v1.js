
Draw.loadPlugin(function(ui)
{
    console.log('resize start');

    var graph = ui.editor.graph;
    var model = graph.getModel();

    if (ui.editor.isChromelessView())
    {
        return;
    }

    // Adds resource for action
    mxResources.parse('resize=Resize');

    


 
    var menu = ui.menus.get('Harwig');
    console.log('resize - menu');
    console.log(menu);
    console.log(ui.menus);
    console.log(ui);

    if (menu != null)
    {
        // update menu
        var oldFunct = menu.funct;

        menu.funct = function(menu, parent)
        {
                oldFunct.apply(this, arguments);
                ui.menus.addMenuItems(menu, ['-', 'resize'], parent);
        };

    }else{

        // Adds menu
        ui.menubar.addMenu('Harwig', function(menu, parent)
        {		
            ui.menus.addMenuItems(menu, ['-', 'resize']);
        });

    }


       
    // Adds actions
    ui.actions.addAction('resize', function()
    {
        console.log("loaded...");

        var defaultheight = 0;
        var defaultwidth = 0;

        if (graph.isEnabled() && graph.getSelectionCount() == 1)
        {
            var selectedcell = graph.getSelectionCell();
            var defaultstyle = selectedcell.style;

            var geoselectedcell = graph.getCellGeometry(selectedcell);    
            //console.log();
            var defaultwidth = geoselectedcell.width;
            var defaultheight = geoselectedcell.height;

           // console.log(defaultheight);
           // console.log(defaultwidth);
           // console.log(defaultstyle);

            var cells = graph.getModel().cells;
            //console.log(cells);
            //console.log(cells.length);
    
            Object.keys(cells).forEach(function(key) {
    
                //console.log(key, cells[key]);
                //console.log(key);
                //console.log(cells[key]);
               // console.log(cells[key].style);
               var cellstyle = cells[key].style;
               
               var geocurrentcell = graph.getCellGeometry(cells[key]);   
    
    
                //console.log('cellstyle');
                //console.log(cellstyle);
                //console.log(typeof cellstyle=="string");
    
                //console.log('defaultstyle');
                //console.log(defaultstyle);
                //console.log(typeof defaultstyle=="string");
    
               if (typeof defaultstyle=="string" && typeof cellstyle=="string" && defaultstyle === cellstyle)
                {
    
    
                    //console.log('chaning size !');
                    // NO...
                     // shape=process;
                     // shape=mxgraph.flowchart.decision;
                     // ellipse;
                     // swimlane;
                     // edgeStyle=orthogonalEdgeStyle;
                     // shape=mxgraph.bpmn.shape;
    
                    // YES.... ( get style of selected ???) == var defaultstyle !
                     // rounded=1;whiteSpace=wrap;html=1;shadow=0;labelBackgroundColor=none;strokeColor=#000000;strokeWidth=1;fillColor=#ffffff;fontFamily=Verdana;fontSize=8;fontColor=#000000;align=center;
    
    
                    graph.getModel().beginUpdate();
    
                    // updating cell.
                      // move cell
                      geocurrentcell.height = defaultheight;
                      geocurrentcell.width = defaultwidth;
                        model.setGeometry(cells[key], geocurrentcell);
            
                     graph.getModel().endUpdate();
                     graph.refresh(); // update the graph
                }
              
            });
        }



        // for (var i = 0; i < cells.length; i++)
        // {
        //     console.log(cells[i]);
        // }

    }, null, null, 'v1.0');

    console.log('resize loaded');
    
}); // end of loadplugin
