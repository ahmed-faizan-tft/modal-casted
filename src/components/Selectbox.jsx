import React from 'react';
import Styles from './Selectbox.module.css'

const Selectbox = ({ title, handleSelect }) => {
    return (
        <div className={Styles.collectionInputs}>
            <input type="checkbox" name="option" class={Styles.squareChecked} value={title} onChange={handleSelect} />
            <span className={Styles.label}>{title}</span>
        </div>
    )
}

export default Selectbox