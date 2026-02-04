import mongoose from 'mongoose';

const VisitorSchema = new mongoose.Schema({
ip:{type:String},
userAgent:{type:String},
  time:{ type:String},
});

export default mongoose.models.Visitor || mongoose.model('Visitor', VisitorSchema);
