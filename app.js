window.onload = function() {
    document.getElementById("scrollpage").innerHTML = '
    <body class="body" onload="checkCookie()">
<!--<header>-->
<div id="app">
<div v-if="Audio"><br><br><br><br><br>
<div class="frontcard">
<div class="front_image" onclick="play()"><img src="appFront.svg"></div>
</div>
</div> <!-- div v-if audio -->
</div> <!-- div app id -->
<!--</header>-->




<!--<header>-->
<div id="apptitle">
<div v-if="title">
<div class="cardme">
<div class="card_imageme"> <img src="icon.svg" />
<img v-if="apptitlereturn" onclick="titlereturn()" src="" />
</div>

</div></div></div>
<!--</header>-->





<div class="cards-list">
<div id="appone">
<div v-if="card1">
<div class="card 1">

<div class="card_image">
<img v-if="img1" onclick="clickone()" src="backgroundGf.gif">
<img v-if="img2" src="backgroundGf.jpeg" style="background: #346a68">
</div>

<!--<footer>-->
<p v-if="img1" style="color: white" class="card_title1 title-white" onclick="clickone()"><br><br><br><br>اضمر الصحابي</p>
<!--</footer>-->

<div class="card_title title-white">
<div id="scrollcard" style="overflow-x:scroll; height:225px;">
<p v-if="textproject" style="font-size:20px; color:white;">
من خلال استعراض بعض صفاته توقع من هو الصحابي صاحب هذه الصفات أو صاحب هذه المواقف </p>
<p v-if="guideone1" class="guidesize">{{guide11}}</p>
<p v-if="guidetwo1" class="guidesize">{{guide12}}</p>
<p v-if="guidethree1" class="guidesize">{{guide13}}</p>
<p v-if="guidefour1" class="guidesize">{{guide14}}</p>
<p v-if="guidefive1" class="guidesize">{{guide15}}</p>
<p v-if="guideone2" class="guidesize">{{guide21}}</p>
<p v-if="guidetwo2" class="guidesize">{{guide22}}</p>
<p v-if="guidethree2" class="guidesize">{{guide23}}</p>
<p v-if="guidefour2" class="guidesize">{{guide24}}</p>
<p v-if="guidefive2" class="guidesize">{{guide25}}</p>
<p v-if="guideone3" class="guidesize">{{guide31}}</p>
<p v-if="guidetwo3" class="guidesize">{{guide32}}</p>
<p v-if="guidethree3" class="guidesize">{{guide33}}</p>
<p v-if="guidefour3" class="guidesize">{{guide34}}</p>
<p v-if="guidefive3" class="guidesize">{{guide35}}</p>
<p v-if="guideone4" class="guidesize">{{guide41}}</p>
<p v-if="guidetwo4" class="guidesize">{{guide42}}</p>
<p v-if="guidethree4" class="guidesize">{{guide43}}</p>
<p v-if="guidefour4" class="guidesize">{{guide44}}</p>
<p v-if="guidefive4" class="guidesize">{{guide45}}</p>
<p v-if="guideone5" class="guidesize">{{guide51}}</p>
<p v-if="guidetwo5" class="guidesize">{{guide52}}</p>
<p v-if="guidethree5" class="guidesize">{{guide53}}</p>
<p v-if="guidefour5" class="guidesize">{{guide54}}</p>
<p v-if="guidefive5" class="guidesize">{{guide55}}</p>
<p v-if="guideone6" class="guidesize">{{guide61}}</p>
<p v-if="guidetwo6" class="guidesize">{{guide62}}</p>
<p v-if="guidethree6" class="guidesize">{{guide63}}</p>
<p v-if="guidefour6" class="guidesize">{{guide64}}</p>
<p v-if="guidefive6" class="guidesize">{{guide65}}</p>
<p v-if="guideone7" class="guidesize">{{guide71}}</p>
<p v-if="guidetwo7" class="guidesize">{{guide72}}</p>
<p v-if="guidethree7" class="guidesize">{{guide73}}</p>
<p v-if="guidefour7" class="guidesize">{{guide74}}</p>
<p v-if="guidefive7" class="guidesize">{{guide75}}</p>
<p v-if="guideone8" class="guidesize">{{guide81}}</p>
<p v-if="guidetwo8" class="guidesize">{{guide82}}</p>
<p v-if="guidethree8" class="guidesize">{{guide83}}</p>
<p v-if="guidefour8" class="guidesize">{{guide84}}</p>
<p v-if="guidefive8" class="guidesize">{{guide85}}</p>
<p v-if="guideone9" class="guidesize">{{guide91}}</p>
<p v-if="guidetwo9" class="guidesize">{{guide92}}</p>
<p v-if="guidethree9" class="guidesize">{{guide93}}</p>
<p v-if="guidefour9" class="guidesize">{{guide94}}</p>
<p v-if="guidefive9" class="guidesize">{{guide95}}</p>
<p v-if="guideone10" class="guidesize">{{guide101}}</p>
<p v-if="guidetwo10" class="guidesize">{{guide102}}</p>
<p v-if="guidethree10" class="guidesize">{{guide103}}</p>
<p v-if="guidefour10" class="guidesize">{{guide104}}</p>
<p v-if="guidefive10" class="guidesize">{{guide105}}</p></div></div></div>
</div> <!-- div v-if card1 -->
<br>


<div class="goldQ" v-if="goldQ">
	<div class="Thecircle">
		<span>السؤال<br> الذهبي</span>
		<h1>مرحبًا</h1>
		<p>السؤال الذهبي هو فرصة واحدة تتكون من تلميحة واحدة تكون لتفويت النقص</p>
	</div>
</div>

<!--<footer>-->
<!-- next btn underline -->
<p class="nextbtn" onclick="guideone11()" v-if="textproject">التالي</p>
<p class="nextbtn" onclick="guideone12()" v-if="guideone1">التالي</p>
<p class="nextbtn" onclick="guideone13()" v-if="guidetwo1">التالي</p>
<p class="nextbtn" onclick="guideone14()" v-if="guidethree1">التالي</p>
<p class="nextbtn" onclick="guideone15()" v-if="guidefour1">التالي</p>
<p class="nextbtn" onclick="ansrguide1()" v-if="answersguide1">التالي</p>
<p class="nextbtn" onclick="guideone20()" v-if="guide2">التالي</p>
<p class="nextbtn" onclick="guideone21()" v-if="guideone2">التالي</p>
<p class="nextbtn" onclick="guideone22()" v-if="guidetwo2">التالي</p>
<p class="nextbtn" onclick="guideone23()" v-if="guidethree2">التالي</p>
<p class="nextbtn" onclick="guideone24()" v-if="guidefour2">التالي</p>
<p class="nextbtn" onclick="ansrguide2()" v-if="answersguide2">التالي</p>
<p class="nextbtn" onclick="guideone30()" v-if="guide3">التالي</p>
<p class="nextbtn" onclick="guideone31()" v-if="guideone3">التالي</p>
<p class="nextbtn" onclick="guideone32()" v-if="guidetwo3">التالي</p>
<p class="nextbtn" onclick="guideone33()" v-if="guidethree3">التالي</p>
<p class="nextbtn" onclick="guideone34()" v-if="guidefour3">التالي</p>
<p class="nextbtn" onclick="ansrguide3()" v-if="answersguide3">التالي</p>
<p class="nextbtn" onclick="guideone40()" v-if="guide4">التالي</p>
<p class="nextbtn" onclick="guideone41()" v-if="guideone4">التالي</p>
<p class="nextbtn" onclick="guideone42()" v-if="guidetwo4">التالي</p>
<p class="nextbtn" onclick="guideone43()" v-if="guidethree4">التالي</p>
<p class="nextbtn" onclick="guideone44()" v-if="guidefour4">التالي</p>
<p class="nextbtn" onclick="ansrguide4()" v-if="answersguide4">التالي</p>
<p class="nextbtn" onclick="guideone50()" v-if="guide5">التالي</p>
<p class="nextbtn" onclick="guideone51()" v-if="guideone5">التالي</p>
<p class="nextbtn" onclick="guideone52()" v-if="guidetwo5">التالي</p>
<p class="nextbtn" onclick="guideone53()" v-if="guidethree5">التالي</p>
<p class="nextbtn" onclick="guideone54()" v-if="guidefour5">التالي</p>
<p class="nextbtn" onclick="ansrguide5()" v-if="answersguide5">التالي</p>
<p class="nextbtn" onclick="guideone60()" v-if="guide6">التالي</p>
<p class="nextbtn" onclick="guideone61()" v-if="guideone6">التالي</p>
<p class="nextbtn" onclick="guideone62()" v-if="guidetwo6">التالي</p>
<p class="nextbtn" onclick="guideone63()" v-if="guidethree6">التالي</p>
<p class="nextbtn" onclick="guideone64()" v-if="guidefour6">التالي</p>
<p class="nextbtn" onclick="ansrguide6()" v-if="answersguide6">التالي</p>
<p class="nextbtn" onclick="guideone70()" v-if="guide7">التالي</p>
<p class="nextbtn" onclick="guideone71()" v-if="guideone7">التالي</p>
<p class="nextbtn" onclick="guideone72()" v-if="guidetwo7">التالي</p>
<p class="nextbtn" onclick="guideone73()" v-if="guidethree7">التالي</p>
<p class="nextbtn" onclick="guideone74()" v-if="guidefour7">التالي</p>
<p class="nextbtn" onclick="ansrguide7()" v-if="answersguide7">التالي</p>
<p class="nextbtn" onclick="guideone80()" v-if="guide8">التالي</p>
<p class="nextbtn" onclick="guideone81()" v-if="guideone8">التالي</p>
<p class="nextbtn" onclick="guideone82()" v-if="guidetwo8">التالي</p>
<p class="nextbtn" onclick="guideone83()" v-if="guidethree8">التالي</p>
<p class="nextbtn" onclick="guideone84()" v-if="guidefour8">التالي</p>
<p class="nextbtn" onclick="ansrguide8()" v-if="answersguide8">التالي</p>
<p class="nextbtn" onclick="guideone90()" v-if="guide9">التالي</p>
<p class="nextbtn" onclick="guideone91()" v-if="guideone9">التالي</p>
<p class="nextbtn" onclick="guideone92()" v-if="guidetwo9">التالي</p>
<p class="nextbtn" onclick="guideone93()" v-if="guidethree9">التالي</p>
<p class="nextbtn" onclick="guideone94()" v-if="guidefour9">التالي</p>
<p class="nextbtn" onclick="ansrguide9()" v-if="answersguide9">التالي</p>
<p class="nextbtn" onclick="guideone100()" v-if="guide10">التالي</p>
<p class="nextbtn" onclick="guideone101()" v-if="guideone10">التالي</p>
<p class="nextbtn" onclick="guideone102()" v-if="guidetwo10">التالي</p>
<p class="nextbtn" onclick="guideone103()" v-if="guidethree10">التالي</p>
<p class="nextbtn" onclick="guideone104()" v-if="guidefour10">التالي</p>
<p class="nextbtn" onclick="ansrguide10()" v-if="answersguide10">التالي</p>
<p class="nextbtn" onclick="guideone110()" v-if="guide110">التالي</p>
<!--</footer>-->

</div>




<div id="boxone" v-if="boxone">
<p v-if="lasttext" style="text-align:center; font-size:35px; color:white;"><br><br><br><br>انتهت المسابقة <br> على أمل أن نجدد الأسئلة <br> ونزيدها قريباً بأذن الله ⁦❤️⁩</p>

<!--<footer>-->
<p v-if="points" style="text-align:center; font-size:35px; color:white;">النقاط: 50/{{point}}</p>
<!--</footer>-->


<div id="formAnswer" v-if="inputansr1" >
<label for="Answer">ادخل إجابتك</label>
<input type="text" id="answerA1" name="Answer" placeholder="ادخل إجابتك :)">
<input type="submit" onclick="answer1()" value="ارسل"><br><br>
<input type="submit" onclick="answer1(1)" value="خيارات (نقطة واحده بدل خمس نقاط)">
</div> <!-- div v-if inputansr1 -->
<div v-if="optionansr1" id="optionAnswers">
<div  class="boxfull" v-if="optionA1">
اختر الإجابة الصحيحة:
</div><br>
<div id="scrollansr">
<div class="box" id="fiveA" v-if="five1" onclick="fouroneA(5)">
{{fiveA1}}
</div><br>
<div class="box" id="fourA" v-if="four1" onclick="fouroneA(4)">
{{fourA1}}
</div><br>
<div class="box" id="oneA" v-if="one1" onclick="fouroneA(1)">
{{oneA1}}
</div><br>
<div class="box" id="twoA" v-if="two1" onclick="fouroneA(2)">
{{twoA1}}
</div><br>
<div class="box" id="threeA" v-if="three1" onclick="fouoneA()">
{{threeA1}}
</div>
</div> <!-- div scrollansr -->
</div> <!-- div v-if optionansr1 -->

<div id="formAnswer" v-if="inputansr2" >
<label for="Answer">ادخل إجابتك</label>
<input type="text" id="answerA2" name="Answer" placeholder="ادخل إجابتك :)">
<input type="submit" onclick="answer2()" value="ارسل"><br><br>
<input type="submit" onclick="answer2(1)" value="خيارات (نقطة واحده بدل خمس نقاط)">
</div> <!-- div v-if inputansr2 -->
<div v-if="optionansr2" id="optionAnswers">
<div  class="boxfull" v-if="optionA2">
اختر الإجابة الصحيحة:
</div><br>
<div id="scrollansr">
<div class="box" id="threeA" v-if="three2" onclick="fouoneA2()">
{{threeA2}}
</div><br>
<div class="box" id="fiveA" v-if="five2" onclick="fouroneA2(5)">
{{fiveA2}}
</div><br>
<div class="box" id="fourA" v-if="four2" onclick="fouroneA2(4)">
{{fourA2}}
</div><br>
<div class="box" id="oneA" v-if="one2" onclick="fouroneA2(1)">
{{oneA2}}
</div><br>
<div class="box" id="twoA" v-if="two2" onclick="fouroneA2(2)">
{{twoA2}}
</div>
</div> <!-- div scrollansr -->
</div> <!-- div v-if optionansr2 -->

<div id="formAnswer" v-if="inputansr3" >
<label for="Answer">ادخل إجابتك</label>
<input type="text" id="answerA3" name="Answer" placeholder="ادخل إجابتك :)">
<input type="submit" onclick="answer3()" value="ارسل"><br><br>
<input type="submit" onclick="answer3(1)" value="خيارات (نقطة واحده بدل خمس نقاط)">
</div> <!-- div v-if inputansr3 -->
<div v-if="optionansr3" id="optionAnswers">
<div  class="boxfull" v-if="optionA3">
اختر الإجابة الصحيحة:
</div><br>
<div id="scrollansr">
<div class="box" id="fiveA" v-if="five3" onclick="fouroneA3(5)">
{{fiveA3}}
</div><br>
<div class="box" id="fourA" v-if="four3" onclick="fouroneA3(4)">
{{fourA3}}
</div><br>
<div class="box" id="threeA" v-if="three3" onclick="fouoneA3()">
{{threeA3}}
</div><br>
<div class="box" id="oneA" v-if="one3" onclick="fouroneA3(1)">
{{oneA3}}
</div><br>
<div class="box" id="twoA" v-if="two3" onclick="fouroneA3(2)">
{{twoA3}}
</div>
</div> <!-- div scrollansr -->
</div> <!-- div v-if optionansr3 -->

<div id="formAnswer" v-if="inputansr4" >
<label for="Answer">ادخل إجابتك</label>
<input type="text" id="answerA4" name="Answer" placeholder="ادخل إجابتك :)">
<input type="submit" onclick="answer4()" value="ارسل"><br><br>
<input type="submit" onclick="answer4(1)" value="خيارات (نقطة واحده بدل خمس نقاط)">
</div> <!-- div v-if inputansr4 -->
<div v-if="optionansr4" id="optionAnswers">
<div  class="boxfull" v-if="optionA4">
اختر الإجابة الصحيحة:
</div><br>
<div id="scrollansr">
<div class="box" id="fiveA" v-if="five4" onclick="fouroneA4(5)">
{{fiveA4}}
</div><br>
<div class="box" id="fourA" v-if="four4" onclick="fouroneA4(4)">
{{fourA4}}
</div><br>
<div class="box" id="oneA" v-if="one4" onclick="fouroneA4(1)">
{{oneA4}}
</div><br>
<div class="box" id="threeA" v-if="three4" onclick="fouoneA4()">
{{threeA4}}
</div><br>
<div class="box" id="twoA" v-if="two4" onclick="fouroneA4(2)">
{{twoA4}}
</div>
</div> <!-- div scrollansr -->
</div> <!-- div v-if optionansr4 -->

<div id="formAnswer" v-if="inputansr5" >
<label for="Answer">ادخل إجابتك</label>
<input type="text" id="answerA5" name="Answer" placeholder="ادخل إجابتك :)">
<input type="submit" onclick="answer5()" value="ارسل"><br><br>
<input type="submit" onclick="answer5(1)" value="خيارات (نقطة واحده بدل خمس نقاط)">
</div> <!-- div v-if inputansr5 -->
<div v-if="optionansr5" id="optionAnswers">
<div  class="boxfull" v-if="optionA5">
اختر الإجابة الصحيحة:
</div><br>
<div id="scrollansr">
<div class="box" id="fiveA" v-if="five5" onclick="fouroneA5(5)">
{{fiveA5}}
</div><br>
<div class="box" id="fourA" v-if="four5" onclick="fouroneA5(4)">
{{fourA5}}
</div><br>
<div class="box" id="oneA" v-if="one5" onclick="fouroneA5(1)">
{{oneA5}}
</div><br>
<div class="box" id="twoA" v-if="two5" onclick="fouroneA5(2)">
{{twoA5}}
</div><br>
<div class="box" id="threeA" v-if="three5" onclick="fouoneA5()">
{{threeA5}}
</div>
</div> <!-- div scrollansr -->
</div> <!-- div v-if optionansr5 -->

<div id="formAnswer" v-if="inputansr6" >
<label for="Answer">ادخل إجابتك</label>
<input type="text" id="answerA6" name="Answer" placeholder="ادخل إجابتك :)">
<input type="submit" onclick="answer6()" value="ارسل"><br><br>
<input type="submit" onclick="answer6(1)" value="خيارات (نقطة واحده بدل خمس نقاط)">
</div> <!-- div v-if inputansr2 -->
<div v-if="optionansr6" id="optionAnswers">
<div  class="boxfull" v-if="optionA6">
اختر الإجابة الصحيحة:
</div><br>
<div id="scrollansr">
<div class="box" id="fiveA" v-if="five6" onclick="fouroneA6(5)">
{{fiveA6}}
</div><br>
<div class="box" id="threeA" v-if="three6" onclick="fouoneA6()">
{{threeA6}}
</div><br>
<div class="box" id="fourA" v-if="four6" onclick="fouroneA6(4)">
{{fourA6}}
</div><br>
<div class="box" id="oneA" v-if="one6" onclick="fouroneA6(1)">
{{oneA6}}
</div><br>
<div class="box" id="twoA" v-if="two6" onclick="fouroneA6(2)">
{{twoA6}}
</div>
</div> <!-- div scrollansr -->
</div> <!-- div v-if optionansr6 -->

<div id="formAnswer" v-if="inputansr7" >
<label for="Answer">ادخل إجابتك</label>
<input type="text" id="answerA7" name="Answer" placeholder="ادخل إجابتك :)">
<input type="submit" onclick="answer7()" value="ارسل"><br><br>
<input type="submit" onclick="answer7(1)" value="خيارات (نقطة واحده بدل خمس نقاط)">
</div> <!-- div v-if inputansr7 -->
<div v-if="optionansr7" id="optionAnswers">
<div  class="boxfull" v-if="optionA7">
اختر الإجابة الصحيحة:
</div><br>
<div id="scrollansr">
<div class="box" id="fiveA" v-if="five7" onclick="fouroneA7(5)">
{{fiveA7}}
</div><br>
<div class="box" id="fourA" v-if="four7" onclick="fouroneA7(4)">
{{fourA7}}
</div><br>
<div class="box" id="oneA" v-if="one7" onclick="fouroneA7(1)">
{{oneA7}}
</div><br>
<div class="box" id="twoA" v-if="two7" onclick="fouroneA7(2)">
{{twoA7}}
</div><br>
<div class="box" id="threeA" v-if="three7" onclick="fouoneA7()">
{{threeA7}}
</div>
</div> <!-- div scrollansr -->
</div> <!-- div v-if optionansr7 -->

<div id="formAnswer" v-if="inputansr8" >
<label for="Answer">ادخل إجابتك</label>
<input type="text" id="answerA8" name="Answer" placeholder="ادخل إجابتك :)">
<input type="submit" onclick="answer8()" value="ارسل"><br><br>
<input type="submit" onclick="answer8(1)" value="خيارات (نقطة واحده بدل خمس نقاط)">
</div> <!-- div v-if inputansr8 -->
<div v-if="optionansr8" id="optionAnswers">
<div  class="boxfull" v-if="optionA8">
اختر الإجابة الصحيحة:
</div><br>
<div id="scrollansr">
<div class="box" id="fiveA" v-if="five8" onclick="fouroneA8(5)">
{{fiveA8}}
</div><br>
<div class="box" id="fourA" v-if="four8" onclick="fouroneA8(4)">
{{fourA8}}
</div><br>
<div class="box" id="threeA" v-if="three8" onclick="fouoneA8()">
{{threeA8}}
</div><br>
<div class="box" id="oneA" v-if="one8" onclick="fouroneA8(1)">
{{oneA8}}
</div><br>
<div class="box" id="twoA" v-if="two8" onclick="fouroneA8(2)">
{{twoA8}}
</div>
</div> <!-- div scrollansr -->
</div> <!-- div v-if optionansr8 -->

<div id="formAnswer" v-if="inputansr9" >
<label for="Answer">ادخل إجابتك</label>
<input type="text" id="answerA9" name="Answer" placeholder="ادخل إجابتك :)">
<input type="submit" onclick="answer9()" value="ارسل"><br><br>
<input type="submit" onclick="answer9(1)" value="خيارات (نقطة واحده بدل خمس نقاط)">
</div> <!-- div v-if inputansr9 -->
<div v-if="optionansr9" id="optionAnswers">
<div  class="boxfull" v-if="optionA9">
اختر الإجابة الصحيحة:
</div><br>
<div id="scrollansr">
<div class="box" id="fiveA" v-if="five9" onclick="fouroneA9(5)">
{{fiveA9}}
</div><br>
<div class="box" id="threeA" v-if="three9" onclick="fouoneA9()">
{{threeA9}}
</div><br>
<div class="box" id="fourA" v-if="four9" onclick="fouroneA9(4)">
{{fourA9}}
</div><br>
<div class="box" id="oneA" v-if="one9" onclick="fouroneA9(1)">
{{oneA9}}
</div><br>
<div class="box" id="twoA" v-if="two9" onclick="fouroneA9(2)">
{{twoA9}}
</div>
</div> <!-- div scrollansr -->
</div> <!-- div v-if optionansr9 -->

<div id="formAnswer" v-if="inputansr10" >
<label for="Answer">ادخل إجابتك</label>
<input type="text" id="answerA10" name="Answer" placeholder="ادخل إجابتك :)">
<input type="submit" onclick="answer10()" value="ارسل"><br><br>
<input type="submit" onclick="answer10x()" value="خيارات (نقطة واحده بدل خمس نقاط)">
</div> <!-- div v-if inputansr10 -->
<div v-if="optionansr10" id="optionAnswers">
<div  class="boxfull" v-if="optionA10">
اختر الإجابة الصحيحة:
</div><br>
<div id="scrollansr">
<div class="box" id="threeA" v-if="three10" onclick="fouoneA10()">
{{threeA10}}
</div><br>
<div class="box" id="fiveA" v-if="five10" onclick="fouroneA10(5)">
{{fiveA10}}
</div><br>
<div class="box" id="fourA" v-if="four10" onclick="fouroneA10(4)">
{{fourA10}}
</div><br>
<div class="box" id="oneA" v-if="one10" onclick="fouroneA10(1)">
{{oneA10}}
</div><br>
<div class="box" id="twoA" v-if="two10" onclick="fouroneA10(2)">
{{twoA10}}
</div>
</div> <!-- div scrollansr -->
</div> <!-- div v-if optionansr10 -->

</div> <!-- div v-if boxone -->
</div> <!-- div complete appone -->
</div>
</body>';
}

