const FooterComp = () => {
  return (
    <div className="bg-black flex justify-center max-w-full py-5 px-2 xl:px-0">
      <div className="2xl:w-[1536px] w-full">
        <div className="text-3xl text-yellow-400">Bechakena.com</div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-1 mx-[-0.5rem] px-[0.5rem] items-stretch">
          <div className="text-white sm:w-full w-full sm:py-2 py-0">
            <div className="text-xs sm:text-sm">
              As a big E-commerce site, we ensure quality and deliver products
              on your hand.
            </div>
          </div>
          <div className="text-white sm:w-full w-full sm:py-2 py-0">
            <div className="text-xs sm:text-sm">Contact</div>
            <div className="text-xs sm:text-sm">ms@minhajsorder.com</div>
          </div>
          <div className="text-white sm:w-full w-full sm:py-2 py-0">
            <div className="text-xs sm:text-sm">About</div>
            <div className="text-xs sm:text-sm">Privacy Policy</div>
          </div>
          <div className="text-white sm:w-full w-full sm:py-2 py-0">
            <div className="text-xs sm:text-sm">Terms of condition</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
