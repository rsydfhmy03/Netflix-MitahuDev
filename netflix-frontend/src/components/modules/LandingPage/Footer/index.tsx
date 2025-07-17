import React from 'react'
import { LIST_FOOTER_EN, LIST_FOOTER_ID } from '../../../../constants/listFooter'
import { languageAtom } from '../../../../jotai/atoms'
import { useAtom } from 'jotai'

import OptionLanguage from '../OptionLanguage'
import EachUtils from '../../../../utils/eachUtils'

const Footer = () => {
    const [language] = useAtom(languageAtom)

    return (
        <footer className='w-full text-white bg-black border-t-8 border-stone-900 p-8'>
            <div>
                Question? Call <a href="">123-456-789</a>
            </div>
            <ul className='grid sm:grid-cols-4 gap-4 py-8'>
                <EachUtils
                    of={language == "en" ? LIST_FOOTER_EN : LIST_FOOTER_ID}
                    render={(item, index) => (
                        <li key={index}>
                            <a href={item.url} className='underline'>{item.title}</a>
                        </li>
                    )}
                />
            </ul>
            <OptionLanguage />
            <p className='mt-4'>Netflix Indonesia</p>
        </footer>
    )
}

export default Footer