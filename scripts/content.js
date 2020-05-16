let friends = document.querySelector('#friends_center_main div:nth-child(2)').children.length;
chrome.storage.local.set({friend:  friends});

let users = document.querySelector('#friends_center_main div:nth-child(2)').innerHTML;
chrome.storage.local.set({lists:  users});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if ( request.message === "active"){

        let addpeople = $('._54k8._52jg._56bs._26vk._56b_._3cqr._5uc2._8yo0._56bu');
        let arrayAddpeople = Array.from(addpeople);
        for (const item of arrayAddpeople) {        
             item.click()
          
        }
        
      }
        
    });
  
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
          if ( request.message === "deactive"){
    
            let addpeople = $('._54k8._52jg._56bs._26vk._56b_._3cqr._5uc2._8yo0._56bu');
            let arrayAddpeople = Array.from(addpeople);
            alert('Deactivated');
              for (const item of arrayAddpeople) {
                  item.click();
                  item.click(function(){
                  item.off("click");
                  });
                  }
            
          }
            
        });
    
       



chrome.storage.local.set({buttonsAdd:  arrayAddpeople});

let deactivate = document.querySelector('.wraper-first-div-span');
let button =  document.querySelector('.inactive');

