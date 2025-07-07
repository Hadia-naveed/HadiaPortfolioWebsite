import React, { useState } from 'react';
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [openmenu, setopenmenu] = useState(false);

  return (
    <nav className="w-full p-4 flex justify-between items-center text-gray-300">
      {/* Logo */}
      <h1 className="text-2xl font-bold">
        Hadia's{' '}<span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">Portfolio</span>
      </h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-4 text-sm md:text-base">
        <li className='hover:scale-108 hover:text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text'><a href="#home">About</a></li>
        <li className='hover:scale-108 hover:text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text'><a href="#projects">Projects</a></li>
                <li className='hover:scale-108 hover:text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text'><a href="#contact">Contact</a></li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <IconButton
          onClick={() => setopenmenu(true)}
          sx={{ color: 'white' }}
        >
          <MenuIcon />
        </IconButton>
      </div>

      {/* Drawer (Mobile Menu) */}
      <Drawer
        anchor="right"
        open={openmenu}
        onClose={() => setopenmenu(false)}
        transitionDuration={300}
        PaperProps={{
          sx: {
            backgroundColor: 'black',
            color: 'white',
          }
        }}
      >   
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setopenmenu(false)}
          onKeyDown={() => setopenmenu(false)}
        >
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#projects">
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#contact">
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
