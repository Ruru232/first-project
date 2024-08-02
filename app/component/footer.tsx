import Icons from './footer-icons';

export default function footer() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <p className="text-sm md:text-base">Socials</p>
        <div className="flex gap-1 flex-1 justify-center">
          <Icons />
        </div>
        <h2 className="font-bold mt-3 text-base md:text-xl">GLDNHRVST.</h2>
        <p className="text-sm md:text-base">Golden Harvest</p>
        <p className="text-sm md:text-base">© ZwiftTech. All Right Reserved.</p>
      </div>
    </>
  );
}
