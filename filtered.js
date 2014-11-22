var fs = require('fs')
var dir = process.argv[2]
var ext = '.' + process.argv[3]
var path = require('path')

fs.readdir(dir, function(err, list){
  list.forEach(function(file){
    if (path.extname(file) === ext){
      console.log(file)
    }
  })
})