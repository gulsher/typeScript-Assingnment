class Fb{
    constructor(private name:string,private birthday:string,private gender:string,private work:object[],private education:object[],private livesIn:string, private from:string,private mobNo:number,private emailId:string,private facebookId:string,private interestedIn:string,private religionView:string,private relationship:string,private aboutYou:string,private nickname:string,private favQuote:string,private lang:string[]){
            this.name = name
            this.birthday =birthday
            this.gender = gender
            this.work = work
            this.education =education
            this.livesIn =livesIn
            this.from = from
            this.mobNo =mobNo
            this.emailId = emailId
            this.facebookId = facebookId
            this.interestedIn =interestedIn
            this.religionView =religionView
            this.relationship = relationship
            this.aboutYou =aboutYou
            this.nickname = nickname
            this.favQuote = favQuote
            this.lang = lang
    }

    getName = () =>{
        return this.name
    }

    getBirthday = () =>{
        return this.birthday
    }
     getGender =()=>{
         return this.gender
     }
     getWork =()=>{
         return this.work
     }

     getEducation =()=>{
         return this.education
     }
     getLivesIn=()=>{
         return this.livesIn
     }
     getFrom=()=>{
         return this.from
     }

     getMobNo=()=>{
         return this.mobNo
     }
     getEmail=()=>{
         return this.emailId
     }
     getFacebookId =()=>{
        return this.facebookId
     }

     getInterestedIn=()=>{
         return this.interestedIn
     }

     getReligionView=()=>{
         return this.religionView
     }
     getRelationship=()=>{
         return this.relationship
     }
     getAboutYou =()=>{
         return this.aboutYou
     }
     getNickName =()=>{
         return this.nickname
     }

     getFabQuote =()=>{
         return this.favQuote
     }

     getLang =()=>{
         return this.lang
     }
}


let currentWork = {
    companyName : "Chromozomes",
    profile : "web developer",
    yearOfJoining : 2018
}
let arrayWork =[currentWork]

let completeEducation = {
    collegeName : "HKBKCE",
    branch : "cse",
    From : "2012",
    to : "2016"
}
let arrayEducation = [completeEducation]

let languages =["english","hindi"]

let ProfileDetails = new Fb("Gulsher","02-june-1994","male", arrayWork,arrayEducation,"bangalore","allahabad",8147203202,"ahmed.gulsher@gmail.com","https://www.facebook.com/gulsherahmedgamer","women","respect All","single","i'm not perfect","gul","never back down",languages)

console.log(ProfileDetails)