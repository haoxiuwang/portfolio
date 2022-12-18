import {useEffect,useState} from "react"
var timer
export default function Timer() {
  const [ count, setCount ] = useState(0)
  useEffect(() => {
   clearInterval(timer)
   timer = setInterval(() => {
      if (count === 100) {
         clearInterval(timer)
         return
       }
      setCount(prev => prev+1)

   },1000)

   return () => clearInterval(timer)
  },[count])

  return (<div>{count}</div>)
}
