import { mix } from 'polished';

interface Token {
  series?: string;
  specimen: string;
  grade?: string;
}

interface Spectrallum {
  start?: string;
  median?: string;
  end?: string;
}

type Spectralize = Token & Spectrallum;
type Spectralizer = (s: Spectralize) => string[] | undefined;

type Platform = 'react' | 'scss' | 'css';

export function spectrum(platform: Platform): Spectralizer {
  return (spectralize) => {
    if (platform === 'react') spectrumReact(spectralize);
    switch (platform) {
      case 'react': {
        const { start, median, end } = spectralize;

        const trio = median;
        const duo = start && end && !median;

        if (trio) return spectrumTrio(spectralize);
        if (duo) return spectrumDuo(spectralize);
      }
    }
  };
}

function spectrumReact(
  spectralize: Spectralize,
): string[] | undefined {
  const { start, median, end } = spectralize;

  const trio = median;
  const duo = start && end && !median;

  if (trio) return spectrumTrio(spectralize);
  if (duo) return spectrumDuo(spectralize);
}

function spectrumDuo({
  series,
  specimen,
  start,
  end,
}: Spectralize): string[] {
  return repeat(11, (_, i) => {
    const grade = i * 100;
    const tokenName = `--${series}-${specimen}-${grade}`;

    const amount = i / 10;
    const tokenValue = mix(amount, end as string, start as string);

    return `${tokenName}: ${tokenValue};`;
  });
}

function spectrumTrio({
  series,
  specimen,
  start,
  median,
  end,
}: Spectralize): string[] | undefined {
  return repeat(11, (_, i) => {
    const grade = i * 100;
    const tokenName = `--${series}-${specimen}-${grade}`;

    const amount = Math.abs((i - 5) * 2) / 10;

    const tokenValue =
      grade > 500
        ? mix(amount, end as string, median as string)
        : mix(amount, start as string, median as string);

    return `${tokenName}: ${tokenValue};`;
  });
}

function repeat<ArrayItem>(
  number: number,
  callback: (...args: any) => any,
) {
  return Array.from({ length: number }).map<ArrayItem>(callback);
}
