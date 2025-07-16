import React from 'react';
import SectionLayout from '../../../layout/SectionLayout';
import EachUtils from '../../../../utils/eachUtils';
import { useAtom } from 'jotai';
import { languageAtom } from '../../../../jotai/atoms';
import { LIST_CONTENT_4_EN, LIST_CONTENT_4_ID } from '../../../../constants/listContent';
import { PROFILE_KIDS_IMAGE } from '../../../../constants/listAsset';

const SectionProfile = () => {
    const [language] = useAtom(languageAtom);
    const listcontent = language === 'en' ? LIST_CONTENT_4_EN : LIST_CONTENT_4_ID;
  return (
    <SectionLayout>
        <div className='relative max-w-xl mx-auto mt-5'>
            <img src={PROFILE_KIDS_IMAGE} alt="" />
        </div>
        <EachUtils of={listcontent} render={(item, index) => (
            <div key={index} className='mt-10 px-10'>
                <h2 className='text-5xl font-bold '>{item.title}</h2>
                <p className='text-3-xl mt-4'>{item.desc}</p>
            </div>
        )} />
    </SectionLayout>
  );
};

export default SectionProfile;