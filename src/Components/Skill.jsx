import Skill1 from './Skill1'
import "./css/Skill.css";
import url from "./img/bootstrap.svg"
import git from "./img/github.svg"
import javascript from "./img/javascript.svg"

function Skill() {
    return (
        <div className="skills" id="skills">
             
                <h1>Skills</h1>
                <h2>Web Developent</h2>
           
            <div className="skillsGrid">
             
                <Skill1 source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="The logo icon for react" title="React"/>
                <Skill1 source="https://icongr.am/devicon/nodejs-original-wordmark.svg?size=119&color=000000" alt="The logo icon for TailwindCSS" title="Twilwind CSS"/>
                <Skill1 source="https://icongr.am/devicon/mongodb-original-wordmark.svg?size=119&color=ffffff" alt="The logo icon for NodeJS" title="Node JS"/>
                <Skill1 source={url} alt="The logo icon for NodeJS" title="Node JS"/>
                <Skill1 source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="The logo icon for HTML 5" title="HTML 5"/>
                <Skill1 source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="The logo icon for CSS3" title="CSS 3"/>
                <Skill1 source={git} alt="The logo icon for GitHub" title="GitHub"/>
                <Skill1 source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="The logo icon for NPM" title="NPM"/>
                <Skill1 source="https://icongr.am/devicon/python-plain-wordmark.svg?size=119&color=ffffff" alt="The logo icon for NodeJS" title="Node JS"/>
                <Skill1 source="https://icongr.am/devicon/visualstudio-plain-wordmark.svg?size=300&color=ffffff" alt="The logo icon for NodeJS" title="Node JS"/>
                <Skill1 source={javascript} alt="The logo icon for NodeJS" title="Node JS"/>
                <Skill1 source="https://img.icons8.com/color/48/null/tailwind_css.png" alt="The logo icon for NodeJS" title="Node JS"/>
            </div>            
        </div>
    )
}
export default Skill