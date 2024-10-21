import { notFound } from 'next/navigation'
export default function Product({ params} : { params: { productId: string } }) {
	if (parseInt(params.productId) >= 1000) {
		notFound()
	}

	return (
	  <div>
		<h1>Detail of Product ID - {params.productId}</h1>
	  </div>
	);
  }
