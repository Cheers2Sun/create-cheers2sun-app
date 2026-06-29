import { FlightSearchRequest } from "../models/FlightSearchRequest";
import { FlightSearchResponse } from "../models/FlightSearchResponse";

/**
 * Contract implemented by all flight providers.
 *
 * Examples:
 * - Duffel
 * - Amadeus
 * - Sabre
 */
export interface FlightProvider {

    searchFlights(
        request: FlightSearchRequest
    ): Promise<FlightSearchResponse>;

}
