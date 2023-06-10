import Button from './Button'
const ProductDescription = () => {
    return ( <>
  <div className='h-full flex flex-col '>
    <div className="title text text-4xl h-1/5 text-start p-20"><h1>Ender 3 pro V2 3D printer</h1></div>
    <hr/>
 
    <div className="parent price flex flex-row justify-between text-start p-20  w-full">
        <div className="price text-2xl font-bold">199$</div>
        <div className="button"><Button text={'Add to Cart'} color={'custom-blue'}/></div>
    </div>

    <div className='description p-20'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, ratione architecto aperiam illo quam non doloribus accusamus porro ipsa vel dolorum. Sit officia accusantium, vitae molestiae dignissimos pariatur eos soluta, doloribus consequuntur tempore deserunt laboriosam quasi aliquid sapiente veniam reiciendis ad ipsam accusamus omnis dolore distinctio nam ducimus, quae at!</p></div>
  </div>

    </> );
}
 
export default ProductDescription;