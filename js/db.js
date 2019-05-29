'use strict';
if (!('indexedDB' in window)) {
  console.log('This browser doesn\'t support IndexedDB');
}


var dbReq =indexedDB.open('distraction-log');
var db;

dbReq.onupgradeneeded = (e) => {
  db = e.target.result;
  let thoughts = db.createObjectStore('thoughts');
  thoughts.createIndex('timestamp', 'timestamp', {unique: true});
};


var write = (thought) => {
  dbReq.onsuccess = (e) => {
    db = e.target.result;
    let tx = db.transaction("thoughts", "readwrite");
    let store = tx.objectStore("thoughts");
    store.add(thought, new Date().getTime()).onsuccess = () => {
      console.log("Saved thought in database");
    }
  };
};



// dbPromise.then((db) => {
//   let tx = db.transaction('thoughts', 'readwrite');
//   var store = tx.objectStore('thoughts');
//   var item = {
//     thought: 'hello',
//     created: new Date().getTime()
//   };
//   store.add(item);
//   return tx.complete;
//
// }).then(() => {
//   console.log('Added thought to the store');
// });

