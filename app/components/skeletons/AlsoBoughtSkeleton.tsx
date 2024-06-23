import { AlsoBoughtCardSkeleton } from './AlsoBoughtCardSkeleton'

export const AlsoBoughtSkeleton = async () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-8 xl:gap-x-8">
                    {Array.from({length: 8}, (_, index) => <AlsoBoughtCardSkeleton key={index} />)}
                </div>
            </div>
        </div>
    )
}