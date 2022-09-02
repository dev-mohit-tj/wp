self.addEventListener('push', function(e) {

    var options = {
        body: 'this is notification generated for you',
        vibrate: [100,50,100],
        data: {
            dateOfArival: Date.now(),
            primaryKey: '2',
        },
        actions: [
            { action: 'explore', title : 'explore this world'},
            { action: 'close', title: 'close this world'}, 
        ]
    }
    e.waitUntil(
    self.registration.showNotification("hii i am mohit here", options)
    );
});