var chars = 'abcdefghijklmnopqrstuvwxyz';  
var pqr = chars[Math.floor(Math.random() * 26)] + Math.random().toString(36).substring(2, 8) + '.' + chars[Math.floor(Math.random() * 26)] + Math.random().toString(36).substring(2, 6) + '@paperplane.net';

module.exports = {

    command: function (emailLocator) {

       
        return this
            .setValue(emailLocator, pqr);
    }
}