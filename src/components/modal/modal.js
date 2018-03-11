import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import ReactModal from 'react-modal';

import './modal.css';

class Modal extends PureComponent {
    render() {
        const {children, onRequestClose, ...props} = this.props;

        return (
            <ReactModal
                ariaHideApp={false}
                bodyOpenClassName="body_modal-open"
                className="modal"
                onRequestClose={onRequestClose}
                overlayClassName="modal__overlay"
                shouldCloseOnEsc={true}
                shouldCloseOnOverlayClick={true}
                {...props}>
                    <div className="modal__content">
                        <i className="modal__close" onClick={onRequestClose} />
                        {children}
                    </div>
            </ReactModal>
        );
    }
}

Modal.propTypes = {
    children: PropTypes.node
};

export default Modal;
