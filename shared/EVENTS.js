import tavernParty from '../assets/img/event1.jpg';
import dance from '../assets/img/dance.jpg';
import drinkDragon from '../assets/img/drinkDrag.jpg';
import raceTourney from '../assets/img/race.jpg';
import retro from '../assets/img/retro.png';

export const EVENTS = [
    {
        id: 1,
        name: 'Tavern Party',
        image: tavernParty,
        alt: 'Party in a fantasy tavern',
        headline: 'Costumes, laughter, and so much more.',
        date: 'Coming January 15th, 2023',
        summary: "Join us for a night of revelry like no other! From open to close, come in your best fantasy cosplay and enjoy all food and drinks at half-off! Additionally, the person cosplay voted as the best will receive an Oculus 7 and the first-edition version of the newest VR D&D: A Thieve's Tale game!",
        featured: true
    },
    {
        id: 2,
        name: 'Dance Dance Tournament',
        image: dance,
        alt: 'Ninja turtles dancing',
        headline: 'Time to boogy! Come only with your best moves, and prove the 80s never die!',
        date: "February 5th, 2023",
        summary: "It's a revolution. A Dance Dance Revolution that is!! Let your passion take you as we host the city's largest dance-off! For the next 3 days, challenge yourself to greater heights and get the highest score! The top 32 will have a grand slam face-off on February 8th, 2023 for the title of Ultimate Dance Champion and a $10,000 grand prize!"
    },
    {
        id: 3,
        name: 'Drinking & Dragons',
        image: drinkDragon,
        alt: 'Dragon drinking fine wine',
        headline: 'Great food, fine wine, and the best Dungeons & Dragons around!',
        date: "March 14th, 2023",
        summary: "What better way to celebrate national Pi day than with pie...and D&D! That's right, it's time to crack out the ol' figuines and dust off those dice! For today and today only, we are hosting unique, never-before-played D&D modules hosted by professional DMs! But that's not all, we are also introducing 3 new types of pies and 20 different types of wine for players to enjoy as they play. So come on by!"
    },
    {
        id: 4,
        name: 'Race Tournament',
        image: raceTourney,
        alt: 'Racing tournament image',
        headline: 'Put the pedal to the metal and prove yourself to be the very best!',
        date: "April 1st, 2023",
        summary: "This is no April Fool's Joke! We are hosting an all-around race tournament. For the next week, we will be competing on every racing machine, 1 game per day. The cusotmer with the highest score will have their portrait placed on the Hall of Flame and receive the mystery grand prize of the day, guaranteed to blow your socks off! Race! Compete! Win! Whether for glory, for honor, for riches, or some other crazy reason, come on down and show your skills!"
    },
    {
        id: 5,
        name: "Rockin' it Retro Style",
        image: retro,
        alt: 'Retro image of car in digital universe',
        headline: "Retro Arcade Tournament Extraordinaire!!! Enough said, let's get to playing!",
        date: "April 15th, 2023",
        summary: "It's a tournament of the best of the best, the ultimate retro arcde game experience. Face off against you competitors in this high stakes competition to find the one person who can prove that the oldies never go out of style! More details to come!"
    }
];