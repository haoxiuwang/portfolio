import Link from "next/link"
import Head from 'next/head'
import {useState,useEffect} from "react"
export default function Header({title}) {
  var default_theme = "valentine"
  const [theme,setTheme] = useState(null)
  var themes = [
    "Aqua",
    "Black",
    "Bumblebee",
    "Corporate",
    "Cupcake",
    "Cyberpunk",
    "Dark",
    "Dracula",
    "Emerald",
    "Fantasy",
    "Forest",
    "Garden",
    "Halloween",
    "Light",
    "Lofi",
    "Luxury",
    "Pastel",
    "Retro",
    "Synthwave",
    "Valentine",
    "Wireframe"
]

  useEffect(()=>{
    if(!theme)return
    localStorage.setItem("theme",theme)
    var html = document.documentElement
    html.dataset["theme"] = theme
  },[theme])

  useEffect(()=>{
    var _theme = localStorage.getItem("theme")
    if (_theme!=null) {
      console.log({_theme});
      setTheme(_theme)
      return
    }
    setTheme("bumblebee")
  },[])

  return (
    <div className="navbar mb-16 flex place-content-between place-items-center p-4 shadow-lg bg-neutral text-neutral-content sticky top-0 z-10">
      <Head>
        <title>{title}</title>
        <link href="/assets/images/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png"/>
        <link href="/static/favicon/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex-1 px-2 mx-2">
        <Link className="text-lg font-bold" href="/">Fei's Portfolio
        </Link>
      </div>
      <div className="">
        <div className="flex place-content-center">
          <select onChange={(e)=>{
            e.preventDefault()
            setTheme(e.target.value)

            return false
          }} data-choose-theme="" className="pr-9 select select-bordered select-primary  bg-base-100 select-xs text-base-content">
            <option disabled="" value="Choose a theme">Choose a theme
            </option>
            <option value="aqua">Aqua
            </option>
            <option value="black">Black
            </option>
            <option value="bumblebee">Bumblebee
            </option>
            <option value="corporate">Corporate
            </option>
            <option value="cupcake">Cupcake
            </option>
            <option value="cyberpunk">Cyberpunk
            </option>
            <option value="dark">Dark
            </option>
            <option value="dracula">Dracula
            </option>
            <option value="emerald">Emerald
            </option>
            <option value="fantasy">Fantasy
            </option>
            <option value="forest">Forest
            </option>
            <option value="garden">Garden
            </option>
            <option value="halloween">Halloween
            </option>
            <option value="light">Light
            </option>
            <option value="lofi">Lofi
            </option>
            <option value="luxury">Luxury
            </option>
            <option value="pastel">Pastel
            </option>
            <option value="retro">Retro
            </option>
            <option value="synthwave">Synthwave
            </option>
            <option value="valentine">Valentine
            </option>
            <option value="wireframe">Wireframe
            </option>
          </select>
        </div>
      </div>
    </div>
  )
}
