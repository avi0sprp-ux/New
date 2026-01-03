const [socket, setSocket] = useState<WebSocket | null>(null);
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_WSS_SERVER;
    if (!apiUrl) {
      console.warn("VITE_WSS_SERVER not set. Socket connection skipped.");
      setSocket(null);
      return;
    }
    const ws = new WebSocket(apiUrl);
    ws.onopen = () => setSocket(ws);
    ws.onclose = () => setSocket(null);
