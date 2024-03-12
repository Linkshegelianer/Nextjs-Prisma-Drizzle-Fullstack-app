import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from '@fortawesome/free-brands-svg-icons'


export default async function Home() {
  noStore();
  const session = await getServerAuthSession();

  return (
      <main
          className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#f7f0c8] to-[#fad2ef]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <div className="bg-white/50 backdrop-blur-lg p-4 rounded-lg">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem] text-red-300">
              TODO example app
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-white bg-opacity-50 p-4 hover:bg-opacity-20"
                href="https://create.t3.gg/en/usage/first-steps"
                target="_blank"
            >
              <h3 className="text-2xl font-bold text-red-200">List all tasks</h3>
            </Link>
            <Link
                className="flex max-w-xs flex-col gap-flex-col rounded-xl bg-white bg-opacity-50 p-4 hover:bg-opacity-20"
                href="https://streetcat.wiki/index.php/Main_Page"
                target="_blank"
            >
              <h3 className="text-2xl font-bold text-red-200">List all users</h3>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-center text-2xl text-white">
                {session && <span>Logged in as {session.user?.name}</span>}
              </p>
              <Link
                  href={session ? "/api/auth/signout" : "/api/auth/signin"}
                  className="text-red-300 rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              >
                {session ? "Sign out" : "Sign in"}
              </Link>
            </div>
          </div>
          <div className="basement flex max-w-xs gap-4 text-white">
            <FontAwesomeIcon icon={faGithub}/>
            <Link
                href="https://github.com/Linkshegelianer/nextjs-todo-fullstack-app"
                target="_blank"
                // style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
            >
              See source code
            </Link>
          </div>
        </div>
      </main>
  );
}

