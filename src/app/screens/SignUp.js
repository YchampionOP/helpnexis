// src/app/screens/SignUp.js
import Link from 'next/link';

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        {/* Add your sign-up form components and styling here */}
        <p>Sign-up form content goes here.</p>
        
        {/* Link to the home page (page.js) */}
        <Link href="/" passHref legacyBehavior>
          <a className="text-blue-500 hover:underline">Go back to Home</a>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
