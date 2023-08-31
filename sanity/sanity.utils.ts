// sanity.utils
import { createClient, groq } from "next-sanity";

export async function getsettings() {
    const client = createClient({
        projectId: '5zyxoqnf',
        dataset: 'production',
        apiVersion: '2023-08-31'
    });

    return client.fetch(
        groq`*[_type=="siteSettings"]{
            _id,
            description,
            mission,
            title,
        }`
    )
}
