const express = require('express')
const app = express()

app.set('port', process.env.PORT || 8080);
app.set('host', process.env.HOST || '139.199.10.189')

const port = app.get('port'),
	ip = app.get('host')

console.log(port)
console.log(ip)

app.use(express.static('public'))

app.listen(port, ip, () => {
	console.log("服务器运行在" + ip + ":" + port)
})