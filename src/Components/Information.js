import React, {Component} from 'react';
import '../styles/Information.css';
import Phone from 'react-icons/lib/fa/phone';
import Email from 'react-icons/lib/fa/envelope';
import Address from 'react-icons/lib/fa/home';
import Facebook from 'react-icons/lib/fa/facebook';
import Portfolio from 'react-icons/lib/fa/user';
import GitHub from 'react-icons/lib/fa/github';
import LinkedIn from 'react-icons/lib/fa/linkedin';

class Information extends Component {

    render() {
        const {name, address, phone, email, imageUrl, facebook, portfolio, github, linkedin} = this.props.info;
        return (
            <div className="info-card">
                <div className="avatar">
                    <img src={imageUrl} alt="Profile"/>
                </div>
                <div className="contact-container">
                    <ul className="contact">
                        <div className="myname"><h1>{name}</h1></div>
                        <li>
                            <div className="contact-icon"><Phone/></div>
                            <div className="contact-detail"><p>{phone}</p></div>
                        </li>
                        <li>
                            <div className="contact-icon"><Email/></div>
                            <div className="contact-detail"><p>{email}</p></div>
                        </li>
                        <li>
                            <div className="contact-icon"><Address/></div>
                            <div className="contact-detail"><p>{address}</p></div>
                        </li>

                        <div className="socials">
                            <ul className="social-list">
                                <li><a target="_blank" href={portfolio} className="social red"><Portfolio/></a></li>
                                <li><a target="_blank" href={facebook} className="social blue"><Facebook/></a></li>
                                <li><a target="_blank" href={github} className="social lightblue"><GitHub/></a></li>
                                <li><a target="_blank" href={linkedin} className="social darkblue"><LinkedIn/></a></li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Information;