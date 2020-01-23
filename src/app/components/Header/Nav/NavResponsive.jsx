import React, { Component } from 'react'

import "./_NavResponsive.scss"

export default class HeaderResponsive extends Component {
    render() {
        return (
            <div className="nav_responsive">

                <input id="burger" type="checkbox" />

                <label for="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <nav>
                    <ul>
                        <li>
                            <svg class="--svg" viewBox="0 0 512 512">
                                <path d="m502 400.957031c-83.515625 0-165.484375 34.257813-224.890625 93.988281-3.898437 3.917969-3.878906 10.25.035156 14.140626 1.953125 1.941406 4.5 2.910156 7.054688 2.910156 2.566406 0 5.132812-.980469 7.089843-2.945313 55.679688-55.984375 132.480469-88.09375 210.710938-88.09375 5.523438 0 10-4.476562 10-10 0-5.519531-4.476562-10-10-10zm0 0"></path>
                                <path d="m293.46875 391.695312c-3.09375-4.578124-9.308594-5.78125-13.882812-2.6875-42.761719 28.882813-78.875 65.023438-107.34375 107.414063-3.078126 4.585937-1.859376 10.800781 2.726562 13.878906 1.714844 1.148438 3.648438 1.699219 5.566406 1.699219 3.21875 0 6.382813-1.554688 8.3125-4.425781 27.023438-40.246094 61.316406-74.5625 101.933594-101.996094 4.574219-3.089844 5.777344-9.304687 2.6875-13.882813zm0 0"></path>
                                <path d="m502 320.457031c-44.707031 0-88.957031 7.636719-131.519531 22.699219-5.207031 1.839844-7.933594 7.554688-6.089844 12.761719 1.449219 4.105469 5.308594 6.667969 9.425781 6.667969 1.105469 0 2.230469-.1875 3.335938-.578126 40.414062-14.300781 82.417968-21.550781 124.847656-21.550781 5.523438 0 10-4.476562 10-10 0-5.523437-4.476562-10-10-10zm0 0"></path>
                                <path d="m143.277344 443.378906c65.789062-85.777344 161.023437-145.335937 266.109375-167.65625.019531-.003906.039062-.007812.054687-.011718 30.199219-6.410157 61.203125-9.75 92.558594-9.75 5.519531 0 10-4.480469 10-10 0-5.523438-4.480469-10-10-10-28.433594 0-56.757812 2.601562-84.601562 7.691406v-21.585938c36.144531-30.597656 55.984374-70.691406 55.984374-113.386718 0-44.144532-21.207031-85.507813-59.71875-116.472657-3.660156-2.941406-8.875-2.941406-12.535156 0-38.507812 30.964844-59.71875 72.328125-59.71875 116.472657 0 42.695312 19.84375 82.789062 55.984375 113.386718v25.675782c-19 4.324218-37.726562 9.835937-56.0625 16.472656v-58.550782c0-2.75-1.109375-5.238281-2.90625-7.046874v-.003907l-56-56.332031c-1.878906-1.886719-4.429687-2.949219-7.09375-2.949219h-114.332031c-2.660156 0-5.214844 1.0625-7.089844 2.949219l-56 56.332031v.003907c-1.796875 1.808593-2.910156 4.296874-2.910156 7.050781v38.1875c-6.96875-1.277344-13.96875-2.402344-21-3.363281v-35.648438c27.332031-23.511719 42.328125-54.175781 42.328125-86.84375 0-34.128906-16.359375-66.074219-46.0625-89.960938-3.660156-2.941406-8.871094-2.941406-12.53125 0-29.703125 23.882813-46.0625 55.832032-46.0625 89.960938 0 32.664062 14.996094 63.328125 42.328125 86.839844v33.351562c-14.582031-1.363281-29.261719-2.066406-44-2.066406-5.523438 0-10 4.476562-10 10s4.476562 10 10 10c79.960938 0 158.171875 21.15625 227.121094 61.292969-16.519532 11.226562-32.296875 23.488281-47.234375 36.6875-55.863281-28.460938-117.933594-43.480469-179.886719-43.480469-5.519531 0-10 4.476562-10 10s4.480469 10 10 10c56.371094 0 112.855469 13.109375 164.171875 38.003906-15.203125 14.707032-29.414063 30.441406-42.527344 47.074219-38.898437-16.3125-79.78125-24.578125-121.644531-24.578125-5.519531 0-10 4.476562-10 10s4.480469 10 10 10c37.5 0 74.164062 7.109375 109.1875 21.109375-6.910156 9.601563-13.476562 19.464844-19.652344 29.589844l-15.238281 24.964843c-2.878906 4.710938-1.386719 10.867188 3.324219 13.742188 1.628906.996094 3.425781 1.46875 5.203125 1.46875 3.367187 0 6.660156-1.707031 8.542969-4.792969l15.238281-24.964843c7.945312-13.019532 16.53125-25.546876 25.683593-37.574219.359376-.398438.695313-.824219.988282-1.289063zm218.136718-324.699218c0-35.542969 16.261719-69.210938 45.984376-95.59375 29.722656 26.382812 45.984374 60.050781 45.984374 95.59375 0 31.320312-12.640624 61.191406-35.984374 85.898437v-76.578125c0-5.523438-4.476563-10-10-10-5.523438 0-10 4.476562-10 10v76.578125c-23.347657-24.707031-35.984376-54.578125-35.984376-85.898437zm-329.742187 9.320312c0-25.507812 11.417969-49.734375 32.328125-68.984375 20.910156 19.246094 32.328125 43.476563 32.328125 68.984375 0 21.082031-7.808594 41.292969-22.328125 58.542969v-66.542969c0-5.523438-4.476562-10-10-10-5.519531 0-10 4.476562-10 10v66.542969c-14.519531-17.25-22.328125-37.460938-22.328125-58.542969zm275.621094 77.664062h-86.132813l-36.117187-36.332031h86.132812zm-146.292969-32.148437 31.960938 32.148437h-63.917969zm-46 52.148437h92v63.59375c-4.636719-2.132812-9.300781-4.195312-14-6.175781v-33.585937c0-5.519532-4.476562-10-10-10h-44c-5.519531 0-10 4.480468-10 10v11.890625c-4.648438-1.210938-9.3125-2.359375-14-3.429688zm58 49.527344c-7.929688-2.921875-15.929688-5.632812-24-8.121094v-7.574218h24zm54 23.851563v-73.378907h94.335938v56.3125c-17.128907 7.097657-33.867188 15.199219-50.09375 24.308594-5.1875 2.910156-10.3125 5.933594-15.378907 9.035156-9.453125-5.773437-19.078125-11.203124-28.863281-16.277343zm0 0"></path>
                                <path d="m143.277344 443.378906c65.789062-85.777344 161.023437-145.335937 266.109375-167.65625.019531-.003906.039062-.007812.054687-.011718 30.199219-6.410157 61.203125-9.75 92.558594-9.75 5.519531 0 10-4.480469 10-10 0-5.523438-4.480469-10-10-10-28.433594 0-56.757812 2.601562-84.601562 7.691406v-21.585938c36.144531-30.597656 55.984374-70.691406 55.984374-113.386718 0-44.144532-21.207031-85.507813-59.71875-116.472657-3.660156-2.941406-8.875-2.941406-12.535156 0-38.507812 30.964844-59.71875 72.328125-59.71875 116.472657 0 42.695312 19.84375 82.789062 55.984375 113.386718v25.675782c-19 4.324218-37.726562 9.835937-56.0625 16.472656v-58.550782c0-2.75-1.109375-5.238281-2.90625-7.046874v-.003907l-56-56.332031c-1.878906-1.886719-4.429687-2.949219-7.09375-2.949219h-114.332031c-2.660156 0-5.214844 1.0625-7.089844 2.949219l-56 56.332031v.003907c-1.796875 1.808593-2.910156 4.296874-2.910156 7.050781v38.1875c-6.96875-1.277344-13.96875-2.402344-21-3.363281v-35.648438c27.332031-23.511719 42.328125-54.175781 42.328125-86.84375 0-34.128906-16.359375-66.074219-46.0625-89.960938-3.660156-2.941406-8.871094-2.941406-12.53125 0-29.703125 23.882813-46.0625 55.832032-46.0625 89.960938 0 32.664062 14.996094 63.328125 42.328125 86.839844v33.351562c-14.582031-1.363281-29.261719-2.066406-44-2.066406-5.523438 0-10 4.476562-10 10s4.476562 10 10 10c79.960938 0 158.171875 21.15625 227.121094 61.292969-16.519532 11.226562-32.296875 23.488281-47.234375 36.6875-55.863281-28.460938-117.933594-43.480469-179.886719-43.480469-5.519531 0-10 4.476562-10 10s4.480469 10 10 10c56.371094 0 112.855469 13.109375 164.171875 38.003906-15.203125 14.707032-29.414063 30.441406-42.527344 47.074219-38.898437-16.3125-79.78125-24.578125-121.644531-24.578125-5.519531 0-10 4.476562-10 10s4.480469 10 10 10c37.5 0 74.164062 7.109375 109.1875 21.109375-6.910156 9.601563-13.476562 19.464844-19.652344 29.589844l-15.238281 24.964843c-2.878906 4.710938-1.386719 10.867188 3.324219 13.742188 1.628906.996094 3.425781 1.46875 5.203125 1.46875 3.367187 0 6.660156-1.707031 8.542969-4.792969l15.238281-24.964843c7.945312-13.019532 16.53125-25.546876 25.683593-37.574219.359376-.398438.695313-.824219.988282-1.289063zm218.136718-324.699218c0-35.542969 16.261719-69.210938 45.984376-95.59375 29.722656 26.382812 45.984374 60.050781 45.984374 95.59375 0 31.320312-12.640624 61.191406-35.984374 85.898437v-76.578125c0-5.523438-4.476563-10-10-10-5.523438 0-10 4.476562-10 10v76.578125c-23.347657-24.707031-35.984376-54.578125-35.984376-85.898437zm-329.742187 9.320312c0-25.507812 11.417969-49.734375 32.328125-68.984375 20.910156 19.246094 32.328125 43.476563 32.328125 68.984375 0 21.082031-7.808594 41.292969-22.328125 58.542969v-66.542969c0-5.523438-4.476562-10-10-10-5.519531 0-10 4.476562-10 10v66.542969c-14.519531-17.25-22.328125-37.460938-22.328125-58.542969zm275.621094 77.664062h-86.132813l-36.117187-36.332031h86.132812zm-146.292969-32.148437 31.960938 32.148437h-63.917969zm-46 52.148437h92v63.59375c-4.636719-2.132812-9.300781-4.195312-14-6.175781v-33.585937c0-5.519532-4.476562-10-10-10h-44c-5.519531 0-10 4.480468-10 10v11.890625c-4.648438-1.210938-9.3125-2.359375-14-3.429688zm58 49.527344c-7.929688-2.921875-15.929688-5.632812-24-8.121094v-7.574218h24zm54 23.851563v-73.378907h94.335938v56.3125c-17.128907 7.097657-33.867188 15.199219-50.09375 24.308594-5.1875 2.910156-10.3125 5.933594-15.378907 9.035156-9.453125-5.773437-19.078125-11.203124-28.863281-16.277343zm0 0"></path>
                                <path d="m320.597656 365.269531c-1.855468 1.859375-2.929687 4.4375-2.929687 7.066407 0 2.640624 1.070312 5.210937 2.929687 7.070312 1.863282 1.863281 4.441406 2.929688 7.070313 2.929688 2.632812 0 5.210937-1.066407 7.070312-2.929688 1.859375-1.859375 2.929688-4.429688 2.929688-7.070312 0-2.628907-1.070313-5.207032-2.929688-7.066407-1.859375-1.863281-4.4375-2.933593-7.070312-2.933593-2.628907 0-5.207031 1.070312-7.070313 2.933593zm0 0"></path>
                            </svg>
                            <a href="#">Accueil</a>
                        </li>
                        <li>
                            <svg class="--svg" viewBox="0 0 512 512">
                                <path d="m124 394c-2.640625 0-5.210938 1.070312-7.070312 2.929688-1.859376 1.859374-2.929688 4.429687-2.929688 7.070312 0 2.628906 1.070312 5.210938 2.929688 7.070312 1.859374 1.859376 4.441406 2.929688 7.070312 2.929688s5.210938-1.070312 7.070312-2.929688c1.859376-1.859374 2.929688-4.441406 2.929688-7.070312s-1.070312-5.210938-2.929688-7.070312c-1.859374-1.859376-4.441406-2.929688-7.070312-2.929688zm0 0"></path>
                                <path d="m463.800781 235.640625v-83.742187c0-11.523438-9.375-20.898438-20.898437-20.898438h-2.902344v-28.902344c0-11.027344-8.972656-20-20-20h-101.871094v-62.097656c0-11.027344-8.972656-20-20-20h-155.085937c-11.027344 0-20 8.972656-20 20v20h-29.644531c-5.519532 0-10 4.476562-10 10v35.917969c0 37.324219-12.503907 74.195312-35.210938 103.820312l-8.851562 11.546875c-25.363282 33.097656-39.335938 74.285156-39.335938 115.988282v174.726562c0 11.027344 8.972656 20 20 20h482c5.523438 0 10-4.476562 10-10v-186.585938c0-33.671874-18.714844-64.296874-48.199219-79.773437zm-20-83.742187v44.101562h-27.601562v-44.101562c0-.496094.402343-.898438.898437-.898438h25.800782c.5 0 .902343.402344.902343.898438zm-23.800781-49.800782v28.902344h-2.898438c-11.527343 0-20.902343 9.375-20.902343 20.898438v83.742187c-29.484375 15.476563-48.199219 46.101563-48.199219 79.773437v176.585938h-29.871094v-389.902344zm-364.789062 111.355469 8.851562-11.550781c25.367188-33.09375 39.335938-74.285156 39.335938-115.984375v-25.917969h59.285156v25.917969c0 41.699219 13.96875 82.890625 39.335937 115.984375l8.851563 11.550781c20.675781 26.972656 32.890625 59.957031 34.910156 93.820313h-28.457031c-1.992188-29.484376-12.730469-58.152344-30.742188-81.65625l-8.851562-11.546876c-4.40625-5.75-8.566407-11.8125-12.367188-18.027343-2.878906-4.710938-9.035156-6.199219-13.746093-3.316407-4.714844 2.882813-6.195313 9.039063-3.316407 13.75 4.164063 6.808594 8.726563 13.457032 13.558594 19.761719l8.851563 11.546875c15.351562 20.03125 24.597656 44.386719 26.554687 69.488282h-176.960937c2.019531-33.863282 14.230468-66.847657 34.90625-93.820313zm-35.210938 200.546875h68.667969c5.519531 0 10-4.476562 10-10s-4.480469-10-10-10h-68.667969v-66.726562h226.082031v110.726562h-226.082031zm0 78v-34h226.082031v34zm206.746094-290.714844-8.851563-11.546875c-22.707031-29.625-35.210937-66.496093-35.210937-103.820312v-35.917969c0-5.523438-4.480469-10-10-10h-29.644532v-20h155.085938v472h-32.042969v-174.726562c0-41.703126-13.96875-82.890626-39.335937-115.988282zm265.253906 290.714844h-124v-176.585938c0-27.9375 16.558594-53.179687 42.183594-64.308593 3.652344-1.585938 6.015625-5.191407 6.015625-9.171875v-25.933594h27.605469v25.933594c0 3.980468 2.359374 7.585937 6.015624 9.171875 25.621094 11.128906 42.179688 36.371093 42.179688 64.308593zm0 0"></path>
                                <path d="m445.117188 351.773438c.414062-.496094.847656-.980469 1.308593-1.441407l1.644531-1.644531c3.90625-3.90625 3.90625-10.234375.003907-14.144531-3.902344-3.90625-10.234375-3.90625-14.144531-.003907l-1.644532 1.648438c-5.066406 5.066406-8.671875 11.207031-10.613281 17.902344-4.148437-1.96875-8.78125-3.074219-13.671875-3.074219-17.644531 0-32 14.355469-32 32 0 14.476563 9.667969 26.734375 22.882812 30.671875-.570312 2.386719-.882812 4.875-.882812 7.433594 0 17.644531 14.355469 32 32 32s32-14.355469 32-32c0-2.558594-.308594-5.046875-.878906-7.433594 13.214844-3.9375 22.878906-16.191406 22.878906-30.667969 0-17.644531-14.355469-32-32-32-2.363281 0-4.664062.265625-6.882812.753907zm-37.117188 19.246093c6.617188 0 12 5.382813 12 12 0 6.617188-5.382812 12-12 12s-12-5.382812-12-12c0-6.617187 5.382812-12 12-12zm22 62.101563c-6.617188 0-12-5.382813-12-12 0-6.617188 5.382812-12 12-12s12 5.382812 12 12c0 6.617187-5.382812 12-12 12zm34-50.101563c0 6.617188-5.382812 12-12 12s-12-5.382812-12-12c0-6.617187 5.382812-12 12-12s12 5.382813 12 12zm0 0"></path>
                                <path d="m142.5 174.800781c2.628906 0 5.210938-1.070312 7.070312-2.929687 1.859376-1.859375 2.929688-4.441406 2.929688-7.070313 0-2.628906-1.070312-5.210937-2.929688-7.070312-1.859374-1.859375-4.441406-2.929688-7.070312-2.929688s-5.210938 1.070313-7.070312 2.929688c-1.859376 1.859375-2.929688 4.441406-2.929688 7.070312 0 2.628907 1.070312 5.210938 2.929688 7.070313 1.859374 1.859375 4.441406 2.929687 7.070312 2.929687zm0 0"></path>
                            </svg>
                            <a href="#">Boutique</a>
                        </li>
                        <li>
                            <svg class="--svg" viewBox="0 0 512 512">
                                <path d="m478 0h-444c-18.746094 0-34 15.253906-34 34v256c0 5.523438 4.476562 10 10 10s10-4.476562 10-10v-256c0-7.71875 6.28125-14 14-14h212.128906v15.363281h-1.570312c-14.644532 0-26.558594 11.914063-26.558594 26.558594 0 5.523437 4.476562 10 10 10s10-4.476563 10-10c0-3.613281 2.941406-6.558594 6.558594-6.558594h1.570312v348.292969h-1.570312c-14.644532 0-26.558594 11.914062-26.558594 26.5625 0 5.519531 4.476562 10 10 10s10-4.480469 10-10c0-3.617188 2.941406-6.5625 6.558594-6.5625h1.570312v28.34375h-212.128906c-7.71875 0-14-6.28125-14-14v-71c0-5.523438-4.476562-10-10-10s-10 4.476562-10 10v71c0 18.746094 15.253906 34 34 34h444c18.746094 0 34-15.253906 34-34v-404c0-18.746094-15.253906-34-34-34zm14 438c0 7.71875-6.28125 14-14 14h-211.871094v-28.34375h1.3125c3.617188 0 6.558594 2.945312 6.558594 6.5625 0 5.519531 4.476562 10 10 10s10-4.480469 10-10c0-14.648438-11.914062-26.5625-26.558594-26.5625h-1.3125v-348.292969h1.3125c3.617188 0 6.558594 2.945313 6.558594 6.558594 0 5.523437 4.476562 10 10 10s10-4.476563 10-10c0-14.644531-11.914062-26.558594-26.558594-26.558594h-1.3125v-15.363281h211.871094c7.71875 0 14 6.28125 14 14zm0 0"></path>
                                <path d="m10 339c2.628906 0 5.210938-1.070312 7.070312-2.929688 1.859376-1.859374 2.929688-4.441406 2.929688-7.070312s-1.070312-5.210938-2.929688-7.070312c-1.859374-1.859376-4.441406-2.929688-7.070312-2.929688s-5.210938 1.070312-7.070312 2.929688c-1.859376 1.859374-2.929688 4.441406-2.929688 7.070312s1.070312 5.210938 2.929688 7.070312c1.859374 1.859376 4.441406 2.929688 7.070312 2.929688zm0 0"></path>
                                <path d="m49.546875 231.957031c1.339844 4.71875 5.910156 7.777344 10.773437 7.203125 9.890626-1.148437 17.917969-3.808594 24.355469-7.042968.058594.429687.125.859374.199219 1.292968 3.371094 20.035156 17.9375 37.414063 43.289062 51.652344 1.523438.855469 3.210938 1.28125 4.898438 1.28125s3.375-.425781 4.898438-1.28125c25.351562-14.238281 39.917968-31.617188 43.292968-51.652344.070313-.433594.136719-.863281.199219-1.292968 6.433594 3.234374 14.460937 5.894531 24.351563 7.042968 4.871093.570313 9.433593-2.484375 10.773437-7.203125 7.542969-26.5625.132813-45.460937-9.5625-56.960937 1.898437-1.261719 3.929687-2.722656 6.105469-4.425782 3.871094-3.03125 4.96875-8.421874 2.585937-12.71875-13.363281-24.136718-29.1875-37.175781-47.027343-38.753906-9.265626-.820312-17.53125 1.660156-24.3125 5.136719 2.363281-10.675781 7.886718-20.542969 15.949218-28.121094l.878906-.824219c4.027344-3.78125 4.226563-10.109374.441407-14.136718-3.78125-4.023438-10.109375-4.222656-14.132813-.441406l-.882812.828124c-12.363282 11.617188-20.355469 27.183594-22.769532 43.820313-7.140624-4.046875-16.164062-7.171875-26.40625-6.261719-17.835937 1.578125-33.660156 14.617188-47.023437 38.753906-2.382813 4.296876-1.285156 9.6875 2.582031 12.71875 2.175782 1.703126 4.210938 3.164063 6.109375 4.425782-9.695312 11.5-17.109375 30.398437-9.566406 56.960937zm32.769531-50.613281c4.421875-2.042969 6.632813-6.933594 5.359375-11.644531-1.171875-4.335938-5.148437-7.269531-9.5625-7.339844-.511719-.121094-2.320312-.636719-5.539062-2.523437 6.71875-10.125 15.839843-19.8125 26.539062-20.808594 10.574219-.984375 19.851563 6.578125 23.949219 10.566406v5.171875l-22.757812 20.054687c-4.144532 3.652344-4.542969 9.972657-.890626 14.117188 1.976563 2.242188 4.734376 3.386719 7.503907 3.386719 2.351562 0 4.707031-.820313 6.609375-2.496094l9.535156-8.402344v45.5c0 5.523438 4.476562 10 10 10s10-4.476562 10-10v-45.5l9.535156 8.402344c1.902344 1.675781 4.257813 2.496094 6.605469 2.496094 2.773437 0 5.53125-1.144531 7.507813-3.386719 3.652343-4.144531 3.253906-10.464844-.890626-14.117188l-22.757812-20.054687v-5.175781c4.085938-3.976563 13.324219-11.503906 23.851562-10.570313 10.738282.949219 19.894532 10.660157 26.632813 20.816407-3.214844 1.886718-5.023437 2.402343-5.535156 2.519531-4.414063.074219-8.390625 3.007812-9.566407 7.34375-1.269531 4.707031.941407 9.601562 5.363282 11.644531 2.355468 1.21875 18.898437 10.75 15.425781 36.230469-16.386719-4.554688-22.378906-14.726563-22.664063-15.226563-2.710937-4.753906-8.742187-6.445312-13.53125-3.789062-4.789062 2.652344-6.550781 8.660156-3.960937 13.480468 1.558594 2.890626 13.519531 28.078126-26.015625 52.691407-39.539062-24.613281-27.574219-49.800781-26.019531-52.691407 2.59375-4.820312.828125-10.828124-3.960938-13.480468-1.535156-.851563-3.195312-1.257813-4.839843-1.257813-3.472657 0-6.847657 1.816407-8.691407 5.046875-.285156.496094-6.277343 10.671875-22.660156 15.226563-3.476563-25.480469 13.070313-35.011719 15.425781-36.230469zm0 0"></path>
                                <path d="m454 159.007812h-103c-5.523438 0-10 4.476563-10 10 0 5.523438 4.476562 10 10 10h103c5.523438 0 10-4.476562 10-10 0-5.523437-4.476562-10-10-10zm0 0"></path>
                                <path d="m303 159.011719c-2.628906 0-5.210938 1.066406-7.070312 2.929687-1.859376 1.859375-2.929688 4.429688-2.929688 7.070313 0 2.628906 1.070312 5.207031 2.929688 7.066406 1.859374 1.863281 4.441406 2.933594 7.070312 2.933594s5.210938-1.070313 7.070312-2.933594c1.859376-1.859375 2.929688-4.4375 2.929688-7.066406 0-2.632813-1.070312-5.210938-2.929688-7.070313-1.859374-1.863281-4.441406-2.929687-7.070312-2.929687zm0 0"></path>
                                <path d="m454 231.003906h-103c-5.523438 0-10 4.476563-10 10 0 5.523438 4.476562 10 10 10h103c5.523438 0 10-4.476562 10-10 0-5.523437-4.476562-10-10-10zm0 0"></path>
                                <path d="m303 231c-2.628906 0-5.210938 1.070312-7.070312 2.929688-1.859376 1.859374-2.929688 4.441406-2.929688 7.082031 0 2.628906 1.070312 5.199219 2.929688 7.066406 1.859374 1.863281 4.441406 2.921875 7.070312 2.921875s5.210938-1.058594 7.070312-2.921875c1.859376-1.859375 2.929688-4.4375 2.929688-7.066406 0-2.640625-1.070312-5.222657-2.929688-7.082031-1.859374-1.859376-4.441406-2.929688-7.070312-2.929688zm0 0"></path>
                                <path d="m454 87h-103c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h103c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10zm0 0"></path>
                                <path d="m303 87c-2.628906 0-5.210938 1.070312-7.070312 2.929688-1.859376 1.859374-2.929688 4.441406-2.929688 7.070312s1.070312 5.210938 2.929688 7.070312c1.859374 1.859376 4.441406 2.929688 7.070312 2.929688s5.210938-1.070312 7.070312-2.929688c1.859376-1.859374 2.929688-4.441406 2.929688-7.070312s-1.070312-5.210938-2.929688-7.070312c-1.859374-1.859376-4.441406-2.929688-7.070312-2.929688zm0 0"></path>
                                <path d="m454 303.003906h-103c-5.523438 0-10 4.476563-10 10 0 5.519532 4.476562 10 10 10h103c5.523438 0 10-4.480468 10-10 0-5.523437-4.476562-10-10-10zm0 0"></path>
                                <path d="m303 303c-2.628906 0-5.210938 1.070312-7.070312 2.929688-1.859376 1.859374-2.929688 4.441406-2.929688 7.070312s1.070312 5.210938 2.929688 7.070312c1.859374 1.859376 4.441406 2.929688 7.070312 2.929688s5.210938-1.070312 7.070312-2.929688c1.859376-1.859374 2.929688-4.441406 2.929688-7.070312s-1.070312-5.210938-2.929688-7.070312c-1.859374-1.859376-4.441406-2.929688-7.070312-2.929688zm0 0"></path>
                                <path d="m454 375h-103c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h103c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10zm0 0"></path>
                                <path d="m303 375c-2.628906 0-5.210938 1.070312-7.070312 2.929688-1.859376 1.859374-2.929688 4.441406-2.929688 7.070312s1.070312 5.210938 2.929688 7.070312c1.859374 1.859376 4.441406 2.929688 7.070312 2.929688s5.210938-1.070312 7.070312-2.929688c1.859376-1.859374 2.929688-4.441406 2.929688-7.070312s-1.070312-5.210938-2.929688-7.070312c-1.859374-1.859376-4.441406-2.929688-7.070312-2.929688zm0 0"></path>
                                <path d="m186 319h-105.871094c-5.523437 0-10 4.476562-10 10s4.476563 10 10 10h105.871094c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10zm0 0"></path>
                                <path d="m186 375h-105.871094c-5.523437 0-10 4.476562-10 10s4.476563 10 10 10h105.871094c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10zm0 0"></path>
                            </svg>
                            <a href="#">Recherche</a>
                        </li>
                        <li>
                            <svg class="--svg" viewBox="0 0 512 512">
                                <path d="m512 298c0-13.078125-8.417969-24.222656-20.117188-28.320312v-70.234376c.070313-.472656.117188-.953124.117188-1.445312s-.046875-.972656-.117188-1.445312v-.183594c0-36.761719-17.828124-71.511719-47.691406-92.953125-3.910156-2.804688-6.242187-7.351563-6.242187-12.164063v-81.253906c0-5.523438-4.476563-10-10-10h-42.71875c-5.523438 0-10 4.476562-10 10v81.253906c0 4.8125-2.335938 9.355469-6.242188 12.164063-16.632812 11.941406-29.523437 28.011719-37.691406 46.257812-8.164063-18.246093-21.058594-34.316406-37.691406-46.257812-3.90625-2.808594-6.238281-7.355469-6.238281-12.164063v-81.253906c0-5.523438-4.480469-10-10-10h-42.722657c-5.519531 0-10 4.476562-10 10v81.253906c0 4.808594-2.332031 9.355469-6.238281 12.164063-16.632812 11.941406-29.527344 28.011719-37.691406 46.257812-8.167969-18.246093-21.058594-34.316406-37.691406-46.257812-3.910157-2.808594-6.242188-7.355469-6.242188-12.164063v-81.253906c0-5.523438-4.476562-10-10-10h-42.71875c-5.523438 0-10 4.476562-10 10v81.253906c0 4.808594-2.332031 9.355469-6.242188 12.164063-29.863281 21.441406-47.691406 56.1875-47.691406 92.953125v73.304687c-11.707031 4.09375-20.128906 15.242188-20.128906 28.324219v72c0 7.679688 2.902344 14.6875 7.664062 20-4.761718 5.3125-7.664062 12.320312-7.664062 20v72c0 16.542969 13.457031 30 30 30h452c16.542969 0 30-13.457031 30-30v-72c0-7.679688-2.902344-14.6875-7.664062-20 4.761718-5.3125 7.664062-12.320312 7.664062-20zm-471.871094-90h130.582032v60h-130.582032zm150.585938 0h130.582031v60h-130.582031zm150.585937 0h130.582031v60h-130.582031zm53.929688-124.613281v-31.523438h22.71875v31.523438zm22.71875-63.386719v11.863281h-22.722657v-11.863281zm-37.296875 99.664062c5.722656-4.109374 10-9.820312 12.394531-16.277343h27.085937c2.394532 6.457031 6.667969 12.167969 12.394532 16.277343 22.363281 16.054688 36.546875 41.15625 38.980468 68.335938h-129.835937c2.433594-27.179688 16.617187-52.28125 38.980469-68.335938zm-136.007813-36.277343v-31.523438h22.722657v31.523438zm22.71875-63.386719v11.863281h-22.71875v-11.863281zm-37.296875 99.664062c5.726563-4.109374 10-9.820312 12.394532-16.277343h27.085937c2.394531 6.457031 6.671875 12.167969 12.394531 16.277343 22.367188 16.054688 36.546875 41.15625 38.984375 68.335938h-129.839843c2.433593-27.179688 16.617187-52.28125 38.980468-68.335938zm-136.003906-36.277343v-31.523438h22.71875v31.523438zm22.71875-63.386719v11.863281h-22.71875v-11.863281zm-37.296875 99.664062c5.722656-4.109374 10-9.820312 12.394531-16.277343h27.085938c2.394531 6.457031 6.667968 12.167969 12.394531 16.277343 22.363281 16.054688 36.546875 41.15625 38.980469 68.335938h-129.835938c2.433594-27.179688 16.617188-52.28125 38.980469-68.335938zm412.515625 362.335938c0 5.515625-4.484375 10-10 10h-452c-5.515625 0-10-4.484375-10-10v-72c0-5.515625 4.484375-10 10-10h185c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-185c-5.515625 0-10-4.484375-10-10v-72c0-5.515625 4.484375-10 10-10h452c5.515625 0 10 4.484375 10 10v72c0 5.515625-4.484375 10-10 10h-185c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h185c5.515625 0 10 4.484375 10 10zm0 0"></path>
                                <path d="m424 344c2.628906 0 5.210938-1.070312 7.070312-2.929688 1.859376-1.859374 2.929688-4.441406 2.929688-7.070312s-1.070312-5.210938-2.929688-7.070312c-1.859374-1.859376-4.441406-2.929688-7.070312-2.929688s-5.210938 1.070312-7.070312 2.929688c-1.859376 1.859374-2.929688 4.441406-2.929688 7.070312s1.070312 5.210938 2.929688 7.070312c1.859374 1.859376 4.441406 2.929688 7.070312 2.929688zm0 0"></path>
                                <path d="m83.671875 324c-2.640625 0-5.210937 1.070312-7.070313 2.929688-1.871093 1.859374-2.929687 4.441406-2.929687 7.070312s1.058594 5.210938 2.929687 7.070312c1.859376 1.859376 4.429688 2.929688 7.070313 2.929688 2.628906 0 5.199219-1.070312 7.066406-2.929688 1.859375-1.859374 2.933594-4.441406 2.933594-7.070312s-1.070313-5.210938-2.933594-7.070312c-1.859375-1.859376-4.4375-2.929688-7.066406-2.929688zm0 0"></path>
                                <path d="m424 438c-2.628906 0-5.210938 1.070312-7.070312 2.929688-1.859376 1.859374-2.929688 4.441406-2.929688 7.070312s1.070312 5.210938 2.929688 7.070312c1.859374 1.859376 4.441406 2.929688 7.070312 2.929688s5.210938-1.070312 7.070312-2.929688c1.859376-1.859374 2.929688-4.441406 2.929688-7.070312s-1.070312-5.210938-2.929688-7.070312c-1.859374-1.859376-4.441406-2.929688-7.070312-2.929688zm0 0"></path>
                                <path d="m83.671875 438c-2.640625 0-5.210937 1.070312-7.070313 2.929688-1.871093 1.859374-2.929687 4.441406-2.929687 7.070312s1.058594 5.210938 2.929687 7.070312c1.859376 1.859376 4.4375 2.929688 7.070313 2.929688 2.628906 0 5.199219-1.070312 7.066406-2.929688 1.859375-1.859374 2.933594-4.441406 2.933594-7.070312s-1.070313-5.210938-2.933594-7.070312c-1.867187-1.859376-4.4375-2.929688-7.066406-2.929688zm0 0"></path>
                                <path d="m256.128906 380c-2.640625 0-5.207031 1.070312-7.070312 2.929688-1.867188 1.859374-2.929688 4.441406-2.929688 7.070312s1.0625 5.210938 2.929688 7.070312c1.863281 1.859376 4.433594 2.929688 7.070312 2.929688 2.632813 0 5.199219-1.070312 7.070313-2.929688 1.859375-1.859374 2.929687-4.441406 2.929687-7.070312s-1.070312-5.210938-2.929687-7.070312c-1.859375-1.859376-4.4375-2.929688-7.070313-2.929688zm0 0"></path>
                            </svg>
                            <a href="#">Ma cave</a>
                        </li>
                        <li>
                            <svg viewBox="0 0 512 512">
                                <path d="m92.808594 456.558594c-2.628906 0-5.207032 1.0625-7.066406 2.921875-1.859376 1.871093-2.933594 4.441406-2.933594 7.078125 0 2.632812 1.070312 5.203125 2.933594 7.070312 1.859374 1.859375 4.4375 2.929688 7.066406 2.929688 2.632812 0 5.210937-1.066406 7.070312-2.929688 1.859375-1.867187 2.929688-4.4375 2.929688-7.070312 0-2.636719-1.066406-5.207032-2.929688-7.078125-1.859375-1.859375-4.429687-2.921875-7.070312-2.921875zm0 0"></path>
                                <path d="m230.589844 368.5c2.628906 0 5.210937-1.070312 7.058594-2.929688 1.871093-1.859374 2.941406-4.441406 2.941406-7.070312s-1.070313-5.210938-2.941406-7.070312c-1.847657-1.859376-4.429688-2.929688-7.058594-2.929688-2.640625 0-5.210938 1.070312-7.078125 2.929688-1.863281 1.859374-2.933594 4.441406-2.933594 7.070312s1.070313 5.210938 2.933594 7.070312c1.859375 1.859376 4.4375 2.929688 7.078125 2.929688zm0 0"></path>
                                <path d="m230.578125 400.339844c2.640625 0 5.210937-1.070313 7.070313-2.929688 1.871093-1.871094 2.941406-4.441406 2.941406-7.070312 0-2.640625-1.070313-5.210938-2.941406-7.078125-1.859376-1.863281-4.429688-2.921875-7.070313-2.921875-2.628906 0-5.207031 1.058594-7.066406 2.921875-1.863281 1.867187-2.933594 4.4375-2.933594 7.078125 0 2.628906 1.070313 5.199218 2.933594 7.070312 1.859375 1.859375 4.4375 2.929688 7.066406 2.929688zm0 0"></path>
                                <path d="m240.589844 424c0-2.628906-1.070313-5.210938-2.941406-7.070312-1.859376-1.859376-4.429688-2.929688-7.066407-2.929688-2.632812 0-5.210937 1.070312-7.070312 2.929688-1.859375 1.859374-2.929688 4.441406-2.929688 7.070312s1.066407 5.210938 2.929688 7.070312c1.859375 1.859376 4.4375 2.929688 7.070312 2.929688 2.640625 0 5.21875-1.070312 7.066407-2.929688 1.871093-1.859374 2.941406-4.441406 2.941406-7.070312zm0 0"></path>
                                <path d="m502 229.394531h-104c-5.523438 0-10 4.480469-10 10v90.855469c-6.128906-3.007812-12.480469-5.554688-19.003906-7.570312l-75.015625-23.648438v-16.242188c0-3.597656-1.933594-6.921874-5.066407-8.695312-1.195312-.679688-2.496093-1.089844-3.816406-1.238281 20.269532-12.535157 35.933594-31.832031 43.8125-54.722657.292969.023438.585938.042969.886719.042969 25.363281 0 46-20.636719 46-46 0-23.761719-18.113281-43.371093-41.257813-45.753906v-15.109375c14.824219-17.34375 23.785157-39.835938 23.785157-64.386719v-36.925781c0-5.523438-4.476563-10-10-10h-131.113281c-49.945313 0-90.582032 40.636719-90.582032 90.585938v35.835937c-23.144531 2.382813-41.253906 21.992187-41.253906 45.753906 0 25.363281 20.636719 46 46 46 .296875 0 .589844-.019531.882812-.042969 7.878907 22.890626 23.542969 42.191407 43.816407 54.722657-1.324219.148437-2.625.558593-3.816407 1.234375-3.132812 1.777344-5.070312 5.101562-5.070312 8.699218v16.089844l-74.964844 23.78125c-26.902344 8.328125-49.960937 24.710938-66.675781 47.378906-16.710937 22.667969-25.546875 49.535157-25.546875 77.699219v54.261719c0 5.523438 4.476562 10 10 10h468.167969c5.519531 0 10-4.476562 10-10s-4.480469-10-10-10h-18.167969v-51.707031c29.445312-4.796875 52-30.402344 52-61.183594v-139.714844c0-5.519531-4.476562-10-10-10zm-396.625-57.21875c0-12.714843 9.175781-23.320312 21.253906-25.558593v37.761718c0 4.574219.300782 9.085938.875 13.507813-12.507812-1.875-22.128906-12.6875-22.128906-25.710938zm250.421875 0c0 13.023438-9.625 23.835938-22.132813 25.710938.574219-4.421875.875-8.933594.875-13.507813v-37.761718c12.078126 2.238281 21.257813 12.84375 21.257813 25.558593zm-209.167969-57.28125v-24.308593c0-38.921876 31.664063-70.585938 70.582032-70.585938h121.117187v26.925781c0 43.699219-35.554687 79.25-79.253906 79.25h-112.445313zm0 69.484375v-38.203125h112.445313c20.527343 0 39.621093-6.265625 55.464843-16.980469v55.183594c0 46.292969-37.660156 83.953125-83.953124 83.953125-46.296876 0-83.957032-37.660156-83.957032-83.953125zm49.441406 98.058594c10.804688 3.8125 22.421876 5.894531 34.515626 5.894531s23.710937-2.082031 34.515624-5.898437l-34.515624 20.652344zm15.039063 32.300781-23.921875 14.3125v-28.625zm62.871094-14.3125v28.625l-23.917969-14.3125zm-106.792969 19.4375v26.824219c0 3.597656 1.9375 6.921875 5.066406 8.699219 1.53125.867187 3.234375 1.300781 4.933594 1.300781 1.777344 0 3.554688-.476562 5.136719-1.421875l48.261719-28.875 48.261718 28.875c1.578125.945313 3.355469 1.421875 5.132813 1.421875 1.703125 0 3.402343-.433594 4.933593-1.300781 3.132813-1.777344 5.066407-5.101563 5.066407-8.699219v-26.6875l24.652343 7.773438-88.046874 131.273437-88.101563-131.347656zm191.167969 172.136719h-338.355469v-44.261719c0-43.335937 24.652344-81.683593 62.8125-99.949219v80.542969c0 5.523438 4.476562 10 10 10s10-4.476562 10-10v-88.046875l19.816406-6.285156 99.652344 148.570312c1.855469 2.769532 4.96875 4.429688 8.304688 4.429688 3.332031 0 6.445312-1.660156 8.304687-4.429688l99.621094-148.53125 19.847656 6.257813v151.703125zm81.644531 0h-61.644531v-144.199219c3.300781 1.589844 6.519531 3.335938 9.644531 5.242188v26.070312c0 30.78125 22.554688 56.382813 52 61.179688zm52-112.890625c0 23.160156-18.839844 42-42 42s-42-18.839844-42-42v-72.214844h84zm0-92.214844h-84v-37.496093h84zm0 0"></path>
                                <path d="m470.289062 345.589844c2.632813 0 5.210938-1.070313 7.070313-2.929688 1.871094-1.871094 2.929687-4.441406 2.929687-7.070312 0-2.640625-1.058593-5.210938-2.929687-7.070313-1.859375-1.871093-4.429687-2.929687-7.070313-2.929687-2.628906 0-5.210937 1.058594-7.070312 2.929687-1.859375 1.859375-2.929688 4.429688-2.929688 7.070313 0 2.628906 1.070313 5.199218 2.929688 7.070312 1.859375 1.859375 4.441406 2.929688 7.070312 2.929688zm0 0"></path>
                                <path d="m429.589844 372.710938c2.640625 0 5.210937-1.070313 7.070312-2.929688 1.871094-1.859375 2.929688-4.441406 2.929688-7.070312 0-2.632813-1.058594-5.210938-2.929688-7.070313-1.859375-1.859375-4.429687-2.929687-7.070312-2.929687-2.628906 0-5.199219 1.070312-7.070313 2.929687-1.859375 1.859375-2.929687 4.4375-2.929687 7.070313 0 2.628906 1.070312 5.210937 2.929687 7.070312 1.871094 1.859375 4.441407 2.929688 7.070313 2.929688zm0 0"></path>
                                <path d="m459.6875 404.890625c2.640625 0 5.210938-1.070313 7.070312-2.929687 1.871094-1.871094 2.929688-4.441407 2.929688-7.070313 0-2.640625-1.058594-5.210937-2.929688-7.082031-1.859374-1.859375-4.429687-2.929688-7.070312-2.929688-2.628906 0-5.199219 1.070313-7.066406 2.929688-1.859375 1.871094-2.933594 4.441406-2.933594 7.082031 0 2.628906 1.070312 5.199219 2.933594 7.070313 1.867187 1.859374 4.4375 2.929687 7.066406 2.929687zm0 0"></path>
                                <path d="m313.699219 46.925781c0-5.523437-4.476563-10-10-10-5.519531 0-10 4.476563-10 10 0 19.089844-15.53125 34.625-34.625 34.625-5.519531 0-10 4.476563-10 10 0 5.519531 4.480469 10 10 10 30.121093 0 54.625-24.503906 54.625-54.625zm0 0"></path>
                                <path d="m219 81.550781c-2.628906 0-5.210938 1.070313-7.070312 2.929688-1.859376 1.859375-2.929688 4.441406-2.929688 7.070312 0 2.628907 1.070312 5.210938 2.929688 7.070313 1.859374 1.859375 4.441406 2.929687 7.070312 2.929687s5.210938-1.070312 7.070312-2.929687c1.859376-1.859375 2.929688-4.441406 2.929688-7.070313 0-2.628906-1.070312-5.210937-2.929688-7.070312-1.859374-1.859375-4.441406-2.929688-7.070312-2.929688zm0 0"></path>
                            </svg>
                            <a href="#">Mon compte</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

