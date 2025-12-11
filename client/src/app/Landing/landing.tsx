import Title from "./title";
import Introduce from "./introduce";
import Project from "./project";

export default function landing() {
  return (
    <div className="w-full p-[0_40px] sm:p-[0_100px]">
      <Title></Title>  
      <Introduce></Introduce>
      <Project></Project>
    </div>
  )
}