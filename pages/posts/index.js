import Header from "../../components/header"
import Footer from "../../components/footer"
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'

export default function Posts({ posts }) {

  return(
    <div>
      <Header title="Blogs"/>
      <main className="container max-w-3xl mx-auto px-4 mb-20">
        <h1 className="text-4xl mb-10 font-extrabold">Blog posts</h1>
        {
        posts&&posts.map(({frontMatter,slug}, index)=>{
          const {title,subtitle,date,description,image,tags} = frontMatter
          return (

              <div key={index} className="card text-center shadow-2xl mb-20">
                <figure className="">
                  <img className="" src={image} alt="Cover image for Erit est pulcherrime" />
                </figure>
                <div className="card-body prose space-y-4">
                  <h2 className="font-black text-[24px]">{title}</h2>
                  <h2 className="font-black text-[24px]" id="ultra-hic-quondam-cephalus">{subtitle}</h2>
                  <p className="" dangerouslySetInnerHTML={{__html:description}}>

                  </p>
                  <div className="flex justify-center mt-5 space-x-2 text-primary-content">
                    <strong className="">
                    {tags&&tags.map((tag,i)=>(<span key={i} className="badge badge-primary">{tag}</span>))}
                    </strong>
                  </div>
                  <strong>
                    <div className="justify-center card-actions"><Link href={`posts/${slug}`} className="btn btn-outline btn-primary">Read ⇒</Link>
                    </div>
                  </strong>
                </div><strong>
                </strong>
              </div>
            )
        })
        }
      </main>
      <Footer />
    </div>
  )
}
export const getStaticProps = async () => {

  var files = fs.readdirSync(path.join("./","pages/posts"))
  console.log({files});
  files = files.filter((item,i)=>item.split(".")[1]=="mdx")

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join("./pages",'posts', filename), 'utf-8')
    const {data:frontMatter} = matter(markdownWithMeta)
    console.log({frontMatter});
    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })
  console.log({posts});
  return {
    props: {
      posts
    }
  }
}
