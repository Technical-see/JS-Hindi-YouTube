// const tinderUser = new Object()  // singleton object declaration

const tinderUser = {}  //Non-singleton / literals

tinderUser.Id = "As_ami"
tinderUser.Name = "Ami"
tinderUser.isLoggedIn = false
 
// console.log(tinderUser);

const regularUser = {
    email : "amit@poi.com",
    fullname: {
        userfullname: {
            firstname: "Amit",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2} // facing issue as array when merge
// const obj3 = Object.assign({}, obj1, obj2) // correct way to merge 
const obj3 = {...obj1, ...obj2} // spread operator
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        name: "Kumar"
    },
    {
        id: 3,
        Add: "Gurugram"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//Object De-Structuring

const course = {
    id: "12345",
    name: "JS Hindi",
    instructor: "Amit"
}

console.log(course.instructor); // Normally Access

  const {instructor } = course
  const {instructor: TechTeacher } = course
  console.log(instructor);
  console.log(TechTeacher);


// {
//     "name": "Ami",
//     "course": "Js Hindi",
//      "price": "Free"
// }


// [
//     {},
//     {},
//     {}
// ]