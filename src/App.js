import './App.css';
import {User} from "./component/user";

function App() {
    const users = [
        'carla', 'gianni', 'enzo', 'marion', 'laura', 'giuseppe', 'ghislaine'
    ]
    const colors = [
        'red', 'green', 'blue', 'orange', 'purple', 'yellow', 'dark-blue'
    ]

    return (
        <div className="App">
            <header className="App-header">
                <div className="d-flex align-items-center mt-5">
                    <img src="/gift.png" className="gift-logo" alt={'logo'} height={100}/>
                    <h1 className="ps-3">Giuped's Christmas</h1>
                </div>
                <p className="merry-christmas">
                    Joyeux <span className="christmas-text">Noël</span> à tous les Giupeds !
                </p>

                <div className="container mt-5">
                    <div className="row">
                        {users.map((user, index) => {
                            return <User key={user} color={colors[index]} user={user}/>
                        })}
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
