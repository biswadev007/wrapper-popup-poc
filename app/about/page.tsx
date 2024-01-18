'use client';
import React from 'react';
import Button from "@/components/Button";
import useModalTwo from "@/hooks/useModalTwo";

const AboutPage = () => {
  const { onOpen } = useModalTwo();

  return (
    <div className='px-24 flex gap-x-6'>
      <Button onClick={onOpen}>Open Popup 2</Button>
    </div>
  );
};

export default AboutPage;
