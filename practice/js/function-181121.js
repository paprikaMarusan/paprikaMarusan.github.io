fetch("https://sheets.googleapis.com/v4/spreadsheets/1ExGxj07uwHxG2oINmWPZsh69vEWl3nKRKHqwO8xrlAM/values/sheet1?key=AIzaSyAkzsT5GrlIb8AitV1Dwg-33H7uxFDfQ_g").then(
    response => {
      return response.json();
    }
).then(
    json => {
      let html = "<ul>";
      console.log(json);

      json.values.forEach( row => {
            html += `<li>${row[0]}</li> <li>${column[1]}</li>`;
          }
      );

      html += "</ul>";
      document.querySelector("#result").innerHTML = html;
    }
);

