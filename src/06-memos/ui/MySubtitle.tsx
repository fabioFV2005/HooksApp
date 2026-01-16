import { memo } from "react";

interface MySubtitleProps {
    subtitle: string;
    callMyAPI: () => void;
}
const MySubtitle = memo(({ subtitle, callMyAPI }: MySubtitleProps) => {
    console.log('rendering mysubtitle')
    return (
        <>
            <h6 className="text-2xl font-bold">
                {subtitle}
            </h6>
            <button
            onClick={callMyAPI} 
            className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer">call function</button>
        </>
    )
});

export default MySubtitle
