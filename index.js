const tts = require('@google-cloud/text-to-speech');
const dotenv = require('dotenv');
const { Audio } = require('node-mp3-player');

dotenv.config();

const client = new tts.TextToSpeechClient();

const ttmp3 = async () => {
  const text = "Hello, how are you? Where are you from?";

  const request = {
    input: { text },
    voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
    audioConfig: { audioEncoding: 'MP3' },
  };

  const [response] = await client.synthesizeSpeech(request);

  const audioContent = response.audioContent;

  const player = new Audio();
  player.add(text, audioContent);
  player.play(text);
};

ttmp3();
