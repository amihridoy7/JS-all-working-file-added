// object literals

/* let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite']
}

console.log(user);
console.log(user.name);

// user.age = 35;
console.log(user.age);

const key = 'location';
user.key = 'location';

console.log(user['key']); user['location']
user['name'] = 'chun-li';
console.log(user['name']);

console.log(typeof user); */


// objet literals

// let user = {
//     name: 'crystal',
//     age: 30,
//     email : 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite']
// };

// console.log(user);
// console.log(user.name);

// // user.age = 35;
// console.log(user.age);

// console.log(user['email']);
// user['name'] = 'chun-li';
// console.log(user['name']);


let user = {
    name: 'crystal',
    age : 30,
    email : 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['Why mac & cheese rules', '10 things to make with marmite'],
    login: function(){
        console.log('The user logged in');
    },

    logout: function(){
        console.log('The user logged out');
    },
    logBlogs: function() {
        // console.log(this.blogs);
        // console.log('this user has written the following blogs: ');
        // this.blogs.forEach(blog => {
        //     console.log(blog);
        // })

    }
};



user.login();
user.logout();
user.logBlogs();
console.log(this);


const name = 'mario';
name.toUpperCase();