var fs = require('fs');
var mkdirp = require('mkdirp');

/**
 * Read a file 
 * @param {*} src file source
 */
function readFile( src ) {
    return new Promise( function ( resolve, reject ) {
        fs.readFile(src, 'utf8', function (err, data) {
            if ( err )
                reject( err );
            else
                resolve( data );
        });
    });
}

/**
 * Write a file
 * @param {*} src file source
 * @param {*} data data to write
 */
function writeFile( src, data ) {
    return new Promise( function( resolve, reject ) {
      fs.writeFile( src, data, 'utf8', function(err ) {
        if ( err )
          reject( err );
        else
          resolve( { response: 'ok' } );
      });
    });
}


/**
 * Search and modify two differents strings from a file for to differents strings
 * @param {*} src file source
 * @param {*} stringsToReplace array with strings to replace format [["string to replace","replacing string" ]]
 */
async function modifyFile (src, stringsToReplace ) {
    if (fs.existsSync(src) && Array.isArray(stringsToReplace)) {
        console.log( 'Modifying ' + src ); 
        let data = await readFile( src );
        data = data.toString();
        stringsToReplace.forEach( element => {

            var reg = new RegExp( element[0], "gm" );
            data = data.replace( reg, element[1] );            
        })
        await writeFile( src, data );
    } else {
        console.log( src + ' not found. Skipping' );
    }
}

/**
 * Copy a file 
 * @param {*} src source file 
 * @param {*} target target file
 */
function copyFile(src, target, createParentDir = true) {
   if (fs.existsSync(src)) {
      var getDirName = require('path').dirname;
      var destDir = getDirName(target);
      if (!fs.existsSync(destDir)) {
         if (createParentDir) {
            console.log('Creating directory ' + destDir);
            mkdirp.sync(destDir);
         } else {
            console.log('Parent directory ' + destDir + ' does NOT exist and not required to create it. Skipping to copy file ' + src + ' to ' + target);
            return;
         }

      }
      console.log('Copying ' + src + ' to ' + target);
      fs.createReadStream(src).pipe(fs.createWriteStream(target));
   } else {
      console.log(src + ' not found. Skipping');
   }
}

/**
 * Copy multiples files form a directory to another one
 * @param {*} src source directory
 * @param {*} target target directory
 */
function copyRoute( src, target, recursive=true ) {
    var files = [];
    if ( fs.existsSync( src ) && fs.existsSync( target )) {
        files = fs.readdirSync( src );
        files.forEach( function ( file ) {
            var fileSrc = src + '/' + file;
            var fileDest = target + '/' + file ;
            if (fs.lstatSync(fileSrc).isDirectory() && recursive) {
               if (!fs.existsSync( fileDest )) {
                  console.log( 'Creating directory ' + fileDest );
                  fs.mkdirSync(fileDest);
               }
               copyFiles(fileSrc, fileDest);
            } else {               
               console.log( 'Copying ' + fileSrc + ' to ' + fileDest );
               fs.createReadStream(fileSrc).pipe(fs.createWriteStream (fileDest));
            }
            
        } );
    } else {
        console.log( src + ' not found. Skipping' );
    }
}


module.exports = {  readFile, writeFile, modifyFile, copyFile, copyRoute };