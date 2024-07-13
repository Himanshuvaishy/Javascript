// for each loop
const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
   // console.log(val);
} )

coding.forEach( (item) => {
    //console.log(item);
} )

function printMe(item){
   // console.log(item);
}

coding.forEach(printMe)
// by default for each have different parameter it contain index , item and array list
coding.forEach( (item, index, arr)=> {
    //console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
   // console.log(item);
} );

for (const language of myCoding) {
   console.log(language.languageName);
   console.log(language.languageFileName);
}


