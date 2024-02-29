import mongoose, { Schema } from 'mongoose';
const taskSchema = new Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
    index: true,
    required: false,
    updated: Boolean,
    completed: Boolean,
    important: Boolean,
  },
},
{
    timestamps:true
});



export default Task = mongoose.model('Task',taskSchema);