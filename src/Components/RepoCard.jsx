import useRepoFetch from "../hooks/useRepoFetch"
import { ClipLoader } from "react-spinners";
import './RepoCard.css'
export default function RepoCard({username,showRepo}) {

  const {repoData, repoError} = useRepoFetch({username, showRepo})
  if(repoError) return( <div className='error-wrapper'> <p>{repoError.message}</p></div>);
  if(!repoData) return( <div className='spinner-wrapper'><ClipLoader color="#0d1816" loading={showRepo} size={50} />
    </div>);
  console.log(repoData)
  if(repoData.length === 0){
    return( <div className='error-wrapper'> <p>User has no Public Repositories</p></div>);
  }
  return (
    
    
      <ol className='repo-wrapper'>{repoData.map(repo => (
        
        <li className='repo-card' key={repo.id}>
          <a href={repo.html_url} className='repo-name' target='_blank'>{repo.name}</a>
        <p className='repo-desc'>{repo.description}</p>
        <div className='repo-highlights'>
        <span className='repo-lan'>● {repo.language}</span>
        <span className='repo-stars'>★ {repo.stargazers_count}</span>
        <span className='repo-forks'>⑂ {repo.forks}</span>
        </div>
        </li>
      
    ))}</ol>
  );
}
