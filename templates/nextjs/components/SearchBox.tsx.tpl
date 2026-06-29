"use client";

import { useState } from "react";

export default function SearchBox() {

    const [result, setResult] = useState("");

    async function search() {

        const response = await fetch(

            "/api/flights"

        );

        const json = await response.json();

        setResult(

            JSON.stringify(

                json,

                null,

                2

            )

        );

    }

    return (

        <section className="search-box">

            <button
                onClick={search}
            >

                Search Flights

            </button>

            <pre>

                {result}

            </pre>

        </section>

    );

}
