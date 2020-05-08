import React from 'react'

import * as ant from 'antd'
import * as i from '@ant-design/icons'
import * as f from 'fpx'

import * as c from '../const'
import * as u from '../utils'

export const Overview = () => {
    const {data} = c.OVERVIEW

    return (
        <ant.Row gutter={16}>
            {f.map(data, overviewItem => {
                const {id, title, value, changePercent} = overviewItem
            return (
                <ant.Col span={6} key={id}>
                    <OverviewItem
                        id={id}
                        title={title}
                        vlaue={value}
                        changePercent={changePercent}/>
                </ant.Col>
            )})}
        </ant.Row>
    )
}

export const OverviewItem = ({title, value, changePercent, id}) => {

    let icon = null
    switch(id) {
        case 1:
            icon = <i.StockOutlined />
            break
        case 2:
            icon = <i.ThunderboltOutlined />
            break
        case 3:
            icon = <i.DashboardOutlined />
            break
        case 4:
            icon = <i.AppstoreOutlined />
            break
        default:
            icon = <i.QuestionCircleOutlined />
    }

    return (
        <ant.Space direction='horizontal' align='start' className='overview-item-card'>
            <ant.Space align='center' style={{ width: '100%', height: '100%'}}>
                {icon}
            </ant.Space>
            <ant.Space>
                <ant.Statistic title={title} value={value} style={{ display: 'flex', flexDirection: 'column-reverse '}}/>
            </ant.Space>
            <ant.Space>
                <ant.Statistic value={changePercent} suffix='%' prefix={<i.ArrowUpOutlined />}/>
            </ant.Space>
        </ant.Space>
    )
}