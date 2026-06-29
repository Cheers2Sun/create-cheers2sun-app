import { FlightProvider } from "../../providers/FlightProvider";
import { FlightSearchRequest } from "../../models/FlightSearchRequest";
import { FlightSearchResponse } from "../../models/FlightSearchResponse";

export class DuffelProvider implements FlightProvider {

    public async searchFlights(
        request: FlightSearchRequest
    ): Promise<FlightSearchResponse> {

        throw new Error(
            "Not implemented."
        );

    }

}
