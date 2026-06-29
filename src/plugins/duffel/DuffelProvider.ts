import { FlightProvider } from "../../providers/FlightProvider";
import { FlightSearchRequest } from "../../models/FlightSearchRequest";
import { FlightSearchResponse } from "../../models/FlightSearchResponse";

import { searchFlights } from "./search";

/**
 * Duffel implementation of FlightProvider.
 */
export class DuffelProvider implements FlightProvider {

    public async searchFlights(
        request: FlightSearchRequest
    ): Promise<FlightSearchResponse> {

        return await searchFlights(
            request
        );

    }

}
