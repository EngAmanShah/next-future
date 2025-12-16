# Quick Admin Fix Guide

## Current Issue
Getting "You are not an admin" error for user:
- UID: `ev1kYZvZq2RQ9AguTpFTsGhSGaD3`
- Email: `amanshah12sweer@gmail.com`

## Solution - Option 1: Use Firebase Console (Recommended)

### Step 1: Set Custom Claims via Firebase Console
1. Go to: https://console.firebase.google.com/
2. Select your project
3. Go to **Functions** in the left sidebar
4. If you don't have Cloud Functions set up, skip to **Option 2** below

### Step 2: Run this Node.js script locally

Create a file `set-admin-local.js` in your project root:

```javascript
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Download from Firebase Console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const uid = 'ev1kYZvZq2RQ9AguTpFTsGhSGaD3';

admin.auth().setCustomUserClaims(uid, { 
  admin: true,
  isAdmin: true 
})
.then(() => {
  console.log('✓ Custom claims set successfully!');
  return admin.firestore().collection('admins').doc(uid).set({
    id: uid,
    name: 'Aman Shah',
    email: 'amanshah12sweer@gmail.com',
    role: 'super',
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  });
})
.then(() => {
  console.log('✓ Admin saved to Firestore!');
  console.log('\nIMPORTANT: Sign out and sign in again to get admin access!');
  process.exit(0);
})
.catch(error => {
  console.error('Error:', error);
  process.exit(1);
});
```

Run it:
```bash
npm install firebase-admin
node set-admin-local.js
```

---

## Solution - Option 2: Use the Web Interface

1. **Start your dev server**: `npm run dev`

2. **Open browser**: Navigate to `http://localhost:3000/set-super-admin.html`

3. **Click "Set Super Admin Claims"**

4. **Wait for success message**

5. **CRITICAL - Sign Out Completely**:
   - Click Sign Out in your admin dashboard
   - Or open browser DevTools → Application → Storage → Clear site data
   
6. **Close ALL browser windows/tabs** for this site

7. **Wait 10 seconds** (important!)

8. **Open browser again**

9. **Go to**: `http://localhost:3000/en/login`

10. **Sign in** with:
    - Email: `amanshah12sweer@gmail.com`
    - Password: Your password

11. **Check admin access**: You should now be able to access admin pages

---

## Solution - Option 3: Manual Firebase Console

1. Go to: https://console.firebase.google.com/
2. Select your project
3. Go to **Firestore Database**
4. Create a collection called `admins`
5. Add a document with ID: `ev1kYZvZq2RQ9AguTpFTsGhSGaD3`
6. Add these fields:
   - `id`: `ev1kYZvZq2RQ9AguTpFTsGhSGaD3`
   - `name`: `Aman Shah`
   - `email`: `amanshah12sweer@gmail.com`
   - `role`: `super`
   - `createdAt`: (timestamp - use current time)

7. For custom claims, you MUST use Firebase Admin SDK (Option 1 or 2)

---

## Troubleshooting

### Still getting "You are not an admin"?

**Check #1**: Verify custom claims are set
```javascript
// Add this temporarily to your login page after successful login
user.getIdTokenResult().then((idTokenResult) => {
  console.log('Custom claims:', idTokenResult.claims);
  console.log('Is Admin?:', idTokenResult.claims.isAdmin);
});
```

**Check #2**: Make sure FIREBASE_SERVICE_ACCOUNT_KEY is set in `.env.local`

**Check #3**: Restart your Next.js dev server after setting env variables

**Check #4**: Clear browser cache and cookies

**Check #5**: Use Incognito/Private browsing mode to test

---

## Why is this happening?

Custom claims in Firebase are **only loaded when you sign in**, not while you're already logged in. 

The `isAdmin` claim is stored in your **JWT token** which is created at sign-in time. Changing custom claims while logged in won't affect your current session.

**You MUST sign out and sign back in** for new custom claims to take effect.
