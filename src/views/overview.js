import React from 'react'

import * as ant from 'antd'
import * as i from '@ant-design/icons'
import * as f from 'fpx'

import * as c from '../const'
import * as u from '../utils'

export const Overview = () => {
    const {data} = c.OVERVIEW

    return (
        <ant.Row gutter={'1rem'}>
            {f.map(data, overviewItem => {
                const {id, title, value, changePercent} = overviewItem
            return (
                <ant.Col span={6} key={id}>
                    <OverviewItem
                        title={title}
                        vlaue={value}
                        changePercent={changePercent}/>
                </ant.Col>
            )})}
        </ant.Row>
    )
}

export const OverviewItem = ({title, value, changePercent}) => {

    return (
        <ant.Space direction='horizontal' align='start'>
            <ant.Space>
                <OverviewIcon />
            </ant.Space>
            <ant.Space>
                <ant.Statistic title={title} value={value} />
            </ant.Space>
            <ant.Space>
                <ant.Statistic value={changePercent} suffix='%' prefix={<i.ArrowUpOutlined />}/>
            </ant.Space>
        </ant.Space>
    )
}

export const OverviewIcon = () => {
            return (
                <i.StockOutlined />
            )
}