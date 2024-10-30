import React from 'react'
import Styles from './EpisodeView.module.css'
import Card from './Card'

const EpisodeView = () => {
    return (
        <div className={Styles.contentContainer}>
            <h4>54 results found in 969ms</h4>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default EpisodeView