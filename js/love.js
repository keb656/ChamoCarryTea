export function loveCard(){
    let loveCard=["001", "002", "003", "004", "005", "006", "007", "008", "009", "010"]

    let tmp = 0;
    let j = 0;

    for(let i = 0; i < loveCard.length; i++){
        j = Math.floor((Math.random()*9))+1;
        tmp = loveCard[i];
        loveCard[i] = loveCard[j];
        loveCard[j] = tmp;
    };

    let loveLine = [];
    for(let i = 0; i < loveCard.length ; i++){
        loveLine[i]=`<figure><img src="img/${loveCard[i]}.png"></figure>\n`
    };

return loveLine;

};