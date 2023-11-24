import Navbar from "./small/About/Navbar"
import Summary from "./small/About/Summary"
import Animals from "./small/About/Animals"

const About = ({mode, setMode}) => {
  return (
    <div className="">
      <Navbar mode={mode} setMode={setMode} />
      <Summary />
      <Animals />
    </div>
  );
}

export default About