import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { Protocol } from '../target/types/protocol';

describe('protocol', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.Protocol as Program<Protocol>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
