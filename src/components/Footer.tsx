import Image from "next/image";
import logoTwo from "../../public/logotwo.svg"

export default function Footer() {
    return (
        <footer className="pt-[26px] pb-[65px] bg-black text-white">
            <div className="headerContainer">
                <div className="pb-[25px] border-b border-white">
                    <Image src={logoTwo} alt="" />
                </div>

                <div className="flex justify-between w-full pt-10">
                    <div className="text-[12px]">© 2025 | Neth BookPoint</div>
                    <p className="text-[14px] text-[var(--salade)]">Explore our delicious recipes inspired by the flavors of Galle, Kurunegala, Kandy, and Colombo, and sign up on our online platform to unlock exclusive culinary delights! 🍽️✨</p>
                </div>
            </div>
        </footer>
    );
}
