import data from "@/components/Ender.json";
import Filttering from "@/components/Filltering";
import { collection } from "firebase/firestore";
import{useCollectionData} from 'react-firebase-hooks/firestore';
import {db}from '../../firebase/config';
import ItemCard from '../../components/itemCard'

const Collection = () => {
  const query =collection (db,'users');
  const [docs,loading,error]=useCollectionData(query);
  console.log(docs);
  return (
    <>
      <div className="parent flex  sm:flex-row flex-col">
        <div className=" sm:w-1/4 w-full">
         
          <Filttering />
        </div>
 
           <div className="card w-full flex flex-wrap flex-row sm:p-5 p-1 ">
           <div className="card  flex  flex-wrap gap-2 justify-baseline">

            {data.resources.map((resource, index) => {
              return (<div key={index} >
                <ItemCard imageUrl={resource.imageUrl} title={resource.title} index={index }/></div>
              );
            })}
                  </div>
     
          </div>
        </div>
     </>
  );
};

export default Collection;
//0eWrzgwmjrIKKyYr MongoDb password
