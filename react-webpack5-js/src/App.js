import { useState } from 'react';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';

function App() {
  const [isAuthed, setIsAuthed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');

  const handleLogin = async (creds) => {
    try {
      setErrorMessage('');
      const res = await fetch('/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(creds),
      });
      if (res.status === 200) {
        setIsAuthed(true);
        setUsername(creds.username);
      } else {
        if (res.status === 401) {
          const { message } = await res.json();
          setErrorMessage(message);
        } else {
          throw Error(`error during auth, status code: ${res.status}`);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="lg:container lg mx-auto m-10">
      {isAuthed ? (
        <Welcome
          username={username}
          onLogout={() => {
            setIsAuthed(false);
            setUsername('');
          }}
        />
      ) : (
        <LoginForm onLogin={handleLogin} errorMessage={errorMessage} />
      )}
    </div>
  );
}

export default App;
