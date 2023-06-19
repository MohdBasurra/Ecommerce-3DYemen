import { useState } from 'react';
 const DropDown = ({DropName,arr}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };
    return ( <>
    <div className="parent ">
            <div>
                <div className="product border border-b-black">
            
                <>
      <button
        id="dropdownDividerButton"
        data-dropdown-toggle="dropdownDivider"
        className="text-black text-2xl     font-medium rounded-lg px-4 py-2.5 text-center inline-flex items-center  "
        type="button"
        onClick={toggleDropdown}
      >
        {DropName}
         <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isDropdownOpen && (
        <div
          id="dropdownDivider"
          className="swipeable overflow-y-scroll h-[15rem]"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
          <hr className="bg-red-900"></hr>

          


{arr.map((item) => (
          <div key='' >     <li>
                      <hr className="bg-red-900"></hr>

          <label className="inline-flex items-center text-xl p-2 font-semibold">
            <input type="checkbox" className="form-checkbox p-2 " />
            <span className="ml-2 text-gray-700 dark:text-gray-200">{item}</span>
          </label>
        </li></div>
        ))}
         
          </ul>
        </div>
      )}
    </>

            
                </div>
            </div>

    </div>
    </> );
}
 
export default DropDown;