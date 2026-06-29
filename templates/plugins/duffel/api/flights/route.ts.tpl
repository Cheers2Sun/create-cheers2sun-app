import { NextResponse } from "next/server";

export async function GET() {

    return NextResponse.json({

        provider: "duffel",

        status: "ok",

        flights: [

            {

                id: "DEMO-001",

                airline: "Cheers Airways",

                from: "LHR",

                to: "JFK",

                price: 499

            }

        ]

    });

}
