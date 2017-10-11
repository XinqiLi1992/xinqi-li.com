import React, {Component} from 'react';
import '../styles/Education.css';
import Calendar from 'react-icons/lib/fa/calendar';
import Cap from 'react-icons/lib/fa/graduation-cap';
import EducationModal from '../Components/EducationModal'
import Info from 'react-icons/lib/fa/info';

class Education extends Component {

    state = {
        isShow: false,
        target: {}
    }

    showModal = (edu) => {
        this.setState((state) => ({
            isShow: true,
            target: edu ? edu : {}
        }))
    };

    hideModal = () => {
        this.setState((state) => ({
            isShow: false,
            target: {}
        }))
    }

    render() {
        return (
            <div className="education">
                <div className="section">
                    <span className="section-icon" style={{backgroundColor:'#8672ff'}}><Cap/></span>
                    <span className="section-title">Education</span>
                </div>
                <hr/>
                <ul className="education-list">
                    {this.props.educations.map((edu, index) => (
                        <li key={index}>
                            <div className="education-detail">
                                <div className="education-head">
                                    <h3>{edu.degree}</h3>
                                    <p>{edu.university}</p>
                                    <div className="education-date">
                                        <p><Calendar/></p>
                                        <p><b>{edu.date}</b></p>

                                    </div>
                                    <div className="edu-more" onClick={() => this.showModal(edu)}><p><Info/></p></div>
                                </div>

                            </div>

                        </li>
                    ))}
                </ul>
                {this.state.isShow ? (<EducationModal eduInfo={this.state.target} onHideModal={this.hideModal}/>
                ):(<div></div>)
                }
            </div>
        );
    }
}

export default Education;