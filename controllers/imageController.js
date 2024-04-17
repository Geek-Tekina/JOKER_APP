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
  },
  
  {
    _id: "661fed992dbea38f81526ec1",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713368469/rjipa2y93kq85ffyuut4.jpg',
    n_id: 11
  },
  {
    _id: "661fedbb2dbea38f81526ec4",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713368503/gemzq9d6c743wzrnwl1c.jpg',
    n_id: 12
  },
  {
    _id: "661fedf22dbea38f81526ec7",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713368558/c0ebzumfwknlsh3nw3jq.jpg',
    n_id: 13
  },
  {
    _id: "661fee1f2dbea38f81526eca",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713368603/hovbq7df6e7hmppu87ls.jpg',
    n_id: 14
  },
  {
    _id: "661feeb02dbea38f81526ecd",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713368748/g1cphrg7rmbq2h6h11bs.jpg',
    n_id: 15
  },
  {
    _id: "661feec92dbea38f81526ed0",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713368773/zzbozhuhmsskvfhuhv6a.jpg',
    n_id: 16
  },
  {
    _id: "661feedb2dbea38f81526ed3",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713368791/fnnrzgg5kknqff4qyqqm.jpg',
    n_id: 17
  },
  {
    _id: "661feeec2dbea38f81526ed6",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713368808/gxxioqmrpse2fi4xnqtv.jpg',
    n_id: 18
  },
  {
    _id: "661fef042dbea38f81526ed9",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713368831/klpxibx7rleseuktbums.jpg',
    n_id: 19
  },
  {
    _id: "661fef212dbea38f81526edc",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713368861/i8w63qk9btovr4meouis.jpg',
    n_id: 20
  },
  {
    _id: "661ff0802dbea38f81526edf",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369212/sig5qfohx6htzvleyubl.jpg',
    n_id: 21
  },
  {
    _id: "661ff0b02dbea38f81526ee2",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369260/upe8fyw4jv21kmimkpde.jpg',
    n_id: 22
  },
  {
    _id: "661ff1082dbea38f81526ee8",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369348/cysivbnhvvge5d1ouabb.jpg',
    n_id: 24
  },
  {
    _id: "661ff1242dbea38f81526eeb",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369377/zsgkkof0yaecuufeaymi.jpg',
    n_id: 25
  },
  {
    _id: "661ff14d2dbea38f81526eee",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369417/ffzsrtyberaz7wbvndis.jpg',
    n_id: 26
  },
  {
    _id: "661ff1772dbea38f81526ef1",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369460/j2wtz6kx0ldacrzxwypw.jpg',
    n_id: 27
  },
  {
    _id: "661ff1a62dbea38f81526ef4",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369506/j3bcuwficztbghfleomi.jpg',
    n_id: 28
  },
  {
    _id: "661ff1dd2dbea38f81526ef7",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369561/bx1b5rudq0vjrvtt3re8.jpg',
    n_id: 29
  },
  {
    _id: "661ff23f10cd033c463d305b",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369659/n3d5hrodkp3na4prb5st.jpg',
    n_id: 30
  },
  {
    _id: "661ff27210cd033c463d305e",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369711/xaw9hw03sj5edlgoerhq.jpg',
    n_id: 31
  },
  {
    _id: "661ff29310cd033c463d3061",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369743/lpaczgjdyah6iokwskeu.jpg',
    n_id: 32
  },
  {
    _id: "661ff2b410cd033c463d3064",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369776/sypywe5mzepa4hplynj2.jpg',
    n_id: 33
  },
  {
    _id: "661ff2e010cd033c463d3067",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369820/wym0y7t5n3luolpmrfxk.jpg',
    n_id: 34
  },
  {
    _id: "661ff2fc10cd033c463d306a",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369848/nqcnmmxh8b9gjxdacbke.jpg',
    n_id: 35
  },
  {
    _id: "661ff31510cd033c463d306d",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369873/v3qxkahd1d22ixzzodax.jpg',
    n_id: 36
  },
  {
    _id: "661ff32d10cd033c463d3070",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369897/yxtahi21asebtpm9aeys.jpg',
    n_id: 37
  },
  {
    _id: "661ff34510cd033c463d3073",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369921/qxgsbthkecz0j5vxq8zj.jpg',
    n_id: 38
  },
  {
    _id: "661ff35a10cd033c463d3076",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369942/lkcavne0tvlxtphfypsj.jpg',
    n_id: 39
  },
  {
    _id: "661ff36c10cd033c463d3079",
    url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369960/jo0jp6niit07aom0xxis.jpg',
    n_id: 40
  },
  
{
  _id: "661ff38510cd033c463d307c",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713369985/rm23cpxy7nlivthjvd7t.jpg',
  n_id: 41
},
{
  _id: "661ff3af10cd033c463d307f",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713370027/qejktu4l57rv5euateta.jpg',
  n_id: 42
},
{
  _id: "661ff3c910cd033c463d3082",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713370053/jimbpgf8o56hduqxy6ah.jpg',
  n_id: 43
},
{
  _id: "661ff3dd10cd033c463d3085",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713370073/z11gp13vdjbx3wzet0gx.jpg',
  n_id: 44
},
{
  _id: "661ff3fc10cd033c463d3088",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713370104/fqzcpvfsvttcf01ruxby.jpg',
  n_id: 45
},
{
  _id: "661ff41710cd033c463d308b",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713370131/v8liqcd8arjdqlyyo9zh.jpg',
  n_id: 46
},
{
  _id: "661ff45f10cd033c463d3091",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713370203/wqhfrskgwdkxcsz9osiv.jpg',
  n_id: 47
},
{
  _id: "661ff48110cd033c463d3094",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713370237/k2vff2cilpw1gqynbuwt.jpg',
  n_id: 48
},
{
  _id: "661ff49510cd033c463d3097",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713370257/mwr02g4fqni8xdb2gcqo.jpg',
  n_id: 49
},
{
  _id: "661ff4ad10cd033c463d309a",
  url: 'https://res.cloudinary.com/dgct4lfji/image/upload/v1713370281/yk622hihy2ipxfghu2nz.jpg',
  n_id: 50
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
        images: paginatedData,
        totalImages: totalImages,
        currentPage: page,
        totalPages: totalPages,
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

