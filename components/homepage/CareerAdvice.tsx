import Head from 'next/head';
import MoreStories from '../blog/more-stories';
import HeroPost from '../blog/hero-post';
import Post from '../../interfaces/post';
import Container from '../blog/container';
import Intro from '../blog/intro';
import Layout from '../blog/layout';
import { getAllPosts } from '../../lib/api';

type Props = {
    allPosts: Post[];
};

const CareerAdvice = ({ allPosts }: Props) => {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);
    return (
        <div className='bg-[var(--cream)]'>
            <Layout>
                <Head>
                    <title>{`Read Up-To-Date Content on Everything Crypto`}</title>
                </Head>
                <Container>
                    <Intro />
                    {heroPost && (
                        <HeroPost
                            title={heroPost.title}
                            coverImage={heroPost.coverImage}
                            date={heroPost.date}
                            author={heroPost.author}
                            slug={heroPost.slug}
                            excerpt={heroPost.excerpt}
                        />
                    )}
                    {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                </Container>
            </Layout>
        </div>
    );
};

export default CareerAdvice;

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
    ]);

    return {
        props: { allPosts },
    };
};
