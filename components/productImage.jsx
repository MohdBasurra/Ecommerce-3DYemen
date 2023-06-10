import { useState } from "react";
import Image from "next/image";

const ProductImage = () => {
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return ( 
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="md:w-full flex pt-2 items-center justify-center">
          <Image alt="dsf" src={selectedImage || "https://m.media-amazon.com/images/I/41AyZR+YfLL._SX342_SY445_.jpg"} width={600} height={500} />
        </div>
        <div className="flex flex-row  md:ml-4 w-full gap-2 justify-center p-8 items-center">
          <div className={`cursor-pointer ${selectedImage === "https://m.media-amazon.com/images/I/41AyZR+YfLL._SX342_SY445_.jpg" ? 'border-4 border-custom-blue' : ''}`} onClick={() => handleImageClick("https://m.media-amazon.com/images/I/41AyZR+YfLL._SX342_SY445_.jpg")}>
            <Image alt="dsf" src="https://m.media-amazon.com/images/I/41AyZR+YfLL._SX342_SY445_.jpg" width={`${selectedImage === "https://m.media-amazon.com/images/I/41AyZR+YfLL._SX342_SY445_.jpg" ? 120 : 100}`} height={200} />
          </div>
          <div className={`cursor-pointer ${selectedImage === "https://m.media-amazon.com/images/I/413Qxx3iX4L._SY445_SX342_QL70_ML2_.jpg" ? 'border-4 border-custom-blue' : ''}`} onClick={() => handleImageClick("https://m.media-amazon.com/images/I/413Qxx3iX4L._SY445_SX342_QL70_ML2_.jpg")}>
            <Image alt="dsf" src="https://m.media-amazon.com/images/I/413Qxx3iX4L._SY445_SX342_QL70_ML2_.jpg" width={`${selectedImage === "https://m.media-amazon.com/images/I/413Qxx3iX4L._SY445_SX342_QL70_ML2_.jpg" ? 120 : 100}`} height={200} />
          </div>
          <div className={`cursor-pointer ${selectedImage === 'https://m.media-amazon.com/images/I/51ZWOI8LxiS._SX522_.jpg' ? 'border-4 border-custom-blue' : ''}`} onClick={() => handleImageClick('https://m.media-amazon.com/images/I/51ZWOI8LxiS._SX522_.jpg')}>
            <Image alt="dsf" src='https://m.media-amazon.com/images/I/51ZWOI8LxiS._SX522_.jpg' width={`${selectedImage === 'https://m.media-amazon.com/images/I/51ZWOI8LxiS._SX522_.jpg' ? 120 : 100}`} height={200} />
          </div>
        </div>
      </div>
    </>
  );
};
 
export default ProductImage;