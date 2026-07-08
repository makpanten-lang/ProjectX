import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Oversized Tee",
    price: "฿1,290",
    image: "/products/tee.jpg",
  },
  {
    id: 2,
    name: "Zip Hoodie",
    price: "฿2,590",
    image: "/products/hoodie.jpg",
  },
];

export default function Shop() {
  return (
    <main className="bg-black min-h-screen text-white p-10">
      <h1 className="text-5xl font-bold mb-10">SHOP</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <Link
            key={item.id}
            href={`/shop/${item.id}`}
            className="group rounded-xl overflow-hidden border border-neutral-800 hover:border-white transition"
          >
            <div className="overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={700}
                className="w-full h-[450px] object-cover group-hover:scale-105 duration-500"
              />
            </div>

            <div className="p-5">
              <h2 className="text-xl uppercase">{item.name}</h2>
              <p className="text-gray-400 mt-2">{item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}