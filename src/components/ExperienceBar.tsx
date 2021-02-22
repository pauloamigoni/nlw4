import { ImStarEmpty, ImStarFull, ImStarHalf } from 'react-icons/im';


export function ExperienceBar(){
    return(
        <header className="experience-bar">
            <span>0 <ImStarEmpty /></span>
            <div>
                <div style={{ width: '50%'}} />
                <span className="current-experience" style={{ left: '50%' }}>300 <ImStarHalf /></span>
            </div>
            <span>600 <ImStarFull /></span>

        </header>
    )
}