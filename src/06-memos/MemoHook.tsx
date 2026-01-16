import { useCallback, useState } from "react";
import MyTitle from "./ui/MyTitle"
import MySubtitle from "./ui/MySubtitle";

const MemoHook = () => {
    const [title, setTitle] = useState('hola');
    const [subtitle, setSubtitle] = useState('mundo');
    const handleMyAPI = useCallback(() => {
        console.log('calling my API', subtitle)
    }, [setTitle])
    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">Memo App</h1>
            <MyTitle
                title={title}
            />

            <MySubtitle
                subtitle={subtitle}
                callMyAPI={handleMyAPI}
            />
            <button
                onClick={() => { setTitle('hello, ' + new Date().getTime()) }}
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">Change Title</button>
            <button
                onClick={() => { setSubtitle('world') }}
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">Change Subtitle</button>
        </div>
    )
}

export default MemoHook
