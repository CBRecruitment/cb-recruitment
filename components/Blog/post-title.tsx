import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className='pt-5 text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-10 text-center md:text-left'>
      {children}
    </h1>
  );
};

export default PostTitle;
