import { ProductCardSkeleton } from './ProductCardSkeleton'

export const ProductsSkeleton = async () => {
    return (
        <div className="bg-white">
            <div className="animate-pulse mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="h-4 bg-gray-200 rounded w-1/3" />
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {Array.from({length: 4}, (_, index) => <ProductCardSkeleton key={index} />)}
                </div>
            </div>
        </div>
    )
}