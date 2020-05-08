import React from 'react'
import * as f from 'fpx'
import * as u from './utils'

export const BASE_URL = 'https://hacker-news.firebaseio.com/v0/'
export const TOP_STORIES = `${BASE_URL}topstories.json`
export const NEW_STORIES = `${BASE_URL}newstories.json`
export const STORY = `${BASE_URL}item/`
export const PRETTY = '?print=pretty'

export const MAX_STORIES = 15

export const PAGINATION = {
    defaultPageSize: 5
}

export const COLUMNS = [
    {
        title: 'Author',
        dataIndex: 'by',
        key: 'by'
    },
    {
        title: 'Score',
        dataIndex: 'score',
        key: 'score'
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title'
    },
    {
        title: 'Time',
        dataIndex: 'time',
        key: 'time',
        render: time => f.isNumber(time) ? u.convertTimestamp(time) : 'n/a',
    },
    {
        title: 'Comments Count',
        dataIndex: 'kids',
        key: 'kids',
        render: comments => f.isList(comments) ? f.size(comments) : 0
    },
    {
        title: 'Url',
        dataIndex: 'url',
        key: 'url',
        render: url => u.isValidUrl ? <a href={url}>{url}</a> : 'n/a',
     },

]