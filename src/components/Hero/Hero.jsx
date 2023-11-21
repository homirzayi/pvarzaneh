import ImageSlider from "../ImageSlider/ImageSlider";
import IMAGES from "../../data/imageSlider-data";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function Hero() {
  return (
    <section className=" lg:columns-2 mx-6 my-8">
      <div>
        <h1 className=" text-6xl ml-14">
          پژوهشسرای <span className="mt-6 text-red-600">دانش آموزی</span>
          <br />
          تائبی شهرستان ورزنه
        </h1>
        <div className="my-10 text-center">
          <Button>
            <Link to="/novbat">دریافت نوبت حضور در پژوهشسرا</Link>
          </Button>
        </div>
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
