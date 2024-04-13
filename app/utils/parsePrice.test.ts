import {
  calculateAveragePrice,
  isValidPricePerWeek,
  parsePrice,
} from './parsePrice';
import { describe, expect, it } from 'vitest';
import { Listing } from '@/models/property';

describe('parsePrice function', () => {
  it('should correctly parse a price string into a float value', () => {
    // Test cases
    expect(parsePrice('$1,520 per week')).toEqual(1520);
    expect(parsePrice('$1,100 per week')).toEqual(1100);
    expect(parsePrice('$2,500pw Funished')).toEqual(2500);
    expect(parsePrice('$1,000 Per Week')).toEqual(1000);
    expect(parsePrice('$620pw')).toEqual(620);
    expect(parsePrice('$850 Per Week')).toEqual(850);
    expect(parsePrice('$550 Per Week')).toEqual(550);
    expect(parsePrice('$680 Per Week')).toEqual(680);
    expect(parsePrice('$880 per week')).toEqual(880);
    expect(parsePrice('$5,000 per week')).toEqual(5000);
    expect(parsePrice('$825pw')).toEqual(825);
    expect(parsePrice('$950 per week')).toEqual(950);
    expect(parsePrice('$1000 Per Week')).toEqual(1000);
    expect(parsePrice('CONTACT AGENT')).toEqual(0);
    expect(parsePrice('Contact Agent')).toEqual(0);
    expect(parsePrice('CONTACT AGENT')).toEqual(0);
  });

  it('should return null for invalid price strings', () => {
    expect(parsePrice('abc')).toEqual(0); // Invalid price string
    expect(parsePrice('')).toEqual(0); // Empty string
    expect(parsePrice('1,000.00')).toEqual(1000); // Decimal and comma used together
  });
});

describe('isValidPricePerWeek function', () => {
  it('should return true for valid price per week strings', () => {
    // Test cases for valid price per week strings
    expect(isValidPricePerWeek('$1,520 per week')).toBe(true);
    expect(isValidPricePerWeek('$2,500pw Funished')).toBe(true);
    expect(isValidPricePerWeek('$620pw')).toBe(true);
    expect(isValidPricePerWeek('$850 Per Week')).toBe(true);
    expect(isValidPricePerWeek('$5,000 per week')).toBe(true);
  });

  it('should return false for invalid price per week strings', () => {
    // Test cases for invalid price per week strings
    expect(isValidPricePerWeek('Contact Agent')).toBe(false);
    expect(isValidPricePerWeek('abc')).toBe(false);
    expect(isValidPricePerWeek('')).toBe(false);
    expect(isValidPricePerWeek('$1,000.00')).toBe(false);
  });
});

describe('calculateAveragePrice function', () => {
  it('should calculate the average price per week for valid listings', () => {
    // Sample listings
    const listings = [
      { objective: 'rent', priceDetails: { displayPrice: '$1,000 per week' } },
      { objective: 'rent', priceDetails: { displayPrice: '$1,500 per week' } },
      { objective: 'sale', priceDetails: { displayPrice: '$500,000' } }, // Should be filtered out
      { objective: 'rent', priceDetails: { displayPrice: '$2000 pw' } },
    ] as Listing[];

    // Calculate average price
    const averagePrice = calculateAveragePrice(listings);

    expect(averagePrice).toEqual('1500.00');
  });

  it('should return 0.00 for an empty list', () => {
    // Calculate average price for an empty list
    const averagePrice = calculateAveragePrice([]);

    // Expected result for an empty list
    expect(averagePrice).toEqual('0.00');
  });

  it('should return 0.00 for listings with no valid rent prices', () => {
    // Listings with no valid rent prices
    const listings = [
      { objective: 'rent', priceDetails: { displayPrice: 'Contact Agent' } },
      { objective: 'rent', priceDetails: { displayPrice: 'Not specified' } },
      { objective: 'rent', priceDetails: { displayPrice: '$500.00' } },
    ] as Listing[];

    // Calculate average price for listings with no valid rent prices
    const averagePrice = calculateAveragePrice(listings);

    // Expected result for listings with no valid rent prices
    expect(averagePrice).toEqual('0.00');
  });
});
