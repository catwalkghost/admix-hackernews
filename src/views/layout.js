import React, {useEffect, useState} from 'react'
import * as r from 'react-router-dom'

import 'antd/dist/antd.css'

import * as f from 'fpx'

import * as ant from 'antd'

import * as sb from './sidebar'

import * as n from '../net'
import * as u from '../utils'
import * as c from '../const'

import * as st from './stories-table'

export const Layout = () => {
    // Deconstruction assignment
    const { Sider, Content } = ant.Layout

    return (
            <r.BrowserRouter>
            <ant.Layout>
                <Sider width='5%' theme='light'>
                    <sb.Sidebar />
                </Sider>
                <Content style={{ height: '100vh'}}>
                    <ant.Space
                        style={{ height: '100vh', justifyContent: 'flex-end'}}
                        direction='vertical'
                        align='end'
                        size='large'>
                        <st.StoriesTable/>
                    </ant.Space>
                </Content>
            </ant.Layout>
            </r.BrowserRouter>
        )
}





