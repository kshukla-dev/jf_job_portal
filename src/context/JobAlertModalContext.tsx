'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { JobAlertModal } from '../components/forms/JobAlertModal';

interface JobAlertModalContextType {
  isOpen: boolean;
  openJobAlertModal: () => void;
  closeJobAlertModal: () => void;
}

const JobAlertModalContext = createContext<JobAlertModalContextType | undefined>(undefined);

export function JobAlertModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openJobAlertModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeJobAlertModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <JobAlertModalContext.Provider
      value={{
        isOpen,
        openJobAlertModal,
        closeJobAlertModal,
      }}
    >
      {children}
      <JobAlertModal isOpen={isOpen} onClose={closeJobAlertModal} />
    </JobAlertModalContext.Provider>
  );
}

export function useJobAlertModal(): JobAlertModalContextType {
  const context = useContext(JobAlertModalContext);
  if (!context) {
    throw new Error('useJobAlertModal must be used within a JobAlertModalProvider');
  }
  return context;
}
