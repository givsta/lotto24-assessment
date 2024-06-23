import { getAlsoBought } from '@/app/server-actions/getAlsoBought';
import Image from 'next/image';
import { pickRandomColor } from '@/app/utils/randamColor';
import { tr } from '@/app/utils/translation/translate';
import * as keys from '@/app/utils/translation/product';

export const AlsoBought = async () => {
    const {products} = await getAlsoBought();

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">{tr(keys.headline2)}</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-8 xl:gap-x-8">
                    {products?.map((product: any) =>
                        <div className="group relative" key={product.id}>
                            <div
                                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-[100px]">
                                <Image
                                    src={`https://dummyjson.com/image/280x380/${pickRandomColor()}?text=${product.brand}`}
                                    alt="Front of men&#039;s Basic Tee in black."
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    width={73}
                                    height={100}/>
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
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