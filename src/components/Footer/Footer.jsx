import React from 'react'
import { HoodaLogo, FooterImage, PlayStore, AppStore } from '../../assets'

const Footer = () => {
    return (
        <footer class="body-font bg-primary text-white relative font-semibold text-xs">
            <div className="bg-footer-image absolute top-0 left-0 h-full w-full z-10"/>
            <div class="z-20 relative container md:px-6 xl:px-24 pt-6 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

                {/* //! Logo kiri  */}
                <div class="w-44 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left ">
                    <a href="/#" class="flex title-font font-medium items-center md:justify-start justify-center ">
                       <HoodaLogo width={150} height={150} />
                    </a>
                </div>

                <div class="flex-grow flex flex-wrap md:mt-0 mt-10 md:text-left text-center ">
                    <div class="lg:w-1/3 md:w-1/2 w-full px-4">
                        <nav class="list-none mb-10">
                            <li>
                                <a href="/#" >Tentang Kami</a>
                            </li>
                            <li className="mt-4">
                                <a href="/#" >Layanan</a>
                            </li>
                            <li className="mt-4">
                                <a href="/#" >Karir</a>
                            </li>
                            <li className="mt-4">
                                <a href="/#" >Gabung Mitra Kami</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 w-full px-4">
                        <nav class="list-none mb-10">
                            <li>
                                <a href="/#" >Kontak Kami</a>
                            </li>
                            <li className="mt-4">
                                <a href="/#" >Pusat Bantuan</a>
                            </li>
                            <li className="mt-4">
                                <a href="/#" >Syarat & Ketentuan</a>
                            </li>
                            <li className="mt-4">
                                <a href="/#" >Kebijakan Privasi</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 w-full px-4">
                        <nav class="list-none mb-10">
                            <p>Ikuti Kami</p>
                            <span class="inline-flex  mt-2 justify-center sm:justify-start">
                                <a href="/#" class="">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                                </a>
                                <a href="/#" class="ml-3 ">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                                </a>
                                <a href="/#" class="ml-3 ">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                                </a>
                                <a href="/#" class="ml-2 mb-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <rect x="3" y="2" width="18" height="14" rx="4"></rect>
                                        <path d="M10 6l5 3l-5 3z"></path>
                                    </svg>
                                
                                </a>
                    </span>
                        </nav>
                    </div>
                    
                </div>
            </div>

                {/* //! Unduh  */}
                <section className="container mx-auto md:px-10 xl:px-24 z-10 relative  flex">
                   
                    <div className="mx-auto text-center ">
                        <p className="flex justify-center md:justify-start">Unduh</p>
                        <div className="flex mt-2">
                            <img src={PlayStore} width="150" alt=""/>
                            <img className="ml-3" src={AppStore} width="150" alt=""/>
                        </div>
                    </div>
                </section>

                {/* //! Copuright paling bawah  */}
                <div class="bg-primary">
                    <div class="container mx-auto py-4 px-5 ">
                    <p class=" text-xs text-center">© CopyrightbyHooda
                    </p>

                   
                    </div>
                </div>
            </footer>
    )
}

export default Footer
