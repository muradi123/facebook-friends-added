let span = document.querySelector('.number');
let users = document.querySelector('.users');


chrome.storage.local.get('friend', result => {
    span.innerHTML = result.friend;
});
  
chrome.storage.local.get('lists', result => {
    users.innerHTML = result.lists;
});

let deactivate = document.querySelector('.wraper-first-div-span');
let button =  document.querySelector('.inactive');

deactivate.addEventListener('click' ,function(){

   if(button.innerHTML === 'active'){
      button.style.color = '#000';
      button.style.backgroundColor = '#dee3e2';
      button.style.border = "2px solid #000";
      deactivate.style.color = '#000'
      button.innerHTML = 'Inactive';
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
         chrome.tabs.sendMessage(tabs[0].id, {message2: "deactive"})
      
        });
     }
})

button.addEventListener('click', function(){

   if (button.innerHTML === "Inactive") {
      button.innerHTML = 'active';
      button.style.color ="#ff0019";
      button.style.backgroundColor ="#14ad00";
      deactivate.style.color = '#fff';
      button.style.border = "2px solid #ff0019";
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
         chrome.tabs.sendMessage(tabs[0].id, {message: "active"})
      
        });
          
  } 
})


 