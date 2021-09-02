import React from 'react';
import styled from 'styled-components';
import storage from '../storage/storage';

/*const textType = "Other";
const numColumns = 5;
const firstEventTop = 28;
const spaceBetween = 10;
const heightSuffix = "vh";*/
const mapsLink = "https://www.google.com/maps/search/?api=1&query=";
const months = ["JANUARI", "FEBRUARI", "MAART", "APRIL", "MEI", "JUNI", 
    "JULI", "AUGUSTUS", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DECEMBER"];

function getMapsLink(location){

    let link = mapsLink + location;

    link = encodeURI(link);

    return link;
}

export default class EventList extends React.Component
{
    constructor(props)
    {
        super(props);

        this.setState({ index: -1 });

        this.closeInfo = this.closeInfo.bind(this);
    }

    handleClick(eventIndex)
    {
        this.setState({ index: eventIndex });
    }

    closeInfo()
    {
        this.setState({ index: -1 });
    }

    render()
    {
        var events = storage.calStorage.getEvents();

        return(
            <StyledEvents>
                {
                    events.map((event, i) => 
                        <Event key={JSON.stringify(event)}>
                            <EventDate>
                                <DateMonth>
                                    {getMonth(event.date)}
                                </DateMonth>
                                <DateDay>
                                    {getDay(event.date)}
                                </DateDay>
                            </EventDate>
                            <EventInfo>
                                <Date>
                                    Datum: {event.date}
                                </Date>
                                <Venue>
                                    Programma: {event.venue}
                                </Venue>
                                <Location href={getMapsLink(event.location)} target="_blank">
                                    Locatie: {event.location}
                                </Location>
                                <Link href={event.linkText} target="_blank">
                                    Tickets en info
                                </Link>
                            </EventInfo>
                        </Event>
                    )
                }                
            </StyledEvents>
        )
    }
}

const getMonth = (date) => {
    const monthIndex = parseInt(date.split("-")[1]) - 1;
    const month = months[monthIndex];
    return month;
}

const getDay = (date) => {
    const day = date.split("-")[0];
    return day;
}

const StyledEvents = styled.div`
    
`

const Event = styled.div`
    margin-bottom: 50px;
    display: flex;
`

const EventDate = styled.div`
    margin-right: 100px;
`

const EventInfo = styled.div`

`

const Date = styled.div`
    
`

const DateMonth = styled.div`
    background-color: black;
    color: white;
    padding: 10px 15px;
    width: 150px;
    text-align: center;
    border: 1px solid rgba(100, 100, 100, 0.8);
`

const DateDay = styled.div`
    text-align: center;
    margin: auto;
    padding: 15px 0px;
    border: 1px solid rgba(100, 100, 100, 0.8);
    border-top: none;
    font-size: 24px;
`

const Venue = styled.div`
    
`

const Location = styled.a`

`

const Link = styled.a`
    display: block;
`