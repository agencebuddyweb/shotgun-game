import React from 'react'
import { Refine } from '@pankod/refine-core'
import routerProvider from '@pankod/refine-react-router-v6'
import dataProvider from '@pankod/refine-simple-rest'

import { BotCreate, BotList } from 'pages/bots'

const API_URL = 'http://localhost:4000'

const App: React.FC = () => {
    return (
        <Refine
            routerProvider={routerProvider}
            dataProvider={dataProvider(API_URL)}
            resources={[
                {
                    name: "bots",
                    create: BotCreate,
                    list:BotList
                   
                },
            ]}
        />
    );
};

export default App
