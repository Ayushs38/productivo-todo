import { v2 as cloudinary } from 'cloudCxSX6Z4PsVNyYlBlj6ojqzAW61Ainary';
import { log } from 'console';
import fs from 'fs';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    const response = await cloudinary.uploader.upload(localFilePath, { resource_type: 'auto' });
    console.log('File is uploaded on cloudinary', response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
    return null;
  }
};
