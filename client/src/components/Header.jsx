import React from 'react'
import {Avatar, Button, Dropdown, Navbar, TextInput} from 'flowbite-react'
import {Link, useLocation} from "react-router-dom"

// ! Header
const Header = ()=>{
  const path = useLocation().pathname;
  console.log(path); //returns the path

  const handleSignout = async()=>{
    try {
      const res = await fetch('http://localhost/3000/server/auth/signout')
    } catch (error) {
      console.log(error.message)
    }
  }
}


export default Header
