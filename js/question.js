export function questionText(){
    let randomQuestion=["오늘 하루 중 가장 행복했던 순간은 언제였나요?", "최근에 무엇이 나를 스트레스 받게 했나요? 그 상황을 어떻게 극복했나요?", "나의 감정을 잘 표현하고 있나요? 그렇지 않다면, 어떻게 개선할 수 있을까요?", "나 자신에게 충분한 휴식과 여유를 주고 있나요?", "나의 삶에서 감사한 일이나 사람은 무엇인가요?", "요즘 나의 수면 상태는 어떤가요? 충분히 자고 있나요?", "최근에 나를 웃게 만든 일은 무엇인가요?", "내가 사랑하는 사람들과의 관계는 어떤가요? 개선할 점이 있다면 무엇일까요?", "나는 어떤 활동을 할 때 가장 편안하고 행복한가요?", "나의 마음 건강을 위해 새로운 취미나 활동을 시작해 보는 것은 어떨까요? 어떤 활동이 도움이 될 것 같나요?"]

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