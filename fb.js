var Fb = /** @class */ (function () {
    function Fb(name, birthday, gender, work, education, livesIn, from, mobNo, emailId, facebookId, interestedIn, religionView, relationship, aboutYou, nickname, favQuote, lang) {
        var _this = this;
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.work = work;
        this.education = education;
        this.livesIn = livesIn;
        this.from = from;
        this.mobNo = mobNo;
        this.emailId = emailId;
        this.facebookId = facebookId;
        this.interestedIn = interestedIn;
        this.religionView = religionView;
        this.relationship = relationship;
        this.aboutYou = aboutYou;
        this.nickname = nickname;
        this.favQuote = favQuote;
        this.lang = lang;
        this.getName = function () {
            return _this.name;
        };
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getWork = function () {
            return _this.work;
        };
        this.getEducation = function () {
            return _this.education;
        };
        this.getLivesIn = function () {
            return _this.livesIn;
        };
        this.getFrom = function () {
            return _this.from;
        };
        this.getMobNo = function () {
            return _this.mobNo;
        };
        this.getEmail = function () {
            return _this.emailId;
        };
        this.getFacebookId = function () {
            return _this.facebookId;
        };
        this.getInterestedIn = function () {
            return _this.interestedIn;
        };
        this.getReligionView = function () {
            return _this.religionView;
        };
        this.getRelationship = function () {
            return _this.relationship;
        };
        this.getAboutYou = function () {
            return _this.aboutYou;
        };
        this.getNickName = function () {
            return _this.nickname;
        };
        this.getFabQuote = function () {
            return _this.favQuote;
        };
        this.getLang = function () {
            return _this.lang;
        };
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.work = work;
        this.education = education;
        this.livesIn = livesIn;
        this.from = from;
        this.mobNo = mobNo;
        this.emailId = emailId;
        this.facebookId = facebookId;
        this.interestedIn = interestedIn;
        this.religionView = religionView;
        this.relationship = relationship;
        this.aboutYou = aboutYou;
        this.nickname = nickname;
        this.favQuote = favQuote;
        this.lang = lang;
    }
    return Fb;
}());
var currentWork = {
    companyName: "Chromozomes",
    profile: "web developer",
    yearOfJoining: 2018
};
var arrayWork = [currentWork];
var completeEducation = {
    collegeName: "HKBKCE",
    branch: "cse",
    From: "2012",
    to: "2016"
};
var arrayEducation = [completeEducation];
var languages = ["english", "hindi"];
var ProfileDetails = new Fb("Gulsher", "02-june-1994", "male", arrayWork, arrayEducation, "bangalore", "allahabad", 8147203202, "ahmed.gulsher@gmail.com", "https://www.facebook.com/gulsherahmedgamer", "women", "respect All", "single", "i'm not perfect", "gul", "never back down", languages);
console.log(ProfileDetails);
