import ImageKit from '@imagekit/nodejs';
import fs from 'fs'

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY, // This is the default and can be omitted
});

export default imagekit;