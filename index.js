const express = require('express'),
	http = require('http'),
	https = require('https')
	fs = require('fs')

const app = express(),
	httpPort = 80,
	httpsPort = 443,
	ip = '172.16.0.15',
	privateKey = fs.readFileSync(__dirname + '/ssl/2_www.shikelong.cn.key'),
	certificate = fs.readFileSync(__dirname + '/ssl/1_www.shikelong.cn_bundle.crt'),
	options = {key: privateKey, cert: certificate}

console.log(options)

app.use(express.static('public'))

const httpServer = http.createServer(app),
	httpsServer = https.createServer(options, app)

httpServer.listen(httpPort, ip, () => {
	console.log("服务器运行在" + ip + ":" + httpPort)
})

httpsServer.listen(httpsPort, ip, () => {
	console.log("服务器运行在" + ip + ":" + httpsPort)
})

app.get('/', (req, res) => {
	if(req.protocol === 'https') {
		console.log('访问主页')
		res.status(200).send('欢迎通过https访问史科郎')
	}else{
		console.log('访问主页')
		res.status(200).send('欢迎访问史科郎')
	}
})