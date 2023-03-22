import React from "react"

export const copyText = (e: React.MouseEvent<HTMLElement>) => {
    let text = e.currentTarget.outerText;
    navigator.clipboard.writeText(text)
        .then(
            () => console.log('copied to clipboard'),
            () => console.log('clipboard write failed')
        )
}