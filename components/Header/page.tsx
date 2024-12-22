import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white h-[512px] w-full">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center m-4">
          <span className="text-2xl font-bold leading-8 tracking-[0.1px] text-left text-black">Bandage</span>
        </div>

        <div className="flex items-center m-2 space-x-10">
          <button aria-label="Search" className="text-[#252B42]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 4a6 6 0 100 12 6 6 0 000-12zm8.707 13.293a1 1 0 011.414 0l2 2a1 1 0 01-1.414 1.414l-2-2a1 1 0 010-1.414z"
              />
            </svg>
          </button>

          <button aria-label="Cart" className="text-[#252B42]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l1.68 9.39a2 2 0 002 1.61h9.64a2 2 0 002-1.61L21 6H6"
              />
            </svg>
          </button>

          <button aria-label="Menu" className="text-[#252B42]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      <nav className="bg-white m-20 p-2">
        <ul className="space-y-8 text-center">
          <li>
            <Link href="/"
              className="text-[30px] font-normal leading-[45px] tracking-[0.2px] text-center text-[#737373]">Home
            </Link>
          </li>
          <li>
            <Link href="/product"
              className="text-[30px] font-normal leading-[45px] tracking-[0.2px] text-center text-[#737373]">Product
            </Link>
          </li>
          <li>
            <Link href="/pricing"
               className="text-[30px] font-normal leading-[45px] tracking-[0.2px] text-center text-[#737373]">Pricing
            </Link>
          </li>
          <li>
            <Link href="/contact"
              className="text-[30px] font-normal leading-[45px] tracking-[0.2px] text-center text-[#737373]">Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
