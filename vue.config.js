module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_index.sass";`
      }
    }
  }
};
