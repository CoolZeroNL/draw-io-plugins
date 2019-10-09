/**
 * WebCola layout plugin.
 */
Draw.loadPlugin(function(ui) {

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
    // mxResources.parse('dummy=Lorum-Ipsum');

    if (ui.editor.isChromelessView()) {
        return;
    }

    // Adds menu
    ui.menubar.addMenu('Tool Reorder', function(menu, parent) {
        ui.menus.addMenuItem(menu, 'reorder');
    });

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

                    var check = graph.getOutgoingEdges(tmp[i]);

                    if (check.length == '0') {

                        var parent = graph.model.getParent(tmp[i]);

                        var offsetX = 20;
                        var offsetY = 0;

                        // fix offset for Y
                        if (i > '0') {
                            if (previouschildheight > '0') {
                                var offsetY = 20 * i + previouschildheight * i;
                            }
                        }

                        var rootgeo = graph.getCellGeometry(cell); // selected root cell
                        var rootx = rootgeo.x;
                        var rootwidth = rootgeo.width / 2; // find center of root cell

                        // get current posistion of child cell
                        var childgeo = graph.getCellGeometry(tmp[i]);
                        var childy = childgeo.y;
                        var childheight = childgeo.height;

                        // new position of child cell
                        childgeo.x = rootx + rootwidth + offsetX;
                        childgeo.y = childy + offsetY;

                        // move cell
                        model.setGeometry(tmp[i], childgeo);
                        graph.refresh(); // update the graph
                        previouschildheight = childheight;

                        var edgeStyle = graph.getStylesheet().getDefaultEdgeStyle();
                        edgeStyle[mxConstants.STYLE_EDITABLE] = 0;
                        edgeStyle[mxConstants.STYLE_RESIZABLE] = 0;
                        edgeStyle[mxConstants.STYLE_ORTHOGONAL] = 0;
                        edgeStyle[mxConstants.STYLE_STROKEWIDTH] = 1;
                        edgeStyle[mxConstants.STYLE_BENDABLE] = 1;
                        edgeStyle[mxConstants.STYLE_ROUNDED] = true;
                        edgeStyle[mxConstants.STYLE_EDGE] = mxConstants.EDGESTYLE_ENTITY_RELATION;
                        edgeStyle[mxConstants.LABEL_HANDLE_SIZE] = 50;
                        edgeStyle[mxConstants.HANDLE_FILLCOLOR] = '#000000'
                        graph.getStylesheet().putCellStyle("edge_style", edgeStyle);

                        graph.getModel().beginUpdate();

                        var state = graph.view.getState(tmp[i]);

                        if (state != null) {

                            for (var x = 0; x < state.cell.edges.length; x++) {
                                if (check.length == '0') {

                                    // Set Constraint
                                    graph.setAllowDanglingEdges(false);
                                    graph.setCellStyles(mxConstants.STYLE_TARGET_PORT_CONSTRAINT, 'west', [state.cell.edges[x]]);

                                    // Clear Waypoints !
                                    if (graph.getModel().isEdge(state.cell.edges[x])) {
                                        var geo = graph.getCellGeometry(state.cell.edges[x]);

                                        if (geo != null) {
                                            geo = geo.clone();
                                            geo.points = null;
                                            graph.getModel().setGeometry(state.cell.edges[x], geo);
                                        }
                                    }

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
    }, null, null, 'v3.0');

}); // end of loadplugin