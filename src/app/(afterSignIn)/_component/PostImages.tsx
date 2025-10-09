import Link from "next/link";
import style from "./post.module.css";
import cx from 'classnames';

type Props = {
    post: {
        postId: number;
        content: string,
        User: { id: string, nickname: string, image: string },
        createdAt: Date,
        Images: any[],
    }
}

const PostImages = ({post}: Props) => {
    if (!post.Images?.length) return null;

    const images = post.Images.slice(0, 4);
    const layoutStyles = ['oneImage', 'twoImage', 'threeImage', 'fourImage'];

    const renderLink = (img: any) => (
        <Link
            key={img.imageId}
            href={`/${post.User.id}/status/${post.postId}/photo/${img.imageId}`}
            style={{
                backgroundImage: `url(${img.link})`,
                backgroundSize: images.length === 1 ? 'contain' : 'cover'
            }}
        >
            {images.length === 1 && <img src={img.link} alt="" />}
        </Link>
    );

    const content = images.length === 3 ? (
        <>
            {renderLink(images[0])}
            <div>
                {renderLink(images[1])}
                {renderLink(images[2])}
            </div>
        </>
    ) : (
        images.map(renderLink)
    );

    return (
        <div className={cx(style.postImageSection, style[layoutStyles[images.length - 1]])}>
            {content}
        </div>
    );
}

export default PostImages;