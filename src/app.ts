import { DiscoPartyBot } from "./bot/DiscoPartyBot";

// define start
const startApp = async () => {

    try {
        let discoPartyBot = new DiscoPartyBot();
        await discoPartyBot.init();
    }
    catch (error) {
        console.log(error);
    }

};

startApp();