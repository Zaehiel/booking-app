const amex = {
  startsWith: [34, 37],
  length: [15],
  name: 'American Express',
}

const masterCard = {
  startsWith: [51, 52, 53, 54, 55],
  startsBetweenRange: [222100, 272099],
  length: [16],
  name: 'Mastercard',
}

const visa = {
  startsWith: [4],
  length: [13, 16, 19],
  name: 'Visa',
}

export const cards = [
  amex,
  masterCard,
  visa,
] as const;