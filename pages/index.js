
import {useState,useEffect} from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'
export default function Index({posts}) {

  return (
  <div>
    <Header title="Home"/>
    <main className="container max-w-3xl mx-auto px-4 mb-20">
      <h1 className="font-bold text-center mb-20 text-5xl">Welcome to Fei's Portfolio</h1>
      <div className="flex mb-40 items-end">
        <div className="mr-6">
          <h2 className="text-3xl mb-4 font-bold tracking-wider">Fei Wang</h2>
          <p className="text-xl mb-4">Hi I'm Fei, the way I study the most popular JavaScript frameworks is rewriting them by myself. Check out some of my projects for more info on them.</p>
        </div> <img className="mask mask-squircle h-48" src="https://media.graphassets.com/SddLnXkSSFGK2oMAYebQ" alt="Leanne Graham"/>
      </div>
      <div className="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52">
          {
            posts&&posts.map(({frontMatter,slug},i)=>{
                var {title,image,description,date} = frontMatter

              return (
                <div key={i} className="relative group card shadow-2xl col-span-2">

                  <Link className="h-full" href={`/projects/${slug}`}>
                  <img src={image} alt="Tribute Page" className="object-cover h-full" />
                    <div className="absolute bottom-0 left-0 right-0 lg:opacity-0 group-hover:opacity-100 bg-primary p-4 duration-300 text-primary-content">
                      <h2 className="font-bold lg:text-xl">{title}</h2>

                      <p className="text-sm lg:text-xl" dangerouslySetInnerHTML={{__html:description}}></p>
                    </div>
                  </Link>
                </div>
              )
            })
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

  var posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join("./pages",'projects', filename), 'utf-8')
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
