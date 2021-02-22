import { ImStarEmpty, ImStarFull, ImStarHalf } from 'react-icons/im';
import { CgGym } from 'react-icons/cg';


export function ExperienceBar(){
    return(
        <header className="experience-bar">
            <span>0 <ImStarEmpty /></span>
            <div>
                <span className="current-experience-top" style={{ left: '50%' }}><CgGym size={28}/></span>
                <div style={{ width: '50%'}} />
                <span className="current-experience" style={{ left: '50%' }}>300 <ImStarHalf /></span>
            </div>
            <span>600 <ImStarFull /></span>

        </header>
    )
}