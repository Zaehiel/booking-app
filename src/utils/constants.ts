export type Card = {
  startsWith: number[],
  startsBetweenRange?: number[],
  length: number[],
  name: string,
}

const amex: Card = {
  startsWith: [34, 37],
  length: [15],
  name: 'American Express',
}

const masterCard: Card = {
  startsWith: [51, 52, 53, 54, 55],
  startsBetweenRange: [222100, 272099],
  length: [16],
  name: 'Mastercard',
}

const visa: Card = {
  startsWith: [4],
  length: [13, 16, 19],
  name: 'Visa',
}

export const cards: Card[] = [
  amex,
  masterCard,
  visa,
];

export const cardErrorMessage = {
  INVALID: 'Invalid credit card!',
  NOT_SUPPORTED: `Credit card not supported`,
}

export const rooms = [
  {"id":1,"name":"Cheap room","available":true,"image":"https://via.placeholder.com/400x200.png?text=Cheap%20room"},
  {"id":2,"name":"Not so cheap room","available":false,"image":"https://via.placeholder.com/400x200.png?text=Not%20so%20cheap%20room"},
  {"id":3,"name":"Expensiveroom","available":true,"image":"https://via.placeholder.com/400x200.png?text=Expensive%20room"}
];