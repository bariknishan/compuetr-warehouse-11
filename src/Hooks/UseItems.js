import { useEffect, useState } from "react"

   const useItems=()=>{


    
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://calm-plains-65259.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return [items, setItems]
   }

   
   export default useItems ;