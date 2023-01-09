import React,{useState} from 'react';
import {AppBar,
  Toolbar,
  Breadcrumbs,
  Link,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box
} from '@mui/material';
import {makeStyles} from '@material-ui/core'
import HowToRegSharpIcon from '@mui/icons-material/HowToRegSharp';
import LoginIcon from '@mui/icons-material/Login';
import InfoIcon from '@mui/icons-material/Info';

import Login from './Login'
import Register from './Register';
import About from './About';
import { purple } from '@mui/material/colors';



const useStyle=makeStyles({
    logo:{
      padding:'20px'
      }
})

const drawerWidth=240;

  function Home() {

  const [menuItem,setMenuItem]=useState('Signup');


  const styleClass=useStyle();

  const menu=[

    {
      text:'Signup',
      icon:<HowToRegSharpIcon  color='secondary'/>,
      path:'/signup'
    },
    {
      text:'Login',
      icon:<LoginIcon  color='secondary'/>,
      path:'/signup'
    },
    {
      text:'About',
      icon:<InfoIcon  color='secondary'/>,
      path:'/about'
    }
  ]
   
  return (
   
    <div>
      <Box display='flex'>
      <AppBar 
       position='fixed'
       sx={{
       width:{sm:`calc(100% - ${drawerWidth}px)`},
       bgcolor:'#fff',
       color:'rgb(159, 86, 249)'
       }}>
        <Toolbar>
        <Breadcrumbs color='inherit' separator="/">
        <Link color='inherit' underline="hover">Dashboard </Link>
        <Link color='inherit' underline="hover"> 
         {menuItem}
        </Link>
       </Breadcrumbs>
        </Toolbar>
      </AppBar>
     
     <Box sx={{ width: { sm: drawerWidth } }}>
     <Drawer variant='permanent' 
        anchor={'left'}
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {width: drawerWidth }
        }}
         >
       <Typography variant='h6' className={styleClass.logo} >DemoApp</Typography>
        <List>
         {menu.map((menu)=>(
          <ListItem 
          key={menu.text} 
          button
          onClick={()=>setMenuItem(menu.text)}
          >
          <ListItemIcon>{menu.icon}</ListItemIcon>
          <ListItemText>{menu.text}</ListItemText>
          </ListItem>
        ))}
       </List>
     </Drawer>
     </Box>

       <Box   sx={{ p: 2, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
       <Toolbar />
         {menuItem === "Signup" && <Register />}
         {menuItem === "Login" && <Login />}
         {menuItem === "About" && <About  />}
       </Box>

       </Box>
      </div>
  )
}


export default Home;