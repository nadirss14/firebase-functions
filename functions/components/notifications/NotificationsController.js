const { Notificaciones } = require("./Notifications.js");

exports.creacionTokenController = dataSnapshot => {
  const notifications = new Notificaciones();

  return notifications.enviarNotificacionAToken(dataSnapshot.data().token);
};
