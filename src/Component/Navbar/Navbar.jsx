import React, { useState } from 'react';
import List from '../List/List';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, SetOpen] =useState(false);
    const routes = [
        {
          id: 1,
          name: "Home",
          path: "/"
        },
        {
          id: 2,
          name: "About",
          path: "/about"
        },
        {
          id: 3,
          name: "Services",
          path: "/services"
        },
        {
          id: 4,
          name: "Contact",
          path: "/contact"
        },
        {
          id: 5,
          name: "Products",
          path: "/products"
        }
      ];
      
      // You can use this 'routes' array in your React application as shown in the previous example.
      
    return (
        <nav className='bg-purple-900 text-white'>
            <div onClick={() => SetOpen(!open)} className='md:hidden'>
                <span>{open ?<XMarkIcon className="h-6 w-6 text-blue-500" /> : <Bars3Icon className="h-6 w-6 text-blue-500" />}</span>
            </div>
            <ul className={`md:flex absolute md:static md:text-start text-center bg-purple-900 ${open ? 'top-6': '-top-72'}`}>
                {
                    routes.map(route => <List
                    key={route.id}
                    route={route}
                    ></List>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;