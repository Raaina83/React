import React from "react";
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header(){
    const authStatus = useSelector((state) => state.auth.status)

    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            slug: '/', //URL
            status: true,
        },
        {
            name: 'Login',
            slug: '/login', //URL
            status: !authStatus,
        },
        {
            name: 'Signup',
            slug: '/', //URL
            status: !authStatus,
        },
        {
            name: 'All-Posts',
            slug: '/all-posts', //URL
            status: authStatus,
        },
        {
            name: 'Add-Post',
            slug: '/add-post', //URL
            status: authStatus,
        },
        
    ]
    return(
        <header className="py-3 shadow bg-gray-500">
            <Container>
                <nav className="flex">
                    <div className="mr-4">
                        <Link to='/'>
                            <Logo/> //can give width here if we want
                        </Link>
                    </div>
                    <ul className="flex ml-auto">
                        {navItems.map((item) => (
                            item.status ? (
                                <li key={item.name}> 
                                    <button onClick={navigate(item.slug)}
                                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        ))}
                        {authStatus && (
                                <li>
                                    <LogoutBtn/>
                                </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}