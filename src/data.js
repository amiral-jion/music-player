import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      id: uuidv4(),
      name: "rolling down this lazy wave",
      artist: "santpoort",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/04/6acdccd13d84220cc009a3f5073a1a41550c17cb-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8021",
      active: true,
      color: ["#df98ec", "#51a9e7"],
    },
    {
      id: uuidv4(),
      name: "Slim Bobby",
      artist: "Aviino",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10448",
      active: false,
      color: ["#8f4e9c", "#1f3560"],
    },
    {
      id: uuidv4(),
      name: "Going Back",
      artist: "Swørn",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/737bb830d34592344eb4a2a1d2c006cdbfc811d9-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10310",
      active: false,
      color: ["#314f5a", "#fd5f46"],
    },
    {
      id: uuidv4(),
      name: "Beaver Creek",
      artist: "Aso, Middle School, Aviino",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10076",
      active: false,
      color: ["#fdd98c", "#41d4c4"],
    },
    {
      id: uuidv4(),
      name: "Yesterday",
      artist: "Mo Anando",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/b6e48e6cfb2a90723b9cf1b108a6d305f9204eb4-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9281",
      active: false,
      color: ["#af5ed7", "#a5e8c9"],
    },
    {
      id: uuidv4(),
      name: "Nightfall",
      artist: "Aiguille",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      active: false,
      color: ["#f89ace", "#4e457f"],
    },
    {
      id: uuidv4(),
      name: "Daylight",
      artist: "Aiguille",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      active: false,
      color: ["#5f59b3", "#fed8cb"],
    },
    {
      id: uuidv4(),
      name: "Toft",
      artist: "Felty, Ezzy",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/858b533ba20ff95bf5b401089b195d1a8cb43870-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9312",
      active: true,
      color: ["#172646", "#eaa763"],
    },
  ];
}
export default chillHop;
