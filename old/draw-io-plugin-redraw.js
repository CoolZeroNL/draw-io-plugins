/**
 * WebCola layout plugin.
 */
Draw.loadPlugin(function(ui)
{
        // Adds resource for action
        mxResources.parse('reorder=JHG-ReOrder');


	if (ui.editor.isChromelessView())
	{
		return;
	}
	
	//var spacing = 10;
	//var level = 40;
	


        // Adds action
//        ui.actions.addAction('reorder', function()
//        {
//                var graph = ui.editor.graph;
//                var layout = new mxWebColaLayout(graph);
//                var parent = graph.getDefaultParent(); 
//                layout.execute(parent);
//        });

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



	// Adds actions
	ui.actions.addAction('reorder-old', function()
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
				console.log('hiu');
			}
		}
	}, null, null, 'Alt+Shift+X');

	ui.actions.addAction('reorder', function()
	{
	
		//var graphHandlerIsDelayedSelection = mxGraphHandler.prototype.isDelayedSelection;
		//mxGraphHandler.prototype.isDelayedSelection = function(cell)

		//var model = this.graph.getModel();
		//var psel = model.getParent(this.graph.getSelectionCell());
		//var cell = graphHandlerGetInitialCellForEvent.apply(this, arguments);
		//var parent = model.getParent(cell);
		var graph = ui.editor.graph;
		//console.log('graph');
		//console.log(graph);
		var model = graph.getModel();
		//console.log('model');
		//console.log(model);
		var parent = graph.getDefaultParent();
		console.log(parent);

		var partent2 = model.getGraph().getDefaultParent();
		console.log(partent2);
		
		console.log(graph.getChildVertices(graph.getDefaultParent()));
		//console.log(graph.getChildCells(graph.getModel(), graph.getDefaultParent(), true, true));


		console.log('addAction');

			//if (graph.isEnabled() && graph.getSelectionCount() == 1)
			if (graph.isEnabled())
			{
				var parentchilds = graph.getChildVertices(graph.getDefaultParent());
				console.log('in if parent');
				console.log(parent);
				var cell = graph.getSelectionCell();
				console.log(cell);

				var sib = graph.getOutgoingEdges(parentchilds);
				console.log('in if sib');
				console.log(sib);
				
				if (sib != null)
				{
					var tmp = [];
					
					for (var i = 0; i < sib.length; i++)
					{
						tmp.push(graph.model.getTerminal(sib[i], false));
					}
					
					graph.setSelectionCells(tmp);
					console.log('hiu');
				}
			}
		
	}, null, null, 'Alt+Shift+T+v2.6');




}); // end of loadplugin

