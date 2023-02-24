import type Post from '../../../interfaces/post';
import CareerAdvicePosts from './CareerAdvice-Posts';
import styles from './CareerAdvice.module.css';
import clsx from 'clsx';

type Props = {
  posts: Post[];
};

const CareerAdvice = ({ posts }: Props) => {
  const FilteredPosts = posts.slice(0, 3);

  return (
    <div className='flex flex-col justify-center items-center text-[var(--darkgray)]'>
      <h1 className='Roboto mt-4 tracking-wide text-[16px] font-bold xl:text-[25px] xl:mt-8'>
        CAREER ADVICE
      </h1>
      <h2 className='w-[95%] m-auto text-center mt-3 mb-10 text-[13px] tracking-wide xl:text-[20px] xl:mb-10'>
        Short blurb about our blog posts and tips for career advice
      </h2>
      <div
        className={clsx(
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-6 md:gap-y-32 mb-16 px-6',
          styles.posts
        )}
      >
        {FilteredPosts.map((post) => (
          <CareerAdvicePosts
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        )).slice(0)}
      </div>
    </div>
  );
};

export default CareerAdvice;
