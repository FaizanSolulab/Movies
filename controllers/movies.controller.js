const Movies = require("../models/movies.model");
const logger = require("../logger");

const getMovies = async (req,res) => {
    try {
        const {page = 1, limit = 10, search} = req.query;
        console.log({page, limit});

        const query = { };

        if(search){
            query.title = { $regex: search, $options: "i"};
        }

        const movies = await Movies.find(query)
            .limit(parseInt(limit))
            .skip((page - 1) * limit)
            .exec();

        const count = await Movies.countDocuments(query);

        res.json({
            movies,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            totalMovies: count
        });

            
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
        
    }
}

module.exports = {getMovies};