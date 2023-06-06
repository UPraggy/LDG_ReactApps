
export default async () =>{
	return new Promise ((resolve,reject) =>{
		resolve(fetch('https://webscrappingreact.herokuapp.com/LiturgiaDiaria',
			{	method :'GET'
			})
					.then(resp => resp.json())
					.catch(resp => resp))
		})
}

