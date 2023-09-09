import {getPress} from '@/sanity/sanity.utils'
import Link from 'next/link';
import { UrlObject } from 'url';

export default async function Press() {

    const press = await getPress();

    return (

        <>
        {press.map((pressPost)=> {
            return pressPost.pressItems.map((singlePress: { press_link: string | UrlObject; press_hed: string;})=>{
                return <Link href={singlePress.press_link} key={singlePress._key} target='_blank'>{singlePress.press_hed}</Link>
            })
        })}
        </>

    )
}