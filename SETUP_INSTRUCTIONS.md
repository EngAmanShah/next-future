# Next Future Tech - Setup Instructions

## Super Admin Configuration

### Step 1: Create Super Admin in Firebase Console

1. Go to Firebase Console → Authentication
2. Add a new user manually with:
   - Email: `admin@nextfuturetech.net` (or your preferred email)
   - Password: Create a strong password
3. Copy the UID of this user

### Step 2: Set Custom Claims for Super Admin

Run this in Firebase Console Functions or use the Firebase Admin SDK:

```javascript
const admin = require('firebase-admin');

// Initialize Firebase Admin (if not already)
admin.initializeApp();

const uid = 'YOUR_COPIED_UID'; // Replace with the UID from step 1

admin.auth().setCustomUserClaims(uid, { isAdmin: true })
  .then(() => {
    console.log('Custom claims set successfully');
    
    // Also add to Firestore
    return admin.firestore().collection('admins').doc(uid).set({
      name: 'Super Admin',
      email: 'admin@nextfuturetech.net',
      role: 'super',
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });
  })
  .then(() => {
    console.log('Super admin added to Firestore');
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### Step 3: Update Environment Variables

Create or update `.env.local` file:

```env
# Firebase Client Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

# Firebase Admin SDK (Download from Firebase Console → Project Settings → Service Accounts)
FIREBASE_SERVICE_ACCOUNT_KEY='{"type":"service_account","project_id":"your-project","private_key_id":"...","private_key":"-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----\\n","client_email":"..."}'

# Vercel Blob Storage
VERCEL_BLOB_TOKEN=your-vercel-blob-token

# Super Admin Configuration
SUPER_ADMIN_UID=YOUR_COPIED_UID
SUPER_ADMIN_EMAIL=admin@nextfuturetech.net
```

### Step 4: Update Primary Admin UID in Code

In `app/[lang]/admin/admins/page.jsx`, update line 13:

```javascript
const PRIMARY_ADMIN_UID = "YOUR_COPIED_UID"; // Replace with your super admin UID
```

## Admin System Features

### Super Admin (★)
- **Login**: Uses email/password set in Firebase
- **Permissions**: 
  - Create sub-admins
  - Remove sub-admins
  - Full access to all admin features
  - Cannot be removed from the system
- **Visual Indicator**: Gold star (★) and yellow highlight in admin list

### Sub-Admins
- **Created by**: Super Admin only
- **Permissions**:
  - Manage products, categories, articles
  - View contacts
  - Cannot create or remove other admins
- **Limitations**: Cannot access certain admin management features

## Website Optimization

### Current Optimizations Applied:

1. **Typography System**
   - Consistent font sizing: h2 (1.1-1.3rem), p (0.85-0.95rem)
   - Single font family (Somar) across entire site
   - Responsive with clamp() for all screen sizes

2. **SEO Enhancements**
   - Meta tags (title, description, keywords)
   - Open Graph tags for social sharing
   - Twitter Card integration
   - Structured data (JSON-LD) for search engines
   - Canonical URLs and language alternates

3. **Performance**
   - Font display: swap for faster rendering
   - Proper image lazy loading
   - Optimized component rendering

4. **Accessibility**
   - RTL support for Arabic
   - Semantic HTML structure
   - Proper heading hierarchy

### Contact Form Working Properly
- Form submits to Firestore `contacts` collection
- Real-time updates in admin dashboard
- Unread message counter
- Timestamp tracking

### Call to Actions (CTAs)
- "Get Free Consultation" button on hero
- Contact form on contact page
- WhatsApp button (floating)
- Service-specific CTAs

## Troubleshooting

### "No Admins" Issue
**Cause**: Missing `FIREBASE_SERVICE_ACCOUNT_KEY` environment variable

**Solution**:
1. Go to Firebase Console → Project Settings → Service Accounts
2. Click "Generate New Private Key"
3. Copy the entire JSON content
4. Stringify it and add to `.env.local`:
   ```
   FIREBASE_SERVICE_ACCOUNT_KEY='{"type":"service_account",...}'
   ```
5. Restart development server: `npm run dev`

### Contact Form Not Showing Data
**Cause**: Firestore permissions or missing Firebase initialization

**Solution**:
1. Check Firestore Rules (should allow authenticated reads)
2. Verify Firebase config in `.env.local`
3. Check browser console for errors

### Articles Not Uploading
**Cause**: Missing `VERCEL_BLOB_TOKEN`

**Solution**:
1. Create a Vercel account
2. Generate a Blob storage token
3. Add to `.env.local`

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Security Notes

- Never commit `.env.local` to version control
- Keep Firebase service account key secure
- Use strong passwords for super admin
- Regularly review admin access logs
- Update Firebase security rules for production

## Support

For issues or questions, contact the development team or refer to:
- Firebase Documentation: https://firebase.google.com/docs
- Next.js Documentation: https://nextjs.org/docs
