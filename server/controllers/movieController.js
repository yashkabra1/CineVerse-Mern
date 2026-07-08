import Movie from "../models/Movie.js";

export const addMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);

    res.status(201).json({
      success: true,
      message: "Movie added successfully",
      movie,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMovies = async (req, res) => {
  try {

    const movies = await Movie.find();

    res.status(200).json({
      success: true,
      total: movies.length,
      movies,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};