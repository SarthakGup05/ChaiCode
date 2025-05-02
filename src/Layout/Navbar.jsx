import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('none');
    const [hoveredItem, setHoveredItem] = useState(null);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Enhanced scroll handler for direction detection and smooth navbar transitions
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Determine scroll direction
            if (currentScrollY > lastScrollY + 5) {
                setScrollDirection('down');
            } else if (currentScrollY < lastScrollY - 5) {
                setScrollDirection('up');
            }
            
            // Set scrolled state for background change
            if (currentScrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Dynamic navbar styles based on scroll state and direction
    const getNavbarClasses = () => {
        let classes = 'w-full fixed top-0 z-50 transition-all duration-300 ';
        
        // Background and shadow styles
        if (scrolled) {
            classes += 'bg-white/90 backdrop-blur-md shadow-lg ';
        } else {
            classes += 'bg-transparent ';
        }
        
        // Scroll direction animation
        if (scrollDirection === 'down' && scrolled && !isOpen) {
            classes += '-translate-y-full '; // Hide navbar when scrolling down
        } else if (scrollDirection === 'up' || !scrolled) {
            classes += 'translate-y-0 '; // Show navbar when scrolling up
        }
        
        return classes;
    };

    return (
        <nav className={getNavbarClasses()}>
            <div className="max-w-7xl mx-auto px-4">
                <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
                    {/* Logo - Added scale animation on scroll */}
                    <div className="flex items-center">
                        <a href="#" className="flex items-center group">
                            <div className={`text-2xl font-bold transition-all duration-300 group-hover:scale-105 ${scrolled ? 'scale-90' : 'scale-100'}`}>
                                <img src="/assets/chaicode-black.png" alt="Logo" className="w-40 h-12" />
                            </div>
                        </a>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center justify-center flex-1 space-x-10 font-medium">
                        <div 
                            className="relative group" 
                            onMouseEnter={() => setHoveredItem('cohorts')} 
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Button className={`relative bg-transparent hover:bg-orange-50 text-black cursor-pointer transition-all duration-300 group-hover:text-orange-500 ${hoveredItem === 'cohorts' ? 'text-orange-500' : ''}`}>
                                <span className={`font-medium transition-all duration-300 ${scrolled ? 'text-base' : 'text-lg'}`}>Cohorts</span>
                            
                                <span className="h-3 w-3 rounded-full bg-red-500 absolute top-2.4 -right-1 animate-pulse"></span>
                            </Button>
                        </div>
                        
                        <a href="#" className={`text-black hover:text-orange-500 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-orange-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${
                            scrolled ? 'text-base' : 'text-lg'
                        }`}>
                            Udemy
                        </a>
                        <a href="#" className={`text-black hover:text-orange-500 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-orange-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${
                            scrolled ? 'text-base' : 'text-lg'
                        }`}>
                            Docs
                        </a>
                        <a href="#" className={`text-black hover:text-orange-500 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-orange-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${
                            scrolled ? 'text-base' : 'text-lg'
                        }`}>
                            Reviews
                        </a>
                    </div>

                    {/* Login Button with Enhanced Shine Effect */}
                    <Link to="https://courses.chaicode.com/learn/account/signin">
                        <Button
                            variant="destructive"
                            className={`relative bg-orange-500 hover:bg-orange-600 shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 ${
                                scrolled ? 'scale-95' : 'scale-100'
                            }`}
                        >
                            <span className="relative z-10">Login</span>
                            <span className="absolute top-0 -left-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                        </Button>
                    </Link>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className={`${scrolled ? 'text-orange-500' : 'text-black'} hover:text-orange-700 focus:outline-none transition-colors duration-300`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`md:hidden ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden transition-all duration-500 ease-in-out`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm shadow-lg">
                    <div className="space-y-1">
                        <div className="block px-3 py-2 text-base font-medium text-black hover:text-orange-500">
                            <div className="flex justify-between items-center" onClick={() => setHoveredItem(hoveredItem === 'mobileCohorts' ? null : 'mobileCohorts')}>
                                <span>Cohorts</span>
                        
                                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse ml-1"></span>
                            </div>
                        </div>
                    </div>
                    
                    <a
                        href="#"
                        className="block px-3 py-2 text-base font-medium text-black hover:text-orange-500 hover:bg-orange-50 rounded-md transition-all duration-300"
                    >
                        Udemy
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 text-base font-medium text-black hover:text-orange-500 hover:bg-orange-50 rounded-md transition-all duration-300"
                    >
                        Docs
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 text-base font-medium text-black hover:text-orange-500 hover:bg-orange-50 rounded-md transition-all duration-300"
                    >
                        Reviews
                    </a>
                </div>
            </div>
        </nav>
    );
};

// Make sure to add this to your tailwind.config.js for the shine animation
// theme: {
//     extend: {
//         keyframes: {
//             shine: {
//                 '100%': { left: '125%' }
//             }
//         },
//         animation: {
//             shine: 'shine 1s'
//         }
//     }
// }

export default Navbar;