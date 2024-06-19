import { CurrentProducts } from '@/app/components/CurrentProducts';
import { AlsoBought } from '@/app/components/AlsoBought';
import { Reviews } from '@/app/components/Reviews';

export default async function ProductsPage() {
  return (
      <>
        <CurrentProducts/>
        <AlsoBought/>
        <Reviews/>
      </>
  )
}
