import React, {Component} from 'react';
import '../styles/EducationModal.css'
import Close from 'react-icons/lib/fa/close'

class EducationModal extends Component {
    render() {
        return (
            <div className="education-modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <button onClick={(e) => this.props.onHideModal(e)} className="modal-close-btn"><Close/></button>
                    </div>
                    <div className="modal-body">
                        <h1>{this.props.eduInfo.degree}</h1>
                        <div className="edu-pic"><img src={this.props.eduInfo.logo} alt=""/></div>
                        <div className="edu-text">
                            <div>
                                <p><em>{this.props.eduInfo.university}</em></p>
                                <p><b>{this.props.eduInfo.honours}</b></p>
                            </div>
                            <div className="edu-grade">
                                <p className="gpa"><span><em>GPA: {this.props.eduInfo.gpa}</em></span></p>
                            </div>
                            {this.props.eduInfo.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EducationModal;