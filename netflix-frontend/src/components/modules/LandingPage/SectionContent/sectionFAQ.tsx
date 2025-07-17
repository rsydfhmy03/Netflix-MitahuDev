import React, { useState } from 'react';
import EachUtils from '../../../../utils/eachUtils';
import { FAQ_TITLE_EN, FAQ_TITLE_ID, LIST_FAQ_EN, LIST_FAQ_ID } from '../../../../constants/listFAQ';
import { useAtom } from 'jotai';
import { languageAtom } from '../../../../jotai/atoms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion"
import InputMembership from '../InputMembership';

const SectionFAQ = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [language] = useAtom(languageAtom);
    const faqtitle = language === 'en' ? FAQ_TITLE_EN : FAQ_TITLE_ID;
    const faqlist = language === 'en' ? LIST_FAQ_EN : LIST_FAQ_ID;
    const [openContentIndex, setOpenContentIndex] = useState<number | null>(null)

  return (
    <div className='w-full p-16 border-t-8 border-stone-700'>
        <h2 className='text-5xl mb-8 font-black text-white text-center'>{faqtitle}</h2>
        <ul className='flex flex-col gap-1 p-8'>
            <EachUtils of={faqlist} render={(item, index) => (
                <li className='flex flex-col gap-1  ' key={index} >
                    <div className='bg-[#2d2d2d] hover:bg-[#414141] text-white'>
                        <button className='w-full flex items-center justify-between p-8' onClick={() => setOpenContentIndex(openContentIndex === index ? null : index)}>
                            <h3 className='text-xl font-semibold text-white'>{item.title}</h3>
                            <motion.div animate={{ rotate: openContentIndex == index ? 135 : 0 }} >
                                <FontAwesomeIcon icon={faPlus} />
                            </motion.div>
                            
                        </button>
                    </div>
                    <div className='bg-black p-1'></div>
                    <motion.div
                        initial={{ translateY : -30}}
                        animate={{ height: openContentIndex === index ? 'auto' : 0, opacity: openContentIndex === index ? 1 : 0 }}
                       
                        style={{ display: openContentIndex == index ? "block" : "none" }}
                        className='p-8 text-left text-white bg-[#2d2d2d] mt-2'>
                         <p className='text-white'>{item.desc}</p>
                    </motion.div>
                </li>
            )} />
        </ul>
      <InputMembership />
    </div>
  );
};

export default SectionFAQ;