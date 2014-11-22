var fs = require('fs')
var filePath = process.argv[2]
var result = undefined

function countLigns(callback){
  fs.readFile(filePath, function (err, data){
    result = data.toString().split('\n').length - 1
    callback()
  })
}

function logResult(){
  console.log(result)
}

countLigns(logResult)
