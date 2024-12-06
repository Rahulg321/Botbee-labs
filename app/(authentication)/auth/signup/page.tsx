import { Metadata } from "next";
import Link from "next/link";
import GoogleSignInButton from "@/components/GoogleSignInButton";

export const metadata: Metadata = {
  title: "Sign Up | Botbee Labs",
  description: "Create your Botbee Labs account",
};

export default function SignUpPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Create your Botbee Labs account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Start your journey with Botbee Labs
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <GoogleSignInButton text="Sign up with Google" />
          <div className="text-center text-sm">
            <Link
              href="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Already have an account? Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
