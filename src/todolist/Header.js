import listIcon from '../assets/icons/list.svg'

const Header = () =>{
    return(
        <div className="Header-container">
            <img className='Header-container_icon' src={listIcon} alt='list-icon'/>
            <div className="Header-container_header">Todo List</div>
            <p className="Header-container_subheader">Make your life easier</p>
            <hr className="Header-container_divider"/>
        </div>
    )
}
export default Header