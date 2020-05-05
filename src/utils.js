import React from 'react'

import * as f from 'fpx'

// using REGEX to check whether a URL is valid. This can be handy for forms too!
export const URL_REGEX = /^(?:(\w+:)[/][/])(?:[^,;!?/#\s]+[.][^,;!?/#\s]+)(?:[^,;!?#\s]*)(?:[?][^,;!#\s]*)?(?:#[^,;!\s]*)?$/
//                         protocol        two-level domain               pathname       search            hash

// actual check
export function isValidUrl(value) {
    return f.isString(value) && URL_REGEX.test(value)
}