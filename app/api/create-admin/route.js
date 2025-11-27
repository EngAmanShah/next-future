import { authAdmin } from "@/configuration/firebase-admin";

export async function POST(req) {
  try {
    const { email, password, name } = await req.json();

    // Validate required fields
    if (!email || !password || !name) {
      return new Response(
        JSON.stringify({ error: "Email, password, and name are required" }), 
        { status: 400 }
      );
    }

    console.log("Creating admin user:", { name, email });

    // Create the user in Firebase Authentication
    const userRecord = await authAdmin.createUser({
      email,
      password,
      displayName: name,
      emailVerified: true,
    });

    console.log("User created with UID:", userRecord.uid);

    // Set custom admin claims
    await authAdmin.setCustomUserClaims(userRecord.uid, { 
      admin: true,
      isAdmin: true 
    });

    console.log("Custom claims set for user:", userRecord.uid);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: `Admin ${name} created successfully`,
        uid: userRecord.uid,
        email: email
      }),
      { 
        status: 200, 
        headers: { "Content-Type": "application/json" } 
      }
    );
  } catch (error) {
    console.error("Error creating admin:", error);
    
    return new Response(
      JSON.stringify({ 
        error: error.message,
        code: error.code || "unknown_error"
      }), 
      { 
        status: 500, 
        headers: { "Content-Type": "application/json" } 
      }
    );
  }
}