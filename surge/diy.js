// test
const body = $request.body



title = '测试脚本'
subtitle = 'body'
content = body['ALARMINFO']
$notification.post(title, subtitle, content)

$done()
