import Icons from './footer-icons';

export default function footer() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <p>Socials</p>
        <div className="flex gap-1 flex-1 justify-center">
          <Icons />
        </div>
        <h2 className="font-bold mt-3">GLDNHRVST.</h2>
        <p>Golden Harvest</p>
        <p>© ZwiftTech. All Right Reserved.</p>
      </div>
    </>
  );
}
