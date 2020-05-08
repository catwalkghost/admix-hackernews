import React, {useState} from 'react'

import * as ant from 'antd'

import * as s from './svg'
import * as c from '../const'

export const Welcome = () => {
    const [show, setShow] = useState(true )

    const { Title, Paragraph } = ant.Typography

    return (
        <>
            {!show ? null : (
                <ant.Space
                    className='welcome-alert'
                    direction='horizontal'
                    align='center'>
                    <ant.Row className='width-100p fg-white'>
                        <ant.Col span={12} offset={6}>
                            <Title>{`Welcome back ${c.USERNAME}`}</Title>
                            <Paragraph className='fg-white'>{c.ALERT_TEXT}</Paragraph>
                        </ant.Col>
                        <ant.Col span={6} align='center'>
                            <ant.Button onClick={() => setShow(!show)}>
                                {c.HIDE_ALERT}
                            </ant.Button>
                        </ant.Col>
                    </ant.Row>
                </ant.Space>
            )}
        </>
    )
}