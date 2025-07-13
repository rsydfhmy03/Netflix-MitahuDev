import React from 'react';
import { useAtom } from 'jotai';
import { languageAtom } from '../../../../jotai/atoms';
import { LIST_CTA_EN, LIST_CTA_ID } from '../../../../constants/listCTA';
import EachUtils from '../../../../utils/eachUtils';
import DefaultButton from '../Button';


const InputMembership = () => {
    const [language] = useAtom(languageAtom);
    const ctaList = language === 'en' ? LIST_CTA_EN : LIST_CTA_ID;
    return (
        <form>
            <EachUtils of={ctaList} render={(item,index) => (
                <div key={index} className="flex flex-col items-center justify-center mt-5">
                    <h3 className="text-2xl text-white font-bold mb-4">{item.title}</h3>
                    <div className='relative flex items-center gap-4'>
                        <input type="text" placeholder={item.labelInput} className='p-4 bg-black/50 rounded-md border text-white peer placeholder-transparent w-80 border-white/50' />
                        <label className='absolute text-gray-200 top-0 left-3 pl-2 peer-placeholder-shown:top-4 peer-focus:top-[1px] transition-all peer-focus:text-[13px]'>{item.labelInput}</label>
                        <DefaultButton className='py-4 w-[150px]' text={item.buttonSubmit} isArrowIcon={true} />
                    </div>
                </div>
            )} />
        </form>
    );
};  

export default InputMembership;