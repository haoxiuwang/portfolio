import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
export default function Portfolio() {
  return(
    <div className="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52">
        {
          posts&&posts.map(({frontMatter,slug},i)=>{
              var {title,image,description,date} = frontMatter

            return (
              <div key={i} className="relative group card shadow-2xl col-span-2">
                <img src={image} alt="Tribute Page" className="object-cover h-full" />
                <Link href={`/projects/${slug}`}>
                  <div className="absolute bottom-0 left-0 right-0 lg:opacity-0 group-hover:opacity-100 bg-primary p-4 duration-300 text-primary-content">
                    <h2 className="font-bold lg:text-xl">{title}</h2>
                    <p className="text-sm lg:text-xl">{date}</p>
                    <p className="text-sm lg:text-xl">{description}</p>
                  </div>
                </Link>
              </div>
            )
          })
        }
    </div>
  )
}
export const getStaticProps = async () => {
  var fs = require('fs')
  var files = fs.readdirSync(path.join(process.cwd(),"pages/projects"))

  files = files.filter((item,i)=>item.split(".")[1]=="mdx")

  var posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join(process.cwd(),"pages",'projects', filename), 'utf-8')
    const {data:frontMatter} = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })
  posts.sort((a,b)=>new Date(a.frontMatter.date).getTime()-new Date(b.frontMatter.date).getTime())

  return {
    props: {
      posts
    }
  }
}
