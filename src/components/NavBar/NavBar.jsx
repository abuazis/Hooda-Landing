

// ! BATASANN 

import React, { useRef, useState } from 'react'
import { HoodaLogo, NavBarIcon } from '../../assets'
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, Button, Grow, Paper, Popper, ClickAwayListener, MenuList, MenuItem } from '@material-ui/core';

const NavBar = () => {
    const [sideBar, setSideBar] = useState(false)
    const [menu, setMenu] = useState({
        menu1 : false,
        menu2 : false,
        menu3 : false
    })

    const handleMenu = (index_menu,value) => {
        setMenu({...menu, [index_menu]:value})
    }


    const menu1Ref = useRef(null);
    const menu2Ref = useRef(null);
    const menu3Ref = useRef(null);


    console.log(`dari render`, sideBar)

    const handleSideBar = (value)  =>   {
        console.log(`dari handle open`,sideBar);
        setSideBar(value)

    }

    const sidebar_content = (
        <div className="bg-primary text-white h-44 ">
            <div className="container mx-auto">
                <h1>Haloo dari drawerr</h1>
            </div>
        </div>
    )
    
  

    return (
        <header class="sticky top-0 z-10  bg-primary text-white text-xs font-semibold" >
            <div class="flex flex-row  py-3  items-center  mx-auto container xl:px-24">
                {/* //! Menu Burger  */}
                <div className="md:hidden">
                    <Button onClick={() => handleSideBar(true)} >
                        <MenuIcon className="text-white" />
                    </Button>
                </div>
                <Drawer anchor="top" open={sideBar} onClose={() => handleSideBar(false)}>
                        {sidebar_content}
                </Drawer>


                {/* //! Logo */}
                <a href="/#" class="w-full md:w-auto flex justify-center font-medium text-gray-900 ml-3 sm:ml-0  lg:mb-0">
                    <HoodaLogo width="50" height="50" />
                </a>
               

                {/* //! nav  */}
                <nav class="hidden flex-wrap md:flex  items-center mx-auto">
                    <a href="/#" class="mr-2">Tentang Kami</a>
                    
                    {/* //! Menu 1  */}
                    <div className="mr-2">
                        <Button
                        ref={menu1Ref}
                        // aria-controls={open ? 'menu-list-grow' : undefined}
                        onClick={() => handleMenu("menu1",true)}
                        >
                            <p className="text-white normal-case text-xs font-primary font-semibold">
                                Layanan
                            </p>
                            <span className="inline-block ml-1 ">
                                <NavBarIcon width={10} height={10}/>
                            </span>
                        </Button>
                        <Popper open={menu.menu1} anchorEl={menu1Ref.current} role={undefined} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                <Paper>
                                    <ClickAwayListener onClickAway={() => handleMenu("menu1",false)}>
                                    <MenuList  id="menu-list-grow" >
                                        {["Layanan1","Layanan2","Layanan3"].map(item => {
                                            return <MenuItem>
                                                <p className="font-primary text-xs">
                                                    {item}
                                                </p>
                                            </MenuItem>
                                        })}
                                    </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>

                    {/* //! Menu 2  */}
                    <div className="mr-2">
                        <Button ref={menu2Ref} onClick={() => handleMenu("menu2",true)}>
                            <p className="text-white normal-case text-xs font-primary font-semibold">
                            Gabung Mitra Kami
                            </p>
                            <span className="inline-block ml-1 ">
                                <NavBarIcon width={10} height={10}/>
                            </span>
                        </Button>
                        <Popper open={menu.menu2} anchorEl={menu2Ref.current} role={undefined} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                <Paper>
                                    <ClickAwayListener onClickAway={() => handleMenu("menu2",false)}>
                                    <MenuList  id="menu-list-grow" >
                                        {["mitra1","mitra2","mitra3"].map(item => {
                                            return <MenuItem>
                                                <p className="font-primary text-xs px-11">
                                                    {item}
                                                </p>
                                            </MenuItem>
                                        })}
                                    </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>

                    <a href="/#">Pusat Bantuan</a>
                </nav>
                <div className="ml-auto  flex-wrap mr-5">
                    <Button ref={menu3Ref} onClick={() => handleMenu("menu3",true)} >
                        {/* //! isi  */}
                        <LanguageIcon className="text-white text-xs" fontSize="small"/>
                        <p href="/#" class="hidden lg:block mx-0.5 flex-wrap items-center text-white normal-case text-xs font-semibold">
                            Bahasa Indonesia
                        </p>
                        <span className="inline-block ml-1 ">
                            <NavBarIcon width={10} height={10}/>
                        </span>

                    </Button>
                    <Popper open={menu.menu3} anchorEl={menu3Ref.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                            <Paper>
                                <ClickAwayListener onClickAway={() => handleMenu("menu3",false)}>
                                <MenuList  id="menu-list-grow" >
                                        {["Bahasa1","Bahasa2","Bahasa3"].map(item => {
                                            return <MenuItem>
                                                <p className="font-primary text-xs">
                                                    {item}
                                                </p>
                                            </MenuItem>
                                        })}
                                </MenuList>
                                </ClickAwayListener>
                            </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </div>
        </header>
    )
}

export default NavBar
