import React, {useEffect, useState} from 'react'
import * as r from 'react-router-dom'

import * as ant from 'antd'

import * as i from '@ant-design/icons';
import * as f from 'fpx'

import * as s from './svg'
import * as n from '../net'
import * as u from '../utils'
import * as c from '../const'


export const Sidebar = () => {
    const { Text } = ant.Typography
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
                    className='width-100p fg-primary'>
                    <s.LogoBold
                        style={{ width: '25px', height: '25px'}}
                    />

                    <r.NavLink to='/top-stories'>
                        <ant.Space direction='vertical' align='center'>
                            <i.AlignLeftOutlined />
                            <Text align='center'>Top Stories</Text>
                        </ant.Space>
                    </r.NavLink>

                    <r.NavLink to='/recent-stories'>
                        <ant.Space direction='vertical' align='center'>
                            <i.AreaChartOutlined />
                            <Text align='center'>Most Recent</Text>
                        </ant.Space>
                    </r.NavLink>

                </ant.Space>
                <ant.Space>
                    <ant.Space direction='vertical' align='center'>
                        <i.LogoutOutlined />
                        <Text align='center'>Log Out</Text>
                    </ant.Space>
                </ant.Space>
            </ant.Space>
    )
}







