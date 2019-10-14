// Global Variables to use.
var destFolder, sourceFolder, files, fileType, sourceDoc, svgSaveOpts, doc;

// The folder where all of the Illustrator files are.
sourceFolder = Folder.selectDialog('Select the folder with SVG files you want to convert to SVG', '~');

// Function that sets up the exporting process.
function init(){

    // Check to see if sourceFolder has any folders in it
    if(sourceFolder != null){
        
        // Create new array for files to be stored;
        files = new Array();
        
        // Only use file types that are illustrator files
        fileType = "*.svg";
        
        // Files get saved with all of the files in the sourcefolder
        files = sourceFolder.getFiles(fileType);

        // Check to see if there are any files in the folder
        if(files.length > 0){

            // Ask for destination folder.
            destFolder = Folder.selectDialog('Select the folder you want to export files to','~');

            // Loop through files
            for(var i = 0; i < files.length; i++){

                // Saves the open file and properties to sourceDoc
                sourceDoc = app.open(files[i]);

                // Sets doc to active document
                doc = app.activeDocument;

                // Exports all artboards
                exportArtboards();

                // Closes Document
                sourceDoc.close(SaveOptions.DONOTSAVECHANGES);
            }
        } else {
            alert('There is no file here')
        }
    } else {
        alert('There is no folder here')
    }

}

// Work horse for exporting artboards
function exportArtboards(){

    // Loop through artboards
    for(var e = 0; e < doc.artboards.length; e++){
        
        // Store artboard name
        var artBoardName = doc.artboards[e].name;

        // Function returns a new file name
        targetFile = getNewName(artBoardName);

        // Returns SVG options
        svgSaveOpts = getSVGOptions();

        // Make current artboard active
        doc.artboards.setActiveArtboardIndex(e);

        // Export file as SVG
        sourceDoc.exportFile(targetFile, ExportType.SVG, svgSaveOpts)
    }
}

function getNewName(artBoardName){
    
    // Local Variables
    var docName;

    // Set docName to the source doc name
    docName = sourceDoc.name;

    // Set newName to empty string
    // var newName = "";

    // Get the last underscore in the document name
    // var underscore = docName.lastIndexOf('_');
    // var last = docName.lastIndexOf('.');

    // Set newName to the docName from the first char to the last underscore
    // newName += docName.substring(0, underscore);
    // newName += docName.substring(0, last);

    // Set newName to underscore + layerName
    //newName += '_' + artBoardName;

    // Save in file at destFolder and newName
    // saveInFile = new File(destFolder + '/' + newName);
    saveInFile = new File(destFolder + '/' + docName);

    // Return saveInFile that creates file at folder path
    return saveInFile;
}

function getSVGOptions(){
    // var exportOpts =  new ExportOptionsSVG();

    // return exportOpts;
    
    // function getOptions(images)  
    // {  
        // Create the required options object  
        var exportOpts = new ExportOptionsSVG();  
        // See ExportOptionsSVG in the JavaScript Reference for available options  
             
        // Set the options you want below:  
         
        // For example, uncomment to set the compatibility of the generated svg to SVG Tiny 1.1     
        exportOpts.DTD = SVGDTDVersion.SVG1_1;  
        // For example, uncomment to embed raster images  
        // exportOpts.embedRasterImages = images;  
        exportOpts.compressed = false;  
        exportOpts.coordinatePrecision = 1;  
        exportOpts.documentEncoding = SVGDocumentEncoding.ASCII; //obligatoire, pas utf8!!!  
        exportOpts.fontSubsetting = SVGFontSubsetting.None;  
        exportOpts.fontType = SVGFontType.SVGFONT;  
        exportOpts.cssProperties = SVGCSSPropertyLocation.STYLEELEMENTS;  
        exportOpts.sVGAutoKerning = true;  
        exportOpts.sVGTextOnPath = false;     
         
        return exportOpts;  
    // }  

}
init();