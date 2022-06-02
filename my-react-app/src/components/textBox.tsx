import { FC, useEffect, CSSProperties, useState } from 'react'

interface Props {
    searchWord: string
}

/* Callback till en useEffect får inte vara async */
const TextBox: FC<Props> = (Props) => {

/* Googla react context

 */    /* Detta är state, googla */
    const [ text, setText ] = useState("")

    useEffect(() => {
        const getText = async() => {
            const response = await fetch("")
            const textList = await<{}> response.json
            console.log(textList)

            setText(textList[0].meanings[0].definitions[0].definition)
        }
        fetch("").then(() => {})
    }, [])

    return (
        <div>
        <h2 style={{ color: "white" }}>Text</h2>
        </div>
    )
}

const textStyle: CSSProperties = {
    color: "white"
}

export default TextBox