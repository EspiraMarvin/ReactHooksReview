import {useEffect, useState, useRef} from  'react'

export const useFetch = (url) => {
    const isCurrent = useRef(true)
    const [state, setState] = useState({data: null, loading: true})

    useEffect(() => {
        // called when component is going to unmount
        return() => {
            isCurrent.current = false
        }
    }, [])

    useEffect(() => {
     setState(state => ({ data: state.data , loading: true}))
     fetch(url).then(x => x.text().then(y => {
         // console.log(y)
         if (isCurrent.current) {
             setState({data: y, loading: false})
         }
     }))
    }, [url, setState])

    return state
}
