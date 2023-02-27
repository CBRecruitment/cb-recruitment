import Link from 'next/link';
import Image from 'next/image';
import styles from '../Blog/CareerAdvice/CareerAdvice.module.css';
import clsx from 'clsx';

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={clsx('shadow-sm w-full', styles.card, {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
      width={1300}
      height={730}
    />
  );
  return (
    <div className='sm:mx-0'>
      {slug ? (
        <Link as={`/${slug}`} href='/[slug]' aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
