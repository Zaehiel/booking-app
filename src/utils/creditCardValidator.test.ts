import { isCreditCardValid, getCreditCardType } from 'utils/creditCardValidator';

const masterCard = '2221001504231991';
const masterCard2 = '54 37 6 1    6 8   366   77  2    7  3 ';
const amex = '379331717956892';
const visa = '4024007148359325';

describe('isCreditCardValid', () => {
  it('verifies amex', () => {
    expect(isCreditCardValid(amex)).toBe(true);
  });

  it('verifies mastercard', () => {
    expect(isCreditCardValid(masterCard)).toBe(true);
  });

  it('verifies visa', () => {
    expect(isCreditCardValid(visa)).toBe(true);
  });
  it(`accepts whitespaces in card code`, () => {
    expect(isCreditCardValid(masterCard2)).toBe(true);
  });

  it(`doesn't verify faulty cards`, () => {
    expect(isCreditCardValid('2221 00 1514231991')).toBe(false);
  });

  it(`doesn't verify empty input`, () => {
    expect(isCreditCardValid('')).toBe(false);
  });

});

describe('getCreditCardType', () => {
  it(`returns invalid card with empty input`, () => {
    expect(getCreditCardType('')).toContain('Invalid');
  });

  it(`returns invalid card with invalid input`, () => {
    expect(getCreditCardType('4485081445241992')).toContain('Invalid');
  });

  it(`returns visa type when entering valid visa code`, () => {
    expect(getCreditCardType('4485081345241992')).toContain('Visa');
    expect(getCreditCardType('4485704772841383203')).toContain('Visa');
  });

  it(`returns amex type when entering valid amex code`, () => {
    expect(getCreditCardType('378148120025474')).toContain('American');
    expect(getCreditCardType('345960181907121')).toContain('American');
  });

  it(`returns mastercard type when entering valid mastercard code`, () => {
    expect(getCreditCardType('2221002656745986')).toContain('Mastercard');
    expect(getCreditCardType('2221000797728457')).toContain('Mastercard');
    expect(getCreditCardType('2720993694263782')).toContain('Mastercard');
    expect(getCreditCardType('5156891910992828')).toContain('Mastercard');
    expect(getCreditCardType('5569000209050345')).toContain('Mastercard');
  });

  it(`returns mastercard type when entering valid mastercard code`, () => {
    expect(getCreditCardType('2221002656745986')).toContain('Mastercard');
  });
});