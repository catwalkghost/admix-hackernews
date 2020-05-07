import React, {useEffect, useState} from 'react'

import 'antd/dist/antd.css'
import * as ant from 'antd'
import * as f from 'fpx'

import * as s from './svg'
import * as n from '../net'
import * as u from '../utils'
import * as c from '../const'


export const Sidebar = () =>
    <ant.Space direction='vertical'>
        <s.LogoBold />
        {/*<ant.AlignLeftOutlined />*/}
    </ant.Space>