import { Image } from "../models/imageSchema.js";
import cloudinary from "cloudinary";

//json data for getImages API
const imageData = [
  {
    _id: "661d4cb027fc8c33c026d95f",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713196207/nlgxwbhiw58tctft7uc1.jpg',
    n_id: 1
  },
  {
    _id: "661d4ce627fc8c33c026d962",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713196260/ozpu36qwbk8mk92qidtl.jpg',
    n_id: 2
  },
  {
    _id: "661d4d4f27fc8c33c026d965",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713196366/x4mwnoylr6chwqvlndmk.jpg',
    n_id: 3
  },
  {
    _id: "661d4d7927fc8c33c026d968",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713196407/cbkg294b92tnesgr81pm.jpg',
    n_id: 4
  },
  {
    _id: "661d4d9827fc8c33c026d96b",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713196439/ydpn0qnks3fqvehhyead.jpg',
    n_id: 5
  },
  {
    _id: "661d4dea27fc8c33c026d96e",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713196519/odpo2vuqll2qwl09yrsn.jpg',
    n_id: 6
  },
  {
    _id: "661d4e5027fc8c33c026d971",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713196623/wyppnrgwnjn4pxtp4beq.jpg',
    n_id: 7
  },
  {
    _id: "661d4e9e27fc8c33c026d974",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713196700/o953uvkrrernoxhl6k2x.jpg',
    n_id: 8
  },
  {
    _id: "661d4ed427fc8c33c026d977",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713196754/car62rrmofdpeqs2qwum.jpg',
    n_id: 9
  },
  {
    _id: "661d4f64d0b5d80b08de6d73",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713196899/r1sdoyelakvvf3folcuf.jpg',
    n_id: 10
  }
]
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

export const test = async (req, res) =>{
  res.json({
    message : "hey I am alive now",
    secondMessage : "hey i have tested the change, and it is live now",
    thirdMessage :  "hey , this is the final test for this"
  })
}


export const getImages = async (req, res) => {
  try {
       
    const page = parseInt(req.query.page) || 1; 
    const pageSize = parseInt(req.query.pageSize) || 2; 
    const totalImages = imageData.length;
    const totalPages = Math.ceil(totalImages / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalImages);

    const paginatedData = imageData.slice(startIndex, endIndex);

    res.json({
      success: true,
      status: 200,
      message: "Success",
      data: {
        totalImages: totalImages,
        currentPage: page,
        totalPages: totalPages,
        images: paginatedData,
      },
    });
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({
      success: false,
      status: 500,
      message: "Internal Server Error",
    });
  }
};

