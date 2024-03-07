export const removeQuot = (str: string) => {
    return str.replace(/&quot;/g,'"').replace(/&#039;/g,'"')
}

// &#039;s