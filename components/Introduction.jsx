import  Button  from "./Button";

const Introduction = () => {
    return (  <>
   <div className='flex flex-col justify-center items-center p-2 text-center'>
  <h1 className='text-2xl'>Welcome To Creality YEMEN</h1>
  <p className='text-xl'>Creality YE is an official distributor for Creality and Ender products here in YEMEN. Any inquiry, dont hesitate to Contact with us</p>
  <div className='flex w-full justify-center'>
    <div className='p-4'>
      <Button color={'custom-blue'} text={'Our products'}/>
    </div>
  </div>
</div>
</>);
}
 
export default Introduction;