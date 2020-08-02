export default {
  difficulty: (state) => state.difficulty,
  blockCount: (state) => state.blockCount,
  bcPerBlock: (state) => state.bcPerBlock,
  totalBc: (state) => state.totalBc,
  probability: (state) => state.probability,
  interval: (state) => state.interval,
  price24Hr: (state) => state.price24Hr,
  marketCap: (state) => state.marketCap,
  transactionCount24Hr: (state) => state.transactionCount24Hr,
  btcSent24Hr: (state) => state.btcSent24Hr,
  hashRate: (state) => state.hashRate,
};
