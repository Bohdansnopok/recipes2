import Image from "next/image";
import loginLeft from "../../../public/loginLeft.jpg"
import email from "../../../public/email.svg"
import eye from "../../../public/Eye.svg"

export default function Login() {
    return (
        <section className="bg-black text-white">
            <div className="headerContainer flex items-center gap-21">
                <Image src={loginLeft} alt="" />
                <div>
                    <h2 className="text-[var(--salade)] text-center">Welcome to Neth BookPoint!</h2>
                    <p className="text-center mt-5">
                        Discover a seamless way to sell your books and unlock exclusive benefits. Enjoy a hassle-free experience, save valuable time, and take advantage of our amazing offers.
                    </p>

                    <form action="" className="mt-[50px]">
                        <h3 className="text-[var(--salade)] text-center">Login to Your Account!</h3>
                        <div className="mb-[10px] mt-[50px] relative">
                            <input type="text" placeholder="Enter Email" className="w-full text-[20px] rounded-[10px] bg-[#D6CE80] py-5 px-8 text-[#434244] placeholder:text-[#434244]" />
                            <div className="absolute top-[22px] right-[38px]"><Image src={email} alt="" /></div>
                        </div>

                        <div className="mb-[14px] relative">
                            <input type="text" placeholder="Enter Password" className="w-full text-[20px] rounded-[10px] bg-[#D6CE80] py-5 px-8 text-[#434244] placeholder:text-[#434244]" />
                            <div className="absolute top-[22px] right-[38px]"><Image src={eye} alt="" /></div>
                        </div>
                        <div className="text-[#D6CE80] text-[20px] text-right">Forgot Password?</div>

                        <div className="flex items-center justify-between w-full text-[22px] mt-[50px] pb-2 border-b border-[#A59F9F]">
                            <div>Don't you have an account?</div>
                            <a href="#" className="text-[#F29C0D] font-semibold">Create an account</a>
                        </div>

                        <div className="flex justify-center w-full">
                            <button type="submit" className="bg-[var(--salade)] text-[22px] font-bold py-[10px] px-[38px] rounded-[15px] mt-[50px]">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