var heightD = window.screen.height;

var headerD = (heightD * 0.20) + "px";
var contentD = (heightD * 0.60)+ "px";
var footerD = (heightD * 0.20)+ "px";
// document.getElementById("headerDv").style.height= headerD;
// document.getElementById("contentDv").style.height= contentD;
// document.getElementById("footerDv").style.height= footerD;





function setCookie(cname,cvalue,exdays) {    
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);   
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);   
        }
    }
    return "";
}

function checkCookie() {
    var user =getCookie("username");
    var pasword =getCookie("password");
    if (user != "") {
        myApp1.username="نورتنا يا " + user + " في لعبتنا 🌹";        
    } else {
        user = prompt("تسجيل الدخول/تسجيل جديد: من فضلك ادخل اسم المستخدم:","");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
        pasword= prompt("من فضلك ادخل الرقم السري:","");
        if (pasword!= "" && pasword!= null) {
            setCookie("pasword", pasword, 30);
        }
    }
}


var myApp = new Vue({
    el: '#apptitle',
    data: {
        title: false,
        apptitle:true,
        apptitlereturn:false,
        text: 'المسابقة',
    }
})


var boxone = new Vue({
    el: '#boxone',
    data: {
        boxone: false,
        lasttext: false,
        percentOfAnswer:0,
        point: 0,
        points: false,
        optionansr1: false,
        optionansr2: false,
        optionansr3: false,
        optionansr4: false,
        optionansr5: false,
        optionansr6: false,
        optionansr7: false,
        optionansr8: false,
        optionansr9: false,
        optionansr10: false,
        inputansr1: false,
        inputansr2: false,
        inputansr3: false,
        inputansr4: false,
        inputansr5: false,
        inputansr6: false,
        inputansr7: false,
        inputansr8: false,
        inputansr9: false,
        inputansr10: false,
        optionA1: false,
        optionA2: false,
        optionA3: false,
        optionA4: false,
        optionA5: false,
        optionA6: false,
        optionA7: false,
        optionA8: false,
        optionA9: false,
        optionA10: false,
        three1: false,
        one1: false,
        two1: false,
        four1: false,
        five1: false,
        three2: false,
        one2: false,
        two2: false,
        four2: false,
        five2: false,
        three3: false,
        one3: false,
        two3: false,
        four3: false,
        five3: false,
        three4: false,
        one4: false,
        two4: false,
        four4: false,
        five4: false,
        three5: false,
        one5: false,
        two5: false,
        four5: false,
        five5: false,
        three6: false,
        one6: false,
        two6: false,
        four6: false,
        five6: false,
        three7: false,
        one7: false,
        two7: false,
        four7: false,
        five7: false,
        three8: false,
        one8: false,
        two8: false,
        four8: false,
        five8: false,
        three9: false,
        one9: false,
        two9: false,
        four9: false,
        five9: false,
        three10: false,
        one10: false,
        two10: false,
        four10: false,
        five10: false,
        fiveA1: "صهيب الرومي",
        fourA1: "أبو أيوب خالد بن زيد بن كليب الأنصاري",
        threeA1:"سلمان الفارسي",
        twoA1: "سعد بن معاذ",
        oneA1: "سَلَمَةُ بْنُ عَمْرِو بْنِ الْأَكْوَعِ",
        fiveA2: "صهيب الرومي",
        fourA2: "زيد بن حارثة",
        threeA2:"عمار بن ياسر",
        twoA2: "أبو ذر جندب بن جنادة الغفاري",
        oneA2: "عكرمة بن أبي جهل",
        fiveA3: "أبو سفيان صخر بن حرب بن أمية",
        fourA3: "عمرو بن العاص",
        threeA3:"خالد بن الوليد",
        twoA3: "ضرار بن الأزور الأسدي",
        oneA3: "أبو سفيان صخر بن حرب",
        fiveA4: "صهيب الرومي",
        fourA4: "سَلَمَةُ بْنُ عَمْرِو بْنِ الْأَكْوَعِ",
        threeA4:"أبي ذر جندب بن جنادة الغفاري",
        twoA4: "زيد بن حارثة",
        oneA4: "عمرو بن العاص",
        fiveA5: "سعد بن أبي وقاص",
        fourA5: "أبي موسى الأشعري",
        threeA5:"سعد بن معاذ",
        twoA5: "عبدالرحمن بن صخر الدوسي",
        oneA5: "معاذ بن جبل",
        fiveA6: "أبو الدرداء اﻷنصاري",
        fourA6: "أبو عبيده بن الجراح",
        threeA6:"معاذ بن جبل",
        twoA6: "زيد بن ثابت بن الضحّاك الأنصاري",
        oneA6: "أبو سعيد سعد بن مالك بن سنان الخدري",
        fiveA7: "عثمان بن أبي العاص",
        fourA7: "العباس بن عبد المطلب",
        threeA7:"أبو سفيان صخر بن حرب",
        twoA7: "حمزة بن عبد المطلب",
        oneA7: "عبدالله بن عتبة بن ربيعة",
        fiveA8: "طَلْحَة بن عُبَيْد اللّه",
        fourA8: "عبد الرّحمن بن عوف",
        threeA8:"الزبير بن العوام",
        twoA8: "سَعِيد بن زَيْد",
        oneA8: "أبو عبيدة عامر بن عبد الله بن الجراح ",
        fiveA9: "زيد بن حارثة",
        fourA9: "عبد الله بن رواحة",
        threeA9:"سعد بن أبي وقاص",
        twoA9: "حسان بن ثابت",
        oneA9: "عبدالله بن عتبة بن ربيعة",
        fiveA10: "جبير بن مطعم",
        fourA10: "عتاب بن أسيد",
        threeA10:"حكيم بن حزام",
        twoA10: "سهيل بن عمرو",
        oneA10: "صفوان بن أمية"
    }
})

