const screens = {
    main_layout: "MainLayout",
    home: "Home",
    search: "Search",
    cart: "Cart",
    favourite: "Favourite",
    notification: "Notification",
}

const bottom_tabs = [
    {
        id: 0,
        label: screens.home,
    },
    {
        id: 1,
        label: screens.search,
    },
    {
        id: 2,
        label: screens.cart,
    },
    {
        id: 3,
        label: screens.favourite,
    },
    {
        id: 4,
        label: screens.notification,
    },
]

const delivery_time = [
    {
        id: 1,
        label: "10 Mins",
    },
    {
        id: 2,
        label: "20 Mins"
    },
    {
        id: 3,
        label: "30 Mins"
    }
]

const ratings = [
    {
        id: 1,
        label: 1,
    },
    {
        id: 2,
        label: 2,
    },
    {
        id: 3,
        label: 3,
    },
    {
        id: 4,
        label: 4,
    },
    {
        id: 5,
        label: 5,
    }
]

const tags = [
    {
        id: 1,
        label: "Burger",
        detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id: 2,
        label: "Fast Food",
        detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id: 3,
        label: "Pizza",
        detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id: 4,
        label: "Asian",
        detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id: 5,
        label: "Dessert",
        detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id: 6,
        label: "Breakfast",
        detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id: 7,
        label: "Vegetable",
        detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id: 8,
        label: "Taccos",
        detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
]

export default {
    screens,
    bottom_tabs,
    delivery_time,
    ratings,
    tags
}