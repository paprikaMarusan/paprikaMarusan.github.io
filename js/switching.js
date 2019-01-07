//質問を切り替えるやつ
function moveQ1(){
  document.querySelector('#question').innerHTML = `<h2>Q.カラクリウォーズって実際に配信されているんですか？</h2>`;
  document.querySelector('#answer').innerHTML = `<p>カラクリウォーズは実際に配信されていません.<br>このサイトは大学の演習で作られたものです.</p>`;
  document.querySelector('.questionMove').innerHTML = `<li onclick="moveQ1()">&#10102;</li> <li onclick="moveQ2()">&#9313;</li> <li onclick="moveQ3()">&#9314;</li>`;
}

function moveQ2(){
  document.querySelector('#question').innerHTML = `<h2>Q.このサイトを作った人は誰ですか？</h2>`;
  document.querySelector('#answer').innerHTML = `<p>なんとここに作者の<a href="https://twitter.com/kiiro_no_hoshi" target="_blank">Twitter</a>が...！</p>`;
  document.querySelector('.questionMove').innerHTML = `<li onclick="moveQ1()">&#9312;</li> <li onclick="moveQ2()">&#10103;</li> <li onclick="moveQ3()">&#9314;</li>`;
}

function moveQ3(){
  document.querySelector('#question').innerHTML = `<h2>Q.Githubとかありますか？</h2>`;
  document.querySelector('#answer').innerHTML = `<p>なんとここに<a href="https://github.com/paprikaMarusan" target="_blank">Github</a>へのリンクが...！</p>`;
  document.querySelector('.questionMove').innerHTML = `<li onclick="moveQ1()">&#9312;</li> <li onclick="moveQ2()">&#9313;</li> <li onclick="moveQ3()">&#10104;</li>`;
}



//キャラクターを切り替えるやつ
function changeLuke(){
  document.querySelector('.character').innerHTML = `<img src="images/hirona_unit.png">`;
  document.querySelector('.characterName').innerHTML = `<h1><span>ルーク</span></h1>`;
  document.querySelector('.characterAbility').innerHTML = `<p><span>炎属性ファイター｜19歳｜カラクリ：フレイムナックル</span></p>`;
  document.querySelector('.characterProfile').innerHTML = `<p><span>街を守る警備組織 [カラクリナイツ] の一員.<br>何事にも全力で情に厚い男.<br>同期のヒロナからは「熱血すぎ」と呆れられがち.<br>本人はそんなことを意に介さず、<br>今日もカラクリ片手に街の平和を守り抜く！<br><br></span></p><p><span>「街の平和を乱すのはどこのどいつだ！」</span></p>`;
  document.querySelector('.characterMove').innerHTML = `      <img src="images/mimil_charaparts_active.png" onClick="changeLuke()"><img src="images/hirona_charaparts.png" onClick="changeHirona()"><img src="images/mimil_charaparts.png" onClick="changeKana()"><img src="images/mimil_charaparts.png" onClick="changeMichelle()"><img src="images/mimil_charaparts.png" onClick="changeLeonard()">
`;
}

function changeHirona(){
  document.querySelector('.character').innerHTML = `<img src="images/hirona_unit.png">`;
  document.querySelector('.characterName').innerHTML = `<h1><span>ヒロナ</span></h1>`;
  document.querySelector('.characterAbility').innerHTML = `<p><span>水属性ガンナー｜17歳｜カラクリ：アクアキャノン</span></p>`;
  document.querySelector('.characterProfile').innerHTML = `<p><span>街を守る警備組織 [カラクリナイツ] の一員.<br>興味のあること以外は無関心な性格だが、<br>頼まれた仕事はしっかりやっているようだ.<br>音楽好きでいつもヘッドフォンを持ち歩いている.<br><br></span></p><p><span>「…音楽を楽しく聴くには、街が平和じゃないとね」</span></p>`;
  document.querySelector('.characterMove').innerHTML = `      <img src="images/mimil_charaparts.png" onClick="changeLuke()"><img src="images/hirona_charaparts_active.png" onClick="changeHirona()"><img src="images/mimil_charaparts.png" onClick="changeKana()"><img src="images/mimil_charaparts.png" onClick="changeMichelle()"><img src="images/mimil_charaparts.png" onClick="changeLeonard()">
`;
}

