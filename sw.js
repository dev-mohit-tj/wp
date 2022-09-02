self.addEventListener('push', ()=> {
    self.registration.sendNotification('helo here', {})
});