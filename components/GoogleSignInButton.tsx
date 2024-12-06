"use client";

import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

interface GoogleSignInButtonProps {
  text: string;
}

const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({ text }) => {
  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic here
    console.log("Google Sign-In clicked");
  };

  return (
    <Button variant="outline" onClick={handleGoogleSignIn} className="w-full">
      <FcGoogle className="mr-2 h-4 w-4" />
      {text}
    </Button>
  );
};

export default GoogleSignInButton;
