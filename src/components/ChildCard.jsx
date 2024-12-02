import React, { useState } from 'react';
import './ChildCard.scss';

const headingStyle = {
    width: "100%",
    height: "30px",
    color: "#868e96",
    fontSize: "14px",
    margin: "0"
}

const ChildCard = ({ data }) => {
    const [isExpand, setIsExpand] = useState(false)

    function handleExpansion() {
        setIsExpand(!isExpand)
    }

    return (
        <div className="result-container">
            <div className="content">
                {/* {data?.chunk_content} */}
                {data?.chunk_content?.length <= 250 || isExpand ? data?.chunk_content : `${data?.chunk_content.slice(0, 251)}...`}
            </div>
            {
                <div className="feature">
                    {!!data?.entities?.length && <>
                        <h3 style={headingStyle}>Entities</h3>
                        <div className="entities">
                            <div className="entity-details">
                                {data?.entities?.map((entity) => {
                                    return <>
                                        <div className="entity">
                                            {entity?.name}
                                        </div>
                                        <div className="entity">
                                            {entity?.type}
                                        </div>
                                    </>
                                })
                                }
                            </div>
                        </div>
                    </>}
                    <div className="go-to-match">
                        <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" onClick={handleExpansion}></path></svg>
                        <span>Go to Match</span>
                        <svg width="10px" color='#7769e9' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right fa-w-14 fa-sm " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                    </div>
                </div>
            }
        </div>
    )
}

export default ChildCard