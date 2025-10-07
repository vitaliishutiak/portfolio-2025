'use client';

import React from 'react'
import { Button } from '@mui/material'

interface ContactButtonProps {
  variant?: 'text' | 'outlined' | 'contained'
  color?: 'primary' | 'secondary' | 'inherit'
  size?: 'small' | 'medium' | 'large'
}

const ContactButton: React.FC<ContactButtonProps> = ({ 
  variant = 'outlined', 
  color = 'inherit',
  size = 'medium'
}) => {
  return (
    <Button 
      variant={variant} 
      color={color}
      size={size}
    >
      Contact
    </Button>
  )
}

export default ContactButton

