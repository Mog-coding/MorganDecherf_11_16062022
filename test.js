fetch('http://localhost:3000/apartment.json')



useEffect(() => {
    fetch('public/apartment.json')
    .then((resp) => resp.json())
    .then(({apartmentData}) => {setApartmentData(apartmentData)
    })
    .catch((error) => console.log(error))
}, [])