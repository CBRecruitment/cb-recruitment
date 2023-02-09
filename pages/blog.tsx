import Container from '../components/blog/container';
import MoreStories from '../components/blog/more-stories';
import HeroPost from '../components/blog/hero-post';
import Intro from '../components/blog/intro';
import Layout from '../components/blog/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import Post from '../interfaces/post';
import Navbar from '../components/Navbar';

type Props = {
    allPosts: Post[];
};

export default function Blog({ allPosts }: Props) {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);
    return (
        <div className='bg-[var(--cream)]'>
            <Navbar />
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
}

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
