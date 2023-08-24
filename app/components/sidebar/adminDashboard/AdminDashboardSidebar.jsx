"use client"
import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Link from "next/link";

const adminDashboardSidebar = () => {
  return (
    <div>
      <Sidebar
        className='bg-slate-50'
      >
        <Menu
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: "#13395e",
                color: "#b6c8d9",
              },
            },
          }}
        >
          <SubMenu label="User Accounts">
            <MenuItem> Shop Users </MenuItem>
            <MenuItem> General Users </MenuItem>
          </SubMenu>
          <MenuItem component={<Link href="/" />}>
            Documentation
          </MenuItem>
          <MenuItem component={<Link href="/calendar" />}> Calendar</MenuItem>
          <MenuItem component={<Link href="/e-commerce" />}>
            E-commerce
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default adminDashboardSidebar;
