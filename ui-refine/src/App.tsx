import React from "react";
import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";

import { BotCreate } from "pages/bots";

const API_URL = "https://api.fake-rest.refine.dev";



const App: React.FC = () => {
    return (
        <Refine
            routerProvider={routerProvider}
            dataProvider={dataProvider(API_URL)}
            resources={[
                {
                    name: "bots",
                    create: BotCreate,
                   
                },
            ]}
        />
    );
};

export default App;
