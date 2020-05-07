import * as api from 'axios'
import * as f from 'fpx'

import * as c from './const'
import * as u from './utils'
// export const getStories = async () => {
//     const result =
//         await api
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
//         await api
//             // Getting New Stories
//             .get(c.NEW_STORIES)
//             // Once data is fetched, return it
//             .then(({data}) => f.isObject(data) && u.selectFields(data))
//
//     return result
// }

// export const getStory = async (storyId) => {
//     const result =
//         await api
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

        // json() method returns a promise
        const data = await response.json()
        // Displaying only 15 stories as shown in mock-up
        // const shortList = f.slice(data, 0, c.MAX_STORIES)
        const shortList = u.maxStories(data)
        const stories =
            getStoriesData(shortList)

            // f.map(shortList, id =>
            //     fetch(`${c.STORY + id}.json`)
            //         .then(response => response.json()))

        // Using Promise.all to avoid race condition
        const result = await Promise.all(stories)
    return result
}




// This is used to fetch stories details
export const getStoriesData = (items) =>
    f.map(items, id =>
        fetch(`${c.STORY + id}.json`)
            .then(response => response.json()))
