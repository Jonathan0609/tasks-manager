'use client';

import '@/core/config/dayjs';

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
