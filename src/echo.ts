const echoFn = (context: any) => {
  // 真正的构建脚本
  console.log("echo context");
  console.log(
    "commands: ",
    JSON.stringify(context.projectConfig.devkit.commands)
  );
};

export default echoFn;
module.exports = echoFn;
