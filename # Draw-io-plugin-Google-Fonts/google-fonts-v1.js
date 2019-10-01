console.log('google-fonts loaded');

// APPEND CURRENT CSS //############################################################################################################################
function appendStyle(styles) {
    console.log(styles);
  var css = document.createElement('style');
  css.type = 'text/css';

  if (css.styleSheet) css.styleSheet.cssText = styles;
  else css.appendChild(document.createTextNode(styles));

  document.getElementsByTagName("head")[0].appendChild(css);
}

fetch('https://yacdn.org/serve/https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-Google-Fonts/google-fonts.css?maxAge=10')
  .then(response => response.text())
  .then((data) => {
        appendStyle(data);
  })

//############################################################################################################################

Draw.loadPlugin(function(ui)
{ 
//   get current custom fonts
     const curfonts = ui.menus.customFonts;
  
//   add Roboto
     curfonts.push("Roboto");
     curfonts.push("Open Sans");
     curfonts.push("Libre Franklin");

//   Removes dubs and set customFonts.
     ui.menus.customFonts = ([...new Set(curfonts)]);
});



 
