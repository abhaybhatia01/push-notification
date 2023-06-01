const admin = require("firebase-admin");
const fcm = require("fcm-notification") ;
const serviceAccount = require("../config/push-notification-key.json"); 
const certPath = admin.credential.cert (serviceAccount);
const FCM = new fcm(certPath);

exports.sendPushNotification = (req, res, next) => {
    try {
        let message = {
            notification: {
                title: "Test Notification", 
                body: "Notification Message"
            },
            data: {
                orderId: "123456",
                orderDate: "2022-10-28"
            },
            token: req.body.fcm_token,
        };

        FCM.send(message, function(err, resp) {
            if(err){
                return res.status(500).send({ message: err });
            }
            else{
                return res.status(200).send({ message: "Notification Sent"});
            }
        });
    }catch(err){
        throw err;
    }
};