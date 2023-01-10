const fs = require('fs')

global.creator = 'FrrlDfniX7' 
global.apikey = ["FrrlDfniX7", "FrrlDfniBotz", "FrrlDfni"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
