import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  // Get user session token
  const session = await getServerSession(authOptions);
  // session = null || { user: { name, email, image } }

  return (
    <div>
      {session ? (
        <div>
          <p>Signed in as {session.user && session.user.name}</p>
          <a href="/api/auth/signout">Sign out by link</a>
        </div>
      ) : (
        <a href="/api/auth/signin">Sign in</a>
      )}
    </div>
  );
}
