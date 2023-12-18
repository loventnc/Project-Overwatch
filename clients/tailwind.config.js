/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "BgOverviews" : 'url("https://www.gameinformer.com/sites/default/files/styles/full/public/2021/05/20/99fb0779/montecarlo.jpg")',
        "BGHeader" : 'url("https://news.xbox.com/en-us/wp-content/uploads/sites/2/2023/08/Invasion_KeyArt_LayeredSolar_v3_3840x2160_center-00462e75b05ace708b8a.jpg")',
        "BGMaps" : 'url("https://doope.jp/media/17q4/img2205_02.jpg")'
      }
      
    },
  },
  plugins: [require("daisyui")],
} 