import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function HomePage() {

    return (

        <>

            <Header />

            <main>

                <h2>

                    Search Flights

                </h2>

                <form>

                    <input
                        placeholder="Origin"
                    />

                    <input
                        placeholder="Destination"
                    />

                    <input
                        type="date"
                    />

                    <button>

                        Search

                    </button>

                </form>

            </main>

            <Footer />

        </>

    );

}
