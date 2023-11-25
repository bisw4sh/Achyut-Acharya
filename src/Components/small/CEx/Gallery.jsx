import gal1 from "../../../assets/img/carousel/1.jpeg";
import gal2 from "../../../assets/img/carousel/2.webp";
import gal3 from "../../../assets/img/carousel/3.jpg";
import gal4 from "../../../assets/img/carousel/4.jpg";
import gal5 from "../../../assets/img/carousel/5.jpg";
import gal6 from "../../../assets/img/carousel/6.webp";
import gal7 from "../../../assets/img/carousel/7.webp";
import gal8 from "../../../assets/img/carousel/8.webp";
import gal9 from "../../../assets/img/carousel/9.jpg";
import gal10 from "../../../assets/img/carousel/10.webp";
import gal11 from "../../../assets/img/carousel/11.jpg";

const Gallery = () => {

const imgList = [gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8, gal9, gal10, gal11];

return (
<div className="flex flex-col justify-center items-center py-8">

{/* Pictures */}
<div className="carousel h-5/6 rounded-xl">
    {imgList.map( ( pic, idx) => {
        return (
          <div
            id={`item${idx + 1}`}
            className="carousel-item w-full flex justify-center items-center"
            key={idx}
          >
            <img src={pic} className="w-full md:w-1/2 rounded-xl" />
          </div>
        )
    })}
</div>

{/* Buttons */}
<div className="flex justify-center w-full py-2 gap-2">
    {imgList.map(
        (pic, idx) => {
            return (
                <a href={`#item${idx + 1}`} className="btn btn-xs" key={idx + 1}>
                {idx + 1}
                </a>
            )
        }
    )}
</div>

</div>
)
}

export default Gallery;