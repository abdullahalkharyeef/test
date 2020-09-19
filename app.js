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
    } else {
        boxone.inputansr2= false;
        myApp1.guide3 = true;
    }
    if (x===1){
        boxone.optionansr2=true;
        boxone.inputansr2=false;
    }
}

function answer3 (x) {
    if(document.getElementById("answerA3").value===boxone.threeA3){
        boxone.point=boxone.point+5;
        boxone.inputansr3= false;
        myApp1.guide4 = true;
    } else {
        boxone.inputansr3= false;
        myApp1.guide4 = true;
    }
    if (x===1){
        boxone.optionansr3=true;
        boxone.inputansr3=false;
    }
}

function answer4 (x) {
    if(document.getElementById("answerA4").value===boxone.threeA4 || document.getElementById("answerA4").value==="أبي ذر الغفاري" || document.getElementById("answerA4").value==="أبي ذر" || document.getElementById("answerA4").value==="ابي ذر الغفاري" || document.getElementById("answerA4").value==="ابي ذر" || document.getElementById("answerA4").value==="ابو ذر الغفاري" || document.getElementById("answerA4").value==="أبو ذر" || document.getElementById("answerA4").value==="أبو ذر الغفاري" || document.getElementById("answerA4").value==="ابو ذر"){
        boxone.point=boxone.point+5;
        boxone.inputansr4= false;
        myApp1.guide5 = true;
    } else {
        boxone.inputansr4= false;
        myApp1.guide5 = true;
    }
    if (x===1){
        boxone.optionansr4=true;
        boxone.inputansr4=false;
    }
}

function answer5 (x) {
    if(document.getElementById("answerA5").value===boxone.threeA5){
        boxone.point=boxone.point+5;
        boxone.inputansr5= false;
        myApp1.guide6 = true;
    } else {
        boxone.inputansr5= false;
        myApp1.guide6 = true;
    }
    if (x===1){
        boxone.optionansr5=true;
        boxone.inputansr5=false;
    }
}

function answer6 (x) {
    if(document.getElementById("answerA6").value===boxone.threeA6 || document.getElementById("answerA6").value==="معاذ"){
        boxone.point=boxone.point+5;
        boxone.inputansr6= false;
        myApp1.guide7 = true;
    } else {
        boxone.inputansr6= false;
        myApp1.guide7 = true;
    }
    if (x===1){
        boxone.optionansr6=true;
        boxone.inputansr6=false;
    }
}

function answer7 (x) {
    if(document.getElementById("answerA7").value===boxone.threeA7 || document.getElementById("answerA7").value==="أبو سفيان" || document.getElementById("answerA7").value==="ابو سفيان" || document.getElementById("answerA7").value==="صخر بن حرب" || document.getElementById("answerA7").value==="صخر بن حرب أبو سفيان"){
        boxone.point=boxone.point+5;
        boxone.inputansr7= false;
        myApp1.guide8 = true;
    } else {
        boxone.inputansr7= false;
        myApp1.guide8 = true;
    }
    if (x===1){
        boxone.optionansr7=true;
        boxone.inputansr7=false;
    }
}

function answer8 (x) {
    if(document.getElementById("answerA8").value===boxone.threeA8 || document.getElementById("answerA8").value==="الزبير" || document.getElementById("answerA8").value==="زبير بن عوام" || document.getElementById("answerA8").value==="زبير بن العوام" || document.getElementById("answerA8").value==="الزبير بن عوام"){
        boxone.point=boxone.point+5;
        boxone.inputansr8= false;
        myApp1.guide9 = true;
    } else {
        boxone.inputansr8= false;
        myApp1.guide9 = true;
    }
    if (x===1){
        boxone.optionansr8=true;
        boxone.inputansr8=false;
    }
}

function answer9 (x) {
    if(document.getElementById("answerA9").value===boxone.threeA9 || document.getElementById("answerA9").value==="سعد بن ابي وقاص" || document.getElementById("answerA9").value==="بن أبي وقاص" || document.getElementById("answerA9").value==="بن ابي وقاص"){
        boxone.point=boxone.point+5;
        boxone.inputansr9= false;
        myApp1.guide10 = true;
    } else {
        boxone.inputansr9= false;
        myApp1.guide10 = true;
    }
    if (x===1){
        boxone.optionansr9=true;
        boxone.inputansr9=false;
    }
}

function answer10 (x) {
    if(document.getElementById("answerA10").value===boxone.threeA10){
        boxone.point=boxone.point+5;
        boxone.inputansr10= false;
        boxone.optionansr10= false;
        boxone.points= true;
        boxone.lasttext= true;
//      myApp1.guide11 = true;
    } else {
        boxone.optionansr10= false;
        boxone.inputansr10= false;
//      myApp1.guide110 = true;
        boxone.points= true;
        boxone.lasttext= true;
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
    }
    
    
    // Q3
    function guideone30 (){
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
    }
    
    
    // Q4
    function guideone40 (){
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
    }
    
    
    // Q5
    function guideone50 (){
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
    }
    
    
    // Q6
    function guideone60 (){
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
    }
    
    // Q7
    function guideone70 (){
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
    }
    
    
    // Q8
    function guideone80 (){
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
    }
    
    
    // Q9
    function guideone90 (){
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
    }
    
    
    // Q10
    function guideone100 (){
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
