import Link from "next/link";
import { useRouter } from "next/router";

export default function EditSeller() {
  const router = useRouter();

  return (
    <div className="container">
      <h1>Edit Seller {router.query.id}</h1>
      <Link href="/sellers" className="btn btn-primary btn-sm">
        Voltar
      </Link>
    </div>
  );
}