var myApp1 = new Vue({
    el: '#appone',
    data: {
        username:"",
        password:"",
        goldQ: false,
        card1: false,
        img1:true,
        img2:false,
        text: true,
        textproject: false,
        guideone1: false,
        guidetwo1: false,
        guidethree1: false,
        guidefour1: false,
        guidefive1: false,
        answersguide1: false,
        guide2: false,
        guideone2: false,
        guidetwo2: false,
        guidethree2: false,
        guidefour2: false,
        guidefive2: false,
        answersguide2: false,
        guide3: false,
        guideone3: false,
        guidetwo3: false,
        guidethree3: false,
        guidefour3: false,
        guidefive3: false,
        answersguide3: false,
        guide4: false,
        guideone4: false,
        guidetwo4: false,
        guidethree4: false,
        guidefour4: false,
        guidefive4: false,
        answersguide4: false,
        guide5: false,
        guideone5: false,
        guidetwo5: false,
        guidethree5: false,
        guidefour5: false,
        guidefive5: false,
        answersguide5: false,
        guide6: false,
        guideone6: false,
        guidetwo6: false,
        guidethree6: false,
        guidefour6: false,
        guidefive6: false,
        answersguide6: false,
        guide7: false,
        guideone7: false,
        guidetwo7: false,
        guidethree7: false,
        guidefour7: false,
        guidefive7: false,
        answersguide7: false,
        guide8: false,
        guideone8: false,
        guidetwo8: false,
        guidethree8: false,
        guidefour8: false,
        guidefive8: false,
        answersguide8: false,
        guide9: false,
        guideone9: false,
        guidetwo9: false,
        guidethree9: false,
        guidefour9: false,
        guidefive9: false,
        answersguide9: false,
        guide10: false,
        guideone10: false,
        guidetwo10: false,
        guidethree10: false,
        guidefour10: false,
        guidefive10: false,
        answersguide10: false,
        guide110: false,
        guideone110: false,
        guidetwo110: false,
        guidethree110: false,
        guidefour110: false,
        guidefive110: false,
        answersguide11: false,
        guide11: "انتقل بين البلدان ليصحب الرجال الصالحين من القساوسة، إلى أن وصف له أحدهم ظهور نبي في بلاد العرب محمد صلى الله عليه وسلم",
        guide12: "أعلى النبي صلى الله عليه وسلم من منزلته، فقد روى أنس بن مالك عن النبي صلى الله عليه وسلم قوله: «الجنة تشتاق إلى ثلاثة:...» وذكره منهم. /سنن الترمذي» كتاب المناقب",
        guide13: "قال عنه الخليفة علي بن أبي طالب رضي الله عنه: «أدرك العلم الأول، والعلم الآخر، بحر لا يدرك قعره، وهو منا أهل البيت». /سير أعلام النبلاء",
        guide14: "قال رضي الله عنه: «شهدت مع رسول الله صلى الله عليه وسلم الخندق، ثم لم يفتني معه مشهد». رواه الإمام أحمد في مسنده برقم ٢٣٧٣٧",
        guide15: "روى الإمام أحمد في مسنده من حديث الحسن قال: لما احتضر (...) بكى، وقال: إن رسول الله صلى الله عليه وسلم عهد إلينا عهدًا، فتركنا ما عهد إلينا، أن يكون بلغة أحدنا من الدنيا كزاد الراكب، قال: ثم نظرنا فيما ترك، فإذا قيمة ما ترك بضعة وعشرون درهمًا، أو بضعة وثلاثون درهمًا. توفي سنة خمس وثلاثين من هجرة الرسول صلى الله عليه وسلم آخر خلافة عثمان رضي الله عنه",
        guide21: "صحابي كان من موالي بني مخزوم، ومن السابقين إلى الإسلام، ومن المستضعفين الذين عُذّبوا ليتركوا دين الإسلام",
        guide22: "كان بنو مخزوم لا يتركون (...) حتى ينال من النبي صلى الله عليه وسلم، ويذكر آلهتهم بخير، فلما أتى النبي، سأله النبي: «ما وراءك؟»، قال: «شر يا رسول الله. والله ما تُرِكْتُ حتى نلت منك، وذكرت آلهتهم بخير»، فقال النبي: «فكيف تجد قلبك؟»، قال: «مطمئن بالإيمان»، فقال النبي: «فإن عادوا فعد»، سير أعلام النبلاء",
        guide23: "كان لـ(...) مكانته الرفيعة عند النبي محمد، فقد روى أنس بن مالك عن النبي محمد قوله: «ثلاثة تشتاق إليهم الجنة: علي وسلمان و(...)»المستدرك على الصحيحين، وروى علي بن أبي طالب أن (...) استأذن على النبي محمد، فقال: «من هذا؟»، قال: «...»، قال: «مرحبًا بالطَيّبِ المُطَيَّبِ»،",
        guide24: "بعد وفاة النبي محمد، شارك في حروب الردة، واستبسل يوم اليمامة لما اشتدّ القتال، ورأى تأزّم الموقف في القتال، فاعتلى صخرة، وصاح: «يا معشر المسلمين، أمن الجنة تفرون؟ أنا (...)، هلموا إلي»الطبقات الكبرى لابن سعد.، وقد قطعت أذنه يومئذ٫ الإصابة في تمييز الصحابة.، فكانت تتذبذب، وهو يقاتل أشد القتال٫ سير أعلام النبلاء",
        guide25: "كان رضي الله عنه مع علي بن أبي طالب رضي الله عنه في حربه مع معاوية بن أبي سفيان رضي الله عنه بعد مقتل عثمان بن عفان، فشهد موقعة الجمل، ثم وقعة صفين. قُتل في وقعة صفين في صفر سنة 37 هـ، وعمره 93 سنة، وهو يقاتل في صفوف جيش علي بن أبي طالب وهو شيخ طاعن في السن في يده حربة ترعد. الطبقات الكبرى لابن سعد",
        guide31: "صحابي اعتنق الدين الإسلامي بعد صلح الحديبية، شارك في حملات مختلفة في عهد الرسول، أهمها غزوة مؤتة وفتح مكة",
        guide32: "قص رضي الله عنه على أبي بكر الصديق رضي الله عنه رؤيا رآها في نومه أنه كان في بلاد ضيقة مجدبة، فخرج إلى بلاد خضراء واسعة، فقال له: «مخرجك الذي هداك الله للإسلام، والضيق الذي كنت فيه من الشرك». البداية والنهاية لابن كثير رحمه الله",
        guide33: "كان رضي الله عنه طويلاً بائن الطول، عظيم الجسم والهامة، يميل إلى البياض، كث اللحية، شديد الشبه بعمر بن الخطاب، حتى أن ضعاف النظر كانوا يخلطون بينهما",
        guide34: "قال له أبو بكر الصدّيق -رضي الله عنه- عندما سلّمه لواء الجيش لقتال المُرتدّين: (إنّي سمعت رسول الله -صلّى الله عليه وسلّم- يقول: نِعْمَ عبد الله وأخو العشيرة (...)، سيف من سيوف الله، سلَّه الله على الكُفّار والمُنافِقين) مسند الإمام أحمد",
        guide35: "توفي رضي الله عنه عام واحد وعشرون من هجرة الرسول صلى الله عليه وسلم بعمر يناهز خمسين سنـة",
        guide41: "من السابقين إلى الإسلام، قيل رابع أو خامس من دخل في الإسلام، وأحد الذين جهروا بالإسلام في مكة قبل الهجرة النبوية. قال عنه الذهبي في ترجمته له في كتابه «سير أعلام النبلاء»: «كان رأسًا في الزُهد، والصدق، والعلم والعمل، قوّالاً بالحق، لا تأخذه في الله لومة لائم، على حِدّةٍ فيه»",
        guide42: "كان في الجاهلية يتكسب من قطع الطريق، وعُرف عنه شجاعته في ذلك، فكان يُغير بمفرده في وضح النهار على ظهر فرسه، فيجتاز الحي، ويأخذ ما أخذ. ورغم مهنته تلك، كان موحدًا، ولا يعبد الأصنام. وحين بلغته الأخبار بأن هناك من يدعو للتوحيد في مكة، سارع إلى الإسلام، فكان من السابقين إلى الإسلام على خلاف أكان رابع أربعة أم خامس خمسة انضمامًا إلى الإسلام. سير أعلم النبلاء، الطبقات الكبرى لابن سعد، الإصابة في تمييز الصحابة، تهذيب الكمال للمزي، ",
        guide43:"اشتهرت قبيلته في الجاهلية بقطع الطريق على القوافل",
        guide44: "كان رجلاً آدمًا ضخمًا جسيمًا، كث اللحية، طويلاً، أبيض الشعر واللحية، نحيفًا. وقد ترك من الذرية بنتًا واحدة ضمها عثمان بن عفان إلى عياله بعد وفاته، سير أعلام النبلاء",
        guide45: "،توفي في ذي الحجة سنة 32 هـ في الربذه، وكان لما حضرته الوفاة، قد أوصى امرأته وغلامه، فقال: «إذا مت فاغسلاني وكفناني، وضعاني على الطريق، فأول ركب يمرون بكم فقولا: هذا (...)». فلما مات فعلا به ذلك، فإذا ركب من أهل الكوفة فيهم عبد الله بن مسعود، فسأل: «ما هذا؟»، قيل جنازة (...)، فبكى ابن مسعود، وتذكر قول النبي محمد: «يرحم الله (...)، يمشي وحده، ويموت وحده، ويبعث وحده».فصلى عليه، وألحده بنفسه، سير أعلام النبلاء",
        guide51: "صحابي، كان سيدًا للأوس في يثرب قبل الهجرة النبوية. أسلم على يد مصعب بن عمير الذي أرسله النبي محمد صلى الله عليه وسلم إلى يثرب ليعلم أهلها دينهم، فأسلم بإسلامه بنو عبد الأشهل كلهم.سيرة ابن هشام",
        guide52: "بعد هجرة النبي محمد، شهد معه غزوات بدر وأحد والخندق التي أصيب فيها إصابة بليغة. ولما حاصر النبي صلى الله عليه وسلم بني قريظة، قبلوا بالاستسلام على أن يُحكَّمْه فيهم، فحُمل إليهم وهو جريح، فحكم فيهم بقتل الرجال وسبي النساء وتقسيم أموالهم وأراضيهم على المسلمين",
        guide53: "قال الرسول صلى الله عليه وسلم: ((هذا الذي تحرك له العرش، وفتحت له أبواب السماء، وشهده سبعون ألفاً من الملائكة، لقد ضم ضمة، ثم فرج عنه))، رواه النسائي والطبراني",
        guide54: "قال الرسول صلى الله عليه وسلم: ((إن للقبر ضغطة لو كان أحد ناجياً منها نجا (...))) رواه أحمد في مسنده",
        guide55: "بعد غزوة بني قريظة، انتقض جرحه ولم يلبث إلا يسيرًا ومات. توفى في السنة الخامسة من هجرة الرسول صلى الله عليه وسلم",
        guide61: "صحابي وفقيه وقارئ قرآن وراوي للحديث النبوي من الأنصار من بني أدّى من بني جشم بن الخزرج، أسلم وهو ابن 18 سنة، وشهد بيعة العقبة الثانية، ثم شهد مع النبي محمد صلى الله عليه وسلم المشاهد كلها، واستبقاه في مكة بعد فتحها ليُعلّم الناس القرآن ويفقههم، ثم بعثه عاملاً له في اليمن بعد غزوة تبوك.",
        guide62: "روى عبد الله بن عمرو بن العاص عن النبي صلى الله عليه وسلم قوله: «خذوا القرآن من أربعة: من ابن مسعود وأبي و(...) وسالم مولى أبي حذيفة». أسد الغابة في معرفة الصحابة",
        guide63: "قال أبو إدريس الخولاني: «دخلت مسجد حمص، فإذا فيه نحو من ثلاثين كهلاً من الصحابة، فإذا فيهم شاب أكحل العينين، براق الثنايا ساكت، فإذا امترى القوم، أقبلوا عليه، فسألوه، فقلت: «من هذا؟» قيل: «...». فوقعت محبته في قلبي». الطبقات الكبرى لابن سعد",
        guide64: "قال النبي صلى الله عليه وسلم: «(...) أمام العلماء يوم القيامة برتوة أو رتوتين». أسد الغابة في معرفة الصحابة",
        guide65: "بعد وفاة النبي صلى الله عليه وسلم، شارك رضي الله عنه في الفتح الإسلامي للشام، وتوفي في الأردن في طاعون عمواس سنة ١٨ للهجرة وكان عمره رضي الله عنه ثماني وثلاثين سنة ومنهم من قال ثلاث وثلاثين أو أربع وثلاثين",
        guide71: "صحابي، من سادات قريش قبل الإسلام. كان تاجراً واسع الثراء، كان من الذين عارضوا الرسول صلى الله عليه وسلم قبل إسلامه.",
        guide72: "لقبه: أبو حنظلة",
        guide73: "تاريخ دخوله الإسلام: ٨ من هجرة الرسول صلى الله عليه وسلم",
        guide74: "قال رضي الله عنه: إنك لكريم فداك أبي وأمي، والله لقد حاربتك فنعم المحارب كنت، ثم سالمتك فنعم المسالم أنت، جزاك الله خيراً. رواه ابن هشام",
        guide75: "توفي بالمدينة المنورة سنة 31 هـ، وله نحو من تسعين سنة، وصلى عليه عثمان بن عفان،",
        guide81: " أحد العشرة المبشرين بالجنة، ومن السابقين إلى الإسلام، يُلقب بـ حواري رسول الله؛ لأن النبي قال عنه: «إِنَّ لِكُلِّ نَبِيٍّ حَوَارِيًا، وَحَوَارِيَّ (...)»، أوَّل من سلَّ سيفه في سبيل الله. صحيح البخاري، وسير اعلام النبلاء",
        guide82: "ابن عمة النبي صلى الله عليه وسلم محمد بن عبد الله وابن أخ زوجته خديجة بنت خويلد",
        guide83: "زوج أسماء بنت أبي بكر المُلقّبة بذات النطاقين",
        guide84: "جعله عمر بن الخطاب في الستة أصحاب الشورى الذين ذكرهم للخلافة بعده، وقال: «هم الذين توفي رسول الله وهو عنهم راض.» اسد الغابة في معرفة الصحابة",
        guide85: "بعد مقتل عثمان بن عفان خرج إلى البصرة مطالبًا بالقصاص من قتلة عثمان فقُتِلَ في موقعة الجمل، فكان قتله في رجبٍ سنة ستٍّ وثلاثين من الهجرة، وله أربع وستُّون سنة. البداية والنهاية، سير أعلام النبلاء",
        guide91: "هو أوّل من رمى بسهمٍ في سبيل الله، وقال له النبي: «ارم فداك أبي وأمي»صحيح البخاري، وهو من أخوال النبي، سير أعلام النبلاء",
        guide92: "كان رضي الله عنه أول من أراق دمًا في سبيل الله، حيث كان المسلمون في مكة إذا صلوا ذهبوا إلى الشعاب، واستخفوا بصلاتهم من قومهم، فبينما هو في نفر من المسلمين في أحد شعاب مكة، إذ ظهر عليهم نفر من قريش، فناكروهم وعابوا عليهم دينهم، فاقتتلوا، فضرب رجلًا بلَحيِ جمل فشجه، فكان أول دم أُهريق في الإسلام، وقيل أن المشجوج هو عبد الله بن خطل، البداية والنهاية لابن كثير.",
        guide93: "شهد رضي الله عنه جميع الغزوات مع النبي، فشهد غزوة بدر وأحد وثَبُتَ فيها حين ولى الناس، وشهد غزوة الخندق وبايع في الحديبية وشهد خيبر وفتح مكة. ابن عبد البر في الاستيعاب في معرفة الأصحاب ",
        guide94: "قال رضي الله عنه وهو يدافع عن رسول الله صلى الله عليه وسلم يوم أحد حين ولّى الناس «رَأَيْتُ عَنْ يَمِينَ رَسُولِ اللَّهِ صلى الله عليه وسلم، وَعَنْ شِمَالِهِ يَوْمَ أُحُدٍ رَجُلَيْنِ عَلَيْهِمَا ثِيَابٌ بِيضٌ، مَا رَأَيْتُهُمَا قَبْلُ وَلا بَعْدُ.» صحيح مسلم",
        guide95: ".كان رضي الله عنه آخر المهاجرين وفاةً، ولمَّا حضرَتْه الوفاةُ دعا بخلَق جبةٍ له من صوف، فقال: «كفّنوني فيها، فإنّي كنت لقيتُ المشركين فيها يوم بَدْر وهي عليّ، وإنما كنت أَخبؤها لذلك.»، فكانت وفاته في عهد معاوية بن أبي سفيان سنة خمس وخمسين. سير أعلام النبلاء، الاستيعاب في معرفة الأصحاب",
        guide101: "صحابي جليل أسلم يوم الفتح وحسن إسلامه. وغزا حنينا والطائف. وكان من أشراف قريش، وعقلائها، ونبلائها وكانت خديجة عمته، وكان الزبير ابن عمه. سير أعلام النبلاء",
        guide102: "بعد غزوة حنين سأل حكيم بن حزام رسول الله من الغنائم فأعطاه، ثم سأله فأعطاه، حتى بلغ ما أخذه مائة بعير، وكان يومئذ حديث عهد بالإسلام، فقال له النبي : ( يا حكيم، إن هذه الأموال حلوة خضرة، فمن أخذها بسخاوة نفس بورك له فيها، ومن أخذها بإشراف نفس لم يبارك له فيها، وكان كالذي يأكل ولا يشبع واليد العليا خير من اليد السفلى ) فلما سمع حكيم بن حزام ذلك من النبي قال : (واللهِ يا رسول الله، والذي بعثك بالحق لا أسأل أحدا بعدك شيئا، ولا آخذ من أحد شيئا بعدك حتى أفارق الدنيا) وبر حكيم بقسمه فلم يسأل أحدا حتى توفي رضي الله عنه. رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ",
        guide103: "ولد رضي الله عنه في جوف الكعبة.أسد الغابة في معرفة الصحابة",
        guide104: "كان رضي الله عنه من سادات قريش، وكان صديق رسول الله صلى الله عليه وسلم قبل البعثة، وكان يوده ويحبه بعد البعثة، ولكنه تأخر إسلامه حتى أسلم عام الفتح. الإصابة في تمييز الصحابة",
        guide105: ".قال البخاري في تاريخه : عاش ستين سنة في الجاهلية، وستين في الإسلام. سنة 56 من هجرة الرسول صلى الله عليه وسلم"
        
    }
})
var App = new Vue({
    el: '#app',
    data: {
        Audio: true
    }
})


