import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Styles from './Modal.module.css';
import SearchBox from './SearchBox';
import EpisodeView from './EpisodeView';
// import cross from './../assets/images/cross.svg'

const Modal = ({ onClose }) => {
    const [searchText, setSearchText] = useState("");

    function handleChange(event) {
        setSearchText(event.target.value)
    }

    function handleClear() {
        setSearchText("")
    }

    return ReactDOM.createPortal(
        <div className={Styles.modalOverlay} onClick={onClose}>
            <div className={Styles.modal} onClick={(e) => e.stopPropagation()}>
                <SearchBox
                    text={searchText}
                    onChange={handleChange}
                    onClear={handleClear}
                    onClose={onClose}
                />
                {/* right side */}
                <EpisodeView />
                <div className={Styles.filterContainer}>

                </div>
            </div>
        </div>,
        document.body
    );
}

export default Modal