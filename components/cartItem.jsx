import Image from "next/image";
import Counter from "./Counter";
const CartItem = () => {
  return (
    <>
      <div className="flex sm:flex-row flex-col items-center justify-center ">
        <div className="sm:container p-2 flex items-center sm:justify-around justify-between flex-wrap sm:flex-nowrap ">
          <div className=" Image  sm:w-1/4 flex sm:flex-row flex-col  w-[5rem]">
            <Image
              src="https://m.media-amazon.com/images/I/413Qxx3iX4L._SY445_SX342_QL70_ML2_.jpg"
              alt="item"
              width={200}
              height={200}
            />
            <div className="sm:pl-3 pl-0 flex justify-center  flex-col">
              <div className=" flex  sm:flex-wrap">
                <h1 className="text text-xl flex sm:whitespace-nowrap">
                  Item Type
                </h1>
              </div>
              <div className="flex md:flex-col flex-row">
                <h1 className="text text-2xl block sm:whitespace-nowrap">
                  Item Name
                </h1>
              </div>
            </div>
          </div>

          <div className="pr-36   flex  flex-wrap">
            <Counter />
          </div>

          <div className="  flex items-start ">
            <h2 className="text-2xl font-semibold">999$</h2>
          </div>

          <div className=" flex items-center justify-center">
            <button className="bg-gray-300 font-bold text-2xl rounded-full w-[2rem]">
              X
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 my-6" />
    </>
  );
};

export default CartItem;
