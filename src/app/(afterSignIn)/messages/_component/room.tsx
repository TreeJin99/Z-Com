"use client"

import style from "@/app/(afterSignIn)/messages/message.module.css";
import {faker} from "@faker-js/faker";
import dayjs from "dayjs";
import {useRouter} from "next/navigation";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.locale('ko');
dayjs.extend(relativeTime);

export function Room() {
    const router = useRouter();
    const user = {
        id: 'hero',
        nickname: '영웅',
        Message: [
            {roomId: 123, content: "하이루 11", createdAt: new Date()},
            {roomId: 234, content: "하이루 22", createdAt: new Date()},
        ]
    }

    const onClick = () => {
        router.push(`/messages/${user.Message.at(-1)?.roomId}`);
    }


    return (
        <div className={style.room} onClickCapture={onClick}>
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