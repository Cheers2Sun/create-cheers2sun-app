import Navigation from "./Navigation";

export default function Header() {

    return (

        <header>

            <h1>

                {{project.displayName}}

            </h1>

            <Navigation/>

        </header>

    );

}
