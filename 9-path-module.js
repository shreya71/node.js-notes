//Path module allows to interact with file system
const path = require('path')

//returns my platform specific separator 
console.log(path.sep)

//join method which joins a sequence of path segments using that platform specific separator as a limiter and it returns a normalized resulting path
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

//to get only the base name test.txt
const base = path.basename(filePath)
console.log(base)

//pathresolve: returns absolute path 
//accepts a sequence of paths and return the absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)