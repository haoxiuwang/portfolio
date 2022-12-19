import data from "../libs/data"
import {useState} from "react"
import F from "../components/f"
export default function Index() {
  //  <iframe id="iframe" frameBorder="no" border="0" marginWidth="0" marginHeight="0" width={330} height={14450} src={`https://music.163.com/outchain/player?type=4&id=${data[id].id}&auto=1&height=430&order=4`}></iframe>

  const [id,setId] = useState(0)


  var _html = `<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width="330" height="450" src="//music.163.com/outchain/player?type=4&amp;id=${data[id].id}&amp;auto=1&amp;height=430&amp;bg=e8e8e8"></iframe>`
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

          <div className="fixed inset-x-0 bottom-5" dangerouslySetInnerHTML = {{__html:_html}} className=" p-[50px] flex place-content-center">

          </div>

      </div>
    </div>
  )
}
