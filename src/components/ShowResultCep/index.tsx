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
    <div>
      <div>{data.localidade}</div>
      <div>{data.bairro}</div>
      <div>{data.uf}</div>
      <div>{data.localidade}</div>
      <div>{data.logradouro}</div>
      <div>{data.ddd}</div>
      <div>{data.cep}</div>
    </div>

  )
}
