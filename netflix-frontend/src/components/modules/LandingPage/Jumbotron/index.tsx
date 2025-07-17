import React from 'react';
import { JUMBOTRON_IMAGE } from '../../../../constants/listAsset';
import EachUtils from '../../../../utils/eachUtils';
import { useAtom } from 'jotai';
import { languageAtom } from '../../../../jotai/atoms';
import { LIST_JUMBOTRON_EN, LIST_JUMBOTRON_ID } from '../../../../constants/listJumbotron';
import InputMembership from '../InputMembership';
const Jumbotron = () => {
    const [language] = useAtom(languageAtom);
  return (
    <div className='mb-20 sm:mb-30 xl:mb-55'>
      <img src={JUMBOTRON_IMAGE} alt="Netflix-bg" className='absolute top-0 left-0 w-full h-[890px] object-cover  z-[-2]'/>
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black z-[-1]"></div>
      <EachUtils of={language == 'en' ? LIST_JUMBOTRON_EN : LIST_JUMBOTRON_ID} render={(item) => (
        <div className="text-white text-center flex flex-wrap gap-5 flex-col items-center justify-center mt-65 px-4">
          <h1 className="text-6xl font-bold">{item.title}</h1>
          <p className="text-3xl">{item.desc}</p>
        </div>
      )} />
      <InputMembership />
    </div>
  );
};

export default Jumbotron;