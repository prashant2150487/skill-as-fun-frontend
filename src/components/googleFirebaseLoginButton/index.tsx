import { auth, googleProvider } from "@/config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";

const GoogleLoginButton = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const res = await signInWithPopup(auth, googleProvider);
      console.log("Google sign-in result:", res);
      const user = res.user;
    console.log("Logged in user:", user);
    } catch (error: any) {
      alert(error.message);
    } finally {   
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      disabled={loading}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 16px",
        borderRadius: "8px",
        border: "1px solid #ddd",
        backgroundColor: "#fff",
        cursor: "pointer",
        fontWeight: 500,
        width:"100%",
        justifyContent:'center'
      }}
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="google"
        width="20"
      />
      {loading ? "Signing in..." : "Continue with Google"}
    </button>
  );
};

export default GoogleLoginButton;
