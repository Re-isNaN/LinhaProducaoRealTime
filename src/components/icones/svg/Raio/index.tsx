import { IPropsIcon } from "../types";

export function IconRaio({ height, width, color }: IPropsIcon) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill={color || '#000'} version="1.1" id="Capa_1" width={`${width}px`} height={`${height}px`} viewBox="0 0 538.842 538.842" xmlSpace="preserve">
            <g>
                <g>
                    <polygon points="392.326,200.43 325.083,200.43 423.691,0 280.813,0 133.933,298.54 210.513,298.54 115.151,538.842   " />
                </g>
            </g>
        </svg>
    )
}