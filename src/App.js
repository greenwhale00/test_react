
import { useState } from 'react';
import './App.css';
import MainSlider from './component/MainSlider';

const DB = [
  {
    id: 1,
    content: "menu01",
    link: "/s1",
    submenu: [
      { content: "submenu011", link: "/1" },
      { content: "submenu012", link: "/2" },
      { content: "submenu013", link: "/3" },
    ]
  },
  {
    id: 2,
    content: "menu02",
    link: "/s1",
    submenu: [
      { content: "submenu021", link: "/1" },
      { content: "submenu022", link: "/2" },
      { content: "submenu023", link: "/3" },
    ]
  },
  {
    id: 3,
    content: "menu03",
    link: "/s1",
    submenu: [
      { content: "submenu031", link: "/1" },
      { content: "submenu032", link: "/2" },
      { content: "submenu033", link: "/3" },
    ]
  }
]




function App() {
  const [CB, setCB] = useState("");
  const [TG, setTG] = useState(false);
  return (
    <div className='Wrap'>
      <header>
        <h1 className={CB} onClick={() => setCB('on')}>LOGO</h1>
        <h2 className={`ggg ${TG ? 'on' : ''}`}>toggle class</h2>
        <button onClick={() => setTG(!TG)}>class 토글</button>
        <nav className='GNB'>
          <ul>
            {
              DB.map((it, idx) => (<li key={idx}>
                <a href={it.link}>{it.content}</a>
                <ul className='smenu'>
                  {
                    it.submenu.map((smenu, idx) => <li key={idx}>
                      <a href={smenu.link}>{smenu.content}</a>
                    </li>)
                  }

                  {/* <li>
              <a href="">
                {it.submenu[0].content}
              </a>
            </li> */}
                </ul>
              </li>))
            }

          </ul>

        </nav>

      </header>
      <main>
        <MainSlider />
      </main>
    </div>



  );
}

export default App;
