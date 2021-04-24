var fs = require('fs');
var mkdirp = require('mkdirp');

/**
 * Read a file 
 * @param {*} url file url
 */
function readFile( url ) {
    return new Promise( function ( resolve, reject ) {
        fs.readFile(url, 'utf8', function (err, data) {
            if ( err )
                reject( err );
            else
                resolve( data );
        });
    });
}

/**
 * Write a file
 * @param {*} url file url
 * @param {*} data data to write
 */
function writeFile( url, data ) {
    return new Promise( function( resolve, reject ) {
      fs.writeFile( url, data, 'utf8', function(err ) {
        if ( err )
          reject( err );
        else
          resolve( { response: 'ok' } );
      });
    });
}


/**
 * Search and modify two differents strings from a file for to differents strings
 * @param {*} url file url
 * @param {*} stringsToReplace array with strings to replace format [["string to replace","replacing string" ]]
 */
async function modifyFile (url, stringsToReplace ) {
    if (fs.existsSync(url) && Array.isArray(stringsToReplace)) {
        console.log( 'Modifying ' + url ); 
        let data = await readFile( url );
        data = data.toString();
        stringsToReplace.forEach( element => {

            var reg = new RegExp( element[0], "gm" );
            data = data.replace( reg, element[1] );            
        })
        await writeFile( url, data );
    } else {
        console.log( url + ' not found. Skipping' );
    }
}

/**
 * Copy a file 
 * @param {*} source url file 
 * @param {*} target url file
 */
function copyFile(source, target, createParentDir = true) {
   if (fs.existsSync(source)) {
      var getDirName = require('path').dirname;
      var destDir = getDirName(target);
      if (!fs.existsSync(destDir)) {
         if (createParentDir) {
            console.log('Creating directory ' + destDir);
            mkdirp.sync(destDir);
         } else {
            console.log('Parent directory ' + destDir + ' does NOT exist and not required to create it. Skipping to copy file ' + source + ' to ' + target);
            return;
         }

      }
      console.log('Copying ' + source + ' to ' + target);
      fs.createReadStream(source).pipe(fs.createWriteStream(target));
   } else {
      console.log(source + ' not found. Skipping');
   }
}

/**
 * Copy multiples files form a directory to another one
 * @param {*} source url directory
 * @param {*} target url directory
 */
function copyFiles( source, target, recursive=true ) {
    var files = [];
    if ( fs.existsSync( source ) && fs.existsSync( target )) {
        files = fs.readdirSync( source );
        files.forEach( function ( file ) {
            var fileSource = source + '/' + file;
            var fileDest = target + '/' + file ;
            if (fs.lstatSync(fileSource).isDirectory() && recursive) {
               if (!fs.existsSync( fileDest )) {
                  console.log( 'Creating directory ' + fileDest );
                  fs.mkdirSync(fileDest);
               }
               copyFiles(fileSource, fileDest);
            } else {               
               console.log( 'Copying ' + fileSource + ' to ' + fileDest );
               fs.createReadStream(fileSource).pipe(fs.createWriteStream (fileDest));
            }
            
        } );
    } else {
        console.log( source + ' not found. Skipping' );
    }
}


module.exports = {  modifyFile, modifyFileWithParams, copyFile, copyFiles };