//例題1 最初のやつ
function checkNumber() {
  if (Number(document.querySelector(`#num`).value) > 10){
    window.alert("true");
  } else {
    window.alert("false");
  }
}

//例題2 文字のやつ
function checkUserInput() {
  if (String(document.querySelector(`#user_input`).value) === "隣の客はよく柿食う客だ"){
    window.alert("まる(*⁰▿⁰*)")
  }else{
    window.alert("ばつ( ・∇・)")
  }
}

//例題3 年齢のやつ
function checkAge() {
  let age = Number(document.querySelector(`#age`).value);
  let answer = document.querySelector(`div`);
  if (age <= 0){
    answer.innerHTML = "エラー";
  } else if (age < 20){
    answer.innerHTML = "未成年";
  } else if (age >= 20 && age < 65){
    answer.innerHTML = "成人";
  } else {
    answer.innerHTML = "高齢者";
  }
}

//例題4 グレゴリオ歴のやつ
function checkYear() {
  let year = Number(document.querySelector(`#year`).value);
  let answer = document.querySelector(`div`);
  if (year%400 === 0){
    answer.innerHTML = "閏年";
  }else if(year%100 === 0){
    answer.innerHTML = "平年"
  }else if(year%4 === 0){
    answer.innerHTML = "閏年";
  }else{
    answer.innerHTML = "平年";
  }
}