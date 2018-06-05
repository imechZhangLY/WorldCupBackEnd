const express = require('express')
const app = express()

const ip = '139.199.10.189',
	port = 80

app.use(express.static('public'))

app.listen(port, ip, () => {
	console.log("服务器运行在" + ip + ":" + port)
})