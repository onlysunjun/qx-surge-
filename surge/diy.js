// test
const headers = $request.headers



title = '测试脚本'
subtitle = 'cookie'
body = headers['Cookie']
$notification.post(title, subtitle, body)

$done()
