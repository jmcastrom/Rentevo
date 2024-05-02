import Details from "./Details";
import Title from "./Title";

export default async function Page() {

    return (
        <div className="flex flex-col min-h-screen">
            <div>
                <Title />
                <Details />
            </div>
            
        </div>
    );
}
