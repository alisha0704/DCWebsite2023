import React from 'react';

const Contactus = () => {
  return (
    <div>
      <div className="w-96 h-screen relative">
        <div className="w-96 h-screen left-0 top-0 absolute bg-white bg-opacity-5 rounded-tl-2xl rounded-bl-2xl border border-white backdrop-blur-3xl" />
        <div className="w-80 h-7 left-[92px] top-[204px] absolute text-white text-lg font-semibold uppercase leading-3 tracking-widest">mail us</div>
        <div className="w-80 h-7 left-[92px] top-[284px] absolute text-white text-lg font-semibold uppercase leading-3 tracking-widest">visit instagram</div>
        <div className="w-80 h-7 left-[92px] top-[363px] absolute text-white text-lg font-semibold uppercase leading-3 tracking-widest">visit youtube</div>
        <div className="w-80 h-16 left-[92px] top-[427px] absolute text-white text-lg font-semibold uppercase leading-3 tracking-widest">phone</div>
        <div className="w-44 h-6 left-[92px] top-[456px] absolute text-white text-lg font-medium leading-normal tracking-wide">+91 9840466868</div>
        <div className="w-44 h-6 left-[92px] top-[490px] absolute text-white text-lg font-medium leading-normal tracking-wide">+91 8078281652</div>
        <div className="w-64 h-5 left-[92px] top-[43px] absolute text-center text-white text-lg font-black uppercase leading-3 tracking-widest">Contact us</div>
        <div className="w-60 h-px left-[85px] top-[239px] absolute border border-white"></div>
        <div className="w-80 h-px left-[45px] top-[76px] absolute border border-white"></div>
        <div className="w-64 h-px left-[85px] top-[318px] absolute border border-white"></div>
        <div className="w-64 h-px left-[85px] top-[398px] absolute border border-white"></div>
        <div className="w-64 h-11 left-[85px] top-[105px] absolute">
          <span style={{ color: 'white', fontSize: 'base', fontWeight: 'bold', textTransform: 'uppercase', lineHeight: 'tight', letterSpacing: 'widest' }}>
            NOTE :
          </span>
          <span style={{ color: 'white', opacity: 0.7, fontSize: 'base', fontWeight: 'bold', textTransform: 'uppercase', lineHeight: 'tight', letterSpacing: 'widest' }}>
             contact us for collaboration, fest invites, events and queries<br />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
