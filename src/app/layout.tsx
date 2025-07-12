import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from '@mantine/core';

import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import { mantineTheme } from '@/core/config/mantine/theme';

import { Montserrat } from 'next/font/google';
import { DatesProvider } from '@mantine/dates';
import RootProvider from '@/components/Layout/RootProvider';

import '@/app/globals.css';

export const metadata = {
  title: 'Lista de tarefas',
};

export const montserrat = Montserrat({ subsets: ['latin'], display: 'swap' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>

      <body className={montserrat.className}>
        <MantineProvider theme={mantineTheme}>
          <Notifications />

          <DatesProvider settings={{ locale: 'pt-BR', firstDayOfWeek: 0 }}>
            <ModalsProvider>
              <RootProvider>{children}</RootProvider>
            </ModalsProvider>
          </DatesProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
