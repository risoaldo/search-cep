import axios from 'axios';
import Head from 'next/head';
import { FormEvent, useState } from 'react';
import ShowResultCep from '../components/ShowResultCep';

import styles from './index.module.scss';

interface ResponseDataProps {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  localidade: string;
  logradouro: string;
  uf: string;
}
export default function Home() {

  const [cep, setCep] = useState('');
  const [dataCep, setDataCep] = useState<ResponseDataProps>({} as ResponseDataProps)

  async function handleSearchCep(event: FormEvent) {
    event.preventDefault();

    if (cep.trim() === '') {
      alert('Digite algum CEP!')
      return;
    }

    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if(data.erro){
        alert('Digite um CEP válido!');
        return
      }
      setDataCep({
        cep: data.cep,
        bairro: data.bairro,
        ddd: data.ddd,
        uf: data.uf,
        complemento: data.complemento,
        localidade: data.localidade,
        logradouro: data.logradouro
      });

    } catch (err) {
      alert(err)
    }



  }
  return (
    <>
      <Head>
        <title>Search CEP</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.content}>
          <form>
            <input
              onChange={e => setCep(e.target.value)}
              value={cep}
              type="text"
              name="cep"
              maxLength={8}
            />

            <button
              onClick={handleSearchCep}
              type="submit"
            >
              Buscar
            </button>
          </form>
          {
            dataCep
            && <ShowResultCep data={dataCep} />
          }
        </div>
        <div>
          <img src="/images/background.png" alt="location" />
        </div>
      </main>
    </>
  )
}
