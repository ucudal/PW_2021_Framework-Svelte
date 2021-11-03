

module.exports = {
  // mode: 'jit',
  corePlugins: {
    scale: true
  },
  purge: ['./src/*/**.svelte'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        prime: "#ff3e00",
        offgray: "#444",
        second: "#676778",
      }
    },
  },
  variants: {
    extend: {
      borderRadius: ['hover'],
      scale: ['group-hover'],
      borderWidth: ['hover']
    },
  },
  plugins: [],
}
