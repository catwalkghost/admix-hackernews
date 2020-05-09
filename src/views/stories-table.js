import React, {useEffect, useState} from 'react'

import * as ant from 'antd'
import * as f from 'fpx'

import * as n from '../net'
import * as u from '../utils'
import * as c from '../const'
import * as r from 'react-router-dom'

export const StoriesTable = () => {
    return (
        <>
            <r.Route exact path='/' component={NewStories} />
            <r.Route exact path='/recent-stories' component={NewStories} />
            <r.Route exact path='/top-stories' component={TopStories} />
        </>
        )
}

const TopStories = () => {
    // Stories come as an array. Setting an empty array
    const [stories, setStories] = useState([] )

    React.useEffect(() => {
        n.fetchTopStories()
            // Resolving the promise and populating stories
            .then(topStories => setStories(topStories))
            .catch(err => console.log(`Error: ${err}`))
    }, []);

    return (
        <ant.Table
            rowKey={story => story.id}
            dataSource={stories}
            columns={c.COLUMNS}
            pagination={c.PAGINATION}/>
    )
}

const NewStories = () => {
    // Stories come as an array. Setting an empty array
    const [stories, setStories] = useState([] )

    React.useEffect(() => {
        n.fetchNewStories()
            // Resolving the promise and populating stories
            .then(topStories => setStories(topStories))
            .catch(err => console.log(`Error: ${err}`))
    }, []);

    return (
        <ant.Table
            rowKey={story => story.id}
            dataSource={stories}
            columns={c.COLUMNS}
            pagination={c.PAGINATION}/>
    )
}