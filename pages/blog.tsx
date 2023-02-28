import Container from '../components/Blog/container';
import MoreStories from '../components/Blog/more-stories';
import HeroPost from '../components/Blog/hero-post';
import Intro from '../components/Blog/intro';
import Layout from '../components/Blog/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Post from '../interfaces/post';
import Nav from '../components/Navbar/Nav';

type Props = {
  allPosts: Post[];
};

export default function Blog({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <div className='bg'>
      <Nav />
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
