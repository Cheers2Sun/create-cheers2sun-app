import { FlightProvider } from "./FlightProvider";
/**
 * Application business layer.
 *
 * Services should never depend on
 * Duffel, Stripe, Supabase,
 * or any third-party SDK.
 *
 * They communicate only through
 * provider interfaces.
 */

/**
 * Factory responsible for returning
 * provider implementations.
 *
 * Plugins register themselves here.
 */
export class ProviderFactory {

    public static flightProvider(): FlightProvider {

        throw new Error(

            "No FlightProvider has been registered."

        );

    }

}
