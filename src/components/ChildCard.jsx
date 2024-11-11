import React, { useState } from 'react';
import Styles from './ChildCard.module.css';

const headingStyle = {
    width: "100%",
    height: "30px",
    marginLeft: "30px",
    lineHeight: "30px",
    fontSize: "16px",
}

const ChildCard = ({ data }) => {
    const [isExpand, setIsExpand] = useState(false)

    function handleExpansion() {
        setIsExpand(!isExpand)
    }
    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                {data?.chunk_content?.length <= 250 || isExpand ? data?.chunk_content : `${data?.chunk_content.slice(0, 251)}...`}
            </div>
            {
                isExpand && data?.entities?.length > 0 && <div className={Styles.feature}>
                    {data?.entities?.map((entity) => {
                        return <div className={Styles.entities}>
                            <h3 style={headingStyle}>Entities</h3>
                            <div className={Styles.entity1}>
                                <span>Name</span>
                                <span>{entity?.name}</span>
                            </div>
                            <div className={Styles.entity2}>
                                <span>Type</span>
                                <span>{entity?.type}</span>
                            </div>
                        </div>
                    })
                    }
                </div>
            }
            <div className={Styles.buttons}>
                <button className={Styles.blogButton}>
                    Blog
                </button>
                <div className={Styles.expandButton}>
                    <span onClick={handleExpansion}>
                        <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ChildCard