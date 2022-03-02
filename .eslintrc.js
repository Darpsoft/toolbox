const RULES = {
  OFF: "off",
  WARN: "warn",
  ERROR: "errro",
};

module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
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
};
