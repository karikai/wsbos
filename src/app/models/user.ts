export class User {
    id: string;
    username: string;
    email: string;

    static objectToUser(tempObject): User {
        const user = new User();

        user.id = tempObject.id;
        user.username = tempObject.username;
        user.email = tempObject.email;

        return user;
    }
}