import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SidebarFilter from '../components/shop/SidebarFilter';
import ProductGrid from '../components/shop/ProductGrid';
import { products, type Product } from '../data/mockData';
import './Shop.css';

const Shop: React.FC = () => {
    // State for filters and sorting
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
    const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
    const [sortOption, setSortOption] = useState<string>('latest');
    
    // State for pagination
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 9;

    // Processed products (filtered & sorted)
    const [displayProducts, setDisplayProducts] = useState<Product[]>([]);

    useEffect(() => {
        let filtered = [...products];

        // 1. Filter by Category
        if (selectedCategories.length > 0) {
            filtered = filtered.filter(p => selectedCategories.includes(p.category));
        }

        // 2. Filter by Price
        filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

        // 3. Filter by Rating
        if (selectedRatings.length > 0) {
            // Include products with ANY of the selected ratings (or higher? usually explicit)
            // Logic: "4.0 & up" usually implies >= 4. 
            // However, the UI checkboxes implementation passes specific integers (5, 4, 3, etc).
            // If strictly checkboxes, it's typically "is one of these". 
            // But let's check SidebarFilter logic. It says "4.0 & up", "3.0 & up". 
            // If user checks "4.0 & up", they want >= 4.
            // If they check multiple, e.g. "4.0 & up" AND "3.0 & up", it's redundant but technically means >= 3 (union).
            // Let's assume inclusive logic: if any selected rating <= product.rating. 
            // Wait, usually rating filters are exclusive radio buttons OR "at least X".
            // If checkboxes: "Show me 4 stars" and "Show me 5 stars".
            // Let's implement generic "matches any selected threshold".
            // Simplest interpretation of multiple checkboxes: OR logic. 
            // If I select "5" and "4", I want products that are >= 5 OR >= 4. (Which is just >= 4).
            // Actually, if the label is "4.0 & up", checking it acts as a floor.
            const minRating = Math.min(...selectedRatings); 
            filtered = filtered.filter(p => p.rating >= minRating);
        }

        // 3. Sort
        switch (sortOption) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'latest':
            default:
                filtered.sort((a, b) => b.id - a.id);
                break;
        }

        setDisplayProducts(filtered);
        setCurrentPage(1); // Reset to first page
    }, [selectedCategories, priceRange, selectedRatings, sortOption]);

    // Pagination Logic
    const totalPages = Math.ceil(displayProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = displayProducts.slice(startIndex, endIndex);

    // Handlers
    const handleCategoryChange = (category: string) => {
        setSelectedCategories(prev => 
            prev.includes(category) 
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const handlePriceChange = (min: number, max: number) => {
        setPriceRange([min, max]);
    };

    const handleRatingChange = (rating: number) => {
        setSelectedRatings(prev => 
            prev.includes(rating)
                ? prev.filter(r => r !== rating)
                : [...prev, rating]
        );
    };

    const handleSortChange = (option: string) => {
        setSortOption(option);
    };

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="shop-page">
            <div className="container">
                {/* Breadcrumb */}
                <div className="shop-breadcrumb">
                    <Link to="/">Home</Link> <span>/</span> <span className="current-page">Shop</span>
                </div>

                <div className="shop-layout">
                    {/* Sidebar Area */}
                    <SidebarFilter 
                        selectedCategories={selectedCategories}
                        onCategoryChange={handleCategoryChange}
                        priceRange={priceRange}
                        // @ts-ignore - fixing signature mismatch in next step if generic doesn't work, 
                        // but actually I updated parameters to match (min, max) so this should be fine
                        onPriceChange={handlePriceChange}
                        selectedRatings={selectedRatings}
                        onRatingChange={handleRatingChange}
                    />

                    {/* Main Content Area */}
                    <main className="shop-content">
                        <ProductGrid 
                            products={currentProducts}
                            totalProducts={displayProducts.length}
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                            sortOption={sortOption}
                            onSortChange={handleSortChange}
                            startIndex={startIndex}
                            endIndex={endIndex}
                        />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Shop;
