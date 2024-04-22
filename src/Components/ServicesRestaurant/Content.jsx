import React from 'react'
// Restaurant icon
import { FaUtensils } from 'react-icons/fa'
//Food icon
import { GiFoodTruck } from "react-icons/gi";
//Delivery icon
import { AiOutlineShoppingCart } from "react-icons/ai";
// Reservation icon
import { AiOutlineCalendar } from "react-icons/ai";

const Content = [
    {
        title: 'Restaurant',
        icon: <FaUtensils />,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem fermentum tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem fermentum tincidunt.'
    },
    {
        title: 'Food Truck',
        icon: <GiFoodTruck />,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem fermentum tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem fermentum tincidunt'
    },
    {
        title: 'Delivery',
        icon: <AiOutlineShoppingCart />,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem fermentum tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem fermentum tincidunt'
    },
    {
        title: 'Reservation',
        icon: <AiOutlineCalendar />,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem fermentum tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut sem fermentum tincidunt'
    }
]

export default Content