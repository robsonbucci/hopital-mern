import app from './app.js';
import cloudnary from 'cloudinary';

const port = process.env.PORT;

cloudnary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_SECRET,
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
