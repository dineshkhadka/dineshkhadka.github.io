/* NepalIpsum, (c) 2016 Dinesh - http://github.com/dineshkhadka/nepalipsum
 * @license MIT */
var ipsumWords = ['सन्', 'ग्रीष्म', 'ऋतुमा', 'स्वीस', 'नागरिकहरूलाई', 'सगरमाथा', 'आरोहण', 'गर्ने', 'स्वीकृति', 'दिएपछि', 'सन्', 'बेलायती', 'नागरिकहरूलाई', 'सफल', 'आरोहणको', 'अन्तिम', 'मौका', 'दिइएको', 'थियोसन्', 'फ्रेन्च', 'नागरिकहरूलाई', 'स्वीस', 'नागरिकहरूलाई', 'आरोहण', 'अनुमति', 'दिइएको', 'थियोबेलायती', 'हिमालयन', 'समितिले', 'उच्च', 'पहाड', 'एवम्', 'हिमाल', 'चढाइमा', 'कीर्तिमान', 'प्राप्त', 'गरेका', 'एक', 'सेना', 'अधिकृत', 'जोहन', 'हन्टलाई', 'समूह', 'नेताको', 'टिम', 'लिडर', 'रूपमा', 'नियुक्त', 'गरेको', 'थियोउनले', 'नेतृत्व', 'गरेको', 'समूहले', 'सन्', 'सगरमाथाको', 'साहसिक', 'यात्रामा', 'सफलता', 'हासिल', 'गर्न', 'सकेनहन्टको', 'समूह', 'ठूलो', 'थियोसिपटनका', 'साथमा', 'सन्', 'चढेका', 'मानिसहरू', 'पनि', 'त्यहा', 'समावेश', 'भएका', 'थिएउक्त', 'समूहमा', 'जर्ज', 'व्याण्ड', 'टम', 'वोर्र्डिन', 'चार्लस्', 'अल्फ', 'ग्रेगरी', 'एडमण्ड', 'हिलारी', 'जर्ज', 'लोवे', 'माइकल', 'वार्ड', 'टिम', 'डाक्टर', 'मिखाइल', 'वेष्टमाकोट', 'र', 'चार्लस', 'वाइली', 'समावेश', 'भएका', 'थिएत्यसैबेला', 'जेम्स', 'मोरिसले', 'पत्रिकाको', 'लागि', 'समाचार', 'लेख्ने', 'र', 'टम', 'स्टोवर्टले', 'त्यस', 'कार्यको', 'फोटो', 'खिच्ने', 'कार्य', 'गरेका', 'थिएतेन्जिङ्लाई', 'शेर्पाहरूको', 'सरदार', 'भै', 'आरोहण', 'समूहमा', 'समावेश', 'हुन', 'निमन्त्रणा', 'गरिएको', 'थियोत्यस', 'साहसिक', 'यात्राका', 'क्रममा', 'आधार', 'शिविरदेखि', 'ल्होत्सेको', 'मोहडासम्म', 'पंक्तिबद्ध', 'रूपमा', 'शिविर', 'स्थापना', 'गरिएका', 'थिएउक्त', 'यात्रामा', 'दुई', 'प्रकारका', 'अक्सिजन', 'उपकरणहरू', 'प्रयोगमा', 'ल्याइएका', 'थिएमे', 'विहान', 'बजे', 'वोर्डेलो', 'र', 'इभान्स', 'दुवैजना', 'हन्ट', 'एवम्', 'नामग्याल', 'शेर्पाको', 'साथमा', 'खोंचबाट', 'शिविरतर्फ', 'प्रस्थान', 'गरेवोर्डेलो', 'र', 'इभान्सले', 'सुरूमा', 'राम्रो', 'प्रगति', 'गरे', 'पनि', 'हिउँ', 'र', 'अक्सिजन', 'सेटको', 'कारणले', 'आरोहणमा', 'ढिलाई', 'भयोअन्त्यमा', 'उनीहरूको', 'प्रयास', 'सफल', 'भएन', 'र', 'तल', 'झरे', 'मे', 'को', 'दिन', 'हिलारी', 'र', 'तेन्जिङ्', 'लोवे', 'एवम्', 'आङनिमाको', 'सहयोगमा', 'नवौं', 'शिविरमा', 'पुगेमे', 'को', 'विहान', 'हिलारी', 'र', 'तेन्जिङ्', 'माथि', 'चढन', 'सुरू', 'गरेदक्षिणी', 'चुचुरोमा', 'पुग्नुभन्दा', 'अगाडि', 'हिमपातका', 'कारणले', 'यात्रामा', 'अवरोध', 'आयोयो', 'अवस्थामा', 'हिलारी', 'त्रसित', 'भएएकातिर', 'माथिबाट', 'हिउाको', 'पहिरो', 'आइ', 'ज्यान', 'लिने', 'स्थिति', 'थियो', 'अर्कोतिर', 'सगरमाथा', 'शिखरमा', 'पुग्ने', 'एकमात्र', 'मौका', 'गुमाउन', 'नहुने', 'अवस्था', 'थियोउनीहरू', 'विहान', 'बजे', 'भिराले', 'चढेर', 'दक्षिणी', 'टाकुरामा', 'पुगिसकेका', 'थिएअन्तिम', 'पर्वतधार', 'चढन', 'कठिन', 'देखिन्थ्यो', 'तर', 'पनि', 'उनीहरू', 'धैर्यका', 'साथ', 'अगाडि', 'बढेयो', 'नै', 'अहिलेका', 'प्रसिद्ध', 'हिलारीको', 'जटिल', 'खुडकिलो', 'थियोत्यसपछि', 'तेन्जिङ्', 'र', 'हिलारी', 'सजिलैसाग', 'शिखरमा', 'पुगेकेहीबेरको', 'आराम', 'पछि', 'बधाइको', 'आदान', 'प्रदान', 'भयोतेन्जिङ्बाट', 'हिलारीले', 'शिखरको', 'फोटो', 'लिए', 'र', 'मालोरी', 'एवम्', 'इरभाइनको', 'सङ्केतका', 'लागि', 'उत्तरतिर', 'चिहाए']

var helpers = {
  getRandom: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

var NepalIpsum = {
  generate: function (words, amount, fullStop = true) {
    var lastIndex;
    var word;
    var addStop;
    var isLast;
    var sentence = [];

    for (var i = 0; i < amount; i++) {
      word = words[helpers.getRandom(0, words.length - 1)];
      if (fullStop) {
        addStop = ((i % 10) == 0 && i != (amount - 1) && i != 0);
        isLast = (i == (amount - 1)); // Check if this is the last item
        addStop || isLast ? word = word + ' ।' : '';
      }
      sentence[lastIndex - 1] != word ? lastIndex = sentence.push(word) : '';
    }
    // Join the array to create a readable sentence
    return sentence.join(' ');
  }
}
console.log(NepalIpsum.generate(ipsumWords, 3, false))


$('.ipsum-heading').html(NepalIpsum.generate(ipsumWords, 7, false));
$('.ipsum-sub-heading').html(NepalIpsum.generate(ipsumWords, 14, false));
$('.ipsum-content').html(NepalIpsum.generate(ipsumWords, 450));
