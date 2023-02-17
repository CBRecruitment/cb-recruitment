import Avatar from '../Blog/avatar';
import DateFormatter from '../Blog/date-formatter';
import CoverImage from '../Blog/cover-image';
import Link from 'next/link';
import type Author from '../../interfaces/author';

type Props = {
    title: string;
    coverImage: string;
    date: string;
    excerpt: string;
    author: Author;
    slug: string;
};

const PostPreview = ({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
}: Props) => {
    return (
        <div>
            <div className='mb-5'>
                <CoverImage slug={slug} title={title} src={coverImage} />
            </div>
            <h3 className='text-4xl mb-3 leading-snug'>
                <Link
                    as={`/${slug}`}
                    href='/[slug]'
                    className='hover:underline'
                >
                    {title}
                </Link>
            </h3>
            <div className='text-lg mb-4'>
                <DateFormatter dateString={date} />
            </div>
            <p className='text-md leading-relaxed mb-4 bg-[var(--orange)] w-fit py-1 px-3 rounded-full'>
                {excerpt}
            </p>
            <Avatar name={author.name} picture={author.picture} />
        </div>
    );
};

export default PostPreview;
