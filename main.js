let form = document.querySelector('form')
let input = document.querySelector('input')
let select = document.querySelector('#size')
let image = document.querySelector('img')
let ul = document.querySelector('ul')
let blob;
let images;



const generateqr = (async (e)=>{
    e.preventDefault()
    const response= await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${size.value}&data=${input.value}`)
     image.setAttribute('src', response.url)

     blob =  await response.blob()
    let a = document.createElement('a')
    a.className = 'text-center fs-bold mt-4'
    a.innerText='Download QR'
    ul.appendChild(a)
    form.reset()

} )

ul.addEventListener('click',()=>{
    let link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'QR_downloaded.png'
    link.click()
})

form.addEventListener('submit', generateqr)


    