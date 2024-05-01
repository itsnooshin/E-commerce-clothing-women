'use client';
import SearchComponent from '@/src/components/headers/SearchComponent';
import { Suspense } from 'react';

export default function page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchComponent />
      </Suspense>
    </>
  );
}
