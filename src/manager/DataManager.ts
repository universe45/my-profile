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
