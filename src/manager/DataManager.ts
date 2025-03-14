import mydata from "../data/mydata.json";

interface PersonalData {
    name: string;
    email: string;
    mobile: string;
    position: string;
    image: string;
}
interface LinkData {
    linkName: string;
    link: string;
}

class DataManager {
    private personalData: PersonalData[];
    private profileLink: LinkData[];
    readonly image: string = "https://www.dropbox.com/scl/fi/n9nlzjtkyyio05p6wsz3v/IMG_7613.PNG?rlkey=963eq5uhcwdkbi2f2f9aspln8&st=u4p5y2op&raw=1"; 
    constructor() {
        this.personalData = mydata.personalData;
        this.profileLink = mydata.profileLink;
    }
    getPersonalData() {
        return this.personalData;
    }
    getProfileLink() {
        return this.profileLink;
    }
}

export default DataManager;
