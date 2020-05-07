import React, {useEffect, useState} from 'react'

import 'antd/dist/antd.css'
// import { Layout } from 'antd'
import * as f from 'fpx'

import * as ant from 'antd'

import * as sb from './sidebar'

import * as n from '../net'
import * as u from '../utils'
import * as c from '../const'

import * as st from './stories-table'

export const Layout = () =>


    <ant.Layout>
        <ant.Layout.Sider>
            <sb.Sidebar />
        </ant.Layout.Sider>
        <ant.Layout.Content>
            <st.StoriesTable />
        </ant.Layout.Content>
    </ant.Layout>

