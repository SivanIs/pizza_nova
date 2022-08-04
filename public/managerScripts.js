function getOrder() {
    fetch("/getOrder")
      .then((response) => response.text())
      .then((data) => {
        var shopping = JSON.parse(data);
        var myTables = "";
        shopping.forEach((element) => {
          myTables += `
                <form action ="/getclose">
                <table class="styled-table2">
                        <tr>
                        <td>Costumer name: ${element.fullName}</td>
                        </tr>
                        <input type="hidden" name="fullName" value="${element.fullName}">
                        <tr>
                        <td>Email: ${element.email}</td>
                        </tr>
                        <input type="hidden" name="email" value="${element.email}">
                        <tr>
                        <td>Address: ${element.address}</td>
                        </tr>
                        <input type="hidden" name="address" value="${element.address}">
                        <tr>
                        <td>City: ${element.city}, zip: ${element.zip}</td>
                        </tr>
                        <input type="hidden" name="city" value="${element.city}">
                        <input type="hidden" name="zip" value="${element.zip}">
                        <tr>
                        <td>Card name: ${element.cardname}</td>
                        </tr>
                        <input type="hidden" name="cardname" value="${element.cardname}">
                        <tr>
                        <td>Card number: ${element.cardnumber}, expmonth: ${element.expmonth}, expyear: ${element.expyear}, cvv: ${element.cvv}</td>
                        </tr>
                        <input type="hidden" name="cardnumber" value="${element.cardnumber}">
                        <input type="hidden" name="expmonth" value="${element.expmonth}">
                        <input type="hidden" name="expyear" value="${element.expyear}">
                        <input type="hidden" name="cvv" value="${element.cvv}">
                        <tr>
                        <td>Shipping address same as billing: ${element.sameadr}</td>
                        </tr>
                        <input type="hidden" name="sameadrr" value="${element.sameadr}">
                        <tr>
                        <td>Products name: ${element.name}</td>
                        </tr>
                        <input type="hidden" name="name" value="${element.name}">
                        <tr>
                        <td>price: ${element.price}₪<td>
                        </tr>
                        <input type="hidden" name="price" value="${element.price}">
                        <tr>
                        <td>quantity: ${element.quantity}</td>
                        </tr>
                        <input type="hidden" name="quantity" value="${element.quantity}">
                        <tr>
                        <td>totalPrice: ${element.totalPrice}₪</td>
                        </tr>
                        <input type="hidden" name="totalPrice" value="${element.totalPrice}">
                        <tr>
                        <td>Status: ${element.status}</td>
                        </tr>
                        <input type="hidden" name="status" value="${element.status}">
                        <tr>
                        <td>Time of order: ${element.orderDate}</td>
                        </tr>
                        <input type="hidden" name="totalPrice" value="${element.orderDate}">
                        <tr>
                        <td>Update status order:<button id="orderButton" onclick="closeOrders()"> close order</button> , ${element.closeDate}</td>
                        </tr>
                    </table>
                </form>
                `;
                
        });

        document.getElementById("myData").innerHTML = myTables;
      });
  }

  function getUser() {
    fetch("/getUser")
      .then((response) => response.text())
      .then((data) => {
        var shopping = JSON.parse(data);
        var myTables = "";
        shopping.forEach((element) => {
          myTables += `
               <form action ="/removeUser">
                <table class="styled-table2">
                        <tr>
                        <td>User name: ${element.userName}</td>
                        </tr>
                        <input type="hidden" name="userName" value="${element.userName}">
                        <tr>
                        <td>Password: ${element.password}</td>
                        </tr>
                        <input type="hidden" name="password" value="${element.password}">
                        <tr>
                        <td>Repeat password: ${element.repeatPassword}</td>
                        </tr>
                        <input type="hidden" name="repeatPassword" value="${element.repeatPassword}">
                        <tr>
                        <td>Email: ${element.email}</td>
                        </tr>
                        <input type="hidden" name="email" value="${element.email}">
                        <tr>
                        <td>Type: ${element.type}</td>
                        </tr>
                        <input type="hidden" name="email" value="${element.type}">
          
                        <td><button id="orderButton" onclick="removeUser()" style="center">Delete user</button></td>
                        </tr>
                    </table>
                </form>
                `;
                
        });

        document.getElementById("myUsers").innerHTML = myTables;
      });
  }

