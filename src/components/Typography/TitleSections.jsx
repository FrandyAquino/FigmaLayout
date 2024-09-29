import React from 'react'
import Typography from '@components/Typography/Typography.jsx'
import { IoIosArrowRoundForward } from 'react-icons/io'

function TitleSections({title, subtitle}) {
    return (
        <div>
            <div className="text-[#1071FF] flex items-center justify-between mb-6">
                <Typography variant="h3">{title}</Typography>
                <div className="flex items-center">
                    <button>
                        <Typography variant="body-xs-semibold" color="#1071FF">{subtitle}</Typography>
                    </button>
                    <IoIosArrowRoundForward className="h-8 w-8 font-bold" />
                </div>
            </div>
        </div>
    )
}

export default TitleSections