import React from 'react'
import Layout from '@Layout/Layout'
import EventsTile from '@components/Banners/EventsTile'
import TitleSections from '@components/Typography/TitleSections'
import EventImg from '@/assets/eventile1.png'
import EventImg2 from '@/assets/eventile2.png'
import EventImg3 from '@/assets/eventile3.png'
import EventImg4 from '@/assets/eventile4.png'

const Events = [
    {
        id: 1,
        img: EventImg,
        title: 'Electrician course for electricians with SEP licence',
        dateLocation: '23.05.2021 | London, UK',
        description: 'This course is conducted in the form of lectures via the Internet and ends with an examination, also online...'
    },
    {
        id: 2,
        img: EventImg2,
        title: 'Interior design and decoration',
        dateLocation: '04-06.11.2021 | London, UK',
        description: 'This course is conducted in the form of lectures via the Internet and ends with an examination, also online...'
    },
    {
        id: 3,
        img: EventImg3,
        title: 'AutoCAD 2d basic level',
        dateLocation: '15.06.2021 | London, UK',
        description: 'This course is conducted in the form of lectures via the Internet and ends with an examination, also online...'
    },
    {
        id: 4,
        img: EventImg4,
        title: 'Paving engineer with a road construction machine licence',
        dateLocation: '31.03.2021 | London, UK',
        description: 'This course is conducted in the form of lectures via the Internet and ends with an examination, also online...'
    }
]

function EventsSection() {
    return (
        <div className='py-20'>
            <Layout>
                <TitleSections title="Events for you" subtitle="Show all events" />
                <div className='flex flex-row gap-4'>
                    {Events.map(event => (
                        <EventsTile
                            key={event.id}
                            img={event.img}
                            title={event.title}
                            dateLocation={event.dateLocation}
                            description={event.description}
                        />
                    ))}
                </div>
            </Layout>
        </div>
    )
}

export default EventsSection