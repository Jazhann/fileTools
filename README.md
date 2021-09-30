# jsFileTools
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

`fileTools` 
is a library with methods to works with files.

## Examples

### NPM
```bash
# bash
npm i jsfiletools
```

```js
// js
const jsFileTools = require("jsfiletools");
```

### Methods

- readFile
- writeFile
- modifyFile
- copyFile
- copyDir
- deleteFile
- deleteDir

## jsFileTools.readFile

> Reads a file from source. Returns a promise.


## Example

```javascript
    var src = './example.js';
    try {
        var fileData = await jsFileTools.readFile(src);
    } catch (error) {
        //handle error
    }
    // fileData type is string
```

## jsFileTools.writeFile

> Writes data into a file. Returns a promise. 


## Example

```javascript
    // src param - include route and file name
    var src = './example.js';
    var fileData = 'some random content';
    // fileData type is string
    try {
        var result = await jsFileTools.writeFile(src, fileData);
    } catch (error) {
        //handle error
    }
```

## jsFileTools.modifyFile

> Replaces a text finded by regex with a string. Allowes multiples replaces. Returns a promise.


## Example

```javascript
    // fileSrc param - include route and file name
    var fileSrc = './example.js';
    var dataToReplace = [
        ['^.*TextToReplace.*', 'ReplacementText']
    ]
    try {
        var result = await jsFileTools.modifyFile(fileSrc, dataToReplace);
    } catch (error) {
        //handle error
    }
```

## jsFileTools.copyFile

> Copies a file form a source to another one. Returns a promise.


## Example

```javascript
    // fileSrc and fileTarget params - include route and file name
    var fileSrc = './example.js';
    var fileTarget = './newDir/example.js';
    try {
        var result = await jsFileTools.copyFile(fileSrc, fileTarget);
    } catch (error) {
        //handle error
    }
```

## jsFileTools.copyDir

> Copies a directory to another one recursively. Returns a promise.


## Example

```javascript
    var dirSrc = './example';
    var dirTarget = '../newDir';
    try {
        var result = await jsFileTools.copyDir(dirSrc, dirTarget);
    } catch (error) {
        //handle error
    }
```

## jsFileTools.deleteFile

> Delete a file. Returns a promise.


## Example

```javascript
    // fileSrc param - include route and file name
    var fileSrc = './example.js';
    try {
        var result = await jsFileTools.deleteFile(fileSrc);
    } catch (error) {
        //handle error
    }
```

## jsFileTools.deleteDir

> Delete a directory recursively. Returns a promise.


## Example

```javascript
    var dirSrc = './example';
    try {
        var result = await jsFileTools.deleteDir(dirSrc);
    } catch (error) {
        //handle error
    }
```


### Source Code
[fileTools()](https://github.com/Jazhann/jsfiletools)

## Contribution Notes
Clone project on [github](https://github.com/Jazhann/fileTools)
### Install libraries
```bash
npm i
```

### Build 
```bash
npm run build
```

### Open Pull Request
Make changes and create a merge request.
