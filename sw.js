self.addEventListener('push', function(e) {

    var options = {
        body: 'this is notification generated for you',
        image: "https://media-exp1.licdn.com/dms/image/C5603AQGeLYdqFSPgGQ/profile-displayphoto-shrink_800_800/0/1616413983355?e=2147483647&v=beta&t=egTafUuzkeMApWlRv9l7P5tb-K-8jALz77FEv06PZww",
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
    self.registration.showNotification("bolo kon hu me bolo bolo kon hu me", options)
    );
});