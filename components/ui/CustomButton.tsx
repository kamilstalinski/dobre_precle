import { ButtonProps } from "@/types";
import Link from "next/link";

const CustomButton = ({ text, color, link, dataAos }: ButtonProps) => {
  return (
    <>
      <button
        className={`px-8 py-4 rounded-lg text-white ${color} hover:bg-[#971C25] transition-all`}
        data-aos={dataAos}>
        <Link href={link}>{text}</Link>
      </button>
    </>
  );
};

export default CustomButton;
