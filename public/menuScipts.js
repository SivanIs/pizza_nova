// take the menu from the mongo and show in the web

// function showTable() {
//     fetch('/getPizza')
//         .then(response => response.text())
//         .then(data => {
//             var pizzaTypes = JSON.parse(data);
//             var myTables =` <table id="myTables" class="styled-table">`;
//             for (let i = 0; i < pizzaTypes.length; i++) {
//                 if (i % 3 === 0) {
//                     myTables += `<tr>`;
//                 }
//                 let element = pizzaTypes[i];
//                 myTables += `
//                 // <form action="/getProductToCart" method="get">
//                              <td id="manu">
//                              <img src="${element.img}" width="300" height="300">
//                              <input type="hidden" name="img" value="${element.img}">
//                              <p>${element.name}</p>
//                              <input type="hidden" name="name" value="${element.name}">
//                              <p>${element.price}₪</p>
//                              <input type="hidden" name="price" value="${element.price}">
//                              <p><input id="${element.name}" type="number"></p>
//                              <p><button id="orderButton" type="submit">Add to order</button></p>      
//                              </td>
//                 // </form>
//                         `;
                
//                 if (i % 3 === 2) {
//                     myTables += `</tr>`;
//                 }
//             }
//             myTables += ` </table> `;

//             // pizzaTypes.forEach(element => {

//             //     myTables += `
//             //         <table class="styled-table">

//             //                 <td>
//             //                 <img src="${element.img}" alt="${element.img}" width="300" height="300">
//             //                 <p>${element.name}</p>
//             //                 <p>${element.price}₪</p>
//             //                 <p><button id="orderButton">Add to order</button></p>      
//             //                 </td>

//             //             </table>
//             //         `

//             // });
//             document.getElementById("myData").innerHTML = myTables
//         }
//         )
// }

// // search from the menu
// function myFunction() {
//     console.log("enter");
//     // Declare variables
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("myTables");
//     tr = table.getElementsByTagName("tr");
//     //   console.log("tr: ",tr);

//     // Loop through all table rows, and hide those who don't match the search query
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td");
//         for (j = 0; j < td.length; j++) {
//             dish = td[j].getElementsByTagName("p")[0];
//             dishName = dish.textContent || dish.innerText;
//             if (dishName.toUpperCase().indexOf(filter) > -1) {
//                 td[j].style.display = "";
//             } else {
//                 td[j].style.display = "none";
//             }
//         }
//     }
// }


function showTable() {
    fetch("/getPizza")
      .then((response) => response.text())
      .then((data) => {
        var shopping = JSON.parse(data);
        var myTables = "";
        shopping.forEach((element) => {
          myTables += `
             <form action="/getProductToCart" method="get">
                <table id="myTables" class="styled-table">
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Quantity</th>
                    </tr>
                    <tr>
                        <td>${element.name}</td>
                        <input type="hidden" name="name" value="${element.name}">
                        <td>${element.price}₪</td>
                        <input type="hidden" name="price" value="${element.price}">
                        <td><img src="${element.img}"  width="150" height="150"></td>
                        <input type="hidden" name="img" value="${element.img}">
                        <td><input id="${element.quantity}" type="number" name="quantity" value="1" min="1" max="5"></td>
                        <input type="hidden" name="number" value="${element.quantity}">
                        <td><button id="orderButton" type="submit">Add to order</button></td>

                    </tr>
                    </table>
             </form>
                `;      
        });
        document.getElementById("myData").innerHTML = myTables;
      });
  }

  // search from the menu
function myFunction() {
    console.log("enter");
  // Declare variables
     var input, filter, table, tr, td, i, txtValue;
     input = document.getElementById("myInput");
     console.log("input: ",input);
     filter = input.value.toUpperCase();
     table = document.getElementById("myTables");
     console.log("myTables: ",table);
     tr = table.getElementsByTagName("tr");
     console.log("tr: ",tr);

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// show only pizza
function showPizza() {
  fetch("/showPizza")
    .then((response) => response.text())
    .then((data) => {
      var shopping = JSON.parse(data);
      var myTables = "";
      shopping.forEach((element) => {
        myTables += `
           <form action="/getProductToCart" method="get">
              <table id="myTables" class="styled-table">
                  <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Image</th>
                      <th>Quantity</th>
                  </tr>
                  <tr>
                      <td>${element.name}</td>
                      <input type="hidden" name="name" value="${element.name}">
                      <td>${element.price}₪</td>
                      <input type="hidden" name="price" value="${element.price}">
                      <td><img src="${element.img}"  width="150" height="150"></td>
                      <input type="hidden" name="img" value="${element.img}">
                      <td><input id="${element.quantity}" type="number" name="quantity" value="1" min="1" max="5"></td>
                      <input type="hidden" name="number" value="${element.quantity}">
                      <td><button id="orderButton" type="submit">Add to order</button></td>

                  </tr>
                  </table>
           </form>
              `;      
      });
      document.getElementById("myPizza").innerHTML = myTables;
    });
}

// show only pasta
function showPasta() {
  fetch("/showPasta")
    .then((response) => response.text())
    .then((data) => {
      var shopping = JSON.parse(data);
      var myTables = "";
      shopping.forEach((element) => {
        myTables += `
           <form action="/getProductToCart" method="get">
              <table id="myTables" class="styled-table">
                  <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Image</th>
                      <th>Quantity</th>
                  </tr>
                  <tr>
                      <td>${element.name}</td>
                      <input type="hidden" name="name" value="${element.name}">
                      <td>${element.price}₪</td>
                      <input type="hidden" name="price" value="${element.price}">
                      <td><img src="${element.img}"  width="150" height="150"></td>
                      <input type="hidden" name="img" value="${element.img}">
                      <td><input id="${element.quantity}" type="number" name="quantity" value="1" min="1" max="5"></td>
                      <input type="hidden" name="number" value="${element.quantity}">
                      <td><button id="orderButton" type="submit">Add to order</button></td>

                  </tr>
                  </table>
           </form>
              `;      
      });
      document.getElementById("myPasta").innerHTML = myTables;
    });
}


// show only Beverages
function showBeverages() {
  fetch("/showBeverages")
    .then((response) => response.text())
    .then((data) => {
      var shopping = JSON.parse(data);
      var myTables = "";
      shopping.forEach((element) => {
        myTables += `
           <form action="/getProductToCart" method="get">
              <table id="myTables" class="styled-table">
                  <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Image</th>
                      <th>Quantity</th>
                  </tr>
                  <tr>
                      <td>${element.name}</td>
                      <input type="hidden" name="name" value="${element.name}">
                      <td>${element.price}₪</td>
                      <input type="hidden" name="price" value="${element.price}">
                      <td><img src="${element.img}"  width="150" height="150"></td>
                      <input type="hidden" name="img" value="${element.img}">
                      <td><input id="${element.quantity}" type="number" name="quantity" value="1" min="1" max="5"></td>
                      <input type="hidden" name="number" value="${element.quantity}">
                      <td><button id="orderButton" type="submit">Add to order</button></td>

                  </tr>
                  </table>
           </form>
              `;      
      });
      document.getElementById("myBeverages").innerHTML = myTables;
    });
}