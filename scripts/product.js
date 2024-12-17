const detailsPage = document.querySelector('.details')
const BASE_URL = 'https://dummyjson.com'

async function fetchSingleProduct() {
	try {
		let params = new URLSearchParams(window.location.search)
		const response = await fetch(`${BASE_URL}/products/${params.get('id')}`)
		if (!response.ok) {
			throw new Error(`Error: ${response.status}`)
		}
		const data = await response.json()
	} catch (e) {
		console.log(e.message)
	} finally {
	}
}

window.onload = () => {
	fetchSingleProduct()
}
