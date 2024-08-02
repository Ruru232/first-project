import Image from 'next/image';
import Icons from './header-icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function header() {
  return (
    <div className="w-full">
      <div className="relative w-full h-32 md:h-72 lg:h-96">
        <Image
          src="/img/banner1.png"
          alt="banner"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 10%"
        />
      </div>
      <div className="relative -top-10">
        <Avatar className="absolute border-2 ml-3 border-white w-20 h-20 md:w-52 md:h-52">
          <AvatarImage src="/img/profile.png" alt="profile" />
          <AvatarFallback>HW</AvatarFallback>
        </Avatar>
        <div className="flex gap-1 flex-1 justify-end">
          <Icons />
        </div>
        <div className="flex flex-col ml-5 mt-1 md:mt-0 md:ml-60">
          <h1 className="font-bold text-xl md:text-2xl">Hussain Watkins</h1>
          <span className="text-sm md:text-base">SALES MANAGER</span>
          <span className="text-sm md:text-base">H.Watkins@gmail.com</span>
          <span className="text-sm md:text-base">+639123456789</span>
        </div>
      </div>
    </div>
  );
}
