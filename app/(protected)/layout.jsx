import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { UserButton } from "@clerk/nextjs";

export default function MainLayout({ children }) {
  return (
    <div className="py-8">
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">Task Tetris</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive>
            <Link href="#">
              Dashboard
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" color="foreground">
              Tasks
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <UserButton />
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  );
}
