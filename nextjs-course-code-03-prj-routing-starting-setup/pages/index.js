import { getFeaturedEvents } from "../helpers/api-utils";
import EventList from "../components/events/event-list";


function HomePage(props) {
    //const featuredEvents = getFeaturedEvents();

    return (
        <div>
            <EventList items={props.events}/>
        </div>
    )
}

export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();
    return {
        props: {
            events: featuredEvents,
        }
    } 
}

export default HomePage;