!function(){"use strict";CustomFunctions.associate("MODERATION",(function(e){return new Promise((function(t,n){e||t("Blank"),fetch("https://api.openai.com/v1/moderations",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer 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"},body:JSON.stringify({model:"text-moderation-latest",input:e})}).then((function(e){return e.json()})).then((function(e){var n=JSON.stringify(e.results[0].flagged);t("false"===n?"Passed":"true"===n?"Failed":"Error")}))}))})),CustomFunctions.associate("SENTIMENT",(function(e){return new Promise((function(t,n){e||t("Blank"),fetch("https://api.openai.com/v1/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer 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"},body:JSON.stringify({model:"text-curie-001",prompt:"Decide whether a Tweet's sentiment is positive, neutral, or negative. Tweet:"+e+"Sentiment: ",max_tokens:20,temperature:0,top_p:1,frequency_penalty:.5,presence_penalty:0,n:1})}).then((function(e){return e.json()})).then((function(e){var n=JSON.stringify(e.choices[0].text).replace(/\\n/g,"").replace(/['"]+/g,""),o=n.toLowerCase().charAt(0).toUpperCase()+n.slice(1);t(o)}))}))}))}();
//# sourceMappingURL=functions.js.map