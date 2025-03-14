import mongoose from "mongoose"

const userInfoSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    location: String,
    links: {
        linkedin: String,
        github: String,
        portfolio: String
    },
    summary: String,
})

const userInfoSch = mongoose.model("UserInfo", userInfoSchema)
export default userInfoSch;