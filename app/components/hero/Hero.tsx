import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center "
      style={{
        backgroundImage:
          "url('https://www.intrepidtravel.com/adventures/wp-content/uploads/2017/10/Gondar-e1509200828193.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold mb-6">
          Explore the World with Confidence
        </h1>
        <p className="text-lg mb-8">
          Find the best places to visit, eat, and stay around the globe.
        </p>
        <Link
          href="https://www.travelplannerai.online/"
          className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-lg"
        >
          Travel With AI
        </Link>
      </div>
    </section>
  );
};

export default Hero;
