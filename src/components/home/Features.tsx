import React from 'react';
import { Truck, Headset, ShieldCheck, RefreshCw } from 'lucide-react';
import './Features.css';

const Features: React.FC = () => {
    const features = [
        {
            icon: <Truck size={32} />,
            title: "Free Shipping",
            desc: "Free shipping on all your order"
        },
        {
            icon: <Headset size={32} />,
            title: "Customer Support 24/7",
            desc: "Instant access to Support"
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "100% Secure Payment",
            desc: "We ensure your money is safe"
        },
        {
            icon: <RefreshCw size={32} />,
            title: "Money-Back Guarantee",
            desc: "30 Days Money-Back Guarantee"
        }
    ];

    return (
        <section className="features-section">
            <div className="container">
                <div className="features-grid">
                    {features.map((item, index) => (
                        <div key={index} className="feature-item">
                            <div className="feature-icon">
                                {item.icon}
                            </div>
                            <div className="feature-text">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
