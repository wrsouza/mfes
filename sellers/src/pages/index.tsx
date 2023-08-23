import Link from "next/link";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type SellersProps = {
  data: User[];
};

export default function Sellers({ data }: SellersProps) {
  return (
    <div className="container">
      <h1>Sellers</h1>
      <table className="table">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Username</td>
            <td>E-mail</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, username, email }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{username}</td>
              <td>{email}</td>
              <td>
                <Link
                  href={`/sellers/${id}`}
                  className="btn btn-primary btn-sm"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  style={{ marginLeft: 10 }}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  return { props: { data } };
}