//             if (boxone.optionansr1===true || boxone.optionansr2===true || boxone.optionansr3===true || boxone.optionansr4===true || boxone.optionansr5===true || boxone.optionansr6===true || boxone.optionansr7===true || boxone.optionansr8===true || boxone.optionansr9===true || boxone.optionansr10===true){
//                 myApp1.guide1 = true;
//                 myApp1.guide2 = true;
//                 myApp1.guide3 = true;
//                 myApp1.guide4 = true;
//                 myApp1.guide5 = true;
//                 myApp1.guide6 = true;
//                 myApp1.guide7 = true;
//                 myApp1.guide8 = true;
//                 myApp1.guide9 = true;
//                 myApp1.guide10 = true;
//             }


function answer1 (x) {
    if(document.getElementById("answerA1").value===boxone.threeA1 || document.getElementById("answerA1").value==="الفارسي"){
        boxone.point=boxone.point+5;
        boxone.inputansr1= false;
        myApp1.guide2 = true;
        
    } else {
        boxone.inputansr1= false;
        myApp1.guide2 = true;
    }
    if (x===1){
        boxone.optionansr1=true;
        boxone.inputansr1=false;
    }
}




function answer2 (x) {
    if(document.getElementById("answerA2").value===boxone.threeA2 || document.getElementById("answerA2").value==="بن ياسر"){
        boxone.point=boxone.point+5;
        boxone.inputansr2= false;
        myApp1.guide3 = true;
        myApp1.goldQ=true;
    } else {
        boxone.inputansr2= false;
        myApp1.guide3 = true;
        myApp1.goldQ=true;
    }
    if (x===1){
        boxone.optionansr2=true;
        boxone.inputansr2=false;
        myApp1.goldQ=false;
    }
}

