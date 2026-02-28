import React, { useState } from 'react';
import { Home, Map as MapIcon, BookOpen, Calendar, ShieldAlert, Navigation, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './components/GlassCard';
import ElasticButton from './components/ElasticButton';
import { campusData } from './data/campusData';

function App() {
    const [activeTab, setActiveTab] = useState('home');
    const [searchQuery, setSearchQuery] = useState('');

    const tabs = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'map', label: 'Map', icon: MapIcon },
        { id: 'departments', label: 'Departments', icon: BookOpen },
        { id: 'events', label: 'Events', icon: Calendar },
        { id: 'emergency', label: 'Emergency', icon: ShieldAlert },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            {campusData.home.title}
                        </h1>
                        <p className="text-lg text-gray-300 max-w-2xl">{campusData.home.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {campusData.home.stats.map((stat, idx) => (
                                <GlassCard key={idx} className="p-6 flex flex-col items-center">
                                    <span className="text-3xl font-bold text-accent-color">{stat.value}</span>
                                    <span className="text-gray-400">{stat.label}</span>
                                </GlassCard>
                            ))}
                        </div>
                        <ElasticButton onClick={() => setActiveTab('map')}>
                            <Navigation className="w-5 h-5" /> Start Navigating
                        </ElasticButton>
                    </motion.div>
                );
            case 'departments':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {campusData.departments.map(dept => (
                            <GlassCard key={dept.id} className="p-6">
                                <h3 className="text-xl font-bold mb-2">{dept.name}</h3>
                                <p className="text-sm text-accent-color mb-2">{dept.building} • {dept.floor} Floor</p>
                                <p className="text-gray-400">{dept.description}</p>
                            </GlassCard>
                        ))}
                    </div>
                );
            case 'events':
                return (
                    <div className="space-y-4">
                        {campusData.events.map(event => (
                            <GlassCard key={event.id} className="p-4 flex justify-between items-center">
                                <div>
                                    <h3 className="font-bold">{event.name}</h3>
                                    <p className="text-sm text-gray-400">{event.location}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-accent-color font-bold">{event.date}</p>
                                    <ElasticButton className="py-1 px-4 text-xs mt-2">Remind Me</ElasticButton>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                );
            case 'emergency':
                return (
                    <GlassCard className="p-8 border-red-500/30">
                        <h2 className="text-2xl font-bold text-red-400 mb-6 font-poppins">Emergency Contacts</h2>
                        <div className="space-y-4">
                            {campusData.emergency.contacts.map((contact, idx) => (
                                <div key={idx} className="py-3 border-b border-white/10 flex justify-between items-center last:border-0">
                                    <span className="font-medium">{contact.name}</span>
                                    <a href={`tel:${contact.phone}`} className="text-accent-color hover:underline">{contact.phone}</a>
                                </div>
                            ))}
                        </div>
                        <ElasticButton className="w-full mt-8 !bg-red-500 hover:!bg-red-600">
                            Call SOS Support
                        </ElasticButton>
                    </GlassCard>
                );
            case 'map':
                return (
                    <GlassCard className="h-[500px] flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
                        <div className="text-center z-10 p-8">
                            <MapIcon className="w-16 h-16 mx-auto mb-4 text-accent-color animate-pulse" />
                            <h2 className="text-2xl font-bold mb-2">Interactive Campus Map</h2>
                            <p className="text-gray-400 mb-6">Explore the multi-layered interactive map of the university.</p>
                            <div className="flex gap-4 justify-center">
                                <ElasticButton className="bg-white/10 !text-white border border-white/20">2D View</ElasticButton>
                                <ElasticButton>3D View</ElasticButton>
                            </div>
                        </div>
                    </GlassCard>
                );
            default:
                return <div>Select a tab</div>;
        }
    };

    return (
        <div className="layout">
            {/* Sidebar Navigation */}
            <GlassCard className="sidebar flex flex-col gap-8">
                <div className="flex items-center gap-3 px-2">
                    <div className="p-2 bg-accent-color rounded-xl">
                        <Navigation className="text-slate-900" />
                    </div>
                    <span className="text-xl font-bold font-poppins tracking-tight">C-NAV</span>
                </div>

                <nav className="flex-1">
                    <ul className="flex flex-col gap-2">
                        {tabs.map(tab => (
                            <li
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${activeTab === tab.id ? 'bg-white/20 text-white shadow-lg' : 'text-gray-400 hover:bg-white/10'}`}
                            >
                                <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-accent-color' : ''}`} />
                                <span className="font-medium">{tab.label}</span>
                            </li>
                        ))}
                    </ul>
                </nav>

                <GlassCard className="p-4 bg-white/5">
                    <p className="text-xs text-gray-500 mb-2">Need help?</p>
                    <ElasticButton className="w-full text-xs py-2">Guide Book</ElasticButton>
                </GlassCard>
            </GlassCard>

            {/* Main Content Area */}
            <div className="main-content flex flex-col gap-6">
                <header className="flex justify-between items-center py-2">
                    <div className="relative w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search departments, buildings..."
                            className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:border-accent-color/50 transition-colors"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 cursor-pointer border-2 border-white/20"></div>
                    </div>
                </header>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {renderContent()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default App;
