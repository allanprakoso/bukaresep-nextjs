import Link from "next/link";
import Button from "../../components/Button"

function Home() {
    return (
        <div className="mt-28 xl:mx-[22.5rem] lg:mx-14 md:mx-10 sm:mx-4">
            <section className="flex flex-row items-center mb-20">
                <div className="basis-6/12">
                    <p className="text-lg font-semibold text-brand-dark mb-3">Jadilah penulis resep</p>
                    <h3 className="text-h3 leading-[2.25rem] font-bold font-quicksand text-gray-800 mb-20">Bagikan resepmu dan dapatkan penghasilan dari resep masakanmu</h3>
                    <Button>Bergabung sekarang</Button>
                </div>
                <div className="basis-6/12 translate-x-20">
                    <img src="/pic/lp0.jpg" className="object-cover h-full" />
                </div>
            </section>

            <section className="flex justify-between mb-48">
                <div className="flex items-center">
                    <div>
                        <p className="text-base font-semibold text-gray-400">Langkah 1</p>
                        <h4 className="text-h4 font-semibold font-quicksand mb-6">Buat akun</h4>
                        <Link href="#"><a className="text-base text-brand-dark hover:text-brand-brighter font-medium">Daftar</a></Link>
                    </div>
                    <span className="ml-20 text-[10rem] font-quicksand font-bold text-[#fce8e8] -translate-y-4">1</span>
                </div>
                <div className="flex items-center">
                    <div>
                        <p className="text-base font-semibold text-gray-400">Langkah 2</p>
                        <h4 className="text-h4 font-semibold font-quicksand mb-8">Bagikan <br />resepmu</h4>
                    </div>
                    <span className="ml-20 text-[10rem] font-quicksand font-bold text-[#fce8e8] -translate-y-4">2</span>
                </div>
                <div className="flex items-center">
                    <div>
                        <p className="text-base font-semibold text-gray-400">Langkah 3</p>
                        <h4 className="text-h4 font-semibold font-quicksand mb-8">Dapatkan<br />penghasilan</h4>
                    </div>
                    <span className="ml-20 text-[10rem] font-quicksand font-bold text-[#fce8e8] -translate-y-4">3</span>
                </div>
            </section>

            <section className="flex flex-col space-y-48 mb-48">
                <div className="flex flex-row justify-between items-center">
                    <div className="basis-4/12">
                        <h3 className="text-h3 font-bold font-quicksand text-gray-800 mb-4">Komunitas besar</h3>
                        <p className="text-lg text-gray-600 leading-7">Tunjukan hasil kreasi masakanmu dan kembangkan keterampilan memasakmu bersama kami. </p>
                    </div>
                    <div className="basis-5/12 ">
                        <img src="/pic/lp1.png" className="rounded-lg object-cover h-full drop-shadow-[0_8px_24px_rgba(31,41,55,0.08)] border-solid-[0.3px] border-gray-400" />
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className="basis-5/12 ">
                        <img src="/pic/lp2.jpg" className="rounded-lg object-cover h-full drop-shadow-[0_8px_24px_rgba(31,41,55,0.08)] border-solid-[0.3px] border-gray-400" />
                    </div>
                    <div className="basis-5/12">
                        <h3 className="text-h3 font-bold font-quicksand text-gray-800 mb-4">Dukungan kami</h3>
                        <p className="text-lg text-gray-600 leading-7">Kami menawarkan tools yang mudah digunakan, tips dan support untuk membantu kamu mempublikasikan resepmu. </p>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className="basis-5/12">
                        <h3 className="text-h3 font-bold font-quicksand text-gray-800 mb-4">Mudah digunakan</h3>
                        <p className="text-lg text-gray-600 leading-7">Mudah dalam mendokumentasikan dan membagikan resepmu melalui platform apa saja, kapan saja dan dimana saja, tersedia di semua sistem operasi yang ada. </p>
                    </div>
                    <div className="basis-5/12 ">
                        <img src="/pic/lp3.jpg" className="rounded-lg object-cover h-full drop-shadow-[0_8px_24px_rgba(31,41,55,0.08)] border-solid-[0.3px] border-gray-400" />
                    </div>
                </div>
            </section>

            <section className="bg-[url('/pic/bannerCreator.jpg')] bg-cover rounded-xl p-16 flex flex-col items-center space-y-6">
                <h3 className="text-h3 font-bold font-quicksand text-gray-800 mb-4 text-center">Yuk, tulis dan bagikan<br />resepmu sekarang</h3>
                <Button>Bergabung sekarang</Button>
            </section>
        </div>
    );
}

export default Home;