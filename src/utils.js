import React from 'react'

import * as f from 'fpx'

// using REGEX to check whether a URL is valid. This can be handy for forms too!
export const URL_REGEX = /^(?:(\w+:)[/][/])(?:[^,;!?/#\s]+[.][^,;!?/#\s]+)(?:[^,;!?#\s]*)(?:[?][^,;!#\s]*)?(?:#[^,;!\s]*)?$/
//                         protocol        two-level domain               pathname       search            hash

// actual check
export const isValidUrl = (value) =>
    f.isString(value) && URL_REGEX.test(value)


// Fields selector, defaults to an empty object
export const selectFields = ({by, score, title, time, kids, url} = {}) => ({
    by,
    score,
    title,
    time,
    kids,
    url,
})

// Convert UNIX timestamp to a human-readable format
export const convertTimestamp = timestamp => {
    const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return `${interval} years`;
    }
    interval = Math.floor(seconds / 2592000);

    if (interval > 1) {
        return `${interval} months`;
    }
    interval = Math.floor(seconds / 86400);

    if (interval > 1) {
        return `${interval} days`;
    }
    interval = Math.floor(seconds / 3600);

    if (interval > 1) {
        return `${interval} hours`;
    }
    interval = Math.floor(seconds / 60);

    if (interval > 1) {
        return `${interval} minutes`;
    }

    return `${Math.floor(seconds)} seconds`;
};
