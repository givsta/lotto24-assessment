export const AlsoBoughtCardSkeleton = async () => {
    return (
        <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-[100px]">
            <div className="h-full w-full bg-gray-200"></div>
            </div>
            <div className="mt-4 flex justify-between">
            <div>
                <div className="mt-1 h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
        </div>
    )
}