function answer3 (x) {
    if(document.getElementById("answerA3").value===boxone.threeA3){
        boxone.point=boxone.point+5;
        boxone.inputansr3= false;
        myApp1.guide4 = true;
        myApp1.goldQ=true;
    } else {
        boxone.inputansr3= false;
        myApp1.guide4 = true;
        myApp1.goldQ=true;
    }
    if (x===1){
        boxone.optionansr3=true;
        boxone.inputansr3=false;
        myApp1.goldQ=false;
    }
}

function answer4 (x) {
    if(document.getElementById("answerA4").value===boxone.threeA4 || document.getElementById("answerA4").value==="أبي ذر الغفاري" || document.getElementById("answerA4").value==="أبي ذر" || document.getElementById("answerA4").value==="ابي ذر الغفاري" || document.getElementById("answerA4").value==="ابي ذر" || document.getElementById("answerA4").value==="ابو ذر الغفاري" || document.getElementById("answerA4").value==="أبو ذر" || document.getElementById("answerA4").value==="أبو ذر الغفاري" || document.getElementById("answerA4").value==="ابو ذر"){
        boxone.point=boxone.point+5;
        boxone.inputansr4= false;
        myApp1.guide5 = true;
        myApp1.goldQ=true;
    } else {
        boxone.inputansr4= false;
        myApp1.guide5 = true;
        myApp1.goldQ=true;
    }
    if (x===1){
        boxone.optionansr4=true;
        boxone.inputansr4=false;
        myApp1.goldQ=false;
    }
}

function answer5 (x) {
    if(document.getElementById("answerA5").value===boxone.threeA5){
        boxone.point=boxone.point+5;
        boxone.inputansr5= false;
        myApp1.guide6 = true;
        myApp1.goldQ=true;
    } else {
        boxone.inputansr5= false;
        myApp1.guide6 = true;
        myApp1.goldQ=true;
    }
    if (x===1){
        boxone.optionansr5=true;
        boxone.inputansr5=false;
        myApp1.goldQ=false;
    }
}

function answer6 (x) {
    if(document.getElementById("answerA6").value===boxone.threeA6 || document.getElementById("answerA6").value==="معاذ"){
        boxone.point=boxone.point+5;
        boxone.inputansr6= false;
        myApp1.guide7 = true;
        myApp1.goldQ=true;
    } else {
        boxone.inputansr6= false;
        myApp1.guide7 = true;
        myApp1.goldQ=true;
    }
    if (x===1){
        boxone.optionansr6=true;
        boxone.inputansr6=false;
        myApp1.goldQ=false;
    }
}

function answer7 (x) {
    if(document.getElementById("answerA7").value===boxone.threeA7 || document.getElementById("answerA7").value==="أبو سفيان" || document.getElementById("answerA7").value==="ابو سفيان" || document.getElementById("answerA7").value==="صخر بن حرب" || document.getElementById("answerA7").value==="صخر بن حرب أبو سفيان"){
        boxone.point=boxone.point+5;
        boxone.inputansr7= false;
        myApp1.guide8 = true;
        myApp1.goldQ=true;
    } else {
        boxone.inputansr7= false;
        myApp1.guide8 = true;
        myApp1.goldQ=true;
    }
    if (x===1){
        boxone.optionansr7=true;
        boxone.inputansr7=false;
        myApp1.goldQ=false;
    }
}

function answer8 (x) {
    if(document.getElementById("answerA8").value===boxone.threeA8 || document.getElementById("answerA8").value==="الزبير" || document.getElementById("answerA8").value==="زبير بن عوام" || document.getElementById("answerA8").value==="زبير بن العوام" || document.getElementById("answerA8").value==="الزبير بن عوام"){
        boxone.point=boxone.point+5;
        boxone.inputansr8= false;
        myApp1.guide9 = true;
        myApp1.goldQ=true;
    } else {
        boxone.inputansr8= false;
        myApp1.guide9 = true;
        myApp1.goldQ=true;
    }
    if (x===1){
        boxone.optionansr8=true;
        boxone.inputansr8=false;
        myApp1.goldQ=false;
    }
}

function answer9 (x) {
    if(document.getElementById("answerA9").value===boxone.threeA9 || document.getElementById("answerA9").value==="سعد بن ابي وقاص" || document.getElementById("answerA9").value==="بن أبي وقاص" || document.getElementById("answerA9").value==="بن ابي وقاص"){
        boxone.point=boxone.point+5;
        boxone.inputansr9= false;
        myApp1.guide10 = true;
        myApp1.goldQ=true;
    } else {
        boxone.inputansr9= false;
        myApp1.guide10 = true;
        myApp1.goldQ=true;
    }
    if (x===1){
        boxone.optionansr9=true;
        boxone.inputansr9=false;
        myApp1.goldQ=false;
    }
}

function answer10 (x) {
    if(document.getElementById("answerA10").value===boxone.threeA10){
        boxone.point=boxone.point+5;
        boxone.inputansr10= false;
        boxone.optionansr10= false;
        boxone.points= true;
        boxone.lasttext= true;
        //      myApp1.guide11 = true:
        boxone.percentOfAnswer = percent + "%";
        document.getElementsByClassName("positive").style.width = percent;
        myApp1.goldQ=true;
    } else {
        boxone.optionansr10= false;
        boxone.inputansr10= false;
        //      myApp1.guide110 = true;
        boxone.points= true;
        boxone.lasttext= true;
        document.getElementsByClassName("positive").style.width = boxone.percentOfAnswer+ "%";
    }
}

function answer10x () {
    boxone.optionansr10=true;
    boxone.inputansr10=false;
    myApp1.guide110=true;
    //        titlereturn ();
}

function play () {
    App.Audio=false;
    myApp1.card1= true;
    myApp.title= true;
    animate.animation= false;
}

