import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import UserCard from "./Components/UserCard";
import useGithubuser from "./hooks/useGithubuser";
import "./App.css";
import { FaGithub } from "react-icons/fa";

export default function App() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [showRepo, setShowRepo] = useState(false);
  const { data, error } = useGithubuser(username, setLoading);

  return (
    <div>
      <div className="navbar">
        <div className="github-icon">
          <FaGithub size={20} />
        </div>
        <div className="navbar-divider" />
        <h1 className="page-header">Github Repo Finder</h1>
      </div>
      <SearchBar
        username={username}
        setUsername={setUsername}
        setLoading={setLoading}
        setShowRepo={setShowRepo}
      />
      <div>
        <UserCard
          data={data}
          loading={loading}
          error={error}
          username={username}
          showRepo={showRepo}
          setShowRepo={setShowRepo}
        />
      </div>
    </div>
  );
}

// export default function App() {
//   const [username, setUsername] = useState('');
//   const [data,setData] = useState(null)

//   const fetchUserData = ()=> {
//     const url = `https://api.github.com/users/${username}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data =>{setData(data); console.log(data)})
//     .catch(error => {console.log(error)
//       setData(null);
//   })
//   }

//   return (
//     <div>
//       <input
//       type='text'
//       value={username}
//       onChange={(e) => setUsername(e.target.value)}
//       placeholder='Enter Github username'
//       />
//       <button onClick = {fetchUserData}>
//         Fetch User
//         </button>
//         <div className='user-info'>
//           {data ? (
//             <div>
//               <h3>User Information</h3>
//               <p><strong>Username:</strong>{data.login}</p>
//               <p><strong>Name:</strong>{data.name}</p>
//               <p><strong>Followers:</strong>{data.followers}</p>
//               <p><strong>Following:</strong>{data.following}</p>
//               <p><strong>Repositories:</strong>{data.public_repos}</p>
//               </div>
//           ) : <p>No user data to display. Please search for a Github username.</p>}
//         </div>
//     </div>
//   );
// }
