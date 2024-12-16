import { zeroAddress } from "viem";
import { client } from "./utils";

async function main() {
    const newCollection = await client.nftClient.createNFTCollection({
        name: 'Dall-E NFTs',
        symbol: 'DALLE',
        isPublicMinting: true,
        mintOpen: true,
        mintFeeRecipient: zeroAddress,
        contractURI: '',
        txOptions: {
            waitForTransaction: true,
        },
    })

    console.log(newCollection)
}

main()