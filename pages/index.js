import data from "../libs/data"
import {useState,useRef} from "react"
import F from "../components/f"
export default function Index() {
  //  <iframe id="iframe" frameBorder="no" border="0" marginWidth="0" marginHeight="0" width={330} height={14450} src={`https://music.163.com/outchain/player?type=4&id=${data[id].id}&auto=1&height=430&order=4`}></iframe>

  const [id,setId] = useState(0)
  const [index,setIndex] = useState(0)
  const player = useRef(null)
  var _g = Math.ceil(data[id].count/10)
  console.log({_g});
  var g = 0
  var arr = []
  while (g<_g) {
    arr[g] = ++g
  }
  var _html = `<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width="330" height="14500" src="//music.163.com/outchain/player?type=4&amp;id=${data[id].id}&amp;auto=1&amp;height=430&amp;bg=e8e8e8"></iframe>`
  return(
    <div className="fixed inset-0">

    <div className="overflow-x-scroll relative z-50 p-2 select-none rounded bg-slate-100 flex place-content-center place-items-center space-x-5">
      {
        data.map((item,i)=>(
          <div onClick={()=>setId(i)} className={`${id==i?"bg-slate-400":""} flex-nowrap p-2 flex flex-col place-content-center place-items-center whitespace-nowrap`} key={i}>
              <img width="150px" src={`/assets/images/${item.cover}`}/>
              <span>{item.name}</span>
          </div>))
      }
      </div>
        <div className="ml-2 relative z-40 mt-5 grid grid-cols-[20px_1fr] gap-2">

            <div className="bg-rose-200 mx-2 mt-5 h-[300px]">
              {arr.map((item,i)=>(
                <div onClick={()=>{
                    player.current.style.marginTop = -1*(_g-item)*300+20+"px"
                    setIndex(i)
                  }
              } style={{height:300/_g+"px"}} className={`${i<index?"bg-rose-400":""}`} key={i}></div>))}
            </div>

          <div ref={player} dangerouslySetInnerHTML = {{__html:_html}} className="">

          </div>
        </div>
      </div>

  )
}
