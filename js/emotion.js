export function VideoList(){
    let randomQuestion=["https://youtu.be/h4JyNB3h5FE?feature=shared", "https://youtu.be/wsJyyKyE5fc?feature=shared", "https://youtu.be/uaNarzGZxi0?feature=shared", "https://youtu.be/JohV7cFBtxQ?feature=shared", "https://youtu.be/-JMJEMoDFzY?feature=shared", "https://youtu.be/7_461Fmc75E?feature=shared", "https://youtu.be/UUerpllw74M?feature=shared"] 
    let tmp = 0;
    let j = 0;

    for(let i = 0; i < randomQuestion.length; i++){
        j = Math.floor((Math.random()*9))+1;
        tmp = randomQuestion[i];
        randomQuestion[i] = randomQuestion[j];
        randomQuestion[j] = tmp;
    };

    let QuestionLine = [];
    for(let i = 0; i < randomQuestion.length ; i++){
        QuestionLine[i]=randomQuestion[i]
    };

return QuestionLine;

};