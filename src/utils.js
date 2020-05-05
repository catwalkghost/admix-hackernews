import React from 'react'

import * as f from 'fpx'


export const URL_REGEX = /^(?:(\w+:)[/][/])(?:[^,;!?/#\s]+[.][^,;!?/#\s]+)(?:[^,;!?#\s]*)(?:[?][^,;!#\s]*)?(?:#[^,;!\s]*)?$/
//                         protocol        two-level domain               pathname       search            hash

export function isValidUrl(value) {
    return f.isString(value) && URL_REGEX.test(value)
}