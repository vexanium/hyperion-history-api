import {FastifyInstance, FastifyPluginOptions} from "fastify";
import {Api} from "vexaniumjs/dist";
import fp from "fastify-plugin";

export default fp(async (fastify: FastifyInstance, options: FastifyPluginOptions): Promise<void> => {

	const rpc = fastify.manager.nodeosJsonRPC;
	const chain_data = await rpc.get_info();
	const api = new Api({
		rpc,
		signatureProvider: null,
		chainId: chain_data.chain_id,
		textDecoder: new TextDecoder(),
		textEncoder: new TextEncoder(),
	});
	fastify.decorate('vexaniumjs', {api, rpc});
}, {
    fastify: '>=2.0.0',
    name: 'fastify-eosjs'
});
