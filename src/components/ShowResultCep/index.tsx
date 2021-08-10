import styles from './styles.module.scss';

interface ResponseDataProps {
  data: {
    bairro: string;
    cep: string;
    complemento: string;
    ddd: string;
    localidade: string;
    logradouro: string;
    uf: string;
  }
}
export default function ShowResultCep({ data }: ResponseDataProps) {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <th>Localidade</th>
          <th>Bairro</th>
          <th>Estado</th>
          <th>Logradouro</th>
          <th>DDD</th>
          <th>CEP</th>
        </thead>

        <tr>
          <th>{data.localidade}</th>
          <th>{data.bairro}</th>
          <th>{data.uf}</th>
          <th>{data.logradouro}</th>
          <th>{data.ddd}</th>
          <th>{data.cep}</th>
        </tr>
      </table>
    </div>
  )
}
