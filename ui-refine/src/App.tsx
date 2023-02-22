import React from 'react'
import { Refine } from '@pankod/refine-core'
import routerProvider from '@pankod/refine-react-router-v6'
import dataProvider from '@pankod/refine-simple-rest'

import { BotCreate, BotShow, BotList } from 'pages/bots'

import { NavBar } from "partials/navbar/navbar";
import About from './pages/about/about'

const API_URL = 'http://localhost:4000'

const App: React.FC = () => {
    return (
        
        <Refine
         dataProvider={dataProvider(API_URL)}
            routerProvider={{
                ...routerProvider,
                routes: [
                    {
                        element: <About/>,
                        path: "/about-us",
                        layout: true
                    },
                   
                ] as typeof routerProvider.routes,
            }}
            resources={[
                {
                    name: "bots",
                    show: BotShow,
                    create: BotCreate,
                    list:BotList   
                },
            ]}
            Layout={NavBar}
        />
        
       
       

    );
};

export default App
