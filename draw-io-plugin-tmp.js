/**
* External plugin to be added to draw.io
*/
Draw.loadPlugin(function(ui) {
    // Adds custom sidebar entry
    //ui.sidebar.addStencilPalette('flowchart', 'Odoo flow', 'https://draw.io/templates/flowcharts/flowchart_1.xml',';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');


    ui.sidebar.addStencilPalette('flowchart', 'Flowchart2', 'https://yacdn.org/serve/https://code.greenhost.net/totem/ind/raw/ca8b1b90ad23b8fa1800b8e055a7ee3bd9df9bb8/grapheditorxblock/src/stencils/totem-security.xml',';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');

    // Collapses default sidebar entry and inserts this before

    var c = ui.sidebar.container;
    c.firstChild.click();
    c.insertBefore(c.lastChild, c.firstChild);
    c.insertBefore(c.lastChild, c.firstChild);

    // $("img[title='draw.io']").src="http://poiesisconsulting.com/favicon.ico";
    // Adds logo to footer
    // doest work
    //ui.footerContainer.innerHTML = '<img align="right" style="margin-top:14px;margin-right:6px;" ' + 'src="https://www.google.com/favicon.ico"/>';

});