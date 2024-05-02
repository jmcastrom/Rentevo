import Details from "./Details";
import Title from "./Title";
import data from "../listingsData.json";

export default async function Page() {

    return (
        <div className="flex flex-col min-h-screen">
            <div>
                <Title apartment={data} />
                <Details />
            </div>
            
        </div>
    );
}
