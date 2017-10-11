import React, {Component} from 'react';
import '../styles/Volunteering.css'
import Calendar from 'react-icons/lib/fa/calendar';
import Volunteer from 'react-icons/lib/fa/group'

class Volunteering extends Component {
    render() {
        return (
            <div className="volunteering">
                <div className="section">
                    <span className="section-icon" style={{backgroundColor:'#00f8ff'}}><Volunteer/></span>
                    <span className="section-title">Volunteering</span>
                </div>
                <hr/>
                <div className="volunteers">
                    <ul className="volunteer-list">
                        {this.props.volunteers.map ((volunteer, index) => (
                            <li key={index}>
                                <div className="volunteer-card">
                                    <div className="volunteer-date">
                                        <p><Calendar/></p>
                                        <p><b>{volunteer.date}</b></p>
                                    </div>
                                    <div className="volunteer-detail">
                                        <div className="volunteer-title">
                                            <h4>{volunteer.title}</h4>
                                            <p><em>{volunteer.community}</em></p>
                                        </div>
                                        <div>
                                            <ul className="job-list">
                                                {volunteer.jobs.map((job) => (
                                                    <li key={job} className="job">
                                                        <p>- {job}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        );
    }
}

export default Volunteering;