const fs = require('fs')

let dirJsFile
let dirJsonFile

if (process.env.NODE_ENV === 'icons') {
  dirJsFile = 'src/components/Icons/data/'
  dirJsonFile = 'src/components/Icons/json/names.json'
}

if (process.env.NODE_ENV === 'illustrations') {
  dirJsFile = 'src/components/Illustrations/data/'
  dirJsonFile = 'src/components/Illustrations/json/names.json'
}

console.log(`Getting name list from ${dirJsFile}`)
fs.readdir(dirJsFile, (err, files) => {
  if (err) {
    console.log(err)
  } else {
    const fileNames = files
      .filter(file => file.indexOf('index.js') === -1)
      .map(file => file.substr(0, file.indexOf('.js')))
    console.log(`Generating json containing name in ${dirJsonFile}`)
    fs.writeFile(
      dirJsonFile,
      JSON.stringify(fileNames),
      err => {
        if (err) throw err
        console.log('The file has been saved!')
      }
    )
  }
})
