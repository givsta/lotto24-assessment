import { getComments } from '@/app/server-actions/getReviews';
import { ReviewStar } from './ReviewStar';

export async function Reviews() {
    const {comments: reviews} = await getComments();

    return (
        <section className="py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
                <div className="">
                    <h2 className="font-manrope font-bold text-3xl sm:text-4xl leading-10 text-white mb-16 text-center">
                        Customer reviews &
                        rating</h2>
                    {reviews?.map((review: any) =>
                        <div className="pb-8 border-b border-gray-200 max-xl:max-w-3xl max-xl:mx-auto mb-8" key={review.id}>
                            <h4 className="font-manrope font-semibold text-3xl leading-10 text-black mb-6">{review.user.fullName} commented:</h4>
                            <div className="flex sm:items-center flex-col sm:flex-row justify-between  mb-4">
                                <div className="flex items-center gap-3">
                                    {Array.from({length: 5}).map((_, index) => (
                                        <ReviewStar key={index} />
                                    ))}
                                </div>
                                <div className="flex items-center gap-3">
                                    <h6 className="font-semibold text-lg leading-8 text-black">@{review.user.username}</h6>
                                    <p className="font-medium text-base leading-7 text-gray-400">Nov 01, 2023</p>
                                </div>
                            </div>

                            <p className="font-normal text-lg leading-8 text-gray-500 ">
                                {review.body}
                            </p>

                        </div>
                    )}
                    {reviews.length === 0 && 
                        <h1 className='p-8 border-b border-gray-200 max-xl:max-w-3xl max-xl:mx-auto mb-8'>
                            No comments available.
                        </h1>
                    }
                </div>
            </div>
        </section>
    )
}