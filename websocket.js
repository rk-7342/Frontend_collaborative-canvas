const WS_URL = (location.protocol === 'https:' ? 'wss://' : 'ws://') + location.host;
const socket = io(WS_URL);
function joinRoom(roomId = 'default'){ socket.emit('join', { roomId }); }
window.socket = socket;
window.joinRoom = joinRoom;