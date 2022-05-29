function GetUserPoint() {
	const pointUrl = {
		url: 'https://api.m.jd.com',
		headers = {
		'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36',
                'Cookie' : 'pt_key=app_openAAJijG8sADDwb3b2AUvhOa17dtjFLUpwDnJxegkPMFRygKQYJe6Lvi2P9YWgzSMQ5XAYTB973Kk; pt_pin=onlysunjun',
                'origin':'https://gold.jd.com'}
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
