import Image from "next/image";
import logo from "../../public/logo.png"
import avatar from "../../public/avatar.svg"

export default function Header() {
  return (
    <header className="pt-[10px] pb-[10px]">
      <div className="headerContainer flex items-center justify-between">
        <div className="flex items-center">
          <Image src={logo} alt="" />
          <div className="text-[var(--salade)] text-[28px] font-bold ml-5">Culinary Insight</div>
        </div>

        <div className="flex items-center gap-13">
          <a href="#" className="text-[20px] text-white hover:text-orange-300 transition-colors duration-300">Home</a>
          <a href="#" className="text-[20px] text-[var(--salade)] hover:text-gray-500 transition-colors duration-300">Add Recipe</a>
          <a href="#" className="text-[20px] text-white hover:text-orange-300 transition-colors duration-300">Recipes</a>
        </div>

        <div className="flex flex-col items-center text-white text-[11px]">
          <Image src={avatar} alt="" />
          <div>user1@bookpoint.com</div>
        </div>
      </div>
    </header>
  );
}
