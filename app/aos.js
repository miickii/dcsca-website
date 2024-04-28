'use client';

import { useEffect } from 'react';

export default function Aos() {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({
        once: true,
      })
      AOS.refresh();
  });
  }, []);

  return <></>;
}