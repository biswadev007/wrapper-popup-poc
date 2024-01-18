'use client'
import React, { useMemo } from 'react';
import Link from 'next/link';

import Button from './Button';
import useModalOne from '@/hooks/useModalOne';

const Header = () => {
  const { onOpen } = useModalOne();

  const headerMenu = useMemo(
    () => [
      {
        title: 'Home',
        route: '/',
      },
      {
        title: 'About',
        route: '/about',
      }
    ],
    []
  );

  return (
    <header className='flex justify-between h-24 bg-gradient-to-b from-amber-200 to-transparent w-full py-3 px-24'>
      <ul className='flex gap-x-4 text-xl justify-center items-center'>
        {headerMenu.map(({ route, title }) => (
          <li key={title} className='text-white hover:text-neutral-300'>
            <Link href={route}>{title}</Link>
          </li>
        ))}
      </ul>
      <Button onClick={onOpen}>
        Open Popup
      </Button>
    </header>
  );
};

export default Header;
