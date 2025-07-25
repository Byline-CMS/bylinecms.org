/**
 * Byline CMS
 *
 * Copyright © 2025 Anthony Bouch and contributors.
 *
 * This file is part of Byline CMS.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

import type React from 'react'

import cx from 'classnames'

import { IconElement } from './icon-element.js'

import type { IconProps } from './types/icon.js'

const svgStylesDefault = ''

export const InfonomicIcon = ({
  className,
  svgClassName,
  ...rest
}: IconProps): React.JSX.Element => {
  const applied = cx(svgStylesDefault, svgClassName)

  return (
    <IconElement className={cx('infonomic-icon', className)} {...rest}>
      <svg
        className={applied}
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 512 512"
        id="a43241c1-5a70-4e5a-8cd0-fb2ff3d5a086"
      >
        <defs>
          <linearGradient
            id="a15fb589-8b94-40f1-a2dc-b00094129721"
            x1="293.2"
            y1="220.61"
            x2="-39.33"
            y2="636.83"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#7239c7" />
            <stop offset="1" stopColor="#330046" />
          </linearGradient>
          <linearGradient
            id="eea935bb-7d1f-4a3e-b4d0-24a5641ad7eb"
            x1="223.3"
            y1="174.24"
            x2="547.28"
            y2="174.24"
            gradientTransform="translate(-83.1 58.65) rotate(-5.2)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#ebff55" />
            <stop offset="1" stopColor="#f17e00" />
          </linearGradient>
          <linearGradient
            id="eed940a7-f4c7-4aa9-97b3-ead85bf88d2d"
            x1="372.87"
            y1="158.83"
            x2="473.81"
            y2="257.43"
            gradientTransform="translate(-83.1 58.65) rotate(-5.2)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopOpacity="0.3" />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="b1c6dd6a-82bc-4e07-a748-181ddf6981fd"
            x1="433.3"
            y1="118.69"
            x2="6.07"
            y2="563.92"
            gradientTransform="translate(-83.1 58.65) rotate(-5.2)"
            xlinkHref="#a15fb589-8b94-40f1-a2dc-b00094129721"
          />
          <linearGradient
            id="ea87b475-d976-4ac3-a8da-0d5ff972427c"
            x1="407.96"
            y1="156.53"
            x2="462.21"
            y2="88.19"
            gradientTransform="translate(-83.1 58.65) rotate(-5.2)"
            xlinkHref="#a15fb589-8b94-40f1-a2dc-b00094129721"
          />
          <linearGradient
            id="bd1efce9-9fd7-464c-b5ae-1012b77b3c10"
            x1="436.06"
            y1="122.42"
            x2="8.83"
            y2="567.65"
            gradientTransform="translate(-83.1 58.65) rotate(-5.2)"
            xlinkHref="#a15fb589-8b94-40f1-a2dc-b00094129721"
          />
          <linearGradient
            id="e82ad6d9-f6de-470e-9cc8-5c1e25860ae0"
            x1="372.84"
            y1="154.44"
            x2="103.3"
            y2="422.39"
            gradientTransform="matrix(1, 0, 0, 1, 0.02, 0.24)"
            xlinkHref="#a15fb589-8b94-40f1-a2dc-b00094129721"
          />
          <linearGradient
            id="a031a507-2f2b-46ac-8fd0-d46923b5cede"
            x1="256.06"
            y1="213.92"
            x2="268.84"
            y2="249.39"
            xlinkHref="#eed940a7-f4c7-4aa9-97b3-ead85bf88d2d"
          />
          <radialGradient
            id="a9106638-56d4-4f79-8812-bed67cfca285"
            cx="216.4"
            cy="313.88"
            r="166.38"
            gradientTransform="translate(0.04 -1.69) scale(1 1.01)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#fff" />
            <stop offset="0.22" stopColor="#ebff55" />
            <stop offset="0.33" stopColor="#ebfa52" />
            <stop offset="0.46" stopColor="#ecec48" />
            <stop offset="0.6" stopColor="#edd438" />
            <stop offset="0.75" stopColor="#efb222" />
            <stop offset="0.9" stopColor="#f18806" />
            <stop offset="0.93" stopColor="#f17e00" />
          </radialGradient>
        </defs>
        <circle
          cx="244.69"
          cy="281.33"
          r="218.67"
          fill="url(#a15fb589-8b94-40f1-a2dc-b00094129721)"
        />
        <path
          d="M235.06,220.17S317.76,12,450.72,21.32l11.23-1s21.11,93.71-36.86,161.9S314.7,282.83,314.7,282.83s6.69,45.94-8.85,54.91-33.11,23.27-78.78,33c0,0-14.48-13.85,16.84-43.12s-10-54.46-19.63-49.8-55.59,39-55.59,39-23.15-74.65,8.39-87.58S235.06,220.17,235.06,220.17Z"
          fill="url(#eea935bb-7d1f-4a3e-b4d0-24a5641ad7eb)"
        />
        <path
          d="M450.14,42.43C431.42,85.11,371,207.58,271.81,267.15c0,0,17,37.22,9.82,50.44s-23.56,17.33-23.56,17.33,18.18-36.1-8-49.47,1.57,4.34,1.57,4.34-14.94,34.51-15.36,35.59S217.89,375.07,219,375.67s14.37-12.47,19.6-13.64c-3.71-4.92,53.38-16.09,61-39.66,3.47-7.82,3.63-34.9,7.52-28.31,19.55-5.81,58.26,11.58,60.54,7.67,3-5.16,80.26-85.17,80.17-86.21s-12.64-32-11.5-34.22-128.77,99.38-127.63,96.49c-5.61,5.24-8.09-1.07,1.23-8.87,51.54-43.14,98.41-86.78,119.17-125.29C459.89,86.5,450.14,42.43,450.14,42.43Z"
          fill="url(#eed940a7-f4c7-4aa9-97b3-ead85bf88d2d)"
        />
        <path
          d="M437.49,178C487.43,105.9,476.1,22.9,466.36,14.28c-13.23-11.7-104,25-95.1,33.05,41.48-20.24,82.05-23.55,85.15-21,4.64,3.87,12.28,91.87-38.48,152.79-29.09,34.91-87.17,80.35-106.58,95.17-4.11,3.15-6,7-5.39,10.42,1.94,11.16,4.76,36.36-6.51,48.24-14.72,15.51-67.19,33.09-70.76,27.95s53.73-49.61,16.58-81.18-71.22,33.49-76.93,30.89,2-57.43,14.66-74.7c9.64-13.23,34.94-15,46.28-15.1,3.47,0,6.94-2.56,9.29-7.17,11.08-21.76,45.33-87,74.43-122a151.87,151.87,0,0,1,13.14-13.87c-85.9-34.72-187.9-12-250.39,62.95a218.25,218.25,0,0,0-50.7,145.88C54.57,293.22,64,319.73,67,335.53c1.35,7.09,3,4,4.75.48,5.55-11.38,16.29-23.22,34.45-21.58,25.58,2.3,30,27,30.87,39,.29,4,3.27,5.23,5.35,4,22.52-13.42,82.44-65.9,82.44-65.9s6-6,11.56-1.31.74,11.55.74,11.55-40.88,68.36-50,92.92c-.84,2.27.92,5,4.89,4.54,11.91-1.31,37-1.41,43.9,23.34,4.89,17.57-4.82,30.27-15,37.78-3.17,2.34-5.88,4.54,1.33,4.58,16.12.09,44,4.59,55.7,32.62a218.24,218.24,0,0,0,111.88-52.82c28.05-25,42.57-45.22,54.73-75.05A219.65,219.65,0,0,0,437.49,178Z"
          fill="url(#b1c6dd6a-82bc-4e07-a748-181ddf6981fd)"
        />
        <path
          d="M356.54,99.46a43.1,43.1,0,1,0,46.82,39A43.11,43.11,0,0,0,356.54,99.46Z"
          fill="#fff"
        />
        <path
          d="M357.17,106.39a36.14,36.14,0,1,0,39.27,32.72A36.14,36.14,0,0,0,357.17,106.39Z"
          fill="url(#ea87b475-d976-4ac3-a8da-0d5ff972427c)"
        />
        <path
          d="M354.21,118.45a29.49,29.49,0,1,0,32,26.7A29.49,29.49,0,0,0,354.21,118.45Z"
          fill="url(#bd1efce9-9fd7-464c-b5ae-1012b77b3c10)"
        />
        <path
          d="M436.21,178.4c.68-1,4.69-7.09,4.85-7.34.46-.71,4.89-8.17,5.18-8.68,38.11-67.56,27.78-139,18.78-147C451.83,3.74,361.31,40.33,370.19,48.31,411.55,28.15,452,24.85,455.1,27.42c4.63,3.85,12.22,91.46-38.4,152.11-29,34.76-86.92,80-106.27,94.77-4.1,3.13-6,7-5.38,10.37,1.93,11.12,4.74,36.2-6.5,48-14.68,15.45-67,33-70.56,27.84s53.54-49.8,16.51-81.23c-4.91-4.16-9.69-5.83-14.54-8.22l.58-.05.08.86c-31.77-7.59-57.56,40.82-62.5,38.58-5.69-2.58,1.9-57.17,14.47-74.38a25.2,25.2,0,0,1,7.11-6.45h0s-17.83,4.52-25.59,34.08c-5.47,20.86-6.35,47.39-6.39,61.21,0,5.77-7.47,6.32-7.29-3,.21-10.48-1.76-23.93-13.51-34.46-20-17.94-44.4-5.17-51.67-.11-1.55,1.08-3.09-1.63-3.5-3.26-6.14-24.67-21.64-34.24-21.64-34.24C59.73,168.36,125.14,97.53,169.25,75.8A218.31,218.31,0,0,0,25,286.64c29.43,6.51,38.81,32.9,41.79,48.63,1.34,7.06,3,4,4.74.48,5.52-11.33,16.24-23.12,34.35-21.5,25.51,2.29,29.92,26.9,30.78,38.8.28,4,3.25,5.2,5.33,4,22.45-13.36,82.2-65.62,82.2-65.62s3.28-3.29,7.25-3.07a8,8,0,0,1,4.28,1.76c5.59,4.66.73,11.51.73,11.51s-40.77,68-49.88,92.51c-.84,2.26.9,4.77,4.86,4.34.36,0,.71-.26,1.1-.3h0a74.82,74.82,0,0,1,9.47-.1c12.43.51,28,5.08,33.2,23.71,4.87,17.5-4.8,30.19-15,37.66-3.17,2.33-5.87,4.55,1.33,4.59,16.07.09,44.17,4.42,55.85,32.33,10.5-1.64,20.94-3.29,31.4-7.33h0s-.22.12-.18.11c.68-.21,15.14-5,24.25-9.37.12-.05,0-.32.17-.33h0a207.63,207.63,0,0,0,55.56-35.75c29.25-24.79,41.58-41,54.6-74.54A218.22,218.22,0,0,0,436.21,178.4ZM313.13,451.63v.05c-15-9.82-32.77-7.85-41-6.17-2.87.59-2.95-1.67-2.27-3.09,9.28-19.34,1.95-38.85-10.07-46.69-15.18-9.89-37.53-4.54-38.94-6.1-2.62-2.9,3.69-11,3.69-11,24.4-4.56,55-18,77.92-30.55s21.36-43.67,18.56-54.36,5.37-13.79,5.37-13.79c35.34-23,76.85-65.66,97.22-87.62l-.12.21S488,363.72,313.13,451.63Z"
          fill="url(#e82ad6d9-f6de-470e-9cc8-5c1e25860ae0)"
        />
        <path
          d="M171.89,307.66s16.44-49.68,27.18-55.37,48.65,7.88,46.05,11c-.65.78-2.63,1.43-5.49,2.1-8.55,2-24.91,4.13-36.35,10.09C188,283.41,171.82,315.53,171.89,307.66Z"
          fill="url(#a031a507-2f2b-46ac-8fd0-d46923b5cede)"
        />
        <path
          d="M24.87,286.91C28.47,405.21,124.8,500,243.09,500A219.07,219.07,0,0,0,277,497.36c-12-27.17-39.24-31.58-55.11-31.67-7.2,0-4.49-2.26-1.32-4.61,10.18-7.55,19.87-20.33,15-38-6.87-24.9-31.94-24.79-43.83-23.48-4,.44-5.72-2.28-4.88-4.57,9.12-24.71,49.93-93.46,49.93-93.46s4.87-6.92-.73-11.63-11.54,1.32-11.54,1.32-59.83,52.8-82.31,66.29c-2.08,1.25-5,0-5.34-4-.86-12-5.28-36.88-30.82-39.2-18.14-1.65-28.87,10.26-34.4,21.71-1.73,3.57-3.4,6.65-4.74-.48-3-15.89-12.38-42.57-41.85-49.15Z"
          fill="url(#a9106638-56d4-4f79-8812-bed67cfca285)"
        />
      </svg>
    </IconElement>
  )
}

InfonomicIcon.displayName = 'InfonomicIcon'
