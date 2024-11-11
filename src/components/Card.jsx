import React from 'react';
import Styles from './Card.module.css'
import ChildCard from './ChildCard';

const Card = ({ data }) => {
    const { parent_info, children } = data;
    return (
        <div className={Styles.card}>
            <div className={Styles.cardHeader}>
                <h4>Podcast Episode</h4>
                <div className={Styles.hiddenContainer}>
                    <span>Click to go to episode page</span>
                    <svg width="15px" color='#7769e9' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right fa-w-14 fa-sm " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                </div>
            </div>
            <div className={Styles.innerCard}>
                <div className={Styles.cardImage}>
                    <img src='https://picsum.photos/200/300' />
                </div>
                <div className={Styles.cardContent}>
                    <h3 >{parent_info.topic}</h3>
                    <div className={Styles.episodeDetail}>
                        <span>Season 1 | </span>
                        <span>Episode 4 | </span>
                        <span>{parent_info.published_at}</span>
                    </div>

                    <div className={Styles.episodeText}>
                        {
                            children && children.map((child) => {
                                return <ChildCard data={child} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card