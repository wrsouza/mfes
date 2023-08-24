import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Link from "next/link";
import useNextHostTranslation from "../i18n/useNextHostTranslation";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type SellersProps = {
  data: User;
};

export default function EditSeller({ data }: SellersProps) {
  const { t } = useNextHostTranslation('sellers-i18n');

  return (
    <div className="container">
      <h1>Edit Seller {data.id}</h1>
      <div>
        <p>{t('fieldName')}: {data.name}</p>
        <p>{t('fieldUsername')}: {data.username}</p>
        <p>{t('fieldEmail')}: {data.email}</p>
      </div>
      <Link href="/sellers" className="btn btn-primary btn-sm">
        Voltar
      </Link>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { id } = context.query;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return { props: { data } };
}