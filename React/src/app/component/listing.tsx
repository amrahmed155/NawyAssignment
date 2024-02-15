// import Image from "next/image";
import React from 'react';
import Link from 'next/link';

interface apartmentsList{
id:number,
// url:string,
title:string,
subTitle:string,
price:number,
apartmentsList:apartmentsList
}
{/* <Link href={`/apartments/?id=${apartment.id}`}>              
              <h2>{apartment.name}</h2>
</Link> */}
const Listing = ( apartmentsList:apartmentsList ) => {
    // console.log(apartmentsList["apartmentsList"])
    return (
        <Link
        href={`/apartment/${apartmentsList["apartmentsList"].id}`}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          {apartmentsList["apartmentsList"].title+" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
         {apartmentsList["apartmentsList"].subTitle}
        </p>
         <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
         {apartmentsList["apartmentsList"].price}
        </p>
      </Link>
    );
  };
  
  export default Listing;