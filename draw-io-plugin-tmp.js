/**
* External plugin to be added to draw.io
*/
Draw.loadPlugin(function(ui) {
    // Adds custom sidebar entry
    ui.sidebar.addStencilPalette('flowchart', 'Odoo flow', 'https://raw.githubusercontent.com/jgraph/drawio-libs/master/libs/templates.xml',';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');

    // Collapses default sidebar entry and inserts this before
    var c = ui.sidebar.container;
    c.firstChild.click();
    c.insertBefore(c.lastChild, c.firstChild);
    c.insertBefore(c.lastChild, c.firstChild);

    $("img[title='draw.io']").src="http://poiesisconsulting.com/favicon.ico";
    // Adds logo to footer
    ui.footerContainer.innerHTML = '<img align="right" style="margin-top:14px;margin-right:6px;" ' + 'src="http://www.poiesisconsulting.com/favicon.ico"/>';

    // Adds resource for action
    mxResources.parse('helloWorldAction=Hello, World!');

    // Adds action
    ui.actions.addAction('helloWorldAction', function() {
        var ran = Math.floor((Math.random()*100)+1);
        mxUtils.alert('A random number is ' + ran);
    });

    // Adds menu
    ui.menubar.addMenu('Hello, World Menu', function(menu, parent) {
        ui.menus.addMenuItem(menu, 'helloWorldAction');
    });

    // Reorders menubar
    ui.menubar.container.insertBefore(ui.menubar.container.lastChild,
    ui.menubar.container.lastChild.previousSibling.previousSibling);

    // Adds toolbar button
    ui.toolbar.addSeparator();
    var elt = ui.toolbar.addItem('', 'helloWorldAction');

    // Cannot use built-in sprites
    elt.firstChild.style.backgroundImage = 'url(https://www.draw.io/images/logo-small.gif)';
    elt.firstChild.style.backgroundPosition = '2px 3px';

    // Displays status message
    ui.editor.setStatus('Hello, World!');
});