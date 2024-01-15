'use client';
import { Footer } from 'flowbite-react';

export default function FooterComponent() {
    return (
        <Footer container className='bg-slate-500 rounded-none'>
            <Footer.Copyright href="#" className='text-gray-200 font-semibold' by="Budi Ariyansa" year={2024} />
            <Footer.LinkGroup>
                <Footer.Link href="#" className='text-gray-200'>About</Footer.Link>
                <Footer.Link href="https://www.instagram.com/budiariyansa" target='_blank' className='text-gray-200'>Contact</Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    );
}
