import Image from "next/image";
import recipe from "../../public/recipe.jpg"
import arrow from "../../public/Icon.svg"
import arrowRight from "../../public/right-arrow.svg"
import arrowLeft from "../../public/left-arrow.svg"

export default function Home() {
  return (
    <>
      <section className="container pt-9 pb-9">
        <div>
          <h1 className="text-[var(--salade)] text-center">Explore All Books Here</h1>

          <div className="grid grid-cols-3 gap-14 mt-9">
            <div className="border border-black/45 pb-5 rounded-[10px]">
              <Image src={recipe} alt="" />

              <div className="px-3">
                <div className="mt-4 text-[19px] font-semibold">
                  Crochet Projects for Noodle Lovers
                </div>

                <div className="text-black/45 text-[14px] my-2">12 November 2021</div>

                <p className="text-black/45">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim</p>

                <div className="flex justify-center w-full mt-9">
                  <button className="transparentBtn">
                    Read More
                    <Image src={arrow} alt="" className="ml-8" />
                  </button>
                </div>
              </div>
            </div>


            <div className="border border-black/45 pb-5 rounded-[10px]">
              <Image src={recipe} alt="" />

              <div className="px-3">
                <div className="mt-4 text-[19px] font-semibold">
                  Crochet Projects for Noodle Lovers
                </div>

                <div className="text-black/45 text-[14px] my-2">12 November 2021</div>

                <p className="text-black/45">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim</p>

                <div className="flex justify-center w-full mt-9">
                  <button className="transparentBtn">
                    Read More
                    <Image src={arrow} alt="" className="ml-8" />
                  </button>
                </div>
              </div>
            </div>


            <div className="border border-black/45 pb-5 rounded-[10px]">
              <Image src={recipe} alt="" />

              <div className="px-3">
                <div className="mt-4 text-[19px] font-semibold">
                  Crochet Projects for Noodle Lovers
                </div>

                <div className="text-black/45 text-[14px] my-2">12 November 2021</div>

                <p className="text-black/45">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim</p>

                <div className="flex justify-center w-full mt-9">
                  <button className="transparentBtn">
                    Read More
                    <Image src={arrow} alt="" className="ml-8" />
                  </button>
                </div>
              </div>
            </div>


            <div className="border border-black/45 pb-5 rounded-[10px]">
              <Image src={recipe} alt="" />

              <div className="px-3">
                <div className="mt-4 text-[19px] font-semibold">
                  Crochet Projects for Noodle Lovers
                </div>

                <div className="text-black/45 text-[14px] my-2">12 November 2021</div>

                <p className="text-black/45">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim</p>

                <div className="flex justify-center w-full mt-9">
                  <button className="transparentBtn">
                    Read More
                    <Image src={arrow} alt="" className="ml-8" />
                  </button>
                </div>
              </div>
            </div>


            <div className="border border-black/45 pb-5 rounded-[10px]">
              <Image src={recipe} alt="" />

              <div className="px-3">
                <div className="mt-4 text-[19px] font-semibold">
                  Crochet Projects for Noodle Lovers
                </div>

                <div className="text-black/45 text-[14px] my-2">12 November 2021</div>

                <p className="text-black/45">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim</p>

                <div className="flex justify-center w-full mt-9">
                  <button className="transparentBtn">
                    Read More
                    <Image src={arrow} alt="" className="ml-8" />
                  </button>
                </div>
              </div>
            </div>


            <div className="border border-black/45 pb-5 rounded-[10px]">
              <Image src={recipe} alt="" />

              <div className="px-3">
                <div className="mt-4 text-[19px] font-semibold">
                  Crochet Projects for Noodle Lovers
                </div>

                <div className="text-black/45 text-[14px] my-2">12 November 2021</div>

                <p className="text-black/45">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim</p>

                <div className="flex justify-center w-full mt-9">
                  <button className="transparentBtn">
                    Read More
                    <Image src={arrow} alt="" className="ml-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full gap-3 mt-16">
            <button className="bg-black rounded-full p-[10px] cursor-pointer"><Image src={arrowLeft} alt="" /></button>
            <button className="bg-black rounded-full p-[10px] cursor-pointer"><Image src={arrowRight} alt="" /></button>
          </div>
        </div>
      </section>
    </>
  );
}
