 import Image from 'next/image';

const Profile = () => {
    return ( 
    <div className="flex justify-center items-start sm:items-center sm:pt-0 pt-4  bg-gray-200   h-screen sm:w-full  ">
    <div className="felx justify-center items-center h-2/3 sm:w-3/4     ">
         <div className="   flex justify-center items-center w-full h-full      ">
    <div className="flex flex-col md:flex-row w-full h-full  ">
      <div className=" sm:w-full w-sc md:w-1/3 border-r    h-full bg-lightBlue rounded-3xl sm:rounded-r-none rounded-e-none rounded-tr-3xl">
        <div className="flex flex-col items-center text-center    w-screen bg-lightBlue sm:rounded-r-none rounded-b-none  rounded-3xl sm:w-full">
        <div className="rounded-full bg-red-900 contain sm:mt-8 ">
  <Image width="300" height={500} className=" w-24 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile picture" />
</div>
          <span className="font-bold text-lg mt-3">John Doe</span>
          <span className="text-gray-600">john_doe12@bbb.com</span>
          <span>United States</span>
        </div>
      </div>
      <div className=" sm:w-full w-sc md:w-2/3 bg-custom-blue rounded-2xl sm:rounded-tr-3xl rounded-t-none sm:rounded-l-none">
        <div className="p-3 py-5">
          <div className="flex justify-between items-center mb-3">
           
            <h6 className="text-right">Edit Profile</h6>
          </div>
          <form className="grid grid-cols-2 gap-4 mt-2  ">
            <div className="col-span-1 flex flex-col">
              <label htmlFor="firstName" className="mb-1">First Name</label>
              <input type="text" className="form-input rounded-lg" placeholder="first name" id="firstName" />
            </div>
            <div className="col-span-1 flex flex-col">
              <label htmlFor="lastName" className="mb-1">Last Name</label>
              <input type="text" className="form-input rounded-lg"  placeholder="Doe" id="lastName" />
            </div>
            <div className="col-span-1 flex flex-col">
              <label htmlFor="email" className="mb-1">Email</label>
              <input type="text" className="form-input rounded-lg" placeholder="Email"  id="email" />
            </div>
            <div className="col-span-1 flex flex-col">
              <label htmlFor="phone" className="mb-1">Phone Number</label>
              <input type="text" className="form-input rounded-lg" placeholder="Phone number" id="phone" />
            </div>
           
            <div className="col-span-1 flex flex-col">
              <label htmlFor="country" className="mb-1">Country</label>
              <select
     //   value={selectedGovernment}
        //onChange={handleGovernmentChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-lightBlue focus:border-ring-lightBlue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  focus:ring-lightBlue focus:border-custom-blue"
        required
      >
        <option value="" disabled>Select a government</option>
        <option value="Sana'a">Sanaa</option>
        <option value="Hadhramout">Hadhramout</option>
        <option value="Shabwa">Shabwa</option>
        <option value="Aden">Aden</option>
        <option value="Taiz">Taiz</option>
      </select>            </div>
            
          </form>
          <div className="mt-5 text-right flex items-center justify-center ">
            <button className=" bg-blue-500 text-white font-bold py-2 px-4 rounded profile-button" type="button">Save Profile</button>
          </div>
        </div>
      </div>
    </div>
  </div></div> </div>);
}
 
export default Profile;