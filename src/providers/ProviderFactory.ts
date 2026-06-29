import { FlightProvider } from "./FlightProvider";
import { DuffelProvider } from "../plugins/duffel/DuffelProvider";

export class ProviderFactory {

    public static flightProvider(): FlightProvider {

          return new DuffelProvider();

    }

}
