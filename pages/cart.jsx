
import CartItem from "../components/cartItem";
import React, { useState } from 'react';
const Cart = () => {
    const [showCopon, setShowCopon] = useState(false);

    function handleCheckboxChange(event) {
        setShowCopon(event.target.checked);
      }

  return (
    <>
      <>
        <div className="main bg-slate-300 w-full sm:h-screen h-full flex items-center justify-center ">
          <div className="Summary  bg-custom-blue w-screen sm:w-5/6 h-3/4 rounded-2xl justify-center flex md:flex-row flex-col">
            <div
              className="shoppingCart  md:w-3/4 w-full    h-full  sm:rounded-l-xl sm:rounded-r-none rounded-t-2xl  rounded-e-none 
                bg-lightBlue "
            >
              <h1 className="p-4 font-extrabold text-5xl">Shopping Cart</h1>
              <hr className="border-gray-300 my-6" />
              <CartItem />
            </div>

            <div className="Login sm:w-1/3 bg-white w-full h-full flex items-start justify-start flex-col">
              <h1 className="p-4 font-extrabold text-5xl">Summary</h1>

              <hr className="border-blue-900 my-6" />

              <form className=" w-full p-12">
                <div>
                  <div className="Items and price flex flex-row justify-between">
                    <label
                      for="text"
                      class="block mb-2 text-xl font-bold text-gray-900 dark:text-white"
                    >
                      Items 3
                    </label>
                    <label
                      for="text"
                      class="block mb-2 text-sl font-bold text-gray-900 dark:text-white"
                    >
                      3000$
                    </label>
                  </div>
                  <label
                    for="text"
                    class="block mt-8 text-xl font-bold text-gray-600 dark:text-white"
                  >
                    Shipping
                  </label>
                  <hr className="border-blue-900 my-6 mx-1" />

                  <label
                    for="text"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Governent
                  </label>
                  <select
                    name="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-custom-blue focus:border-custom-blue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  >
                    <option value="">Select Governent</option>
                    <option value="Ali">Hadhramout</option>
                    <option value="Ahmed">Sana`a</option>
                    <option value="Sara">Marib</option>
                    <option value="Fatima">Taiz</option>
                    <option value="Fatima">Shabowa</option>
                    <option value="Fatima">Aden</option>
                    
                  </select>
                  <label
                    for="text"
                    class="  mb-2 text-sm font-medium text-gray-500 dark:text-white"
                  >
                   *Shipping time to Huthi Governent may take more than 5 Days
                  </label>
                </div>
                <div className="pt-4 checkbox flex flex-row">
                <input
        type="checkbox"
        name="terms"
        id="terms"
        className="form-checkbox h-5 w-5 text-custom-blue"
         
        onChange={handleCheckboxChange}
      />
      <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
        I have a Copon
      </label></div>
      {showCopon && (
        <div className="Copon">
          <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            discount code
          </label>
          <input
            type="text"
            name="Coupon"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-custom-blue focus:border-custom-blue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ZA-55"
            required
          />
        </div>
        
      )}
                  <hr className="border-gray-900 my-6" />
                  <div className="Items and price flex flex-row justify-between">
                    <label
                      for="text"
                      class="block mb-2 text-2xl font-bold text-gray-900 dark:text-white"
                    >
                     TOTAL PRICE
                    </label>
                    <label
                      for="text"
                      class="block mb-2 text-2xl font-bold text-gray-900 dark:text-white"
                    >
                      19000$
                    </label>
                  </div>
                  <button
                        type="submit"
                        class="w-full text-black text-xl bg-custom-blue hover:bg-lightBlue focus:ring-4   focus:ring-blue-900 font-medium rounded-lg   px-5 py-2.5 text-center"
                      >
                        CHECKOUT
                      </button>
              </form>
            </div>

           
          </div>
          
        </div>
      </>
    </>
  );
};

export default Cart;
