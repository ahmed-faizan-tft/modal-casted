import React from 'react'
import Styles from './EpisodeView.module.css'
import Card from './Card'
import Paggination from './Paggination'
import { episodeDetails } from '../utils/data'

const EpisodeView = () => {
    return (
        <div className={Styles.contentContainer}>
            <h4>54 results found in 969ms</h4>
            {
                episodeDetails && episodeDetails?.data?.searchContent.results.map((result) => {
                    return <Card data={result} />
                })
            }
            <Paggination />
        </div>
    )
}

export default EpisodeView