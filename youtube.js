var YoutubeChannelPage = /** @class */ (function () {
    function YoutubeChannelPage(id, channelName, subscribers, Description, dateOfJoining, totalViews) {
        var _this = this;
        this.id = id;
        this.channelName = channelName;
        this.subscribers = subscribers;
        this.Description = Description;
        this.dateOfJoining = dateOfJoining;
        this.totalViews = totalViews;
        //get method
        this.getId = function () {
            return _this.id;
        };
        this.getchannelName = function () {
            return _this.channelName;
        };
        this.getsubsribers = function () {
            return _this.subscribers;
        };
        this.getdescription = function () {
            return _this.Description;
        };
        this.getdateofjoining = function () {
            return _this.dateOfJoining;
        };
        this.gettotalviews = function () {
            return _this.totalViews;
        };
        this.id = id;
        this.channelName = channelName;
        this.subscribers = subscribers;
        this.Description = Description;
        this.dateOfJoining = dateOfJoining;
        this.totalViews = totalViews;
    }
    return YoutubeChannelPage;
}());
var Videos = /** @class */ (function () {
    function Videos(videoId, Url, title, videoViews, vLikes, vDislike, comments, uploadedBy) {
        var _this = this;
        this.videoId = videoId;
        this.Url = Url;
        this.title = title;
        this.videoViews = videoViews;
        this.vLikes = vLikes;
        this.vDislike = vDislike;
        this.comments = comments;
        this.uploadedBy = uploadedBy;
        //get method
        this.getvideoId = function () {
            return _this.videoId;
        };
        this.geturl = function () {
            return _this.Url;
        };
        this.getTitle = function () {
            return _this.title;
        };
        this.getvideoViews = function () {
            return _this.videoViews;
        };
        this.getvLikes = function () {
            return _this.vLikes;
        };
        this.getvdislike = function () {
            return _this.vDislike;
        };
        this.getComment = function () {
            return _this.comments;
        };
        this.getUploadedby = function () {
            return _this.uploadedBy;
        };
        this.videoId = videoId;
        this.Url = Url;
        this.title = title;
        this.videoViews = videoViews;
        this.vLikes = vLikes;
        this.vDislike = vDislike;
        this.comments = comments;
    }
    return Videos;
}());
var videoComment = /** @class */ (function () {
    function videoComment(commentId, commentBy, comment, cLike, cDislike) {
        var _this = this;
        this.commentId = commentId;
        this.commentBy = commentBy;
        this.comment = comment;
        this.cLike = cLike;
        this.cDislike = cDislike;
        this.getCommentId = function () {
            return _this.commentId;
        };
        this.getCommentBy = function () {
            return _this.getCommentBy;
        };
        this.getComment = function () {
            return _this.comment;
        };
        this.getCLike = function () {
            return _this.cLike;
        };
        this.getCDislike = function () {
            return _this.cDislike;
        };
        this.commentId = commentId;
        this.commentBy = commentBy;
        this.comment = comment;
        this.cLike = cLike;
        this.cDislike = cDislike;
    }
    return videoComment;
}());
var YoutubeChannelPage1 = new YoutubeChannelPage(1, "sparkles", 1250, "this page is about cs go", "12-jan-2012", 105050);
var YoutubeChannelPage2 = new YoutubeChannelPage(2, "Edwisor", 14000, "this page is about Elearning", "10-june-2014", 560000);
var comment1 = new videoComment(1, YoutubeChannelPage2, "nice video", 100, 2);
var comment2 = new videoComment(2, YoutubeChannelPage1, "awesome", 134, 3);
var combineComments = [comment1, comment2];
var videos1 = new Videos(1, "http:www.youtube.com/123454rd", "fastest Ace", 234, 100, 2, combineComments, YoutubeChannelPage1);
console.log(videos1);
