// APPEND CURRENT CSS //############################################################################################################################
function appendStyle(styles) {
    var css = document.createElement('style');
    css.type = 'text/css';

    if (css.styleSheet) css.styleSheet.cssText = styles;
    else css.appendChild(document.createTextNode(styles));

    document.getElementsByTagName("head")[0].appendChild(css);
}

//   var styles = "@font-face { font-family: 'Marvel'; src: url(/confluence/download/attachments/851969/Marvel-Regular.ttf?api=v2) format('truetype')}";
//   styles += ' #content { color: blue; text-align: left; }';

var styles = `
    @font-face {
        font-family: 'Libre Franklin';
        font-style: normal;
        font-weight: 400;
        src: url('https://yacdn.org/serve/https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-SecurIT/securit.huisstyle.fonts/libre-franklin-v4-latin-regular.eot?maxAge=10'); /* IE9 Compat Modes */
        src: local('Libre Franklin'), local('LibreFranklin-Regular'),
            url('https://yacdn.org/serve/https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-SecurIT/securit.huisstyle.fonts/libre-franklin-v4-latin-regular.eot?maxAge=10') format('embedded-opentype'), /* IE6-IE8 */
            url('https://yacdn.org/serve/https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-SecurIT/securit.huisstyle.fonts/libre-franklin-v4-latin-regular.woff2?maxAge=10') format('woff2'), /* Super Modern Browsers */
            url('https://yacdn.org/serve/https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-SecurIT/securit.huisstyle.fonts/libre-franklin-v4-latin-regular.woff?maxAge=10') format('woff'), /* Modern Browsers */
            url('https://yacdn.org/serve/https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-SecurIT/securit.huisstyle.fonts/libre-franklin-v4-latin-regular.ttf?maxAge=10') format('truetype'), /* Safari, Android, iOS */
            url('https://yacdn.org/serve/https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-SecurIT/securit.huisstyle.fonts/libre-franklin-v4-latin-regular.svg?maxAge=10#LibreFranklin') format('svg'); /* Legacy iOS */
    }
  `;


window.onload = function() { appendStyle(styles) };

//############################################################################################################################

/**
 * External plugin to be added to draw.io
 */

Draw.loadPlugin(function(ui) {

    var graph = ui.editor.graph;

    // Adds custom sidebar entry
    //ui.sidebar.addStencilPalette('flowchart', 'Odoo flow', 'https://draw.io/templates/flowcharts/flowchart_1.xml',';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');

    // Adds resource for action
    mxResources.parse('sitrefont=Apply SecurIT Font to All Cells');

    if (ui.editor.isChromelessView()) {
        return;
    }

    // Adds menu
    ui.menubar.addMenu('SecurIT', function(menu, parent) {
        ui.menus.addMenuItem(menu, 'sitrefont');
    });



    // Add sidebar Stencil
    ui.sidebar.addStencilPalette('flowchart', 'SecurIT', 'https://yacdn.org/serve/https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-SecurIT/stencil-securit.xml?maxAge=10', ';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');

    // Collapses default sidebar entry and inserts this before
    var c = ui.sidebar.container;
    c.firstChild.click();
    c.insertBefore(c.lastChild, c.firstChild);
    c.insertBefore(c.lastChild, c.firstChild);

    // LOAD FONTS:

    // get current custom fonts
    const curfonts = ui.menus.customFonts;

    // add Libre Franklin
    curfonts.push("Libre Franklin");

    // Removes dubs and set customFonts.
    ui.menus.customFonts = ([...new Set(curfonts)]);

    // add manuel
    //ui.menus.customFonts = ["Libre Franklin"];



    // Adds actions
    ui.actions.addAction('sitrefont', function() {
        if (graph.isEnabled()) {
            // alert('hoi');

            // Sets global styles
            // var style = graph.getStylesheet().getDefaultEdgeStyle();
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

            // style = [];
            // style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RECTANGLE;
            // style[mxConstants.STYLE_STROKECOLOR] = 'none';
            // style[mxConstants.STYLE_FILLCOLOR] = 'none';
            // style[mxConstants.STYLE_FOLDABLE] = false;
            // style[mxConstants.STYLE_FONTFAMILY] = "Libre Franklin";
            // graph.getStylesheet().putCellStyle('column', style);

            // graph.alternateEdgeStyle = 'targetPortConstraint=west';



            // edgeStyle[mxConstants.STYLE_EDITABLE] = 0;
            // edgeStyle[mxConstants.STYLE_RESIZABLE] = 0;

            // edgeStyle[mxConstants.STYLE_ORTHOGONAL] = 0;
            // edgeStyle[mxConstants.STYLE_STROKEWIDTH] = 1;
            // edgeStyle[mxConstants.STYLE_BENDABLE] = 1;
            // edgeStyle[mxConstants.STYLE_ROUNDED] = true;
            // edgeStyle[mxConstants.STYLE_EDGE] = mxConstants.EDGESTYLE_ENTITY_RELATION;
            // edgeStyle[mxConstants.LABEL_HANDLE_SIZE] = 50;
            // edgeStyle[mxConstants.HANDLE_FILLCOLOR] = '#000000'
            // edgeStyle[mxConstants.STYLE_FONTFAMILY] = "Libre Franklin";

            // var edgeStyle = graph.getStylesheet().getDefaultEdgeStyle();
            // edgeStyle[mxConstants.STYLE_STROKECOLOR] = "#d4d4d4";
            // graph.getStylesheet().putCellStyle("edge_style", edgeStyle);

            // Vertices
            var style = graph.getStylesheet().getDefaultEdgeStyle();
            style[mxConstants.STYLE_FONTFAMILY] = "Libre Franklin";
            style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RECTANGLE;
            style[mxConstants.STYLE_FOLDABLE] = 0;
            style[mxConstants.STYLE_ARCSIZE] = 9;
            style[mxConstants.STYLE_FILLCOLOR] = "#A6B8CE";
            style[mxConstants.STYLE_STROKECOLOR] = "#7591b3"; //original
            style[mxConstants.STYLE_STROKEWIDTH] = 1;
            style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
            style[mxConstants.STYLE_PERIMETER_SPACING] = 2;
            style[mxConstants.STYLE_ROUNDED] = true;
            style[mxConstants.STYLE_SHADOW] = false;
            style[mxConstants.STYLE_ORTHOGONAL] = true;
            //graph.getStylesheet().putCellStyle(styles.step, style);
            graph.getStylesheet().putCellStyle("edge_style", style);

            // Edges
            // var style = graph.getStylesheet().getDefaultEdgeStyle();
            // style[mxConstants.STYLE_ROUNDED] = true;
            // style[mxConstants.STYLE_EDGE] = mxEdgeStyle.OrthConnector;
            // style[mxConstants.STYLE_FONTFAMILY] = "Salesforce Sans";
            // style[mxConstants.STYLE_STROKEWIDTH] = 3;
            // style[mxConstants.STYLE_OPACITY] = 75;
            // style[mxConstants.STYLE_SOURCE_PERIMETER_SPACING] = 5;
            // style[mxConstants.STYLE_TARGET_PERIMETER_SPACING] = 5;
            // style[mxConstants.STYLE_JETTY_SIZE] = 'auto';
            // // graph.getStylesheet().putCellStyle(styles.edge, style);
            // graph.getStylesheet().putCellStyle("edge_style", style);

            graph.refresh(); // update the graph
        }

    }, null, null, 'v1.7');



});