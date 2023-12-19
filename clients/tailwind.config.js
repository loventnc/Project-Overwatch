/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "BgOverviews" : 'url("https://media.discordapp.net/attachments/1185980293648232581/1186684738057015356/BgOverviews.jpg?ex=65942549&is=6581b049&hm=3040ec744333efb811be0027e9a0db8ee5caefe689091132ad4d25a3ba053d6a&=&format=webp")',
        "BGHeader" : 'url("https://news.xbox.com/en-us/wp-content/uploads/sites/2/2023/08/Invasion_KeyArt_LayeredSolar_v3_3840x2160_center-00462e75b05ace708b8a.jpg")',
        "BGMaps" : 'url("https://doope.jp/media/17q4/img2205_02.jpg")'
      }
      
    },
  },
  plugins: [require("daisyui")],
} 