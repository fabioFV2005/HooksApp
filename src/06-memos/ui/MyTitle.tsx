import { memo } from "react";

interface MyTitleProps {
    title?: string;
}
const MyTitle = memo(({title}: MyTitleProps) => {
    console.log('rendering mytitle')
  return (
    <h1 className="text-3xl ">{title}</h1>
)
});

export default MyTitle
