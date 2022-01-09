import { useRouter } from 'next/router'

export default function Recipe() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Recipe {id}</h1>
        </div>
    )
}