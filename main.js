const bedrock = require('bedrock-protocol');

client = bedrock.createClient({
    host: ip,
    port: port,
    offline: false,
    username: "username"
});

client.on('spawn', (packet) => {
    setInterval(async () => {
        client.queue('text', {
            type: 'chat', needs_translation: false, source_name: client.username, xuid: '', platform_chat_id: '',
            message: `/clear`
        });
    }, 20);
    setInterval(async () => {
        client.queue('emote', {
            entity_id: client.entityId,
            emote_id: "42fde774-37d4-4422-b374-89ff13a6535a",
            xuid: "2535439280110754",
            platform_id: "Windows"
        });
    }, 2800);
});
