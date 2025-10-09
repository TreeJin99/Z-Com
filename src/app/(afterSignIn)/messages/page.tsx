import style from "./message.module.css"
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {Room} from "@/app/(afterSignIn)/messages/_component/room";

dayjs.locale('ko');
dayjs.extend(relativeTime);


const Message = () => {
    return (
        <main className={style.main}>
            <div className={style.header}>
                <h3>쪽지</h3>
            </div>
            <Room/>
            <Room/>
        </main>
    )
}

export default Message;