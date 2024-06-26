import Details from "./Details";
import Title from "./Title";
import apartment from "../listingsData.json";

export default async function Page() {

    return (
        <div className="flex flex-col min-h-screen">
            <div>
                <Title apartment={apartment} />
                <Details apartment={apartment} />
            </div>
            
        </div>
    );
}
