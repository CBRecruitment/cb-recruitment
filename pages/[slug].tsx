import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../components/Blog/container';
import PostBody from '../components/Blog/post-body';
import PostHeader from '../components/Blog/post-header';
import Layout from '../components/Blog/layout';
import { getPostBySlug, getAllPosts } from '../lib/api';
import Head from 'next/head';
import markdownToHtml from '../lib/markdownToHtml';
import type PostType from '../interfaces/post';
import PostTitle from '../components/Blog/post-title';
import Nav from '../components/Navbar/Nav';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Nav />
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title}</title>
                <meta property='og:locale' content='en_US' />
                <meta property='og:type' content='article' />
                <meta property='og:image' content={post.ogImage.url} />
                <meta property='og:title' content={post.title} />
                <meta property='og:description' content={post.ogDescription} />
                <meta
                  property='og:url'
                  content={`https://cbrecruitment.com/${post.slug}/`}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'ogDescription',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
