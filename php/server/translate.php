<?php

$curl = curl_init();
$text = 'hello';
if (isset($_GET['text'])) {
  $text = $_GET['text'];
}
curl_setopt_array($curl, [
	CURLOPT_URL => "https://google-translate1.p.rapidapi.com/language/translate/v2/detect",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "POST",
	CURLOPT_POSTFIELDS => "q=".$text."&target='es'&source=en",
	CURLOPT_HTTPHEADER => [
		"Accept-Encoding: application/gzip",
		"X-RapidAPI-Host: google-translate1.p.rapidapi.com",
		"X-RapidAPI-Key: 2e3c3d547emshacac60927e7d8b9p102f5fjsn89b3e573f530",
		"content-type: application/x-www-form-urlencoded"
	],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
	echo "cURL Error #:" . $err;
} else {
  $data = json_decode($response, true);
  $translated = $data['data']['translations'][0]['translatedText'];
  echo($translated);
}
?>