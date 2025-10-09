import {Room} from "@/app/(afterSignIn)/messages/_component/room";
import style from "./chatRoom.module.css"
import {faker} from "@faker-js/faker";
import Link from "next/link";
import BackButton from "@/app/(afterSignIn)/_component/BackButton";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import cx from "classnames";

dayjs.locale('ko');
dayjs.extend(relativeTime);


const ChatRoom = () => {
    const user = {
        id: 'hero',
        nickname: '영웅',
        image: faker.image.avatar(),
    }

    const messages = [
        {messageId: 1, roomId: 123, id: '트리진11', content: "하이루 11", createdAt: new Date()},
        {messageId: 2, roomId: 234, id: '트리진22', content: "하이루 22", createdAt: new Date()},
    ]

    return (
        <main className={style.main}>
            <div className={style.header}>
                <BackButton/>
                <div><h2>{user.nickname}</h2></div>
            </div>
            <Link href={user.nickname} className={style.userInfo}>
                <img src={user.image} alt={user.id}/>
                <div><b>{user.nickname}</b></div>
                <div><b>@{user.id}</b></div>
            </Link>
            <div className={style.list}>
                {
                    messages.map((message) => {
                        if (message.id === '트리진11') {
                            return (
                                <div key={message.id}
                                     className={style.myMessage}>
                                    <div className={style.content}>{message.content}</div>
                                    <div className={style.date}>{dayjs(message.createdAt).fromNow()}</div>
                                </div>
                            );
                        }
                        return (
                            <div key={message.id}
                                 className={cx(style.message, style.yourMessage)}>
                                <div className={style.content}>{message.content}</div>
                                <div className={style.date}>{dayjs(message.createdAt).fromNow()}</div>
                            </div>
                        );
                    })
                }
            </div>
        </main>
    );
}

export default ChatRoom;