import Image from 'next/image';
import Link from "next/link";
import addDocument from '../firebase/addData';
import { useEffect, useState } from 'react';
import { addDoc, doc, setDoc,collection } from 'firebase/firestore';
import {db, storage}from '../firebase/config'; 
import { getStorage,
  ref,uploadBytesResumable,
  getDownloadURL
 } from 'firebase/storage';
  
const AddProduct = () => {
  const [upload, setUpload] = useState(false);
  const [Data,setData]=useState({
    name:'Ender 3 V2',
    Year:'2020',
    Materials:'PLA, TPU, PETG',
    Print_size:'220 x 220 x 250 mm',
    Diameter:'1.75 mm',
    Layer_thickness:'100 - 400 Microns',
    Closed_print_chamber:false,
    Feeder_system: 'Bowden',
    Display :'LCD color screen',
    Connectivity:'SD card',
    Camera:'No',
    Weight_metric:'7.8 kg',
    Assembly: 'Semi-assembled',
    Compatible_materials:'PLA, ABS, PETG, TPU',
    Accuracy: '0.1 mm',
    Max_extruder_temperature:'260 °C',
    Max_heated_bed_temperature:'100 °C',
    Max_print_speed:'180 mm/s',
    Bed_leveling:'Manual',
    Resume_print:'Yes',
    img: [3] // initialize img as an empty array
  });

  async function handleSubmit(e){
     e.preventDefault();
    const docRef = doc(db, '/products/3D printers/FDM/Ender 3 V2');
    await setDoc(docRef,Data);
  }

  const [files, setFiles] = useState([]); // initialize files as an empty array

  function handleFileInputChange(e) {
    const selectedFiles = e.target.files;
    const newFiles = [...files];

    for (let i = 0; i < selectedFiles.length; i++) {
      newFiles.push(selectedFiles[i]);
    }

    setFiles(newFiles);
  }

  useEffect(() => {
    if (upload) {
      for (let i = 0; i < 3; i++) {
        const storageRef = ref(storage, `images/products/3D printers/FDM/${Data.name}/${Data.name }_${i}/`);

        const file = files[i];

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          }, 
          (error) => {
            // Handle unsuccessful uploads
          }, 
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
              setData((prev) => ({ ...prev, img: [...prev.img, downloadURL] }));
            });
          }
        );
      }
    }
  }, [upload]);

  const handleButtonClick = (e) => {
    e.preventDefault();

    setUpload(true);
  };

    return (
      <>
        <div className="main bg-slate-300 w-full sm:h-screen h-full flex items-center justify-center">
          <div className="card overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 sm:bg-custom-blue pt bg-slate-300 w-3/4 sm:h-5/6 h-full rounded-xl flex items-center justify-center">
            <div className="Ads w-1/2 h-full rounded-l-xl hidden lg:block bg-lightBlue">
              <div className="   flex-col flex sm:justify-center sm:items-center h-full ">
                <Image
                  alt="Example Image"
                  width={500}
                  height={500}
                />
                <h1 className="p-8 text-2xl font-semibold">
                  join now for exclusive benefits and a better experience.
                </h1>
              </div>
            </div>
            <div className="Login sm:w-1/2 w-sceen   h-full flex items-center justify-center">
              <section class="w-full  flex items-center justify-center">
                <div class=" h-full   flex pt-2 justify-center  ">
                  <div class="sm:w-full w-screen flex h-5/6 items-center justify-center  bg-lightBlue rounded-lgshadow dark:border md:mt-0">
                    <div class="  p-8 ">
                      <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create a new account
                      </h1>
                      <form class="space-y-4 md:space-y-6">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"
                          onChange={handleFileInputChange}
                          multiple // allow multiple files to be selected
                        />
 
                        <button
                          onClick={handleSubmit}
                          class="w-full text-black bg-custom-blue hover:bg-blue-500 focus:ring-4   focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                          Sign in
                        </button>
                        <button
                          onClick={handleButtonClick}
                          class="w-1/2 text-black bg-custom-blue hover:bg-blue-500 focus:ring-4   focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                          Sign in
                        </button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                          Do you have an account?{" "}
                          <Link
                            href="/signup"
                            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                          >
                            Login
                          </Link>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default AddProduct;