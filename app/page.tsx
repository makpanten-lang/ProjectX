import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-screen bg-white text-black overflow-hidden">

      {/* Background */}
      <Image
        src="/hero.jpg"
        alt="Project X"
        fill
        priority
        className="object-cover brightness-75"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">

        <div className="text-center px-6">

          <p className="uppercase tracking-[8px] text-neutral-700 mb-4">
            Premium Streetwear
          </p>

          <h1 className="text-6xl md:text-8xl font-black tracking-[12px]">
            PROJECT X
          </h1>

          <p className="mt-6 max-w-xl mx-auto text-neutral-700">
            Minimal design. Premium quality.
            Designed for everyday wear.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <Link
              href="/shop"
              className="bg-black text-white px-8 py-3 uppercase tracking-widest rounded-full hover:bg-neutral-800 transition"
            >
              Shop Collection
            </Link>

            <Link
              href="/about"
              className="border border-black px-8 py-3 uppercase tracking-widest rounded-full hover:bg-black hover:text-white transition"
            >
              About
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}