import * as React from "react"

const defaultFill = '#fff';

interface StarRatingIconProps {
    fill?: string
}

export function StarRatingIcon(props: StarRatingIconProps) {
    return (
        <svg
            width={48}
            height={48}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width={48} height={48} rx={4} fill={props.fill ?? defaultFill} fillOpacity={1} />
            <path
                d="m24 12.334 3.605 7.303 8.061 1.178-5.833 5.682 1.377 8.026L24 30.732l-7.21 3.791 1.376-8.026-5.833-5.682 8.062-1.178L24 12.334Z"
                fill="#fff"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
