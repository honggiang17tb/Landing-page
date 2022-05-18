import React from "react";
import css from './Modal.module.css';


const Modal = (props) => {
    const {title,open, onClose } = props

    return (
        <>
            {open && 
                <div className={css.modal}>
                    <div id="modal_content" className={css.modal_content}>
                        <div className={css.modal_title}>
                            <span>{title}</span>
                            <span onClick={onClose} className={css.close}>&times;</span>
                        </div>
                        <div className={css.modal_body}>
                            {props.children}
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default Modal