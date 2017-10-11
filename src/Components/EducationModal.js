import React, {Component} from 'react';
import '../styles/EducationModal.css'
import Close from 'react-icons/lib/fa/close'

class EducationModal extends Component {
    render() {
        return (
            <div className="education-modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <button onClick={() => this.props.onHideModal()} className="modal-close-btn"><Close/></button>
                    </div>
                    <div className="modal-body">
                        <h1>{this.props.eduInfo.degree}</h1>
                        <div className="edu-pic"><img src={require('../images/ucc_campus.jpg')} alt=""/></div>
                        <div className="edu-text">
                            <p><em>{this.props.eduInfo.university}</em></p>
                            <p><b>First Class Honour Degree</b></p>
                            <div className="edu-grade">
                                <p className="gpa"><span><em>GPA: {this.props.eduInfo.gpa}</em></span><button className="edu-btn">Module List</button></p>
                            </div>
                            <p>{this.props.eduInfo.description}</p>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EducationModal;