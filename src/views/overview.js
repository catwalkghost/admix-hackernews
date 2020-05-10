import React from 'react'

import * as ant from 'antd'
import * as i from '@ant-design/icons'
import * as f from 'fpx'

import * as c from '../const'

export const Overview = () => {
    const {data} = c.OVERVIEW

    return (
        <>
        <OverviewHeader />
        <ant.Row gutter={48} className='overview-main-content-container'>
            {f.map(data, overviewItem => {
                const {id, title, value, changePercent} = overviewItem
            return (
                <ant.Col span={6} key={id}>
                    <OverviewItem
                        id={id}
                        title={title}
                        value={value}
                        changePercent={changePercent}/>
                </ant.Col>
            )})}
        </ant.Row>
        <OverviewFooter />
        </>
    )
}

export const OverviewItem = ({title, value, changePercent, id}) => {

    const { Text } = ant.Typography

    let icon
    let positive = null
    let cls = null
    switch(id) {
        case 1:
            icon = <i.StockOutlined />
            positive = true
            cls = 'bg-accent-darker'
            break
        case 2:
            icon = <i.ThunderboltOutlined />
            positive = true
            cls = 'bg-secondary'
            break
        case 3:
            icon = <i.DashboardOutlined />
            positive = false
            cls = 'bg-primary'
            break
        case 4:
            icon = <i.AppstoreOutlined />
            positive = true
            cls = 'bg-primary-darker'
            break
        default:
            icon = <i.QuestionCircleOutlined />
            positive = true
            cls = 'bg-primary'
    }

    return (
        <ant.Row gutter={8} className='overview-item-card'>
            <ant.Col span={6}>
                <div className={`${cls} overview-icon-container`}>
                    {icon}
                </div>
            </ant.Col>
            <ant.Col span={18}>
                <ant.Row gutter={4} className='overview-item-stats'>
                    <ant.Col span={24}>
                        <ant.Space direction='horizontal' size={4} align='center'>
                            <ant.Statistic className='overview-item-main-stat' value={value}/>
                            <ant.Statistic className={`${positive ? 'fg-success' : 'fg-error'} overview-item-stats-extra`} value={changePercent} suffix='%' prefix={<i.ArrowUpOutlined />}/>
                        </ant.Space>
                    </ant.Col>
                </ant.Row>

                <ant.Row>
                    <ant.Col span={24}>
                        <Text className='overview-item-stats-title'>{title}</Text>
                    </ant.Col>
                </ant.Row>
            </ant.Col>
        </ant.Row>
    )
}

export const OverviewHeader = () => {
    const { Title } = ant.Typography
    const { options } = c.DATE_SELECTOR_OPTIONS

    const [selected, setSelected] = React.useState(1)

    const onSelect = (e) => {
        setSelected(Number(e.target.id))
    }

    return (
        <ant.Row className='width-100p overview-header'>
            <ant.Col span={18}>
                <Title className='overview-header-title' level={3}>
                    {c.PAGE_TITLE}
                </Title>
            </ant.Col>
            <ant.Col span={6}>
                <ant.Row gutter={8}>
                    {f.map(options, option => {
                        const { id, title } = option
                        return (
                            <ant.Col key={id} span={6}>
                                <OverviewHeaderOptions
                                    title={title}
                                    id={id}
                                    isSelected={selected === id}
                                    onClick={onSelect}
                                />
                            </ant.Col>
                        )
                    })}
                </ant.Row>
            </ant.Col>
        </ant.Row>

    )
}

export const OverviewHeaderOptions = ({title, id, onClick, isSelected}) => {
    return (
        <button
            id={id}
            onClick={onClick}
            className={isSelected ? 'overview-option-button-selected' : 'overview-option-button'}>
            {title}
        </button>
    )
}

export const OverviewFooter = () => {
    return (
        <ant.Row className='width-100p overview-footer'>
            <ant.Col span={24} align='center'>
                <button className='overview-expand-button z-index-100 fg-light-grey'>
                    <i.DownOutlined className='z-index-100'/>
                </button>
                <div className="overview-divider transparent-block half-circle-down" />
            </ant.Col>
        </ant.Row>
    )
}