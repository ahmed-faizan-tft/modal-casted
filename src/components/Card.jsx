import React from 'react';
import './Card.scss'
import ChildCard from './ChildCard';

const Card = ({ data }) => {
    const { parent_info, children } = data;
    return (
        <div className="search-result">
            <div className="search-result-header">
                <h4>Podcast Episode</h4>
            </div>
            <div className="inner-search-result">
                <div className="search-result-content">
                    <div className="search-result-image">
                        <img src='https://picsum.photos/200/300' />
                    </div>
                    <div className="search-result-titles">
                        <h3 >{parent_info.topic}</h3>
                        <div className="result-detail">
                            <span>Season 1 | </span>
                            <span>Episode 4 | </span>
                            <span>{parent_info.published_at}</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="result-text">
                {
                    children && children.map((child) => {
                        return <>
                            <ChildCard data={child} />
                            <div className='child-line'></div>
                        </>
                    })
                }
            </div>
        </div>
    )
}

export default Card