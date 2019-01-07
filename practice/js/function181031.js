//10/31の例題

/*例題1*/
// function doLoop() {
//   let num = 0;
//   let sum = 0;
//   let answer = document.querySelector("#answer");
//   while (num <= 10000) {
//     sum = sum + num;
//     num++;
//   };
//   answer.innerHTML = sum;
// }


/*例題2*/
// function doLoop(){
//   let num = 0;
//   let sum = 0;
//   let answer = document.querySelector("#answer");
//
//   while(num <= 10000){
//     sum = sum + num;
//     if(sum >= 50000){
//       break;
//     }
//     num++;
//   }
//   answer.innerHTML = num;
// }

//例題3
// function doFizzBuzz() {
//   let num = 1;
//   let answer = document.querySelector("#answer");
//
//   while (num < 100) {
//     if (num % 3 == 0 && num % 5 == 0) {
//       answer.innerHTML += `FiZZBuzz<br>`;
//     } else if (num % 3 == 0) {
//       answer.innerHTML += `Fizz<br>`;
//     } else if (num % 5 == 0) {
//       answer.innerHTML += `Buzz<br>`;
//     } else{
//       answer.innerHTML += `${num}<br>`
//     }
//
//     num++;
//   }
// }
