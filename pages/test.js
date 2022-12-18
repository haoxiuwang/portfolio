import F from "../components/f"
export default function Test() {

  return(
    <div>
      <F top="5px" left="20px">
        <div className="h-[100px] w-[100px] bg-sky-100 rounded-full">A</div>
      </F>
      <F top="25px" left="50px">
        <div className="h-[100px] w-[100px] bg-sky-100 rounded-full">B</div>
      </F>
      <F top="100px" left="20px">
        <div className="h-[100px] w-[100px] bg-sky-100 rounded-full">C</div>
      </F>
    </div>
  )
}
