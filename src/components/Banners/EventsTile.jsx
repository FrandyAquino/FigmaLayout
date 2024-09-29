import React from 'react'
import Button from '@components/Buttons/Button'

function EventsTile({img, title, dateLocation, description}) {
    return (
        <div>
            <div className="max-w-xs rounded-lg shadow-lg overflow-hidden border">
                <img
                    src={img}
                    alt="Event"
                    className="w-full"
                />
                <div className="p-4">
                    <h3 className="text-lg font-bold text-black h-16">
                        {title}
                    </h3>
                    <p className="text-sm text-blue-500 mt-2">
                        {dateLocation}
                    </p>
                    <p className="text-sm text-gray-700 mt-2 mb-3">
                        {description}
                    </p>
                    <Button text="Know more" variant="secondary" state="default" />
                </div>
            </div>
        </div>
    )
}

export default EventsTile