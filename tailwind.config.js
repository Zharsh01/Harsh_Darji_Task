module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        custom: "10px 20px 40px 0px #2940461A;",
      },
      backgroundImage: {
        "custom-gradient1":
          "linear-gradient(180deg, rgba(112,130,70,0) 0%, rgba(112,130,70,0.1) 100%)",
        "custom-gradient2":
          "linear-gradient(180deg, rgba(108,198,63,0) 0%, rgba(108,198,63,0.1) 100%)",
        "custom-gradient3":
          "linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%)",
        "custom-gradient4":
          "linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%)",
        "custom-gradient5":
          "background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)",
      },
    },
  },
  plugins: [],
};
