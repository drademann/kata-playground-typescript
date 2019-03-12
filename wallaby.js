module.exports = function(wallaby) {
  console.log(wallaby);
  return {
    files: ["src/**/*.ts"],
    tests: ["test/**/*.spec.ts"],
    env: { type: "node", runner: "node" },
    testFramework: "mocha"
  };
};
