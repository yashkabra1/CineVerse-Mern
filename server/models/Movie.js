import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    poster: {
      type: String,
      default: "",
    },

    banner: {
      type: String,
      default: "",
    },

    trailer: {
      type: String,
      default: "",
    },

    videoUrl: {
      type: String,
      default: "",
    },

    genre: [
      {
        type: String,
      },
    ],

    language: {
      type: String,
      default: "English",
    },

    duration: {
      type: Number,
      default: 0,
    },

    releaseYear: {
      type: Number,
    },

    imdbRating: {
      type: Number,
      default: 0,
    },

    type: {
      type: String,
      enum: ["movie", "series", "anime"],
      default: "movie",
    },

    cast: [
      {
        type: String,
      },
    ],

    director: {
      type: String,
      default: "",
    },

    seasons: {
      type: Number,
      default: 1,
    },

    episodes: {
      type: Number,
      default: 1,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    trending: {
      type: Boolean,
      default: false,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Movie", movieSchema);