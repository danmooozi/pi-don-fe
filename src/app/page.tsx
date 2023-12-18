import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]/options';
import Loading from '@/app/loading/page';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <Loading />;
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
