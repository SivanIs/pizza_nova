
// login from the server with script that bypasses the original form

function fetchPost(url, payload) {
    return fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
}

function verifyAndLogin() {

    const user = {
        username: document.getElementsByName('userName')[0].value,
        password: document.getElementsByName('password')[0].value
    }
    fetchPost('/login', user)
        .then(response => response.json())
        .then(data => {
            if (data !== null) { //if user exists 
                localStorage.setItem('user', JSON.stringify(data)); //like cookies
                if(data.type=='manager'){ //if this is the manager
                    fetchPage('managerPage.html');getOrder();getUser();
                } else{
                    fetchPage('menu.html');
                    showTable(); // if this is customer
                }
            } else{ // not exists
                alert('User not exists');
            }
        }).catch((err) => console.log(error))

    return false;
}

// function that do one single page appliction 

function fetchPage(whatPage) {
    fetch(whatPage)
        .then(response => response.text())
        .then(data => document.getElementById("mainContent").innerHTML = data);
    isNew = false;
}

