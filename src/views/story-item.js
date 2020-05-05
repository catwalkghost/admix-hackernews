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

    const {by, score, title, time, kids, url} = story
    const commentsCount = f.size(kids)

    return f.isObject(story) && u.isValidUrl(url) ?
        (
            <div
                style={{
                    'display': 'flex',
                    'flex-direction': 'row',
                    'alignItems' : 'center',
                    'justifyContent' : 'center',
                    'padding': '1rem' }}>
                <span>{by} | </span>
                <span>{title} | </span>
                <span>{score} | </span>
                <span>{time} | </span>
                <span>{commentsCount} | </span>
                <a href={url}><span>{url}</span></a>
            </div>
        ) : null
}