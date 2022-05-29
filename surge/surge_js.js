
const pointUrl = {
    url: 'https://api.m.jd.com',
    headers = {
	'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36',
        'Cookie' : 'pt_key=app_openAAJijG8sADDwb3b2AUvhOa17dtjFLUpwDnJxegkPMFRygKQYJe6Lvi2P9YWgzSMQ5XAYTB973Kk; pt_pin=onlysunjun',
        'origin':'https://gold.jd.com'},
    data =  {
        "functionId": "MyAssetsService.execute",
        "body": "{'method':'goldShopPage','data':{'channel':1}}",
        "_t": "1653682937354",
        "appid": "market-task-h5"}
	}
$httpclient.post(pointUrl, (error, resp, data){
    const body = JSON.parse(data)
    console.log(`\n可换红包: ${body.data.gears}`)
    $done()
}
		
