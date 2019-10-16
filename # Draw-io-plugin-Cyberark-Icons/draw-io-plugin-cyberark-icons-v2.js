Draw.loadPlugin(function(ui) {

    // Adds custom sidebar entry
    ui.sidebar.addStencilPalette('flowchart', 'tmp', 'https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-Vector-Libraries/library-cyberark-Components-v1.xml', ';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');

    // Collapses default sidebar entry and inserts this before
    var c = ui.sidebar.container;
    c.firstChild.click();
    c.insertBefore(c.lastChild, c.firstChild);
    c.insertBefore(c.lastChild, c.firstChild);

});

/**
 * External plugin to be added to draw.io
 */
// Draw.loadPlugin(function(ui) {
//     // Adds custom sidebar entry
//     ui.sidebar.addPalette('OdooDesign', 'Odoo', true, function(content) {

//         // content.appendChild(ui.sidebar.createVertexTemplate(null, 120, 60));
//         content.appendChild(ui.sidebar.createVertexTemplate('xml;xml=', 1006, 124));
//         content.appendChild(ui.sidebar.createEdgeTemplate('arrow', 100, 100));
//     });


// });