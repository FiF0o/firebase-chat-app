/**
 * Created by jonlazarini on 06/05/17.
 */
/**
 * **************************************************************
 *  Can also set the tokens as local shell vars -  ~/.zprofile  *
 * **************************************************************
 *
 * View your shell vars: cat ~/.zprofile
 * Edit your file: vim  ~/.zprofile
 * export YOUR_KEY_VARIABLE=<your key>
 *
 * In your project: source ~/.zprofile
 *
 * Debug
 * Make sure the env variables are in your shell, run: env
 *
 */
import firebase from 'firebase';
import {tokens} from '../config/tokens';

var config = {
    apiKey: tokens.apiKey,
    authDomain: tokens.authDomain,
    databaseURL: tokens.databaseURL,
    projectId: tokens.projectId,
    storageBucket: tokens.storageBucket,
    messagingSenderId: tokens.messagingSenderId
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
