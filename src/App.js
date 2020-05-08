import React, {useEffect, useState} from 'react';
import * as r from 'react-router-dom';
import * as sl from './views/stories-table'
import 'antd/dist/antd.css'

import * as n from './net'

import * as l from './views/layout'


export const App = () => {
    return (
        <l.Layout />
    )
}

export default r.withRouter(App)


