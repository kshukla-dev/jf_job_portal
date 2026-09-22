/**
 * Cron Service
 *
 * Location: src/services/cronService.ts
 * Description: Uses 'croner' library to periodically authenticate against OTYS API
 * (https://webapi.otys.app/api#/Auth/app_auth) and fetch access token.
 */

import { Cron } from 'croner';

export interface OtysAuthResponse {
  accessToken?: string;
  tokenType?: string;
  expiresIn?: number;
  expiresAt?: string;
  detail?: string;
  [key: string]: unknown;
}

/**
 * Calls OTYS Auth API (POST /api/auth) to get the Bearer access token
 * Swagger: https://webapi.otys.app/api#/Auth/app_auth
 */
// export async function getOtysAuthToken(apiKey?: string): Promise<OtysAuthResponse | null> {
//   try {
//     const isBrowser = typeof window !== 'undefined';
//     const url = isBrowser
//       ? '/api/otys/auth'
//       : `${(process.env.OTYS_API_BASE_URL || 'https://webapi.otys.app/api').replace(/\/+$/, '')}/auth`;

//     const key = apiKey || '';

//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',

//       },
//       body: JSON.stringify({ key }),
//     });

//     const data: OtysAuthResponse = await response.json();
//     console.log('[OTYS Auth Token Response]:', data);
//     return data;
//   } catch (error) {
//     console.error('[OTYS Auth Error]:', error);
//     return null;
//   }
// }

export async function getOtysAuthToken(apiKey?: string): Promise<OtysAuthResponse | null> {
  try {
    const response = await fetch('/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    const data: OtysAuthResponse = await response.json();

    console.log('[OTYS Auth Token Response]:', data);

    if (!response.ok) {
      console.error('[OTYS Auth Error]:', data);
      return null;
    }

    return data;
  } catch (error) {
    console.error('[OTYS Auth Error]:', error);
    return null;
  }
}

export async function getData(num: number) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log('[JSONPlaceholder Posts Response]:', num, data);
  return data;
}

let cronJob: Cron | null = null;

/**
 * Starts the cron service using the cron library.
 */
// Timing Cheat Sheet:
// Har 10 Second   : */10 * * * * *  (6 fields)
// Har 1 Minute    : * * * * *       (5 fields)
// Har 5 Minute    : */5 * * * *     (5 fields)
// Har 10 Minute   : */10 * * * *    (5 fields)
// Har 15 Minute   : */15 * * * *    (5 fields)
// Har 30 Minute   : */30 * * * *    (5 fields)
// Har 1 Ghanta    : 0 * * * *       (5 fields)
// Har 2 Ghanta    : 0 */2 * * *     (5 fields)
// Roz Raat 12 Baje: 0 0 * * *      (5 fields)
export function startCronService(cronExpression: string = '0 * * * *') {
  if (cronJob) {
    return cronJob;
  }

  let numb = 0;

  // 1. Page load hote hi turant ek baar call karein
  getData(numb);

  // 2. Uske baad har 1 ghante me cron ke zariye call hota rahega
  cronJob = new Cron(cronExpression, async () => {
    numb++;
    await getData(numb);
  });

  return cronJob;
}

/**
 * Stops the cron service if running.
 */
export function stopCronService() {
  if (cronJob) {
    cronJob.stop();
    cronJob = null;
  }
}
