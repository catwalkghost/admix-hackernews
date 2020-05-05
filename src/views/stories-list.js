import React, {useEffect, useState} from 'react'
import * as f from 'fpx'

import * as n from '../net'

import * as si from './story-item'



export const StoriesList = () => {
    const [storyIds, setStoryIds] = useState([] ) // Stories come as an array. Setting an empty array

    useEffect(() => {
        n.getStories()
            // Resolving the promise and populating the array with story IDs
            .then(stories => setStoryIds(stories))
            .catch(err => console.log(`Error: ${err}`))

        storyIds && f.isList(storyIds)
    }, [])

    return (
        f.map(storyIds, storyId => (
            <si.StoryItem storyId={storyId}/>
        ))
    )
}