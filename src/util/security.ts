import { User } from "../entities/user";

export function sanitisePassword(user:User){
          delete user.Password
}