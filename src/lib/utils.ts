export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export function formatCurrency(amount: number, currency: string = 'EUR'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Translates common Dutch recruitment terms to clear English equivalents
 */
export function translateDutchToEnglish(text?: string): string {
  if (!text) return '';
  const dict: Record<string, string> = {
    'vast': 'Permanent',
    'tijdelijk': 'Contract',
    'bepaalde tijd': 'Fixed-Term Contract',
    'onbepaalde tijd': 'Permanent Contract',
    'fulltime': 'Full-time',
    'parttime': 'Part-time',
    'nederlands': 'Dutch',
    'engels': 'English',
    'nederlands en engels': 'Dutch & English',
    'engels en nederlands': 'English & Dutch',
    'nederlands/engels': 'Dutch / English',
    'engels/nederlands': 'English / Dutch',
    'hbo': 'Bachelor (HBO)',
    'wo': 'Master (WO)',
    'mbo': 'Vocational (MBO)',
    'hbo / wo': 'Bachelor / Master',
    'wo / hbo': 'Master / Bachelor',
    'uur per week': 'hrs / week',
    'uur': 'hrs',
    'per maand': '/ mo',
    'per jaar': '/ yr',
    'hybride': 'Hybrid',
    'thuiswerken': 'Remote',
    'op locatie': 'On-site',
  };

  const trimmed = text.trim();
  const lower = trimmed.toLowerCase();
  if (dict[lower]) {
    return dict[lower];
  }

  // Replace common sub-strings
  return trimmed
    .replace(/\buur per week\b/gi, 'hrs / week')
    .replace(/\buur\b/gi, 'hrs')
    .replace(/\bper maand\b/gi, '/ month')
    .replace(/\bper jaar\b/gi, '/ year')
    .replace(/\bNederlands\b/gi, 'Dutch')
    .replace(/\bEngels\b/gi, 'English');
}

/**
 * Cleans rich HTML textfields from redundant or duplicate Dutch headers
 */
export function cleanRichHtml(html?: string): string {
  if (!html) return '';
  return html
    .replace(/<h[1-6][^>]*>\s*(wat ga je doen\??|functieomschrijving|omschrijving van de functie)\s*<\/h[1-6]>/gi, '')
    .replace(/<h[1-6][^>]*>\s*(wat verwachten we van jou\??|wie ben jij\??|functie-eisen|eisen|profiel|wat neem je mee\??)\s*<\/h[1-6]>/gi, '')
    .replace(/<h[1-6][^>]*>\s*(wat bieden wij\??|arbeidsvoorwaarden|aanbod|ons aanbod)\s*<\/h[1-6]>/gi, '')
    .replace(/<h[1-6][^>]*>\s*(over de organisatie|over het bedrijf|bedrijfsprofiel)\s*<\/h[1-6]>/gi, '');
}

