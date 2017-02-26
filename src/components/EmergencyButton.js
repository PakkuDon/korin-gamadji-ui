import React from 'react';
import Modal from 'react-modal';
import EmergencyPage from './EmergencyPage';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : 'rgb(34,34,34)'
  }
};

export default class EmergencyButton extends React.Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <div className='emergency-button flex-1'>
          <button onClick={this.openModal} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect btn-large">
            <span className="text-white">I need help now</span>
          </button>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Emergency Help"
        >
          <EmergencyPage />
        </Modal>
      </div>
    );
  }
}
