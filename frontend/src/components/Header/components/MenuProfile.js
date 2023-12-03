import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../actions/userActions';
import { Avatar, Dropdown, DropdownItem } from '@windmill/react-ui';
import { useHistory, Link } from 'react-router-dom';

import { OutlinePersonIcon, OutlineCogIcon, OutlineLogoutIcon } from '../../../icons';

const MenuProfile = ({ user }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }

  const handleLogout = () => {
    dispatch(logout());
    history.push('/');
  };

  const handleProfileRedirect = () => {
    history.push('/app/profile');
    setIsProfileMenuOpen(false); // Close the dropdown after redirecting
  };

  return (
    <li className="relative">
      <button
        className="rounded-full focus:shadow-outline-purple focus:outline-none flex items-center"
        onClick={handleProfileClick}
        aria-label="Account"
        aria-haspopup="true"
      >
        <Avatar
          className="align-middle"
          src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
          alt=""
          aria-hidden="true"
        />
        <p className="ml-2">{user?.name ?? "Pham Van Manh Hung"}</p>
      </button>

      <Dropdown align="right" isOpen={isProfileMenuOpen} onClose={() => setIsProfileMenuOpen(false)}>
        <DropdownItem tag="a" onClick={handleProfileRedirect}>
          <OutlinePersonIcon className="w-4 h-4 mr-3" aria-hidden="true" />
          <span>Profile</span>
        </DropdownItem>
        <DropdownItem tag="a" href="#">
          <OutlineCogIcon className="w-4 h-4 mr-3" aria-hidden="true" />
          <span>Settings</span>
        </DropdownItem>
        <DropdownItem onClick={handleLogout}>
          <OutlineLogoutIcon className="w-4 h-4 mr-3" aria-hidden="true" />
          <span>Log out</span>
        </DropdownItem>
      </Dropdown>
    </li>
  );
};

export default MenuProfile;
