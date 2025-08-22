const { setGlobalDispatcher, ProxyAgent } = require('undici');
const agent = new ProxyAgent(process.env.HTTPS_PROXY || process.env.HTTP_PROXY);
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
setGlobalDispatcher(agent);
console.log('[proxy-preload] on', agent && agent.proxy ? agent.proxy : '');
