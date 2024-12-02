import React, { useState } from 'react'
import Styles from './FilterView.module.css'
import Selectbox from './Selectbox';
import Select from './Select';
import SelectDateType from "./SelectDateType"
import { episodeDetails } from '../utils/data'

const dataCollection = episodeDetails?.data?.searchContent?.filters?.podcasts
const tagOptions = episodeDetails?.data?.searchContent?.filters?.tags
const FilterView = () => {
    const [collectionData, setCollectionData] = useState(dataCollection?.slice(0, 5));
    const handleCollectionData = () => {
        setCollectionData((prevData) => {
            return dataCollection.slice(0, prevData.length + 10);
        })
    }

    const handleSelect = (e) => {
        console.log(e.target.value);
    }

    return (
        <div className={Styles.filterContainer}>
            <h4 className={Styles.filterHeading}>Filter your search results.</h4>
            <div className={Styles.collection}>
                <h3>COLLECTION</h3>
                {
                    collectionData && collectionData.map((title) => {
                        return <Selectbox title={title?.length > 35 ? `${title.slice(0, 33)}...` : title} handleSelect={handleSelect} />
                    })
                }
                {collectionData?.length != dataCollection?.length && < div className={Styles.seeMore} style={{ fontSize: "14px;" }} onClick={handleCollectionData}>See more</div>}
            </div>
            <div className={Styles.itemTags}>
                <h3>ITEM TAGS</h3>
                <Select tags={tagOptions} />
            </div>

            <div className={Styles.clipTags}>
                <h3>CLIP TAGS</h3>
                <Select />
            </div>
            <div className={Styles.contentType}>
                <h3>CONTENT TYPE</h3>
                <Selectbox title="Clips" handleSelect={handleSelect} />
                <Selectbox title="Episodes" handleSelect={handleSelect} />
                <Selectbox title="Episode Transcriptd" handleSelect={handleSelect} />
            </div>

            <div className={Styles.itemDate}>
                <h3>ITEM DATE</h3>
                <SelectDateType />
            </div>

            <div className={Styles.contentType}>
                <h3>CLIP TYPE</h3>
                <Selectbox title="Hash Audiogram" handleSelect={handleSelect} />
                <Selectbox title="Displayed on Episode Page" handleSelect={handleSelect} />
            </div>

        </div >
    )
}

export default FilterView