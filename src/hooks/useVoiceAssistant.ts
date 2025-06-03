
import { useState, useRef, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

export type AssistantState = 'idle' | 'listening' | 'processing' | 'speaking';

export const useVoiceAssistant = () => {
  const [state, setState] = useState<AssistantState>('idle');
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startListening = useCallback(async () => {
    try {
      setError(null);
      setState('listening');
      setTranscript('');
      setResponse('');

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        await processAudio(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
    } catch (err) {
      setError('Failed to access microphone. Please check permissions.');
      setState('idle');
      console.error('Error starting recording:', err);
    }
  }, []);

  const stopListening = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
  }, []);

  const processAudio = async (audioBlob: Blob) => {
    try {
      setState('processing');
      
      // Convert audio to base64
      const reader = new FileReader();
      const audioBase64 = await new Promise<string>((resolve) => {
        reader.onloadend = () => {
          const base64 = reader.result as string;
          resolve(base64.split(',')[1]); // Remove data:audio/webm;base64, prefix
        };
        reader.readAsDataURL(audioBlob);
      });

      // Transcribe audio
      const transcriptResponse = await supabase.functions.invoke('voice-to-text', {
        body: { audio: audioBase64 }
      });

      if (transcriptResponse.error) {
        throw new Error(transcriptResponse.error.message);
      }

      const userText = transcriptResponse.data.text;
      setTranscript(userText);

      // Get AI response
      const aiResponse = await supabase.functions.invoke('ai-chat', {
        body: { message: userText }
      });

      if (aiResponse.error) {
        throw new Error(aiResponse.error.message);
      }

      const aiText = aiResponse.data.response;
      setResponse(aiText);

      // Convert response to speech
      await speakText(aiText);

    } catch (err) {
      setError('Failed to process audio. Please try again.');
      setState('idle');
      console.error('Error processing audio:', err);
    }
  };

  const speakText = async (text: string) => {
    try {
      setState('speaking');
      
      const ttsResponse = await supabase.functions.invoke('text-to-speech', {
        body: { text, voice: 'alloy' }
      });

      if (ttsResponse.error) {
        throw new Error(ttsResponse.error.message);
      }

      // Play the audio
      const audioContent = ttsResponse.data.audioContent;
      const audioBlob = new Blob([
        new Uint8Array(atob(audioContent).split('').map(c => c.charCodeAt(0)))
      ], { type: 'audio/mp3' });
      
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      
      audio.onended = () => {
        setState('idle');
        URL.revokeObjectURL(audioUrl);
      };
      
      await audio.play();
      
    } catch (err) {
      setError('Failed to generate speech. Please try again.');
      setState('idle');
      console.error('Error generating speech:', err);
    }
  };

  return {
    state,
    transcript,
    response,
    error,
    startListening,
    stopListening,
  };
};
