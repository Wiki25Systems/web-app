import {getAttachmentTypeByMimeType} from "./Helpers";

class ChosenFile {
    constructor(key, data) {
        this.key = key;
        this.fileURL = URL.createObjectURL(data);
        this.file = data;
        this.attachmentType = getAttachmentTypeByMimeType(data.type);
        this.type = data.type;
        this.caption = '';
    }
}

export default ChosenFile;