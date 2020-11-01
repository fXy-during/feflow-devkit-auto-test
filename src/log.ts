console.log("this is devkit command, outing");
const logFn = (context: any) => {
  console.log("this is devkit command, inner");
};
export default logFn;
module.exports = logFn;
