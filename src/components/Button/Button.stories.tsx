import React, { useState, useEffect } from 'react'
import { action } from '@storybook/addon-actions'
import { select } from '@storybook/addon-knobs'
import { Button } from './Button'

const label = 'Variant'
const options = {
  Primary: 'primary',
  Secondary: 'secondary',
  Muted: 'muted',
}

export default {
  title: 'Components|Button',
  component: Button,
  parameters: {
    chromatic: { delay: 2000 },
  },
}

/**
 * Primary button
 */
export const primary = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const handleRender = () => {
    if (loading) {
      return <div>Loading...</div>
    } else {
      return (
        <Button onClick={action('clicked')} variant="primary">
          Primary Button
        </Button>
      )
    }
  }

  return handleRender()
}

/**
 * Secondary button
 */
export const secondary = () => (
  <Button onClick={action('clicked')} variant="secondary">
    Secondary Button
  </Button>
)

/**
 * Spacey button
 * Has more  space than the rest
 */
export const spacey = () => (
  <Button
    onClick={action('clicked')}
    variant={select(label, options, 'primary')}
    m={5}
  >
    Spacey Button
  </Button>
)
