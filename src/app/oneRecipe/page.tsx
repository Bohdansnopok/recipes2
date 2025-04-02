import Image from "next/image";
import recipe from "../../../public/recipeOneItem.png"

export default function oneRecipe() {
    return (
        <section className="pt-[40px] pb-[52px]">
            <div className="container">
                <div className="flex items-start justify-between">
                    <Image src={recipe} alt="" />
                    <div>
                        <h2 className="font-semibold">Dune</h2>
                        <div className="text-black/60 text-[20px] font-semibold">Frank Herbert</div>
                    </div>
                </div>

                <div className="mt-10">
                    <h4>Summary</h4>
                    <p className="text-[#09093799] mt-[10px]">
                        Dune is set in the distant future amidst a feudal interstellar
                        society in which various noble houses control planetary fiefs. It tells the
                        story of young Paul Atreides, whose family accepts the stewardship of the
                        planet Arrakis. While the planet is an inhospitable and sparsely populated
                        desert wasteland, it is the only source of melange, or "spice", a drug that 
                        extends life and enhances mental abilities. Melange is also necessary for
                        space navigation, which requires a kind of multidimensional awareness and 
                        foresight that only the drug provides. As melange can only be produced on 
                        Arrakis, control of the planet is a coveted and dangerous undertaking. The 
                        story explores the multilayered interactions of politics, religion, ecology,
                        technology, and human emotion, as the factions of the empire confront each other
                        in a struggle for the control of Arrakis and its spice.
                    </p>
                </div>

                <div className="w-full flex justify-end"><button className="yellowBtn w-[400px] mt-16">Add To Favorite</button></div>
            </div>
        </section>
    );
}
