const admin = require('firebase-admin');
const serviceAccount = require('../path/to/your-firebase-admin-sdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
