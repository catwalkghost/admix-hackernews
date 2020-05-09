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
                <Content className='height-100'>
                    <ant.Row align='center' className='width-100p'>
                        <ant.Col span={20}>
                            <wa.Welcome />
                        </ant.Col>
                    </ant.Row>
                    <div className='main-content-container' >

                    <ant.Row align='center' className='overview-container'>
                        <ant.Col span={20}>
                            <ov.Overview />
                        </ant.Col>
                    </ant.Row>

                    <ant.Row align='center' className='stories-container'>
                        <ant.Col span={24}>
                            <st.StoriesTable/>
                        </ant.Col>
                    </ant.Row>

                    </div>
                </Content>
            </ant.Layout>
        </r.BrowserRouter>
        )
}








