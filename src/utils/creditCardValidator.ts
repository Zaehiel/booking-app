import { cards } from 'utils/constants';

const trimWhiteSpaces = (input: string): string => input.replaceAll(/\s/g, '');

export const isCreditCardValid = (code: string): boolean => {
  const trimmedCode = trimWhiteSpaces(code);
  const serialisedDigits = trimmedCode.split('').map((number) => parseInt(number));
  const lastDigit = serialisedDigits.pop() as number;
  const reversedDigits = serialisedDigits.reverse();

  const summariseDigits = reversedDigits.reduce((accumulator, digit, index) => {
    const actualIndex = index + 1;
    let number = digit;

    if (actualIndex % 2 !== 0) {
      number = number * 2;
    }

    if (number > 9) {
      number = number - 9;
    }

    return accumulator + number;
  }, 0);

  const moduloOfSum = summariseDigits % 10;

  return (moduloOfSum + lastDigit) === 10;
};

export const getCreditCardType = (code: string): string => {
  if (!isCreditCardValid(code)) {
    return 'Invalid credit card!';
  }

  const digits = trimWhiteSpaces(code);
  const digitsLength = digits.length;


  const card = cards.find((card) => {
    const isCodeLengthCorrect = card.length.some(length => length === digitsLength);

    if (!isCodeLengthCorrect) {
      return false;
    }

    const isValidStartingDigits = card.startsWith.some((digits) => {
      const sliceEndIndex = digits.toString().length;
      const codeStartsWithDigits = parseInt(code.slice(0, sliceEndIndex));

      return codeStartsWithDigits === digits;
    });

    let isValidStartingDigitsRange = false;

    if (card.startsBetweenRange) {
      const [start, end] = card.startsBetweenRange;
      const sliceEndIndex = start.toString().length;
      const rangeDigits = parseInt(code.slice(0, sliceEndIndex));

      isValidStartingDigitsRange = (start <= rangeDigits) && (rangeDigits <= end);
    }

    return (isValidStartingDigits || isValidStartingDigitsRange);
  });

  return card?.name || 'Invalid credit card!';
}