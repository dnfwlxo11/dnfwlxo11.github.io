import Foreword from "./foreword";
import Introduce from "./introduce";
import Project from "./project";

export default function landing() {
  return (
    <div className="pl-[100px] pr-[100px]">
      <Foreword></Foreword>  
      <Introduce></Introduce>
      <Project></Project>
    </div>
  )
}