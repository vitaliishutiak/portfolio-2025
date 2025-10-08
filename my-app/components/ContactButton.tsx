'use client';

import React from 'react'
import { Button } from '@mui/material'
import { useTranslations } from 'next-intl'
import { Link } from '../navigation'

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
  const t = useTranslations('header');
  
  return (
    <Button 
      component={Link}
      href="/contact"
      variant={variant} 
      color={color}
      size={size}
    >
      {t('contactButton')}
    </Button>
  )
}

export default ContactButton

