import { CurrentProducts } from '@/components/CurrentProducts';
import { AlsoBought } from '@/components/AlsoBought';
import { Reviews } from '@/components/Reviews';
import { Suspense } from 'react';
import { AlsoBoughtSkeleton } from '@/components/skeletons/AlsoBoughtSkeleton';
import { ProductsSkeleton } from './components/skeletons/ProductsSkeleton';

export default async function ProductsPage() {
  return (
      <>
        <Suspense fallback={<ProductsSkeleton />}>
          <CurrentProducts/>
        </Suspense>
        <Suspense fallback={<AlsoBoughtSkeleton />}>
          <AlsoBought/>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Reviews/>
        </Suspense>
      </>
  )
}
