module.exports = {
  theme: {
    customForms: theme => ({
      default: {
        input: {
          borderRadius: theme("borderRadius.default"),
          backgroundColor: theme("colors.white"),
          borderColor: theme("colors.gray.300"),
          "&:focus": {
            borderColor: theme("colors.gray.500")
          }
        }
      }
    }),
    extend: {}
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")]
};
