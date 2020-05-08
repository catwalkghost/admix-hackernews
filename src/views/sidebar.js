import React, {useEffect, useState} from 'react'
import * as r from 'react-router-dom'

import 'antd/dist/antd.css'
import * as ant from 'antd'

import * as i from '@ant-design/icons';
import * as f from 'fpx'

import * as s from './svg'
import * as n from '../net'
import * as u from '../utils'
import * as c from '../const'


export const Sidebar = () => {
    return (
            <ant.Space
                direction='vertical'
                align='center'
                style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'space-between'}}>
                <ant.Space
                    direction='vertical'
                    align='center'
                    style={{width:' 100%'}}>
                    <s.LogoBold
                        style={{ width: '25px', height: '25px'}}
                    />
                    <r.NavLink to='/top-stories'>
                        <i.AlignLeftOutlined />
                    </r.NavLink>
                    <r.NavLink to='/recent-stories'>
                        <i.AreaChartOutlined />
                    </r.NavLink>
                </ant.Space>
                <ant.Space>
                    <i.LogoutOutlined />
                </ant.Space>
            </ant.Space>
    )
}







