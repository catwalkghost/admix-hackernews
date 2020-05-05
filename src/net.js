import axios from 'axios'

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/'
export const topStoriesUrl = `${baseUrl}topstories.json`
export const newStoriesUrl = `${baseUrl}newstories.json`
export const storyUrl = `${baseUrl}item/`

export const getStories = async () => {
    const result =
        await axios
            // Getting New Stories
            .get(newStoriesUrl)
            // Once data is fetched, return it
            .then(({data}) => data)

    return result
}

export const getStory = async (storyId) => {
    const result =
        await axios
            .get(`${storyUrl + storyId}.json`)
            .then(({data}) => data)

    return result
}