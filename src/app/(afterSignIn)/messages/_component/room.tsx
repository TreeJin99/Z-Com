import style from "@/app/(afterSignIn)/messages/message.module.css";
import {faker} from "@faker-js/faker";
import dayjs from "dayjs";

export function Room() {
    const user = {
        id: 'hero',
        nickname: '영웅',
        Message: [
            {content: "하이루 11", createdAt: new Date()},
            {content: "하이루 22", createdAt: new Date()},
        ]
    }

    return (
        <div className={style.room}>
            <div className={style.roomUserImage}>
                <img src={faker.image.avatar()} alt=""/>
            </div>
            <div className={style.roomChatInfo}>
                <div className={style.roomUserInfo}>
                    <b>{user.nickname}</b>
                    &nbsp;
                    <b>@{user.id}</b>
                    .
                    &nbsp;
                    <span className={style.postDate}>
                        {dayjs(user.Message.at(-1)?.createdAt).fromNow(true)}
                    </span>
                </div>
                <div className={style.roomLastChat}>
                    {user.Message?.at(-1)?.content}
                </div>
            </div>
        </div>
    )
}