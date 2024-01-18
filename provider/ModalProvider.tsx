'use client';
import React, { useState, useEffect } from 'react';

import ExamModalOne from '@/components/ExamModalOne';
import ExamModalTwo from '@/components/ExamModalTwo';

const ModelProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <ExamModalOne />
      <ExamModalTwo />
    </>
  );
};

export default ModelProvider;