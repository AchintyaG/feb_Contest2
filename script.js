let array = [];

let button1 = document.getElementById("btn");

function issueBooks(){
    let bookName = document.getElementById("bookName").value;
    let user = document.getElementById("user").value;
    let id = array.length+1; 
    let time = new Date().toLocaleString();
    let status  = "not returned";

    let obj = {id,bookName,user,time,status};
    array.push(obj);
    displayData();
}
button1.addEventListener('click', issueBooks);

let table1 = document.getElementsByTagName("table");
let body1 = document.getElementById("body");
function displayData(){
    let tr = document.createElement('tr');

    let td1 = tr.appendChild(document.createElement('td'));
    let td2 = tr.appendChild(document.createElement('td'));
    let td3 = tr.appendChild(document.createElement('td'));
    let td4 = tr.appendChild(document.createElement('td'));
    let td5 = tr.appendChild(document.createElement('td'));

    let book = array[array.length-1];
    td1.innerText = book.id;
    td2.innerText = book.bookName;
    td3.innerText = book.user;
    td4.innerText = book.time;
    td5.innerText = book.status;

    

    if(!book.bookName == "" && !book.user == "")    
        body1.appendChild(tr);
}