// Q1
function guideone11 (){
    myApp1.textproject=false;
    myApp1.guideone1=true;
}
function guideone12 (){
    myApp1.guideone1=false;
    myApp1.guidetwo1=true;
}
function guideone13 (){
    myApp1.guidetwo1=false;
    myApp1.guidethree1=true;
}
function guideone14 (){
    myApp1.guidethree1=false;
    myApp1.guidefour1=true;
}
function guideone15 (){
    myApp1.guidefour1=false;
    myApp1.answersguide1=true;
    myApp1.guidefive1=true;
}
function ansrguide1 () {
    myApp1.answersguide1= false;
    myApp1.guidefive1= false;
    myApp1.card1= false;
    myApp1.img2= false;
    //    boxone.optionansr1= true;
    boxone.inputansr1= true;
    boxone.optionA1=true;
    boxone.boxone= true;
    boxone.one1= true;
    boxone.two1= true;
    boxone.three1= true;
    boxone.four1= true;
    boxone.five1= true;
}
function fouoneA () {
    if (boxone.optionA1==true) {
        boxone.point=boxone.point+1;
    }
    myApp1.guide2 = true;
    boxone.optionA1= false;
    boxone.one1= false;
    boxone.two1= false;
    boxone.four1= false;
    boxone.five1= false;
    boxone.threeA1= "الإجابة صحيحة";
}

function fouroneA (x) {
    boxone.optionA1= false;
    if (x==1){
        boxone.one1= true;
        boxone.two1= false;
        boxone.three1= false;
        boxone.four1= false;
        boxone.five1= false;
        boxone.oneA1= "الإجابة خاطئة";
    }
    if (x==2){
        boxone.one1= false;
        boxone.two1= true;
        boxone.three1= false;
        boxone.four1= false;
        boxone.five1= false;
        boxone.twoA1= "الإجابة خاطئة";
    }
    if (x==4){
        boxone.one1= false;
        boxone.two1= false;
        boxone.three1= false;
        boxone.four1= true;
        boxone.five1= false;
        boxone.fourA1="الإجابة خاطئة";
    }
    if (x==5){
        boxone.one1= false;
        boxone.two1= false;
        boxone.three1= false;
        boxone.four1= false;
        boxone.five1= true;
        boxone.fiveA1= "الإجابة خاطئة";
    }
    myApp1.guide2 = true;
}

// Q2
function guideone20 (){
    myApp1.goldQ=false;
    boxone.optionansr1= false;
    boxone.three1= false;
    myApp1.guide2= false;
    myApp1.card1= true;
    myApp1.img2= true;
    myApp1.guideone2=true;
}
function guideone21 (){
    myApp1.guideone2=false;
    myApp1.guidetwo2=true;
}
function guideone22 (){
    myApp1.guidetwo2=false;
    myApp1.guidethree2=true;
}
function guideone23 (){
    myApp1.guidethree2=false;
    myApp1.guidefour2=true;
}
function guideone24 (){
    myApp1.guidefour2=false;
    myApp1.answersguide2=true;
    myApp1.guidefive2=true;
}
function ansrguide2 () {
    myApp1.answersguide2= false;
    myApp1.guidefive2= false;
    myApp1.card1= false;
    myApp1.img2= false;
    //        boxone.optionansr2= true;
    boxone.inputansr2= true;
    boxone.optionA2=true;
    boxone.boxone= true;
    boxone.one2= true;
    boxone.two2= true;
    boxone.three2= true;
    boxone.four2= true;
    boxone.five2= true;
}
function fouoneA2 () {
    if (boxone.optionA2==true) {
        boxone.point=boxone.point+1;
    }
    myApp1.guide3 = true;
    boxone.optionA2= false;
    boxone.one2= false;
    boxone.two2= false;
    boxone.four2= false;
    boxone.five2= false;
    boxone.threeA2= "الإجابة صحيحة";
    myApp1.goldQ=true;
}

function fouroneA2 (x) {
    boxone.optionA2= false;
    if (x==1){
        boxone.one2= true;
        boxone.two2= false;
        boxone.three2= false;
        boxone.four2= false;
        boxone.five2= false;
        boxone.oneA2= "الإجابة خاطئة";
    }
    if (x==2){
        boxone.one2= false;
        boxone.two2= true;
        boxone.three2= false;
        boxone.four2= false;
        boxone.five2= false;
        boxone.twoA2= "الإجابة خاطئة";
    }
    if (x==4){
        boxone.one2= false;
        boxone.two2= false;
        boxone.three2= false;
        boxone.four2= true;
        boxone.five2= false;
        boxone.fourA2="الإجابة خاطئة";
    }
    if (x==5){
        boxone.one2= false;
        boxone.two2= false;
        boxone.three2= false;
        boxone.four2= false;
        boxone.five2= true;
        boxone.fiveA2= "الإجابة خاطئة";
    }
    myApp1.guide3 = true;
    myApp1.goldQ=true;
}


// Q3
function guideone30 (){
    myApp1.goldQ=false;
    boxone.optionansr2= false;
    boxone.three2= false;
    myApp1.guide3= false;
    myApp1.card1= true;
    myApp1.img2= true;
    myApp1.guideone3=true;
}
function guideone31 (){
    myApp1.guideone3=false;
    myApp1.guidetwo3=true;
}
function guideone32 (){
    myApp1.guidetwo3=false;
    myApp1.guidethree3=true;
}
function guideone33 (){
    myApp1.guidethree3=false;
    myApp1.guidefour3=true;
}
function guideone34 (){
    myApp1.guidefour3=false;
    myApp1.answersguide3=true;
    myApp1.guidefive3=true;
}
function ansrguide3 () {
    myApp1.answersguide3= false;
    myApp1.guidefive3= false;
    myApp1.card1= false;
    myApp1.img2= false;
    //        boxone.optionansr3= true;
    boxone.inputansr3= true;
    boxone.optionA3=true;
    boxone.boxone= true;
    boxone.one3= true;
    boxone.two3= true;
    boxone.three3= true;
    boxone.four3= true;
    boxone.five3= true;
}
function fouoneA3 () {
    if (boxone.optionA3==true) {
        boxone.point=boxone.point+1;
    }
    myApp1.guide4= true;
    boxone.optionA3= false;
    boxone.one3= false;
    boxone.two3= false;
    boxone.four3= false;
    boxone.five3= false;
    boxone.threeA3= "الإجابة صحيحة";
    myApp1.goldQ=true;
}

function fouroneA3 (x) {
    boxone.optionA3= false;
    if (x==1){
        boxone.one3= true;
        boxone.two3= false;
        boxone.three3= false;
        boxone.four3= false;
        boxone.five3= false;
        boxone.oneA3= "الإجابة خاطئة";
    }
    if (x==2){
        boxone.one3= false;
        boxone.two3= true;
        boxone.three3= false;
        boxone.four3= false;
        boxone.five3= false;
        boxone.twoA3= "الإجابة خاطئة";
    }
    if (x==4){
        boxone.one3= false;
        boxone.two3= false;
        boxone.three3= false;
        boxone.four3= true;
        boxone.five3= false;
        boxone.fourA3="الإجابة خاطئة";
    }
    if (x==5){
        boxone.one3= false;
        boxone.two3= false;
        boxone.three3= false;
        boxone.four3= false;
        boxone.five3= true;
        boxone.fiveA3= "الإجابة خاطئة";
    }
    myApp1.guide4 = true;
    myApp1.goldQ=true;
}


// Q4
function guideone40 (){
    myApp1.goldQ=false;
    boxone.optionansr3= false;
    boxone.three3= false;
    myApp1.guide4= false;
    myApp1.card1= true;
    myApp1.img2= true;
    myApp1.guideone4=true;
}
function guideone41 (){
    myApp1.guideone4=false;
    myApp1.guidetwo4=true;
}
function guideone42 (){
    myApp1.guidetwo4=false;
    myApp1.guidethree4=true;
}
function guideone43 (){
    myApp1.guidethree4=false;
    myApp1.guidefour4=true;
}
function guideone44 (){
    myApp1.guidefour4=false;
    myApp1.answersguide4=true;
    myApp1.guidefive4=true;
}
function ansrguide4 () {
    myApp1.answersguide4= false;
    myApp1.guidefive4= false;
    myApp1.card1= false;
    myApp1.img2= false;
    //        boxone.optionansr4= true;
    boxone.inputansr4= true;
    boxone.optionA4=true;
    boxone.boxone= true;
    boxone.one4= true;
    boxone.two4= true;
    boxone.three4= true;
    boxone.four4= true;
    boxone.five4= true;
}
function fouoneA4 () {
    if (boxone.optionA4==true) {
        boxone.point=boxone.point+1;
    }
    
    myApp1.guide5 = true;
    boxone.optionA4= false;
    boxone.one4= false;
    boxone.two4= false;
    boxone.four4= false;
    boxone.five4= false;
    boxone.threeA4= "الإجابة صحيحة";
    myApp1.goldQ=true;
}

function fouroneA4 (x) {
    boxone.optionA4= false;
    if (x==1){
        boxone.one4= true;
        boxone.two4= false;
        boxone.three4= false;
        boxone.four4= false;
        boxone.five4= false;
        boxone.oneA4= "الإجابة خاطئة";
    }
    if (x==2){
        boxone.one4= false;
        boxone.two4= true;
        boxone.three4= false;
        boxone.four4= false;
        boxone.five4= false;
        boxone.twoA4= "الإجابة خاطئة";
    }
    if (x==4){
        boxone.one4= false;
        boxone.two4= false;
        boxone.three4= false;
        boxone.four4= true;
        boxone.five4= false;
        boxone.fourA4="الإجابة خاطئة";
    }
    if (x==5){
        boxone.one4= false;
        boxone.two4= false;
        boxone.three4= false;
        boxone.four4= false;
        boxone.five4= true;
        boxone.fiveA4= "الإجابة خاطئة";
    }
    myApp1.guide5 = true;
    myApp1.goldQ=true;
}


// Q5
function guideone50 (){
    myApp1.goldQ=false;
    boxone.optionansr4= false;
    boxone.three4= false;
    myApp1.guide5= false;
    myApp1.card1= true;
    myApp1.img2= true;
    myApp1.guideone5=true;
}
function guideone51 (){
    myApp1.guideone5=false;
    myApp1.guidetwo5=true;
}
function guideone52 (){
    myApp1.guidetwo5=false;
    myApp1.guidethree5=true;
}
function guideone53 (){
    myApp1.guidethree5=false;
    myApp1.guidefour5=true;
}
function guideone54 (){
    myApp1.guidefour5=false;
    myApp1.answersguide5=true;
    myApp1.guidefive5=true;
}
function ansrguide5 () {
    myApp1.answersguide5= false;
    myApp1.guidefive5= false;
    myApp1.card1= false;
    myApp1.img2= false;
    //        boxone.optionansr5= true;
    boxone.inputansr5= true;
    boxone.optionA5=true;
    boxone.boxone= true;
    boxone.one5= true;
    boxone.two5= true;
    boxone.three5= true;
    boxone.four5= true;
    boxone.five5= true;
}
function fouoneA5 () {
    if (boxone.optionA5==true) {
        boxone.point=boxone.point+1;
    }
    myApp1.guide6 = true;
    boxone.optionA5= false;
    boxone.one5= false;
    boxone.two5= false;
    boxone.four5= false;
    boxone.five5= false;
    boxone.threeA5= "الإجابة صحيحة";
    myApp1.goldQ=true;
}

function fouroneA5 (x) {
    boxone.optionA5= false;
    if (x==1){
        boxone.one5= true;
        boxone.two5= false;
        boxone.three5= false;
        boxone.four5= false;
        boxone.five5= false;
        boxone.oneA5= "الإجابة خاطئة";
    }
    if (x==2){
        boxone.one5= false;
        boxone.two5= true;
        boxone.three5= false;
        boxone.four5= false;
        boxone.five5= false;
        boxone.twoA5= "الإجابة خاطئة";
    }
    if (x==4){
        boxone.one5= false;
        boxone.two5= false;
        boxone.three5= false;
        boxone.four5= true;
        boxone.five5= false;
        boxone.fourA5="الإجابة خاطئة";
    }
    if (x==5){
        boxone.one5= false;
        boxone.two5= false;
        boxone.three5= false;
        boxone.four5= false;
        boxone.five5= true;
        boxone.fiveA5= "الإجابة خاطئة";
    }
    myApp1.guide6 = true;
    myApp1.goldQ=true;
}


