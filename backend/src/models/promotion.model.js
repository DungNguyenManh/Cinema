import mongoose from "mongoose"

const promotionsSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    discount_percentage: {
        type: Number,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
})

export default mongoose.model("Promotions", promotionsSchema)