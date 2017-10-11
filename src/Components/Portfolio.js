import React, {Component} from 'react';
import '../styles/Portfolio.css'
import Pencil from 'react-icons/lib/fa/pencil'
import Information from 'react-icons/lib/fa/info';

class Portfolio extends Component {

    showOptions(e) {
        let target = e.currentTarget.nextSibling;
        if(target.style.opacity === '0.9') {
            target.style.opacity = '0'
        } else {
            target.style.opacity = '0.9'
        }

    }

    render() {
        return (
            <div className="portfolio">
                <div className="section">
                    <span className="section-icon" style={{backgroundColor:'#7e969c'}}><Pencil/></span>
                    <span className="section-title">Portfolio</span>
                </div>
                <hr/>
                <div className="portfolios">
                    <ul className="portfolio-list">
                        {this.props.portfolios.map((port, index) => (
                            <li key={index} className="port-item">
                                <div className="port-image">
                                    <img src={port.imageUrl} alt="Portfolio Project"/>
                                    <div className="port-more-btn" onClick={(e) => this.showOptions(e)}>
                                        <p><Information/></p>
                                    </div>
                                    <div className="port-more">
                                        {port.url ? (
                                            <a target="_blank" href={port.url} className="more-btn">
                                                <p>Demo</p>
                                            </a>
                                        ) : ('')
                                        }

                                        <a target="_blank" href={port.github} className="more-btn">
                                            <p>Source Code</p>
                                        </a>
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

export default Portfolio;