// Q6
function guideone60 (){
    myApp1.goldQ=false;
    boxone.optionansr5= false;
    boxone.three5= false;
    myApp1.guide6= false;
    myApp1.card1= true;
    myApp1.img2= true;
    myApp1.guideone6=true;
}
function guideone61 (){
    myApp1.guideone6=false;
    myApp1.guidetwo6=true;
}
function guideone62 (){
    myApp1.guidetwo6=false;
    myApp1.guidethree6=true;
}
function guideone63 (){
    myApp1.guidethree6=false;
    myApp1.guidefour6=true;
}
function guideone64 (){
    myApp1.guidefour6=false;
    myApp1.answersguide6=true;
    myApp1.guidefive6=true;
}
function ansrguide6 () {
    myApp1.answersguide6= false;
    myApp1.guidefive6= false;
    myApp1.card1= false;
    myApp1.img2= false;
    //        boxone.optionansr6= true;
    boxone.inputansr6= true;
    boxone.optionA6=true;
    boxone.boxone= true;
    boxone.one6= true;
    boxone.two6= true;
    boxone.three6= true;
    boxone.four6= true;
    boxone.five6= true;
}
function fouoneA6 () {
    if (boxone.optionA6==true) {
        boxone.point=boxone.point+1;
    }
    myApp1.guide7 = true;
    boxone.optionA6= false;
    boxone.one6= false;
    boxone.two6= false;
    boxone.four6= false;
    boxone.five6= false;
    boxone.threeA6= "الإجابة صحيحة";
    myApp1.goldQ=true;
}

function fouroneA6 (x) {
    boxone.optionA6= false;
    if (x==1){
        boxone.one6= true;
        boxone.two6= false;
        boxone.three6= false;
        boxone.four6= false;
        boxone.five6= false;
        boxone.oneA6= "الإجابة خاطئة";
    }
    if (x==2){
        boxone.one6= false;
        boxone.two6= true;
        boxone.three6= false;
        boxone.four6= false;
        boxone.five6= false;
        boxone.twoA6= "الإجابة خاطئة";
    }
    if (x==4){
        boxone.one6= false;
        boxone.two6= false;
        boxone.three6= false;
        boxone.four6= true;
        boxone.five6= false;
        boxone.fourA6="الإجابة خاطئة";
    }
    if (x==5){
        boxone.one6= false;
        boxone.two6= false;
        boxone.three6= false;
        boxone.four6= false;
        boxone.five6= true;
        boxone.fiveA6= "الإجابة خاطئة";
    }
    myApp1.guide7 = true;
    myApp1.goldQ=true;
}

// Q7
function guideone70 (){
    myApp1.goldQ=false;
    boxone.optionansr6= false;
    boxone.three6= false;
    myApp1.guide7= false;
    myApp1.card1= true;
    myApp1.img2= true;
    myApp1.guideone7=true;
}
function guideone71 (){
    myApp1.guideone7=false;
    myApp1.guidetwo7=true;
}
function guideone72 (){
    myApp1.guidetwo7=false;
    myApp1.guidethree7=true;
}
function guideone73 (){
    myApp1.guidethree7=false;
    myApp1.guidefour7=true;
}
function guideone74 (){
    myApp1.guidefour7=false;
    myApp1.answersguide7=true;
    myApp1.guidefive7=true;
}
function ansrguide7 () {
    myApp1.answersguide7= false;
    myApp1.guidefive7= false;
    myApp1.card1= false;
    myApp1.img2= false;
    //        boxone.optionansr7= true;
    boxone.inputansr7= true;
    boxone.optionA7=true;
    boxone.boxone= true;
    boxone.one7= true;
    boxone.two7= true;
    boxone.three7= true;
    boxone.four7= true;
    boxone.five7= true;
}
function fouoneA7 () {
    if (boxone.optionA7==true) {
        boxone.point=boxone.point+1;
    }
    myApp1.guide8 = true;
    boxone.optionA7= false;
    boxone.one7= false;
    boxone.two7= false;
    boxone.four7= false;
    boxone.five7= false;
    boxone.threeA7= "الإجابة صحيحة";
    myApp1.goldQ=true;
}

function fouroneA7 (x) {
    boxone.optionA7= false;
    if (x==1){
        boxone.one7= true;
        boxone.two7= false;
        boxone.three7= false;
        boxone.four7= false;
        boxone.five7= false;
        boxone.oneA7= "الإجابة خاطئة";
    }
    if (x==2){
        boxone.one7= false;
        boxone.two7= true;
        boxone.three7= false;
        boxone.four7= false;
        boxone.five7= false;
        boxone.twoA7= "الإجابة خاطئة";
    }
    if (x==4){
        boxone.one7= false;
        boxone.two7= false;
        boxone.three7= false;
        boxone.four7= true;
        boxone.five7= false;
        boxone.fourA7="الإجابة خاطئة";
    }
    if (x==5){
        boxone.one7= false;
        boxone.two7= false;
        boxone.three7= false;
        boxone.four7= false;
        boxone.five7= true;
        boxone.fiveA7= "الإجابة خاطئة";
    }
    myApp1.guide8 = true;
    myApp1.goldQ=true;
}


// Q8
function guideone80 (){
    myApp1.goldQ=false;
    boxone.optionansr7= false;
    boxone.three7= false;
    myApp1.guide8= false;
    myApp1.card1= true;
    myApp1.img2= true;
    myApp1.guideone8=true;
}
function guideone81 (){
    myApp1.guideone8=false;
    myApp1.guidetwo8=true;
}
function guideone82 (){
    myApp1.guidetwo8=false;
    myApp1.guidethree8=true;
}
function guideone83 (){
    myApp1.guidethree8=false;
    myApp1.guidefour8=true;
}
function guideone84 (){
    myApp1.guidefour8=false;
    myApp1.answersguide8=true;
    myApp1.guidefive8=true;
}
function ansrguide8 () {
    myApp1.answersguide8= false;
    myApp1.guidefive8= false;
    myApp1.card1= false;
    myApp1.img2= false;
    //        boxone.optionansr8= true;
    boxone.inputansr8= true;
    boxone.optionA8=true;
    boxone.boxone= true;
    boxone.one8= true;
    boxone.two8= true;
    boxone.three8= true;
    boxone.four8= true;
    boxone.five8= true;
}
function fouoneA8 () {
    if (boxone.optionA8==true) {
        boxone.point=boxone.point+1;
    }
    myApp1.guide9 = true;
    boxone.optionA8= false;
    boxone.one8= false;
    boxone.two8= false;
    boxone.four8= false;
    boxone.five8= false;
    boxone.threeA8= "الإجابة صحيحة";
    myApp1.goldQ=true;
}

function fouroneA8 (x) {
    boxone.optionA8= false;
    if (x==1){
        boxone.one8= true;
        boxone.two8= false;
        boxone.three8= false;
        boxone.four8= false;
        boxone.five8= false;
        boxone.oneA8= "الإجابة خاطئة";
    }
    if (x==2){
        boxone.one8= false;
        boxone.two8= true;
        boxone.three8= false;
        boxone.four8= false;
        boxone.five8= false;
        boxone.twoA8= "الإجابة خاطئة";
    }
    if (x==4){
        boxone.one8= false;
        boxone.two8= false;
        boxone.three8= false;
        boxone.four8= true;
        boxone.five8= false;
        boxone.fourA8="الإجابة خاطئة";
    }
    if (x==5){
        boxone.one8= false;
        boxone.two8= false;
        boxone.three8= false;
        boxone.four8= false;
        boxone.five8= true;
        boxone.fiveA8= "الإجابة خاطئة";
    }
    myApp1.guide9 = true;
    myApp1.goldQ=true;
}


// Q9
function guideone90 (){
    myApp1.goldQ=false;
    boxone.optionansr8= false;
    boxone.three8= false;
    myApp1.guide9= false;
    myApp1.card1= true;
    myApp1.img2= true;
    myApp1.guideone9=true;
}
function guideone91 (){
    myApp1.guideone9=false;
    myApp1.guidetwo9=true;
}
function guideone92 (){
    myApp1.guidetwo9=false;
    myApp1.guidethree9=true;
}
function guideone93 (){
    myApp1.guidethree9=false;
    myApp1.guidefour9=true;
}
function guideone94 (){
    myApp1.guidefour9=false;
    myApp1.answersguide9=true;
    myApp1.guidefive9=true;
}
function ansrguide9 () {
    myApp1.answersguide9= false;
    myApp1.guidefive9= false;
    myApp1.card1= false;
    myApp1.img2= false;
    //        boxone.optionansr9= true;
    boxone.inputansr9= true;
    boxone.optionA9=true;
    boxone.boxone= true;
    boxone.one9= true;
    boxone.two9= true;
    boxone.three9= true;
    boxone.four9= true;
    boxone.five9= true;
}
function fouoneA9 () {
    if (boxone.optionA9==true) {
        boxone.point=boxone.point+1;
    }
    myApp1.guide10 = true;
    boxone.optionA9= false;
    boxone.one9= false;
    boxone.two9= false;
    boxone.four9= false;
    boxone.five9= false;
    boxone.threeA9= "الإجابة صحيحة";
    myApp1.goldQ=true;
}

function fouroneA9 (x) {
    boxone.optionA9= false;
    if (x==1){
        boxone.one9= true;
        boxone.two9= false;
        boxone.three9= false;
        boxone.four9= false;
        boxone.five9= false;
        boxone.oneA9= "الإجابة خاطئة";
    }
    if (x==2){
        boxone.one9= false;
        boxone.two9= true;
        boxone.three9= false;
        boxone.four9= false;
        boxone.five9= false;
        boxone.twoA9= "الإجابة خاطئة";
    }
    if (x==4){
        boxone.one9= false;
        boxone.two9= false;
        boxone.three9= false;
        boxone.four9= true;
        boxone.five9= false;
        boxone.fourA9="الإجابة خاطئة";
    }
    if (x==5){
        boxone.one9= false;
        boxone.two9= false;
        boxone.three9= false;
        boxone.four9= false;
        boxone.five9= true;
        boxone.fiveA9= "الإجابة خاطئة";
    }
    myApp1.guide10 = true;
    myApp1.goldQ=true;
}


// Q10
function guideone100 (){
    myApp1.goldQ=false;
    boxone.optionansr9= false;
    boxone.three9= false;
    myApp1.guide10= false;
    myApp1.card1= true;
    myApp1.img2= true;
    myApp1.guideone10=true;
}
function guideone101 (){
    myApp1.guideone10=false;
    myApp1.guidetwo10=true;
}
function guideone102 (){
    myApp1.guidetwo10=false;
    myApp1.guidethree10=true;
}
function guideone103 (){
    myApp1.guidethree10=false;
    myApp1.guidefour10=true;
}
function guideone104 (){
    myApp1.guidefour10=false;
    myApp1.answersguide10=true;
    myApp1.guidefive10=true;
}
function ansrguide10 () {
    myApp1.answersguide10= false;
    myApp1.guidefive10= false;
    myApp1.card1= false;
    myApp1.img2= false;
    //      boxone.optionansr10= true;
    boxone.inputansr10= true;
    boxone.optionA10=true;
    boxone.boxone= true;
    boxone.one10= true;
    boxone.two10= true;
    boxone.three10= true;
    boxone.four10= true;
    boxone.five10= true;
}
function fouoneA10 () {
    if (boxone.optionA10==true) {
        boxone.point=boxone.point+1;
    }
    boxone.optionA10= false;
    boxone.one10= false;
    boxone.two10= false;
    boxone.four10= false;
    boxone.five10= false;
    boxone.threeA10= "الإجابة صحيحة";
    myApp1.guide110= true;
    document.getElementsByClassName("positive").style.width = boxone.percentOfAnswer+ "%";
}

