class User{

    id: number;
    username: string;
    name: string;
    hashedPassword: string;

    constructor(id, username, name, hashedPassword){
        this.id = id;
        this.username = username;
        this.name = name;
        this.hashedPassword = hashedPassword;
    }

    public getId(): number{
        return this.id;
    }

    public setId(id: number){
        this.id = id;
    }

    public setUsername(username: string){
        this.username = username;
    }

    public setName(name: string){
        this.name = name;
    }

    public setHashedPassword(hashedPassword: string){
        this.hashedPassword = hashedPassword;
    }
}

module.exports = User;