import React from 'react';
import ReactDOM from 'react-dom/client';
import GreetingCard from './FestivelCard';
import  './index.css'

const ganpatiHeading = " Ganpati Mohotsav 2023";
const ganpatiConten = " Ham ap ko 17 saptenber ko ayojit hone wale  karekaram ke amantrit krte he.  Zarur ana!";
const janmashtmiHeading = " Janmashtami Mohotsav 2023";
const janmashtmiConten = " Ham ap ko 17 saptenber ko ayojit hone wale  karekaram ke amantrit krte he.  Zarur ana!";
const diwaliHeading = " diwali Mohotsav 2023";
const diwaliConten = " Ham ap ko 19 novenbar  ki sham ko  ayojit hone wale  karekaram ke amantrit krte he.  zarur aaiye ga!";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<div className='container'>
<GreetingCard  heading={ganpatiHeading} conten={ganpatiConten}/>
<GreetingCard  heading={janmashtmiHeading} conten={janmashtmiConten}/>
<GreetingCard  heading={diwaliHeading} conten={diwaliConten}/>
</div>
</>
);