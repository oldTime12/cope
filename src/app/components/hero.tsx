import Image, { StaticImageData } from "next/image";

interface IProps {
    imgUrl:StaticImageData | string
    altTxt:string
    content:string
}

export default function Page(prop:IProps) {
  return (
    <div className=" h-screen relative">
      <div className="absolute inset-0  -z-10">
        <Image
          src={prop.imgUrl}
          alt={prop.altTxt}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950"></div>
      </div>
      <div className="flex justify-center pt-48 ">
        <h1 className="text-white text-6xl">
        {prop.content}
        </h1>
      </div>
    </div>
  );
}
