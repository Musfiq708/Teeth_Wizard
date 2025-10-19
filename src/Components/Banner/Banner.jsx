import bannerImg from "../../assets/banner1.png"

export default function Banner() {
  return (
   <div className="hero bg-blue-100 mt-20 px-10 rounded-2xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerImg}
      className=" rounded-lg "
    />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary hover:bg-blue-600 hover:border-white hover:font-bold">Book Now</button>
    </div>
  </div>
</div>
  )
}
