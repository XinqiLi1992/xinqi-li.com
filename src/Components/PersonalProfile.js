import React, {Component} from 'react';
import '../styles/PersonalProfile.css'

class PersonalProfile extends Component {
    render() {
        return (
            <div className="personal-profile">
                <div className="personal-content">
                    <p>{this.props.profileText}</p>
                </div>
            </div>
        );
    }
}

export default PersonalProfile;