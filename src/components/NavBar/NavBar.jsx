

// ! BATASANN 

import React from 'react'
import { HoodaLogo, NavBarIcon } from '../../assets'
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, SwipeableDrawer, Button } from '@material-ui/core';
import { useState } from 'react';
import clsx from 'clsx';

const NavBar = () => {
    const [sideBar, setSideBar] = useState(false)
    console.log(`dari render`, sideBar)

    const handleSideBar = (value)  =>   {
        console.log(`dari handle open`,sideBar);
        setSideBar(value)

    }


    // const toggleDrawer = (anchor, open) => (event) => {
    //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //       return;
    //     }
    
    //     setState({ ...state, [anchor]: open });
    // };
    
    const sidebar_content = (
        <div>
            halo
        </div>
    )
    
  

    return (
        <header class="sticky top-0 z-10  bg-primary text-white text-xs">
            <div class="container mx-auto flex flex-row sm:flex-wrap p-2.5 sm:flex-col md:flex-row items-center">
                
                
                {/* //! Menu Burger  */}
                <div className="sm:hidden">
                    <Button onClick={() => handleSideBar(true)} >
                        <MenuIcon className="text-white" />
                    </Button>
                </div>
                <Drawer anchor="left" open={sideBar} onClose={() => handleSideBar(false)}>
                        {sidebar_content}
                </Drawer>

                <a href="/#" class="flex title-font font-medium items-center text-gray-900 ml-3 sm:ml-0 sm:mb-4 md:mb-0">
                <HoodaLogo width="50" height="50" />
                </a>
               

                {/* //! nav  */}
                <nav class="md:ml-auto md:mr-auto sm:flex flex-wrap items-center justify-center hidden">
                <a href="/#" class="mr-5 ">Tentang Kami</a>
                <a href="/#"class="mr-5 ">
                    Layanan
                    <span className="inline-block ml-1">
                        <NavBarIcon width={10} height={10}/>
                    </span>
                </a>
                <a href="/#"class="mr-5 ">
                    Gabung Mitra Kami
                    <span className="inline-block ml-1">
                        <NavBarIcon width={10} height={10}/>
                    </span>
                </a>
                <a href="/#" class="mr-5 ">Pusat Bantuan</a>
                </nav>
                <a href="/#" class="ml-auto sm:ml-0 sm:inline-flex items-center border-0 py-1 px-3 focus:outline-none sm:mt-4 md:mt-0">
                    Bahasa Indonesia
                </a>
            </div>
        </header>
    )
}

export default NavBar
