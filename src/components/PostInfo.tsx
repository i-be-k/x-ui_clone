import CustomImage from "./CustomImage";

const PostInfo = () => {
    return (
        <div className="cursor-pointer w-4 h-4 relative">
            <CustomImage path="public/icons/infoMore.svg" alt="" width={16} height={16} />
        </div>
    );
};

export default PostInfo;