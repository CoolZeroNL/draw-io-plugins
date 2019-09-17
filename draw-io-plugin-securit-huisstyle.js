/**
 * Customize Workflow plugin.
 */
Draw.loadPlugin(function(ui)
{	

    console.log('v0.3');

	// ELEMENTOS GRÁFICOS
	var c = ui.sidebar.container;
	while (c.firstChild != null)
		c.removeChild(c.firstChild);

    // Collapses default sidebar entry and inserts this before
    // var c = ui.sidebar.container;
    // c.firstChild.click();
    // c.insertBefore(c.lastChild, c.firstChild);
    // c.insertBefore(c.lastChild, c.firstChild);

		
	// Adds custom sidebar entry
    ui.sidebar.addPalette('SecurITLibrary', 'SecurIT Customized', true, function(content)
 	{	
		content.appendChild(ui.sidebar.createVertexTemplate('shape=ext;rounded=1;strokeColor=#007FFF', 120, 80, 'Task', 'Task', true));		
		content.appendChild(ui.sidebar.createVertexTemplate('shape=ext;rounded=1;strokeWidth=3;strokeColor=#007FFF', 120, 80, 'Call Activity', 'Call Activity', true));
		content.appendChild(ui.sidebar.createVertexTemplate('shape=ext;rounded=1;symbol0=plus;symbol0Width=14;symbol0Height=14;symbol0Align=center;symbol0VerticalAlign=bottom;strokeColor=#007FFF', 120, 80, 'Subprocess', 'Subprocess', true));
		
		content.appendChild(ui.sidebar.createVertexTemplate('image;image=https://upload.wikimedia.org/wikipedia/commons/1/17/Yin_yang.svg', 100, 100));
		
		// content.appendChild(ui.sidebar.createVertexTemplate('shape=mxgraph.bpmn.shape;verticalLabelPosition=bottom;verticalAlign=top;perimeter=ellipsePerimeter;outline=standard;symbol=general;strokeColor=#009900', 60, 60, 'Start Event', 'Start Event', true));
		// content.appendChild(ui.sidebar.createVertexTemplate('shape=mxgraph.bpmn.shape;verticalLabelPosition=bottom;verticalAlign=top;perimeter=ellipsePerimeter;outline=end;symbol=general;strokeColor=#FF0000', 60, 60, 'End Event', 'End Event', true));	
		// content.appendChild(ui.sidebar.createVertexTemplate('shape=mxgraph.bpmn.shape;verticalLabelPosition=bottom;verticalAlign=top;perimeter=rhombusPerimeter;background=gateway;outline=none;symbol=exclusiveGw;strokeColor=#CCCC00', 100, 100, 'Exclusive Gateway', 'Exclusive Gateway', true));
		// content.appendChild(ui.sidebar.createVertexTemplate('shape=mxgraph.bpmn.shape;verticalLabelPosition=bottom;verticalAlign=top;perimeter=rhombusPerimeter;background=gateway;outline=none;symbol=parallelGw;strokeColor=#CCCC00', 100, 100, 'Parallel Gateway', 'Parallel Gateway', true));
		// content.appendChild(ui.sidebar.createVertexTemplate('shape=mxgraph.bpmn.shape;verticalLabelPosition=bottom;verticalAlign=top;perimeter=rhombusPerimeter;background=gateway;outline=end;symbol=general;strokeColor=#CCCC00', 100, 100, 'Inclusive Gateway', 'Inclusive Gateway', true));
		// content.appendChild(ui.sidebar.createVertexTemplate('shape=mxgraph.bpmn.shape;verticalLabelPosition=bottom;verticalAlign=top;perimeter=rhombusPerimeter;background=gateway;outline=none;symbol=complexGw;strokeColor=#CCCC00', 100, 100, 'Complex Gateway', 'Complex Gateway', true));
		
		content.appendChild(ui.sidebar.createVertexTemplate('swimlane;horizontal=0;startSize=20', 180, 100, 'Pool', 'Pool', true));
		content.appendChild(ui.sidebar.createVertexTemplate('swimlane;horizontal=0;swimlaneFillColor=white;swimlaneLine=0', 120, 80, 'Lane', 'Lane', true));
		
		content.appendChild(ui.sidebar.createEdgeTemplate('endArrow=block;endFill=1;endSize=6', 200, 100, 'Sequence Flow', 'Sequence Flow', true))
  	});
	
	/************************ MENU ************************/	
	

});