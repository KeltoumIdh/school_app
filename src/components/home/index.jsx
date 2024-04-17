import React, { useState, useEffect } from 'react';
import Header from "../header";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { useAuth } from '../../contexts/authContext';


const Home = () => {
   
    return (  <div>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Section gauche */}
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4">
                    {/* Prochain Cours */}
                    <h2 className="text-lg font-semibold mb-2">Prochain Cours</h2>
                    {/* Contenu des prochaines classes */}
                </div>

                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4">
                    {/* Totaux d'Absences */}
                    <h2 className="text-lg font-semibold mb-2">Totaux d'Absences</h2>
                    {/* Contenu des totaux d'absences */}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                {/* Section droite */}
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4">
                    {/* Calendrier des Événements Académiques */}
                    <h2 className="text-lg font-semibold mb-2">Calendrier des Événements Académiques</h2>
                    {/* Contenu du calendrier des événements académiques */}
                </div>

                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4">
                    {/* Résultats des Examens */}
                    <h2 className="text-lg font-semibold mb-2">Résultats des Examens</h2>
                    {/* Contenu des résultats des examens */}
                </div>
            </div>
        </div>
    </div>
    );
    
};

export default Home;