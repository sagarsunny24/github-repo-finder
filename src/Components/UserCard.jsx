import './UserCard.css';
import { ClipLoader } from "react-spinners";
import RepoCard from './RepoCard';
import {useRef} from 'react';
export default function UserCard({data, loading, error, username, showRepo, setShowRepo}) {
  const btnRef = useRef(null)
  function showRepos(){
    if(!showRepo){
      btnRef.current.textContent='Close Repos'
    }
    else{
      btnRef.current.textContent='Get Repos'
    }
    setShowRepo(!showRepo)
  }
  if(!username.trim()){
    return( <div className='empty-wrapper'><p>Search for a GitHub user</p></div>);
  }
  if(loading){
    return( <div className='spinner-wrapper'><ClipLoader color="#0d1816" loading={loading} size={50} />
  </div>);}
  if(error){
    return( <div className='error-wrapper'> <p>{error.message}</p></div>);}
  if(data) {
    return (
    <div>
      {console.log(data)}
      <div className='wrapper'>
      <h1>Username: <i><a href={`https://github.com/${username}`} target='_blank'>{data.login}</a></i></h1>
      <img src={data.avatar_url}/>
      <p className="bio">Bio: {data.bio}</p>
      <p className="flwrs">Followers: {data.followers}</p>
      <p className="repocount">Repos: {data.public_repos}</p>
      <button onClick={showRepos} ref={btnRef} > Get Repos</button>
      </div>
      {showRepo && <RepoCard username={username} showRepo ={showRepo} /> }
    </div>
  )}
}


  
  
