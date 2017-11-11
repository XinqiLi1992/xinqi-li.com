import React, {Component} from 'react';
import '../styles/Skills.css';
import Skill from 'react-icons/lib/fa/wrench';
import More from 'react-icons/lib/fa/plus';
// let movement;
class Skills extends Component {

    showLevel(e, section) {
        let skills = e.currentTarget.previousSibling.childNodes;
        if(skills[0].style.display === 'block') {
            for(let i=0; i < skills.length; i++) {
                skills[i].style.display = 'inline-block';
                skills[i].style.width = '45%';
                skills[i].childNodes[0].childNodes[1].style.opacity = 0;
                // e.currentTarget.childNodes[0].appendChild();
            }
        } else {
            for(let i=0; i < skills.length; i++) {
                skills[i].style.display = 'block';
                let values = section.value;
                // skills[i].style.width = Object.values(values)[i];
                skills[i].style.width = Object.keys(values).map((key) => values[key])[i];
                skills[i].childNodes[0].childNodes[1].style.opacity = 1;
                // e.currentTarget.childNodes[0].appendChild();
            }
        }
    }


    render() {
        return (
            <div className="skills">
                <div className="section">
                    <span className="section-icon" style={{backgroundColor:'#02bf61'}}><Skill/></span>
                    <span className="section-title">Skills</span>
                </div>
                <hr/>
                <ul className="skills-list">
                    {this.props.skills.map((section, index) => (
                        <li key={index} className="skill-item">
                            <div className="skill-card">
                                <h4>{section.title}</h4>
                                <ul className="skillList">
                                        {Object.keys(section.value).map((item, index) => (

                                            <li key={index}>
                                                <div  className="skill-block">
                                                    <p>{item}</p>
                                                    <p className="level">{section.value[item]}</p>
                                                </div>
                                            </li>
                                        ))}
                                </ul>
                                <div className="skill-more" onClick={(e) => this.showLevel(e, section)}>
                                    <p><More/></p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Skills;
