// APPEND CURRENT CSS //############################################################################################################################
function appendStyle(styles) {
    var css = document.createElement('style');
    css.type = 'text/css';

    if (css.styleSheet) css.styleSheet.cssText = styles;
    else css.appendChild(document.createTextNode(styles));

    document.getElementsByTagName("head")[0].appendChild(css);
}


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

    // var graph = ui.editor.graph;
    var graph = ui.editor.graph;
    var model = graph.model;

    // Adds resource for action
    mxResources.parse('sitrefont=WIP - Apply SecurIT Font to All Cells');

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
    c.firstChild.click();

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
            // style = graph.getStylesheet().getDefaultVertexStyle();
            // style[mxConstants.STYLE_FONTFAMILY] = 'Libre Franklin';
            // style[mxConstants.STYLE_FONTSIZE] = '22';
            // graph.getStylesheet().putCellStyle('sit', style);

            var style = graph.getStylesheet().getDefaultVertexStyle();
            style[mxConstants.STYLE_SHAPE] = 'Modifier';

            style[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_MIDDLE;
            style[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_MIDDLE;
            style[mxConstants.STYLE_SPACING_LEFT] = 15;

            // style[mxConstants.STYLE_GRADIENTCOLOR] = '#D77D00';
            style[mxConstants.STYLE_STROKECOLOR] = '#000000';
            // style[mxConstants.STYLE_FILLCOLOR] = '#000000'; // couleur de remplissage

            style[mxConstants.STYLE_FONTCOLOR] = '#000000'; // couleur de Police
            style[mxConstants.STYLE_FONTFAMILY] = 'Libre Franklin'; // La police
            style[mxConstants.STYLE_FONTSIZE] = '12';
            style[mxConstants.STYLE_FONTSTYLE] = '1';

            style[mxConstants.STYLE_SHADOW] = '1';
            style[mxConstants.STYLE_ROUNDED] = '1';
            style[mxConstants.STYLE_GLASS] = '1';

            style[mxConstants.STYLE_IMAGE] = '';
            style[mxConstants.STYLE_IMAGE_WIDTH] = '60';
            style[mxConstants.STYLE_IMAGE_HEIGHT] = '30';
            style[mxConstants.STYLE_SPACING] = 8;

            // D�finit le style par d�faut pour les bords
            style = graph.getStylesheet().getDefaultEdgeStyle();
            style[mxConstants.STYLE_ROUNDED] = false;
            style[mxConstants.STYLE_STROKEWIDTH] = 3;
            style[mxConstants.STYLE_EXIT_X] = 0.5; // center
            style[mxConstants.STYLE_EXIT_Y] = 1.0; // bottom
            style[mxConstants.STYLE_EXIT_PERIMETER] = 0; // disabled
            style[mxConstants.STYLE_ENTRY_X] = 0.5; // center
            style[mxConstants.STYLE_ENTRY_Y] = 0; // top
            style[mxConstants.STYLE_ENTRY_PERIMETER] = 0; // disabled

            // Disable the following for straight lines
            style[mxConstants.STYLE_EDGE] = mxEdgeStyle.TopToBottom;


            graph.refresh(); // update the graph



        }

    }, null, null, 'v1.0');



});