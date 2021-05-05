import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Next.js Customers!</title>
            </Head>

            <main>
                <Header title="Estamos en la página de clientes !" />
                <p className="description">
                    Aqui se puede editar la descripción de la página de clientes
                </p>
            </main>

            <Footer />
        </div>
    )
}