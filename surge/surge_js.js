
// const $ = new nobyda(); 
// 发送一个通知: $.notify('title', 'subtitle', 'message')
// 持久化读取: $.read('Key')
// POST请求: $.post(url<Object>,callback<Function>)

// const $ = new nobyda(); 
// 发送一个通知: $.notify('title', 'subtitle', 'message')
// 持久化读取: $.read('Key')
// POST请求: $.post(url<Object>,callback<Function>)

function nobyda() {
	const isSurge = typeof $httpClient != "undefined";
	const isQuanX = typeof $task != "undefined";
	const isNode = typeof require == "function";
	const node = (() => {
		if (isNode) {
			const request = require('request');
			return {
				request
			}
		} else {
			return null;
		}
	})()
	const adapterStatus = (response) => {
		if (response) {
			if (response.status) {
				response["statusCode"] = response.status
			} else if (response.statusCode) {
				response["status"] = response.statusCode
			}
		}
		return response
	}
	this.read = (key) => {
		if (isQuanX) return $prefs.valueForKey(key)
		if (isSurge) return $persistentStore.read(key)
	}
	this.notify = (title, subtitle, message) => {
		if (isQuanX) $notify(title, subtitle, message)
		if (isSurge) $notification.post(title, subtitle, message)
		if (isNode) console.log(`${title}\n${subtitle}\n${message}`)
	}
	this.post = (options, callback) => {
		options.headers['User-Agent'] = 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_6_1 like Mac OS X) AppleWebKit/609.3.5.0.2 (KHTML, like Gecko) Mobile/17G80 BiliApp/822 mobi_app/ios_comic channel/AppStore BiliComic/822'
		if (isQuanX) {
			if (typeof options == "string") options = {
				url: options
			}
			options["method"] = "POST"
			$task.fetch(options).then(response => {
				callback(null, adapterStatus(response), response.body)
			}, reason => callback(reason.error, null, null))
		}
		if (isSurge) {
			options.headers['X-Surge-Skip-Scripting'] = false
			$httpClient.post(options, (error, response, body) => {
				callback(error, adapterStatus(response), body)
			})
		}
		if (isNode) {
			node.request.post(options, (error, response, body) => {
				callback(error, adapterStatus(response), body)
			})
		}
	}
	this.done = () => {
		if (isQuanX || isSurge) {
			$done()
		}
	}
};


function GetUserPoint() {
	const changeUrl = {
		url: 'https://api.m.jd.com',
		headers = {
    'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36',
    'Cookie' : 'pt_key=app_openAAJijG8sADDwb3b2AUvhOa17dtjFLUpwDnJxegkPMFRygKQYJe6Lvi2P9YWgzSMQ5XAYTB973Kk; pt_pin=onlysunjun',
    'origin':'https://gold.jd.com'
}
    data =  {
    "functionId": "MyAssetsService.execute",
     "body": "{'method':'goldShopPage','data':{'channel':1}}",
    "_t": "1653682937354",
    "appid": "market-task-h5"}
	}
	return new Promise((resolve) => { 
		$.post(pointUrl, (error, resp, data) => { 
			try { 
				if (error) {
					throw new Error(error); 
				} else {
					const body = JSON.parse(data); 
					if (body.code == 0 && body.data) { 
						user.point = parseInt(body.data.gears; \
						console.log(`\n可换红包: ${body.data.gears}`); //打印日志
					} else { //否则抛出一个异常
						throw new Error(body.msg || data);
					}
				}
			} catch (e) { //接住try代码块中抛出的异常, 并打印日志
				console.log(`\n查询红包: 失败\n出现错误: ${e.message}`);
			} finally { //finally语句在try和catch之后无论有无异常都会执行
				resolve(); //异步操作成功时调用, 将Promise对象的状态标记为"成功", 表示已完成查询积分
			}
		})
	})
}


(async function() { 
	await Promise.all([ 
		GetUserPoint()
	]);
	$.done(); 
})()
