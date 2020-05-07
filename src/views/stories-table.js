import React, {useEffect, useState} from 'react'

import 'antd/dist/antd.css'
import * as ant from 'antd'
import * as f from 'fpx'

import * as n from '../net'
import * as u from '../utils'
import * as c from '../const'


export const StoriesTable = () => {
    // Stories come as an array. Setting an empty array
    const [stories, setStories] = useState([] )

    React.useEffect(() => {
        n.fetchTopStories()
            // Resolving the promise and populating stories
            .then(stories => setStories(stories))
            .catch(err => console.log(`Error: ${err}`))
    }, []);

    return (
        <ant.Table
            dataSource={stories}
            columns={c.COLUMNS}
            pagination={{ defaultPageSize: 5}}/>
    )
}