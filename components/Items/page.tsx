import Image from "next/image";

export default function Item() {
  return (
    <div className="w-full px-[43px]">
      <div className="flex flex-col justify-center items-center w-full h-[154px] gap-[10px] mt-14">
        <h2 className="text-[20px] font-normal leading-[30px] tracking-[0.2px] text-center text-[#737373]">
          Featured Products
        </h2>
        <h3 className="text-[24px] font-bold leading-[32px] tracking-[0.1px] text-center text-[#252B42] w-[239px] h-[40px]">
          BESTSELLER PRODUCTS
        </h3>
        <p className="w-[261px] h-[40px] text-[14px] font-normal leading-[20px] tracking-[0.2px] text-center text-[#737373] mt-3 p-4">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {[
          "/product-cover-5.svg",
          "/second.svg",
          "/product-cover-5 (1).svg",
          "/product-cover-5 (2).svg",
          "/product-cover-5 (3).svg",
          "/filter.svg",
        ].map((src, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center w-[348px] gap-5"
          >
            <Image
              src={src}
              alt={`product-${index}`}
              width={348}
              height={427}
              className="object-cover"
            />
            <div className="flex flex-col justify-center items-center gap-3">
              <h5 className="text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center text-[#252B42]">
                Graphic Design
              </h5>
              <p className="text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center text-[#737373]">
                English Department
              </p>
              <div className="flex flex-row justify-center items-center gap-3">
                <h5 className="text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center text-[#BDBDBD]">
                  $16.48
                </h5>
                <h5 className="text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center text-[#23856D]">
                  $6.48
                </h5>
              </div>
              <div className="flex flex-row justify-center items-center gap-1.5">
                <div className="w-4 h-4 bg-[#23A6F0] rounded-full"></div>
                <div className="w-4 h-4 bg-[#23856D] rounded-full"></div>
                <div className="w-4 h-4 bg-[#E77C40] rounded-full"></div>
                <div className="w-4 h-4 bg-[#252B42] rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
