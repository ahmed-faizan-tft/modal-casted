import React, { useState } from 'react'
import Styles from './SelectDateType.module.css'

const Select = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [selectedData, setSelectedData] = useState("Any Date");

    function handleSelect() {
        setIsSelected(true)
    }

    function handleOptionSelect(event) {
        const data = event?.target?.dataset?.value;
        if (data) {
            setSelectedData(data)
        }
        setIsSelected(false)
    }

    return (
        <>
            {
                !isSelected && <div className={Styles.container} onClick={handleSelect}>
                    <div className={Styles.select}>{selectedData}</div>
                    <div className={Styles.arrow}>
                        <svg width="15" height="15" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="svg-inline--fa fa-caret-down fa-w-10 fa-sm " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
                    </div>
                </div>
            }
            {isSelected && <ul className={Styles.options}>
                <li onClick={handleOptionSelect} data-value="Any Date">Any Date</li>
                <li onClick={handleOptionSelect} data-value="Past Year">Past Year</li>
                <li onClick={handleOptionSelect} data-value="Past Month">Past Month</li>
                <li onClick={handleOptionSelect} data-value="Past Week">Past Week</li>
            </ul>}
        </>
    )
}

export default Select