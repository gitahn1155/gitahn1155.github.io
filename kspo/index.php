<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>국민체육진흥공단 30주년 기념 이벤트</title>
<link rel="stylesheet" href="style.css" type="text/css" media="all">
</head>
<body>
<script src="jquery-3.2.1.min.js" type="text/javascript"></script>
<script src="script.js" type="text/javascript"></script>
<div>
<h1 style="text-align: center;">국민체육진흥공단 30주년 <br />기념 이벤트</h1>	
	
</div>
<form id="formBox" action="" method="post" enctype='multipart/form-data'>
<div class="boxCon">
<div class="row">
  <div class="column1">
<img src="img/medal1.png" width="80px"/>
  </div>
  <div class="column2">
<p>금메달 스티커가 부착된 사보를 받으셨나요? 인증샷을 올려주세요.</p>
  </div>
</div>
        <label style="font-size: 13px;"><span style="color: red">*</span>파일 선택을 누르면 사진을 첨부할 수 있습니다</label><br /> <input type="file"
            name="attachment[]" class="demoInputBox" multiple="multiple">
    </div>
<div class="boxCon">	
<div class="row">
  <div class="column1">
<img src="img/medal2.png" width="80px"/>
  </div>
  <div class="column2">
<p>국민체육진흥공단이 창립 39주년을 맞았습니다. '삼십주년'으로 4행시를 지어주세요.</p>
  </div>
</div>	
	<input type="text" name="userText1" id="text1" class="demoInputBox" placeholder="삼 - ">
	<input type="text" name="userText2" id="text1" class="demoInputBox" placeholder="십 - ">
	<input type="text" name="userText3" id="text1" class="demoInputBox" placeholder="주 - ">
	<input type="text" name="userText4" id="text1" class="demoInputBox" placeholder="년(연) - ">
</div>

<div class="boxCon">
<div class="row">
    <div class="column1">
<img src="img/medal3.png" width="80px"/>
  </div>
  <div class="column2">
<p>국민체육진흥공단의 생일은 며칠일까요?</p>
  </div>
</div>	
<input type="date" name="userDate" id="userDate" class="demoInputBox" placeholder="DD/MM/YYYY">
</div>

	
	
	<div class="memberInfo">
	<h3 style="color: #503e3dfc">참여자 정보</h3>	
	<div>
        <input
            type="text" name="userName" id="userName"
            class="demoInputBox" placeholder="이름" required>
    </div>
    <div>
        <input type="text" name="userEmail" id="userEmail"
            class="demoInputBox" placeholder="이메일" required>
    </div>
	<div>
        <input
            type="number" name="userPhone" id="userPhone"
            class="demoInputBox" placeholder="연락처" required>
    </div>   
    <div>
        <input type="hidden" name="subject" id="subject"
            class="demoInputBox" value="국민체육진흥공단 이벤트 첨여자">
    </div>
    <div style="display: none">
        <textarea name="content" id="content" class="demoInputBox"
            cols="60" rows="6" placeholder="Content">value</textarea>
    </div>
    <div>
		<p style="text-align: center;"><input type="submit" value="제출하기" class="btnAction" /></p>
    </div>
	</div>
</form>
 <div id="mail-status"></div>
<div id="loader-icon" style="display: none;">
	파일을 전송하고 있습니다. 잠시만 기다려주세요...
</div>
</body>
</html>