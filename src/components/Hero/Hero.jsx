import ImageSlider from "../ImageSlider/ImageSlider";
import IMAGES from "../../data/imageSlider-data";

function Hero() {
  return (
    <section className=" lg:columns-2 mx-6 my-8">
      <div className="flex items-center justify-center text-center mb-8">
        <h1 className=" text-6xl ml-14">
          پژوهشسرای <span className=" text-red-600">دانش آموزی</span>
          <br />
          تائبی شهرستان ورزنه
        </h1>
      </div>

      <div>
        <div>
          <ImageSlider images={IMAGES} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
