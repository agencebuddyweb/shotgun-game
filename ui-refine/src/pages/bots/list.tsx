

import { useList, HttpError } from "@pankod/refine-core";

import { IBot } from "../../interfaces";

export const BotList: React.FC = () => {
     
  const { data, isLoading, isError } = useList<IBot, HttpError>({
        resource: 'bots',
        config: {hasPagination:false,
       }
        
    });



    const bots = data?.data ?? [];
   if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Something went wrong!</div>;
    }

    return (
        <ul>
            {bots.map((bot) => (
                <li key={bot.id}>
                    <h4>
                        {bot.name}
                    </h4>
                </li>
            ))}
        </ul>
    );
};
