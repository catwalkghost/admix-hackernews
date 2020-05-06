import React, {useEffect, useState} from 'react'

import 'antd/dist/antd.css'
import * as ant from 'antd'
import * as f from 'fpx'

import * as n from '../net'

import * as u from '../utils'
import * as c from '../const'

import * as si from './story-item'

export const StoriesTable = () => {
    const [stories, setStories] = useState([] ) // Stories come as an array. Setting an empty array

    React.useEffect(() => {
        n.fetchTopStories()
            // Resolving the promise and populating post
            .then(stories => setStories(stories))
            .catch(err => console.log(`Error: ${err}`))
    }, []);

    return (
        <ant.Table dataSource={stories} columns={c.COLUMNS}/>
    )
}