function fouroneA10 (x) {
    boxone.optionA10= false;
    if (x==1){
        boxone.one10= true;
        boxone.two10= false;
        boxone.three10= false;
        boxone.four10= false;
        boxone.five10= false;
        boxone.oneA10= "الإجابة خاطئة";
    }
    if (x==2){
        boxone.one10= false;
        boxone.two10= true;
        boxone.three10= false;
        boxone.four10= false;
        boxone.five10= false;
        boxone.twoA10= "الإجابة خاطئة";
    }
    if (x==4){
        boxone.one10= false;
        boxone.two10= false;
        boxone.three10= false;
        boxone.four10= true;
        boxone.five10= false;
        boxone.fourA10="الإجابة خاطئة";
    }
    if (x==5){
        boxone.one10= false;
        boxone.two10= false;
        boxone.three10= false;
        boxone.four10= false;
        boxone.five10= true;
        boxone.fiveA10= "الإجابة خاطئة";
    }
    myApp1.guide110 = true;
    document.getElementsByClassName("positive").style.width = boxone.percentOfAnswer+ "%";
}

function guideone110() {
    myApp1.guide110= false;
    boxone.points= true;
    boxone.lasttext= true;
    titlereturn ();
}



//  var myApp2 = new Vue({
//     el: '#apptwo',
//     data: {
//     card2: false,
//     text: true,
//     textproject: false
// }
// })

// var myApp3 = new Vue({
//     el: '#appthree',
//     data: {
//     card3: false,
//     text:true,
//     textproject: false
// }
// })

// var myApp4 = new Vue({
//     el: '#appfour',
//     data: {
//     card4: false,
//     text:true,
//     textproject: false
// }
// })



function apptitlereturn () {
    myApp.apptitle=true;
    myApp.apptitlereturn=false;
}

function titlereturn (){
    myApp1.goldQ=false;
    myApp.title=true;
    //   myApp.apptitlereturn=false;
    //   myApp1.card1= true;
    myApp1.img1=false;
    myApp1.img2=false;
    boxone.optionansr1=false;
    boxone.optionansr2=false;
    boxone.optionansr3=false;
    boxone.optionansr4=false;
    boxone.optionansr5=false;
    boxone.optionansr6=false;
    boxone.optionansr7=false;
    boxone.optionansr8=false;
    boxone.optionansr9=false;
    boxone.optionansr10=false;
    boxone.optionA1= false;
    boxone.three1= false;
    boxone.one1= false;
    boxone.two1= false;
    boxone.four1= false;
    boxone.five1= false;
    boxone.optionA2= false;
    boxone.three2= false;
    boxone.one2= false;
    boxone.two2= false;
    boxone.four2= false;
    boxone.five2= false;
    boxone.optionA3= false;
    boxone.three3= false;
    boxone.one3= false;
    boxone.two3= false;
    boxone.four3= false;
    boxone.five3= false;
    boxone.optionA4= false
    boxone.three4= false;
    boxone.one4= false;
    boxone.two4= false;
    boxone.four4= false;
    boxone.five4= false;
    boxone.optionA5= false;
    boxone.three5= false;
    boxone.one5= false;
    boxone.two5= false;
    boxone.four5= false;
    boxone.five5= false;
    boxone.optionA6= false;
    boxone.three6= false;
    boxone.one6= false;
    boxone.two6= false;
    boxone.four6= false;
    boxone.five6= false;
    boxone.optionA7= false;
    boxone.three7= false;
    boxone.one7= false;
    boxone.two7= false;
    boxone.four7= false;
    boxone.five7= false;
    boxone.optionA8= false;
    boxone.three8= false;
    boxone.one8= false;
    boxone.two8= false;
    boxone.four8= false;
    boxone.five8= false;
    boxone.optionA9= false;
    boxone.three9= false;
    boxone.one9= false;
    boxone.two9= false;
    boxone.four9= false;
    boxone.five9= false;
    boxone.optionA10= false;
    boxone.three10= false;
    boxone.one10= false;
    boxone.two10= false;
    boxone.four10= false;
    boxone.five10= false;
    myApp1.guideone1=false;
    myApp1.guidetwo1=false;
    myApp1.guidethree1=false;
    myApp1.guidefour1=false;
    myApp1.guidefive1=false;
    myApp1.answersguide1=false;
    myApp1.guideone2=false;
    myApp1.guidetwo2=false;
    myApp1.guidethree2=false;
    myApp1.guidefour2=false;
    myApp1.guidefive2=false;
    myApp1.answersguide2=false;
    myApp1.guideone3=false;
    myApp1.guidetwo3=false;
    myApp1.guidethree3=false;
    myApp1.guidefour3=false;
    myApp1.guidefive3=false;
    myApp1.answersguide3=false;
    myApp1.guideone4=false;
    myApp1.guidetwo4=false;
    myApp1.guidethree4=false;
    myApp1.guidefour4=false;
    myApp1.guidefive4=false;
    myApp1.answersguide4=false;
    myApp1.guideone5=false;
    myApp1.guidetwo5=false;
    myApp1.guidethree5=false;
    myApp1.guidefour5=false;
    myApp1.guidefive5=false;
    myApp1.answersguide5=false;
    myApp1.guideone6=false;
    myApp1.guidetwo6=false;
    myApp1.guidethree6=false;
    myApp1.guidefour6=false;
    myApp1.guidefive6=false;
    myApp1.answersguide6=false;
    myApp1.guideone7=false;
    myApp1.guidetwo7=false;
    myApp1.guidethree7=false;
    myApp1.guidefour7=false;
    myApp1.guidefive7=false;
    myApp1.answersguide7=false;
    myApp1.guideone8=false;
    myApp1.guidetwo8=false;
    myApp1.guidethree8=false;
    myApp1.guidefour8=false;
    myApp1.guidefive8=false;
    myApp1.answersguide8=false;
    myApp1.guideone9=false;
    myApp1.guidetwo9=false;
    myApp1.guidethree9=false;
    myApp1.guidefour9=false;
    myApp1.guidefive9=false;
    myApp1.answersguide9=false;
    myApp1.guideone10=false;
    myApp1.guidetwo10=false;
    myApp1.guidethree10=false;
    myApp1.guidefour10=false;
    myApp1.guidefive10=false;
    myApp1.answersguide10=false;
    //    boxone.boxone=false;
    boxone.fiveA1= "صهيب الرومي";
    boxone.fourA1= "أبو أيوب خالد بن زيد بن كليب الأنصاري";
    boxone.threeA1= "سلمان الفارسي";
    boxone.twoA1= "سعد بن معاذ";
    boxone.oneA1= "سَلَمَةُ بْنُ عَمْرِو بْنِ الْأَكْوَعِ";
    boxone.fiveA2= "صهيب الرومي";
    boxone.fourA2= "زيد بن حارثة";
    boxone.threeA2="عمار بن ياسر";
    boxone.twoA2= "أبو ذر جندب بن جنادة الغفاري";
    boxone.oneA2= "الزبير بن العوام";
    boxone.fiveA3= "أبو سفيان صخر بن حرب بن أمية";
    boxone.fourA3= "عمرو بن العاص";
    boxone.threeA3= "خالد بن الوليد";
    boxone.twoA3= "ضرار بن الأزور الأسدي";
    boxone.oneA3= "أبو سفيان بن حرب";
    boxone.fiveA4= "صهيب الرومي";
    boxone.fourA4= "سَلَمَةُ بْنُ عَمْرِو بْنِ الْأَكْوَعِ";
    boxone.threeA4= "أبي ذر جندب بن جنادة الغفاري";
    boxone.twoA4= "زيد بن حارثة";
    boxone.oneA4= "عمرو بن العاص";
    boxone.fiveA5= "سعد بن أبي وقاص";
    boxone.fourA5= "ابي موسى الأشعري";
    boxone.threeA5= "سعد بن معاذ";
    boxone.twoA5= "عبدالرحمن بن صخر الدوسي";
    boxone.oneA5= "معاذ بن جبل";
    boxone.fiveA6= "أبو الدرداء اﻷنصاري";
    boxone.fourA6= "أبو عبيده بن الجراح";
    boxone.threeA6= "معاذ بن جبل";
    boxone.twoA6= "زيد بن ثابت بن الضحّاك الأنصاري";
    boxone.oneA6= "أبو سعيد سعد بن مالك بن سنان الخدري";
    boxone.fiveA7= "عثمان بن أبي العاص";
    boxone.fourA7= "العباس بن عبد المطلب";
    boxone.threeA7= "أبو سفيان صخر بن حرب";
    boxone.twoA7= "حمزة بن عبد المطلب";
    boxone.oneA7= "عبدالله بن عتبة بن ربيعة";
    boxone.fiveA8= "طَلْحَة بن عُبَيْد اللّه";
    boxone.fourA8= "عبد الرّحمن بن عوف";
    boxone.threeA8= "الزبير بن العوام";
    boxone.twoA8= "سَعِيد بن زَيْد";
    boxone.oneA8= "أبو عبيدة عامر بن عبد الله بن الجراح ";
    boxone.fiveA9= "زيد بن حارثة";
    boxone.fourA9= "عبد الله بن رواحة";
    boxone.threeA9= "سعد بن أبي وقاص";
    boxone.twoA9= "حسان بن ثابت";
    boxone.oneA9= "عبدالله بن عتبة بن ربيعة";
    boxone.fiveA10= "جبير بن مطعم";
    boxone.fourA10= "عتاب بن أسيد";
    boxone.threeA10= "حكيم بن حزام";
    boxone.twoA10= "سهيل بن عمرو";
    boxone.oneA10= "صفوان بن أمية";
    texttitlereturn();
}

function texttitlereturn (){
    myApp1.text= true;
    //  myApp2.text= true;
    //  myApp3.text= true;
    //  myApp4.text= true;
    myApp1.textproject= false;
    //  myApp2.textproject= false;
    //  myApp3.textproject= false;
    //  myApp4.textproject= false;
}

function clickone () {
    // myApp2.card2= false;
    // myApp3.card3= false;
    // myApp4.card4= false;
    myApp1.text=false;
    myApp.title=false;
    myApp1.textproject=true;
    myApp1.img1=false;
    myApp1.img2=true;
    myApp1.points= false;
    apptitlereturn();
}
function clicktwo () {
    myApp1.card1= false;
    // myApp3.card3= false;
    // myApp4.card4= false;
    // myApp2.text=false;
    // myApp2.textproject=true;
    apptitlereturn();
}
function clickthree () {
    myApp1.card1= false;
    // myApp2.card2= false;
    // myApp4.card4= false;
    // myApp3.text=false
    // myApp3.textproject=true;
    apptitlereturn();
}
function clickfour () {
    myApp1.card1= false;
    // myApp2.card2= false;
    // myApp3.card3= false;
    // myApp4.text=false;
    // myApp4.textproject=true;
    apptitlereturn();
}    
