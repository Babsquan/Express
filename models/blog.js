// require mongoose
// From mongoose we use a method which is Schema(this defines the structure of the document we would store in a collection,its the thing that a amodel wraps around,note that the S in schema is capitalized)

const mongoose =require('mongoose')
const Schema =mongoose.Schema

const blogSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
},{timestamps:true}
)

// lets create our model (model is what surrounds the schema and provide us with an interface by which to communicate with a DB)
const Blogs = mongoose.model('Blog',blogSchema)

module.exports = Blogs