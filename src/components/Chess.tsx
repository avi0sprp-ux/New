type: PieceSymbol;
    color: Color;
  } | null)[][];
  socket: WebSocket;
  socket: WebSocket | null;
  setBoard: (
    board: ({
      square: Square;
                      // Selecting the first square (from)
                      if (
                        piece &&
                        piece.color === color &&
                        playerTurn === color
                        (socket
                          ? piece.color === color && playerTurn === color
                          : piece.color === playerTurn)
                      ) {
                        setFrom(squareRepresentation);
                        const moves = chess.moves({
                      }
                    } else {
                      // Selecting the target square (to)
                      if (playerTurn === color) {
                        socket.send(
                          JSON.stringify({
                            type: MOVE,
                            payload: {
                              from: from,
                              to: squareRepresentation,
                            },
                          })
                        );
                      if (!socket || playerTurn === color) {
                        if (socket) {
                          socket.send(
                            JSON.stringify({
                              type: MOVE,
                              payload: {
                                from: from,
                                to: squareRepresentation,
                              },
                            })
                          );
                        }
                        try {
                          chess.move({
                            from: from,
