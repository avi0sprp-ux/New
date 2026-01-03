const [board, setBoard] = useState(chess.board());
  const [waitings, setWaitings] = useState(false);
  const [color, setColor] = useState("w");
  const [winner, setWinner] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (chess.isGameOver()) {
        if (chess.isCheckmate()) {
            setWinner(chess.turn() === 'w' ? "Black" : "White");
        } else if (chess.isDraw()) {
            setWinner("Draw");
        } else {
            setWinner("Game Over");
        }
    }
  }, [board, chess]);

  useEffect(() => {
    if(!socket){
        return;
          console.log("Game initialized");
          setColor(message.payload.color);
          setWaitings(false);
          setWinner(null);
          break;
        }
        case MOVE: {
        case GAME_OVER:
          // Game over, display a message
          console.log("Game over");
          setWinner(message.payload.winner);
          break;
        default:
          console.error("Unknown message type:", message.type);
      }
    };
  }, [socket, chess]);
  if (!socket) return <div>Connecting...</div>;
  // if (!socket) return <div>Connecting...</div>;
  if (waitings) {
    return <div>Waiting for opponent...</div>;
  }
  return (
    <div className="bg-black text-white flex flex-col min-h-screen justify-center items-center">
      {color && <div
    <div className="bg-black text-white flex flex-col min-h-screen justify-center items-center relative">
      {winner && (
        <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center z-50">
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-600 flex flex-col items-center gap-6">
                <h2 className="text-4xl font-bold text-white">
                    {winner === "Draw" ? "Game Drawn!" : ${winner} Wins!}
                </h2>
                <BlackButton
                  title="Play Again"
                  titleSize="text-2xl"
                  styles="px-8 py-4"
                  onClick={() => {
                    setWinner(null);
                    setChess(new Chess());
                    setBoard(new Chess().board());
                    if (socket) {
                         socket.send(JSON.stringify({ type: INIT_GAME }));
                         setWaitings(true);
                    }
                  }}
                />
            </div>
        </div>
      )}
      <div
        className={font-bold text-3xl px-6 py-3 rounded-xl shadow-md transition-all duration-300
    ${
      color === "w"
        ? "bg-white text-black border border-gray-300"
        : "bg-gray-800 text-white border border-gray-600"
      socket
        ? color === "w"
          ? "bg-white text-black border border-gray-300"
          : "bg-gray-800 text-white border border-gray-600"
        : "bg-green-600 text-white border border-green-800"
    }}
      >
        Your's is {color === "w" ? "White" : "Black"}
      </div>}
        {socket ? Your's is ${color === "w" ? "White" : "Black"} : "Local Game"}
      </div>

      <div className="flex justify-center items-center gap-[200px] px-[90px] py-[40px]">
        <ChessBoard
          titleSize="text-4xl"
          styles="p-5"
          onClick={() => {
            socket.close();
            socket?.close();
            navigate("/wannaPlay");
          }}
        ></BlackButton>
