export default (req, res) => {
  let sum = 0;
  for(let i=0;i<1000000;i++){
    sum += i;
  }
  res.status(200).send(`Hello ${sum}!`);
}
