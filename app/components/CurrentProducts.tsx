import { getProducts } from '@/app/server-actions/getProducts';
import Image from 'next/image';
import { pickRandomColor } from '@/app/utils/randamColor';
import { tr } from '@/app/utils/translation/translate';
import * as keys from '@/app/utils/translation/product';

export const CurrentProducts = async () => {
    const {products} = await getProducts();
    
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">{tr(keys.headline1, {prefix: 'awesome'})}</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products?.map((product: any) =>
                        <div className="group relative" key={product.id}>
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <Image src={`https://dummyjson.com/image/280x380/${pickRandomColor()}?text=${product.brand}`}
                                    alt="Front of men&#039;s Basic Tee in black."
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full" 
                                    width={280}
                                    height={380}
                                    priority 
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0"></span>
                                            {product.title}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}$</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}