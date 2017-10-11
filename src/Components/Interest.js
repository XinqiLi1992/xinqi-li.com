import React, {Component} from 'react';
import  Heart from 'react-icons/lib/fa/heart';
import '../styles/Interest.css'

class Interest extends Component {

    render() {
        const style = [
            {
                backgroundColor:'#ff6c5c',
                color: 'white'
            },
            {
                backgroundColor: 'white',
                color: '#ff6c5c'
            }
        ]
        return (
            <div className="interest">
                <div className="section">
                    <span className="section-icon" style={{backgroundColor:'#ff6c5c'}}><Heart/></span>
                    <span className="section-title">Interest</span>
                </div>
                <hr/>
                <div className="interests">
                    <ul className="interest-list">
                        {this.props.interests.map((interest, index) =>(
                            <li key={index}>
                                <div className="interest-card">
                                    <div className={`interest-icon ${interest.title.toLocaleLowerCase()}-1`} style={index % 2===0? style[0]:style[1]}>
                                        <p>{interest.icon}</p>
                                    </div>
                                    <div className={`interest-detail ${interest.title.toLocaleLowerCase()}-2`} style={index % 2===0? style[1]:style[0]}>
                                        <p>{interest.title}</p>
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

export default Interest;