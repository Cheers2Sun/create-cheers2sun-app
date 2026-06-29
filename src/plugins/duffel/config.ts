export class DuffelConfig {

    public static token(): string {

        const token = process.env.DUFFEL_TOKEN;

        if (!token) {

            throw new Error(

                "DUFFEL_TOKEN not configured."

            );

        }

        return token;

    }

}
