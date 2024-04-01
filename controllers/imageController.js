import { Image } from "../models/imageSchema.js";
import cloudinary from "cloudinary";

// controller for displaying all the images
export const getAllImages = async (req, res) => {
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 2;
  // Count total number of images
  const totalImages = await Image.countDocuments();

  // Calculate total pages
  const totalPages = Math.ceil(totalImages / limit);

  const imageList = await Image.find({})
    .select({ url: true, n_id: true })
    .skip((page - 1) * limit)
    .limit(limit)
    .exec();
  res.json({
    success: true,
    status: 200,
    message: "Success",
    data: {
      imageList,
      totalImages: totalImages,
      totalPages: totalPages,
    },
  });
};

// controller for uploading Image
export const uploadImage = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    res.json({
      status: false,
      message: "Image Required",
    });
  }
  const { image } = req.files;

  const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
  if (!allowedFormats.includes(image.mimetype)) {
    res.json({
      status: false,
      message: "File type must be in png/jpeg/webp formats",
    });
  }
  const cloudinaryResponse = await cloudinary.uploader.upload(
    image.tempFilePath
  );
  if (!cloudinaryResponse || cloudinaryResponse.error) {
    console.error(
      "Cloudinary Error:",
      cloudinaryResponse.error || "Unknown Cloudinary error"
    );
    res.json({
      success: false,
      status: 500,
      message: "Failed to upload image in cloudinary !!",
    });
  }

  const newImage = await Image.create({
    public_id: cloudinaryResponse.public_id,
    url: cloudinaryResponse.secure_url,
  });
  const { n_id, url } = newImage;

  res.json({
    success: true,
    status: 200,
    message: "Image uploaded successfully",
    data: {n_id, url},
  });
};

//controller for image details
export const detail = async (req, res) => {
  const numeric_id = +req.query.n_id;
  // console.log(id);
  const imageDetail = await Image.findOne({ n_id: numeric_id }).exec();
  if (!imageDetail) {
    return res.json({
      success: false,
      status: 404,
      message: "Image Not found",
    });
  }
  const { n_id, url } = imageDetail;

  res.json({
    success: true,
    status: 200,
    message: "Image Details",
    data: { n_id, url },
  });
};

//controller for delete image
export const deleteImage = async (req, res) => {
  const numeric_id = +req.query.n_id;
  const img = await Image.findOne({ n_id: numeric_id }).exec();
  if (!img) {
    return res.json({
      success: false,
      status: 404,
      message: "Image Not found",
    });
  }
  await img.deleteOne();
  const { n_id, url } = img;

  res.json({
    success: true,
    status: 200,
    message: "Image deleted successfully",
    data: { n_id, url },
  });
};
