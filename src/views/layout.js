import React, {useEffect, useState} from 'react'
import * as r from 'react-router-dom'

import * as f from 'fpx'

import * as ant from 'antd'

import * as s from './svg'
import * as c from '../const'
import * as sb from './sidebar'
import * as st from './stories-table'
import * as ov from './overview'
import * as wa from './welcome'

export const Layout = () => {
    // Deconstruction assignment for antd Layout components
    const { Content, Sider } = ant.Layout

    return (
        <r.BrowserRouter>
            <ant.Layout>
                <Sider width='5%' theme='light'>
                    <sb.Sidebar />
                </Sider>
                <Content style={{ height: '100vh'}}>
                    <ant.Row align='center' style={{ width: '100%'}}>
                        <ant.Col span={18}>
                            <wa.Welcome />
                        </ant.Col>
                    </ant.Row>
                    <div className='main-content-container' >

                    <ant.Row align='center' style={{ width: '100%'}}>
                        <ant.Col span={18}>
                            <ov.Overview />
                        </ant.Col>
                    </ant.Row>

                    <ant.Row align='center' style={{ width: '100%'}}>
                        <ant.Col span={22}>
                            <st.StoriesTable/>
                        </ant.Col>
                    </ant.Row>
                    </div>
                </Content>
            </ant.Layout>
        </r.BrowserRouter>
        )
}








