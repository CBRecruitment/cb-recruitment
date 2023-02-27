import { useUser } from '@auth0/nextjs-auth0/client';

export default function Authtest() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return;
  }
}
