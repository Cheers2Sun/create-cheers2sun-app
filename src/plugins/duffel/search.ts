import { DuffelClient } from "./client";
import { DuffelMapper } from "./mapper";
import { FlightSearchRequest } from "../../models/FlightSearchRequest";
import { FlightSearchResponse } from "../../models/FlightSearchResponse";

export async function searchFlights(

    request: FlightSearchRequest

): Promise<FlightSearchResponse> {

    const client = new DuffelClient(

        process.env.DUFFEL_TOKEN!

    );

    const response = await client.post(

        "/air/offer_requests",

        {}

    );

    return DuffelMapper.toFlightSearchResponse(

        response

    );

}
