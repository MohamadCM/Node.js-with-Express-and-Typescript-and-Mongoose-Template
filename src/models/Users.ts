import * as mongoose from "mongoose";
import {prop, getModelForClass} from "@typegoose/typegoose";
import {GetModelForClassOptions, Typegoose} from "typegoose";
import {Model} from "mongoose";
import {ModelType} from "@typegoose/typegoose/lib/types";

//General User Interface
interface User {
    username: string,
    password: string
}

class UserType1 extends Typegoose
    implements User{
    @prop({required: true})
    password: string;
    @prop({required: true, unique: true})
    username: string;
    @prop({required: true})
    name: string;
    public constructor(password: string, username: string, name: string) {
        super();
        this.password = password;
        this.username = username;
        this.name = name;
    }

}
const UserType1Model: ModelType<UserType1> = getModelForClass(UserType1);
export {UserType1Model};

/*const u: UserType1 = new UserType1("1234", "1234", "Mohamad"); // Adding a new user
(async () => {
    const {_id: id} = await UserType1Model.create(u);
})();*/
