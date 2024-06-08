import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { FaMoon } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';

//! Header component

const Header = () => {
  const path = useLocation().pathname; //! This is used to get the current path of the page so we use the component useLoc from react-router-dom
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user); //! Makes the current user state

  const handleSignout = async () => {
    try {
      const res = await fetch('https://squadquartet.onrender.com/server/user/signout', {
        method: 'POST',
        credentials: 'include',  // Ensure cookies are included
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Navbar className="bg-black bg-opacity-40">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white flex items-center"
      >
        <span>
          <img
            src='../../public/LearnEase.png'
            alt="LearnEase Icon"
            className="h-8"
          />
        </span>
        <span className="ml-2" style={{ fontFamily: "Montserrat" }}>
          LearnEase
        </span>
      </Link>

      <div className="flex gap-2 md:order-2">
        <Button className="w-14 h-10 hidden sm:inline" color="black" pill>
          <FaMoon />
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/signup">
            <Button color="black" pill>
              <span style={{ fontSize: 19 }}>Sign In</span>
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Link
          to="/"
          className={`text-black ${
            path === "/" ? "font-bold" : ""
          } hover:text-gray-200`}
          style={{ fontSize: 19 }}
        >
          Home
        </Link>
        <Link
          to="/About"
          className={`text-black ${
            path === "/About" ? "font-bold" : ""
          } hover:text-gray-200`}
          style={{ fontSize: 19 }}
        >
          About
        </Link>
        <Link
          to="/Projects"
          className={`text-black ${
            path === "/Projects" ? "font-bold" : ""
          } hover:text-gray-200`}
          style={{ fontSize: 19 }}
        >
          Services
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
