

export default function FeedBack({ feedbackData }) {


    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mb-20">
            {
                feedbackData.map(feed =>
                    <div className="card  border border-blue-300 hover:shadow-2xl  hover:shadow-blue-300">

                        <div className="card-body">
                            <div className="flex items-center gap-4">
                                <img className="h-[100px] w-[100px] rounded-full border-5 border-blue-400" src={feed.userImg} alt="" />
                                <h2 className="card-title text-2xl font-bold">{feed.name}</h2>
                            </div>
                            <p>{feed.review}</p>
                            <div className="flex items-center">
                                <div className="rating">
                                    <input type="radio" name="rating-1" className="mask mask-star" aria-label="1 star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" aria-label="2 star" defaultChecked />
                                    <input type="radio" name="rating-1" className="mask mask-star" aria-label="3 star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" aria-label="4 star" />
                                    <input type="radio" name="rating-1" className="mask mask-star" aria-label="5 star" />
                                </div>
                                <p className="text-right text-[14px] font-semibold text-gray-400">{new Date().toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
