import React from "react";
import ChatMessageClass from "../ChatMessageClass";
import VideocamIcon from "@material-ui/icons/Videocam";
import MicIcon from "@material-ui/icons/Mic";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import NoteIcon from "@material-ui/icons/Note";
import SmsIcon from "@material-ui/icons/Sms";
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

function ChatMessageTypeIcon(props) {
    return (
        <span>
            {props.type === ChatMessageClass.TYPE_IMAGE &&
            <PhotoCameraIcon />
            }

            {props.type === ChatMessageClass.TYPE_VIDEO &&
            <VideocamIcon />
            }

            <MicIcon />
            }

            {props.type === ChatMessageClass.TYPE_AUDIO &&
            <AudiotrackIcon />
            }

            {props.type === ChatMessageClass.TYPE_DOCUMENT &&
            <InsertDriveFileIcon />
            }

            {props.type === ChatMessageClass.TYPE_STICKER &&
            <NoteIcon />
            }

            {props.type === ChatMessageClass.TYPE_TEMPLATE &&
            <SmsIcon />
            }
        </span>
    )
}

export default ChatMessageTypeIcon;