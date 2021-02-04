

// ! BATASANN 

import React, { useRef, useState } from 'react'
import { HoodaLogo, NavBarIcon } from '../../assets'
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, SwipeableDrawer, Button, Grow, Paper, Popper, ClickAwayListener, MenuList, MenuItem } from '@material-ui/core';
import clsx from 'clsx';

const NavBar = () => {
    const [sideBar, setSideBar] = useState(false)
    const [menu1, setMenu1] = useState(false)
    const [menu2, setMenu2] = useState(false)
    const anchorRef = useRef(null);
    const anchorRef2 = useRef(null);


    console.log(`dari render`, sideBar)

    const handleSideBar = (value)  =>   {
        console.log(`dari handle open`,sideBar);
        setSideBar(value)

    }

    const handleMenu = (value)  =>   {
        console.log(`dari handle open`,sideBar);
        setMenu1(value)

    }

    const handleMenu2 = (value)  =>   {
        console.log(`dari handle open`,sideBar);
        setMenu2(value)

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
            <div class="container mx-auto flex flex-row sm:flex-wrap p-2.5 sm:flex-col lg:flex-row items-center">
                
                
                {/* //! Menu Burger  */}
                <div className="sm:hidden">
                    <Button onClick={() => handleSideBar(true)} >
                        <MenuIcon className="text-white" />
                    </Button>
                </div>
                <Drawer anchor="left" open={sideBar} onClose={() => handleSideBar(false)}>
                        {sidebar_content}
                </Drawer>

                <a href="/#" class="flex title-font font-medium items-center text-gray-900 ml-3 sm:ml-0 sm:mb-4 lg:mb-0">
                <HoodaLogo width="50" height="50" />
                </a>
               

                {/* //! nav  */}
                <nav class=" hidden md:ml-auto md:mr-auto sm:flex flex-wrap items-center justify-center">
                    <a href="/#" class="mr-5 ">Tentang Kami</a>
                    
                    {/* <a href="/#"class="mr-5 ">
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
                    </a> */}

                    {/* //! Menu 1  */}
                    <Button
                    ref={anchorRef2}
                    // aria-controls={open ? 'menu-list-grow' : undefined}
                    onClick={() => handleMenu2(true)}
                    className="mr-5"
                    >
                        <p className="text-white normal-case text-xs font-primary font-normal">
                            Layanan
                        </p>
                        <span className="inline-block ml-1 mr-5">
                            <NavBarIcon width={10} height={10}/>
                        </span>
                    </Button>
                    <Popper open={menu2} anchorEl={anchorRef2.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                            <Paper>
                                <ClickAwayListener onClickAway={() => handleMenu2(false)}>
                                <MenuList  id="menu-list-grow" >
                                    <MenuItem >Profile</MenuItem>
                                    <MenuItem >My account</MenuItem>
                                    <MenuItem >Logout</MenuItem>
                                </MenuList>
                                </ClickAwayListener>
                            </Paper>
                            </Grow>
                        )}
                    </Popper>

                    {/* //! Menu 2  */}
                    <Button
                    ref={anchorRef}
                    // aria-controls={open ? 'menu-list-grow' : undefined}
                    onClick={() => handleMenu(true)}
                    className="mr-5"
                    >
                        <p className="text-white normal-case text-xs font-primary font-normal">
                        Gabung Mitra Kami
                        </p>
                        <span className="inline-block ml-1 mr-5">
                            <NavBarIcon width={10} height={10}/>
                        </span>
                    </Button>
                    <Popper open={menu1} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                            <Paper>
                                <ClickAwayListener onClickAway={() => handleMenu(false)}>
                                <MenuList  id="menu-list-grow" >
                                    <MenuItem >Profile</MenuItem>
                                    <MenuItem >My account</MenuItem>
                                    <MenuItem >Logout</MenuItem>
                                </MenuList>
                                </ClickAwayListener>
                            </Paper>
                            </Grow>
                        )}
                    </Popper>

                    <a href="/#">Pusat Bantuan</a>
                </nav>
                <a href="/#" class="ml-auto sm:ml-0 sm:inline-flex items-center border-0 py-1 px-3  sm:mt-4 lg:mt-0">
                    Bahasa Indonesia
                </a>
            </div>
        </header>
    )
}

export default NavBar
