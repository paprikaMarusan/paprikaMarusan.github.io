/*演習１*/
// let fruitsHTML = "<ul>";
// fruitsNamesからliタグを作ってfruitsHTMLに
// += で追加していく
//
//// while版
// let i = 0;
// while(i < fruitNames.length){
//   fruitsHTML += `<li>${fruitNames[i]}</li>`;
//   i++;
// }

// for版
// for(let i = 0;i < fruitNames.length;i++){
//   fruitsHTML += `<li>${fruitNames[i]}</li>`;
// }
//
// fruitsHTML += "</ul>";
// document.querySelector("#answer").innerHTML = fruitsHTML;


/*演習２：配列のデータを使うやつツイッタ風*/
// let tweetsHTML = "<ul>";

// let i = 0;
// while(i < tweets.length){
//   tweetsHTML += `<li><b>${tweets[i].name}</b> ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`;
//   i++;
// }

// for(let i = 0; i < tweets.length;i++){
//   tweetsHTML += `<li><b>${tweets[i].name}</b> ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`;
// }
//
// tweetsHTML += "</ul>";
// document.querySelector("#answer").innerHTML = tweetsHTML;