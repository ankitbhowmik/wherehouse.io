const CACHE_NAME = "version-1";
const urlToCache = ['index.html', 'offline.html'];

const self = this;
//install service worker
self.addEventListener('install', event=>{
    //open the cache and add index.html and offline.html into the cache
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache=> {
            console.log("opened cache ");

            return cache.addAll(urlToCache);
        })
    )
})

//listen to request
self.addEventListener('fetch', event=>{
    //caches.match will match all the request that our page is saving
    event.respondWith(
        caches.match(event.request)
        .then(()=>{
            return fetch(event.request) //will make the request again
                    .catch(()=> caches.match('offline.html'))   //if no internet is found it will load the offline.html 
        })
    )
})

//Activate the service worker
/* 
    we don't want to store all the data in the cache
    so in activation we will remove all the previous cache
    and just keep the new one
*/
self.addEventListener('activate', event=>{
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then(cacheNames=> Promise.all(
            cacheNames.map(cachename=> {
                if(!cacheWhitelist.includes(cachename)){
                    return caches.delete(cachename);
                }
            })
        ))
    )
})
