'use client';

import { ReactNode, useEffect, useState } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div suppressHydrationWarning>
      {mounted ? children : <div style={{ visibility: 'hidden' }}>{children}</div>}
    </div>
  );
}
