import React from 'react'
import Styles from './EpisodeView.module.css'
import Card from './Card'
import Paggination from './Paggination'

const EpisodeView = () => {
    return (
        <div className={Styles.contentContainer}>
            <h4>54 results found in 969ms</h4>
            <Card />
            <Card />
            <Card />
            <Card />
            <Paggination />
        </div>
    )
}

export default EpisodeView