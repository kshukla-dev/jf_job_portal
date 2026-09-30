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
 * Cleans rich HTML textfields from redundant or duplicate Dutch headers,
 * stray <br> tags causing excessive gaps, and malformed spacing from OTYS OWS CMS.
 */
export function cleanRichHtml(html?: string): string {
  if (!html) return '';
  return html
    // 1. Remove Dutch boilerplate headings
    .replace(/<h[1-6][^>]*>\s*(wat ga je doen\??|functieomschrijving|omschrijving van de functie)\s*<\/h[1-6]>/gi, '')
    .replace(/<h[1-6][^>]*>\s*(wat verwachten we van jou\??|wie ben jij\??|functie-eisen|eisen|profiel|wat neem je mee\??)\s*<\/h[1-6]>/gi, '')
    .replace(/<h[1-6][^>]*>\s*(wat bieden wij\??|arbeidsvoorwaarden|aanbod|ons aanbod)\s*<\/h[1-6]>/gi, '')
    .replace(/<h[1-6][^>]*>\s*(over de organisatie|over het bedrijf|bedrijfsprofiel)\s*<\/h[1-6]>/gi, '')
    // 2. Remove <br> tags directly following headings (e.g. </h3><br>)
    .replace(/(<\/h[1-6]>)\s*(?:<br\s*\/?>\s*)+/gi, '$1')
    // 3. Remove <br> tags immediately at start of <ul> / <ol> (e.g. <ul><br><li>)
    .replace(/(<ul[^>]*>|<ol[^>]*>)\s*(?:<br\s*\/?>\s*)+/gi, '$1')
    // 4. Remove <br> tags directly between list items (e.g. </li><br><li>)
    .replace(/(<\/li>)\s*(?:<br\s*\/?>\s*)+(?=<li)/gi, '$1')
    // 5. Remove <br> tags before closing </ul> / </ol> (e.g. <br></ul>)
    .replace(/\s*(?:<br\s*\/?>\s*)+(<\/ul>|<\/ol>)/gi, '$1')
    // 6. Remove <br> tags immediately following closing </ul> / </ol> (e.g. </ul><br><h3>)
    .replace(/(<\/ul>|<\/ol>)\s*(?:<br\s*\/?>\s*)+/gi, '$1')
    // 7. Remove empty paragraphs with only whitespace, &nbsp; or <br>
    .replace(/<p\b[^>]*>(?:[\s\t]|&nbsp;|<br\s*\/?>)*<\/p>/gi, '')
    // 8. Collapse 2 or more consecutive <br> into a single <br>
    .replace(/(?:<br\s*\/?>\s*){2,}/gi, '<br>')
    .trim();
}

