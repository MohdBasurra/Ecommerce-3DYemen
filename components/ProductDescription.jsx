import Button from "./Button";
import Counter from "./Counter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ProductDescription = () => {
  return (
    <>
      <div className="h-full flex flex-col    ">
        <div className="title text-2xl sm:text-4xl    font-bold text-start   p-6 pb-12  ">
          <h1>Ender 3 pro V2 3D printer</h1>
        </div>
        <hr />

        <div className="pl-2 sm:pl-8  ">
          <div className="price parent flex justify-center sm:justify-start   order-2  ">
            <div className="price text-2xl p-4 sm:text-4xl font-bold flex flex-col sm:p-6 ">
              199$
            </div>
          </div>

          <div className="description  p-4      ">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure,
                ratione architecto aperiam illo quam non doloribus accusamus
                porro ipsa vel dolorum. Sit officia accusantium, vitae molestiae
                dignissimos pariatur eos soluta, doloribus consequuntur tempore
                deserunt laboriosam quasi aliquid sapiente veniam reiciendis ad
                ipsam accusamus omnis dolore distinctio nam ducimus, quae at!
              </p>
            </div>

            <div className="flex sm:flex-row flex-col w-full pt-8 ">
              <div className="block   w-full  ">
                <p>
                  <span className="font-bold">print Size :</span> 22 *44*44 mm
                </p>
                <p className="block">
                  <span className="font-bold">package size:</span> 700 *779*677
                  mm
                </p>
                <p className="block">
                  <span className="font-bold">max bed Heat :</span> 300c mm
                </p>
                <p className="block">
                  <span className="font-bold">max spedd :</span> 500 mm/s mm
                </p>
              </div>
              <div className="block sm:w-1/2 w-full  ">
                <p className="block">
                  <span className="font-bold">heat sink Size :</span> metal mm
                </p>
                <p className="block">
                  {" "}
                  <span className="font-bold">extruder feeder :</span> direct mm
                </p>
                <p className="block">
                  <span className="font-bold">print Size :</span> 220 *255*400
                  mm
                </p>
              </div>
            </div>
          </div>

          <div className="buttonsClass  ">
            <div className=" parent   price flex   flex- sm:flex-row justify-center sm:justify-start text-start  items-center   w-full">
              <div className="button sm:w-1/2 w-3/4 sm:p-2 p-2 ">
                <Button
                  text={"Add to Cart"}
                  color={"custom-blue"}
                  size={"large"}
                />
              </div>
              <div className="button w-1/8 sm:p-2 p-2  ">
                <Button icon={faHeart} color={"custom-blue"} size={"large"} />
              </div>
            </div>

            <div className="flex   pt-4 flex-col sm:flex-row justify-between sm:justify-start text-start   items-center   w-full sm:block  ">
              <div className=" flex justify-start   ">
                <Counter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
