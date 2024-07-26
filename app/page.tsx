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
      <h1 className="font-bold text-2xl mt-10 ml-3">Golden Wedding</h1>
      <h2 className="font-bold mt-5 ml-3">Company Background</h2>
      <p className="mt-5 ml-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <h2 className="font-bold mt-5 ml-3">Our Services</h2>
      <p className="mt-5 ml-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="mt-5 mb-5 pl-3 pr-3 space-y-1 grid grid-cols-1 lg:grid-cols-2 h-[600px] lg:h-[500px] lg:space-y-0 lg:space-x-1">
        {contentImages.map((content) => (
          <div key={content.name} className="relative col-span-1">
            <Image
              src={content.src}
              fill
              alt={content.name}
              className="object-cover mb-2 rounded-xl"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
