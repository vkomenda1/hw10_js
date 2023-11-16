class Comment {

    constructor(text){
        this.text = text;
        this.likesQuantity = 0
    }

    addLike() {
        this.likesQuantity += 1;
    }

    static mergeComments(first, second){
        return `${first} ${second}`
    }

}

const firstComment = new Comment('First comment text');
const secondComment = new Comment('Second comment text');

// console.log(firstComment)
// console.log(firstComment.text)
// console.log(firstComment.likesQuantity)

// firstComment.addLike();
// secondComment.addLike();
// secondComment.addLike();

// console.log(firstComment)
// console.log(secondComment)

firstComment.addLike();

let merged = Comment.mergeComments('First ', 'Second')
console.log(merged)

