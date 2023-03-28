import { client } from "./client"

export const fetchAllCategories = async () => {
    const data = await client.fetch(`*[_type == "categories"]`)
    return data
}