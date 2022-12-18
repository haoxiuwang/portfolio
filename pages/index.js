import data from "../libs/data"
import {useState} from "react"
import F from "../components/f"
export default function Index() {
  const [id,setId] = useState(0)
  return(
    <div className="bg-slate-400">
      <div>
        <F top="0px" left="0px" to={0}>
          <div className="select-none rounded bg-slate-100 flex place-content-start place-items-center space-x-5">
            {
              data.map((item,i)=>(
                <div onClick={()=>setId(i)} className="flex-nowrap rounded-full p-2 flex flex-col place-content-start place-items-center whitespace-nowrap space-x-5" key={i}>
                    <img width="150px" src={`/assets/images/${item.cover}`}/>
                    <span>{item.name}</span>
                </div>))
            }
        </div>
        </F>
        <F top="200px" to={1} z="z-40">
          <div className=" p-[50px] flex place-content-center">
            <iframe id="iframe" frameBorder="no" border="0" marginWidth="0" marginHeight="0" width={330} height={14450} src={`https://music.163.com/outchain/player?type=4&id=${data[id].id}&auto=1&height=430&order=2`}></iframe>
          </div>
        </F>
      </div>
    </div>
  )
}
