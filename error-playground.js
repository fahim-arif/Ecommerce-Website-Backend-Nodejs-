const sum = (a, b) => {
  if (a && b) {
    return a + b;
  }
  throw new Error("Invalid Arguments");
};

try {
  console.log(sum(1));
} catch (error) {
  throw new Error("eror");
  //   console.log(error);
}
