import React from 'react';
import styled from 'styled-components';
import storage from '../storage/storage';

const textType = "Other";
const numColumns = 5;
const firstEventTop = 28;
const spaceBetween = 10;
const heightSuffix = "vh";
const mapsLink = "https://www.google.com/maps/search/?api=1&query=";

function getMapsLink(info){

    let link = mapsLink + info.location;

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
                        <Event>
                            <EventDate>

                            </EventDate>
                            <EventInfo>
                                <Date>
                                    {event.date}
                                </Date>
                                <City>
                                    {event.city}
                                </City>
                                <Venue>
                                    {event.venue}
                                </Venue>
                                <Location href={getMapsLink(event.city)}>
                                    {event.location}
                                </Location>
                                <Link href={event.link}>
                                    {event.linkText}
                                </Link>
                            </EventInfo>
                        </Event>
                    )
                }                
            </StyledEvents>
        )
    }
}

const StyledEvents = styled.div`
    
    
`

const Event = styled.div`
    margin-bottom: 50px;
    display: flex;
`

const EventDate = styled.div`
    
`

const DateTitle = styled.h3`
    text-align: center;
`

const EventInfo = styled.div`

`

const Date = styled.div`
    
`
    
const City = styled.div`
    
`

const Venue = styled.div`
    
`

const Location = styled.a`

`

const Link = styled.a`

`