import Image from "next/image";
export default function Home() {
  return (
    <main>
      <header className="flex py-1 px-1 text-2xl bg-red-700">
            <Image className="w-23 h-25 md:w-15 ml-0"
              src="/mantech.png"
              alt=""
              width={100}
              height={24}
            />
      </header>
      <div className="text-5xl text-bold text-blue-800"> Riaz Ahmad Arrain </div>
      <h5>
        <p>Web Developer, IT Expert</p>
      </h5>

        <Image
          className="mx-auto mr-0"
          src="/riaz.png"
          alt="Next.js Logo"
          width={500}
          height={500}
          priority
        />
      
    </main>
  );
}
