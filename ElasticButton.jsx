import React from 'react';
import { motion } from 'framer-motion';

const ElasticButton = ({ children, onClick, className = "", type = "button" }) => {
    return (
        <motion.button
            type={type}
            onClick={onClick}
            className={`elastic-button ${className}`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            {children}
        </motion.button>
    );
};

export default ElasticButton;
