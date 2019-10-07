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

    if (ui.editor.isChromelessView()) {
        return;
    }

    // Add sidebar Stencil
    ui.sidebar.addStencilPalette('flowchart', 'Security', 'https://yacdn.org/serve/https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-Security-Icons/stencil-security.xml?maxAge=10', ';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');

    // Collapses default sidebar entry and inserts this before
    var c = ui.sidebar.container;
    c.firstChild.click();
    c.insertBefore(c.lastChild, c.firstChild);
    c.insertBefore(c.lastChild, c.firstChild);
    c.firstChild.click();


});