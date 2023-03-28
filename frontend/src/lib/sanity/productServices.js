import {client} from './client'

//Service for å hente alle produkter
export const fetchAllProducts = async () => {
    const data = await client.fetch(`*[_type == "products"]`)
    return data
}

//Service for å hente et bestemt produkt, basert på :slug
export const fetchProduct = async (slug) => {
    const data = await client.fetch(`
    *[_type == "products" && slug.current == $slug]
    {product_title, price, quantity, "imageURL":product_image.asset->url, "catname": category->category_title}
    `,{slug})
    return data
}