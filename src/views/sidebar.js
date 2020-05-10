import React from 'react'
import * as r from 'react-router-dom'

import * as ant from 'antd'

import * as i from '@ant-design/icons';

import * as s from './svg'

export const Sidebar = () => {
    const { Text } = ant.Typography
    return (
            <div className='sidebar-container'>
                <ant.Space
                    direction='vertical'
                    align='center'
                    className='width-100p fg-primary'>
                    <r.NavLink to='/' className='sidebar-logo-container'>
                        <s.LogoBold className='sidebar-logo' />
                    </r.NavLink>

                    <r.NavLink
                        className='sidebar-link'
                        activeClassName='sidebar-link-active'
                        to='/top-stories'>
                            <i.AlignLeftOutlined className='sidebar-icon'/>
                            <Text align='center' className='sidebar-icon-text'>Top Stories</Text>
                    </r.NavLink>

                    <r.NavLink
                        className='sidebar-link'
                        activeClassName='sidebar-link-active'
                        to='/recent-stories'>
                            <i.AreaChartOutlined className='sidebar-icon'/>
                            <Text align='center' className='sidebar-icon-text'>Most Recent</Text>
                    </r.NavLink>

                </ant.Space>
                <div>
                    <div className='sidebar-link'>
                        <i.LogoutOutlined className='sidebar-icon fg-primary'/>
                        <Text align='center' className='sidebar-icon-text'>Log Out</Text>
                    </div>
                </div>
            </div>
    )
}







