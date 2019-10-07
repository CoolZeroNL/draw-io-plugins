/**
 * External plugin to be added to draw.io
 */
Draw.loadPlugin(function(ui) {
    // Adds custom sidebar entry
    ui.sidebar.addStencilPalette('flowchart', 'K8 Icons', 'https://yacdn.org/serve/https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-K8-Icons/stencil-k8.xml?maxAge=10', ';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');

    // Collapses default sidebar entry and inserts this before
    var c = ui.sidebar.container;
    c.firstChild.click();
    c.insertBefore(c.lastChild, c.firstChild);
    c.insertBefore(c.lastChild, c.firstChild);
    c.firstChild.click();
});