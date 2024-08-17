class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

   static  createId(){
        return `123`
    }
}

console.log(User.createId());
//console.log(User.createId());
const hitesh = new User("hitesh")
 //console.log(hitesh.createId())
 console.log(User.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
//console.log(iphone.createId());


/* However, you can't directly access static methods from instances. Instead, you should call static methods directly on the class itself. So, to call the createId method, you would use User.createId() rather than iphone.createId().


//The static keyword in JavaScript defines a static method or property for a class. When a method or property is declared as static, it means that it belongs to the class itself rather than to instances of the class. This means that it's directly accessible on the class constructor, not on instances created from the class.

   */



