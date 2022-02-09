import { NavLink } from 'react-router-dom'
const NavBar = () => {

    return (
        <>
        <div className='container'>
            <div className='phone'>
                <NavLink to= {'/telephone'} href='+374 911119'> +374 911119 </NavLink>
            </div>
            <div className="navigation">
                <NavLink  to={'/books'}> Գրքեր </NavLink>
                <NavLink  to={'/about'}> Մեր մասին </NavLink>
                <NavLink  to={'/news'}> Նորություններ </NavLink>
                <NavLink  to={'/blog'}> Բլոգ </NavLink>
            </div>
            <div className=' selected'>
                <select className='select' name="change" id="change">
                    <option value = 'AMD' > AMD </option>
                    <option value = 'RUB' > RUB </option>
                    <option value = 'USD' > USD </option>
                </select>
                <select className='select' name="language" id="language">
                    <option value = 'Arm' > Հայ</option>
                    <option value = 'Rus' > Рус</option>
                    <option value = 'Eng' > Eng </option>
                </select>
            </div>
        </div>
           
        </>
    )      
}
export default NavBar