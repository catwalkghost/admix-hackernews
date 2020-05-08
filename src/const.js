import React from 'react'
import * as f from 'fpx'
import * as u from './utils'

// HN Api endpoints and options
export const BASE_URL = 'https://hacker-news.firebaseio.com/v0/'
export const TOP_STORIES = `${BASE_URL}topstories.json`
export const NEW_STORIES = `${BASE_URL}newstories.json`
export const STORY = `${BASE_URL}item/`
export const PRETTY = '?print=pretty'

// A maximum amount of stories to display as shown on the screenshot
export const MAX_STORIES = 15

// Hardcoded mock-up data
export const USERNAME = 'Gregory'
export const ALERT_TEXT = 'Nodolor sit amet, consectetur adipisicing elit. Aperiam odio expedita nostrum eius, sapiente commodi in tenetur facilis'
export const HIDE_ALERT = 'Hide Alert'

// Hardcoded Overview Mock-Up
export const OVERVIEW = {
    data: [
        {
            id: 1,
            title: 'revenue',
            value: 510,
            changePercent: 50,
        },
        {
            id: 2,
            title: 'impressions',
            value: 12200000,
            changePercent: 12,
        },
        {
            id: 3,
            title: 'fill rate',
            value: 37.5,
            changePercent: 12,
        },
        {
            id: 4,
            title: 'ECPM',
            value: 2.4,
            changePercent: 32,
        },
    ]
}


// This is set to match the screenshot
export const PAGINATION = {
    defaultPageSize: 5
}

// Antd columns settings. All
export const COLUMNS = [
    {
        title: 'Author',
        dataIndex: 'by',
        key: 'by',
    },
    {
        title: 'Score',
        dataIndex: 'score',
        key: 'score',
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
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