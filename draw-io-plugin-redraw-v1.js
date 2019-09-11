/**
 * WebCola layout plugin.
 */
Draw.loadPlugin(function(ui)
{

    var graph = ui.editor.graph;
    var model = graph.getModel();
    
        // Adds resource for action
        mxResources.parse('reorder=JHG-ReOrder');

        if (ui.editor.isChromelessView())
        {
            return;
        }
	
        var menu = ui.menus.get('layout');

        if (menu != null)
        {
                var oldFunct = menu.funct;

                menu.funct = function(menu, parent)
                {
                        oldFunct.apply(this, arguments);
                        ui.menus.addMenuItems(menu, ['-', 'reorder'], parent);
                };
        }

    // functions
    function getParentsOfCell(cell){
        if(cell != undefined){
            let parents = [];
            let edges = cell.edges;
            if(edges != null){
                for(let i = 0; i < edges.length; i++){
                    if(edges[i].source.value == cell.value){
                        let cellCopy;
                        if(!parents.includes(edges[i].target)){
                            cellCopy = edges[i].target
                        }
                        parents.push(cellCopy);
                    }
                }
            }
            return parents;
        }
        else{
            return [];
        }
        }



	// Adds actions
	ui.actions.addAction('reorder', function()
	{
        if (graph.isEnabled() && graph.getSelectionCount() == 1)
		{
			var cell = graph.getSelectionCell();
			var sib = graph.getOutgoingEdges(cell);
			
			if (sib != null)
			{
				var tmp = [];
				
				for (var i = 0; i < sib.length; i++)
				{
					tmp.push(graph.model.getTerminal(sib[i], false));
				}
				
                graph.setSelectionCells(tmp);
                
                // count selected

                // for each of selected.
                    
                    //get position of parent.

                        vorigheight = 0; 
                        curheight = 0;

                        //
                        for (var i = 0; i < tmp.length; i++)
                        {
                            console.log('-----------------------------');
                            //console.log(i);
                            console.log(tmp[i]);
                            console.log(tmp[i].geometry);
                            //console.log(tmp[i].geometry.y);
                            
                            childY = tmp[i].geometry.y;
                            curheight = tmp[i].geometry.height;
                            
                            let parents = [];
                            let edges = tmp[i].edges;
                            if(edges != null){
                                for(let y = 0; y < edges.length; y++){
                                    console.log(y);

                                    //console.log(edges[y].target);
                                    //console.log(tmp[i].value);
                                    //console.log('edges[y].source.value');
                                    //console.log(edges[y].source.value);

                                    //console.log('edges[y].source');
                                    //console.log(edges[y].source);

                                    //console.log('edges[y].source.geometry');
                                    console.log(edges[y].source.geometry);
                                    //console.log(edges[y].source.geometry.x);
                                    //console.log(edges[y].source.geometry.y);
                                    //console.log(edges[y].source.geometry.width);
                                    console.log(edges[y].source.geometry.height);
                                    //console.log(parents.includes(edges[y].target));

                                        console.log('New X :');
                                        // offset = 20 manual
                                        var offset = 20;
                                        // root X
                                        var rootX = edges[y].source.geometry.x;
                                        // root width
                                        var rootwidth = edges[y].source.geometry.width/2;
                                        // formule = rootX + (width root / 2) + offset
                                        //  result = 360 + 60 + 20 
                                        result = rootX + rootwidth + offset;
                                        console.log(result);

                                        console.log('New Y :');
                                        // GET HEIGHT of CHILD 01

                                        var offsetY = 0;
                                        if(i > '0'){
                                            var offsetY = 20 + vorigheight;
                                        }

                                        console.log(childY + offsetY);
                                    

                                    // UPDATE ?        
                                    graph.getModel().beginUpdate();
                                        console.log('moving???');
                                       // graph.moveCells(tmp[i].cell, 1000, 1000, false);
                                        //var s = graph.gridSize;
                                        //graph.setSelectionCells(graph.moveCells([state.cell], s, s, true));
                                        
                                        // working
                                        //graph.moveCells(graph.getSelectionCells(), 100, 100);

                                        //var geo = graph.getCellGeometry(graph.getSelectionCells()).clone();
                                        //geo = 10;
                                        var geo = model.getCellGeometry(cell);
                                        console.log(geo);
                                        //model.setGeometry(graph.getSelectionCells(), geo);
                                        

                                    graph.getModel().endUpdate();
                                    graph.refresh(); // update the graph
                                }

                                vorigheight = curheight;

                            }
                            //console.log(parents);


                            console.log('-----------------------------');
                            //var cell = graph.getSelectionCell();
                            //var cellX = graph.view.getState(cell).shape.node.offsetLeft;
                            //var cellY = graph.view.getState(cell).shape.node.offsetTop;


                        }
                        //var cell = this.getCell();
                        //console.log(cell);

                    //graph.getModel().beginUpdate();

                        //var bounds = graph.getGraphBounds(); 
                        //console.log(bounds);
                        //graph.view.setTranslate(-bounds.x - (bounds.width - container.clientWidth) / 2, -bounds.y - (bounds.height - container.clientHeight) / 2);
                    
                    //graph.getModel().endUpdate();


			}
		}
	}, null, null, 'Alt+Shift+X - v0.96');


}); // end of loadplugin

