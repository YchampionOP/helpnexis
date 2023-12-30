// src/screens/signin.js
import Link from 'next/link';

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        {/* Add your sign-in form components and styling here */}
        <p>Sign-in form content goes here.</p>
        
        {/* Example Link with legacy behavior */}
        <Link href="/" passHref={true} legacyBehavior={true}>
          <a className="text-blue-500 hover:underline">Go back to Home</a>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
