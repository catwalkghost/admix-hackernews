import React, {useEffect, useState} from 'react'
import * as r from 'react-router-dom'

import 'antd/dist/antd.css'

import * as f from 'fpx'

import * as ant from 'antd'

import * as s from './svg'
import * as c from '../const'
import * as sb from './sidebar'
import * as st from './stories-table'
import * as ov from './overview'

export const Layout = () => {
    // Deconstruction assignment for antd Layout components
    const { Content, Header, Sider } = ant.Layout

    return (
        <r.BrowserRouter>
            <ant.Layout>
                <Sider width='5%' theme='light'>
                    <sb.Sidebar />
                </Sider>
                <Content style={{ height: '100vh'}}>
                    <ant.Space direction='vertical' align='center' style={{ width: '100%'}}>
                        {/*<ant.Alert*/}
                        {/*    message={`Welcome back ${c.USERNAME}`}*/}
                        {/*    description={c.ALERT_TEXT}*/}
                        {/*    closeable*/}
                        {/*    closeText={c.HIDE_ALERT}*/}
                        {/*    showIcon*/}
                        {/*    icon={<s.WelcomeIcon />}>*/}
                        {/*</ant.Alert>*/}
                        <ov.Overview />
                    </ant.Space>
                    <ant.Space
                        style={{ width: '100%', justifyContent: 'flex-end'}}
                        direction='vertical'
                        align='center'
                        size='large'>
                        <st.StoriesTable/>
                    </ant.Space>
                </Content>
            </ant.Layout>
        </r.BrowserRouter>
        )
}








