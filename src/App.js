import React, {useEffect, useState} from 'react';

import * as li from './views/list'
import * as sl from './views/stories-table'
import 'antd/dist/antd.css'

import * as n from './net'

export const App = () =>
    <sl.StoriesTable />

