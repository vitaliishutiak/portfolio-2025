import { Box, Typography } from '@mui/material'
import { useTranslations } from 'next-intl'

export default function TermsOfServicePage() {
  const t = useTranslations('header')

  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: { xs: 6, md: 10 } }}>
      <Typography
        sx={{
          fontFamily: 'var(--framer-font-family)',
          fontWeight: 700,
          fontSize: { xs: '32px', md: '44px' },
          letterSpacing: '-0.04em',
          lineHeight: '110%',
          mb: 2,
        }}
      >
        {t('termsOfService')}
      </Typography>
      <Typography sx={{ color: 'text.secondary', maxWidth: 720 }}>
        This page will contain your terms of service text.
      </Typography>
    </Box>
  )
}

