"use client"

import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { GrFormClose } from 'react-icons/gr'
import { SelectOne } from '../../SelectOne'
import { ChatBox } from './ChatBox'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useSocket } from '@/context/SocketProvider'
import useSWR from 'swr'
import { useAuthContext } from '@/context/AuthProvider'
import Link from 'next/link'

export const Chat = ({ handleClose }) => {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(true);
  const [loadingStatus, setLoadingStatus] = useState('loading');

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const conversationId = searchParams.get('chat');
  const { socket } = useSocket();

  const { auth } = useAuthContext();

  let request = `${process.env.NEXT_PUBLIC_API_URL}/conversations`;

  const fetcher = async (url) => {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth.token}`,
      },
    });

    const data = await response.json();

    if (!searchParams.get('chat')) {
      const params = new URLSearchParams(searchParams)
      params.set("chat", data.conversations[0].conversation_id)
      router.push(pathname + '?' + params.toString());


      if (data.conversations[0].renter_id === auth.user) {
        setValue({
          value: data.conversations[0].conversation_id,
          label: data.conversations[0].locator.name
        })
      } else {
        setValue({
          value: data.conversations[0].conversation_id,
          label: data.conversations[0].renter.name
        })
      }
    } else {
      const conversation = data.conversations.find(conversation => conversation.conversation_id === conversationId)

      if (conversation.renter_id === auth.user) {
        setValue({
          value: conversation.conversation_id,
          label: conversation.locator.name
        })
      } else {
        setValue({
          value: conversation.conversation_id,
          label: conversation.renter.name
        })
      }
    }

    const options = data.conversations.map(conversation => {
      if (conversation.renter_id === auth.user) {
        return {
          value: conversation.conversation_id,
          label: conversation.locator.name,
        };
      } else {
        return {
          value: conversation.conversation_id,
          label: conversation.renter.name,
        };
      }
    });

    setOptions(options);

    return data;
  };

  const { data, error, isLoading } = useSWR(request, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshInterval: 1000
  });

  useEffect(() => {
    if (conversationId)
      socket.emit('join_conversation', conversationId)
  }, [socket, conversationId]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams)

    if (value?.value && value?.value !== conversationId) {
      params.set("chat", value.value)
      router.push(pathname + '?' + params.toString());
    }
  }, [conversationId, pathname, router, searchParams, value]);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (loading) {
        setLoadingStatus('not found');
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [loading]);

  const renderLoading = () => {
    return (
      <div className={styles.loadingContainer}>
        {loadingStatus !== 'not found' ?
          <svg viewBox="25 25 50 50" className={styles.svg}>
            <circle r="20" cy="50" cx="50"></circle>
          </svg>
          :
          <div
            className={styles.chatContainer}
            style={{
              padding: (loading && loadingStatus !== 'not found') && "0",
              position: (loading && loadingStatus !== 'not found') && "absolute",
              backgroundColor: "#fff",
              borderRadius: "10px",
            }}
          >
            <GrFormClose className={styles.closeIcon} onClick={handleClose} />
            <h2>Você ainda não possui nenhuma conversa 🫠</h2>
            <Link href="/listings/?page=1&q=" onClick={handleClose}>Buscar Repúblicas</Link>
          </div>
        }
      </div>
    );
  };

  return (
    <div className={styles.chatContainer} style={{ padding: loading && "0", position: loading && "absolute" }}>
      {!loading ?
        <>
          <GrFormClose className={styles.closeIcon} onClick={handleClose} />
          <h1>Chat</h1>
          <SelectOne
            options={options}
            value={value}
            setValue={setValue}
            label="Selecione o Chat"
            search={true}
          />
          <ChatBox />
        </>
        :
        renderLoading()
      }
    </div>
  )
}