/**
 * Created by jonlazarini on 20/05/17.
 */
import { database, messaging } from '../database/firebase';

export default function (user) {
    messaging.requestPermission()
        .then(() => messaging.getToken())
        .then((token) => {
        console.log('token in register-messaging:', token)
            database.ref('users')
                .child(user.uid)
                .child('token')
                .set(token);
            messaging.onMessage(console.log);
        })
        .catch(console.error);
}
