import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

export default class Modal extends Component {
  static propTypes = {
    showModal: PropTypes.string,
    tags: PropTypes.string,
    onClose: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onCloseModal);
  }

  componentWillUnmount() {
    window.addEventListener('keydown', this.onCloseModal);
  }

  onCloseModal = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onCloseBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={s.overlay} onClick={this.onCloseBackdrop}>
        <div className={s.modal}>
          <img src={this.props.showModal} alt={this.props.tags} />
        </div>
      </div>
    );
  }
}
