import React, {useState, useEffect} from 'react'

import * as f from 'fpx'

import * as n from '../net'
import * as u from '../utils'

export const StoryItem = ({storyId}) => {
    const [story, setStory] = useState({})


    useEffect(() => {
        n.getStory(storyId)
            .then(data =>
                data && u.isValidUrl(data.url) && setStory(data))
    }, [storyId])

    return (
    <p>{JSON.stringify(story)}</p>
    )
}