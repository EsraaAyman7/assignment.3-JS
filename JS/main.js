var nameInput = document.getElementById("name")
var urlInput = document.getElementById("url")
var searchInput = document.getElementById("searchInput")

BookMark =[];

if(localStorage.getItem("bookMark")!= null){

  BookMark = JSON.parse(localStorage.getItem("bookMark"))
      display()
  } 

 function addBookmark(){
var bookMark ={
  siteName: nameInput.value,
  siteUrl: urlInput.value
}
if (
  validateBookmarkName(nameInput.value) &&
  validateBookmarkUrl(urlInput.value)
  ) {BookMark.push( bookMark )
  localStorage.setItem("bookMark", JSON.stringify(BookMark) )}
else{
  alert('Invalid input')
}
//console.log(BookMark)
clear();
display();
 }

 function clear(){
  nameInput.value = " ";
   urlInput.value = " ";
 }
  
 function display(){
   var cartona = " ";
  for(var i = 0 ; i < BookMark.length ; i++){
    cartona += `
    <tr>
    <td>${i}</td>
    <td>${BookMark[i].siteName}</td>
    <td>
    <button class="btn btn-warning btn-sm"><a href="https://${BookMark[i].siteUrl}" target="_blank">VISIT</a></a></button>
    </td>
    <td>
    <button onclick ="deletesite(${i})" class="btn btn-danger btn-sm">Delete</button>
    </td>
</tr>`
   
  }
  document.getElementById("tableBody").innerHTML=cartona;
 }
 

 function deletesite(index){
  BookMark.splice(index , 1)
  localStorage.setItem("bookMark", JSON.stringify(BookMark) )
  display();
}

function validateBookmarkName(bookmarkName) {
  var bookmarkNameRegEx = /^[A-Z][a-z]{2,40}$/;
  return bookmarkNameRegEx.test(bookmarkName);
  
}

function validateBookmarkUrl(bookmarkUrl) {
  var bookmarkUrlRegEx = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\/?[a-zA-Z0-9_./-]*$/;
  return bookmarkUrlRegEx.test(bookmarkUrl);
}