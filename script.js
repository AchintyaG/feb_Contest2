var array = [];

var button1 = document.getElementById("btn");

function issueBooks(){
    var bookName = document.getElementById("bookName").value;
    var user = document.getElementById("user").value;
    var id = array.length+1; 
    var time = new Date().toLocaleString();
    var status  = "not returned";

    var obj = {id,bookName,user,time,status};
    array.push(obj);
    displayData();
}
button1.addEventListener('click', issueBooks);

//let table1 = document.getElementsByTagName("table");
//let body1 = document.getElementById("body");
// function displayData(){
//     let tr = document.createElement('tr');

//     let td1 = tr.appendChild(document.createElement('td'));
//     let td2 = tr.appendChild(document.createElement('td'));
//     let td3 = tr.appendChild(document.createElement('td'));
//     let td4 = tr.appendChild(document.createElement('td'));
//     let td5 = tr.appendChild(document.createElement('td'));

//     let book = array[array.length-1];
//     td1.innerText = book.id;
//     td2.innerText = book.bookName;
//     td3.innerText = book.user;
//     td4.innerText = book.time;
//     td5.innerText = book.status;

    

//     if(!book.bookName == "" && !book.user == "")    
//         body1.appendChild(tr);
// }

function displayData() {
  var table = document.getElementById("table");
  for (var i = table.row.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }
  for (var i = 0; i < array.length; i++) {
    var row = table.insertRow(i+1);
    row.insertCell(0).innerHTML = array[i].id;
    row.insertCell(1).innerHTML = array[i].bookname;
    row.insertCell(2).innerHTML = array[i].user;
    row.insertCell(3).innerHTML = array[i].time;
    var statusCell = row.insertCell(4);
    statusCell.innerHTML = array[i].status;
    if (array[i].status == "not returned") {
      statusCell.style.color = "red";
    } else {
      statusCell.style.color = "green";
    }
    statusCell.contentEditable = true;
    statusCell.onblur = function() {
      updateStatus(this);
    };
  }
}

function updateStatus(cell) {
  var row = cell.parentNode;
  var index = row.rowIndex - 1;
  var status = cell.innerHTML;
  array[index].status = status;
  if (status == "not returned") {
    cell.style.color = "red";
  } else {
    cell.style.color = "green";
  }
}