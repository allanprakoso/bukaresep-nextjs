import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CardRecipe from '../components/Cardrecipe'

export default function Home() {
    const recipe = {
        title: "Udang Goreng Tepung Saus Asam Manis",
        level: "Mudah",
        time: 30,
        rating: 4.5,
        category: "Makanan",
        creator: "Inem Susanti",
        image: "https://www.sidechef.com/recipe/c8738a39-6d2b-4905-a8b7-ad0f0c80311b.jpg",
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <CardRecipe title={recipe.title} rating={recipe.rating} category={recipe.category} image={recipe.image} time={recipe.time} creator={recipe.creator} level={recipe.level} />
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    )
}
