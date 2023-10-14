import { Pets } from '@mui/icons-material'
import { AppBar, InputBase, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'

const  StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
});

const Search = styled("Box")(({theme}) => ({
  backgroundColor: "white",
  color:"gray",
  padding:" 0 10px",
  borderRadius: theme.shape.borderRadius,
  width:"40%"

}));

const Icons= styled("Box")(({theme}) => ({
    backgroundColor: "white",
    color:"gray"

  }));


const Navbar = () => {
  return (
    // we need to give position to appbar
    <AppBar position='sticky'>
    <StyledToolbar>
    {/* using toolbar add extra padding */}
<Typography variant='h6'
sx={{display:{xs:"none" , sm:"block"}}}
> GOYAL SOCIAL</Typography>
<Pets sx={{display:{xs:"block" , sm:"none"}}}/>
<Search><InputBase placeholder='search'/></Search>
<Icons>icons</Icons>
    </StyledToolbar>
    
    </AppBar>
  )
}

export default Navbar