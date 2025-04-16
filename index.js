import { Client, Events, GatewayIntentBits } from "discord.js"
import { readFile } from "fs/promises";

//Getting the token
const config = JSON.parse(await readFile(new URL("./config.json", import.meta.url)))

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
client.login(config.token);