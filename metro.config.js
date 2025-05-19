const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

const config = getDefaultConfig(__dirname);

// Add critical asset resolution fix
config.resolver.extraNodeModules = new Proxy(
  {},
  {
    get: (target, name) => path.join(process.cwd(), `node_modules/${name}`),
  }
);

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === "missing-asset-registry-path") {
    return {
      filePath: path.join(
        __dirname,
        "node_modules",
        "expo-router",
        "assets",
        "logotype.png"
      ),
      type: "sourceFile",
    };
  }
  return context.resolveRequest(context, moduleName, platform);
};

// SVG transformer configuration
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
  unstable_allowRequireContext: true,
};

// Asset extensions handling
config.resolver.assetExts = [
  ...config.resolver.assetExts.filter((ext) => ext !== "svg"),
  // Add these if not present
  "png",
  "jpg",
  "jpeg",
  "ttf",
  "otf",
];

config.resolver.sourceExts = [
  ...config.resolver.sourceExts,
  "svg",
  "md", // Add if using markdown files
];

module.exports = withNativeWind(config, { input: "./app/globals.css" });
