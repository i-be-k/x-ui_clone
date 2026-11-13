import Link from "next/link";
import PopularTags from "./PopularTags";
import Recommendations from "./Recommendations";
import Search from "./Search";

const RightBar = () => {
    return (
        <div className="flex flex-col gap-4 pb-4">
            <div className="sticky top-0 pt-3 pb-2 bg-black z-20">
                <Search />
            </div>
            <div className="sticky bottom-4 flex flex-col gap-4 mt-auto">
                <PopularTags />
                <Recommendations />
                <div className="text-textGray text-sm flex gap-x-4 flex-wrap">
                    <Link href="/">Terms of Service</Link>
                    <Link href="/">Privacy Policy</Link>
                    <Link href="/">Cookie Policy</Link>
                    <Link href="/">Accessibility</Link>
                    <Link href="/">Ads Info</Link>
                    <span>© 2027 L Corp.</span>
                </div>
            </div>
        </div>
    );
};

export default RightBar;