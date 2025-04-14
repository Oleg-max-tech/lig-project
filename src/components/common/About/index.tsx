import { Image1 } from "@/assets/About";
import { AboutCardsGrid } from "./AboutCardsGrid";

export const AboutSection = () => {
  return (
    <section className="bg-black text-white px-6 py-16 w-full">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 space-y-6">
          <h2 className="text-4xl font-bold text-white uppercase  lg:text-left">
            About Us
          </h2>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center lg:items-start">
            <div className="w-full lg:w-2/5  lg:text-left">
              <p>
                We strive to enhance the aesthetics of neighborhoods, one
                building at a time. With a focus on exterior siding for
                commercial, residential, and government structures, we provide
                solutions tailored to our clients' needs.
              </p>
            </div>

            <div className="w-full lg:w-3/5 lg:text-left">
              <p>
                We specialize in exterior siding for commercial, residential,
                and government structures. Materials such as Nichiha panels,
                James Hardie siding, Tresspa panels, wood siding, Cement panels,
                architectural panels, vinyl siding, and ACM metal panels are
                high-quality materials we use on our projects. Please evaluate
                our work in more detail under the Projects tab.
              </p>
            </div>
          </div>

          <div className="block lg:hidden">
            <div className="w-full mt-10">
              <Image1 />
            </div>
          </div>

          <AboutCardsGrid />
        </div>

        <div className="hidden lg:flex lg:col-span-2 justify-center items-center mt-10 lg:mt-0">
          <Image1 />
        </div>
      </div>
    </section>
  );
};
