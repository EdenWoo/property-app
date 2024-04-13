import { Listing } from '@/models/property';

export function parsePrice(price: string): number {
  // Remove any non-digit characters from the price string
  const cleanPrice = price.replace(/[^0-9.]/g, '');

  // Parse the cleaned price string into a float value
  const parsedPrice = parseFloat(cleanPrice);

  // Check if the parsed value is a valid number
  if (isNaN(parsedPrice)) {
    return 0; // Return null if the parsed value is not a number
  } else {
    return parsedPrice; // Return the parsed float value
  }
}

export function isValidPricePerWeek(price: string): boolean {
  return (
    parsePrice(price) > 0 &&
    (price.toLowerCase().indexOf('per week') > -1 ||
      price.toLowerCase().indexOf('pw') > -1)
  );
}

export const calculateAveragePrice = function (listings: Listing[]) {
  if (listings.length === 0) return (0).toFixed(2);

  const prices = listings
    .filter(
      (listing: Listing) =>
        listing.objective === 'rent' &&
        isValidPricePerWeek(listing.priceDetails?.displayPrice)
    )
    .map((listing: Listing) => parsePrice(listing.priceDetails?.displayPrice));

  if (prices.length === 0) return (0).toFixed(2);

  const total = prices.reduce((acc: number, curr: number) => acc + curr, 0);
  return (total / prices.length).toFixed(2);
};
