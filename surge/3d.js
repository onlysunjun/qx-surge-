const body = $response.body;
const result = {};

if (body) {
  try {
    const resp = JSON.parse(body);
    resp.segmentation_is_student_or_teacher = true;
    result.body = JSON.stringify(resp);
  } catch (e) {
    console.log(e);
  }
}

$done(result);
