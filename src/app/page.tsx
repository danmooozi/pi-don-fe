import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/options";
import Login from "@/app/login/page";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <Login />;
  }

  return (
    <div>
      <div>
        <p>Signed in as {session.user && session.user.name}</p>
        <a href="/api/auth/signout">Sign out by link</a>
      </div>
    </div>
  );
}
