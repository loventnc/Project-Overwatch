/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "BgOverviews" : 'url("https://media.discordapp.net/attachments/1185980293648232581/1186684738057015356/BgOverviews.jpg?ex=65942549&is=6581b049&hm=3040ec744333efb811be0027e9a0db8ee5caefe689091132ad4d25a3ba053d6a&=&format=webp")',
        "BGHeader" : 'url("https://news.xbox.com/en-us/wp-content/uploads/sites/2/2023/08/Invasion_KeyArt_LayeredSolar_v3_3840x2160_center-00462e75b05ace708b8a.jpg")',
        "BGMaps" : 'url("https://doope.jp/media/17q4/img2205_02.jpg")',
        "BGGM" : 'url("https://media.discordapp.net/attachments/1185980293648232581/1186755779760496800/OW_OasisMap_009_png_jpgcopy1_copy.jpg?ex=65946772&is=6581f272&hm=1a7902e4dd14d4966fabaa980d60dda7a9dcbba329b4414cc063cd797b8ff09d&=&format=webp&width=1572&height=886")',
        "BGLogin" : 'url("https://media.discordapp.net/attachments/1185980293648232581/1186764205748146186/volskaya-s-final-point-is-in-a-wide-open-space_copy.png?ex=65946f4b&is=6581fa4b&hm=ef884d48e7cf4c55ba40c9743ebfd20c5a54af13f2ade39304c5ebafa4c9abe6&=&format=webp&quality=lossless&width=1572&height=950")'
      }
      
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
} 