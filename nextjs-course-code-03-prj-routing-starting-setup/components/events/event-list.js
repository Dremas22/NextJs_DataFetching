import EventItem from "./event-item";
import classes from './event-list'

function EventList(props) {
    const { items } = props;

    return (
        <ul className={classes.list}>
            {items.map(event => <EventItem
            key={event.id}
            id={event.id}
            date={event.date}
            image={event.image}
            location={event.location}
            title={event.title}
            
            
            
            /> )}
        </ul>
    )
}

export default EventList;