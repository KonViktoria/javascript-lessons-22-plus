import { ROLES } from "./config.js";
const user = {
        name: 'John',
        role: ROLES.ADMIN
    };
 
    const admin = {
        name: 'Bill',
        role: ROLES.USER
    };
    const user2 = {
        name: 'Bill',
        role: "SUPER_ADMIN"
    };

    export function getAuthenticatedUser(){
      return user;
    }
  