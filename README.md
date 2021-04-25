# jsFileTools
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

`fileTools` 
is a library with methods to works with files.

## Examples

### NPM
```bash
# bash
npm i fileTools
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
- copyRoute

## jsFileTools.readFile

> Reads a file from source. Returns a promise.


## Example

```javascript
    var fileData = await jsFileTools.readFile(src);
```

## jsFileTools.writeFile

> Writes data into a file. Returns a promise. 


## Example

```javascript
    // src param - include route and file name
    await jsFileTools.writeFile(src, fileData);
```

## jsFileTools.modifyFile

> Replaces a whole text line finded by regex with a string. Allowes multiples replaces. Returns a promise.


## Example

```javascript
    var dataToReplace = [
    ["^.*TextToReplace.*", "ReplacementText"]
    ]
    await jsFileTools.modifyFile(fileSrc, dataToReplace);
```

## jsFileTools.copyFile

> Copies a file form a source to another one.


## Example

```javascript
    jsFileTools.copyFile(fileSrc, fileTarget);
```

## jsFileTools.copyRoute

> Copies a directory to another one recursively


## Example

```javascript
    jsFileTools.copyRoute(dirSrc, dirTarget);
```

### Source Code
[fileTools()](https://github.com/Jazhann/fileTools)

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
