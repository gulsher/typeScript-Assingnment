class YoutubeChannelPage {
    constructor(private id:number , private channelName:string , private subscribers:number, private Description:string , private dateOfJoining:string, private totalViews:number){
        this.id = id
        this.channelName = channelName
        this.subscribers = subscribers
        this.Description = Description
        this.dateOfJoining = dateOfJoining
        this.totalViews  =totalViews
    }
//get method
getId = ()=>{
    return this.id
}
 getchannelName = () =>{
     return this.channelName
 }

 getsubsribers = ()=>{
     return this.subscribers
 }

 getdescription = ()=>{
     return this.Description
 }

 getdateofjoining = ()=>{
     return this.dateOfJoining
 }
 gettotalviews = () =>{
     return this.totalViews
 }

}

class Videos{
    constructor(private videoId:number,private Url:string, private title:string, private videoViews:number, private vLikes:number, private vDislike:number, private comments:videoComment[], private uploadedBy:YoutubeChannelPage){
        this.videoId = videoId
        this.Url = Url
        this.title = title
        this.videoViews = videoViews
        this.vLikes = vLikes
        this.vDislike = vDislike
        this.comments = comments
    }

    //get method

    getvideoId = ()=>{
        return this.videoId
    }
    geturl =() =>{
        return this.Url
    }
    getTitle = ()=>{
        return this.title
    }

    getvideoViews = () =>{
        return this.videoViews
    }

    getvLikes = () =>{
        return this.vLikes
    }

    getvdislike =()=>{
        return this.vDislike
    }

    getComment = ()=>{
        return this.comments
    }

    getUploadedby =()=>{
        return this.uploadedBy
    }
}


class videoComment {
    constructor(private commentId:number,private commentBy:YoutubeChannelPage , private comment:string, private cLike:number, private cDislike:number){
        this.commentId = commentId
        this.commentBy = commentBy
        this.comment = comment
        this.cLike = cLike
        this.cDislike = cDislike
    }
    getCommentId = ()=>{
        return this.commentId
    }

    getCommentBy =()=>{
        return this.getCommentBy
    }
    getComment =()=>{
        return this.comment
    }

    getCLike =()=>{
        return this.cLike
    }

    getCDislike = ()=>{
        return this.cDislike
    }
}



let Spark = new YoutubeChannelPage(1,"sparkles",1250,"this page is about cs go","12-jan-2012",105050)
let Edwisor = new YoutubeChannelPage(2,"Edwisor",14000,"this page is about Elearning","10-june-2014",560000)

let comment1 = new videoComment(1,Edwisor,"nice video",100,2)
let comment2 = new videoComment(2,Spark,"awesome",134,3)

let combineComments =[comment1,comment2]

let videos1 = new Videos(1,"http:www.youtube.com/123454rd","fastest Ace",234,100,2,combineComments,Spark)
 console.log(videos1)