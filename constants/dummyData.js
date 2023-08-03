import { icons, images } from "./";

const myProfile = {
    name: "ByProgrammers",
    profile_image: images.profile,
    address: "No. 88, Jln Padungan, Kuching"
}
const mailItemOptions = [{
    title: "Delete",
    icon: icons.email
},
{
    title: "Unread",
    icon: icons.unread
},
{
    title: "Flagged",
    icon: icons.flag
},

{
    title: "Pinned",
    icon: icons.pinned
},
{
    title: "To me",
    icon: icons.unread
}
    ,
{
    title: "Has attachments",
    icon: icons.attachment
},
{
    title: "Mentions me",
    icon: icons.mention
}]
const filterItems = [{
    title: "All messages",
    icon: icons.email
},
{
    title: "Unread",
    icon: icons.unread
},
{
    title: "Flagged",
    icon: icons.flag
},

{
    title: "Pinned",
    icon: icons.pinned
},
{
    title: "To me",
    icon: icons.unread
}
    ,
{
    title: "Has attachments",
    icon: icons.attachment
},
{
    title: "Mentions me",
    icon: icons.mention
}]
const categories = [
    {
        id: 1,
        name: "Fast Food ",
        title: "In this post, I would try to cover all concepts you need to know about Reanimated. ",
        subTitle: "In this post, I would try to cover all concepts you need to know about Reanimated. ",
        time: "5:34"
    },
    {
        id: 2,
        name: "Fruit Item",
        title: "In this post, I would try to cover all concepts you need to know about Reanimated. ",
        subTitle: "In this post, I would try to cover all concepts you need to know about Reanimated. ",
        time: "10:30"

    },
    {
        id: 3,
        name: "Rice Item",
        title: "In this post, I would try to cover all concepts you need to know about Reanimated. ",
        subTitle: "In this post, I would try to cover all concepts you need to know about Reanimated. ",
        time: "7:09"

    }
]


export default {
    myProfile,
    categories,
    filterItems,
    mailItemOptions

}