//このコードをかければJSONの大体の処理を書ける

// fetch("http://morimorihoge.github.io/teu2018f/tweets.json").then(
//     //
//     function (responce) {
//       return responce.json();
//     }
// ).then(
//     function (json) {
//       let answerHTML = "";
//       json.forEach(function (tweet) {
//         answerHTML += `<li>${tweet.name}</li>`;
//       });
//       document.querySelector("#answer").innerHTML = answerHTML;
//     }
// );

/*郵便番号API用*/
function check() {
  let zip = document.querySelector("#zipcode").value;

  fetch(`http://zipcloud.ibsnet.co.jp/api/search?zipcode=${zip}`).then(
      response => {
        return response.json();
      }
  ).then(
      json => {
        console.log(json);
        let answer = document.querySelector("#answer");
        answer.innerHTML += `<li>
            ${json.results[0].address1}
            ${json.results[0].address2}
            ${json.results[0].address3}
            </li>`;
      }
  );
}