import {getPastHoursByTimestamp} from "./DateHelpers";
import {generateInitialsHelper} from "./Helpers";

class ChatClass {

    constructor(data) {
        const contact = data.contact;
        const lastMessage = data.last_message;
        const contactPayload = contact.waba_payload;
        const lastMessagePayload = lastMessage?.waba_payload;

        this.waId = contactPayload.wa_id;

        this.setName(contactPayload.profile.name);

        this.newMessages = data.new_messages;

        this.lastReceivedMessageTimestamp = parseInt(contact.last_message_timestamp);

        this.setLastMessage(lastMessagePayload);

        // Use last message timestamp from contact object, if last message does not exist
        this.lastMessageTimestamp = this.lastMessageTimestamp ? this.lastMessageTimestamp : parseInt(contact.last_message_timestamp);

        this.assignedGroup = data.assigned_group;
        this.assignedTo = data.assigned_to;
        this.tags = data.tags;
    }

    setName(name) {
        this.name = name;
        this.initials = this.generateInitials();
    }

    generateInitials = () => {
        return generateInitialsHelper(this.name);
    }

    getAvatarClassName() {
        return this.initials ? this.initials[0] : '';
    }

    setLastMessage(lastMessagePayload) {
        this.lastMessage = lastMessagePayload;
        this.lastMessageBody = this.lastMessage?.text?.body;
        this.lastMessageButtonText = lastMessagePayload?.button?.text;
        this.lastMessageCaption = lastMessagePayload?.image?.caption ?? lastMessagePayload?.video?.caption ?? lastMessagePayload?.audio?.caption ?? lastMessagePayload?.document?.caption;
        this.lastMessageType = lastMessagePayload?.type;
        this.lastMessageTimestamp = parseInt(this.lastMessage?.timestamp);
        this.isLastMessageFromUs = lastMessagePayload?.hasOwnProperty('to');

        if (this.lastMessage?.hasOwnProperty("from")) {
            this.lastReceivedMessageTimestamp = this.lastMessageTimestamp;
        }

        this.isExpired = this.checkIfExpired();
    }

    getPastHoursAfterLastMessage() {
        return getPastHoursByTimestamp(this.lastReceivedMessageTimestamp);
    }

    checkIfExpired() {
        return this.getPastHoursAfterLastMessage() >= 24;
    }

    generateAssignedToInitials() {
        return this.assignedTo?.username?.[0]?.toUpperCase();
    }
}

export default ChatClass;