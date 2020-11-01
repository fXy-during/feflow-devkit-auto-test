const echoFn = (context: any) => {
  // 真正的构建脚本
  console.log("echo context");
  console.log("context: ", context);
};

export default echoFn;
