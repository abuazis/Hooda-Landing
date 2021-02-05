import React from 'react'
import { HoodaLogo, FooterImage, PlayStore, AppStore, FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '../../assets'

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
                                    <FacebookIcon />
                                </a>
                                <a href="/#" class="ml-3 ">
                                    <InstagramIcon />
                                </a>
                                <a href="/#" class="ml-3 ">
                                    <TwitterIcon />
                                </a>
                                <a href="/#" class="ml-2 mb-1">
                                    <YoutubeIcon />
                                
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
                        <div className="flex mt-3">
                            <img src={PlayStore} width="150" alt=""/>
                            <img className="ml-3" src={AppStore} width="150" alt=""/>
                        </div>
                    </div>
                </section>

                {/* //! Copuright paling bawah  */}
                <div class="bg-primary mt-2">
                    <div class="container mx-auto py-4 px-5 ">
                    <p class=" text-xs text-center">© CopyrightbyHooda
                    </p>

                   
                    </div>
                </div>
            </footer>
    )
}

export default Footer
