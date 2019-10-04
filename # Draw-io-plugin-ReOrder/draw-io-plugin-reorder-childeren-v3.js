/**
 * WebCola layout plugin.
 */
Draw.loadPlugin(function(ui) {
    console.log('reorder start');
    //document.write('<script type="text/javascript" src="https://yacdn.org/serve/http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"><\/script>');

    var graph = ui.editor.graph;
    var model = graph.getModel();



    // Enables rotation handle
    mxVertexHandler.prototype.rotationEnabled = false;
    mxVertexHandler.prototype.guidesEnabled = false;

    // Alt disables guides
    mxGuide.prototype.isEnabledForEvent = function(evt) {
        return !mxEvent.isAltDown(evt);
    };

    // Experimental add/remove waypoints
    mxEdgeHandler.prototype.addEnabled = true;
    mxEdgeHandler.prototype.removeEnabled = true;

    // Enables snapping waypoints to terminals
    mxEdgeHandler.prototype.snapToTerminals = true;


    // Adds resource for action
    mxResources.parse('reorder=Reorder Childs');
    mxResources.parse('dummy=Lorum-Ipsum');

    if (ui.editor.isChromelessView()) {
        return;
    }



    // Adds menu
    ui.menubar.addMenu('Tool Reorder', function(menu, parent) {
        ui.menus.addMenuItem(menu, 'reorder');
        ui.menus.addMenuItems(menu, ['-', 'dummy']);
    });



    // Exportar desenho
    // ui.actions.addAction('Reorder Childs', function()
    // {
    //     mxUtils.alert('Exportar workflow no BPM suite da Sysnovare');
    // });

    // Adds actions
    ui.actions.addAction('reorder', function() {
        if (graph.isEnabled() && graph.getSelectionCount() == 1) {
            var cell = graph.getSelectionCell();
            var sib = graph.getOutgoingEdges(cell);

            if (sib != null) {
                var tmp = [];

                for (var i = 0; i < sib.length; i++) {
                    tmp.push(graph.model.getTerminal(sib[i], false));
                }

                graph.setSelectionCells(tmp);

                previouschildheight = 0;

                // loop door alle childeren...
                for (var i = 0; i < tmp.length; i++) {
                    console.log('- Started ----------------------------');
                    // check if cell has childs.
                    var check = graph.getOutgoingEdges(tmp[i]);
                    //console.log('i');
                    //console.log(i);
                    //console.log('check');
                    //console.log(check);
                    if (check.length == '0') {
                        //console.log('- check null ----------------------------');

                        //console.log(tmp[i].value);
                        //console.log('previouschildheight')
                        //console.log(previouschildheight);
                        //console.log(tmp[i]);
                        //console.log(tmp[i].geometry);
                        //console.log(tmp[i].geometry.y);



                        var parent = graph.model.getParent(tmp[i]);
                        //console.log('parent');
                        //console.log(parent);

                        var offsetX = 20;
                        var offsetY = 0;

                        // fix offset for Y
                        if (i > '0') {
                            if (previouschildheight > '0') {
                                var offsetY = 20 * i + previouschildheight * i;
                            }
                        }

                        var rootgeo = graph.getCellGeometry(cell); // selected root cell
                        //console.log('rootgeo:');
                        //console.log(rootgeo);

                        var rootx = rootgeo.x;
                        var rootwidth = rootgeo.width / 2; // find center of root cell

                        // get current posistion of child cell
                        var childgeo = graph.getCellGeometry(tmp[i]);
                        var childy = childgeo.y;
                        var childheight = childgeo.height;

                        // new position of child cell
                        childgeo.x = rootx + rootwidth + offsetX;
                        childgeo.y = childy + offsetY;

                        //console.log('child geo:');
                        //console.log(childgeo);

                        // move cell
                        model.setGeometry(tmp[i], childgeo);

                        graph.refresh(); // update the graph

                        previouschildheight = childheight;


                        // Sets global styles
                        //var style = graph.getStylesheet().getDefaultEdgeStyle();
                        //style[mxConstants.STYLE_EDGE] = mxEdgeStyle.OrthConnector;
                        // style[mxConstants.STYLE_ROUNDED] = true;

                        // style = graph.getStylesheet().getDefaultVertexStyle();
                        // style[mxConstants.STYLE_FILLCOLOR] = '#ffffff';
                        // style[mxConstants.STYLE_SHAPE] = 'swimlane';
                        // style[mxConstants.STYLE_STARTSIZE] = 30;
                        // style[mxConstants.STYLE_DIRECTION] = 'north';

                        //style = graph.getStylesheet().getDefaultEdgeStyle();
                        //style[mxConstants.STYLE_TARGET_PORT_CONSTRAINT] = 'north';
                        //style[mxConstants.STYLE_STROKECOLOR] = '#ffffff';
                        //style[mxConstants.STYLE_SOURCE_PORT] = 'south';
                        //graph.setDefaultEdgeStyle(stil);
                        //console.log(stil);

                        //style = [];
                        // style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RECTANGLE;
                        // style[mxConstants.STYLE_STROKECOLOR] = 'none';
                        // style[mxConstants.STYLE_FILLCOLOR] = 'none';
                        // style[mxConstants.STYLE_FOLDABLE] = false;
                        // graph.getStylesheet().putCellStyle('column', style);

                        // graph.alternateEdgeStyle = 'targetPortConstraint=west';

                        var edgeStyle = graph.getStylesheet().getDefaultEdgeStyle();
                        edgeStyle[mxConstants.STYLE_EDITABLE] = 0;
                        edgeStyle[mxConstants.STYLE_RESIZABLE] = 0;
                        //edgeStyle[mxConstants.STYLE_STROKECOLOR] = "#d4d4d4";
                        edgeStyle[mxConstants.STYLE_ORTHOGONAL] = 0;
                        edgeStyle[mxConstants.STYLE_STROKEWIDTH] = 1;
                        edgeStyle[mxConstants.STYLE_BENDABLE] = 1;
                        edgeStyle[mxConstants.STYLE_ROUNDED] = true;
                        edgeStyle[mxConstants.STYLE_EDGE] = mxConstants.EDGESTYLE_ENTITY_RELATION;
                        edgeStyle[mxConstants.LABEL_HANDLE_SIZE] = 50;
                        edgeStyle[mxConstants.HANDLE_FILLCOLOR] = '#000000'
                        graph.getStylesheet().putCellStyle("edge_style", edgeStyle);

                        graph.getModel().beginUpdate();
                        //graph.setCellStyles(mxConstants.STYLE_DIRECTION, 'NORTH', tmp[i]);
                        var state = graph.view.getState(tmp[i]);

                        //console.log('state');
                        //console.log(state);

                        if (state != null) {

                            for (var x = 0; x < state.cell.edges.length; x++) {
                                if (check.length == '0') {
                                    // console.log('x');
                                    // console.log(x);
                                    // console.log(state.cell.edges[x]);
                                    //var edge = graph.getProperty(tmp[i]);

                                    // Set Constraint
                                    graph.setAllowDanglingEdges(false);
                                    graph.setCellStyles(mxConstants.STYLE_TARGET_PORT_CONSTRAINT, 'west', [state.cell.edges[x]]);
                                    //mxCircleLayout.prototype.resetEdges = true;

                                    // Clear Waypoints !
                                    if (graph.getModel().isEdge(state.cell.edges[x])) {
                                        //console.log('edge !');
                                        var geo = graph.getCellGeometry(state.cell.edges[x]);
                                        //console.log(geo);

                                        if (geo != null) {
                                            geo = geo.clone();
                                            geo.points = null;
                                            graph.getModel().setGeometry(state.cell.edges[x], geo);
                                        }
                                    }

                                    // var style2 = graph.getCellStyle(state.cell.edges[x]); //style is in object form
                                    //console.log(style2);
                                }
                            }

                        }







                        graph.getModel().endUpdate();

                        mxCircleLayout.prototype.resetEdges = true;

                        graph.refresh(); // update the graph
                    }

                }

            }
        }
    }, null, null, 'Alt+Shift+X - v0.992');



    // Importar desenho
    ui.actions.addAction('dummy', function() {
        mxUtils.alert('Importar workflow no BPM suite da Sysnovare');
    });

    console.log('reorder loaded');

}); // end of loadplugin