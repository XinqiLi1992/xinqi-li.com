import React, {Component} from 'react';
import '../styles/PersonalProfile.css'

class PersonalProfile extends Component {
    render() {
        return (
            <div className="personal-profile">
                <div className="personal-content">
                    {this.props.profileText}
                </div>
            </div>
        );
    }
}

export default PersonalProfile;