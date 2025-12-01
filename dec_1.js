function convertToKm(miles) {
  const kmDist = Math.abs(miles) * 1.60934;
  console.log(kmDist);
  miles = Math.round(kmDist * 100)/100;
  return miles;
};

console.log(convertToKm(3.5));