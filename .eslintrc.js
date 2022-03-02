const RULES = {
  OFF: "off",
  WARN: "warn",
  ERROR: "error",
};

module.exports = {
  env: {
    browser: false,
    es2021: true,
    node: true,
    "react-native/react-native": true,
  },
  root: true,
  extends: ["@react-native-community", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "react-hooks/exhaustive-deps": RULES.OFF,
        "no-shadow": RULES.OFF,
        "no-undef": RULES.OFF,
        "react/prop-types": RULES.OFF,
        "react/react-in-jsx-scope": RULES.OFF,
        "react-native/no-unused-styles": RULES.OFF,
        "react-native/split-platform-components": 2,
        "react-native/no-inline-styles": RULES.OFF,
        "react-native/no-color-literals": RULES.OFF,
        "react-native/no-raw-text": RULES.OFF,
        "react/display-name": RULES.OFF,
        "@typescript-eslint/explicit-function-return-type": RULES.OFF,
        "@typescript-eslint/explicit-member-accessibility": RULES.OFF,
        "@typescript-eslint/indent": RULES.OFF,
        "@typescript-eslint/member-delimiter-style": RULES.OFF,
        "@typescript-eslint/no-explicit-any": RULES.OFF,
        "@typescript-eslint/no-var-requires": RULES.OFF,
        "@typescript-eslint/no-use-before-define": RULES.OFF,
        "@typescript-eslint/no-empty-function": RULES.OFF,
        "no-console": [RULES.ERROR, { allow: ["warn", "error", "info"] }],
      },
    },
  ],
  settings: {
    react: {
      createClass: "createReactClass", // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: "React", // Pragma to use, default to "React"
      fragment: "Fragment", // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: "detect", // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      flowVersion: "0.53", // Flow version
    },
  },
};
