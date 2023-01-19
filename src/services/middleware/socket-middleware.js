

export const socketMiddleware = (wsActions) => {
    return store => {
      let socket = null;
  
      return next => action => {
        const { dispatch } = store;
        const { wsConnect, wsSendMessage, onOpen, onClose, onError, onMessage, wsConnecting, wsDisconnect } = wsActions;
        if (wsConnect.match(action)) {
          socket = new WebSocket(action.payload);
          dispatch(wsConnecting())
        }
        if (socket) {
          socket.onopen = event => {
            dispatch(onOpen());
          };
  
          socket.onerror = event => {
            dispatch(onError('Error'));
          };
  
          socket.onmessage = event => {
            const { data } = event;
            const parsedData = JSON.parse(data);
            dispatch(onMessage(parsedData));
          };
  
          socket.onclose = event => {
            dispatch(onClose());
          };
  
          if (wsSendMessage.match(action)) {
            socket.send(JSON.stringify(action.payload));
          }
          if (wsDisconnect.match(action)) {
            socket.close();
            socket = null;
          }
        }
  
        next(action);
      };
    };
  };