import Foreword from "./foreword";
import Project from "./project";

export default function landing() {
  return (
    <div className="pl-[100px] pr-[100px]">
      <div className="my-[30px]">
        <Foreword></Foreword>  
      </div>
      <div className="my-[30px]">
        <Project></Project>
      </div>
    </div>
  )
}