function changeKana(){
  document.querySelector('.character').innerHTML = `<img src="images/mimil_unit.png">`;
  document.querySelector('.characterName').innerHTML = `<h1><span>カナ</span></h1>`;
  document.querySelector('.characterAbility').innerHTML = `<p><span>風属性ヒーラー｜25歳｜カラクリ：ヒーリングライト</span></p>`;
  document.querySelector('.characterProfile').innerHTML = `<p><span>街外れにある教会のシスター.<br>優しく、マイペースな性格.<br>気まぐれに触ったカラクリに興味を持ち、のめり込んだ.<br>カラクリ片手に戦うというのは<br>シスター的にどうなのかと周りは思っているが、<br>マイペースな彼女はあまり気にしていないようだ.<br><br></span></p><p><span>「」</span></p>`;
  document.querySelector('.characterMove').innerHTML = `      <img src="images/mimil_charaparts.png" onClick="changeLuke()"><img src="images/hirona_charaparts.png" onClick="changeHirona()"><img src="images/mimil_charaparts_active.png" onClick="changeKana()"><img src="images/mimil_charaparts.png" onClick="changeMichelle()"><img src="images/mimil_charaparts.png" onClick="changeLeonard()">
`;
}
function changeMichelle(){
  document.querySelector('.character').innerHTML = `<img src="images/mimil_unit.png">`;
  document.querySelector('.characterName').innerHTML = `<h1><span>ミシェル</span></h1>`;
  document.querySelector('.characterAbility').innerHTML = `<p><span>光属性ソードマン｜15歳｜カラクリ：スライサー</span></p>`;
  document.querySelector('.characterProfile').innerHTML = `<p><span>ちょっぴり危ない雰囲気の女の子.<br>惚れっぽい性格で、いつも恋に燃えている.<br>カラクリアリーナに挑戦し始めてからは、<br>自分より強い人に惹かれるようになったらしい.<br><br></span></p><p><span>「あぁ、あの人こそきっと私の王子様！」</span></p>`;
  document.querySelector('.characterMove').innerHTML = `      <img src="images/mimil_charaparts.png" onClick="changeLuke()"><img src="images/hirona_charaparts.png" onClick="changeHirona()"><img src="images/mimil_charaparts.png" onClick="changeKana()"><img src="images/mimil_charaparts_active.png" onClick="changeMichelle()"><img src="images/mimil_charaparts.png" onClick="changeLeonard()">
`;
}
function changeLeonard(){
  document.querySelector('.character').innerHTML = `<img src="images/mimil_unit.png">`;
  document.querySelector('.characterName').innerHTML = `<h1><span>レオナルド</span></h1>`;
  document.querySelector('.characterAbility').innerHTML = `<p><span>闇属性ランサー｜20歳｜カラクリ：ランス</span></p>`;
  document.querySelector('.characterProfile').innerHTML = `<p><span>ちょっぴり危ない雰囲気の女の子.<br>惚れっぽい性格で、いつも恋に燃えている.<br>カラクリアリーナに挑戦し始めてからは、<br>自分より強い人に惹かれるようになったらしい.<br><br></span></p><p><span>「」</span></p>`;
  document.querySelector('.characterMove').innerHTML = `      <img src="images/mimil_charaparts.png" onClick="changeLuke()"><img src="images/hirona_charaparts.png" onClick="changeHirona()"><img src="images/mimil_charaparts.png" onClick="changeKana()"><img src="images/mimil_charaparts.png" onClick="changeMichelle()"><img src="images/mimil_charaparts_active.png" onClick="changeLeonard()">
`;
}


