/** @format */

module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            ["@babel/preset-env", { targets: { node: "current" } }],
            "@babel/preset-typescript",
            "babel-preset-expo",
        ],
        plugins: ["react-native-reanimated/plugin"],
    };
};
