/**
 * Customize Workflow plugin.
 */
Draw.loadPlugin(function(ui)
{	
	// ELEMENTOS GRÁFICOS
	var c = ui.sidebar.container;
	while (c.firstChild != null)
		c.removeChild(c.firstChild);
		
	// Adds custom sidebar entry
    ui.sidebar.addPalette('SecurITLibrary', 'SecurIT Customized', true, function(content)
 	{	
		content.appendChild(ui.sidebar.createVertexTemplate('shape=ext;rounded=1;strokeColor=#007FFF', 120, 80, 'Task', 'Task', true));		
		content.appendChild(ui.sidebar.createVertexTemplate('shape=ext;rounded=1;strokeWidth=3;strokeColor=#007FFF', 120, 80, 'Call Activity', 'Call Activity', true));
		content.appendChild(ui.sidebar.createVertexTemplate('shape=ext;rounded=1;symbol0=plus;symbol0Width=14;symbol0Height=14;symbol0Align=center;symbol0VerticalAlign=bottom;strokeColor=#007FFF', 120, 80, 'Subprocess', 'Subprocess', true));
		content.appendChild(ui.sidebar.createVertexTemplate('shape=mxgraph.bpmn.shape;verticalLabelPosition=bottom;verticalAlign=top;perimeter=ellipsePerimeter;outline=standard;symbol=general;strokeColor=#009900', 60, 60, 'Start Event', 'Start Event', true));
		content.appendChild(ui.sidebar.createVertexTemplate('shape=mxgraph.bpmn.shape;verticalLabelPosition=bottom;verticalAlign=top;perimeter=ellipsePerimeter;outline=end;symbol=general;strokeColor=#FF0000', 60, 60, 'End Event', 'End Event', true));	
		content.appendChild(ui.sidebar.createVertexTemplate('shape=mxgraph.bpmn.shape;verticalLabelPosition=bottom;verticalAlign=top;perimeter=rhombusPerimeter;background=gateway;outline=none;symbol=exclusiveGw;strokeColor=#CCCC00', 100, 100, 'Exclusive Gateway', 'Exclusive Gateway', true));
		content.appendChild(ui.sidebar.createVertexTemplate('shape=mxgraph.bpmn.shape;verticalLabelPosition=bottom;verticalAlign=top;perimeter=rhombusPerimeter;background=gateway;outline=none;symbol=parallelGw;strokeColor=#CCCC00', 100, 100, 'Parallel Gateway', 'Parallel Gateway', true));
		content.appendChild(ui.sidebar.createVertexTemplate('shape=mxgraph.bpmn.shape;verticalLabelPosition=bottom;verticalAlign=top;perimeter=rhombusPerimeter;background=gateway;outline=end;symbol=general;strokeColor=#CCCC00', 100, 100, 'Inclusive Gateway', 'Inclusive Gateway', true));
		content.appendChild(ui.sidebar.createVertexTemplate('shape=mxgraph.bpmn.shape;verticalLabelPosition=bottom;verticalAlign=top;perimeter=rhombusPerimeter;background=gateway;outline=none;symbol=complexGw;strokeColor=#CCCC00', 100, 100, 'Complex Gateway', 'Complex Gateway', true));
		content.appendChild(ui.sidebar.createEdgeTemplate('endArrow=block;endFill=1;endSize=6', 200, 100, 'Sequence Flow', 'Sequence Flow', true));
		content.appendChild(ui.sidebar.createVertexTemplate('swimlane;horizontal=0;startSize=20', 180, 100, 'Pool', 'Pool', true));
		content.appendChild(ui.sidebar.createVertexTemplate('swimlane;horizontal=0;swimlaneFillColor=white;swimlaneLine=0', 120, 80, 'Lane', 'Lane', true))
  	});
	
	/************************ MENU ************************/	
	
	// // Adds resource for action
   	// mxResources.parse('saveWFAction=Guardar');
	// mxResources.parse('openWFAction=Abrir');
	// mxResources.parse('importWFAction=Importar');
	// mxResources.parse('exportWFAction=Exportar');
	
	// // Adds actions
	// // Abrir desenho
	// ui.actions.addAction('openWFAction', function()
	// {
	// 	mxUtils.alert('Abrir workflow no BPM suite da Sysnovare');
	// });
	
	// // Guardar desenho
	// ui.actions.addAction('saveWFAction', function()
	// {
	// 	mxUtils.alert('Guardar workflow no BPM suite da Sysnovare');
	// });	
	
	// // Importar desenho
	// ui.actions.addAction('importWFAction', function()
	// {
	// 	mxUtils.alert('Importar workflow no BPM suite da Sysnovare');
	// });
	
	// // Exportar desenho
	// ui.actions.addAction('exportWFAction', function()
	// {
	// 	mxUtils.alert('Exportar workflow no BPM suite da Sysnovare');
	// });
		
	// Adds menu
	// ui.menubar.addMenu('Sysnovare WF', function(menu, parent)
	// {		
	// 	ui.menus.addMenuItem(menu, 'openWFAction');
	// 	ui.menus.addMenuItem(menu, 'saveWFAction');
	// 	ui.menus.addMenuItems(menu, ['-', 'importWFAction']);
	// 	ui.menus.addMenuItem(menu, 'exportWFAction');
	// });
	
	// Reorders menubar
   	 /*ui.menubar.container.insertBefore(
		ui.menubar.container.lastChild,
		ui.menubar.container.lastChild.previousSibling.previousSibling
   	 );*/
	
	/************************ FIM MENU *********************/	
	
	// OPÇÕES DOS ELEMENTOS GRÁFICOS
	var graph = ui.editor.graph;

 	//  // Adds resource for action
	// mxResources.parse('metadata=Edit Metadata');
	// mxResources.parse('addProperty=Add Property');
	// mxResources.parse('enterPropertyName=Enter property name');
	// mxResources.parse('propertyExists=Property exists');

	// Adds action
	// ui.actions.addAction('metadata', function()
	// {
	// 	var cell = graph.getSelectionCell() || graph.getModel().getRoot();
		
	// 	if (cell != null)
	// 	{
	// 		ui.showDialog(new MetadataDialog(ui, cell).container, 260, 320, true, true);
	// 	}
	// });

	// Adds popup menu entry
	// var createPopupMenu = ui.menus.createPopupMenu;
	// ui.menus.createPopupMenu = function(menu, cell, evt)
	// {
	// 	createPopupMenu.apply(this, arguments);
	// 	this.addMenuItems(menu, ['-', 'metadata']);
	// };

	/**
	 * Constructs a new export dialog.
	 */
	function MetadataDialog(ui, cell)
	{
		var div = document.createElement('div');
	
		div.style.height = '310px';
		div.style.overflow = 'auto';
		
		var value = ui.editor.graph.getModel().getValue(cell);
		
		// Converts the value to an XML node
		if (!mxUtils.isNode(value))
		{
			var doc = mxUtils.createXmlDocument();
			var obj = doc.createElement('Activity');
			obj.setAttribute('Nome', value || '');
			value = obj;			
            obj.setAttribute('Codigo', '');
			obj.setAttribute('Descrico', '');
			obj.setAttribute('Version', '');			
		}

		// Creates the dialog contents
		var form = new mxForm('properties');
		var attrs = value.attributes;
		var names = [];
		var texts = [];
		
		for (var i = 0; i < attrs.length; i++)
		{
			names[i] = attrs[i].nodeName;
			texts[i] = form.addTextarea(names[i], attrs[i].nodeValue, (names[i] == 'Nome') ? 4 : 2);
		}
		
		div.appendChild(form.table);
		
		// Adds buttons
		var addBtn = mxUtils.button(mxResources.get('addProperty'), function()
		{
			var name = mxUtils.prompt(mxResources.get('enterPropertyName'));
			
			if (name != null && name.length > 0)
			{
				if (mxUtils.indexOf(names, name) >= 0)
				{
					mxUtils.alert(mxResources.get('propertyExists'))
				}
				else
				{
					names.push(name);
					var text = form.addTextarea(name, '', 2);
					texts.push(text);
					text.focus();
				}
			}
		});

		var applyBtn = mxUtils.button(mxResources.get('apply'), function()
		{
			ui.hideDialog.apply(ui, arguments);
			
			// Clones and updates the value
			value = value.cloneNode(true);
			
			for (var i = 0; i < names.length; i++)
			{
				value.setAttribute(names[i], texts[i].value);
			}
			
			// Updates the value of the cell (undoable)
			ui.editor.graph.getModel().setValue(cell, value);
		});
		
		var cancelBtn = mxUtils.button(mxResources.get('cancel'), function()
		{
			ui.hideDialog.apply(ui, arguments);
		});
		
		var buttons = document.createElement('div');
		buttons.style.marginTop = '10px';
		buttons.style.textAlign = 'right';

		buttons.appendChild(addBtn);
		buttons.appendChild(applyBtn);
		buttons.appendChild(cancelBtn);

		div.appendChild(buttons);
		this.container = div;
	};	

	// Adds logo to footer
	ui.footerContainer.innerHTML = '<div style="text-align:right">Customize<img align="right" width="5%" height="5%" style="margin-top:14px;margin-right:6px;" ' + 'src="http://www.sysnovare.pt/portal/wp-content/themes/avatar-wp/images/404.png"/></div>';
	
});