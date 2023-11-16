// server.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// Add your API routes here...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// server.js continued
const SpeechRecognition = require("react-speech-recognition");

app.post("/transcribe", (req, res) => {
  const { audioData } = req.body; // Assuming audio data is sent in the request body

  try {
    const { transcript } = SpeechRecognition.transcribe({ audioData });
    res.json({ transcript });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const cors = require("cors");
app.use(cors());
