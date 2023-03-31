import {useEffect, useState} from "react";
import { fetchAllCategories } from "../lib/sanity/categoryServices";
import { Link } from "react-router-dom"

export default function CategoriesPage() {
    //lage en state for å lagre kategoriene
    const [cats, setCats] = useState(null)


    //Kalle categorySerbice asynkront
    async function getCategories() {
        const data = await fetchAllCategories()
        setCats(data)
    }

    //Kjøre getCategories når components lastes: 
    useEffect(() => {
        getCategories()
    }, [])
    console.log(cats)


    return (
        <>
    <h1>Alle kategorier</h1>
    <ul>
        {cats?.map((c, i) => <li><Link to={c.category_slug.current}>{c.category_title}</Link></li>)}
    </ul>
    </>
    ) 
}