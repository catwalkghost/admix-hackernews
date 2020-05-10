import React, {useState} from 'react'

import * as ant from 'antd'

import * as s from './svg'
import * as c from '../const'

export const Welcome = () => {
    const [show, setShow] = useState(true )

    const { Title, Text, Paragraph } = ant.Typography

    return (
        <>
            {!show ? null : (
                <ant.Row className='welcome-alert'>
                    <ant.Col span={6}>
                        <s.WelcomeIcon className='welcome-alert-icon' />
                    </ant.Col>
                    <ant.Col span={12}>
                        <Title level={2} className='welcome-alert-title'>Welcome back <Text className='fg-white font-weight-600'>{c.USERNAME}</Text></Title>
                        <Paragraph className='welcome-alert-text'>{c.ALERT_TEXT}</Paragraph>
                    </ant.Col>
                    <ant.Col span={6} align='center'>
                        <ant.Button
                            size='large'
                            className='welcome-alert-button'
                            onClick={() => setShow(!show)}>
                            {c.HIDE_ALERT}
                        </ant.Button>
                    </ant.Col>
                </ant.Row>
            )}
        </>
    )
}