import { getAllEvents } from "../../dummy_data";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/events-search";
import { Fragment } from "react";
import { useRouter } from "next/router";
const EventsPage = () => {

	const router = useRouter();
	const events = getAllEvents();

	function findEventsHandler(year, month) {
		const fullPath = `/events/${year}/${month}`;
		router.push(fullPath)
	}

	return ( 
		<Fragment>
			<EventsSearch onSearch={findEventsHandler}/>
			<EventList items={events}/>
		</Fragment>
	 );
}
 
export default EventsPage;