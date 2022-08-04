function showCart() {
    fetch("/getCart")
      .then((response) => response.text())
      .then((data) => {
        var shopping = JSON.parse(data);
        var myTables = "";
        shopping.forEach((element) => {
          myTables += `

                <table class="styled-table">
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Total price</th>
                    </tr>
                    <tr>
                        <td>${element.name}</td>
                        <input type="hidden" name="name" value="${element.name}">
                        <td>${element.price}₪</td>
                        <input type="hidden" name="price" value="${element.price}">
                        <td><img src="${element.img}"  width="150" height="150"></td>
                        <td>${element.quantity}</td>
                        <input type="hidden" name="quantity" value="${element.quantity}">
                        <td>${element.totalPrice}₪</td>
                        <input type="hidden" name="totalPrice" value="${element.totalPrice}">
                    </tr>
                    </table>
                `;
                
        });

        document.getElementById("myData").innerHTML = myTables;
      });
  }
  

   // // <form action="/deleteFromCart" method="get">
        // <button type="submit" class="button" value="continue for checkout"></button>
        // // </form>

        // <input type="submit" value="Send" id="submit">