//よくある質問を切り替えるやつ
function moveQ1(){
  document.querySelector('#question').innerHTML = `<h2>Q.カラクリウォーズって実際に配信されているんですか？</h2>`;
  document.querySelector('#answer').innerHTML = `<p>カラクリウォーズは実際に配信されていません.<br>このサイトは大学の演習で作られたものです.</p>`;
  document.querySelector('.questionMove').innerHTML = `<li onclick="moveQ1()">&#10102;</li> <li onclick="moveQ2()">&#9313;</li> <li onclick="moveQ3()">&#9314;</li>`;
}

function moveQ2(){
  document.querySelector('#question').innerHTML = `<h2>よくある質問2</h2>`;
  document.querySelector('#answer').innerHTML = `<p>答えの2</p>`;
  document.querySelector('.questionMove').innerHTML = `<li onclick="moveQ1()">&#9312;</li> <li onclick="moveQ2()">&#10103;</li> <li onclick="moveQ3()">&#9314;</li>`;
}

function moveQ3(){
  document.querySelector('#question').innerHTML = `<h2>よくある質問3</h2>`;
  document.querySelector('#answer').innerHTML = `<p>答えの3</p>`;
  document.querySelector('.questionMove').innerHTML = `<li onclick="moveQ1()">&#9312;</li> <li onclick="moveQ2()">&#9313;</li> <li onclick="moveQ3()">&#10104;</li>`;
}