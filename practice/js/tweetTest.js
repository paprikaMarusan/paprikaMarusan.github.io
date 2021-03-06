/*中間課題*/
let tweetsHTML = "<ul>";

//最初のページ
let appendTweet = function (twit/*配列の中身*/) {
  tweetsHTML += `<li> <div class="imageBox"><img src = ${twit.avatar} width="100%"></div> <div class="textBox"> <b>${twit.name}</b> <br> ${twit.message} <br> <i>${twit.tweetedAt}</i></div></li>`;
};
tweets.forEach(appendTweet);

tweetsHTML += "</ul>";
document.querySelector("#answer").innerHTML = tweetsHTML;


//ボタンが押されたらanswerの中身を書き換えるやつ(18/11/20時点)
// function saburo(){
//   document.querySelector("#answer").innerHTML = "三郎召喚〜";
//   //書き換える場所の取得.innnerHTML = 書き換える内容
//   //必要なこと：三郎だけを取り出す
//}

//全て取り出す関数
function zenbu(){
  let tweetsHTML = "<ul>";
  let appendTweet = function (twit/*配列の中身*/) {
    tweetsHTML += `<li> <div class="imageBox"><img src = ${twit.avatar} width="100%"></div> <div class="textBox"> <b>${twit.name}</b> <br> ${twit.message} <br> <i>${twit.tweetedAt}</i></div></li>`;
  };
  tweets.forEach(appendTweet);
  tweetsHTML += "</ul>";
  document.querySelector("#answer").innerHTML = tweetsHTML;
}

//三郎だけ取り出す関数
function saburo() {
  let tweetsHTML = "<ul>";
  let appendTweet = function (twit/*配列の中身*/) {
    if (twit.name === "三郎BOT") {
      tweetsHTML += `<li> <div class="imageBox"><img src = ${twit.avatar} width="100%"></div> <div class="textBox"> <b>${twit.name}</b> <br> ${twit.message} <br> <i>${twit.tweetedAt}</i></div></li>`;
    }
  };
  tweets.forEach(appendTweet);
  tweetsHTML += "</ul>";
  document.querySelector("#answer").innerHTML = tweetsHTML;
}

//太郎だけ取り出す関数
function taro() {
  let tweetsHTML = "<ul>";
  let appendTweet = function (twit/*配列の中身*/) {
    if (twit.name === "太郎") {
      tweetsHTML += `<li> <div class="imageBox"><img src = ${twit.avatar} width="100%"></div> <div class="textBox"> <b>${twit.name}</b> <br> ${twit.message} <br> <i>${twit.tweetedAt}</i></div></li>`;
    }
  };
  tweets.forEach(appendTweet);
  tweetsHTML += "</ul>";
  document.querySelector("#answer").innerHTML = tweetsHTML;
}

//次郎だけ取り出す関数
function jiro() {
  let tweetsHTML = "<ul>";
  let appendTweet = function (twit/*配列の中身*/) {
    if (twit.name === "次郎") {
      tweetsHTML += `<li> <div class="imageBox"><img src = ${twit.avatar} width="100%"></div> <div class="textBox"> <b>${twit.name}</b> <br> ${twit.message} <br> <i>${twit.tweetedAt}</i></div></li>`;
    }
  };
  tweets.forEach(appendTweet);
  tweetsHTML += "</ul>";
  document.querySelector("#answer").innerHTML = tweetsHTML;
}