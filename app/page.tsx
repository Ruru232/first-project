import { Separator } from '@/components/ui/separator';
import Header from './component/header';
import Image from 'next/image';

export default function Home() {
  const contentImages = [
    { src: '/img/content-1.png', name: 'content-1' },
    { src: '/img/content-2.png', name: 'content-2' },
  ];

  return (
    <main className="min-w-screen max-w-[1024px] mx-auto">
      <Header />
      <Separator />
      <h1 className="font-bold text-xl md:text-2xl mt-10 ml-3">
        Golden Wedding
      </h1>
      <h2 className="font-bold text-base md:text-xl mt-5 ml-3">
        Company Background
      </h2>
      <p className="mt-5 ml-3 text-sm md:text-base">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <h2 className="font-bold text-base md:text-xl mt-5 ml-3">Our Services</h2>
      <p className="mt-5 ml-3 text-sm md:text-base">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="mt-5 mb-5 pl-3 pr-3 space-y-1 grid grid-cols-1 md:grid-cols-2 md:space-y-0 md:space-x-1 lg:grid-cols-2 lg:space-y-0 lg:space-x-1">
        {contentImages.map((content) => (
          <div
            key={content.name}
            className="relative col-span-1 w-full h-0 pb-[80.25%] overflow-hidden"
          >
            <Image
              src={content.src}
              layout="fill"
              alt={content.name}
              className="object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
