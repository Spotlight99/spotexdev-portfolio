import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div
            className="min-h-screen text-white flex flex-col bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/hero.jpg')" }}
        >
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    )
}
