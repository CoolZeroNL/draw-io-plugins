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

Draw.loadPlugin(function(ui)
{ 
  // get current custom fonts
  const curfonts = ui.menus.customFonts;
  
  // add Libre Franklin
  curfonts.push("Libre Franklin");

  // Removes dubs and set customFonts.
  ui.menus.customFonts = ([...new Set(curfonts)]);

  // add manuel
  //ui.menus.customFonts = ["Libre Franklin"];

});



