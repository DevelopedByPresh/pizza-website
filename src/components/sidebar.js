import React from 'react';
import { SidebarContainer, Icon, CloseIcon, 
    SidebarMenu,SidebarLink,
     SidebarRoute, SideBtnWrap } from './SidebarElements'


const Sidebar = ({ isOpen, toggle })=> {
  return (
    <SidebarContainer isOpen={isOpen} onClick={ toggle }>
        <Icon>
         
        </Icon>
        <SidebarMenu>
            <SidebarLink to='/'>Pizza </SidebarLink>
            <SidebarLink to='/'>About us </SidebarLink>
            <SidebarLink to='/'>Contact Us</SidebarLink>
            <SidebarLink to='/'>Full Menu</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to='/'>Order Now</SidebarRoute>
        </SideBtnWrap>

    </SidebarContainer>

  );
}

export default Sidebar;
