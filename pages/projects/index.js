import Header from "../../components/header"
import Footer from "../../components/footer"

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'
export default function Portfolio({posts}) {
  console.log({posts});
  return(
    <div>
      <Header title="Portfolios"/>
      <main className="container max-w-3xl mx-auto px-4 mb-20">
        <h1 className="font-bold mb-20 text-center text-5xl">Recent Projects by Me
        </h1>
        <div className="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52">
          {
            posts&&posts.map(({frontMatter,slug}, index)=>{
              const {title,subtitle,date,description,image,tags} = frontMatter
              return(
                 <div key={index} className="relative group card shadow-2xl col-span-2">
                  <img src={image} alt="JavaScript Calculator" className="object-cover h-full" />
                  <Link href={`projects/${slug}`}>
                    <div className="absolute bottom-0 left-0 right-0 lg:opacity-0 group-hover:opacity-100 bg-primary p-4 duration-300 text-primary-content">
                      <h2 className="font-bold lg:text-xl">
                        {title}
                      </h2>
                      <p className="text-sm lg:text-xl">
                      {description}
                      </p>
                    </div>
                  </Link>
                </div>
              )
            }
          )
          }

        </div>
      </main>
      <Footer />
    </div>
  )
}
export const getStaticProps = async () => {

  var files = fs.readdirSync(path.join("./","pages/projects"))

  files = files.filter((item,i)=>item.split(".")[1]=="mdx")

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join("./pages",'projects', filename), 'utf-8')
    const {data:frontMatter} = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  return {
    props: {
      posts
    }
  }
}
