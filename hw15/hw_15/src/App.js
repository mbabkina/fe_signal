
import './App.css';
import Posts from './Posts'

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const YODA_IMAGE = "https://static.wikia.nocookie.net/rustarwars/images/d/d6/Yoda_SWSB.png";
const TOY_IMAGE = "https://vizanka.ru/wp-content/uploads/2019/12/%D0%BC%D0%B0%D0%BB%D1%8B%D1%88-%D0%99%D0%BE%D0%B4%D0%B0-2.jpg"

const postsData = [{
    name: "Anakin skywalker",
    photo: ANAKIN_IMAGE,
    nickname: "@dart_vader",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: RAY_IMAGE,
    date:"26 февр."
},
    {
    name: "Yoda",
    photo: YODA_IMAGE,
    nickname: "@master",
    content: "Always more questions than answers there are",
    image: TOY_IMAGE,
    date:"04 апр."
}
        ]


function App() {
    return ( < div className = "posts-wrapper" >
        { postsData.map((post =>< Posts {...post} />)) }
        </div>
    );
}

export default App;