
function sendNotification (msg, body) {
    var notificacion = Notification || mozNotification || webkitNotification;

    if (body) {
        var options = {
            body : body
        }
    }
   
    
    if (typeof notificacion === 'undefined') {
        alert('Notificaciones no soportadas');
    } else {
        notificacion.requestPermission(function () {
           if (Notification.permissin === 'granted') {
              new Notification(msg, options);
           }
    });
  }
}



