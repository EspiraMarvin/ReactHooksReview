import React from 'react'

export const Hello = () => {
        React.useEffect(() => {
        console.log("render")
        // clean up function
        return () => {
            console.log('unmount')
        }
        }, [])

    return <div>Hello</div>
}
