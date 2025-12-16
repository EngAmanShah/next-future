import { authAdmin, adminDb, adminInitializedFlag } from "@/configuration/firebase-admin";

export async function POST(req) {
  try {
    if (!adminInitializedFlag || !authAdmin || !adminDb) {
      return new Response(
        JSON.stringify({ error: "Firebase Admin SDK not initialized" }), 
        { status: 500 }
      );
    }

    const { uid } = await req.json();

    if (!uid) {
      return new Response(JSON.stringify({ error: "Missing admin UID" }), {
        status: 400,
      });
    }

    console.log("Removing admin with UID:", uid);

    // Delete from Firestore first
    try {
      await adminDb.collection("admins").doc(uid).delete();
      console.log("✓ Deleted from Firestore:", uid);
    } catch (firestoreError) {
      console.error("Error deleting from Firestore:", firestoreError);
    }

    // Delete from Firebase Authentication
    try {
      await authAdmin.deleteUser(uid);
      console.log("✓ Deleted from Firebase Auth:", uid);
    } catch (authError) {
      console.error("Error deleting from Auth:", authError);
      // Continue even if auth deletion fails
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Admin removed successfully" 
      }), 
      { status: 200 }
    );
  } catch (error) {
    console.error("Error removing admin:", error);
    return new Response(
      JSON.stringify({ error: error.message }), 
      { status: 500 }
    );
  }
}