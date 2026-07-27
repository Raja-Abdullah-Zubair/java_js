function isEven(number) {
  return number / 2 === 0;
}
for (let i = 1; i <= 20; i++) {
  if (isEven(i)) {
    console.log(i);
  }
}