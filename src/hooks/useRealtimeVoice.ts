import { useState, useEffect, useRef } from 'react';

interface UseRealtimeVoiceOptions {
  onMessage?: (message: unknown) => void;
}

export const useRealtimeVoice = ({ onMessage }: UseRealtimeVoiceOptions) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const connectionRef = useRef<WebSocket | null>(null);

  const connect = () => {
    if (isConnected || isConnecting) return;
    setIsConnecting(true);

    // Example: Replace with your real backend/WebSocket endpoint
    const ws = new WebSocket('wss://example.com/realtime-voice');

    ws.onopen = () => {
      setIsConnecting(false);
      setIsConnected(true);
    };

    ws.onmessage = (event) => {
      let data: unknown = event.data;
      try {
        data = JSON.parse(event.data);
      } catch {
        // not JSON, leave as string
      }
      onMessage?.(data);
    };

    ws.onclose = () => {
      setIsConnected(false);
      connectionRef.current = null;
    };

    ws.onerror = () => {
      setIsConnecting(false);
      setIsConnected(false);
      connectionRef.current = null;
    };

    connectionRef.current = ws;
  };

  const disconnect = () => {
    connectionRef.current?.close();
    connectionRef.current = null;
    setIsConnected(false);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      disconnect();
    };
  }, []);

  return {
    isConnecting,
    isConnected,
    connect,
    disconnect
  };
};
