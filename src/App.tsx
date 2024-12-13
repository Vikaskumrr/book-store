import React from 'react';
import Card from './components/card/card';
import './styles/global.scss'; 

const App: React.FC = () => {
    return (
        <div className="container"> 
            <Card title="Explore Books">
                {/* Content for Explore Books card */}
                <p>Discover a world of reading!</p>
                {/* ...add buttons or links here */}
            </Card>

            <Card title="Your Collection">
                {/* Content for Your Collection card */}
                <p>Your saved books will appear here.</p>
                {/* ...add book list or grid here */}
            </Card>
        </div>
    );
};

export default App;