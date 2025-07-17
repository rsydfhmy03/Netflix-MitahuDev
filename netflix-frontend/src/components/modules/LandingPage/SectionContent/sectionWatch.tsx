import React from 'react';
import SectionLayout from '../../../layout/SectionLayout';
import EachUtils from '../../../../utils/eachUtils';
import { useAtom } from 'jotai';
import { languageAtom } from '../../../../jotai/atoms';
import { LIST_CONTENT_3_EN, LIST_CONTENT_3_ID } from '../../../../constants/listContent';
import { WATCH_DEVICE_IMAGE, WATCH_DEVICE_VIDEO } from '../../../../constants/listAsset';

const SectionWatch = () => {

    const [language] = useAtom(languageAtom);
    const listcontent = language === 'en' ? LIST_CONTENT_3_EN : LIST_CONTENT_3_ID;
  return (  
    <SectionLayout>
        <EachUtils of={listcontent} render={(item, index) => (
            <div key={index} className='mt-10 px-10'>
                <h2 className='text-5xl font-bold '>{item.title}</h2>
                <p className='text-3-xl mt-4'>{item.desc}</p>
            </div>
        )} />
        <div className='relative max-w-xl mx-auto'>
           <img src={WATCH_DEVICE_IMAGE} className='relative z-3' alt="" />
           <div className='w-[65%] absolute top-12 left-1/2 transform -translate-x-1/2 '>
            <video src={WATCH_DEVICE_VIDEO} autoPlay loop muted></video>
           </div>
        </div>
    </SectionLayout>
  );
};

export default SectionWatch;