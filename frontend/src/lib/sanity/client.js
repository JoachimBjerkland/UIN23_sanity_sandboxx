import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: 'i17koiiz',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21'
})