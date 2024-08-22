// const myPromise = new Promise((resolve, reject) => {
//     let success = true; // Simulate an operation result

//     if (success) {
//         resolve("Operation was successful!"); // Fulfilled
//     } else {
//         reject("Operation failed!"); // Rejected
//     }
// });
// //console.log(myPromise);
// myPromise
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Operation completed"); // Runs regardless of the outcome
//     });
// Simulate an API call that returns a promise


// Chain the promises


// Simulate an API call that returns a promise
// const fetchUser = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ id: 1, name: 'Alice' }); // Simulate fetched user data
//         }, 1000);
//     });
// };

// // Simulate an API call to fetch user data
// const fetchUserPosts = (userId) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([{ postId: 1, content: 'Hello World' }]); // Simulate fetched posts
//         }, 1000);
//     });
// };

// // Simulate an API call to fetch details of a specific post
// const fetchPostDetails = (postId) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ postId: postId, details: 'Post details here' }); // Simulate post details
//         }, 1000);
//     });
// };

// // Chain the promises
// fetchUser()
//     .then(user => {
//         console.log('User:', user);
//         return fetchUserPosts(user.id); // Pass user ID to next promise
//     })
//     .then(posts => {
//         console.log('Posts:', posts);
//         return fetchPostDetails(posts[0].postId); // Pass post ID to next promise
//     })
//     .then(postDetails => {
//         console.log('Post Details:', postDetails);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     })
//     .finally(() => {
//         console.log('All operations are complete.');
//     });

    const doSomething = (value) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(value + 1);
            }, 1000);
        });
    };
    
    doSomething(1)
        .then(result => doSomething(result)) // Chaining: result is passed to the next `doSomething`
        .then(result => doSomething(result))
        .then(result => {
            console.log(result); // Final result after all operations
        })
        .catch(error => {
            console.error('Error:', error);
        });
    

