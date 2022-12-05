import Header from "../../components/header"
import Footer from "../../components/footer"
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { useRouter } from 'next/router'

const Post = ({ frontMatter: {title,subtitle,description,image,tags,date}, mdxSource ,slug}) => {

  const router = useRouter()
  // const { pid } = router.query

  return (
    <div>
      <Header title="Blog"/>
      <main className="container max-w-3xl mx-auto px-4 mb-20">
        <div className="sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
          <img className="rounded-xl" src={image} alt="Cover image for Erit est pulcherrime"/></div>
        <div className="prose prose-xl font-black">
          <h1 className="text-[50px]">{title}</h1>
        </div>
        <p className="text-secondary text-xs tracking-widest font-semibold">{date}</p>
        <div className="mb-5 flex justify-between">
          <div>
            <div className="mt-5 space-x-2">
              {tags&&tags.map((tag,i)=>(<span key={i} className="badge badge-primary">{tag}</span>))}
            </div>
          </div>
        </div>
        <article div="" className="prose prose-lg">
          <MDXRemote {...mdxSource}/>
        </article>
      </main>
      <Footer />
    </div>
  )
}
const getStaticPaths = async () => {
  var files = fs.readdirSync(path.join('pages/posts'))
  files = files.filter((item,i)=>item.split(".")[1]=="mdx")
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('pages/posts',
    slug + '.mdx'), 'utf-8')

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

export { getStaticProps, getStaticPaths }
export default Post
