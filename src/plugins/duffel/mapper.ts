import { FlightSearchResponse } from "../../models/FlightSearchResponse";

export class DuffelMapper {

    public static toFlightSearchResponse(

        response: any

    ): FlightSearchResponse {

        return {

            offers: []

        };

    }

}
