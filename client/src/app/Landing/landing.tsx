import Title from "./title";
import Introduce from "./introduce";
import Project from "./project";

export default function landing() {
  return (
    <div className="w-full px-6 sm:px-24 max-w-6xl mx-auto">
      <div id="home">
        <Title></Title>
      </div>
      <div id="skill">
        <Introduce></Introduce>
      </div>
      <div id="project">
        <Project></Project>
      </div>
    </div>
  )
}