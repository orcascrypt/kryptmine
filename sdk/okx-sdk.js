/*! Placeholder for OKX SDK UMD version */
window.CoinWeb3Connect = {
  connect: async ({ providerType, chainId }) => {
    if (!window.ethereum) throw new Error("No wallet found");
    await window.ethereum.request({ method: "eth_requestAccounts" });
    return window.ethereum;
  }
};
