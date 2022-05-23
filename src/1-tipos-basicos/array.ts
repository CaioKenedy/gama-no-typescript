const cars: string[] = ["honda", "fiat", "chev"];

function showCars(cars: string[]) {
  return `Available cars: ${cars.join(", ")}`;
}

console.log(showCars(cars));
