import fetch from "node-fetch";

const url = process.env.SERVER_URL || "http://localhost:5000/";

setInterval(async () => {
  try {
    const res = await fetch(url);
    console.log("Self ping success:", res.status);
  } catch(err) {
    console.log("Self ping failed:", err.message);
  }
}, 60 * 1000); // 1 minute