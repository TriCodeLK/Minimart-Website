import React from 'react';
import { Link } from 'react-router-dom';
import SidebarFilter from '../components/shop/SidebarFilter';
import ProductGrid from '../components/shop/ProductGrid';
import './Shop.css';

const Shop: React.FC = () => {
    return (
        <div className="shop-page">
            <div className="container">
                {/* Breadcrumb */}
                <div className="shop-breadcrumb">
                    <Link to="/">Home</Link> <span>/</span> <span className="current-page">Shop</span>
                </div>

                <div className="shop-layout">
                    {/* Sidebar Area */}
                    <SidebarFilter />

                    {/* Main Content Area */}
                    <main className="shop-content">
                        <ProductGrid />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Shop;
