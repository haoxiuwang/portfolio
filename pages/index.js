import data from "../libs/data"
import {useState} from "react"
import F from "../components/f"
export default function Index() {
  //  <iframe id="iframe" frameBorder="no" border="0" marginWidth="0" marginHeight="0" width={330} height={14450} src={`https://music.163.com/outchain/player?type=4&id=${data[id].id}&auto=1&height=430&order=4`}></iframe>

  const [id,setId] = useState(0)
  return(
    <div className="bg-slate-400 fixed inset-0">
      <div>
        <F top="0px" left="0px" to={0} z="z-50">
          <div className="p-2 select-none rounded bg-slate-100 flex place-content-center place-items-center space-x-5">
            {
              data.map((item,i)=>(
                <div onTouchEnd={()=>setId(i)} className={`${id==i?"bg-slate-400":""} flex-nowrap p-2 flex flex-col place-content-center place-items-center whitespace-nowrap`} key={i}>
                    <img width="150px" src={`/assets/images/${item.cover}`}/>
                    <span>{item.name}</span>
                </div>))
            }
        </div>
        </F>
        <F top="200px" to={1} z="z-10">
          <div className=" p-[50px] flex place-content-center">
            <iframe className="w-full" id="iframe" frameBorder="no" border="0" marginWidth="0" marginHeight="0" width={330} height={400} src={`https://music.163.com/#/djradio?id=${data[id].id}&order=2&_hash=programlist&limit=500`}></iframe>

          </div>
        </F>
      </div>
    </div>
  )
}
