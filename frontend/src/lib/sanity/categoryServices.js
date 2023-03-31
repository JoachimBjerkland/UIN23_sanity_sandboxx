import { client } from "./client"

export const fetchAllCategories = async () => {
    const data = await client.fetch(`*[_type == "categories"]`)
    return data
}

export const fetchCategory = async (category) => {
    const data =  await client.fetch(`*[_type == "categories" && category_slug.current == $category]`,{category})
    return data
}