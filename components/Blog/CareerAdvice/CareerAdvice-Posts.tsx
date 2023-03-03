import Link from 'next/link';
import type Author from '../../../interfaces/author';
import DateFormatter from '../date-formatter';
import CareerAdviceCover from './CareerAdvice-Cover';
import styles from './CareerAdvice.module.css';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const CareerAdvicePosts = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div className={styles.card}>
      <div className='mb-3'>
        <CareerAdviceCover slug={slug} title={title} src={coverImage} />
      </div>
      <div className='p-2 xl:p-4'>
        <h3 className='text-[10px] xl:text-[17px] font-bold mb-3 xl:mb-6 leading-snug flex justify-center text-center'>
          <Link as={`/${slug}`} href='/[slug]' className='hover:underline'>
            {title}
          </Link>
        </h3>
        <div className='text-[10px] xl:text-[12px] flex justify-between w-[95%] m-auto'>
          <p>Jan Barley</p>
          <DateFormatter dateString={date} />
          <p className='text-[10px] xl:text-[12px] leading-relaxed mb-4 bg-[var(--orange)] w-fit px-3 rounded-full'>
            {excerpt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerAdvicePosts;
