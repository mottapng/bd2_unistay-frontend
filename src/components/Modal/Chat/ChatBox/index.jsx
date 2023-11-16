"use client";

import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { useAuthContext } from '@/context/AuthProvider';
import { useSocket } from '@/context/SocketProvider';
import useSWR from 'swr';
import { useSearchParams } from 'next/navigation';
import { timeAgo } from '@/utils/timeAgo';

export const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [value, setValue] = useState("");

  const { auth } = useAuthContext();
  const { socket } = useSocket();

  const searchParams = useSearchParams();

  const conversationId = searchParams.get('chat');
  let request = `${process.env.NEXT_PUBLIC_API_URL}/messages/${conversationId}`;

  const fetcher = async (url) => {
    if (searchParams.get('chat')) {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.token}`,
        },
      });

      return response.json();
    }
  };

  const { data, error, isLoading } = useSWR(request, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/messages/${conversationId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`
        },
        body: JSON.stringify({
          content: value,
        }),
      });

      if (res.status === 201)
        socket.emit('send_message', {
          conversation_id: conversationId,
          content: value,
          created_at: new Date(),
          sender_id: auth.user,
        });

    } catch (error) {
      console.log(error);
    } finally {
      setValue("");
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    const handleNewMessage = (message) => {
      setMessages(prevMessages => [message, ...prevMessages]);
    };

    socket.on('new_message', handleNewMessage);

    return () => {
      socket.off('new_message', handleNewMessage);
    };
  }, [socket]);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className={styles.chatBoxContainer}>
      <div className={styles.messagesContainer}>

        {messages.map((message, index) => (
          <div
            className={`${message.sender_id === auth.user ? styles.sentMessage : styles.receivedMessage} ${styles.message}`}
            key={index}
          >
            <p>{message.content}</p>
            <span>{timeAgo(message.created_at)}</span>
          </div>
        ))}

        {data?.messages?.toReversed().map((message, index) => (
          <div
            className={`${message.user_id === auth.user ? styles.sentMessage : styles.receivedMessage} ${styles.message}`}
            key={index}
          >
            <p>{message.message}</p>
            <span>{timeAgo(message.created_at)}</span>
          </div>
        ))}

      </div>

      <form className={styles.typeMessage} onSubmit={(e) => onSubmit(e)}>
        <input type="text" placeholder="Digite Uma Mensagem..." disabled={isSubmitting} value={value} onChange={handleChange} />
      </form>
    </div>
  )
}
