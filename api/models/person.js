import mongoose from 'mongoose';
import jwt from "jsonwebtoken"
const { Schema } = mongoose;
const personSchema = new Schema({
    email: { type: String, required: true, unique: true },
    fname: { type: String, required: true },
    lname: { type: String, },
    password: { type: String, required: true },
    linkedin: { type: String, default: 'Linkedin' },
    github: { type: String, default: 'Github' },
    facebook: { type: String, default: 'Facebook' },
    website: { type: String, default: 'Website' },
    // tokens: [{
    //     token: {
    //         type: String,
    //         required: true
    //     }
    // }]

});
// personSchema.methods.generateAuthToken = async () => {
//     try {
//         const token = await jwt.sign({ _id: this._id.toString() }, "456465fgchchchycfc64564654654654hchgcfcgcgfcg")
//         this.tokens = this.tokens.concat({ token: token })
//         await this.save()
//         console.log(token);
//         return token
//     }
//     catch (error) {

//     }
// }
export default mongoose.model("Car", personSchema);