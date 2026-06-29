import { FlightSearchRequest } from "../models/FlightSearchRequest";
import { FlightSearchResponse } from "../models/FlightSearchResponse";
export interface FlightProvider {

    searchFlights(
        request: FlightSearchRequest
    ): Promise<FlightSearchResponse>;

}
