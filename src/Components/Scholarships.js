import React, {Component} from 'react';
import '../styles/Scholarships.css'
import Calendar from 'react-icons/lib/fa/calendar'
import Scholar from 'react-icons/lib/fa/trophy'

class Scholarships extends Component {
    render() {
        return (
            <div className="awards">
                <div className="section">
                    <span className="section-icon" style={{backgroundColor:'#ffbc41'}}><Scholar/></span>
                    <span className="section-title">Awards</span>
                </div>
                <hr/>
                <div className="scholarships">
                    <ul className="scholar-list">
                        {this.props.scholars.map((scholarship, index) => (
                            <li key={index} className="scholar-card">
                                <div className='scholar-date'>
                                    <p><Calendar/></p>
                                    <p><b>{scholarship.date}</b></p>
                                </div>
                                <div className="scholar-detail">
                                    <h4>{scholarship.title}</h4>
                                    <p><em>{scholarship.community}</em></p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Scholarships;