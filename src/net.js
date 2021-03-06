import * as f from 'fpx'

import * as c from './const'
import * as u from './utils'

export const fetchTopStories = async () => {
        const response = await fetch(`${c.TOP_STORIES }`)

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

export const fetchNewStories = async () => {
    const response = await fetch(`${c.NEW_STORIES + c.PRETTY}`)

    if (response.ok === false) {
        throw new Error(`Error: ${response.text}`)
    }
    const data = await response.json()
    const shortList = u.maxStories(data)
    const stories =
        getStoriesData(shortList)

    // Using Promise.all to avoid race condition
    const result = await Promise.all(stories)
    return result
}


// Fetching stories details:
// HN Api first fetched IDs of the stories,
// Then they need to be populated with details/content
export const getStoriesData = (items) =>
    f.map(items, id =>
        fetch(`${c.STORY + id}.json`)
            .then(response => response.json()))
