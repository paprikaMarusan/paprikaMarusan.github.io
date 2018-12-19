fetch("https://sheets.googleapis.com/v4/spreadsheets/1ExGxj07uwHxG2oINmWPZsh69vEWl3nKRKHqwO8xrlAM/values/sheet1?key=AIzaSyAkzsT5GrlIb8AitV1Dwg-33H7uxFDfQ_g").then(
    response => {
      return response.json();
    }
).then(
    json => {
      let html = "<ul>";
      console.log(json);

      json.values.forEach( row => {
            html += `<li><span style="color:gray;">${row[0]} |</span>　${row[1]}</li><hr style="border-top:dashed 1px #FF0000;">`;
          }
      );

      html += "</ul>";
      document.querySelector("#sheet").innerHTML = html;
    }
);

//