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
                     className={({ isActive }) => (isActive ? 'active' : "")}
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
      <Box sx={{ flexGrow: 1, borderBottom: '1px solid #E5E5E5', width: '100%', bgcolor: 'white' }}>
         <Container>

            <AppBar position="static" sx={{ width: '100%', height: '56px', bgcolor: 'secondary.main', boxShadow: 'none' }} >

               <Toolbar disableGutters>
                  <Button sx={{ display: { xs: 'block', lg: 'none' } }} onClick={toggleDrawer(true)}><MenuIcon /></Button>
                  <Drawer open={open} onClose={toggleDrawer(false)}>
                     {DrawerList}
                  </Drawer>
                  <Box component="img" src={Logo} sx={{ mr: 2, height: { xs: '24px', md: '32px', lg: '40px' }, width: { xs: '24px', md: '32px', lg: '40px' } }} />


                  <Typography
                     variant="h6"

                     component="div"
                     sx={{ display: { sm: 'block', color: 'text.primary', fontWeight: 'bold', fontSize: { xs: '10px', md: '16px', lg: '24px' } } }}
                  >
                     FuelNet
                  </Typography>

                  <List sx={{ ml: 2, display: { xs: 'none', lg: 'flex' } }}>
                     {nav_link.map(({ id, title, path }) => (

                        <ListItem
                           key={id}

                           component={NavLink}
                           to={path}
                           sx={{ my: 2, display: 'block' }}
                        >
                           <NavLink
                              to={path}
                              className={({ isActive }) => (isActive ? 'active' : "")}
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
                  <Box sx={{ flexGrow: 1 }} />
                  <Box sx={{ display: { xs: "flex" }, alignItems: 'center', gap: '10px' }}>
                     <Box sx={{ display: { xs: "flex", }, alignItems: 'center', gap: '10px' }}>
                        <Button
                           startIcon={<BlockOutlined />}
                           sx={{
                              padding: { xs: '4px', md: '6px 10px' },
                              backgroundColor: "#E0F1F6",
                              color: "text.primary",
                              borderRadius: '100px',
                              textTransform: "none",
                              fontSize: { xs: '10px', md: '12px' },
                              letterSpacing: '2%',
                           }}
                        >

                           <Box component="span" sx={{ display: { xs: 'none', sm: 'block' } }}>
                              Закрыть смену
                           </Box>
                        </Button>

                        <Button
                           startIcon={<CellTowerOutlined />}
                           sx={{
                              padding: { xs: '3px', md: '5px 9px' },
                              backgroundColor: "rgba(255, 78, 78, 0.1)",
                              color: "error.main",
                              borderRadius: '100px',
                              textTransform: "none",
                              border: '0.5px solid rgba(255, 78, 78, 0.5)',
                              fontSize: { xs: '10px', md: '12px' },
                              letterSpacing: '2%',
                           }}
                        >

                           <Box component="span" sx={{ display: { xs: 'none', sm: 'block' } }}>
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
