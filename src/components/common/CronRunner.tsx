'use client';

import { useEffect } from 'react';
import { startCronService, stopCronService } from '@/services/cronService';

/**
 * CronRunner Component
 *
 * Runs on the client-side (Browser) so all console.log statements
 * appear in the Browser Inspect Mode (DevTools Console).
 */
export function CronRunner() {
  useEffect(() => {
    // Start cron on website visit - runs every 2 hours
    startCronService();

    return () => {
      stopCronService();
    };
  }, []);

  return null;
}
