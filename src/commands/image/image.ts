import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("snow")
    .setDescription("Sends a random image of Snow"),
  async execute(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply();
    const imageResponse = await fetch(
      "https://snowapi-vercel.vercel.app/cat"
    );
    const imageData = Buffer.from(await imageResponse.arrayBuffer());
    console.log(imageData.length);
    await interaction.followUp({ files: [imageData] });
  },
};
