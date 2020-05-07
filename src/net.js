import axios from 'axios'
import * as f from 'fpx'

import * as c from './const'
import * as u from './utils'
// export const getStories = async () => {
//     const result =
//         await axios
//             // Getting New Stories
//             .get(c.NEW_STORIES)
//             // Once data is fetched, return it
//             .then(({data}) => f.isObject(data) && data)
//
//     return result
// }
//
// export const getStoriesFields = async () => {
//     const result =
//         await axios
//             // Getting New Stories
//             .get(c.NEW_STORIES)
//             // Once data is fetched, return it
//             .then(({data}) => f.isObject(data) && u.selectFields(data))
//
//     return result
// }

// export const getStory = async (storyId) => {
//     const result =
//         await axios
//             .get(`${c.STORY + storyId}.json`)
//             .then(({data}) => data)
//
//     return result
// }

export const fetchTopStories = async () => {
        const response = await fetch(`${c.TOP_STORIES + c.PRETTY}`)

        if (response.ok === false) {
            throw new Error(`Error: ${response.text}`)
        }

        const data = await response.json()
        // Displaying only 100 stories
        const shortList = f.slice(data, 0, 15)
        const stories =
            f.map(shortList, id =>
                fetch(`${c.STORY + id}.json`)
                    .then(response => response.json()))
        // Using Promise.all to avoid race condition
        const result = await Promise.all(stories)

        return result
}

// Can getStoriesData be used in fetchTopStories?
export const getStoriesData = (items) => {
    f.map(items, id =>
        fetch(`${c.STORY + id}.json`)
            .then(response => response.json())
    )
}

// export const fetchTopStories = () => {
//     fetch(`${c.TOP_STORIES + c.PRETTY}`)
//         .then(data => data.json())
//         .then(stories => {
//             f.map(stories, storyId => {
//                 fetch(`${c.STORY + storyId}`)
//                     .then(storiesData => storiesData.json())
//             })
//         })
// }