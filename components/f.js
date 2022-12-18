import {useEffect,useRef} from "react"
import { useRouter } from 'next/router'
export default function F({top,left,children,to,z}) {
  top = top==undefined?"0px":top
  left = left==undefined?"0px":left
  var p = useRef(null)
  var ch = useRef(null)
  const router = useRouter()
  useEffect(()=>{

    var x,y
    var handler = (e)=>{
      e.preventDefault()
      e.targetTouches[0].clientX-ch.c.cx+"px"
      if(to>0)ch.current.style.top = e.targetTouches[0].clientY-ch.c.cy+"px"
      if(to!=1)ch.current.style.left = e.targetTouches[0].clientX-ch.c.cx+"px"
    }
    p.current.addEventListener("touchstart",function (e) {
      var cx = e.targetTouches[0].clientX-ch.current.offsetLeft
      var cy = e.targetTouches[0].clientY-ch.current.offsetTop
      ch.c = {cx,cy}
      p.current.style.position = "fixed"
      p.current.addEventListener("touchmove",handler,{passive:false})
    })
    p.current.addEventListener("touchend",function (e) {
      p.current.style.position = "static"
      p.current.removeEventListener("touchmove",handler,{passive:false})
    })

  },[])
  return(
      <div ref={p} className="inset-0 ${z?z:"z-50"}">
        <div style={{top,left}} className={`fixed ${z?z:"z-50"} margin-[150px]`} ref={ch} >
        {children}
        </div>
      </div>
)
}
