import WhishListItem from "@/components/WhishListItem";

const WishList = () => {
  return (
    <>
      <>
        <>
          <div className="main bg-slate-300 w-full sm:h-screen h-full flex items-center justify-center ">
            <div className="Summary e w-screen sm:w-full h-3/4 rounded-2xl justify-center flex md:flex-row flex-col">
              <div
                className="shoppingCart md:w-3/4 w-full h-full rounded-xl
                bg-lightBlue "
              >
                <h1 className="p-4 font-extrabold text-5xl">Whish List</h1>
                <hr className="border-gray-300 my-6" />
                <WhishListItem />
              </div>
            </div>
          </div>
        </>
      </>
    </>
  );
};

export default WishList;
