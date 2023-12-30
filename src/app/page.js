// src/pages/index.js
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Nexis Logo */}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Innovate, Collaborate, Elevate&nbsp;
          <code className="font-mono font-bold"></code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.youtube.com/@Ychampion21"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/nexisbg.png"
              alt="Nexis"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      {/* Nexis Logo */}
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/nexisbg.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      {/* Welcome to Nexis */}
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Nexis</h1>
        <p className="text-lg mb-8">Discover a new way to study, connect, and collaborate.</p>
      </div>

      {/* Sign Up and Sign In Buttons with Routing */}
      <div className="flex space-x-4">
        <Link href="/signup" passHref legacyBehavior>
          <a className="bg-blue-500 text-white px-6 py-3 rounded-full transition-all hover:bg-blue-600">
            Sign Up
          </a>
        </Link>

        <Link href="/signin" passHref legacyBehavior>
          <a className="bg-green-500 text-white px-6 py-3 rounded-full transition-all hover:bg-green-600">
            Sign In
          </a>
        </Link>
      </div>

      {/* About Nexis */}
      <div className="grid text-center lg:max-w-5xl lg:w-full lg:grid-cols-4 lg:text-left mt-16">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-semibold mb-3">What is Nexis?</h2>
          <p className="text-lg opacity-70">
            Nexis is more than just a study platform; it's a dynamic space where students can seamlessly navigate their educational journey. With cutting-edge technology, Nexis transforms traditional learning into an engaging and personalized experience. Whether you're seeking expert assistance, collaborative study sessions, or tailored resources, Nexis empowers you to excel in your academic pursuits. Discover a new era of education with Nexis, where knowledge meets innovation.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-3xl font-semibold mb-3">About the Founders</h2>
          <p className="text-lg opacity-70">
            Nexis is founded by Yashas Gunderia and co-founded by Shlok Goenka, visionaries in the tech industry, with a passion for innovation and connectivity.
          </p>
        </div>
      </div>
    </main>
  );
};

export default HomePage;