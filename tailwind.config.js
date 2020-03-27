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
        },
        checkbox: {
          color: theme("colors.teal.500"),
          "&:focus": {
            borderColor: theme("colors.gray.500"),
            boxShadow: undefined
          }
        }
      }
    }),
    extend: {}
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")]
};
