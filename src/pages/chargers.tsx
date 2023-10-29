import React from 'react';
import Image from 'next/image';

type chargersProps = {
    
};

const chargers:React.FC<chargersProps> = () => {
    
    return (<div className="xl:w-full lg:w-9/10 w-full mx-auto text-left border-solid border-white px-2 py-2">
    <div className="flex max-sm:px-6 justify-center">
            <Image
              src="/Teams/chargerslogo.svg"
              alt="chargers"
              width={100}
              height={100}
            />
          </div>
    <div className="text-center text-white text-lg md:text-xl font-extrabold px-4  leading-12 tracking-widest md:mb-4">
      CHARGERS
    </div>
    <div className="text-center text-gray-400 text-sm md:text-md lg:text-md font-normal mb-8">
    A dance group embodying the essence of South Indian rhythms, a perfect blend of dappankuthu beats and western moves .
    With their electrifying choreography, energy, synchronicity, and an irresistible dose of swag. A team with a 
    decade-strong legacy of unstoppable journey.
    </div>
    <div className='flex max-sm:px-6 justify-center'>
    <Image
              src="/Teams/chargers.svg"
              alt="chargers"
              width={1000}
              height={1000}
            />
    </div>
  </div>
  );
}
export default chargers;