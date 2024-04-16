module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    //new text
    plugins:[
      [
        "module:react-native-dotenv",
        {
          moduleName:"@env",
          path:".env",
        },
      ],
    ],
  };
};
