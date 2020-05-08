import React from 'react'
import {Helmet} from 'react-helmet'

import * as l from './views/layout'
import * as c from './const'

import './styles/main.less'

export const App = () => {
    return (
        <>
        <Helmet defaultTitle={c.TITLE} />
        <l.Layout />
        </>
    )
}


