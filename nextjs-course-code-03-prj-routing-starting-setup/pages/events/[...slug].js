import { getFilteredEvents } from "../../helpers/api-utils";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list"
import ResultsTitle from "../../components/results-title/results-title";
import { Fragment } from "react";
import Button from "../../components/ui/button";

function FilteredEvents(props) {

    const router = useRouter();

    // const filteredData = router.query.slug
    // if (!filteredData) {
    //     return (
    //         <p className="center">Loading...</p>
    //     )
    // }
    // const filteredYear = filteredData[0];
    // const filteredMonth = filteredData[1];
    // const numYear = +filteredYear;
    // const numMonth = +filteredMonth;

    if (props.hasError) {
        return (
            <Fragment>
                <p>Invalid input, please enter correct month or year</p>
                <div className="center">
                    <Button link='/events'>Show AlEvents</Button>
                </div>
            </Fragment>
        )
    }

    const filteredEvents = props.events;

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <Fragment>
                <p>No events found</p>
                <div className="center">
                    <Button link='/events'>Show AlEvents</Button>
                </div>
            </Fragment>
        )
    }

    const date = new Date(props.date.year, props.date.month - 1)
    return (
        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </Fragment>
    )
}

export async function getServerSideProps(context) {
    const { params } = context;

    const filteredData = params.slug

    const filteredYear = filteredData[0];
    const filteredMonth = filteredData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (isNaN(numYear) || isNaN(numMonth) ||
        numYear > 2030 || numYear < 2021 ||
        numMonth < 1 || numMonth > 12) {
        return {
            notFound: true,
        }
    }

    const filteredEvents = await getFilteredEvents({
        year: numYear,
        month: numMonth
    })


    return {
        props: {
            events: filteredEvents,
            date: {
                year: numYear,
                month: numMonth
            }
        },
    }
    
}

export default FilteredEvents;