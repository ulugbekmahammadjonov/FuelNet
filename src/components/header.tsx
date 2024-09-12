import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Avatar, Button, List, ListItem } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { BlockOutlined } from '@mui/icons-material';
import { CellTowerOutlined } from '@mui/icons-material';
import Drawer from '@mui/material/Drawer';
import Container from './UI/customContainer';
import { NavLink } from "react-router-dom";
import { nav_link } from '../utils/constants';
import Logo from '../assets/images/logo.svg';
import UserImg from '../assets/images/user.png';


export default function Header() {
   const [active, setActive] = useState(false);
   const [open, setOpen] = useState(false);

   const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
   };
   const DrawerList = (
      <Box sx={{ width: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', mt: '56px', gap: '10px' }} role="presentation" onClick={toggleDrawer(false)}>
         <List >
            {nav_link.map(({ id, title, path }) => (

               <ListItem
                  key={id}

                  component={NavLink}
                  to={path}
                  sx={{ my: 2, display: 'block' }}
               >
                  <NavLink
                     to={path}
                     className={({ isActive }) => isActive ? 'active' : ""}
                     style={{ color: title === "Видеофиксация" ? '#FF4E4E' : "#171429", fontWeight: '500', textDecoration: 'none', position: 'relative' }}>
                     {title}
                     {title === "Видеофиксация" && (
                        <Box component={"span"} sx={{

                           boxShadow: "0px 0px 5px 0px #FF4E4EB2",
                           marginLeft: '5px',
                           position: 'absolute',
                           bottom: '3px',
                           right: '-10px',
                           width: '8px',
                           height: '8px',
                           backgroundColor: 'error.main',
                           borderRadius: '50%'
                        }}></Box>
                     )}</NavLink>
               </ListItem>
            ))}
         </List>

      </Box>
   );



   return (
      <Box sx={{ borderBottom: '1px solid #E5E5E5', width: '100%', bgcolor: 'white' }}>
         <Container>

            <AppBar position="static" sx={{ width: '100%', height: '50px', bgcolor: 'secondary.main', boxShadow: 'none' }} >

               <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Button sx={{ display: { xs: 'block', md: 'none' } }} onClick={toggleDrawer(true)}><MenuIcon /></Button>
                  <Drawer open={open} onClose={toggleDrawer(false)}>
                     {DrawerList}
                  </Drawer>
                  <Box component="img" src={Logo} sx={{ mr: 1, height: { xs: '18px', md: '24px', lg: '30px' }, width: { xs: '18px', md: '24px', lg: '30px' } }} />


                  <Typography
                     variant='h6'
                     sx={{ display: { sm: 'block' }, color: 'text.primary', fontWeight: 'bold', fontSize: { xs: '16px', md: '20px', lg: '24px' } }}
                  >
                     FuelNet
                  </Typography>

                  <List sx={{ display: { xs: 'none', md: 'flex' }, }}>
                     {nav_link.map(({ id, title, path }) => (

                        <ListItem
                           key={id}

                           component={NavLink}
                           to={path}
                           sx={{ display: 'block' }}
                        >
                           <NavLink
                              to={path}
                              className={({ isActive }) => (isActive ? 'active' : "")}
                              style={{ textDecoration: 'none', position: 'relative' }}>

                              <Box component={"span"} sx={{ color: title === "Видеофиксация" ? 'error.main' : "text.primary", fontWeight: '500', fontSize: { xs: '12px', lg: '14px' } }}>
                                 {title}
                                 {title === "Видеофиксация" && (
                                    <Box component={"span"} sx={{

                                       boxShadow: "0px 0px 5px 0px #FF4E4EB2",
                                       marginLeft: '5px',
                                       position: 'absolute',
                                       bottom: '3px',
                                       right: '-10px',
                                       width: '8px',
                                       height: '8px',
                                       backgroundColor: 'error.main',
                                       borderRadius: '50%'
                                    }}></Box>
                                 )}
                              </Box>
                           </NavLink>
                        </ListItem>
                     ))}
                  </List>
                  <Box sx={{ flexGrow: 1 }} />
                  <Box sx={{ display: { xs: "flex" }, alignItems: 'center', gap: '10px' }}>
                     <Box sx={{ display: { xs: "flex", }, alignItems: 'center', gap: '10px' }}>
                        <Button
                           startIcon={<BlockOutlined sx={{display: {  sm: 'none', md: 'block' }}}/>}
                           sx={{
                              padding: { xs: '4px', md: '4px 8px' },
                              backgroundColor: "#E0F1F6",
                              color: "text.primary",
                              borderRadius: '100px',
                              textTransform: "none",
                              fontSize: { xs: '10px', md: '12px' },
                              letterSpacing: '2%',
                              border: '1px solid #69757A',
                           }}
                        >

                           <Box component="span" sx={{ display: { xs: 'none', sm: 'block' }, whiteSpace: 'nowrap' }}>
                              Закрыть смену
                           </Box>
                        </Button>

                        <Button
                           startIcon={<CellTowerOutlined sx={{ display: {   sm: 'none', md: 'block' } }} />}
                           sx={{
                              padding: { xs: '3px', md: '4px 6px' },
                              backgroundColor: "rgba(255, 78, 78, 0.1)",
                              color: "error.main",
                              borderRadius: '100px',
                              textTransform: "none",
                              border: '0.5px solid rgba(255, 78, 78, 0.5)',
                              fontSize: { xs: '10px', md: '12px' },
                              letterSpacing: '2%',
                           }}
                        >

                           <Box component="span" sx={{ display: { xs: 'none', sm: 'block' }, whiteSpace: 'nowrap' }}>
                              Aварийная остановка
                           </Box>
                        </Button>



                     </Box>

                     <Avatar sx={{ width: 32, height: 32, border: '1px solid #3ABAAA' }} alt="Remy Sharp" src={UserImg} />

                  </Box>


               </Toolbar>

            </AppBar>


         </Container>
      </Box>
   );
}
