import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0/client';
import Nav from '../components/Navbar/Nav';
import Footer from '../components/General/Footer/Footer';

export default function Profile() {
  const { user, error, isLoading } = useUser();

  return (
    <div className='flex flex-col h-screen'>
      <Nav />
      <main className='flex-grow h-full bg-[var(--cream)]'>
        <div className='flex flex-col h-32 relative w-72 border-[1px] border-black ml-14 mt-12 rounded-lg'>
          <section className='border-b-[1px] border-black flex justify-center'>
            <h1 className='text-xl font-bold'>About you</h1>
          </section>
          <section className='p-2 space-y-1 my-auto'>
            <p className='font-bold'>{user?.name}</p>
            <p>{user?.email}</p>
            <img
              src={user?.picture}
              alt={`Profile picture of ${user?.name}`}
              className='rounded-full absolute right-4 bottom-4'
              width={60}
            />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
