var value = "Hello world";

// chrome.storage.sync.set({key: value}, function() {
//     console.log('Value is set to ' + value);
// });

// chrome.storage.sync.get(['key'], function(result) {
//     console.log('Value currently is ' + result.key);
// });


localStorage.setItem('myCat', 'Tom');

var cat = localStorage.getItem('myCat');

console.log(cat)

