import React, {useEffect, useState} from 'react';

import * as sl from './views/stories-table'
import 'antd/dist/antd.css'

import * as s from './views/svg'

import * as n from './net'

export const App = () =>
    <div>
        <s.LogoBold />
        <sl.StoriesTable />
    </div>

