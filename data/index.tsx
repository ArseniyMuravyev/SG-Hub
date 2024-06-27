import { LuUserCircle2, LuShare, LuTrophy } from "react-icons/lu";
import {
  CardData,
  FeatureData,
  MenuData,
  FooterData,
  FriendData,
  ProviderIcon,
} from "@/types";
import {
  FaGithub,
  FaGoogle,
  FaTelegram,
  FaYandex,
  FaInstagram,
} from "react-icons/fa";

export const featureData: FeatureData[] = [
  {
    title: "Fast and Light",
    thumbnail: "/fast-and-light.png",
  },
  {
    title: "Secure and Private",
    thumbnail: "/secure-and-private.png",
  },
  {
    title: "Easy of Use",
    thumbnail: "/easy-of-use.png",
  },
];

export const cardData: CardData[] = [
  {
    title: "Goal-Oriented Networking",
    description:
      "Connect with like-minded individuals who are focused on achieving their goals.",
    icon: <LuTrophy size={36} />,
  },
  {
    title: "Customizable Profiles",
    description:
      "Create a detailed profile showcasing your skills, achievements, and goals.",
    icon: <LuUserCircle2 size={36} />,
  },
  {
    title: "Resource Sharing",
    description: "Share articles, tools, and resources with your network.",
    icon: <LuShare size={36} />,
  },
];

export const menuData: MenuData[] = [
  {
    title: "home",
  },
  {
    title: "profile",
  },
  {
    title: "friends",
  },
  {
    title: "liked",
  },
  {
    title: "saved",
  },
];

export const footerData: FooterData[] = [
  {
    link: "https://github.com/ArseniyMuravyev/sg-hub",
    icon: <FaGithub />,
  },
  {
    link: "https://t.me/arseniyMuravyev/",
    icon: <FaTelegram />,
  },
  {
    link: "https://instagram.com",
    icon: <FaInstagram />,
  },
];

export const friendsData: FriendData[] = [
  {
    id: "1",
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Doe",
    countOfFriends: 150,
    age: 28,
  },
  {
    id: "2",
    profilePicture: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Jane Smith",
    countOfFriends: 200,
    age: 25,
  },
  {
    id: "3",
    profilePicture: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Michael Johnson",
    countOfFriends: 180,
    age: 30,
  },
  {
    id: "4",
    profilePicture: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Emily Davis",
    countOfFriends: 220,
    age: 27,
  },
  {
    id: "5",
    profilePicture: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "David Brown",
    countOfFriends: 170,
    age: 32,
  },
  {
    id: "6",
    profilePicture: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Sophia Wilson",
    countOfFriends: 190,
    age: 24,
  },
  {
    id: "7",
    profilePicture: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "James Taylor",
    countOfFriends: 160,
    age: 29,
  },
  {
    id: "8",
    profilePicture: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Olivia Martinez",
    countOfFriends: 210,
    age: 26,
  },
  {
    id: "9",
    profilePicture: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "William Anderson",
    countOfFriends: 140,
    age: 31,
  },
  {
    id: "10",
    profilePicture: "https://randomuser.me/api/portraits/women/10.jpg",
    name: "Isabella Thomas",
    countOfFriends: 230,
    age: 23,
  },
];

export const providerIcons: ProviderIcon[] = {
  google: <FaGoogle />,
  github: <FaGithub />,
  yandex: <FaYandex />,
};
