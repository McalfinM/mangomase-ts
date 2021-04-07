import { model, Schema, Model } from "mongoose";
import { IAnimalType } from './interfaces/animalType'

const AnimalTypeSchema: Schema = new Schema(
    {
        uuid: { type: String },
        name: { type: String },
        animal_type_uuid: { type: String },
        deleted_at: { type: Date },
        created_at: { type: Date },
        updated_at: { type: Date }
    }
);

const AnimalType: Model<IAnimalType> = model("animal_type", AnimalTypeSchema);

export default AnimalType;
