export default function Docs ({ params } : { params: { slug: string[] } }) {
  return (
	<div>
	  <h1>Docs { params.slug[0] } | { params.slug[1] } | { params.slug[2] } </h1>
	</div>
  );
}
