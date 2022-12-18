import {useEffect,useRef} from "react"
import { useRouter } from 'next/router'
export default function F({top,left,children,to}) {
  to = to==undefined?3:to
  var p = useRef(null)
  var ch = useRef(null)
  const router = useRouter()
  useEffect(()=>{

    var x,y
    var handler = (e)=>{
      e.preventDefault()

      if(to!=2)ch.current.style.left = e.targetTouches[0].clientX-ch.current.offsetWidth/2+"px"
      if(to>0)ch.current.style.top = e.targetTouches[0].clientY-ch.current.offsetHeight/2+"px"
    }
    p.current.addEventListener("touchstart",function (e) {
      p.current.style.position = "fixed"
      p.current.addEventListener("touchmove",handler,{passive:false})
    })
    p.current.addEventListener("touchend",function (e) {
      p.current.style.position = "static"
      p.current.removeEventListener("touchmove",handler,{passive:false})
    })

  },[])
  return(
      <div ref={p} className="inset-0">
        <div style={{top,left}} className={`fixed z-50 margin-[150px]`} ref={ch} >
        {children}
        </div>
      </div>
)
}
