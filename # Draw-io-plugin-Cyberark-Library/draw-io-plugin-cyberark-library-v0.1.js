/**
 * External plugin to be added to draw.io
 */

Draw.loadPlugin(function(ui) {

    var graph = ui.editor.graph;

    // Adds resource for action
    mxResources.parse('lib-cyberark=Load CyberArk Librarys');

    if (ui.editor.isChromelessView()) {
        return;
    }

    // Adds menu
    ui.menubar.addMenu('Librarys', function(menu, parent) {
        ui.menus.addMenuItem(menu, 'lib-cyberark');
    });


    // Function to load Library From File.
    function LoadNewLibrary(fileUrl) {

        if (fileUrl != null && fileUrl.length > 0) {
            var realUrl = fileUrl;

            if (!ui.editor.isCorsEnabledForUrl(fileUrl)) {
                realUrl = PROXY_URL + '?url=' + encodeURIComponent(fileUrl);
            }

            // Uses proxy to avoid CORS issues
            mxUtils.get(realUrl, function(req) {

                if (req.getStatus() >= 200 && req.getStatus() <= 299) {
                    console.log(req.getStatus());
                    ui.spinner.stop();

                    try {
                        ui.loadLibrary(new UrlLibrary(this, req.getText(), realUrl));
                        console.log('loaded' + realUrl);
                    } catch (e) {
                        ui.handleError(e, mxResources.get('errorLoadingFile'));
                    }
                } else {
                    ui.spinner.stop();
                    ui.handleError(null, mxResources.get('errorLoadingFile'));
                }
            });

        }

    };

    // Adds actions
    ui.actions.addAction('lib-cyberark', function() {

        var url = 'https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-Cyberark-Library/library-cyberark-Flow-v2.xml';
        LoadNewLibrary(url);

        var url = 'https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-Cyberark-Library/library-cyberark-Others-v1.xml';
        LoadNewLibrary(url);

        var url = 'https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-Cyberark-Library/library-cyberark-Logos-v1.xml';
        LoadNewLibrary(url);

        var url = 'https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-Cyberark-Library/library-cyberark-Levels-v1.xml';
        LoadNewLibrary(url);

        var url = 'https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-Cyberark-Library/library-cyberark-Components-v1.xml';
        LoadNewLibrary(url);

    }, null, null, 'v1.0');



});