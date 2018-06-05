const express = require('express')
const app = express()

app.set('port', process.env.PORT || 80);
app.set('host', process.env.HOST || '172.16.0.15')

const port = app.get('port'),
	ip = app.get('host')

console.log(port)
console.log(ip)

app.use(express.static('public'))

app.listen(port, ip, () => {
	console.log("服务器运行在" + ip + ":" + port)
})