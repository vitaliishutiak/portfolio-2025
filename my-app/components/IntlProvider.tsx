'use client';

import { NextIntlClientProvider } from 'next-intl';
import type { AbstractIntlMessages } from 'next-intl';

type Props = {
  locale: string;
  messages: AbstractIntlMessages;
  children: React.ReactNode;
};

/**
 * Окремий client boundary для next-intl — уникає помилок RSC
 * «Could not find ... NextIntlClientProvider in the React Client Manifest».
 */
export default function IntlProvider({ locale, messages, children }: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
