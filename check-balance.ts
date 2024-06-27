import { Connection, Keypair, PublicKey, clusterApiUrl } from "@solana/web3.js";
import bs58 from "bs58";
import "dotenv/config";
async function checkBalance() {
  // Connect to the Solana network
  const connection = new Connection(clusterApiUrl("devnet"));
  console.log("Connected to the Solana network");
  // Specify the public key of the account to check the balance for
  const publicKey = new PublicKey(
    "CR6eN9m5SZc557q4qDfFGuARN9bzruAAY8fisQrhHYNa"
  );
  const keypair = Keypair.generate();
  const privateKey = bs58.encode(keypair.secretKey);
  try {
    // Get the balance of the account
    const balance = await connection.getBalance(publicKey);

    // Display the balance
    console.log(`Balance: ${balance} SOL`);
    console.log("Private Key: ", privateKey);
  } catch (error) {
    console.error("Failed to check balance:", error);
  }
}

checkBalance();
