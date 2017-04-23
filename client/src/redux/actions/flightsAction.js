export const LIST_FLIGHTS = 'LIST_FLIGHTS';

export function listFlights(origin, destination, date, adultCount, infantInLapCount, infantInSeatCount, childCount, seniorCount, refundable, user) {
  return {
    type: LIST_FLIGHTS,
    origin,
    destination,
    date,
    adultCount,
    infantInLapCount,
    infantInSeatCount,
    childCount,
    seniorCount,
    refundable,
    user
  };
}