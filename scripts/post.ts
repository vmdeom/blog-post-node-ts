class Post{
    id: number;
    user: string;
    postDateTime: string;
    post: string;

    constructor(id, user, postDateTime, post){
        this.id = id;
        this.user = user;
        this.postDateTime = postDateTime;
        this.post = post;
    }
}

module.exports = Post;