var Koa = require('koa')
var router = require("koa-router");
var koaBody = require('koa-body')
var crypto = require('crypto')
var xmlParser = require('koa-xml-body');
var app = new Koa()
var route = router()
var token = 'polixir'
route.get('/', async (ctx, next) => {
    var echostr = ctx.query.echostr
    var signature = ctx.query.signature;
    var timestamp = ctx.query.timestamp;
    var nonce = ctx.query.nonce;
    var key = [token, timestamp, nonce].sort().join('')
    var sha1 = crypto.createHash('sha1');
    sha1.update(key);
    if(sha1.digest('hex') === signature) ctx.body = echostr
    else ctx.body = false
    
})
route.post('/', async (ctx, next) => {
	console.log(ctx.request.body)
	var xml = ctx.request.body.xml
	if(xml.Content[0] === '123123') {
		ctx.body = `<xml>
		 <ToUserName><![CDATA[${xml.FromUserName[0]}]]></ToUserName>
		 <FromUserName><![CDATA[${xml.ToUserName[0]}]]></FromUserName>
		 <CreateTime>${xml.CreateTime}</CreateTime>
		 <MsgType><![CDATA[text]]></MsgType>
		 <Content><![CDATA[啊~啊~啊~你在发什么消息？]]></Content>
		 </xml>`
	}
	
})

// app.use(koaBody())
app.use(xmlParser())
app.use(route.routes())
app.use(route.allowedMethods())

// app.listen(9090);
module.exports = app