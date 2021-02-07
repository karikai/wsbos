import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private COLLECTION = {
    CUSTOMER: 'users', 
    USER: 'users', 
  }

  constructor(private db: AngularFirestore) { }

  classToObject(object) {
    object = Object.assign({}, object)

    for (var key in object) {
      if (object[key] === undefined) {
        delete object[key];
      }
    }

    return object;
  }

  // CRUD for User

  // Create User

  createUser(user: User) {
    return new Promise((resolve) => {
      this.db.collection<User>(this.COLLECTION.USER).doc(user.id).set(this.classToObject(user)).then(() => {
        resolve(true);
      }).catch(() => {
        resolve(false)
      })
    })
  }

  // Read User

  getUser(user_identification: string): Promise<User> {
    return new Promise((resolve) => {
      this.db.collection<User>(this.COLLECTION.USER).doc(user_identification).get().subscribe((value) => {
        resolve(User.objectToUser(value.data()));
      })
    })
  }

  // Update User
  updateUser(user : User) { 
    return new Promise((resolve) => {
      this.db.collection<User>(this.COLLECTION.USER).doc(user.id).set(this.classToObject(user))
        .then((value) => {
          resolve(true)
        }).catch((error) => {
          resolve(false)
        })
    })
  }

  // Delete User
  deleteUser(user_identification: string) { 
    return new Promise((resolve) => {
      this.db.collection<User>(this.COLLECTION.USER).doc(user_identification).delete()
        .then((value) => {
          resolve(true)
        }).catch((error) => {
          resolve(false)
        })
    })
  }

}
