import Image from "next/image";

export default function Section1() {
  return (
    <div className="h-[1300px] w-full bg-[#23856D]">
      <div className="w-full h-[1252px] mt-[48px] pt-[112px] pb-[112px] gap-[80px]">
        <div className="w-full h-[1236px] px-0 py-12 gap-[30px]">
          <div className="flex flex-col justify-center items-center w-full h-[429px] gap-[35px]">
            <h5 className="text-[20px] font-normal leading-[30px] tracking-[0.2px] text-center text-white h-8 w-[154px]">
              SUMMER 2020
            </h5>
            <h1 className="text-white text-[40px] font-bold leading-[50px] tracking-[0.2px] text-center w-[246px] h-[100px]">
              Vita Classic Product
            </h1>
            <h4 className="text-white w-[291px] h-[90px] text-[20px] font-normal leading-[30px] tracking-[0.2px] text-center p-5 m-5 mt-0">
              We know how large objects will act, but things on a small scale.
            </h4>
            <div className="flex flex-col justify-center items-center max-w-[184px] max-h-[104px] gap-[20px]">
                <h3 className="text-white w-[77px] h-[32px] text-[24px] font-bold leading-[32px] tracking-[0.1px] text-center">$16.48</h3>
                <button className="text-white inline-flex items-center p-[15px] px-[40px] gap-[10px] max-w-[184px] max-h-[52px] rounded-tl-[5px] bg-[#2DC071] text-[14px] font-bold leading-[22px] tracking-[0.2px] text-center">ADD TO CART</button>
            </div>
          </div>
          <div className="w-full h-[681px]">
            <Image src={"/png-cover.svg"} alt="cover" width={416} height={681} className="object-cover mt-[4.7rem]"></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
