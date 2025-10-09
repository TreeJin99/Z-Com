import CommentForm from "@/app/(afterSignIn)/[username]/status/[id]/_component/CommentForm"
import Post from "@/app/(afterSignIn)/_component/Post"
import ActionButtons from "@/app/(afterSignIn)/_component/ActionButtons";
import style from "./photoModal.module.css"
import PhotoModalCloseButton
    from "@/app/(afterSignIn)/@modal/[username]/status/[id]/photo/[photoId]/_component/PhotoModalCloseButton";
import {faker} from "@faker-js/faker";

const PhotoModal = () => {
    const photo = {
        imageId: 1,
        link: faker.image.url(),
        Post: {
            content: faker.lorem.text()
        }
    }

    return (
        <div className={style.container}>
            <PhotoModalCloseButton/>
            <div className={style.imageZone}>
                <img src={photo.link} alt={photo.Post?.content}/>
                <div className={style.image} style={{backgroundImage: `url(${photo.link}`}}></div>
                <div className={style.buttonZone}>
                    <div className={style.buttonInner}>
                        <ActionButtons white/>
                    </div>
                </div>
            </div>
            <div className={style.commentZone}>
                <Post noImage/>
                <CommentForm/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>

        </div>

    )
}

export default PhotoModal;