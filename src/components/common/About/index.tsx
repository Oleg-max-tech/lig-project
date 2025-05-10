import Link from "next/link";
import Image from "next/image";
import homeImage from "@/assets/home-Image.jpg";
import briefcase from "@/assets/briefcase.svg";
import chart from "@/assets/chart.svg";
import verify from "@/assets/verify.svg";

export const AboutSection = () => {
  return (
    <section className="bg-black text-white px-6 py-16 w-full">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 space-y-6">
          <h2 className="text-4xl font-bold text-white uppercase lg:text-left">
            About Us
          </h2>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center lg:items-start">
            <div className="w-full lg:w-2/5 lg:text-left">
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

          <div className="lg:hidden mt-10 w-full flex justify-center">
            <Link href="/" passHref>
              <Image src={homeImage} alt="Logo" className="w-full h-100" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-6">
            <div className="flex flex-col items-start gap-4">
              <Image src={briefcase} width={40} height={40} alt="briefcase" />
              <h3 className="text-xl font-semibold">Expertise</h3>
              <p className="text-sm text-gray-400">
                We prioritize the well-being and safety of our customers and
                employees. We continuously elevate our team’s craftsmanship,
                ensuring customer satisfaction.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <Image src={chart} width={40} height={40} alt="chart" />
              <h3 className="text-xl font-semibold">Integrity</h3>
              <p className="text-sm text-gray-400">
                The highest ethical standards are crucial, and we take
                responsibility for our actions by always going the extra mile.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <Image src={verify} width={40} height={40} alt="verify" />
              <h3 className="text-xl font-semibold">Quality</h3>
              <p className="text-sm text-gray-400">
                Our commitment to excellence in all we do focuses on quality and
                continuous craft improvement.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex lg:col-span-2 justify-center items-center mt-10 lg:mt-0">
          <Link href="/" passHref>
            <Image src={homeImage} alt="Logo" className="w-full h-100" />
          </Link>
        </div>
      </div>
    </section>
  );
};
