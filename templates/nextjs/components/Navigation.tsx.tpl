import Link from "next/link";

export default function Navigation() {

    return (

        <nav>

            <Link href="/">Home</Link>

            {" | "}

            <Link href="/flights">

                Flights

            </Link>

            {" | "}

            <Link href="/hotels">

                Hotels

            </Link>

            {" | "}

            <Link href="/packages">

                Packages

            </Link>

            {" | "}

            <Link href="/about">

                About

            </Link>

            {" | "}

            <Link href="/contact">

                Contact

            </Link>

        </nav>

    );

}
