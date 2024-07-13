let url="http://universities.hipolabshipolabs.com/search?name="


let country="india";

async function  getColleges(){
    try{
        let res = await axios.get(url+country);
        console.log(res);

    }catch(e){
        console.log("errror",e);

    }
}