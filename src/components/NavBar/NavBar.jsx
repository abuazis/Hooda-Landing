

// ! BATASANN 

import React, { useRef, useState } from 'react'
import { HoodaLogo, NavBarIcon } from '../../assets'
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { Drawer, Button, Grow, Paper, Popper, ClickAwayListener, MenuList, MenuItem, makeStyles, AccordionSummary, Typography, AccordionDetails, withStyles } from '@material-ui/core';

//!style sidebar
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }));

  const Accordion = withStyles({
    root: {
      backgroundColor: "#F15D2A",
      color: "white",
      listStyle : "none"
    },
    expanded: {},
  })(MuiAccordion);
  
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

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const sidebar_content = (
        <div className="font-primary bg-primary font-semibold">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} TransitionProps={{ unmountOnExit: true }}> 
                <p className="py-4 px-3 text-sm">Tentang Kami</p>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                >
                <p className="text-sm">
                    Layanan Kami
                </p>
               
                </AccordionSummary>
                <AccordionDetails>
                    <div className="text-sm">
                        <p>Layanan 1</p>
                        <p className="mt-2">Layanan 2</p>
                        <p className="mt-2">Layanan 3</p>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                >
                <p className="text-sm">
                    Gabung Mitra Kami
                </p>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="text-sm">
                        <p>Mitra 1</p>
                        <p className="mt-2">Mitra 2</p>
                        <p className="mt-2">Mitra 3</p>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <p className="py-4 px-3 text-sm">
                        Pusat Bantuan
                    </p>
            </Accordion>
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
                <div className="ml-auto  flex-wrap">
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
                                        {["Bhs","Bhs","Bhs"].map(item => {
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
