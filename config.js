module.exports = {
TOKEN: "YOUR_DISCORD_BOT_TOKEN",

language: "en",

ownerID: ["1004206704994566164"],

mongodbUri: "mongodb+srv://shiva:shiva@musicbotyt.ouljywv.mongodb.net/?retryWrites=true&w=majority",

spotifyClientId: "d92baed9605a45a39ed7c2a2d960b1c1",
spotifyClientSecret: "e9b29f6739de4315bc03b6d8a8e93b03",

setupFilePath: "./commands/setup.json",
commandsDir: "./commands",

embedColor: "#1db954",

activityName: "YouTube Music",
activityType: "LISTENING",

SupportServer: "https://discord.gg/xQF9f9yUEM",

embedTimeout: 5,

showProgressBar: false,
showVisualizer: false,
generateSongCard: true,

// Performance optimization
lowMemoryMode: true,

errorLog: "",

nodes: [
{
      name: "Mart",
      password: "D-Radio",
      host: "162.19.133.164",
      port: 7918,
      secure: false
    }
]
};
