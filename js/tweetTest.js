/*ツイート*/
let tweetsHTML = "<ul>";let number = 0;

let appendTweet = function (twit/*配列の中身*/) {
  tweetsHTML += `<li> <div class="imageBox"><img src = ${twit.avatar} width="100%"></div> <div class="textBox"> <b>${twit.name}</b> <br> ${twit.message} <br> <i>${twit.tweetedAt}</i></div></li>`;
};

tweets.forEach(appendTweet);


tweetsHTML += "</ul>";
document.querySelector("#answer").innerHTML = tweetsHTML;