// import mongoose from "mongoose";

// const imageSchema = new mongoose.Schema({

//   image: {
//     public_id: {
//       type: String,
//       required: true,
//       select: false,
//     },
//     url: {
//       type: String,
//       required: true,
//       select: false,
//     },
//   },
//   shortDescription: {
//     type: String,
//     select: false
//   },
//   title: {
//     type: String,
//     select: false
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//     select: false,
//   },
//   __v: {
//     type: Number,
//     select: false
//   },
//   _id: {
//     type: mongoose.Schema.Types.ObjectId,
//     select: false
//   }
// });

// export const Image = mongoose.model("Image", imageSchema);

import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  
    public_id: {
      type: String,
      required: true,
      select: false,
    },
    url: {
      type: String,
      required: true,
      // select: false,
    },
  
  shortDescription: {
    type: String,
    select: false,
  },
  title: {
    type: String,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    select: false,
  },
  __v: {
    type: Number,
    select: false,
  },
  n_id:{
    type : Number,
    // select : false
  },
  
  
});

imageSchema.pre("save", async function (next) {
  if (!this.isNew) {
    return next();
  }

  try {
    const count = await this.constructor.countDocuments();
    this.n_id = count + 1;
  } catch (error) {
    return next(error);
  }
  next();
});

const Image = mongoose.model("Image", imageSchema);

export { Image };

// 1 2 4 5 6 7 8
