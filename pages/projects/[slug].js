import Header from "../../components/header"
import Footer from "../../components/footer"
import Note from "../../components/note"
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { useRouter } from 'next/router'


const Post = ({ frontMatter: {title,subtitle,description,image,tags,date,demo,github}, mdxSource ,slug}) => {


  return (
    <div>
      <Header title="Portfolio"/>
      <main className="container max-w-3xl mx-auto px-4 mb-20">
        <div className="flex place-content-center sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
        <img className="rounded-lg" src={image}/></div>
        <h1 className="text-4xl font-semibold mb-5">{title}</h1>
        <div className="mb-5 flex justify-between">
          <div>
            {tags.map((tag,i)=>(<span key={i} className="badge badge-primary mr-2 hover:bg-primary-focus cursor-pointer">{tag}</span>))}
          </div>
        </div>
        <div className="mb-5 prose flex prose-a:text-primary hover:prose-a:text-primary-focus">

          <a href={github}><u>Click here to see the source code in github</u></a>
        </div>
        <article className="prose prose-xl">
          <MDXRemote {...mdxSource}/>
          <Note />
        </article>
      </main>
      <Footer />
    </div>
  )
}

const getStaticPaths = async () => {
  var files = fs.readdirSync(path.join('pages/projects'))
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
  const markdownWithMeta = fs.readFileSync(path.join('pages/projects',
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
